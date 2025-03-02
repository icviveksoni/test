import React from 'react'

export default function TcsInfo() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <div className='main-menu'>
                    <div className='heading'>TCS Details</div>
                    <div className='row mt-3'>
                        <div className='col-lg-4 col-md-6 col-12 text-start'>
                            <label for="fname">TAN Registration Number</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 text-start'>
                            <label for="fname">Tax Deduction and Collection Account Number (TAN)</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 text-start'>
                            <label for="fname">Deductor Type</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Deductor Branch / Division</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">STD Code</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Phone Number</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Email</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-4 col-md-6 mt-3 col-12 text-start d-flex justify-content-between'>
                            <label className='my-auto' for="car">Set / Alter Details of Person Responsible</label>
                            <select name="car" id="car">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-12'>
                            <div className='heading'>Rate Exemption Details</div>
                        </div>
                        <div className='col-lg-4 col-md-6 mt-3 col-12 text-start d-flex justify-content-between'>
                            <label className='my-auto' for="car">Ignore IT Exemption Limit For TDS Deduction</label>
                            <select name="car" id="car">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 mt-3 col-12 text-start d-flex justify-content-between'>
                            <label className='my-auto' for="car">Activate TDS For Stock Items</label>
                            <select name="car" id="car">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 mt-3 col-12 text-start d-flex justify-content-between'>
                            <label className='my-auto' for="car">Provide Surcharge And Cess Details</label>
                            <select name="car" id="car">
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
