import REACT from 'react';


function AddPost({posts, onPostClick}){
    return(
        <div >
            <h5>Blog Posts</h5>
        <div className = "addblog-list-container">
            {posts.map(post =>(
                <AddPost post={post} key={post.id} onPost={() => onPostClick(post)}>
                <button className='submit-btn'> Add Post </button>
                </AddPost>
            ))}
        </div>

            
        </div>

    );
}


export default AddPost;