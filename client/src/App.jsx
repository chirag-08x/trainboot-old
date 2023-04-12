import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Navbar, Sidebar } from "./components";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
