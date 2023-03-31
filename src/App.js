import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { useContext } from "react";
import Home from "./pages/Home.jsx";
import Statistics from "./pages/Statistics";
import History from "./pages/History";
import { AuthContext } from "./context/AuthContext";
function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  return (
    <div className="h-screen">
      <BrowserRouter>
        <div className="h-16">
          <Header />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route
              path="/statistics"
              element={
                <RequireAuth>
                  <Statistics />
                </RequireAuth>
              }
            />
            <Route
              path="/history"
              element={
                <RequireAuth>
                  <History />
                </RequireAuth>
              }
            />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
