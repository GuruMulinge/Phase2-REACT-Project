
import React, { useState,useEffect } from "react";
import PostPage from "./components/PostPage";
import PostList from "./components/PostList";

const App = () => {

    const[posts,setBlogPosts] = useState([]);
    // const[display,setDisplyPosts] = useState([]);
     console.log(posts);
    useEffect(() =>{
          fetch("http://localhost:3005/posts")
         .then(res => res.json())
         .then((posts)=>{
            setBlogPosts(posts)
        })
         .catch(err => console.log(err));
    },[]);

    return(
        <div>
             <PostPage posts={posts}/>
             <PostList posts={posts}/>
             
        </div>

    );
}



export default App;