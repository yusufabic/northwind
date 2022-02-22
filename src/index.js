import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { render } from "react-dom";
import App from "./App";
const queryClient = new QueryClient();

render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById("root")
);
