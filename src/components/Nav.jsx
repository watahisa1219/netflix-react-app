import React, { useState, useEffect } from "react";
import "../style/Nav.css";

export const Nav = () => {

  // stateの初期化 ヘッダー表示の処理設定をfalseに指定
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleShow = () => {
      // 縦軸のスクロールが100を超えた場合にヘッダーを表示
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        // ヘッダーを非表示
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleShow);
  }, []);

  return (
    <div className={`Nav ${show && "Nav-black"}`}>
      <img
        className="Nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="Nav-avater"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
    </div>
  );
};