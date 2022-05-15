import { useParams } from "react-router";
import useFetch from "../useFetch";
import '../styles/BlogDetails.style.css'

const BlogDetails = () => {

  interface RouteParams {
    id?: string
  }

  const { id } = useParams<RouteParams>();
  const { data: blog }: any = useFetch(`http://localhost:8000/blogs/${id}`)

  return (
    <div className="blog-details">
      <h3><b>{blog.title}</b></h3>
      <p>{blog.content}</p>
      <small><em><p>Author: {blog.author}</p></em></small>
    </div>
  )
}
export default BlogDetails;