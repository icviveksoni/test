import React from 'react'

export default function LedgerAlteration() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <div className='main-menu'>
                    <div className='heading'>Ledger Alteration</div>
                    <div className='row'>
                        <div className='col-12'>
                            <select name="cars" id="cars">
                                <option value="volvo">English</option>
                                <option value="saab">Hindi</option>
                                <option value="mercedes">Gujrati</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">Name</label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">Description</label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">Notes</label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Under</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Sundry Creditor for Goods</option>
                                <option value="saab">Create</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Maintain balance bill-by-bill</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 mt-2 offset-lg-1 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">Default credit period</label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Check for credit days during voucher entry</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 mt-2 offset-lg-1 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">Specify credit limit</label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Inventory values are affected</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Cost centres are applicable</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Activate interest calculation</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='sub-heading'>Statutory Details</div>
                        <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Is TDS Deductable</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Is TCS Deductable</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">Position Index in Reports</label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='sub-heading'>Mailing Details</div>
                        <div className='col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">Name</label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">Address</label>
                            {/* <input className='w-100' type="text" id="fname" name="fname"/> */}
                            <textarea rows="1" name="comment" form="usrform" />
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">State</label>
                            <select name="cars" id="cars">
                                <option value="volvo">West Bangal</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Country</label>
                            <select name="cars" id="cars">
                                <option value="volvo">India</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">Pincode</label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">Primary Mobile No.</label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Provide multiple Mobile Nos.</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Defauls WhatsApp No.</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Primary Mobile No.</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Provide Contacts Details</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Set / Alter multiple mailing details</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='sub-heading'>Banking Details</div>
                        <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Provide bank details</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                    </div>
                    <div className='row my-4'>
                        <div className='sub-heading'>Tax Registration Details</div>
                        <div className='col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">PAN / No.</label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
