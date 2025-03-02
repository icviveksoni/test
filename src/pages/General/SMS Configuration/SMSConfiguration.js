import React from 'react'
import '../../Organization Structure/Company/Company.css'

export default function SMSConfiguration() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        {/* <Sidebar/> */}
                        <div className='main-menu'>
                            <div className='heading'>SMS Configuration</div>
                            <div className='container-fluid'>
                                <div className='row details pb-4 mt-3'>
                                    <div className='col-12 mb-3'>
                                        <div>ZipERP is pre-integrated with ZIPSMS. If you already have ZIPSMS account, you can enter your<br/> credentials below. If you don’t have ZIPSMS account you can signup for new account.</div>
                                        <div className='mt-2'>To signup and get auth key <a href='#' style={{textDecoration:'none',color:'#3c8dbc'}}>Click here</a></div>
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-12'>
                                        <label for="fname">Key<sup style={{ color: 'red' }}>*</sup></label><br />
                                        <input className='w-100' type="text" id="fname" name="fname" />
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-12'>
                                        <label for="fname">Sender Id<sup style={{ color: 'red' }}>*</sup></label><br />
                                        <input className='w-100' type="text" id="fname" name="fname" />
                                    </div>
                                    <div className='col-12 mt-4'>
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
