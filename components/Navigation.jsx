import React from 'react'
import styled from 'styled-components'
import TwitterIcon from '@mui/icons-material/Twitter';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';

import {BiHomeCircle} from 'react-icons/bi';
 import {CgHashtag} from 'react-icons/cg';
 import {VscBell} from 'react-icons/vsc';
 import {IoMailOutline} from 'react-icons/io';
 import {BsBookmark,BsCardList} from 'react-icons/bs';
import { BookmarkOutlined, EmailOutlined, HomeOutlined, NotificationsOutlined, TagOutlined } from '@mui/icons-material';
import CreateIcon from '@mui/icons-material/Create';


function Navigation() {
    return (
        <Container>
            <div>
                <a href=""><TwitterIcon /></a>
           
           <a href=""><HomeOutlined /><span>Home</span></a>
           <a href=""><TagOutlined /><span>Explore</span></a>
           <a href=""><NotificationsOutlined/><span>Notifications</span></a>
           <a href=""><EmailOutlined /><span>Messages</span></a>
           <a href=""><BookmarkOutlined/> <span>Bookmarks</span> </a>
           <a href=""><FeaturedPlayListOutlinedIcon /><span>Lists</span></a>

            <button className='tweet-btn'><span>Tweet</span> <CreateIcon style={{display:'none'}} /></button>
            </div>
            
        </Container>
    )
}

export default Navigation


const Container=styled.div`
flex: .3;
display: flex;
flex-direction:column;
align-items: flex-end;

border-right: 1px solid rgb(102, 102, 102);
div{
    width: 300px;
}

a{
    display: flex;
    align-items: center;
    font-size: 20px;
    padding: 10px 0;
    text-decoration: none;
    &:hover{
        background-color: #5f5f5f;
    }

    svg{
        font-size: 30px;
        margin-right:20px;
    }
}


.tweet-btn{
    width: 80%;
    height: 50px;
    background-color: #5ba2ff;
           outline: none;
           border: none;
           padding: 10px 30px;
           border-radius: 50px;
           font-weight: bold;
           font-size: 18px;
}


@media screen and (max-width:700px){
    flex: unset;
    width: 50px !important;

    div a span{
        display: none;
    }div{
        width: 100%;
        svg{
            margin: 0 10px;
        }
    }
    .tweet-btn{
    width: 100%;

    height: 40px;
    
           padding: 10px;
           display: flex;
           align-items: center;
           justify-content: center;
            span{
                display: none;
            }
           svg{
               display: unset !important;
           }
}
}
`