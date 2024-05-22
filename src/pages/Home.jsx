import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  //    * Home 컴포넌트는 <Link> 컴포넌트를 사용해서 Detail 컴포넌트로 이동하도록 하세요.
  return (
    <>
      <h1>Home</h1>
      {/* 임의의 id 값 전달 */}
      <Link to="/detail/1">Detail로 이동</Link>
    </>
  );
};

export default Home;
