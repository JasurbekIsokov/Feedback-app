import React from "react";

function Card({ children, reverce }) {
  // return <div className={`card ${reverce && "reverce"}`}>{children}</div>;

  return (
    <div
      className="card"
      style={{
        backgroundColor: reverce ? "rgba(0,0,0,0.4)" : "#ffff",
        color: reverce ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverce: true,
};

export default Card;
