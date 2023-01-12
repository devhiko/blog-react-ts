import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "../components/Login";

describe("Login", () => {
  const MockLogin = () => {
    return (
      <Router>
        <Login />
      </Router>
    );
  };

  it("should render login page, form and links in it", () => {
    const { getByText, getAllByRole, getByRole, getByTitle, getByPlaceholderText } = render(<MockLogin />);
    const log = getByTitle("log");
    expect(log).toBeInTheDocument();
    expect(log).toHaveClass("login");
    const form = getByTitle("log-form");
    expect(form).toBeInTheDocument();
    const userlbl = getByText(/Username:/);
    const pswlbl = getByText(/Password:/);
    expect(userlbl).toBeInTheDocument();
    expect(pswlbl).toBeInTheDocument();
    const input = getByRole("textbox");
    const password = getByPlaceholderText(/12345/i);
    const submit = getByRole("button", {
      name: /log in/i,
    });
    expect(input).toHaveValue("");
    expect(password).toHaveValue("");
    expect(input).not.toBeDisabled();
    expect(password).not.toBeDisabled();
    expect(submit).not.toBeDisabled();
    const linkItems = getAllByRole("link");
    expect(linkItems).toHaveLength(2);
    expect(linkItems[0]).toHaveTextContent(/Forgot Password/);
    expect(linkItems[0]).toHaveAttribute("href", "/forgot");
    expect(linkItems[1]).toHaveTextContent(/Sign Up/);
    expect(linkItems[1]).toHaveAttribute("href", "/signup");
  });
});
