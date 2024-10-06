import { useContext } from "react"; // useContext import karna na bhoolen
import UserContext from "../userContext";

const Home = () => {
  const x = useContext(UserContext); // sirf ek baar declare karna hai
  console.log(x);

  return (
    <div>
      <h1>Home</h1>
      <input 
        value={x.name} 
        onChange={(e) => x.updateName(e.target.value)} 
      />
    </div>
  );
};

export default Home;
