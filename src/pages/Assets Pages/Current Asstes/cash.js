import React, { useState } from "react";

const Cash = () => {
  // State for each field
  const [name, setName] = useState("Cash");
  const [under, setUnder] = useState("Primary");
    const [groupBehavior, setGroupBehavior] = useState('No');
  const [positionIndex, setPositionIndex] = useState('1000');

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-12">
            <div className="main-menu">
                <div className="heading">Cash</div>
                <div className="row mt-3">
                    <div className="col-lg-4 col-md-6 col-12  d-flex justify-content-between">
                        <label className="my-auto font-bold">Name </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12  offset-lg-1 d-flex justify-content-between">
                        <label className="my-auto font-bold">Under </label>
                        <select value={under} onChange={(e) => setUnder(e.target.value)}>
                            <option value="Current Assets">Cash-In-Hand(Current Assets)</option>
                            
                        </select>
                    </div>
                        <div className="col-lg-4 col-md-6 col-12 mt-3  d-flex justify-content-between">
                        <span className="label font-bold ">Active Interest Calculation</span>
            <select
              value={groupBehavior}
              onChange={(e) => setGroupBehavior(e.target.value)}
              className="input"
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
              
            </select>
                        </div>
                </div>

                <div className="sub-heading mt-5 mb-2">Mailing Details</div>
                
                <div className="row">
                    
                    <div className="col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between">
                        <label className="my-auto font-bold">Name </label>
                        <input
                            type="text"
                            placeholder=""
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2 offset-lg-1 d-flex justify-content-between">
                        <label className="my-auto font-bold">Address </label>
                        <input
                            type="text"
                            placeholder=""
                        />
                    </div>
                </div>

                <div className="sub-heading mt-5">Banking Details</div>
                <div className="row">
                    
                <div className="col-lg-4 col-md-6 col-12 mt-3  d-flex justify-content-between">
                        <span className="label font-bold ">Provide Bank Details</span>
            <select
              value={groupBehavior}
              onChange={(e) => setGroupBehavior(e.target.value)}
              className="input"
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
              
            </select>
                        </div>
                </div>

                <div className="sub-heading mt-5">Tax Registration Details</div>
                <div className="row mb-9">
                    
                <div className="col-lg-4 col-md-6 col-12 mt-3  d-flex justify-content-between">
                        <span className="label font-bold ">PAN/IT No.</span>
                        <input
              type="number"
              
              className="input"
            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mt-3  d-flex justify-content-between">
                        <span className="label font-bold ">Position Index in Reports</span>
            <input
              type="number"
              value={positionIndex}
              onChange={(e) => setPositionIndex(e.target.value)}
              className="input"
            />
                        </div>
                </div>

                




                
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cash;
