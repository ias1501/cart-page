import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CalendarIcon from "react-calendar-icon";
import { MDBIcon } from "mdb-react-ui-kit";

import styled from "styled-components";
export default function App() {
  const handleClick = () => {
    // implementation details
  };

  return (
    <div className="App">
      <div className="top-bar"></div>
      <div className="details-rectangle">
        <MDBIcon
          className="ms-1 "
          icon="calendar"
          style={{ background: "white" }}
          fixed
          iconType="solid"
        />
        <MDBIcon
          className="ms-1 "
          icon="location"
          style={{ background: "white" }}
          fixed
          iconType="solid"
        />
        <MDBIcon
          className="ms-1 "
          icon="camera-retro"
          style={{ background: "white" }}
          fixed
          iconType="solid"
        />
        <h4>Date</h4>
        <h5>11 April 2023</h5>
        <h6>Venue</h6>
        <p>
          sardar vallabhbhai patel, institute of
          <br />
          technology
        </p>
        <h8>Get Directions</h8>
      </div>
      <div className="event-1">
        <h2> EVENT NAME </h2>
        <h3>$99</h3>

        <div className="button-holder">
          <div className="+">
            <a href="https://q5sk48.csb.app/">+</a>
          </div>
          <div className="+">
            <a1>-</a1>
          </div>
        </div>
        <div className="photo"></div>
      </div>
      <div className="event-2">
        <h2> EVENT NAME </h2>
        <h3>$99</h3>
        <div className="button-holder">
          <div className="+">
            <a href="https://q5sk48.csb.app/">+</a>
          </div>
          <div className="+">
            <a1 href="https://q5sk48.csb.app/">-</a1>
          </div>
        </div>
        <div className="photo"></div>
      </div>
      <div className="event-3">
        <h2> EVENT NAME </h2>
        <h3>$99</h3>
        <div className="button-holder">
          <div className="+">
            <a href="https://q5sk48.csb.app/">+</a>
          </div>
          <div className="+">
            <a1>-</a1>
          </div>
        </div>
        <div className="photo"></div>
      </div>
      <div className="total">
        <p1>Total Fee</p1>
        <p2>$78</p2>
        <button type="button" onClick={handleClick}>
          Pay Now
        </button>
      </div>
    </div>
  );
}
//icon,photos..
