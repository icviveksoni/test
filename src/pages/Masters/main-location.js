import React, { useState } from "react";

const MainLocation = () => {
  // State for each field
  const [name, setName] = useState("Main Loaction");


  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-12">
            <div className="main-menu ">
                <div className="heading">Main Location</div>
                <div className="row mt-3">
                    <div className="col-lg-4 col-md-6 col-12  d-flex justify-content-between">
                        <label className="my-auto font-bold">Name </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 offset-lg-1 d-flex justify-content-between">
                        <label className="my-auto font-bold ">Under </label>
                        <select  >
                            <option>Primary</option>
                            
                        </select>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2  d-flex justify-content-between">
                        <label className="my-auto font-bold ">Address </label>
                        <input
                            type="text"
                            placeholder="Enter Address"
                        />
                    </div>
                    
                    
                    <div className="col-lg-4 col-md-6 col-12 mt-2 offset-lg-1 d-flex justify-content-between">
                        <label className="my-auto font-bold ">Allow storage of materials </label>
                        <select>
                        
                            <option >Yes</option>
                            <option >No</option>
                        </select>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2  d-flex justify-content-between">
                        <label className="my-auto font-bold ">Set job/project for job costing </label>
                        <select>
                        
                            <option >Primary</option>
                            
                        </select>
                    </div>
                </div>

                <div className="sub-heading mt-5 mb-2">Used for</div>
                <div className="row">
                <div className="col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between">
                    <label className="my-auto font-bold ">Our stock with third party  </label>
                    <select>
                    <option>No</option>
                        <option>Yes</option>
                        
                        
                    </select>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 offset-lg-1 mt-2 d-flex justify-content-between">
                    <label className="my-auto font-bold ">Third party stock with us  </label>
                    <select>
                    <option>No</option>
                        <option>Yes</option>
                        
                        
                    </select>
                    </div>
                </div>

                
                

                


                
            </div>
        </div>
      </div>
    </div>
  );
};

export default MainLocation;
