import { HeaderMobile } from "./components/HeaderMobile/HeaderMobile";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderMobile />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
