import { useState, useEffect } from 'react';
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firabase-config";
import { useNavigate } from "react-router-dom";

const NewPost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const colectionPosts = collection(db, "posts");
  let navigate = useNavigate();

  const newPost = async () => {
    await addDoc(colectionPosts, { title, post, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }, });
    navigate("/");
  };
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>Create Post</h1>
        <div className='inputGp'>
          <label> Title:</label>
          <input
            placeholder="Title..." onChange={(event) => {
              setTitle(event.target.value);
            }} />
        </div>
        <div className='inputGp'>
          <label> Post:</label>
          <textarea
            placeholder="Post..." onChange={(event) => {
              setPost(event.target.value);
            }} />
        </div>
        <button onClick={newPost}> Submit Post</button>
      </div>
    </div>
  )
}

export default NewPost
