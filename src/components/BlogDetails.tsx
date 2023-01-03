import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/BlogDetails.style.css";

interface RouteParams {
  id: string;
}

type Blog = {
  id: number;
  title: string;
  content: string;
  author: string;
};

const BlogDetails = () => {
  const { id } = useParams<RouteParams>();
  const [blog, setBlog] = useState<Blog>({ id: 0, title: "", content: "", author: "" });

  useEffect(() => {
    const BASE_URL = `http://localhost:8000/blogs`;
    const fetchBlog = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${id}`);
        const blog = await response.json();
        setBlog(blog);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlog();
  }, [id]);

  return (
    <div className="blog-details">
      <h3>
        <b>{blog.title}</b>
      </h3>
      <p>{blog.content}</p>
      <small>
        <em>
          <p style={{ marginBottom: "2.5rem" }}>Author: {blog.author}</p>
        </em>
      </small>
      <Link to={`/`}>
        <span style={{ padding: ".5rem", border: "1px solid rgba(32, 178, 171, 0.747)", color: "#000" }}>Go Home</span>
      </Link>
    </div>
  );
};
export default BlogDetails;
