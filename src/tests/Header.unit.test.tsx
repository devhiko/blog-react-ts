import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header";

describe("Header", () => {
  const MockHeader = () => {
    return (
      <Router>
        <Header />
      </Router>
    );
  };

  it("should render Header page, and link in it", () => {
    const { getByRole, getByTitle } = render(<MockHeader />);
    const header = getByTitle(/header/i);
    const h4 = getByRole("heading", { name: /paper blog/i });
    const link = getByRole("link", {
      name: /paper blog/i,
    });
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass("header");
    expect(h4).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
