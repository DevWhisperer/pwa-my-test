import axios from "axios";
import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
// import { KAKAO_AUTH_URL } from "../../~~";

// export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const Test = () => {
  const REST_API_KEY = "a4f51a54027aba6af7a598bb87bf1439";
  const REDIRECT_URI = "http://localhost:3000/test";

  const LoginButtonHandler = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
  };

  const [serchParams, setSearchParams] = useSearchParams();
  console.log(serchParams.get("code"));

  return (
    <div>
      <button onClick={LoginButtonHandler}>카카오로 로그인하기</button>
    </div>
  );
};

export default Test;
