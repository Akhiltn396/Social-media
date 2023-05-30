import React from 'react'
import './Home.scss'
import Stories from '../../components/stories/Stories'
import Post from '../../components/Posts/Posts'
import Share from '../../components/Share/share'

const Home = () => {
  return (
    <div className='home'>
      <Stories/>
      <Share />
      <Post/>
    </div>
  )
}

export default Home
