import React from "react";
import HomePage from "./Home/HomePage";
import Login from "./Login/Login";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();

  return <>{session ? <HomePage /> : <Login />}</>;
};

export default Home;
