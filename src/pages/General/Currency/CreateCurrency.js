import React from 'react'
import '../../Organization Structure/Company/Company.css'

export default function CreateCurrency() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        {/* <Sidebar/> */}
                        <div className='main-menu'>
                            <div className='heading'>Create Currency</div>
                            <div className='container-fluid'>
                                <div className='row details pb-4 mt-3'>
                                    <div className='col-lg-3 col-md-6 col-12'>
                                        <label for="fname">Symbol<sup style={{ color: 'red' }}>*</sup></label><br />
                                        <input className='w-100' type="text" id="fname" name="fname" />
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-12'>
                                        <label for="fname">Formal Name<sup style={{ color: 'red' }}>*</sup></label><br />
                                        <input className='w-100' type="text" id="fname" name="fname" />
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-12'>
                                        <label for="fname">Number of Decimal Places</label><br />
                                        <input className='w-100' type="text" id="fname" name="fname" />
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-12'>
                                        <label for="fname">Symbol of Decimal Portion of Amount</label><br />
                                        <input className='w-100' type="text" id="fname" name="fname" />
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-12 mt-3'>
                                        <label for="vehicle1">Show Amount in Millions?</label><br/>
                                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"></input>
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
