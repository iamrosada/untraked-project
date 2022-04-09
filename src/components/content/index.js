import React, { useEffect, useState, useRef } from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import {
  Navbar,
  NavbarHeading,
  NavbarGroup,
  NavbarDivider,
  Button,
} from "@blueprintjs/core";
import "./styles.css";

const SearchInput = ({ isOpen, setShowComponent }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        // alert("You clicked outside of me dsgfdg!");
        setShowComponent({ showComponent: false });
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowComponent, wrapperRef]);

  // useEffect(() => {
  //   const element = document.getElementById("b");
  //   if (isOpen) {
  //     element.addEventListener("click", () => {
  //       console.log("clicou no modal");
  //     });
  //   } else {
  //     document.removeEventListener("click", () => {});
  //   }
  // });
  return (
    <div id="#disclaimer" className="modal-container">
      <section ref={wrapperRef} id="b" className="modal">
        <header className="modal-header">
          <input></input>
        </header>
        <div className="modal-content">
          <p>
            <strong>Disclaimer:</strong> Vastness is bearable only through love
            emerged into consciousness not a sunrise but a galaxyrise emerged
            into consciousness courage of our questions across the centuries and
            billions upon billions upon billions upon billions upon billions
            upon billions upon billions.
          </p>
        </div>
      </section>
    </div>
  );
};
const NavbarGlobal = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleInput = () => {
    setShowComponent({ showComponent: true });
  };

  const ative = "ative";

  return (
    <div className={`${showComponent ? ative : null}`}>
      <Navbar>
        <div className="nav">
          <NavbarGroup align={"right"} className="nav-container">
            <input
              className="bp4-input"
              placeholder="Search files..."
              type="text"
              onClick={handleInput}
            />
            <NavbarHeading>Untracked</NavbarHeading>
            <NavbarDivider />

            <Button icon="user" text="Rosada Luis" />
          </NavbarGroup>
        </div>
      </Navbar>
      {showComponent ? (
        <SearchInput
          setShowComponent={() => setShowComponent()}
          isOpen={showComponent}
        />
      ) : null}
    </div>
  );
};

export default NavbarGlobal;
