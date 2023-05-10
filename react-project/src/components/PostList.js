import React from 'react';
import PostTitle from './PostTitle';


function PostList({posts, handleOnBlog}) {

    return(
        <div className = 'blog-list-container'>
            <div className='card-header'>
                <h5>Blog Posts</h5>
                <button className='post-btn'>Add Post</button>
            </div>
            <div className='blog-list'>
                {posts.map(post =>{
                    return(
                        <div onClick={()=>handleOnBlog(post)}>
                            <PostTitle post={post} key={post.id}/>
                        </div>    
                    );
            })}
            </div>
             
        </div>

    );
}


export default PostList;