import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handalSubmit = (e) => {
    e.preventDefault();
    if (!username && !password) {
      alert("please add the informton ");
      return false;
    }
    setUser({ username, password });
  };

  return (
    <div>
      <h2>login </h2>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <br />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <br />
      <button onClick={handalSubmit}>submit</button>
    </div>
  );
};
