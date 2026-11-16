
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Practices from "./pages/Practices";
import Crops from "./pages/Crops";
import Regions from "./pages/Regions";
import About from "./pages/About";
import Bihar from "./pages/Bihar";
import Rajasthan from "./pages/Rajasthan";
import Kerala from "./pages/Kerala";
import Punjab from "./pages/Punjab";
import Maharashtra from "./pages/Maharashtra";
import NorthEastIndia from "./pages/NorthEastIndia";
import OrganicFarming from "./pages/OrganicFarming";
import TraditionalWaterManagement from "./pages/TraditionalWaterManagement";
import MixedCropping from "./pages/MixedCropping";
import NaturalPestManagement from "./pages/NaturalPestManagement";
import LocalFarmingMethods from "./pages/LocalFarmingMethods";
import SeedPreservation from "./pages/SeedPreservation";

// Crop Detail Page
import Rice from "./pages/Rice";
import Millets from "./pages/Millets";
import Pulses from "./pages/Pulses";
import TraditionalHerbs from "./pages/TraditionalHerbs";
import Oilseeds from "./pages/Oilseeds";
import LocalVarieties from "./pages/LocalVarieties";

import Login from "./Login";
import Register from "./Register";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import "./App.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setChecking(false);
    });

    return () => unsubscribe();
  }, []);

  if (checking) {
    return (
      <p style={{ textAlign: "center", padding: "40px" }}>
        Checking login...
      </p>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}


function App() {
  return (
    <div className="app">

      <ScrollToTop />

      <Routes>

        {/* Home Page - Always accessible */}
        <Route path="/" element={<Home />} />

        {/* Login and Register */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        {/* Protected Practice Pages */}

        <Route
          path="/practices"
          element={
            <ProtectedRoute>
              <Practices />
            </ProtectedRoute>
          }
        />

        <Route
          path="/practices/organic-farming"
          element={
            <ProtectedRoute>
              <OrganicFarming />
            </ProtectedRoute>
          }
        />

        <Route
          path="/practices/water-management"
          element={
            <ProtectedRoute>
              <TraditionalWaterManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/practices/mixed-cropping"
          element={
            <ProtectedRoute>
              <MixedCropping />
            </ProtectedRoute>
          }
        />

        <Route
          path="/practices/natural-pest-management"
          element={
            <ProtectedRoute>
              <NaturalPestManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/practices/local-farming-methods"
          element={
            <ProtectedRoute>
              <LocalFarmingMethods />
            </ProtectedRoute>
          }
        />

        <Route
          path="/practices/seed-preservation"
          element={
            <ProtectedRoute>
              <SeedPreservation />
            </ProtectedRoute>
          }
        />


        {/* Protected Crops Pages */}

        <Route
          path="/crops"
          element={
            <ProtectedRoute>
              <Crops />
            </ProtectedRoute>
          }
        />

        <Route
          path="/crops/rice"
          element={
            <ProtectedRoute>
              <Rice />
            </ProtectedRoute>
          }
        />
        <Route
  path="/crops/millets"
  element={
    <ProtectedRoute>
      <Millets />
    </ProtectedRoute>
  }
/>
<Route
  path="/crops/pulses"
  element={
    <ProtectedRoute>
      <Pulses />
    </ProtectedRoute>
  }
/>
<Route
  path="/crops/traditional-herbs"
  element={
    <ProtectedRoute>
      <TraditionalHerbs />
    </ProtectedRoute>
  }
/>
<Route
  path="/crops/oilseeds"
  element={
    <ProtectedRoute>
      <Oilseeds />
    </ProtectedRoute>
  }
/>
<Route
  path="/crops/local-varieties"
  element={
    <ProtectedRoute>
      <LocalVarieties />
    </ProtectedRoute>
  }
/>

        {/* Other Protected Pages */}

        <Route
          path="/regions"
          element={
            <ProtectedRoute>
              <Regions />
            </ProtectedRoute>
          }
        />
        <Route
  path="/regions/bihar"
  element={
    <ProtectedRoute>
      <Bihar />
    </ProtectedRoute>
  }
/>
<Route
  path="/regions/rajasthan"
  element={
    <ProtectedRoute>
      <Rajasthan />
    </ProtectedRoute>
  }
/>
    <Route
  path="/regions/kerala"
  element={
    <ProtectedRoute>
      <Kerala />
    </ProtectedRoute>
  }
/>    
<Route
  path="/regions/punjab"
  element={
    <ProtectedRoute>
      <Punjab />
    </ProtectedRoute>
  }
/>
<Route
  path="/regions/maharashtra"
  element={
    <ProtectedRoute>
      <Maharashtra />
    </ProtectedRoute>
  }
/>
<Route
  path="/regions/north-east-india"
  element={
    <ProtectedRoute>
      <NorthEastIndia />
    </ProtectedRoute>
  }
/>
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />

      </Routes>

    </div>
  );
}

export default App;
