import React from "react";
import "../style/home.css";
import Blog from "./home/Blog";
import Heading from "./home/Heading";
import MailSubscription from "./home/MailSubscription";

const Home = () => {
  return (
    <>
      <Heading />
      <Blog />
      <MailSubscription />
    </>
  );
};

export default Home;
