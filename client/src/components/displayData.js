import React, { useState } from "react";

function DisplayData(props) {
  //   const [userData, setUserData] = useState({});
  console.log(props.users);
  return (
    <div className="data-container">
      <div className="player-card">
        <div className="player-names">Player Name: {props.users.name}</div>
        <div className="player-country">
          Player Country: {props.users.country}
        </div>
        <div className="player-searches">
          Player Searches: {props.users.searches}
        </div>
        <div className="player-id">Player ID: {props.users.id}</div>
      </div>
    </div>
  );
}

export default DisplayData;
