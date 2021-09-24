import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {ButtonMenu} from './index';
import {AiOutlineHome} from 'react-icons/ai';

function TopMenu(){
    return (
        <div css={style}>
            <div className='tit'><AiOutlineHome/>Home</div>
            <div className='menus'>
                <ButtonMenu text='About'/>
                <ButtonMenu text='Projects'/>
                <ButtonMenu text='Contact'/>
            </div>
        </div>
    );
}

const style = css`
    z-index: 10;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    padding: 0 50px;
    color: var(--color-main);
    background-color: rgb(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    .tit {
        font-size: 30px;
        font-weight: bold;
        cursor: pointer;
        svg {
            margin-right: 10px;
            transform: translateY(3px);
        }
    }
    .menus {
        display: flex;
    }
`;

export default TopMenu;