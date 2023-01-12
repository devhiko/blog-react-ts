import { render } from "@testing-library/react";
import { BrowserRouter as Router, Link } from "react-router-dom";

describe("BlogDetails", () => {
  const mockBlog = {
    id: 0,
    title: "sdfgf",
    content: "sdfgfhn",
    author: "me",
  };
  const MockBlogDetails = () => {
    return (
      <Router>
        <div title="details" className="blog-details">
          <h3>
            <b>{mockBlog.title}</b>
          </h3>
          <p>{mockBlog.content}</p>
          <small>
            <em>
              <p style={{ marginBottom: "2.5rem" }}>Author: {mockBlog.author}</p>
            </em>
          </small>
          <Link to={`/`}>
            <span style={{ padding: ".5rem", border: "1px solid rgba(32, 178, 171, 0.747)", color: "#000" }}>
              Go Home
            </span>
          </Link>
        </div>
      </Router>
    );
  };

  it("should render BlogDetails page and blogs in it", () => {
    const { getByRole, getByTitle } = render(<MockBlogDetails />);
    const details = getByTitle(/details/i);
    const title = getByRole("heading", {
      name: /sdfgf/i,
    });
    const link = getByRole("link", {
      name: /go home/i,
    });
    expect(details).toBeInTheDocument();
    expect(title).toHaveTextContent(mockBlog.title);
    expect(link).toHaveAttribute("href", "/");
  });
});
