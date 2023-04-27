import React, { useState } from "react";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineFullscreen,
  AiOutlineFullscreenExit,
} from "react-icons/ai";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <>
    <div id="navbar">
    </div>
      <nav className="menu-wrapper">
        <>
          <a onClick={toggleFullscreen} className="icon" href="#">
            {isFullscreen ? (
              <AiOutlineFullscreenExit />
            ) : (
              <AiOutlineFullscreen />
            )}
          </a>

          <a href="/" className="icon">
            <AiFillHome />
          </a>
          {/* <a className="icon">
            <FaBars />
          </a> */}
        </>
      </nav>
    </>
  );
};

export default Navbar;
