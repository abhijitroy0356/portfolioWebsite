import { useEffect } from "react";
import Appheader from "../components/layout/Appheader";
import AppFooter from "../components/layout/AppFooter";
import { Outlet } from "react-router-dom";

const Root = () => {
  useEffect(() => {
    const loadGrainedScript = () => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/grained@0.0.2/grained.min.js"; // Correct URL for grained.js
      script.async = true;
      script.onload = () => {
        const options = {
          animate: true,
          patternWidth: 133.95,
          patternHeight: 53.11,
          grainOpacity: 0.15,
          grainDensity: 2,
          grainWidth: 1.5,
          grainHeight: 1.5,
        };

        if (window.grained) {
          window.grained("#grain", options);
        } else {
          console.error("Grained is not defined");
        }
      };
      document.body.appendChild(script);
    };

    loadGrainedScript();
  }, []);

  return (
    <div className="bg-backgroundColor" id="grain">
      <Appheader />
      <Outlet />
      <AppFooter />
    </div>
  );
};

export default Root;
