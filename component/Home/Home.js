import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {

    const [post,setPost] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPost(data))
        .catch(error => console.error('Error fetching posts:', error));
        
    },[])
    return (
        <div >
            <h1>this is home</h1>
            <div style={{display:'flex', flexWrap: 'wrap',width:"100%"}}>
            {
                post.map(post=><Post key={post.id} post={post}></Post>)
            }
            </div>
           
        </div>
    );
};

export default Home;