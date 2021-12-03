import { SearchOutlined } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

function RightContainer() {
    return (
        <Container>
            <div className="wrap">
                <div className="search">
                <SearchOutlined />
                <input type="text" placeholder="Search Twitter" />
            </div>
            
            <div className="follows">
                <h3>Who to follow</h3>
                <div className="follow">
                    
                    <div className='left-follow'>
                        <Avatar className='avatar-icon' />
                        <div>
                            <h5>Aditya S</h5>
                            <h5>@aditya</h5>
                        </div>
                    </div>
                    <button>Follow</button>
                </div>
                <div className="follow">
                    
                    <div className='left-follow'>
                        <Avatar className='avatar-icon' />
                        <div>
                            <h5>Aditya S</h5>
                            <h5>@aditya</h5>
                        </div>
                    </div>
                    <button>Follow</button>
                </div>

            </div>
            </div>
      
        </Container>
    )
}

export default RightContainer


const Container=styled.div`
display: flex;
align-items: flex-start;
flex: .3;
.wrap{
    padding: 10px 0 10px 16px;
    width: 300px;
    display: flex;
    flex-direction: column;
    .search{
        width: 100%;
        display: flex;
        align-items: center;
        background-color: #313131;
        height: 50px;
        padding: 0 20px;
        border-radius: 50px;
        margin-bottom: 20px;
        input{
            padding-left: 10px;
            width: 100%;
            background-color: transparent;
            outline: none;
            border: none;
            
        }
    }
    .follows{
        background-color:#313131 ;
        border-radius: 30px;
        padding: 20px;
        .follow{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;

            .left-follow{
                display: flex;
                div h5:nth-child(2){
                    color: #727272;
                    font-weight: normal;
                }
                .avatar-icon{
                    margin-right: 10px;
                }
            }
            button{
                border-radius: 20px;
                color: black;
                height: 30px;
                width: 80px;
                outline: none;
                border: none;
            }
        }
    }
}


@media screen and (max-width:1100px){
    display: none;
}
`