import { useSelector } from "react-redux";

import React from "react";
import { selectAllPosts } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const users = useSelector(selectAllUsers);

  const renderPosts = posts.map((post) => (
    <article key={post.id}>
      <div sx={{ display: "flex" }}>
        <h3>{post.title}</h3>{" "}
        <h5>
          ({users.find(({ id }) => id === post.userId)?.name ?? "Unknown"})
        </h5>
      </div>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
};

export default PostsList;
