import React from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { YoutubeApiProvider } from "context/YoutubeApiContext";

const App = () => {
  const client = new QueryClient();

  return (
    <>
      <Header />
      <YoutubeApiProvider>
        <QueryClientProvider client={client}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
};

export default App;
