import React, { useState } from "react";

const Act = () => {
  // State for each field
  const [name, setName] = useState("Act 1");
  

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-12">
            <div className="main-menu ">
                <div className="heading">Act 1</div>
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
                    
                    
                    
                    
                    
                </div>

                
                    
                

                
                

                


                
            </div>
        </div>
      </div>
    </div>
  );
};

export default Act;
