import { useLoginForm } from "../hooks/use-login-form";

export function LoginForm() {
  const { handleChange, handleSubmit } = useLoginForm();

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 10, width: 300 }}
    >
      <input
        onChange={handleChange}
        name="emailOrUsername"
        placeholder="Email/Username"
        style={{
          padding: 10,
          color: "white",
          outline: "none",
          border: "1px solid white",
          borderRadius: 5,
        }}
      />
      <input
        onChange={handleChange}
        name="password"
        placeholder="Password"
        style={{
          padding: 10,
          color: "white",
          outline: "none",
          border: "1px solid white",
          borderRadius: 5,
        }}
      />
      <div style={{ display: "flex", justifyContent: "end" }}>
        <p style={{ color: "white" }}>Forgot password?</p>
      </div>
      <button
        style={{
          backgroundColor: "#04A51E",
          padding: 10,
          color: "white",
          fontWeight: "bold",
          fontSize: 14,
        }}
      >
        Login
      </button>
      <div>
        <p style={{ color: "white" }}>
          Don't have an account yet? Create account
        </p>
      </div>
    </form>
  );
}
