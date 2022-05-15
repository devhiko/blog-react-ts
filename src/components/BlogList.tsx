import { Link } from "react-router-dom";
import '../styles/Blogs.style.css'
import '../styles/Blog.style.css'
import { FetchData } from "../FetchData";

interface BlogListProps {
  blogs: FetchData[]
}

const BlogList = ({ blogs }: BlogListProps) => {
  return (
    <div className="blog-list">
      {blogs.map(blog =>
      (
        <div className="blog" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}><b>{blog.title}</b></Link>
          <p>{blog.content}</p>
          <small><em><p>Author: {blog.author}</p></em></small>
          {/* <small><p className="likes">Likes: {likes}</p></small> */}
        </div>
      ))}
    </div>
  )
}

export default BlogList;