import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {TagBox} from './index';

interface Props {

}

function ProjectBlock({}: Props){
    return (
        <div css={style}>
            <div className='wrapper'>
                <div className='img'>
                    
                </div>
                <div className='explain'>
                    <div className='tit'>

                    </div>
                    <div className='desc'>

                    </div>
                    <div className='tech'>

                    </div>
                    <div className='link'>

                    </div>
                </div>
            </div>
        </div>
    );
}

const style = css`
    padding: 20px 0;
    .wrapper {
        display: flex;
        .img {

        }
        .explain {
            .tit {
                
            }
            .desc {

            }
            .tech {

            }
            .link {

            }
        }
    }
`;

export default ProjectBlock;