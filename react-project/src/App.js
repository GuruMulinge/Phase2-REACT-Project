
import React, { useState,useEffect } from "react";
import BlogPage from "./components/BlogPage";
import BlogsList from "./components/BlogsList";

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
             <BlogPage posts={posts}/>
             <BlogsList posts={posts}/>
             
        </div>

    );
}



export default App;