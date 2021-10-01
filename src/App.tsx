import React from 'react';
import './Common.scss';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {TopMenu, Typing, TextSlider, CareerBlock, ProjectBlock, Skills, Contact} from './components/index';
import data from './assest/data/data';
import sky from './assest/img/stary-sky.jpg';

function App() {
  const feat = [
      '사용자 입장에서 고민하는',
      '협업의 시너지를 중요시하는',
      '부족한 부분을 채워나가는',
      '꾸준히 성장해 나가는'
  ];

  return (
    <div css={style}> 
      <TopMenu></TopMenu>
      <div className='background'></div>
      <div className='content'>
        <div className='about-box' id='About'>
          <div className='intro-box'>
            <Typing text='Let me introduce myself !' size={47}></Typing>
            <div className='im'>
              <span>Hello!</span>
              <div><span>I'm </span>Kwangsun Kim.</div>
              <div className='feat'>
                <TextSlider textList={feat} size={27} width={350}></TextSlider>
                <span>개발자 입니다.</span>
              </div>
            </div>
          </div>
          <div className='rocket-box'>
            <img className='rk' src='shuttle.png'></img>
            <img className='st1' src='star.png'></img>
            <img className='st2' src='star.png'></img>
            <img className='st3' src='star.png'></img>
            <img className='st4' src='star.png'></img>
          </div>
        </div>
        <div className='sub-title'>Career</div>
        <CareerBlock></CareerBlock>
        <div className='sub-title' id='Projects'>Projects</div>
        <div className='pjt-wrapper'>
          {data.projects.map(p => (
            <ProjectBlock 
            key={p.projectName}
            imgUrl={p.imgUrl} 
            projectName={p.projectName} 
            period={p.period} 
            description={p.description} 
            techList={p.techList}
            site={p.site}
            link={p.link}/>
          ))}
          </div>
        <div className='sub-title'>Skills & Tools</div>
        <Skills></Skills>
        <div className='sub-title' id='Contact'>Contact</div>
        <Contact></Contact>
        <div className='footer'>
          Developed by KKS 🧑🏻
        </div>
      </div>
    </div>
  );
}

const style = css`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  > .background {
    position: absolute;
    background-image: url(${sky});
    width: 100%;
    height: 600px;
    box-shadow: 0 5px 30px 0 black;
  }
  > .content {
    width: calc(100% - 100px);
    margin-top: 200px;
    padding: 0 100px;
    .about-box {
      position: relative;
      display: flex;
      justify-content: space-between;
      height: 310px;
      .im {
        margin-top: 10px;
        font-size: 25px;
        font-weight: bold;
        color: var(--color-main);
        span {
          color: white;
        }
        .feat {
          margin-top: 15px;
          display: flex;
        }
      }
    }
    .footer {
      display: flex;
      justify-content: center;
      margin: 270px 0 15px 0;
      height: 30px;
      color: white;
    }
  }
  .rocket-box {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 100px;
    width: 310px;
    height: 310px;
    overflow: hidden;
    img {
      position: absolute;
    }
    .rk {
      width: 200px;
      animation-name: shaking;
      animation-duration: 5s;
      animation-timing-function: ease;
      animation-iteration-count: infinite;
    }
    [class*='st'] {
      width: 35px;
      animation-duration: 3s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      
    }
    .st1 {
      width: 30px;
      transform: translate(-500px, -500px);
      animation-name: fall-1;
      animation-delay: 0s;
    }
    .st2 {
      z-index: 2;
      transform: translate(-500px, -500px);
      animation-name: fall-2;
      animation-delay: 1s;
    }
    .st3 {
      width: 30px;
      transform: translate(-500px, -500px);
      animation-name: fall-3;
      animation-delay: 2s;
    }
    .st4 {
      z-index: 2;
      transform: translate(-500px, -500px);
      animation-name: fall-4;
      animation-delay: 3s;
    }
  }

  @keyframes shaking {
    0% {transform: rotate(-50deg);}
    50% {transform: rotate(-40deg);}
    100% {transform: rotate(-50deg);}
  }
  @keyframes fall-1 {
    0% {transform: translate(-30px, -200px);}
    100% {transform: translate(-200px, 200px);}
  }
  @keyframes fall-2 {
    0% {transform: translate(100px, -200px);}
    100% {transform: translate(-140px, 200px);}
  }
  @keyframes fall-3 {
    0% {transform: translate(140px, -200px);}
    100% {transform: translate(-50px, 200px);}
  }
  @keyframes fall-4 {
    0% {transform: translate(220px, -200px);}
    100% {transform: translate(0px, 200px);}
  }

  @media screen and (max-width: 1300px) {
    .content {
      .about-box {
        .rocket-box {
          position: fixed;
          top: -116px;
          left: 40px;
          transform: scale(0.16);
          z-index: 101;
        }
      }
    }
  }

  @media screen and (max-width: 900px){
    .content {
      padding: 0;
    }
  }

  @media screen and (max-width: 710px){
    .intro-box {
      .im {
        font-size: 23px !important;
        .feat {
          flex-direction: column;
        }
      }
    }
  }

  @media screen and (max-width: 420px){
    .content {
      width: 100%;
      padding: 0 20px;
      .im {
        font-size: 20px !important;
      }
      .about-box {
        .rocket-box {
          left: 0;
        }
      }
      .sub-title {
        font-size: 32px;
      }
    }
  }

`;

export default App;