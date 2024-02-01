import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import NewEntryPage from "./pages/NewEntryPage/NewEntryPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-entry" element={<NewEntryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
