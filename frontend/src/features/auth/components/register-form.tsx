import { useRegisterForm } from "../hooks/use-register-form";

export function RegisterForm() {
  const { handleChange, handleSubmit } = useRegisterForm();

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 10, width: 300 }}
    >
      <input
        onChange={handleChange}
        name="fullName"
        placeholder="Full Name"
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
        name="email"
        placeholder="Email"
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
      <button
        style={{
          backgroundColor: "#04A51E",
          padding: 10,
          color: "white",
          fontWeight: "bold",
          fontSize: 14,
        }}
      >
        Create
      </button>
    </form>
  );
}
