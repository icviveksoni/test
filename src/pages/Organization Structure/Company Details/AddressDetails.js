import React from 'react'

export default function AddressDetails() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <div className='main-menu'>
                    <div className='heading'>Company : Demo India Pvt Ltd</div>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Mailing Name</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Address</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Pincode</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Phone Number</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Mobile Number</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Fax Number</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Email</label><br />
                            <input className='w-100' type="text" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                            <label for="fname">Website</label><br />
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
