import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

interface Props {
    text: string
    targ: string
}

function ButtonMenu({text, targ}: Props){
    const onClick = ()=>{
        const el: HTMLDivElement | null = document.querySelector('#' + targ);
        if(el){
            const html = document.documentElement;
            html.scrollTo(0, el.offsetTop - 70);
        }
    }

    return (
        <a css={style} onClick={onClick}>
            <div className='txt'>{text}</div>
            <div className='bar'></div>
        </a>
    );
}

const style = css`
    width: fit-content;
    box-sizing: content-box;
    margin: 0 20px;
    border-radius: var(--radius);
    cursor: pointer;
    text-decoration: none;
    transition: 1s;
    .txt {
        text-align: center;
        color: white;
        font-size: 21px;
        font-weight: bold;
        padding: 3px 0;
    }
    .bar {
        height: 5px;
        width: 0px;
        background-color: var(--color-main);
        border-radius: var(--radius);
        transition: .3s;
    }
    &:hover {
        .bar {
            width: 100%;
        }
    }

    @media screen and (max-width: 710px){
        .txt {
            transition: .3s;
            font-size: 18px;
            padding: 0 20px 25px 20px;
            &:hover {
                color: var(--color-main);
            }
        }
        .bar {
            display: none;
        }
    }
`;

export default ButtonMenu;