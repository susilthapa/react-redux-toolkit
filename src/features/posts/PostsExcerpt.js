import React from "react";
import { useSelector } from "react-redux";

import { selectAllUsers } from "../users/usersSlice";

const PostsExcerpt = ({ post }) => {
  const users = useSelector(selectAllUsers);
  return (
    <article>
      <div sx={{ display: "flex" }}>
        <h3>{post.title}</h3>{" "}
        <h5>
          ({users.find(({ id }) => id === post.userId)?.name ?? "Unknown"})
        </h5>
      </div>
      <p>{post.body.substring(0, 100)}</p>
    </article>
  );
};

export default PostsExcerpt;
