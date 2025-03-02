import React, { useState } from 'react';


const DutiesTaxes = () => {
  const [primaryOption, setPrimaryOption] = useState('Primary');
  const [groupBehavior, setGroupBehavior] = useState('No');
  const [netBalances, setNetBalances] = useState('No');
  const [calculationUsage, setCalculationUsage] = useState('No');
  const [allocationMethod, setAllocationMethod] = useState('Not Applicable');
  const [tdsDetails, setTdsDetails] = useState('No');
  const [positionIndex, setPositionIndex] = useState('70');

return(

    <div className="container-fluid ">
        <div className="row">
           <div className="col-12">
              <div className="main-menu">
                  <div className="heading">Duties Taxes</div>
                    <div className="row mt-3">
                        <div className="col-lg-4 col-md-6 col-12 mt-3 d-flex justify-content-between">
                         <label className='my-auto font-bold' > English Name</label>
                              <input
                                type="text"
                                defaultValue="Duties Taxes"
                                className="input"
                              />
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mt-3 offset-lg-1 d-flex justify-content-between">
                        <span className="label font-bold">Under</span>
                          <select
                               value={primaryOption}
                               onChange={(e) => setPrimaryOption(e.target.value)}
                               className="input"
                               >
                               <option value="Current Liabilities">Current Liabilities</option>
                              </select>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-12 mt-3 d-flex justify-content-between">
                        <span className="label font-bold ">Group behaves like a sub-ledger</span>
            <select
              value={groupBehavior}
              onChange={(e) => setGroupBehavior(e.target.value)}
              className="input"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mt-3 offset-lg-1 d-flex justify-content-between">
                        <span className="label font-bold ">Nett Debit/Credit Balances for Reporting</span>
            <select
              value={netBalances}
              onChange={(e) => setNetBalances(e.target.value)}
              className="input"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mt-3 d-flex justify-content-between">
                        <span className="label font-bold ">Used for calculation (e.g. taxes, discounts)</span>
            <select
              value={calculationUsage}
              onChange={(e) => setCalculationUsage(e.target.value)}
              className="input"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mt-3 offset-lg-1 d-flex justify-content-between">
                        <span className="label font-bold ">Method to allocate when used in purchase invoice</span>
            <select
              value={allocationMethod}
              onChange={(e) => setAllocationMethod(e.target.value)}
              className="input"
            >
              <option value="Not Applicable">Not Applicable</option>
              <option value="Applicable">Appropriate by Qty</option>
              <option value="Applicable">Appropriate by value</option>
            </select>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mt-3  d-flex justify-content-between">
                        <span className="label font-bold ">Set/Alter TDS details</span>
            <select
              value={tdsDetails}
              onChange={(e) => setTdsDetails(e.target.value)}
              className="input"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
                        </div>
                      
                        <div className="col-lg-4 col-md-6 col-12 mt-3 offset-lg-1 d-flex justify-content-between">
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
                  
export default DutiesTaxes; 
  {/* return (
    <div className="container">
      <div className="box">
        <h2 className="header">Branch / Divisions</h2>
        <div className="form-grid">
          
          <div className="form-row">
            <span className="label">English Name:</span>
            <input
              type="text"
              defaultValue="Branch / Divisions"
              className="input"
            />
          </div>

          
          <div className="form-row">
            <span className="label">Under:</span>
            <select
              value={primaryOption}
              onChange={(e) => setPrimaryOption(e.target.value)}
              className="input"
            >
              <option value="Primary">Primary</option>
            </select>
          </div>

          
          <div className="form-row">
            <span className="label">Nature of Group:</span>
            <select
              value={natureOfGroup}
              onChange={(e) => setNatureOfGroup(e.target.value)}
              className="input"
            >
              <option value="Liabilities">Liabilities</option>
              <option value="Assets">Assets</option>
            </select>
          </div>

          
          <div className="form-row">
            <span className="label">Group behaves like a sub-ledger:</span>
            <select
              value={groupBehavior}
              onChange={(e) => setGroupBehavior(e.target.value)}
              className="input"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          
          <div className="form-row">
            <span className="label">Nett Debit/Credit Balances for Reporting:</span>
            <select
              value={netBalances}
              onChange={(e) => setNetBalances(e.target.value)}
              className="input"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          
          <div className="form-row">
            <span className="label">Used for calculation (e.g. taxes, discounts):</span>
            <select
              value={calculationUsage}
              onChange={(e) => setCalculationUsage(e.target.value)}
              className="input"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          
          <div className="form-row">
            <span className="label">Method to allocate when used in purchase invoice:</span>
            <select
              value={allocationMethod}
              onChange={(e) => setAllocationMethod(e.target.value)}
              className="input"
            >
              <option value="Not Applicable">Not Applicable</option>
              <option value="Applicable">Appropriate by Qty</option>
              <option value="Applicable">Appropriate by value</option>
            </select>
          </div>

          
          <div className="form-row">
            <span className="label">Set/Alter TCS details:</span>
            <select
              value={tcsDetails}
              onChange={(e) => setTcsDetails(e.target.value)}
              className="input"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          
          <div className="form-row">
            <span className="label">Position Index in Reports:</span>
            <input
              type="number"
              value={positionIndex}
              onChange={(e) => setPositionIndex(e.target.value)}
              className="input"
            />
          </div>
        </div>

        
        <div className="footer">
          <button className="button back" onClick={() => navigate(-1)}>
            Back
          </button>
          <button className="button accept">Accept</button>
        </div>
      </div>
    </div>*/}
  
