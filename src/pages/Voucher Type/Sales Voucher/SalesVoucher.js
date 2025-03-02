import React from 'react'

export default function SalesVoucher() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <div className='main-menu'>
                    <div className='heading'>Sales</div>
                    <div className='row'>
                        <div className='col-12'>
                            <select name="cars" id="cars">
                                <option value="volvo">English</option>
                                <option value="saab">Hindi</option>
                                <option value="mercedes">Gujrati</option>
                            </select>
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">Name</label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='sub-heading mb-2'>General</div>
                        <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">Select Type Of Voucher</label>
                            <input type="text" id="fname" name="fname" value="Sales"/>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">Abbreviation</label>
                            <input type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Activate This Voucher</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Define multiple numbering series for vouchers</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Show unused vch nos. in transactions for <br/>Retain Original Voucher No. behaviour</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Use effective dates for vouchers</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Allow zero-valued transactions</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Make this voucher type as 'Optional' by default</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Allow narration in voucher</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Provide narrations for each ledger in voucher</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Enable default accounting allocation</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Generate payment link / QR code after<br/> saving voucher</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">WhatsApp voucher after saving</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 d-flex justify-content-between mt-2'>
                            <label className='my-auto' for="fname">Position index in Reports</label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                    </div>
                    <div className='row mt-4 mb-5'>
                        <div className='sub-heading mb-2'>Printing</div>
                        <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Printing voucher after saving</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Use for POS invoicing</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-between mt-2'>
                            <label className='my-auto' for="fname">Default title to print</label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Default bank</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Not Applicable</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-between mt-2'>
                            <label className='my-auto' for="fname">Default jurisdiction</label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Set / alter declaration</label>
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
