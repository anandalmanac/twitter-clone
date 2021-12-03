import Head from 'next/head'
import Feed from '../components/Feed'

import Navigation from '../components/Navigation'

import RightContainer from '../components/RightContainer'
import styled from 'styled-components'


export default function Home() {

  
  return (
    <div>
      <Head>
        <title>Twitter</title>
        
      </Head>

      <Contents>
        <Navigation />
        <Feed />
        <RightContainer />
      </Contents>


    </div>
  )
}


const Contents=styled.div`
width: 100%;
display: flex;
height: 100vh;
overflow: hidden;


`