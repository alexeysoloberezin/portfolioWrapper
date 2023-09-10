import React from 'react';
import {Button} from "antd";
import type {CollapseProps} from 'antd';
import {Collapse} from 'antd';
import { useTranslation } from "react-i18next";
import ModalContacts from "../common/ModalContacts";


const AboutMe = () => {
  const { t } = useTranslation();

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <h5 className={"text-lg"} style={{lineHeight: "11px"}}>{t('InfoAboutmeTitle')}</h5>,
      children: <div dangerouslySetInnerHTML={{__html: t('InfoAboutMe')}}></div>,
    },
    {
      key: '2',
      label: <h5 className={"text-lg"} style={{lineHeight: "11px"}}>What i can</h5>,
      children: <ul style={{listStyleType: "circle"}} className={"pl-3 ml-1"} dangerouslySetInnerHTML={{__html: t('WhatICan')}}>
        </ul>,
    },
    {
      key: '3',
      label: <h5 className={"text-lg"} style={{lineHeight: "11px"}}>What i worked with</h5>,
      children: <ul style={{listStyleType: "circle"}} className={"pl-3 ml-1"}>
        <li className={"mb-2"}><b>Frameworks:</b> Vue, Nuxt, React</li>
        <li className={"mb-2"}><b>Api:</b> Rest api, GraphQL, Swagger, Postman, Firebase</li>
        <li className={"mb-2"}><b>Ui libs:</b> Vuetify, Material ui, VuePrime, Bootstrap, Ant design</li>
        <li className={"mb-2"}><b>Bundler/Context:</b> Gulp, Webpack, Docker, Nginx, Git(GitFlow)</li>
        <li className={"mb-2"}><b>Code:</b> TypeScript, JavaScript (ES6+), JQuery</li>
        <li className={"mb-2"}><b>CSS:</b> Scss, Sass, BEM</li>
        <li className={"mb-2"}><b>Storage:</b> Cookies, LocalStorage, Pinia, Vuex, Redux, R.Toolkit, Mobx</li>
        <li className={"mb-2"}><b>Other:</b> Express, Puppeteer, Prettier, Ui/Ux</li>
      </ul>,
    },
  ];


  return (
    <section className="aboutMe">
      <div className="container">
        <div className="aboutMe__wrp">
          <div className="aboutMe__l">
            <img className={'aboutMe-bg'} src={"/15273.jpg"} alt=""/>
            <div className={'mainBanner-video'} style={{pointerEvents: 'none'}}>
              <img src={"/me2.jpg"} alt=""/>
            </div>
            <div className={"aboutMe-btns"}>
              <ModalContacts size={"large"}/>
              <Button size={'large'}>{t('ReadMore')}</Button>
            </div>
          </div>
          <div className="aboutMe__r">
            <h2 className="text-4xl font-bold mb-3 pb-3">{t('AboutMe')}</h2>
            <div>
              <Collapse accordion items={items} defaultActiveKey={'1'} bordered={false}/>;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;