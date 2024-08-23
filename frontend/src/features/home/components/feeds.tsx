import { useContext } from "react";
import { AuthContext } from "../../../context/auth";

export function Feeds() {
  const { dispatch } = useContext(AuthContext);

  return (
    <button
      style={{ backgroundColor: "white" }}
      onClick={() =>
        dispatch({
          type: "SET_USER",
          payload: {
            id: "123",
            email: "mantap@gmail.com",
            fullName: "mantap",
          },
        })
      }
    >
      Login
    </button>
  );
}
