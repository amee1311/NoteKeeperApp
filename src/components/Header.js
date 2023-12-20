import React from "react";
import {
  ButtonGroup,
  Dropdown,
  DropdownButton,
  SplitButton,
} from "react-bootstrap";
import { PiDotsThreeCircleVerticalLight } from "react-icons/pi";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ handleToggleMode , handleSortByDate }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <div className="header-details">
        <button
          onClick={() =>
            handleToggleMode((previousDrakMode) => !previousDrakMode)
          }
          className="save"
        >
          Toggle Mode
        </button>
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            <PiDotsThreeCircleVerticalLight
              size="2em"
              className="sortlist-icon"
            />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#" onClick={() => handleSortByDate()}>Sort By Date</Dropdown.Item>
            <Dropdown.Item href="#">Group By Month</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
