import React, { useState } from "react";

const Nos = () => {
  // State for each field
  const [type, settype] = useState("Simple");
  const [symbol, setsymbol] = useState("nos");
  const [formal, setformal] = useState("Numbers");


  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-12">
            <div className="main-menu ">
                <div className="heading">Nos</div>
                <div className="row mt-3">
                    <div className="col-lg-4 col-md-6 col-12  d-flex justify-content-between">
                        <label className="my-auto font-bold">Type </label>
                        <input
                            type="text"
                            value={type}
                            onChange={(e) => settype(e.target.value)}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 offset-lg-1 d-flex justify-content-between">
                        <label className="my-auto font-bold">Symbol </label>
                        <input
                            type="text"
                            value={symbol}
                            onChange={(e) => setsymbol(e.target.value)}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12  d-flex justify-content-between">
                        <label className="my-auto font-bold">Formal name </label>
                        <input
                            type="text"
                            value={formal}
                            onChange={(e) => setformal(e.target.value)}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 offset-lg-1 d-flex justify-content-between">
                        <label className="my-auto font-bold ">Unit Quantity Code (UQC) </label>
                        <select  >
                            <option>NOS-NUMBERS</option>
                            <option>BAG-BAGS</option>
                            <option>BAL-BALE</option>
                            <option>CAN-CANS</option>
                            <option>ADD MORE</option>
                            
                        </select>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2  d-flex justify-content-between">
                        <label className="my-auto font-bold ">Number of decimal places </label>
                        <input
                            type="number"
                            placeholder="0"
                        />
                    </div>
                    
                    
            
                </div>

                

                
                

                


                
            </div>
        </div>
      </div>
    </div>
  );
};

export default Nos;
