import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/store";

test("Renders loading and placeholder messages", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const loadingMessage = await screen.findByText(/Loading Pokemon list.../i);
  expect(loadingMessage).toBeInTheDocument();

});
