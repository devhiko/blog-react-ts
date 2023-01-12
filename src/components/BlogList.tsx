import { Link } from "react-router-dom";
import { FetchData } from "../FetchData";
import "../styles/Blog.style.css";
import "../styles/Blogs.style.css";

interface BlogListProps {
  blogs: FetchData;
}

const BlogList = ({ blogs }: BlogListProps) => {
  return (
    <div title="bloglist" className="blog-list">
      {blogs.map((blog) => (
        <div title="blog" className="blog" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <b>{blog.title}</b>
          </Link>
          <p>{blog.content}</p>
          <small>
            <em>
              <p>Author: {blog.author}</p>
            </em>
          </small>
          {/* <small><p className="likes">Likes: {likes}</p></small> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
