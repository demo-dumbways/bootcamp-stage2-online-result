import { RegisterForm } from "../../features/auth/register-form";

export function RegisterRoute() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <h1
          style={{
            color: "#04A51E",
          }}
        >
          Circle
        </h1>
        <h1
          style={{
            color: "white",
          }}
        >
          Create account Circle
        </h1>
        <RegisterForm />
      </div>
    </div>
  );
}
