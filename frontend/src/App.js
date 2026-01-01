import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Digest from "./pages/Digest";
import Preferences from "./pages/Preferences";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Digest />} />
          <Route path="/preferences" element={<Preferences />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
