import React, {useEffect, useState} from 'react';
import Header from "../../components/common/Header";
import {Button, Avatar} from "antd";
import Swiper from 'swiper';
import {Image} from 'antd';
import VueIcon from "../../components/ui/icons/VueIcon";
import ReactIcon from "../../components/ui/icons/ReactIcon";
import FirebaseIcon from "../../components/ui/icons/FirebaseIcon";
import {Input, Space} from 'antd';
import AboutMe from "../../components/blocks/AboutMe";
import Reviews from "../../components/blocks/Reviews";
import MasonryLayout from "../../components/blocks/MasonryLayout";
import {getPortfolio} from "../../firestore/api";
import {PortfolioItem} from "../../types/Portfolio";
import {useParams} from "react-router-dom";
import TagsComp from "../../components/ui/Tags";

const {Search} = Input;

const Case = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [portfolio, setPortfolio] = useState<PortfolioItem | null>(null)
  const {id} = useParams();

  const onSearch = (value: string) => console.log(value);

  const fetchPortfolio = async () => { // Rename the function
    try {
      const portfolioData = await getPortfolio(id); // Use a different variable name
      if (!portfolioData) return null;
      console.log('portfolioData', portfolioData)
      // setPortfolio(portfolioData);
    } catch (error) {
      console.error('Error fetching portfolio:', error);
    }
  }

  useEffect(() => {
    fetchPortfolio()
  }, []);

  useEffect(() => {
    console.log('portfolio', portfolio)
    if(portfolio){
      const swiper = new Swiper('.step-swiper', {
        // Настройки Swiper
        slidesPerView: 4,
        centeredSlides: true,
        initialSlide: 2,
        spaceBetween: 0,
        mousewheel: true,
        on: {
          slideChange: function () {
            // @ts-ignore
            setCurrentSlide(this.activeIndex); // Обновляем текущий слайд при изменении
          },
        },
      });
      return () => {
        swiper.destroy(true, true);
      };
    }



  }, [portfolio])

  return (
    <>
      <Header transparent={true}/>
      <img src={"/5528913.jpg"} alt="" className={'bg'}/>
      {portfolio
        ? <div className={"case"}>
          <div className="container">
            <div className="case__banner">
              <div className="case__banner-l">
                <div className="subtitle">{portfolio.subtitle}</div>
                <h1>{portfolio.title}</h1>
                <p dangerouslySetInnerHTML={{ __html: portfolio.text }}></p>
                <Button type="primary" size={'large'}>Свяжитесь со мной</Button>
              </div>
              <div className="case__banner-r">
                <div className="case__banner-img">
                  {portfolio?.images?.map((item, index) => (
                    index < 4 &&  <img key={item} src={item} alt=""/>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="case__steps">
            <h2 className="case__steps-title">My steps in this project</h2>
            <div className="case__steps-wrp">
              <div className="blue-blur"></div>
              <div className="green-blur"></div>
              <div className="swiper step-swiper">
                <div className="swiper-wrapper">
                  {portfolio.steps.map(step => (
                    <div className="swiper-slide">
                      <div className="case__steps__it-step">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star-outline</title>
                          <path
                            d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"/>
                        </svg>
                      </div>
                      <div className={"case__steps-box"}>
                        <div className="case__steps__it-title">{step.title}</div>
                        <div>
                          {step.content}
                        </div>
                        <div className={"case__steps-imgs"}>
                        </div>
                      </div>
                    </div>
                  )) }
                </div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

              </div>
            </div>
          </div>

          <div className="container">
            <div className="case__info">
              <div className="case__info-head">
                <div className="case__info-head-l">
                  <h3><span className={"text-primary"}>Reviews</span><br/>about mediation</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem doloribus in mollitia quibusdam
                    recusandae unde ut vero voluptate voluptatem.</p>
                </div>
                <div>
                  <div className="subtitle">What i use/did in project</div>
                  <div className="case__info-head-c">
                    <TagsComp tags={portfolio.tags || []} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Reviews reviews={portfolio.reviews || []}/>

          <MasonryLayout images={[]}/>

          <AboutMe/>
        </div>
        : 'Sorry not good id'
      }
    </>
  );
};

export default Case;