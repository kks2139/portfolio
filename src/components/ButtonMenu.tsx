import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

interface Props {
    text: string
}

function ButtonMenu({text}: Props){
    return (
        <a css={style}>
            {text}
            <div className='bar'></div>
        </a>
    );
}

const style = css`
    width: fit-content;
    font-size: 21px;
    box-sizing: content-box;
    padding: 0 10px;
    margin: 0 20px;
    border-radius: var(--radius);
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: .2s;
    .bar {
        height: 5px;
        width: 0px;
        background-color: var(--color-main);
        border-radius: var(--radius);
        transition: .2s;
    }
    &:hover {
        .bar {
            width: 100%;
        }
    }
`;

export default ButtonMenu;