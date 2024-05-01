import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App.tsx";

export default function PageRouter() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
      </Route>
    </Routes>
  </BrowserRouter>
}