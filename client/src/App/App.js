import React  from "react";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./Routing/Routing";
import { Layout } from "../Layout";
import { useFetch } from "../hooks/useFetch";

function App() {

  useFetch();

  return (
    <BrowserRouter>
      <Layout>
        <Routing />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
