import React from 'react'
import '../Company/Company.css'

export default function CreateStore() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='main-menu'>
                            <div className='heading'>Create New Store</div>
                            <div className='container-fluid'>
                                <div className='row details pb-4 mt-3'>
                                    <div className='col-lg-3 col-md-6 col-12'>
                                        <label for="fname">Company Name<sup style={{ color: 'red' }}>*</sup></label><br />
                                        <input className='w-100' type="text" id="fname" name="fname" />
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-12'>
                                        <label for="fname">Company Code<sup style={{ color: 'red' }}>*</sup></label><br />
                                        <input className='w-100' type="text" id="fname" name="fname" />
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-12'>
                                        <label for="fname">Plant<sup style={{ color: 'red' }}>*</sup></label><br />
                                        <input className='w-100' type="text" id="fname" name="fname" />
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-12'>
                                        <label for="fname">Address</label><br />
                                        {/* <input className='w-100' type="text" id="fname" name="fname"/> */}
                                        <textarea rows="1" className='w-100' name="comment" form="usrform" />
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-12 mt-3'>
                                        <label for="fname">Telephone</label><br />
                                        <input className='w-100' type="text" id="fname" name="fname" />
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-12 mt-3'>
                                        <label for="fname">Mobile</label><br />
                                        <input className='w-100' type="text" id="fname" name="fname" />
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-12 mt-3'>
                                        <label for="fname">Email</label><br />
                                        <input className='w-100' type="text" id="fname" name="fname" />
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-12 mt-3'>
                                        <label for="fname">Website</label><br />
                                        <input className='w-100' type="text" id="fname" name="fname" />
                                    </div>
                                    <div className='col-12 text-center mt-4'>
                                        <button type="button" class="btn btn-primary" style={{backgroundColor:'#3c8dbc'}}>Save</button>
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
