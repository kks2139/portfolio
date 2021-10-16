import React, { useContext } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import { AppTheme } from '../App';

interface Props {
    text: string
}

function TagBox({text}: Props){
    const appTheme = useContext(AppTheme);

    return (
        <div css={style(appTheme)}>
            {text}
        </div>
    );
}

const style = (theme: string)=>(css`
    display: flex;
    align-items: center;
    padding: 2px 10px;
    width: fit-content;
    border-radius: var(--radius);
    border: 1px solid var(${theme === 'dark' ? '--color-main' : '--color-dark-main'});
    font-size: 19px;
    font-weight: 500;  
    white-space: nowrap;
    color: var(${theme === 'dark' ? '--color-main' : '--color-dark-main'});
    ${theme === 'dark' ? '' : 'background-color: var(--color-main);'}
    margin: 5px 15px 5px 0;
    transition: .3s;

    @media screen and (max-width: 420px){
        font-size: 14px;
        padding: 2px 5px;
    }
`);

export default TagBox;