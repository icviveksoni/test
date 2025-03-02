import React from 'react'
import '../Company/Company.css'
import { Link } from "react-router-dom";

export default function Companydetails() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        {/* <Sidebar/> */}
                        <div className='main-menu'>
                            <div className='heading'>Company Details</div>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <nav className="tabs">
                                            <label htmlFor="tab-content-1" className="tab-item">
                                                <span className="tab">Basic Info</span>
                                            </label>
                                            <label htmlFor="tab-content-2" className="tab-item">
                                                <span className="tab">Statutory Info</span>
                                            </label>
                                            <label htmlFor="tab-content-3" className="tab-item">
                                                <span className="tab">Tab 3</span>
                                            </label>
                                            <label htmlFor="tab-content-4" className="tab-item">
                                                <span className="tab">Tab 4</span>
                                            </label>
                                            <label htmlFor="tab-content-5" className="tab-item">
                                                <span className="tab">Tab 5</span>
                                            </label>
                                        </nav>
                                        <main>
                                            <content>
                                                <input
                                                    type="radio"
                                                    name="tab-content"
                                                    id="tab-content-1"
                                                    defaultChecked=""
                                                />
                                                <div className='row details pb-4 mt-3'>

                                                    <div className='col-lg-3 col-md-6 col-12 text-start'>
                                                        <label for="fname">Company Name<sup style={{ color: 'red' }}>*</sup></label><br />
                                                        <input className='w-100' type="text" id="fname" name="fname" />
                                                    </div>
                                                    <div className='col-lg-3 col-md-6 col-12 text-start'>
                                                        <label for="fname">Company Code<sup style={{ color: 'red' }}>*</sup></label><br />
                                                        <input className='w-100' type="text" id="fname" name="fname" />
                                                    </div>
                                                    <div className='col-lg-3 col-md-6 col-12 text-start'>
                                                        <label for="fname">Mailing Name<sup style={{ color: 'red' }}>*</sup></label><br />
                                                        <input className='w-100' type="text" id="fname" name="fname" />
                                                    </div>
                                                    <div className='col-lg-3 col-md-6 col-12 text-start'>
                                                        <label for="fname">Country</label><br />
                                                        <input className='w-100' type="text" id="fname" name="fname" />
                                                    </div>
                                                    <div className='col-lg-3 col-md-6 col-12 mt-3 text-start'>
                                                        <label for="fname">Address</label><br />
                                                        {/* <input className='w-100' type="text" id="fname" name="fname"/> */}
                                                        <textarea rows="1" className='w-100' name="comment" form="usrform" />
                                                    </div>
                                                    <div className='col-lg-3 col-md-6 col-12 mt-3 text-start'>
                                                        <label for="fname">State</label><br />
                                                        <input className='w-100' type="text" id="fname" name="fname" />
                                                    </div>
                                                    <div className='col-lg-3 col-md-6 col-12 mt-3 text-start'>
                                                        <label for="fname">District</label><br />
                                                        <input className='w-100' type="text" id="fname" name="fname" />
                                                    </div>
                                                    <div className='col-lg-3 col-md-6 col-12 mt-3 text-start'>
                                                        <label for="fname">City\Town</label><br />
                                                        <input className='w-100' type="text" id="fname" name="fname" />
                                                    </div>
                                                    <div className='col-lg-3 col-md-6 col-12 mt-3 text-start'>
                                                        <label for="fname">Pincode</label><br />
                                                        <input className='w-100' type="text" id="fname" name="fname" />
                                                    </div>
                                                    <div className='col-lg-3 col-md-6 col-12 mt-3 text-start'>
                                                        <label for="fname">Telephone</label><br />
                                                        <input className='w-100' type="text" id="fname" name="fname" />
                                                    </div>
                                                    <div className='col-lg-3 col-md-6 col-12 mt-3 text-start'>
                                                        <label for="fname">Mobile</label><br />
                                                        <input className='w-100' type="text" id="fname" name="fname" />
                                                    </div>
                                                    <div className='col-lg-3 col-md-6 col-12 mt-3 text-start'>
                                                        <label for="fname">Fax</label><br />
                                                        <input className='w-100' type="text" id="fname" name="fname" />
                                                    </div>
                                                    <div className='col-lg-3 col-md-6 col-12 mt-3 text-start'>
                                                        <label for="fname">Email</label><br />
                                                        <input className='w-100' type="text" id="fname" name="fname" />
                                                    </div>
                                                    <div className='col-lg-3 col-md-6 col-12 mt-3 text-start'>
                                                        <label for="fname">Website</label><br />
                                                        <input className='w-100' type="text" id="fname" name="fname" />
                                                    </div>
                                                    <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                                                        <label for="fname">Financial year beginning from</label><br />
                                                        <input className='w-100' type="text" id="fname" name="fname" />
                                                    </div>
                                                    <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                                                        <label for="fname">Books beginning from</label><br />
                                                        <input className='w-100' type="text" id="fname" name="fname" />
                                                    </div>
                                                    <div className='col-lg-3 col-md-6 col-12 text-start mt-3'>
                                                        <label for="fname">Data sync from</label><br />
                                                        <input className='w-100' type="text" id="fname" name="fname" />
                                                    </div>
                                                </div>
                                                <div className='row details pt-3 mb-5' style={{ borderTop: '1px solid #d9d9d9' }}>
                                                    <div className='col-lg-4 col-md-6 col-12 text-start'>
                                                        <label for="fname">Base currency symbol</label><br />
                                                        <input className='w-100' type="text" id="fname" name="fname" />
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-12 text-start'>
                                                        <label for="fname">Formal Name</label><br />
                                                        <input className='w-100' type="text" id="fname" name="fname" />
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-12 text-start'>
                                                        <label for="fname">Suffix symbol to amount</label><br />
                                                        <input className='w-100' type="text" id="fname" name="fname" />
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-12 text-start mt-3'>
                                                        <label for="fname">Add space between amount and symbol</label><br />
                                                        <input className='w-100' type="text" id="fname" name="fname" />
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-12 text-start mt-3'>
                                                        <label for="fname">Show ammount in millions</label><br />
                                                        <input className='w-100' type="text" id="fname" name="fname" />
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-12 text-start mt-3'>
                                                        <label for="fname">Number of decimal places</label><br />
                                                        <input className='w-100' type="text" id="fname" name="fname" />
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-12 text-start mt-3'>
                                                        <label for="fname">Word representing amount after decimal</label><br />
                                                        <input className='w-100' type="text" id="fname" name="fname" />
                                                    </div>
                                                    <div className='col-lg-4 col-md-6 col-12 text-start mt-3'>
                                                        <label for="fname">Number of decimal places for amount in words</label><br />
                                                        <input className='w-100' type="text" id="fname" name="fname" />
                                                    </div>
                                                </div>
                                            </content>
                                            <content>
                                                <input type="radio" name="tab-content" id="tab-content-2" />
                                                <div className='row mt-3'>
                                                    <div className='col-lg-3 col-md-6 col-12 d-flex justify-content-between'>
                                                        <div className='my-auto'>Show GST Info</div>
                                                        <div><Link to="/GstDetails"><button type="button" class="btn btn-primary" style={{backgroundColor:"#3c8dbc"}}>Show</button></Link></div>
                                                    </div>
                                                    <div className='col-lg-3 col-md-6 col-12 offset-lg-1 d-flex justify-content-between'>
                                                        <div className='my-auto'>Show TDS Info</div>
                                                        <div><Link to="/TdsInfo"><button type="button" class="btn btn-primary" style={{backgroundColor:"#3c8dbc"}}>Show</button></Link></div>
                                                    </div>
                                                    <div className='col-lg-3 col-md-6 col-12 offset-lg-1 d-flex justify-content-between'>
                                                        <div className='my-auto'>Show TCS Info</div>
                                                        <div><Link to="/TcsInfo"><button type="button" class="btn btn-primary" style={{backgroundColor:"#3c8dbc"}}>Show</button></Link></div>
                                                    </div>
                                                    <div className='col-lg-3 col-md-6 col-12 d-flex justify-content-between mt-3'>
                                                        <div className='my-auto'>Show Payroll Info</div>
                                                        <div><Link to="/Payroll"><button type="button" class="btn btn-primary" style={{backgroundColor:"#3c8dbc"}}>Show</button></Link></div>
                                                    </div>
                                                    <div className='col-lg-3 col-md-6 col-12 offset-lg-1 d-flex justify-content-between mt-3'>
                                                        <div className='my-auto'>Show PAN/CIN Info</div>
                                                        <div><button type="button" class="btn btn-primary" style={{backgroundColor:"#3c8dbc"}}>Show</button></div>
                                                    </div>
                                                    <div className='col-lg-3 col-md-6 col-12 offset-lg-1 d-flex justify-content-between mt-3'>
                                                        <div className='my-auto'>Show MSME Info</div>
                                                        <div><button type="button" class="btn btn-primary" style={{backgroundColor:"#3c8dbc"}}>Show</button></div>
                                                    </div>
                                                    <div className='col-lg-3 col-md-6 col-12 d-flex justify-content-between mt-3'>
                                                        <div className='my-auto'>Show FASSAI Info</div>
                                                        <div><button type="button" class="btn btn-primary" style={{backgroundColor:"#3c8dbc"}}>Show</button></div>
                                                    </div>
                                                    <div className='col-lg-3 col-md-6 col-12 offset-lg-1 d-flex justify-content-between mt-3'>
                                                        <div className='my-auto'>Show Trade Liecence Info</div>
                                                        <div><button type="button" class="btn btn-primary" style={{backgroundColor:"#3c8dbc"}}>Show</button></div>
                                                    </div>
                                                </div>
                                            </content>
                                            <content>
                                                <input type="radio" name="tab-content" id="tab-content-3" />
                                                <span>Tab Content 3</span>
                                            </content>
                                            <content>
                                                <input type="radio" name="tab-content" id="tab-content-4" />
                                                <span>Tab Content 4</span>
                                            </content>
                                            <content>
                                                <input type="radio" name="tab-content" id="tab-content-5" />
                                                <span>Tab Content 5</span>
                                            </content>
                                        </main>
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
