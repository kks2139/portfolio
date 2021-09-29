import React, { useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {ButtonMenu} from './index';
import {AiOutlineHome, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

function TopMenu(){
    const [showDrop, setShowDrop] = useState(false);
    const divRef = useRef<HTMLDivElement | null>(null);

    const onClickHome = ()=>{
        document.documentElement.scrollTo(0, 0);
    }

    const onClickIcon = ()=>{
        const menus = divRef.current!.querySelector('.menus')!;
        menus.classList.toggle('drop');
        if(showDrop){
        }else{
        }
        setShowDrop(!showDrop);
    }

    return (
        <div css={style} ref={divRef}>
            <div className='tit' onClick={onClickHome}><AiOutlineHome/>KKS.</div>
            <div className='menus'>
                <ButtonMenu text='About' targ='About'/>
                <ButtonMenu text='Projects' targ='Projects'/>
                <ButtonMenu text='Contact' targ='Contact'/>
            </div>
            {showDrop ? 
                <AiOutlineClose className='icon' size='30' color='white' onClick={onClickIcon}/> :
                <AiOutlineMenu className='icon' size='30' color='white' onClick={onClickIcon}/>
            }
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
    background-color: rgb(0, 0, 0, 0.7);
    backdrop-filter: blur(7px);
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
    .icon {
        display: none;
        cursor: pointer;
        transition: .3s;
        &:hover {
            transform: scale(1.1);
        }
    }

    @media screen and (max-width: 710px){
        .menus {
            display: none;
        }
        .icon {
            display: unset;
        }
        .drop {
            position: fixed;
            top: 70px;
            right: 0;
            display: flex !important;
            flex-direction: column;
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
            background-color: rgb(0, 0, 0, 0.7);
            backdrop-filter: blur(7px);
        }
    }
`;

export default TopMenu;