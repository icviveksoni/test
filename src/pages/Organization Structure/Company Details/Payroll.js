import React from 'react'

export default function Payroll() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <div className='main-menu'>
                    <div className='heading'>Payroll Details</div>
                    <div className='row mt-3'>
                        <div className='col-12'>
                            <div className='sub-heading'>Provident Fund</div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Company Code</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Company Account Group Code</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Company Security Code</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-12'>
                            <div className='sub-heading'>Employee State Insurance</div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Company Code</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">ESI Branch Office</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Standard Working Days Per Month</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-12'>
                            <div className='sub-heading'>National Pension Scheme</div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Corporate Registration Number</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Corporate Branch Office Number</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                    </div>
                    <div className='row my-4'>
                        <div className='col-12'>
                            <div className='sub-heading'>Income Tax</div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Tax Deduction And Collection Account Number (TAN)</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">TAN Registration Number</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Income Tax Circle Or Word</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Deductor Type</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Deductor Branch / Division</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Name Of Person Responsibles</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Son / Daughter Of</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Designation</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">PAN</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
