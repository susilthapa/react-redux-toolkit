import React, { useState } from "react";

import { addPost } from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    userId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const canSave = formData.title && formData.content && formData.userId;

  const handleformSave = (e) => {
    e.preventDefault();
    if (canSave) {
      dispatch(addPost(formData));
      setFormData({ title: "", content: "", userId: "" });
    }
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

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
        <select name="userId" onChange={handleChange} value={formData.userId}>
          <option value={""}></option>
          {userOptions}
        </select>
        <textarea
          name="content"
          placeholder="Enter Content"
          onChange={handleChange}
          value={formData.content}
        />
        <button type="submit" disabled={!canSave}>
          Save
        </button>
      </form>
    </>
  );
};

export default AddPostForm;
