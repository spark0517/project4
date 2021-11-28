import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import PostFeed from '../../components/PostFeed/PostFeed';
import PostForm from '../../components/PostForm/PostForm';


export default function Feed(props){
    return (
        <>
        <Header />
        <PostForm />
        <PostFeed />
        </>
    )
}