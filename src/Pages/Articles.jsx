import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, postPost } from "../features/Posts";
import { useHistory } from "react-router-dom";
import React from "react";

function Articles() {
  const postList = useSelector((state) => state.posts.value);
  console.log(postList);

  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="App">
      <div>
        <h1>日記一覧</h1>
      </div>
      <div className="displayPosts">
        {postList.map((post) => (
          <div key={post.id} className="post">
            <h1 className="postDate">{post.date}</h1>
            <h1 className="postName">{post.name}</h1>
            <h1 className="postContent">{post.content}</h1>
            <dev class="button-article-posi">
              <button onClick={() => dispatch(deletePost({ id: post.id }))}>
                削除
              </button>
              <button
                onClick={() => {
                  dispatch(postPost({ id: post.id }));
                  history.push("/edit");
                }}
              >
                編集
              </button>
            </dev>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
