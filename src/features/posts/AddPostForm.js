import React, { useState } from "react";

import { addNewPost } from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const [formData, setFormData] = useState({
    title: "",
    body: "",
    userId: "",
  });

  const [addPostStatus, setAddPostStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const canSave =
    Object.values(formData).every(Boolean) && addPostStatus === "idle";

  const handleFormSave = (e) => {
    e.preventDefault();
    if (canSave) {
      try {
        setAddPostStatus("pending");
        dispatch(addNewPost(formData)).unwrap();
        setFormData({ title: "", body: "", userId: "" });
      } catch (error) {
        console.log({ error });
      } finally {
        setAddPostStatus("idle");
      }
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
        onSubmit={handleFormSave}
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
          name="body"
          placeholder="Enter Content"
          onChange={handleChange}
          value={formData.body}
        />
        <button type="submit" disabled={!canSave}>
          Save
        </button>
      </form>
    </>
  );
};

export default AddPostForm;
