import React, { useState } from "react";

function DisplayData(props) {
  //   const [userData, setUserData] = useState({});
  console.log(props.users);
  return (
    <div className="data-container">
      <div className="player-card">
        <div className="player-names">
          <u>Player Name:</u> {props.users.name}
        </div>
        <div className="player-country">
          <u>Player Country:</u> {props.users.country}
        </div>
        <div className="player-searches">
          <u>Player Searches:</u> {props.users.searches}
        </div>
        <div className="player-id">
          <u>Player ID:</u> {props.users.id}
        </div>
      </div>
    </div>
  );
}

export default DisplayData;
