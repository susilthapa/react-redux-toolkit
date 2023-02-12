import "./App.css";
import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <main>
      <PostsList />
      <AddPostForm />
    </main>
  );
}

export default App;
