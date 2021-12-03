import { Avatar } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Image from "next/image"
import { ChatBubbleOutlineOutlined, FavoriteBorderOutlined, FileUploadOutlined, LoopOutlined } from '@mui/icons-material'

function Post() {
    return (
        <Container>
            <div className="left">
                <Avatar className='avatar-icon' />
            </div>
            <div className="right">
                <h4>Amazon Web Services<span>@awscloud</span></h4>
                <p>
                    Police cars revolving light Livestreaming now from #reInvent is Kimberly Johnson, Executive VP & COO at 
                    @FannieMae
                    , sharing how #FannieMae is able to solve complex challenges in housing with the #AWS cloud. Cloud🏘Sparkles Live now! EyesRight pointing backhand index https://go.aws/3xHSY8y
                </p>
                <Image src='https://images-na.ssl-images-amazon.com/images/I/41+p+AdV+nL.jpg'
                    layout='responsive'
                    
                    height="100px"
                    width="100%"
                    objectFit="contain"
                
                />
                <div className="feed-footer">
                    <ChatBubbleOutlineOutlined />
                    <LoopOutlined />
                    <FavoriteBorderOutlined />
                    <FileUploadOutlined />
                </div>
            </div>
            
        </Container>
    )
}

export default Post


const Container=styled.div`
display: flex;
padding: 16px;
.left{
    .avatar-icon{
        height: 50px;
        width: 50px;
    }
    margin-right: 10px;
}
.right{
    h4 span{
        font-weight: normal;
        color: #747474;
    }p{
        font-weight: normal;
        font-size: 15px;
        margin-bottom: 10px;
    }
    img{
        border-radius: 30px;
    }
}
.feed-footer{
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
    svg path{
        color: #9e9e9e;
    }
}
`