import React, { useState } from "react";

const LoanAdvances = () => {
  // State for each field
  const [name, setName] = useState("Loan & Advances (Assets)");
  const [under, setUnder] = useState("Primary");
  const [quantitiesAdded, setQuantitiesAdded] = useState("No");
  const [natureOfGroup, setNatureOfGroup] = useState('Liabilities');
    const [groupBehavior, setGroupBehavior] = useState('No');
    const [netBalances, setNetBalances] = useState('No');
    const [calculationUsage, setCalculationUsage] = useState('No');
    const [allocationMethod, setAllocationMethod] = useState('Not Applicable');
  const [hsnSacDetails, setHsnSacDetails] = useState(
    "As per Company/Stock Group"
  );
  const [gstRateDetails, setGstRateDetails] = useState(
    "As per Company/Stock Group"
  );
  const [sourceDetails, setSourceDetails] = useState("Not Available");
  const [reverseCharge, setReverseCharge] = useState("No");
  const [inputTaxCredit, setInputTaxCredit] = useState("No");
  const [cessValuationType, setCessValuationType] = useState("Not Applicable");
  const [positionIndex, setPositionIndex] = useState('190');

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-12">
            <div className="main-menu">
                <div className="heading">Loan & Advances (Assets)</div>
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
                            <option value="Current Assets">Current Assets</option>
                            
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
                </div>

                <div className="sub-heading mt-5 mb-2">Statutory Details</div>
                <div className="sub-heading mb-3">HSN/SAC & Related Details</div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between">
                        <label className="my-auto font-bold">HSN/SAC Details </label>
                        <select
                            value={hsnSacDetails}
                            onChange={(e) => setHsnSacDetails(e.target.value)}
                        >
                            <option value="As per Company/Stock Group">
                            As per Company/Stock Group
                            </option>
                            <option value="Custom GST Rate">Custom GST Rate</option>
                            <option value="As per Company/Group">As per Company/Group</option>
                        <option value="Use GST Classification">Use GST Classification</option>
                        <option value="Specify in Voucher">Specify in Voucher</option>
                        </select>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2 offset-lg-1 d-flex justify-content-between">
                        <label className="my-auto font-bold">Source of details </label>
                        <select
                            value={sourceDetails}
                            onChange={(e) => setSourceDetails(e.target.value)}
                        >
                            <option value="Not Available">Not Available</option>
                            <option value="Available">Available</option>
                        </select>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between">
                        <label className="my-auto font-bold">HSN/SAC </label>
                        <input
                            type="text"
                            placeholder="Enter HSN/SAC Code"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2 offset-lg-1 d-flex justify-content-between">
                        <label className="my-auto font-bold">Description </label>
                        <input
                            type="text"
                            placeholder="Enter Description"
                        />
                    </div>
                </div>

                <div className="sub-heading mt-5">GST Rate & Related Details</div>
                <div className="row mb-5">
                <div className="col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between">
                <label className="my-auto font-bold">GST Rate Details </label>
                    <select
                        value={gstRateDetails}
                        onChange={(e) => setGstRateDetails(e.target.value)}
                    >
                        <option value="As per Company/Stock Group">
                        As per Company/Stock Group
                        </option>
                        <option value="As per Company/Group">As per Company/Group</option>
                        <option value="Specify Details Here">Specify Details Here</option>
                        <option value="Specify Slab-Based Rates">Specify Slab-Based Rates</option>
                        <option value="Use GST Classification">Use GST Classification</option>
                        <option value="Specify in Voucher">Specify in Voucher</option>
                    </select>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2 offset-lg-1 d-flex justify-content-between">
                    <label className="my-auto font-bold">Source of details </label>
                    <select
                        value={sourceDetails}
                        onChange={(e) => setSourceDetails(e.target.value)}
                    >
                        <option value="Not Available">Not Available</option>
                        <option value="Available">Available</option>
                    </select>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between">
                    <label className="my-auto font-bold">Taxability Type </label>
                    <select>
                        <option value="Taxable">Taxable</option>
                        <option value="Exempt">Exempt</option>
                        <option value="Nil">Nil</option>
                    </select>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-3 offset-lg-1 d-flex justify-content-between">
                        <span className="label font-bold ">Nature of Transation</span>
            <select
              value={natureOfGroup}
              onChange={(e) => setNatureOfGroup(e.target.value)}
              className="input"
            >
              
              <option value="System Inferred">System Inferred</option>
              <option value="Other">Other</option>
            </select>
                        </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2  d-flex justify-content-between">
                    <label className="my-auto font-bold">IGST Rate </label>
                    <input type="number" placeholder="0 %" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2 offset-lg-1 d-flex justify-content-between">
                    <label className="my-auto font-bold">CGST Rate </label>
                    <input type="number" placeholder="0 %" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2  d-flex justify-content-between">
                    <label className="my-auto font-bold">SGST/UTGST Rate </label>
                    <input type="number" placeholder="0 %" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2 offset-lg-1 d-flex justify-content-between">
                    <label className="my-auto font-bold">Cess Valuation Type </label>
                    <select
                        value={cessValuationType}
                        onChange={(e) => setCessValuationType(e.target.value)}
                    >
                        <option value="Not Applicable">Not Applicable</option>
                        <option value="Ad Valorem">Ad Valorem</option>
                        <option value="Specific">Specific</option>
                    </select>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2  d-flex justify-content-between">
                    <label className="my-auto font-bold">Cess Rate </label>
                    <input type="number" placeholder="0 %" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2 offset-lg-1 d-flex justify-content-between">
                    <label className="my-auto font-bold">Applicable for Reverse Charge </label>
                    <select
                        value={reverseCharge}
                        onChange={(e) => setReverseCharge(e.target.value)}
                    >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2  d-flex justify-content-between">
                    <label className="my-auto font-bold">Eligible for Input Tax Credit </label>
                    <select
                        value={inputTaxCredit}
                        onChange={(e) => setInputTaxCredit(e.target.value)}
                    >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2 offset-lg-1 d-flex justify-content-between">
                    <label className="my-auto font-bold">Set/Alter other Statutory details </label>
                    <select>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
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

export default LoanAdvances;
