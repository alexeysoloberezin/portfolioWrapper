import React from 'react';
import vueImg from "../../images/vue.jpg";
import jsImg from "../../images/js.jpg";
import nuxtImg from "../../images/nuxt.png";
import reactImg from "../../images/react.png";
import typescriptImg from "../../images/typescript.png";
import firebaseImg from "../../images/firebase.jpg";

const MainBannerImages = () => {
  return (
    <div className={'mainBanner-imgs'}>
      <div className={'mainBanner-imgs-box'}>
        <img src={vueImg} alt=""/>
        <img src={jsImg} alt=""/>
        <img src={nuxtImg} alt=""/>
        <img src={reactImg} alt=""/>
        <img src={typescriptImg} alt=""/>
        <img src={firebaseImg} alt=""/>
        <img src={vueImg} alt=""/>
        <img src={jsImg} alt=""/>
        <img src={nuxtImg} alt=""/>
        <img src={reactImg} alt=""/>
        <img src={typescriptImg} alt=""/>
        <img src={firebaseImg} alt=""/>
      </div>
    </div>
  );
};

export default MainBannerImages;