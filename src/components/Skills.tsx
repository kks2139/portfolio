import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {SiTypescript, SiJavascript, SiReact, SiHtml5, SiCss3, SiVisualstudiocode, SiGit} from 'react-icons/si';

interface Props {
    
}

function Skills({}: Props){
    return (
        <div css={style}>
            <div>
                <SiJavascript className='icon1' size='70'/>
                <div className='txt'>Javascript</div>
            </div>
            <div>
                <SiHtml5 className='icon2' size='70'/>
                <div className='txt'>HTML 5</div>
            </div>
            <div>
                <SiCss3 className='icon3' size='70'/>
                <div className='txt'>CSS 3</div>
            </div>
            <div>
                <SiTypescript className='icon4' size='70'/>
                <div className='txt'>Typescript</div>
            </div>
            <div>
                <SiReact className='icon5' size='70'/>
                <div className='txt'>React</div>
            </div>
            <div>
                <SiVisualstudiocode className='icon6' size='70'/>
                <div className='txt'>vscode</div>
            </div>
            <div>
                <SiGit className='icon7' size='70'/>
                <div className='txt'>git</div>
            </div>
        </div>
    );
}

const style = css`
    display: flex;
    justify-content: space-between;
    color: white;
    margin-bottom: 100px;
    svg {
        margin: 10px 20px;
        transition: .2s;
        &:hover {
            transform: scale(1.1);
        }
    }
    .txt {
        text-align: center;
    }
    .icon1:hover {color: #f0db4f;};
    .icon2:hover {color: #f16529;};
    .icon3:hover {color: #33a9dc;};
    .icon4:hover {color: #2f74c0;};
    .icon5:hover {color: #61dafb;};
    .icon6:hover {color: #0076c6;};
    .icon7:hover {color: #e84e31;};

    @media screen and (max-width: 930px) {
        flex-wrap: wrap;
        justify-content: unset;    
    }
    
    @media screen and (max-width: 385px) {
        svg {
            width: 40px;
        }
    }
`;

export default Skills;