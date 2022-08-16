import React from "react";
import ArrowDesign from "./ArrowDesign";
import CountValue from "./CountValue";
import ActivationValue from "./ActivationValue";
import EsignValue from "./EsignValue";

const DataCount = () => {
  return (
    <div className="d-flex flex-column text-center pt-5 px-5">
      <div className="d-flex flex-row justify-content-between pb-4 px-2">
        <div className="valhead fw-bold text-uppercase shadow rounded-pill px-3">screen</div>
        <div className="valhead fw-bold text-uppercase shadow rounded-pill px-3">count</div>
      </div>
      <div className="d-flex flex-row align-items-center">
        <div className="datadiv py-3 col-5 rounded-4 shadow">
          <p className="datahead m-0 fw-bold">Registration</p>
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
          <p className="datahead m-0 fw-bold">Activation</p>
        </div>
        <div className="col-3">
          <ArrowDesign />
        </div>
        <div className="col-4">
          <ActivationValue />
        </div>
      </div>
      <div className="d-flex flex-row align-items-center">
        <div className="datadiv py-3 col-5 rounded-4 shadow">
          <p className="datahead m-0 fw-bold">E-Sign</p>
        </div>
        <div className="col-3">
          <ArrowDesign />
        </div>
        <div className="col-4">
          <EsignValue />
        </div>
      </div>
    </div>
  );
};

export default DataCount;
