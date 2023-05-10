import React, { useState,useEffect } from "react";
import BlogsList from "./components/BlogsList";
import BlogDisplay from "./components/BlogDisplay";
import './components/blog.css';

const App = () => {

    const[posts,setBlogPosts] = useState([]);
    const[displayPost,setDisplayPost] = useState([]);
    // const [list, setBlogLists] = useState([]);

    useEffect(() =>{
          fetch("http://localhost:3005/posts")
         .then(res => res.json())
         .then((posts)=>{
            setBlogPosts(posts);
            setDisplayPost(posts[0]);
        })
         .catch(err => console.log(err));
    },[]);
    const handleBlogTitleClick = (post) => {
        setDisplayPost(post);
    }


    console.log(posts);
    return(
        <div className="Blog-Page">
             <BlogsList posts={posts} handleOnClick={handleBlogTitleClick}/>
             {/* <BlogDisplay post={displayPost}/> */}
        </div>

    );
}



export default App;