import React from "react";
import "./HackathonsAdmin.css";

const HackathonsAdmin = ({ hackathon }) => {
  const isOngoing = hackathon.tags.some((tag) =>
    tag.toLowerCase().includes("ongoing")
  );

  return (
    <div className="hackathon-admin">
      <h2>{hackathon.name}</h2>
      <p>{hackathon.description}</p>
      {isOngoing && (
        <>
          <section>
            <h3>Hackathon Info</h3>
            <p>{/* Display additional info */}</p>
          </section>
          <section>
            <h3>Progress</h3>
            <p>{/* Calculate hours left */}</p>
          </section>
          <section>
            <h3>Teams</h3>
            <ul>
              <li>Team 1 - <button>View</button> <button>Remove</button></li>
              <li>Team 2 - <button>View</button> <button>Remove</button></li>
            </ul>
          </section>
        </>
      )}
    </div>
  );
};

export default HackathonsAdmin;
