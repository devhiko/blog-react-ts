import "../styles/Blogs.style.css";
import useFetch from "../useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const { data: blogs } = useFetch("http://localhost:8000/blogs");
  return (
    <div title="home" className="blogs">
      <h3>All Blogs</h3>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
