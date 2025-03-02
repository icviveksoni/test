import React, { useState } from 'react';


const ReserveSurplus = () => {
  const [primaryOption, setPrimaryOption] = useState('Primary');
  const [natureOfGroup, setNatureOfGroup] = useState('Liabilities');
  const [groupBehavior, setGroupBehavior] = useState('No');
  const [netBalances, setNetBalances] = useState('No');
  const [calculationUsage, setCalculationUsage] = useState('No');
  const [allocationMethod, setAllocationMethod] = useState('Not Applicable');
  const [tdsDetails, setTdsDetails] = useState('No');
  const [tcsDetails, setTcsDetails] = useState('No');
  const [positionIndex, setPositionIndex] = useState('100');

return(

    <div className="container-fluid ">
        <div className="row">
           <div className="col-12">
              <div className="main-menu">
                  <div className="heading">Reserve Surplus</div>
                    <div className="row mt-3">
                        <div className="col-lg-4 col-md-6 col-12 mt-3  d-flex justify-content-between">
                         <label className='my-auto font-bold' > English Name</label>
                              <input
                                type="text"
                                defaultValue="Reserve Surplus"
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
                               <option value="Capital Account">Capital Account</option>
                              </select>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-12 mt-3  d-flex justify-content-between">
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
                        <div className="col-lg-4 col-md-6 col-12 mt-3  d-flex justify-content-between">
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
                        <span className="label font-bold ">Set/Alter TCS details</span>
            <select
              value={tcsDetails}
              onChange={(e) => setTcsDetails(e.target.value)}
              className="input"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mt-3 d-flex offset-lg-1 justify-content-between">
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
                  
export default ReserveSurplus; 
  
