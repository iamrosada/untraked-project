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
import { Input } from "@chakra-ui/react";
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

  return (
    <div id="#disclaimer" className="modal-container">
      {/* <section ref={wrapperRef} className="modal"> */}
      <section ref={wrapperRef} className="mxo">
        {/* <header className="modal-header">
          <div className="css-4302v8">
            <input className="input icon"></input>
          </div>
        </header>
        <div className="modal-content">
          <p>
            <strong>Disclaimer:</strong> Vastness is bearable only through love
            emerged into consciousness not a sunrise but a galaxyrise emerged
            into consciousness courage of our questions across the centuries and
            billions upon billions upon billions upon billions upon billions
            upon billions upon billions.
          </p>
        </div> */}
        <Input placeholder="Digite o nome de um estudante :)" size="lg" />
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
              className="input icon"
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
