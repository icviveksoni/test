import React from 'react'
import './ParentCompany.css'

export default function ParentCompany() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                {/* <Sidebar/> */}
                
                <div className='main-menu'>
                    <div className='heading'>Parent Company</div>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 my-3'>Basic Details</div>
                            <div className='col-lg-3 col-md-6 col-12'>
                                <label for="fname">Company Name<sup style={{color:'red'}}>*</sup></label><br/>
                                <input className='w-100' type="text" id="fname" name="fname"/>
                            </div>
                            <div className='col-lg-3 col-md-6 col-12'>
                                <label for="fname">Company Code<sup style={{color:'red'}}>*</sup></label><br/>
                                <input className='w-100' type="text" id="fname" name="fname"/>
                            </div>
                            <div className='col-lg-3 col-md-6 col-12'>
                                <label for="fname">Mailing Name<sup style={{color:'red'}}>*</sup></label><br/>
                                <input className='w-100' type="text" id="fname" name="fname"/>
                            </div>
                            <div className='col-lg-3 col-md-6 col-12'>
                                <label for="fname">Country</label><br/>
                                <input className='w-100' type="text" id="fname" name="fname"/>
                            </div>
                            <div className='col-lg-3 col-md-6 col-12 mt-3'>
                                <label for="fname">Address</label><br/>
                                {/* <input className='w-100' type="text" id="fname" name="fname"/> */}
                                <textarea rows="1" className='w-100' name="comment" form="usrform"/>
                            </div>
                            <div className='col-lg-3 col-md-6 col-12 mt-3'>
                                <label for="fname">State</label><br/>
                                <input className='w-100' type="text" id="fname" name="fname"/>
                            </div>
                            <div className='col-lg-3 col-md-6 col-12 mt-3'>
                                <label for="fname">District</label><br/>
                                <input className='w-100' type="text" id="fname" name="fname"/>
                            </div>
                            <div className='col-lg-3 col-md-6 col-12 mt-3'>
                                <label for="fname">City\Town</label><br/>
                                <input className='w-100' type="text" id="fname" name="fname"/>
                            </div>
                            <div className='col-lg-3 col-md-6 col-12 mt-3'>
                                <label for="fname">Pincode</label><br/>
                                <input className='w-100' type="text" id="fname" name="fname"/>
                            </div>
                            <div className='col-lg-3 col-md-6 col-12 mt-3'>
                                <label for="fname">Telephone</label><br/>
                                <input className='w-100' type="text" id="fname" name="fname"/>
                            </div>
                            <div className='col-lg-3 col-md-6 col-12 mt-3'>
                                <label for="fname">Mobile</label><br/>
                                <input className='w-100' type="text" id="fname" name="fname"/>
                            </div>
                            <div className='col-lg-3 col-md-6 col-12 mt-3'>
                                <label for="fname">Fax</label><br/>
                                <input className='w-100' type="text" id="fname" name="fname"/>
                            </div>
                            <div className='col-lg-3 col-md-6 col-12 mt-3'>
                                <label for="fname">Email</label><br/>
                                <input className='w-100' type="text" id="fname" name="fname"/>
                            </div>
                            <div className='col-lg-3 col-md-6 col-12 mt-3'>
                                <label for="fname">Website</label><br/>
                                <input className='w-100' type="text" id="fname" name="fname"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
