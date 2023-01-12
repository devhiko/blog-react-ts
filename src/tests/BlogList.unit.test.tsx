import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import BlogList from "../components/BlogList";

describe("BlogList", () => {
  const MockBlogList = () => {
    const mockBlogs = [
      {
        id: 0,
        title: "sdfgf",
        content: "sdfgfhn",
        author: "me",
      },
      {
        id: 1,
        title: "dfgfhj",
        content: "sdfgdrhhjfhn",
        author: "yo",
      },
      {
        id: 2,
        title: "şlkşlşl",
        content: "ğplişö",
        author: "us",
      },
    ];
    return (
      <Router>
        <BlogList blogs={mockBlogs} />
      </Router>
    );
  };

  it("should render BlogList page and blogs in it", () => {
    const { getByRole, getAllByTitle, getByTitle } = render(<MockBlogList />);
    const bloglist = getByTitle("bloglist");
    const blogs = getAllByTitle("blog");
    const link = getByRole("link", { name: "sdfgf" });
    expect(bloglist).toHaveClass("blog-list");
    expect(blogs).toHaveLength(blogs.length);
    expect(blogs[0]).toHaveClass("blog");
    expect(link).toHaveAttribute("href", "/blogs/0");
  });
});
