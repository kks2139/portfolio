import React from 'react';
/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {AiOutlineMail} from 'react-icons/ai';
import {CgWebsite} from 'react-icons/cg';
import {FiGithub} from 'react-icons/fi';

interface Props {
    
}

function Contact({}: Props){
    const onClick = (e: React.MouseEvent<HTMLDivElement>)=>{
        const url = e.currentTarget.textContent || '';
        window.open(url, 'blank');
    }

    return (
        <div css={style}>
            <div className='row'>
                <AiOutlineMail size='35'/>
                <div className='txt'>eyeyel93@gmail.com</div>
            </div>
            <div className='row'>
                <CgWebsite size='35'/>
                <div className='txt link' onClick={onClick}>https://kwangsunny.tistory.com</div>
            </div>
            <div className='row'>
                <FiGithub size='35'/>
                <div className='txt link' onClick={onClick}>https://github.com/kks2139</div>
            </div>
        </div>
    );
}

const style = css`
    color: white;
    .row {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        .txt {
            font-size: 20px;
            margin-left: 20px;
            transition: .3s;
        }
        .link {
            cursor: pointer;
            &:hover {
                color: var(--color-link);
            }
        }
    }
`;

export default Contact;