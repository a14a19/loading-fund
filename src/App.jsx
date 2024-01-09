import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideLoading } from "./features/loader/loaderSlice";
import StartAnimation from "./components/StartAnimation";
import Home from "./pages/Home";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isInitialRootLoading, setIsInitialRootLoading] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setIsInitialRootLoading(true);
      setTimeout(() => {
        dispatch(hideLoading());
        setIsInitialRootLoading(false);
      }, 3500);
    }
  }, [dispatch, location.pathname]);

  return (
    <>
      {isInitialRootLoading && <StartAnimation />}
      {!isInitialRootLoading && <Home />}
    </>
  );
}

export default App;

// <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/careers" element={<Careers />} />
// </Routes>
