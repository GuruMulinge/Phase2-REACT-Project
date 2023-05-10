import React from "react";
import PostList from "./PostList";


const PostPage=(posts) => {
    return(
        <div>
            {posts.map((post) =>{      
                return (
                <PostList key={post.id} post={post}/>
                );
            })}
        </div>
    );

};


export default PostPage;