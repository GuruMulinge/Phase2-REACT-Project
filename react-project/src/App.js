
import React, { useState,useEffect } from "react";
import PostPage from "./components/PostPage";

const App = () => {

    const[posts,setBlogPosts] = useState([]);
    const[display,setDisplyPosts] = useState([]);
     
    fetchPosts(){
        fetch()
    }
    return(
        <div>
             <PostPage/>
        </div>

    );
}