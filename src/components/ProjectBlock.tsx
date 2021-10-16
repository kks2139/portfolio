import React, { useContext } from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {TagBox} from './index';
import {SiGithub} from 'react-icons/si';
import {HiOutlineExternalLink} from 'react-icons/hi';
import { AppTheme } from '../App';

interface Props {
    imgUrl: string
    projectName: string
    period: string
    description: string
    techList: string[]
    link: string
    site: string
}

function ProjectBlock({imgUrl, projectName, period, description, techList, link, site}: Props){
    const appTheme = useContext(AppTheme);

    const onClickLink = (e: React.MouseEvent<SVGElement>)=>{
        const {name} = e.currentTarget.dataset;
        const url = name === 'git' ? link : site;
        window.open(url, '_blank');
    } 

    return (
        <div css={style(appTheme)}>
            <div className='wrapper'>
                <div className='preview'>
                    <img src={imgUrl}></img>
                    <div className='cir1'></div>
                    <div className='cir2'></div>
                    <div className='cir3'></div>
                    <div className='cir4'></div>
                </div>
                <div className='explain'>
                    <div className='tit'>
                        {projectName}
                    </div>
                    <div className='desc'>
                        {description}
                    </div>
                    <div className='tech'>
                        {techList.map(t => (
                            <TagBox key={t} text={t}></TagBox>
                        ))}
                    </div>
                    <div className='link'>
                        <SiGithub size='45' data-name='git' onClick={onClickLink}/>
                        {site ? <HiOutlineExternalLink size='48' data-name='site' onClick={onClickLink}/> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

const style = (theme: string)=>(css`
    padding: 20px 0;
    margin-bottom: 100px;
    .wrapper {
        display: flex;
        transition: 1s;
        .preview {
            position: relative;
            width: 550px;
            min-width: 550px;
            height: 400px;
            padding: 40px;
            overflow: hidden;
            border-radius: var(--radius);
            background-color: ${theme === 'dark' ? '#2b8165' : 'var(--color-main)'};
            ${theme === 'dark' ? '' : 'box-shadow: 0 0 25px -5px black;'}
            transition: 1s;
            &:hover {
                .cir1 {
                    transform: scale(1.1);
                }
                .cir2 {
                    transform: scale(1.3);
                }
                .cir3 {
                    transform: scale(2.5);
                }
                .cir4 {
                    transform: scale(2.2);
                }
                img {
                    transform: scale(1.05);
                }
            }
            img {
                z-index: 1;
                position: relative;
                width: 100%;
                height: 100%;
                border-radius: 10px;
                box-shadow: 0 0 20px 3px black;
                transition: .5s;
            }
            [class*='cir'] {
                position: absolute;
                border-radius: 50%;
                transition: .5s;
            }
            .cir1 {
                width: 150px;
                height: 150px;
                top: -50px;
                left: -50px;
                background-color: #bfc5c4;
            }
            .cir2 {
                width: 110px;
                height: 110px;
                top: 300px;
                left: 400px;
                background-color: #8affe4;
            }
            .cir3 {
                width: 100px;
                height: 100px;
                top: 300px;
                left: -10px;
                background-color: #9ed5b2;
            }
            .cir4 {
                width: 70px;
                height: 70px;
                top: 0;
                left: 410px;
                background-color: #80ffad;
            }
        }
        .explain {
            padding-left: 40px;
            flex-grow: 1;
            color: ${theme === 'dark' ? 'white' : 'black'};
            transition: 1s;
            .tit {
                color: var(${theme === 'dark' ? '--color-main' : 'black'});
                font-weight: 500;
                font-size: 35px;
                margin-bottom: 20px;
            }
            .for {
                font-size: 20px;
                margin: 6px 0;
            }
            .desc {
                white-space: pre-line;
                font-size: 18px;
                line-height: 30px;
            }
            .tech {
                display: flex;
                flex-wrap: wrap;
                margin-top: 7px;
            }
            .link {
                margin: 15px 0 0 15px;
                svg {
                    margin-right: 15px;
                    transition: .3s;
                    &:hover {
                        cursor: pointer;
                        transform: scale(1.1);
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1400px) {
        .wrapper {
            flex-direction: column;
            align-items: center;
            .explain {
                flex-grow: unset;
                width: 700px;
                padding-left: 80px;
                padding-top: 15px;
            }
        }
    }

    @media screen and (max-width: 710px) {
        .wrapper {
            .preview {
                width: 460px;
                min-width: 460px;
                height: 300px;
            }
            .explain {
                width: 450px;
                padding-left: 0;
                .tech {
                    width: calc(100% - 30px);
                }
            }
        }
    }

    @media screen and (max-width: 420px){
        .wrapper {
            .preview {
                width: 100%;
                min-width: unset;
                height: 280px;
            }
            .explain {
                width: 100%;
                min-width: unset;
                .tit {
                    font-size: 30px;
                }
                .link {
                    svg {
                        width: 40px;
                    }
                }
            }
        }
    }
`);

export default ProjectBlock;