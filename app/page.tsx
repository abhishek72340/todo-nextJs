'use client'
import AddUsers from "./Components/AddUsers";
import DisplayUsers from "./Components/DisplayUsers";
 const HomePage:React.FC=()=> {
  
  return (
    <div
      className={
        "flex flex-col justify-center items-center h-screen space-y-5  "
      }
    >
      <AddUsers />
      <DisplayUsers />
    </div>
  );
}


export default HomePage;

