import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { addPost } from "./postsSlice";
import { useDispatch } from "react-redux";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleformSave = (e) => {
    e.preventDefault();
    if (formData.title && formData.content) {
      dispatch(addPost(formData));
      setFormData({ ...formData, title: "", content: "" });
    }
  };

  return (
    <>
      <h3>Add Post</h3>
      <form
        onSubmit={handleformSave}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          name="title"
          placeholder="Enter title"
          onChange={handleChange}
          value={formData.title}
        />
        <textarea
          name="content"
          placeholder="Enter Content"
          onChange={handleChange}
          value={formData.content}
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default AddPostForm;
