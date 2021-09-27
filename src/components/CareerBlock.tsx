import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {TagBox} from './index';

interface Props {

}

function CareerBlock({}: Props){
    return (
        <div css={style}>
            <div className='desc'>
                <div>
                    엠로 (2018.01 ~) <a href='http://www.emro.co.kr/' target='blank'>http://www.emro.co.kr</a>
                </div>
                <div>협력사 등록, 견적서작성, 발주생성, 입고/검수 등 구매 시스템을 구축하는 프로젝트들에 참여하였습니다.</div>
                <div>
                    개발에서 배포, 운영까지 담당하였고, 주로 Javascript / CSS / HTML 과
                    <a href='https://library.polymer-project.org/3.0/docs/devguide/feature-overview' target='blank'>PolymerJS</a>
                    라이브러리를
                </div>
                <div>사용하여 Front 개발을 진행하였습니다.</div>
            </div>
            <br/>
            <div>개발 환경</div>
            <div className='tech'>
                <div>
                    <div className='el'>• Client</div>
                    <TagBox text='Javascript'/>
                    <TagBox text='CSS'/>
                    <TagBox text='HTML'/>
                    <TagBox text='PolmyerJS'/>
                </div>
                <div>
                    <div className='el'>• Server</div>
                    <TagBox text='Java'/>
                    <TagBox text='Spring Framework'/>
                    <TagBox text='Oracle RDB'/>
                </div>
                <div>
                <div className='el'>• DevOps</div>
                    <TagBox text='Jenkins'/>
                    <TagBox text='FTP'/>
                </div>
                <div>
                    <div className='el'>• 협업툴</div>
                    <TagBox text='Jira'/>
                    <TagBox text='Confluence'/>
                    <TagBox text='SVN'/>
                </div>
            </div>
        </div>
    );
}

const style = css`
    color: white;
    font-size: 22px;
    a {
        font-weight: bold;
        margin: 0 5px;
    }
    .desc {
        > div {
            line-height: 40px;
            span {
                font-weight: bold;
            }
        }
    }
    .tech {
        margin-top: 10px;
        > div {
            display: flex;
            align-items: center;
            .el {
                width: 120px;
            }
        }
    }
`;

export default CareerBlock;