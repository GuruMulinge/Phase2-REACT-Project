import React from "react";
import BlogsList from "./BlogsList";
import BlogDisplay from "./BlogDisplay";
import './blog.css';


function BlogPage({posts}){
    return(
        <div >
            <div>
                {posts.map((post) =>{      
                    return (
                    <BlogsList key={post.id} post={post}/>
                    );
            })}
            </div>
            <div>
                {posts.map((post) =>{      
                    return (
                    <BlogDisplay key={post.id} post={post}/>
                    );
            })}

            </div>
        </div>
    );

};


export default BlogPage;