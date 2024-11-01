import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import TopBar from "../components/TopBar";
import { store } from "../index";
import { BrowserRouter } from "react-router-dom";

describe("Topbar Test suite", () => {
  test("Should match snapshot", () => {
    const comp = render(
      <Provider store={store}>
        <BrowserRouter>
          <TopBar />
        </BrowserRouter>{" "}
      </Provider>,
    );
    expect(comp).toMatchSnapshot();
  });

  test("Should render home menu", () => {
    const comp = render(
      <Provider store={store}>
        <BrowserRouter>
          <TopBar />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByTestId("homeMenu")).toBeInTheDocument();
  });

  test("Should render leardboard menu", () => {
    const comp = render(
      <Provider store={store}>
        <BrowserRouter>
          <TopBar />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByTestId("leaderboardMenu")).toBeInTheDocument();
  });

  test("Should render new menu", () => {
    const comp = render(
      <Provider store={store}>
        <BrowserRouter>
          <TopBar />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByTestId("newMenu")).toBeInTheDocument();
  });
});
