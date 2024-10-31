import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { editPost } from "../features/Posts";
import React, { useEffect, useState } from "react";

function Edit() {
  const postList = useSelector((state) => state.posts.value);
  const editId = useSelector((state) => state.posts.value2);
  console.log(editId);
  const [date, setDate] = useState(postList[editId].date);
  const [name, setName] = useState(postList[editId].name);
  const [content, setContent] = useState(postList[editId].content);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      editPost({
        id: editId,
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
        <h1>編集</h1>
      </div>
      <div className="addPost">
        <div>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="件名"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <textarea
            placeholder="投稿内容"
            rows="4"
            cols="40"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>
        </div>
        <div class="button-position">
          <button onClick={() => handleClick()}>保存</button>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Edit;
