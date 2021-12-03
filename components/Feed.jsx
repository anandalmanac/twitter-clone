import React from 'react'
import styled from 'styled-components'
import AddTweet from './AddTweet'
import Post from './Post'


function Feed() {
    return (
        <Container>
            <Header>
                <h2>Home</h2>
            </Header>
            <AddTweet />
            <Post />
           
            
        </Container>
    )
}

export default Feed

const Container=styled.div`
flex:.4;
border-right: 1px solid rgb(102, 102, 102);
height: 100vh;
width: 100%;
overflow-y: scroll;
display: flex;
flex-direction: column;

::-webkit-scrollbar{
    width: 0;
}

@media screen and (max-width:1100px){
    flex:1 !important;
}

`
const Header=styled.div`
position: fixed;
border-bottom: 1px solid rgb(102, 102, 102);
padding: 0px 20px;
display: flex;
align-items: center;
height: 60px;
width: 40%;
background: black;
border-right: 1px solid rgb(102, 102, 102);
z-index:100;

h2{
    font-size: 18px;
    font-weight: 600;
}



@media screen and (max-width:1100px){
    width: 100%;
    flex:1 !important;
    
}

`

