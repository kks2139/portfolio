import React, { useEffect, useRef } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

interface Props {
    textList: string[]
    size?: number
    width?: number
}

interface cssProps {
    size: number
    width: number
}

function TextSlider({textList, size=20, width=350}: Props){
    const now = useRef(0);
    const tidRef = useRef(0);
    const divRef = useRef<HTMLDivElement | null>(null);

    useEffect(()=>{
        const txtBox: HTMLDivElement = divRef.current!.querySelector('.txt-box')!;
        tidRef.current = window.setInterval(()=>{
            txtBox.style.transform = `translateY(calc(100% * -${now.current}))`;
            now.current = now.current < textList.length-1 ? now.current + 1 : 0;
        }, 2800);
        return ()=> clearInterval(tidRef.current);
    }, []);

    return (
        <div css={style({size, width})} ref={divRef}>
            <div className='txt-box'>
                {textList.map((txt, i) => (
                    <div key={i} className='txt'>{txt}</div>
                ))}
            </div>
        </div>
    );
}

const style = ({size, width}: cssProps)=> (css`
    width: ${width}px;
    font-size: ${size}px;
    overflow: hidden;
    margin: 0 10px 10px 0;
    text-align: center;
    border-bottom: 1px solid var(--color-main);
    .txt-box {
        height: ${size + 12}px;
        transition: .8s;
        .txt {
            height: ${size + 12}px;
            width: ${width}px;
            min-width: ${width}px;
        }
    }

    @media screen and (max-width: 710px){
        font-size: 23px;
    }

    @media screen and (max-width: 385px){
        width: 245px;
        font-size: 19px;
        .txt-box {
            .txt {
                min-width: unset;
                width: unset;
            }
        }
    }
`);

export default TextSlider;