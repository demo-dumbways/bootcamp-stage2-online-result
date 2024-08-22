export function RegisterForm() {
  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 10, width: 300 }}>
      <input
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
