import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [billions, setBillions] = useState(null);
  const fetcher = async () =>
    await (await fetch("https://billions-api.nomadcoders.workers.dev/"))
      .json()
      .then((item) => setBillions(item));
  useEffect(() => {
    fetcher();
  }, []);
  return (
    <div className="container">
      <div className="billion_box">
        {billions?.map((item) => (
          <Link key={item.id} href={`/billion/${item.id}`}>
            <a className="info_box">
              {item.squareImage === "https:undefined" ? (
                <div
                  className="photo"
                  style={{
                    background: "#666",
                  }}
                />
              ) : (
                <img className="photo" src={item.squareImage} />
              )}
              <div>
                <div className="name">
                  {item.name.length > 26
                    ? item.name.slice(0, 26) + "..."
                    : item.name}
                </div>
                <div className="info">
                  <span>{Math.round(item.netWorth / 1000)} Billion / </span>
                  <span>{item.industries[0]}</span>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
      <style jsx>{`
        .container {
          width: 100%;
        }
        .billion_box {
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          align-items: center;
        }
        .info_box {
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: start;
          padding: 10px 10px;
        }
        .info_box:hover {
          transform: scale(1.1);
          cursor: pointer;
        }
        .photo {
          width: 240px;
          height: 280px;
          border-radius: 5%;
          box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
            0 8px 16px -8px rgba(0, 0, 0, 0.3),
            0 -6px 16px -6px rgba(0, 0, 0, 0.025);
        }
        .name {
          font-size: 1.1rem;
        }
        .info {
          font-size: 0.8rem;
        }
      `}</style>
    </div>
  );
}
