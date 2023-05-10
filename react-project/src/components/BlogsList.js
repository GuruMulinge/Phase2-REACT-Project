import React from 'react';
import BlogTitle from './BlogTitle';
import './blog.css';


function BlogsList({posts, handleOnClick, handleOnPost }) {
    return(
        <div className='blog-list-container'>
            <div className='card-header'>
              <h5>Blog Posts</h5>
              <button className='post-btn' onClick={handleOnPost}>Add Post</button>
            </div>
            <div className='blog-list'>
              {posts.map((post) => {
                return (
                  <div key={post.id}>
                    <div>
                      <BlogTitle post={post} handleOnClick={handleOnClick}/>
                    </div>
                  </div>
                );
              })}
            </div>
        </div>
    );
}

export default BlogsList;
