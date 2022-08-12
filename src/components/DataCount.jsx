import React from "react";
import ArrowDesign from "./ArrowDesign";
import CountValue from "./CountValue";

const DataCount = () => {
  return (
    <div className="d-flex flex-column text-center pt-5 px-3">
      <div className="d-flex flex-row align-items-center">
        <div className="datadiv py-3 col-5 rounded-4 shadow">
          <p className="datahead m-0 fs-5 fw-bold">Registration</p>
        </div>
        <div className="col-3">
          <ArrowDesign />
        </div>
        <div className="col-4">
          <CountValue />
        </div>
      </div>
      <div className="d-flex flex-row align-items-center py-4">
        <div className="datadiv py-3 col-5 rounded-4 shadow">
          <p className="datahead m-0 fs-5 fw-bold">Activation</p>
        </div>
        <div className="col-3">
          <ArrowDesign />
        </div>
        <div className="col-4">
          <CountValue />
        </div>
      </div>
      <div className="d-flex flex-row align-items-center">
        <div className="datadiv py-3 col-5 rounded-4 shadow">
          <p className="datahead m-0 fs-5 fw-bold">E-Sign</p>
        </div>
        <div className="col-3">
          <ArrowDesign />
        </div>
        <div className="col-4">
          <CountValue />
        </div>
      </div>
    </div>
  );
};

export default DataCount;
