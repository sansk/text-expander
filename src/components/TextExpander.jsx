import React, { useState } from "react";

const TextExpander = ({
  children,
  className = "",
  collapsedNumWords = 10,
  expandButtonText = "Show More...",
  collapseButtonText = "Show Less...",
  buttonColor = "#1f09cd",
  expanded = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const btnStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "0.5rem",
    color: buttonColor,
  };

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button
        onClick={() => setIsExpanded((curVal) => !curVal)}
        style={btnStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
};

export default TextExpander;
