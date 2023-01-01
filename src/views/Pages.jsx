import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from "./Default";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Default />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;