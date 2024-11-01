import { Provider } from "react-redux";
import { store } from "../index";
import LoginPage from "../components/LoginPage";
import { screen, render, fireEvent } from "@testing-library/react";

describe("LoginPage Test suite", () => {
  test("Will match snapshot", () => {
    const comp = render(
      <Provider store={store}>
        <LoginPage />
      </Provider>,
    );
    expect(comp).toMatchSnapshot();
  });

  test("Input user name should be rendered", () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>,
    );
    expect(screen.getByTestId("inputUserName")).toBeInTheDocument();
  });

  test("Input password should be rendered", () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>,
    );
    expect(screen.getByTestId("inputPassword")).toBeInTheDocument();
  });

  test("Fire event when user input username", () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>,
    );
    const inputUserName = screen.getByTestId("inputUserName");
    fireEvent.change(inputUserName, { target: { value: "username" } });
    expect(screen.getByTestId("inputUserName").value).toBe("username");
  });

  test("Fire event when user input password", () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>,
    );
    const inputPassword = screen.getByTestId("inputPassword");
    fireEvent.change(inputPassword, { target: { value: "pass" } });
    expect(screen.getByTestId("inputPassword").value).toBe("pass");
  });
});
