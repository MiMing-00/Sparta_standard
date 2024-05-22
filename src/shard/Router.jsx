import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const Router = () => {
  // Home 컴포넌트는 <Link> 컴포넌트를 사용해서 Detail 컴포넌트로 이동하도록 하세요.
  // Detail 컴포넌트를 path parameter 로 id 를 받도록 하세요.
  // Detail 컴포넌트는 path parameter 로 받은 id 를 콘솔로그로 찍으세요.

  const params = useParams();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
