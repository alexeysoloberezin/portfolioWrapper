import React, {useEffect, useRef, useState} from 'react';
import Header from "../components/common/Header";
import picImg from '../images/pic.jpg'
import apiImg from '../images/api.png'
import VueBg from '../images/VueBg.png'
import firebaseBg from '../images/firebase.png'
import htmlBg from '../images/html.png'
import figmaBg from '../images/figma.png'
import {
  PlayCircleOutlined,
  RightOutlined,
  LikeOutlined,
  CalendarOutlined,
  ArrowUpOutlined
} from '@ant-design/icons';
import {Button, Carousel, Tag, Statistic, Space} from 'antd';
import Links from "../components/ui/links";
import {Link} from "react-router-dom";
import {PortfolioItem} from "../types/Portfolio";
import MainBannerImages from "../components/ui/MainBannerImages";
import AboutMe from "../components/blocks/AboutMe";
import {getPortfolio} from "../firestore/api";
import TagsComp from "../components/ui/Tags";
import Footer from "../components/common/Footer";
import ModalContacts from "../components/common/ModalContacts";
import { useTranslation } from "react-i18next";

const canIHelp = [
  {
    title: "Разработка на <span class='text-primary'>Firebase</span>",
    text: "Могу помочь с созданием вашего простого сервера на Firebase. Предоставлю надежное хранение данных и обработку запросов.",
    img: firebaseBg,
    bg: "linear-gradient(217deg, #dcfff5, #fff)"
  },
  {
    title: "<span class='text-primary'>Frontend</span> Разработка",
    text: "Создам простой и эффективный фронтенд для вашего проекта. Обеспечу чистую верстку и минималистичный дизайн.",
    img: VueBg,
    bg: "linear-gradient(217deg, #CBFEE8, #fff)"
  },
  {
    title: "Подключение front-end к  <span class='text-primary'>Api</span>",
    text: "Подключение front-end к API - это одна из моих основных экспертиз. Я специализируюсь в создании высококачественных веб-страниц и приложений, которые взаимодействуют с API для получения и обмена данными. Мои навыки позволяют мне безупречно интегрировать front-end с различными API, обеспечивая быструю и эффективную работу вашего веб-приложения с бэкендом. ",
    img: apiImg,
    bg: "linear-gradient(217deg, #FDDBCDFF, #fff)"
  },
  {
    title: "Веб-дизайн и <span class='text-primary'>Адаптивность</span>",
    text: "Могу предоставить дизайн вашего проекта и сделать его адаптивным для различных устройств. При необходимости сложного дизайна, могу порекомендовать вам дизайнера для более креативных идей или предоставить базовый дизайн самостоятельно.",
    img: figmaBg,
    bg: "linear-gradient(217deg, #E4FFCF, #fff)"
  },
  {
    title: "Верстка на чистом <span class='text-primary'>HTML / CSS</span>",
    text: "Как опытный фронтенд разработчик, я специализируюсь на создании качественной верстки для веб-страниц с использованием передовых технологий и инструментов. Благодаря моему опыту, я гарантирую пиксель-перфектную верстку, обеспечивая точное соответствие дизайн-макетов, адаптивность и кросс-браузерную совместимость.",
    img: htmlBg,
    bg: "linear-gradient(217deg, #FDDBCDFF, #fff)"
  },
]

interface ICarouselRef {
  next: () => void;
  prev: () => void;
  goTo: (slide: number) => void;
  autoPlay: () => void;
  innerSlider: {
    state: {
      currentSlide: number;
    };
  };
}

