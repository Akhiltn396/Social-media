import React from 'react'
import "./Posts.scss"
import Post from '../Post/Post';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { makeRequest } from '../../axios';


const Posts = ({userId}) => {
  const { isLoading, error, data } = useQuery('posts', () =>

makeRequest.get("/posts?userId="+userId).then((res)=>{
  return res.data
})

  )
  console.log(data);
  return (
    <div className='posts'>
      {
        error
        ?
        "Something went wrong"
        :
        isLoading
        ?"loading"
        :
        data.map(post=>(
         <Post post={post} key={post.id}/>
        ))
      }
    </div>
  )
}

export default Posts
