import { Provider } from "react-redux";
import { store } from "../index";
import LoginPage from "../components/LoginPage";
import { screen, render } from "@testing-library/react";

describe("LoginPage Test suite", () => {
  test("Will match snapshot", () => {
    const component = render(
      <Provider store={store}>
        <LoginPage />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  test("Input user name should be rendered", () => {
    const comp = render(
      <Provider store={store}>
        <LoginPage />
      </Provider>,
    );
    expect(screen.getByTestId("inputUserName")).toBeInTheDocument();
  });

  test("Input password should be rendered", () => {
    const comp = render(
      <Provider store={store}>
        <LoginPage />
      </Provider>,
    );
    expect(screen.getByTestId("inputPassword")).toBeInTheDocument();
  });
});
