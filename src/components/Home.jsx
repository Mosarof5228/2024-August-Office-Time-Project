import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
  const { name } = useContext(AuthContext);
  return (
    <div>
      <h2>{name}</h2>
      <h2>this is home page</h2>
    </div>
  );
};

export default Home;
