import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App.tsx";
import LoginPage from "./main/login.tsx";

export default function PageRouter() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
      </Route>
      <Route path="login" element={<LoginPage/>} />
    </Routes>
  </BrowserRouter>
}