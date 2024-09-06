import React from "react";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/authpage" &&
        location.pathname !== "/authpage" && (
          <footer>
            <div className="last">Copyright &copy; 2024 | All Rights Reserved</div>
          </footer>
        )}
    </>
  );
}
