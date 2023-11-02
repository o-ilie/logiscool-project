import React, { useState } from "react";

const MAX_VISIBILITY = 2;

const TabsWrapper = ({ children, active, setActive }) => {
  const count = React.Children.count(children);

  return (
    <div className="carousel">
      {active > 0 && (
        <button className="nav left" onClick={() => setActive((i) => i - 1)}>
          <i className="fas fa-chevron-left" />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          onClick={() => setActive(i)}
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 2,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            color: active === i ? "var(--base-500)" : "var(--base-400)",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button className="nav right" onClick={() => setActive((i) => i + 1)}>
          <i className="fas fa-chevron-right" />
        </button>
      )}
    </div>
  );
};

export default TabsWrapper;
