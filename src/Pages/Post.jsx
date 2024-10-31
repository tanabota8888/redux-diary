import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../features/Posts";
import React, { useEffect, useState } from "react";

function Post() {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const postList = useSelector((state) => state.posts.value);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addPost({
        id: postList.length,
        date: date,
        name: name,
        content: content,
      })
    );

    setName("");
    setContent("");
  };

  useEffect(() => {
    setInterval(() => {
      let d = new Date();
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();

      setDate(year + "-" + month + "-" + day);
    });
  }, []);

  return (
    <div className="App">
      <div>
        <h1>投稿</h1>
      </div>
      <div className="addPost">
        <div>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            readonly
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="タイトル"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <textarea
            name="kansou"
            placeholder="投稿内容"
            rows="4"
            cols="40"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>
        </div>
        <div class="button-position">
          <button onClick={() => handleClick()}>投稿</button>
          <div id="mask" class="hidden"></div>
          <section id="modal" class="hidden">
            <p>投稿しました！</p>
          </section>
        </div>

        <hr />
      </div>
    </div>
  );
}

export default Post;
