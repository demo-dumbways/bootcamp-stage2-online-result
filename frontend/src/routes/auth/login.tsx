import { LoginForm } from "../../features/auth/login-form";

export function LoginRoute() {
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
          Login to Circle
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
