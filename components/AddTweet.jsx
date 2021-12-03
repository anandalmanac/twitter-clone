import { Avatar } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { GifBoxOutlined } from '@mui/icons-material';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTweet } from '../redux/actions/actions';
function AddTweet() {
    const posts=useSelector(state=>state.posts)
    const dispatch=useDispatch()



    return (
        <Container>
            <div className="left">
                <Avatar className='avatar-icon' />
            </div>
            <div className="right">
                <input type="text" placeholder="What's happening" />
                <div className='bottom-icons'>
                    <div>
                        <ImageOutlinedIcon />
                        <GifBoxOutlined />
                        <SentimentSatisfiedAltOutlinedIcon />
                        <CalendarTodayOutlinedIcon />
                    </div>
                    <button onClick={()=>dispatch(addTweet())} >Tweet</button>

                </div>
            </div>
            
        </Container>
    )
}

export default AddTweet


const Container=styled.div`
padding-top: 50px;
display: flex;
border-bottom:1px solid rgb(102, 102, 102) ;
padding-bottom: 20px;

.left{
    
    height: 100px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    .avatar-icon{
        height: 50px;
        width: 50px;

    }
}
.right{
    margin-right: 30px;
    width: 100%;
   input{
       background-color: transparent;
       outline: none;
       border: none;
       height: 100px;
       width: 100%;
       border-bottom:1px solid rgb(102, 102, 102) ;

   }
   .bottom-icons{
       margin-top: 20px;
       display: flex;
       align-items: center;
       justify-content: space-between;
       div svg{
           margin-right: 10px;
           path{
               color: #5ba2ff;
           }
           
       }
       button{
           background-color: #5ba2ff;
           outline: none;
           border: none;
           padding: 10px 30px;
           border-radius: 50px;
           font-weight: bold;
       }
   }
}

`