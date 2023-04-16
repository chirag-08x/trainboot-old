import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Dashboard, Player, AccessCode } from "./pages";
import { SharedLayout } from "./components";
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log("user", user);
  console.log(isAuthenticated);

  if (isLoading) {
    return (
      <div className="h-screen grid place-items-center">
        <h1 className="text-2xl">Loading....</h1>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard/:id"
          element={
            <PrivateRoute>
              <Player />
            </PrivateRoute>
          }
        />

        <Route path="/verify-access-code" element={<AccessCode />} />
      </Routes>
    </Router>
  );
};

export default App;
