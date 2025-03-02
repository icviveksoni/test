import React from 'react'
import '../../Organization Structure/Company/Company.css'

export default function MailSettings() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        {/* <Sidebar/> */}
                        <div className='main-menu'>
                            <div className='heading'>Edit Mail Settings</div>
                            <div className='container-fluid'>
                                <div className='row details pb-4 mt-3'>
                                    <div className='col-lg-3 col-md-6 col-12'>
                                        <label for="fname">Mail From<sup style={{ color: 'red' }}>*</sup></label><br />
                                        <input className='w-100' type="text" id="fname" name="fname" />
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-12'>
                                        <label for="fname">Mail Host<sup style={{ color: 'red' }}>*</sup></label><br />
                                        <input className='w-100' type="text" id="fname" name="fname" />
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-12'>
                                        <label for="fname">Port<sup style={{ color: 'red' }}>*</sup></label><br />
                                        <input className='w-100' type="text" id="fname" name="fname" />
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-12'>
                                        <label for="fname">Password<sup style={{ color: 'red' }}>*</sup></label><br />
                                        <input className='w-100' type="text" id="fname" name="fname" />
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-12 mt-3 justify-content-between d-flex'>
                                        <label for="vehicle2">SSL</label>
                                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
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
