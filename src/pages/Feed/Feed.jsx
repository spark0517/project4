import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import PostFeed from '../../components/PostFeed/PostFeed';
import PostForm from '../../components/PostForm/PostForm';
import * as postsApi from '../../utils/postApi';

export default function Feed(props) {

    const [posts, setPosts] = useState([])

    async function handleAddPost(post){
        try{
            const data = await postsApi.create(post)
            console.log(data, 'this is response from the server, in handleAddPost')
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <>
            <Header />
            <PostForm handleAddPost={handleAddPost}/>
            <PostFeed />
        </>
    )
}