import { useContext } from "react";
import UserContext from "../context/UserContext";

function ChangeUser() {
   const { user, setUser } = useContext(UserContext);

   return (
      <button onClick={() => setUser(user === "Bohdan" ? "Elizabeth" : "Bohdan")}>
         Change Username
      </button>
   );
}

export default ChangeUser;
