import React, {useEffect, useRef} from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

interface Props {
    text: string
    size?: number
}

function Typing({text, size=45}: Props){
    const arr = text.split('');
    const divRef = useRef<HTMLDivElement | null>(null);
    const tidRef = useRef(0);

    useEffect(()=>{
        tidRef.current = window.setInterval(()=>{
            const el = divRef.current!.querySelector('.hide');
            if(el) el.classList.remove('hide');
            else clearInterval(tidRef.current);
        }, 120);
        return ()=> clearInterval(tidRef.current);
    });

    return (
        <div css={style(size)}>
            <div className='txt' ref={divRef}>
                {arr.map((s, i)=> (
                    <span key={i} className='hide'>{s}</span>
                ))}
            </div>
            <div className='cursor'></div>
        </div>
    );
}

const style = (size: number)=> (css`
    display: flex;
    align-items: center;
    .txt {
        font-size:${size}px;
        font-weight: bold;
        color: var(--color-main);
        .hide {
            display: none;
        }
        .eli
    }
    .cursor {
        width: 4px;
        height: ${size}px;
        margin-left: 7px;
        transition: .3s;
        background-color: white;
        animation-name: blink;
        animation-duration: 1.1s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
    }
    
    @keyframes blink {
        0% {opacity: 0;}
        50% {opacity: 1;}
        100% {opacity: 0;}
    }
`);

export default Typing;