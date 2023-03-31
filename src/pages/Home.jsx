import React from "react";
import LandingPage from "./LandingPage";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
// import History from "./History";
import Overview from "./Overview";
// import Statistics from "./Statistics";
const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="mt-5  h-auto w-full">
      {currentUser ? (
        <div className="mb-40">
          <Overview />
        </div>
      ) : (
        <LandingPage />
      )}
    </div>
  );
};

export default Home;
