import React from "react";

export const OverviewTab = ({ data }) => {
  return (
    <div>
      <h4 className="fs-3 fw-light">{data.description}</h4>
    </div>
  );
};
