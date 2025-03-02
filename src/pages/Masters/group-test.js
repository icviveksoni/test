import React, { useState } from "react";

const StockTest = () => {
  // State for each field
  const [name, setName] = useState("Group Test");
  const [under, setUnder] = useState("Primary");
  const [quantitiesAdded, setQuantitiesAdded] = useState("No");
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

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-12">
            <div className="main-menu ">
                <div className="heading">Group Test</div>
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
                        <label className="my-auto font-bold ">Under </label>
                        <select value={under} onChange={(e) => setUnder(e.target.value)}>
                            <option value="Primary">Primary</option>
                            <option value="Secondary">Secondary</option>
                        </select>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between">
                        <label className="my-auto font-bold ">Should quantities of items be added </label>
                        <select>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                </div>

                <div className="sub-heading mt-5 mb-2">Statutory Details</div>
                <div className="sub-heading mb-3">HSN/SAC & Related Details</div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between">
                        <label className="my-auto font-bold ">HSN/SAC Details </label>
                        <select
                            value={hsnSacDetails}
                            onChange={(e) => setHsnSacDetails(e.target.value)}
                        >
                            <option value="As per Company/Stock Group">
                            As per Company/Stock Group
                            </option>
                            <option value="Custom Details">Custom Details</option>
                        </select>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2 offset-lg-1 d-flex justify-content-between">
                        <label className="my-auto font-bold ">Source of details </label>
                        <select
                            value={sourceDetails}
                            onChange={(e) => setSourceDetails(e.target.value)}
                        >
                            <option value="Not Available">Not Available</option>
                            <option value="Available">Available</option>
                        </select>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between">
                        <label className="my-auto font-bold ">HSN/SAC </label>
                        <input
                            type="text"
                            placeholder="Enter HSN/SAC Code"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2 offset-lg-1 d-flex justify-content-between">
                        <label className="my-auto font-bold ">Description </label>
                        <input
                            type="text"
                            placeholder="Enter Description"
                        />
                    </div>
                </div>

                <div className="sub-heading mt-5 ">GST Rate & Related Details</div>
                <div className="row mb-5">
                <div className="col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between">
                <label className="my-auto font-bold ">GST Rate Details </label>
                    <select
                        value={gstRateDetails}
                        onChange={(e) => setGstRateDetails(e.target.value)}
                    >
                        <option value="As per Company/Stock Group">
                        As per Company/Stock Group
                        </option>
                        <option value="Custom GST Rate">Custom GST Rate</option>
                    </select>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2 offset-lg-1 d-flex justify-content-between">
                    <label className="my-auto font-bold ">Source of details </label>
                    <select
                        value={sourceDetails}
                        onChange={(e) => setSourceDetails(e.target.value)}
                    >
                        <option value="Not Available">Not Available</option>
                        <option value="Available">Available</option>
                    </select>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between">
                    <label className="my-auto font-bold ">Taxability Type </label>
                    <select>
                        <option value="Taxable">Taxable</option>
                        <option value="Exempt">Exempt</option>
                        <option value="Nil">Nil</option>
                    </select>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2 offset-lg-1 d-flex justify-content-between">
                    <label className="my-auto font-bold ">IGST Rate </label>
                    <input type="number" placeholder="0 %" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between">
                    <label className="my-auto font-bold ">CGST Rate </label>
                    <input type="number" placeholder="0 %" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2 offset-lg-1 d-flex justify-content-between">
                    <label className="my-auto font-bold ">SGST/UTGST Rate </label>
                    <input type="number" placeholder="0 %" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between">
                    <label className="my-auto font-bold ">Cess Valuation Type </label>
                    <select
                        value={cessValuationType}
                        onChange={(e) => setCessValuationType(e.target.value)}
                    >
                        <option value="Not Applicable">Not Applicable</option>
                        <option value="Ad Valorem">Ad Valorem</option>
                        <option value="Specific">Specific</option>
                    </select>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2 offset-lg-1 d-flex justify-content-between">
                    <label className="my-auto font-bold ">Cess Rate </label>
                    <input type="number" placeholder="0 %" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between">
                    <label className="my-auto font-bold ">Applicable for Reverse Charge </label>
                    <select
                        value={reverseCharge}
                        onChange={(e) => setReverseCharge(e.target.value)}
                    >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2 offset-lg-1 d-flex justify-content-between">
                    <label className="my-auto font-bold ">Eligible for Input Tax Credit </label>
                    <select
                        value={inputTaxCredit}
                        onChange={(e) => setInputTaxCredit(e.target.value)}
                    >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between">
                    <label className="my-auto font-bold ">Set/Alter other Statutory details </label>
                    <select>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                    </div>
                </div>


                {/* <div className="form-grid">
                <div className="form-container">
                    <div className="form-row">
                    <label className="my-auto">English </label>
                    </div>
                    <div className="form-row">
                    
                    </div>

                    <h3>Statutory Details</h3>

                    <h4>HSN/SAC & Related Details</h4>
                    <div className="form-row">
                    <label className="my-auto">HSN/SAC Details </label>
                    <select
                        value={hsnSacDetails}
                        onChange={(e) => setHsnSacDetails(e.target.value)}
                    >
                        <option value="As per Company/Stock Group">
                        As per Company/Stock Group
                        </option>
                        <option value="Custom Details">Custom Details</option>
                    </select>
                    </div>
                    <div className="form-row">
                    <label className="my-auto">Source of details </label>
                    <select
                        value={sourceDetails}
                        onChange={(e) => setSourceDetails(e.target.value)}
                    >
                        <option value="Not Available">Not Available</option>
                        <option value="Available">Available</option>
                    </select>
                    </div>
                    <div className="form-row">
                    <label className="my-auto">HSN/SAC </label>
                    <input
                        type="text"
                        placeholder="Enter HSN/SAC Code"
                    />
                    </div>
                    <div className="form-row">
                    <label className="my-auto">Description </label>
                    <input
                        type="text"
                        placeholder="Enter Description"
                    />
                    </div>

                    <h4>GST Rate & Related Details</h4>
                    <div className="form-row">
                    <label className="my-auto">GST Rate Details </label>
                    <select
                        value={gstRateDetails}
                        onChange={(e) => setGstRateDetails(e.target.value)}
                    >
                        <option value="As per Company/Stock Group">
                        As per Company/Stock Group
                        </option>
                        <option value="Custom GST Rate">Custom GST Rate</option>
                    </select>
                    </div>
                    <div className="form-row">
                    <label className="my-auto">Source of details </label>
                    <select
                        value={sourceDetails}
                        onChange={(e) => setSourceDetails(e.target.value)}
                    >
                        <option value="Not Available">Not Available</option>
                        <option value="Available">Available</option>
                    </select>
                    </div>
                    <div className="form-row">
                    <label className="my-auto">Taxability Type </label>
                    <select>
                        <option value="Taxable">Taxable</option>
                        <option value="Exempt">Exempt</option>
                        <option value="Nil">Nil</option>
                    </select>
                    </div>
                    <div className="form-row">
                    <label className="my-auto">IGST Rate </label>
                    <input type="number" placeholder="0 %" />
                    </div>
                    <div className="form-row">
                    <label className="my-auto">CGST Rate </label>
                    <input type="number" placeholder="0 %" />
                    </div>
                    <div className="form-row">
                    <label className="my-auto">SGST/UTGST Rate </label>
                    <input type="number" placeholder="0 %" />
                    </div>
                    <div className="form-row">
                    <label className="my-auto">Cess Valuation Type </label>
                    <select
                        value={cessValuationType}
                        onChange={(e) => setCessValuationType(e.target.value)}
                    >
                        <option value="Not Applicable">Not Applicable</option>
                        <option value="Ad Valorem">Ad Valorem</option>
                        <option value="Specific">Specific</option>
                    </select>
                    </div>
                    <div className="form-row">
                    <label className="my-auto">Cess Rate </label>
                    <input type="number" placeholder="0 %" />
                    </div>
                    <div className="form-row">
                    <label className="my-auto">Applicable for Reverse Charge </label>
                    <select
                        value={reverseCharge}
                        onChange={(e) => setReverseCharge(e.target.value)}
                    >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    </div>
                    <div className="form-row">
                    <label className="my-auto">Eligible for Input Tax Credit </label>
                    <select
                        value={inputTaxCredit}
                        onChange={(e) => setInputTaxCredit(e.target.value)}
                    >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    </div>
                    <div className="form-row">
                    <label className="my-auto">Set/Alter other Statutory details </label>
                    <select>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    </div>
                </div>
                </div> */}
            </div>
        </div>
      </div>
    </div>
  );
};

export default StockTest;
