import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../components/Home";

describe("Home", () => {
  const MockHome = () => {
    return (
      <Router>
        <Home />
      </Router>
    );
  };

  beforeEach(() => {
    console.log("Test Started");
    jest.mock("../mocks/fetch");
    console.log("Test Finished");
  });

  it("should render Home page and blogs in it", async () => {
    const { findByRole, findAllByTitle, findByTitle, findAllByRole } = render(<MockHome />);
    const bloglist = await findByTitle("bloglist");
    const blogs = await findAllByTitle("blog");
    expect(bloglist).toHaveClass("blog-list");
    expect(blogs).toHaveLength(blogs.length);
    expect(blogs[0]).toHaveClass("blog");
    const checkLinks = (ids: number[]) => {
      ids.forEach(async () => {
        const link = await findByRole("link", { name: `Blog Title ${ids[0]}` });
        expect(link).toHaveAttribute("href", `/blogs/${ids[0]}`);
      });
    };
    const ids = [1, 2, 3, 4, 5];
    checkLinks(ids);
    const links = await findAllByRole("link");
    expect(links).toHaveLength(ids.length);
    expect(blogs).toMatchSnapshot();
  });
});
