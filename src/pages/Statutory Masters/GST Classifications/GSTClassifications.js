import React from 'react'

export default function GSTClassifications() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row mb-5'>
            <div className='col-12'>
                <div className='main-menu'>
                    <div className='heading'>GST Classification Creation</div>
                    <div className='row mt-3'>
                        <div className='col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">Name</label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='sub-heading'>HSN / SAC & Related Details</div>
                        <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">HSN / SAC Details</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Not Defined</option>
                                <option value="saab">Specify Details Here</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">HSN / SAC</label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">Description</label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='sub-heading'>GST Rate & Related Details</div>
                        <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">GST Rate Details</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Not Defined</option>
                                <option value="saab">Specify Details Here</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Taxability Type</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Taxable</option>
                                <option value="saab">Specify Details Here</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Nature of Transaction</label>
                            <select name="cars" id="cars">
                                <option value="volvo">System Inferred</option>
                                <option value="saab">Specify Details Here</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">IGST Rate</label>
                            <input type="text" id="fname" name="fname" placeholder='0 %'/>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">CGST Rate</label>
                            <input type="text" id="fname" name="fname" placeholder='0 %'/>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">SGST/UTGST Rate</label>
                            <input type="text" id="fname" name="fname" placeholder='0 %'/>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Cess Valuation Type</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Not Applicable</option>
                                <option value="saab">Specify Details Here</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">Cess Rate</label>
                            <input type="text" id="fname" name="fname" placeholder='0 %'/>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Applicable for Reverse Charge</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Eligible for Input Tax Credit</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
