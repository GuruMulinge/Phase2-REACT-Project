import AddPost from "./AddPostList";

const PostPage=() => {
    
    return(
        <div>
            {posts.map((post) =>{
                return <AddBlog key={post.id} post={post}/>;

            })}
        </div>

    );

}



export default PostPage;