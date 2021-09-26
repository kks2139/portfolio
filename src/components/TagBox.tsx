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
    margin: 5px 10px;
`;

export default TagBox;