const HomePage = () => {
  const { t } = useTranslation();
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([])

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const carouselRef = useRef<ICarouselRef>(null);
  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const fetchPortfolio = async () => { // Rename the function
    try {
      const portfolioData = await getPortfolio();
      if (!portfolioData) return null;
      setPortfolio(portfolioData);
    } catch (error) {
      console.error('Error fetching portfolio:', error);
    }
  }

  useEffect(() => {
    fetchPortfolio()
  }, [])
  return (
    <div>
      <Header/>
      <section className={'mainBanner'}>
        <div className="container">
          <div className={'mainBanner-wrp'}>
            <div className={'mainBanner-l'}>
              <h1 dangerouslySetInnerHTML={{__html: t('Title')}}>
              </h1>
              <p className={'py-3'}>{t('Text')}</p>
              <div className={'flex gap-2'}>
                <ModalContacts size={"large"} />
                <Button size={'large'}>{t('MyCases')}</Button>
              </div>
            </div>
            <div>
              <div className={'mainBanner-video'}>
                <img src={picImg + ''} alt=""/>
                <PlayCircleOutlined className={'play'}/>
              </div>
            </div>
          </div>
          <MainBannerImages />
        </div>
      </section>

      <section className="canHelp">
        <div className="container">
          <div className="canHelp__wrp">
            <Carousel {...carouselSettings} effect="fade" ref={carouselRef}>
              {canIHelp.map((item, index) => (
                <div key={index}>
                  <div className="canHelp__it" style={{background: item.bg}}>
                    <div>
                      <h2 dangerouslySetInnerHTML={{__html: item.title}}></h2>
                      <div className={'my-3 subtitle'}>{item.text}</div>
                      <div className={'flex gap-2 canHelp__btns'}>
                        <Button className={'mt-2'} type={'primary'} size={'large'}>
                          {t('ReadMore')}
                        </Button>
                        <Button className={'mt-2'} size={'large'} onClick={nextSlide}>
                          <RightOutlined/>
                        </Button>
                      </div>
                    </div>
                    <div>
                      <img src={item.img} alt=""/>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      <section className={'portfolio'}>
        <div className="container">
          <div className="portfolio__wrp">
            <Carousel {...carouselSettings} effect="fade">
              {portfolio.map((item, index) => (
                <div key={index}>
                  <div className="portfolio__it">
                    <div className={'portfolio__it-box'}>
                      <h2>{item.title}</h2>
                      <h5 dangerouslySetInnerHTML={{ __html: item.text }}></h5>
                      {Array.isArray(item.images) && item.images.length > 0 &&
                        <img src={item.images[0].link} alt={'asd'} className="portfolio__img"/>
                      }
                    </div>
                    <div>
                      <div>
                        <div className={'subtitle mb-2'}>Теги:</div>
                        <TagsComp tags={item.tags || []} />
                      </div>
                      <div className={'mt-3'}>
                        <div className={'subtitle mb-2'}>Статистика:</div>
                        <div className={'portfolio__statistic'}>
                          <Statistic
                            title="Время выполнения"
                            value={item.statistic?.duration}
                            valueStyle={{color: '#3f8600'}}
                            prefix={<ArrowUpOutlined/>}
                            suffix="дней"
                          />
                          <Statistic
                            title="Отзыв"
                            value={'Положительный'}
                            valueStyle={{color: '#3f8600'}}
                            prefix={<LikeOutlined/>}
                          />
                          <Statistic
                            title="Дата выполнения"
                            value={item.statistic?.date}
                            valueStyle={{color: '#939393'}}
                            prefix={<CalendarOutlined/>}
                          />
                        </div>
                      </div>
                      <div className={'mt-3'}>
                        <div className={'subtitle mb-2'}>Ссылки:</div>
                        <Space size={[0, 8]} wrap>
                          {item.links
                            ? item.links.map((link, idx) => (
                              <a href={link.link} key={idx}>
                                <Links text={link.name}/>
                              </a>
                            ))
                            : null}
                        </Space>
                      </div>
                      <div>
                        <Link to={'/case/' + item.id}>
                          <Button className={'mt-3'} type={'primary'}>
                            Узнать подробнее
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      <AboutMe />

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default HomePage;