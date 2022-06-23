import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Detail() {
  const [billion, setBillion] = useState(null);
  const [toggleMore, setToggleMore] = useState(false);
  const router = useRouter();
  const fetcher = async () => {
    const ref = await (
      await fetch(
        `https://billions-api.nomadcoders.workers.dev/person/${router.query.id}`
      )
    ).json();
    return ref;
  };
  useEffect(() => {
    if (router.query.id) {
      fetcher().then((item) => setBillion(item));
    }
  }, [router]);
  const onGoBack = () => router.back();
  const onToggleMore = () => setToggleMore((prev) => !prev);
  return (
    <div className="container">
      <nav className="nav">
        <div className="back" onClick={onGoBack} style={{ cursor: "pointer" }}>
          &larr; Go back
        </div>
        <h1>{billion?.name}</h1>
      </nav>
      <div className="detail_box">
        <div className="photo">
          {billion?.squareImage === "https:undefined" ? (
            <div
              style={{
                width: 416,
                height: 416,
                background: "#666",
                borderRadius: 20,
              }}
            />
          ) : (
            <img src={billion?.squareImage} />
          )}
        </div>
        <div className="info_box">
          <div>
            Nationality:{" "}
            <span style={{ fontWeight: 600 }}>{billion?.country}</span>
          </div>
          <div>
            industries:{" "}
            {billion?.industries?.map((industry, idx) => (
              <span style={{ fontWeight: 600 }} key={industry + (idx + "")}>
                {industry}
              </span>
            ))}
          </div>
          <div>
            Asset Worth: ${" "}
            <span style={{ fontWeight: 600 }}>
              {Math.round(billion?.netWorth / 1000)}B
            </span>
          </div>
          <div className="financial_assets">
            Financial Assets
            <br />
            <span>[Company, Shares]:</span>
          </div>
          <div
            className={
              billion?.financialAssets?.length > 5
                ? "assets asset_base"
                : "asset_base"
            }
          >
            {billion?.financialAssets?.map((asset, idx) => (
              <div
                style={{
                  padding: 5,
                  fontWeight: 200,
                  fontSize: 16,
                }}
                key={asset + (idx + "")}
              >
                [{asset.companyName},{" "}
                {asset.numberOfShares
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                ]
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="description" style={{ padding: 20 }}>
        <div style={{ fontSize: 26 }}>About : </div>
        <div style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20 }}>
          {billion?.about ? (
            <div>
              {billion?.about?.map((description) => (
                <div
                  key={description}
                  style={{ fontSize: 18, marginBottom: 5 }}
                >
                  &middot; {description}
                </div>
              ))}
              <span
                onClick={onToggleMore}
                className={toggleMore ? "hidden" : ""}
                style={{ cursor: "pointer" }}
              >
                more...
              </span>
              <div className={toggleMore ? "" : "hidden"}>
                {billion?.bio.map((more) => (
                  <div style={{ fontSize: 18, marginBottom: 5 }} key={more}>
                    {" "}
                    &middot; {more}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            billion?.bio.map((more) => (
              <div style={{ fontSize: 18, marginBottom: 5 }} key={more}>
                {" "}
                &middot; {more}
              </div>
            ))
          )}
        </div>
      </div>
      <style jsx>{`
        .hidden {
          display: none;
        }
        .container {
          width: 100%;
        }
        .nav {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .back {
          position: absolute;
          left: 4%;
        }
        .detail_box {
          width: 90%;
          display: flex;
          flex-flow: row wrap;
          justify-content: start;
          align-items: start;
          margin-left: 10%;
        }
        .photo {
          padding: 10px 3%;
        }
        .photo img {
          border-radius: 5%;
          box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
            0 8px 16px -8px rgba(0, 0, 0, 0.3),
            0 -6px 16px -6px rgba(0, 0, 0, 0.025);
        }
        .info_box {
          width: fit-content;
          display: flex;
          flex-flow: column wrap;
          padding-left: 5%;
        }
        .info_box div {
          padding: 10px;
          font-size: 20px;
        }
        .financial_assets {
          width: 80%;
        }
        .asset_base {
          max-height: 180px;
          width: 90%;
        }
        .assets {
          overflow-y: scroll;
        }
        .description {
          width: 80%;
          margin: 0 auto;
          display: flex;
          flex-flow: column wrap;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
