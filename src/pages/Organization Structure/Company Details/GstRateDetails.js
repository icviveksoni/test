import React from 'react'
import '../Company/Company.css'

export default function GstRateDetails() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <div className='main-menu'>
                    <div className='heading'>GST Rate And Other Details</div>
                    <div className='row mt-3'>
                        <div className='col-12'>
                            <nav className="tabs px-0">
                                <label htmlFor="tab-content-1" className="tab-item">
                                    <span className="tab">HSN / SAC & Related Details</span>
                                </label>
                                <label htmlFor="tab-content-2" className="tab-item">
                                    <span className="tab">GST Rate & Related Deails</span>
                                </label>
                                <label htmlFor="tab-content-3" className="tab-item">
                                    <span className="tab">e-Way Bill Details</span>
                                </label>
                                <label htmlFor="tab-content-4" className="tab-item">
                                    <span className="tab">Additional Configuration</span>
                                </label>
                            </nav>
                            <main>
                                <content>
                                    <input type="radio" name="tab-content" id="tab-content-1" defaultChecked="" />
                                    <div className='row'>
                                        <div className='col-lg-3 col-md-6 col-12 text-start d-flex justify-content-between mt-3'>
                                            <label className='my-auto' for="car">HSN / SAC Details</label>
                                            <select name="car" id="car">
                                                <option value="volvo">Not Defined</option>
                                                <option value="saab">Inactive</option>
                                            </select>
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-12 text-start'>
                                            <label for="fname">HSN / SAC</label><br />
                                            <input className='w-100' type="text" id="fname" name="fname" />
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-12 text-start'>
                                            <label for="fname">Description</label><br />
                                            <input className='w-100' type="text" id="fname" name="fname" />
                                        </div>
                                    </div>
                                </content>
                                <content>
                                    <input type="radio" name="tab-content" id="tab-content-2" />
                                    <div className='row'>
                                        <div className='col-lg-3 col-md-6 mt-3 col-12 text-start d-flex justify-content-between'>
                                            <label className='my-auto' for="car">GST Rate Details</label>
                                            <select name="car" id="car">
                                                <option value="volvo">Active</option>
                                                <option value="saab">Inactive</option>
                                            </select>
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-12 text-start'>
                                            <label for="fname">Taxability Type</label><br />
                                            <input className='w-100' type="text" id="fname" name="fname" />
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-12 text-start'>
                                            <label for="fname">GST Rate</label><br />
                                            <input className='w-100' type="text" id="fname" name="fname" />
                                        </div>
                                    </div>
                                </content>
                                <content>
                                    <input type="radio" name="tab-content" id="tab-content-3" />
                                    <div className='row'>
                                        <div className='col-lg-3 col-md-6 col-12 text-start'>
                                            <label for="fname">Interstate Threshold Limit</label><br />
                                            <input className='w-100' type="text" id="fname" name="fname" />
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-12 text-start'>
                                            <label for="fname">Interstate Threshold Limit</label><br />
                                            <input className='w-100' type="text" id="fname" name="fname" />
                                        </div>
                                        <div className='col-lg-3 col-md-6 mt-3 col-12 text-start d-flex justify-content-between'>
                                            <label className='my-auto' for="car">Threshold Limit Includes</label>
                                            <select name="car" id="car">
                                                <option value="volvo">Yes</option>
                                                <option value="saab">No</option>
                                            </select>
                                        </div>
                                    </div>
                                </content>
                                <content>
                                    <input type="radio" name="tab-content" id="tab-content-4" />
                                    <div className='row'>
                                        <div className='col-lg-3 col-md-6 mt-3 col-12 text-start d-flex justify-content-between mt-3'>
                                            <label className='my-auto' for="car">Create HSN / SAC summary for</label>
                                            <select name="car" id="car">
                                                <option value="volvo">Yes</option>
                                                <option value="saab">No</option>
                                            </select>
                                        </div>
                                        <div className='col-lg-3 col-md-6 mt-3 col-12 text-start d-flex justify-content-between mt-3'>
                                            <label className='my-auto' for="car">Show GST Advances for adjustments in transaction</label>
                                            <select name="car" id="car">
                                                <option value="volvo">Yes</option>
                                                <option value="saab">No</option>
                                            </select>
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-12 text-start'>
                                            <label for="fname">Min length of HSN / SAC</label><br />
                                            <input className='w-100' type="text" id="fname" name="fname" />
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-12 text-start'>
                                            <label for="fname">Applicable from</label><br />
                                            <input className='w-100' type="text" id="fname" name="fname" />
                                        </div>
                                        <div className='col-12 my-4'>
                                            <div className='sub-heading text-start'>
                                                (Enter a Date after the period when you have reported your
                                                liabilities in Return using Journal Vouchers)
                                            </div>
                                        </div>
                                        <div className='col-lg-4 col-md-6 col-12 text-start d-flex justify-content-between'>
                                            <label className='my-auto' for="car">Update GST Status of Vouchers after Master Alteration</label>
                                            <select name="car" id="car">
                                                <option value="volvo">Yes</option>
                                                <option value="saab">No</option>
                                            </select>
                                        </div>
                                        <div className='col-lg-4 col-md-6 col-12 text-start d-flex justify-content-between'>
                                            <label className='my-auto' for="car">Set / Alter details for downloading GST Returns</label>
                                            <select name="car" id="car">
                                                <option value="volvo">Yes</option>
                                                <option value="saab">No</option>
                                            </select>
                                        </div>
                                    </div>
                                </content>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
