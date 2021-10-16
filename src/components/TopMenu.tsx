import React, { useContext, useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {ButtonMenu} from './index';
import {AiOutlineHome, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {FaSun, FaMoon} from 'react-icons/fa';
import {AppTheme} from '../App';

interface Props {
    onThemeChanged: (arg: boolean)=> void
}

function TopMenu({onThemeChanged}: Props){
    const appTheme = useContext(AppTheme);
    const [showDrop, setShowDrop] = useState(false);
    const divRef = useRef<HTMLDivElement | null>(null);

    const onClickHome = ()=>{
        document.documentElement.scrollTo(0, 0);
    }

    const onThemeClick = (e: React.MouseEvent<HTMLDivElement>)=>{
        const classList = e.currentTarget.classList;
        classList.toggle('dark');
        onThemeChanged(classList.contains('dark'));
    }

    const toggleScreen = ()=>{
        const screen = document.querySelector('.screen');
        if(screen){
            document.body.removeChild(screen);
        }else{
            const el = document.createElement('div');
            el.className = 'screen';
            el.onclick = ()=> {
                onClickIcon();
            };
            document.body.appendChild(el);
        }
    }

    const toggleDrop = ()=>{
        const menus = divRef.current!.querySelector('.menus')!;
        menus.classList.toggle('drop');
    }

    const onClickIcon = ()=>{
        toggleDrop();
        toggleScreen();
        setShowDrop((pre)=> !pre);
    }

    useEffect(()=>{
        if(appTheme === 'dark'){
            const el = divRef.current?.querySelector('.theme');        
            el?.classList.add('dark');
        }
    }, []);

    return (
        <div css={style} ref={divRef}>
            <div className='tit' onClick={onClickHome}><AiOutlineHome/>KKS</div>
            <div className='menus'>
                <div className='theme' onClick={onThemeClick}>
                    <FaSun color='#ffe000'/>
                    <FaMoon color='#efff00'/>
                </div>
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
    z-index: 101;
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
        .theme {
            display: flex;
            align-items: center;
            width: 28px;
            overflow: hidden;
            transition: .3s;
            cursor: pointer;
            // border: 1px solid red;
            svg {
                min-width: 22px;
                min-height: 22px;
                margin: 0 2px;
                transition: .3s;
            }
        }
        .theme.dark {
            svg {
                transform: translateX(-25px);
            }
        }
    }
    .icon {
        display: none;
        cursor: pointer;
        transition: .3s;
        &:hover {
            transform: scale(1.1);
        }
    }

    @media screen and (max-width: 900px){
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

    @media screen and (max-width: 420px){
        padding: 0 10px;
    }
`;

export default TopMenu;