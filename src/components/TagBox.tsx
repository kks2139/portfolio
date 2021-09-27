import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

interface Props {
    text: string
}

function TagBox({text}: Props){
    return (
        <div css={style}>
            {text}
        </div>
    );
}

const style = css`
    display: flex;
    align-items: center;
    padding: 2px 10px;
    width: fit-content;
    border-radius: var(--radius);
    border: 1px solid var(--color-dark-main);
    font-size: 19px;
    color: var(--color-dark-main);
    margin: 5px 15px 5px 0;
    transition: .3s;
    &:hover {
        border: 1px solid #6bffff;
        color: #6bffff;
    }
`;

export default TagBox;