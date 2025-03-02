import React from 'react'
import '../../Organization Structure/Company/Company.css'

export default function PendingMasterApprovals() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        {/* <Sidebar/> */}
                        <div className='main-menu'>
                            <div className='heading'>Pending Master Approvals</div>
                            <div className='container-fluid'>
                                <div className='row pb-4 mt-3'>
                                    <div className='col-lg-3 col-md-6 col-12'>
                                        <form action="/action_page.php">
                                            <label for="cars">Master Type<sup style={{ color: 'red' }}>*</sup></label>
                                            <select className='w-100' name="cars" id="cars">
                                                <option value="volvo">Select</option>
                                                <option value="saab">Saab</option>
                                                <option value="opel">Opel</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </form>
                                    </div>
                                    <div className='col-12 mt-4 d-flex'>
                                        <button type="button" class="btn btn-primary" style={{backgroundColor:'#3c8dbc'}}>Generate Report</button>
                                        <button type="button" class="btn btn-primary mx-3" style={{backgroundColor:'#dfdfdf',borderColor:'#dfdfdf',color:'#000'}}>Clear</button>
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
