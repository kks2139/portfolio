import React from 'react';
import './Common.scss';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {TopMenu, Typing, TextSlider, CareerBlock, ProjectBlock} from './components/index';
import data from './assest/data/data';

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
      <div className='intro'>
        <Typing text='Let me introduce myself !' size={47}></Typing>
        <div className='im'>
          <span>Hello!</span>
          <div><span>I'm </span>Kwangsun Kim.</div>
          <div className='feat'>
            <TextSlider textList={feat} size={27} width={350}></TextSlider>
            <span>개발자 입니다.</span>
          </div>
        </div>
        <div className='sub-title'>Career</div>
        <CareerBlock></CareerBlock>
        <div className='sub-title'>Projects</div>
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
    </div>
  );
}

const style = css`
  min-height: 100vh;
  .intro {
    width: 100%;
    margin-top: 200px;
    padding: 0 100px;
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
`;

export default App;