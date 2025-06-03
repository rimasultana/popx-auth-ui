import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AccountSettings from "./components/AccountSettings";
 function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/accountsettings" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
}
export default App
