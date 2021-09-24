import React from 'react';
import './Common.scss';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {TopMenu, Typing} from './components/index';

function App() {

  return (
    <div css={style}> 
      <TopMenu></TopMenu>
      <div className='intro'>
        <Typing text='Let me introduce myself !'></Typing>
        <div className='im'>
          <span>Hello!</span>
          <div><span>I'm </span>Kwangsun Kim.</div>
          <div></div>
        </div>
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
    }
  }
`;

export default App;