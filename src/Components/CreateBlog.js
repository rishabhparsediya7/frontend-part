import React, { useState } from "react";
import { pushData } from "../services/BlogService";

const CreateBlog = () => {
  const [blogData, setBlogData] = useState({
    id:"",
    title: "",
    content: "",
  });

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [id, setId]=useState("");

  async function saveData(blog) {
    const response = await pushData(blog);
    console.log(response);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(blogData);

    saveData(blogData);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Title</label>
          <input
            type="text"
            className="form-control"
            name="id"
            placeholder="ID 1, 2, 3 ....."
            onChange={(e) =>setBlogData({ ...blogData, id: e.target.value })}
            value={blogData.id}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="Title of the Blog"
            onChange={(e) =>setBlogData({ ...blogData, title: e.target.value })}
            value={blogData.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            className="form-control"
            rows="3"
            name="content"
            onChange={(e) =>setBlogData({ ...blogData, content: e.target.value })}
            value={blogData.content}
          ></textarea>
        </div>
        <div className="form-group">
          <input
            className="btn btn-primary"
            type="submit"
            value="Create Blog"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
