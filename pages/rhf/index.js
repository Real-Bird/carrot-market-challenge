import { useState } from "react";
import { useForm } from "react-hook-form";

export default function IndexPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  const [valid, setValid] = useState("");
  const onValid = (form) => {
    setValid("Thank you");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <div>
          <div className="label">Name: </div>
          <input
            {...register("name", { required: "Plz write down your name" })}
            type="text"
            id="name"
          />
          <span className="error">{errors.name?.message}</span>
        </div>
        <div>
          <div className="label">Email: </div>
          <input
            {...register("email", {
              required: "Plz write down your Email",
              validate: {
                notNaver: (value) =>
                  value.includes("@naver") || "Only @naver emails allowed",
              },
            })}
            type="email"
            id="email"
            placeholder="Only @naver emails allowed"
          />
          <span className="error">{errors.email?.message}</span>
        </div>
        <div>
          <div className="label">Password: </div>
          <input
            {...register("password", {
              required: "Plz write down your Password",
              minLength: {
                message: "Password has to more than 10 characters",
                value: 10,
              },
            })}
            placeholder="Min 10 characters"
            type="password"
            id="password"
          />
          <span className="error">{errors.password?.message}</span>
        </div>
        <button type="submit">Log in</button>
        <div>{valid}</div>
      </form>
      <style jsx>{`
        form {
          margin: 10px 20px;
        }
        .label {
          width: 5rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 5px;
          text-align: justify;
        }
        input {
          border: 1px solid black;
          width: 15rem;
          padding-left: 3px;
        }
        .error {
          padding: 0 5px;
        }
      `}</style>
    </div>
  );
}
