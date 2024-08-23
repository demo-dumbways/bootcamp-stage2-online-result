import { useContext } from "react";
import { AuthContext } from "../../../context/auth";

export default function RightPanel() {
  const { state } = useContext(AuthContext);

  return (
    <div style={{ color: "white" }}>
      <h1>Logged in User </h1>
      <h1>ID : {state.user?.id}</h1>
      <h1>Full Name : {state.user?.fullName}</h1>
      <h1>Email : {state.user?.email}</h1>
    </div>
  );
}
