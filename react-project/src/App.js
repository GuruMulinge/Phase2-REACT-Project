import React, { useState, useEffect } from "react";
import BlogsList from "./components/BlogsList";
import BlogDisplay from "./components/BlogDisplay";
import AddBlogForm from "./components/AddBlogForm";
import "./components/blog.css";

const App = () => {
  const [posts, setBlogPosts] = useState([]);
  const [displayPost, setDisplayPost] = useState({});
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3005/posts")
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts(data);
        setDisplayPost(data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleBlogTitleClick = (post) => {
    setDisplayPost(post);
  };

  const handleOnPost = () => {
    setShowForm(true);
  };

  const handleOnClear = () => {
    setShowForm(false);
  };

  const handleOnSubmit = (post) => {
    fetch("http://localhost:3005/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts([...posts, data]);
        setDisplayPost(data);
        setShowForm(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Blog-Page">
      {showForm ? (
        <AddBlogForm handleOnClear={handleOnClear} handleOnSubmit={handleOnSubmit} />
      ) : (
        <>
          <BlogsList posts={posts} handleOnClick={handleBlogTitleClick} handleOnPost={handleOnPost} />
          <BlogDisplay post={displayPost} />
        </>
      )}
    </div>
  );
};

export default App;
