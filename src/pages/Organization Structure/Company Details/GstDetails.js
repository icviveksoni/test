import React from 'react'

export default function GstDetails() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <div className='main-menu'>
                    <div className='heading'>GST Details</div>
                    <div className='row mt-3'>
                        <div className='col-lg-3 col-md-6 col-12 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Company GST Details</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Active</option>
                                <option value="saab">Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-12'>
                            <nav className="tabs px-0">
                                <label htmlFor="tab-content-1" className="tab-item">
                                <span className="tab">GST Registration Details</span>
                                </label>
                                <label htmlFor="tab-content-2" className="tab-item">
                                <span className="tab">Connected GST Details</span>
                                </label>
                                <label htmlFor="tab-content-3" className="tab-item">
                                <span className="tab">e-Way Bill Details</span>
                                </label>
                                <label htmlFor="tab-content-4" className="tab-item">
                                <span className="tab">e-Invoice Details</span>
                                </label>
                                <label htmlFor="tab-content-5" className="tab-item">
                                <span className="tab">LUT / Bond Details</span>
                                </label>
                            </nav>
                            <main>
                                <content>
                                    <input type="radio" name="tab-content" id="tab-content-1" defaultChecked="" />
                                    <div className='row'>
                                        <div className='col-lg-3 col-md-6 col-12 text-start d-flex justify-content-between'>
                                            <label className='my-auto' for="car">State</label>
                                            <select name="car" id="car">
                                                <option value="volvo">Active</option>
                                                <option value="saab">Inactive</option>
                                            </select>
                                        </div>
                                        <div className='col-lg-3 col-md-6 offset-lg-1 col-12 text-start d-flex justify-content-between'>
                                            <label className='my-auto' for="car">Address type</label>
                                            <select name="car" id="car">
                                                <option value="volvo">Active</option>
                                                <option value="saab">Inactive</option>
                                            </select>
                                        </div>
                                        <div className='col-lg-3 col-md-6 offset-lg-1 col-12 text-start d-flex justify-content-between'>
                                            <label className='my-auto' for="car">Registration type</label>
                                            <select name="car" id="car">
                                                <option value="volvo">Active</option>
                                                <option value="saab">Inactive</option>
                                            </select>
                                        </div>
                                        <div className='col-lg-3 col-md-6 mt-3 col-12 text-start d-flex justify-content-between'>
                                            <label className='my-auto' for="car">Asses of Other Territory</label>
                                            <select name="car" id="car">
                                                <option value="volvo">Active</option>
                                                <option value="saab">Inactive</option>
                                            </select>
                                        </div>
                                        <div className='col-lg-3 col-md-6 mt-3 offset-lg-1 col-12 text-start d-flex justify-content-between'>
                                            <label className='my-auto' for="car">GSTIN / UIN</label>
                                            <select name="car" id="car">
                                                <option value="volvo">Active</option>
                                                <option value="saab">Inactive</option>
                                            </select>
                                        </div>
                                        <div className='col-lg-3 col-md-6 mt-3 offset-lg-1 col-12 text-start d-flex justify-content-between'>
                                            <label className='my-auto' for="car">Periodicity of GSTR-1</label>
                                            <select name="car" id="car">
                                                <option value="volvo">Active</option>
                                                <option value="saab">Inactive</option>
                                            </select>
                                        </div>
                                        <div className='col-lg-3 col-md-6 mt-3 col-12 text-start d-flex justify-content-between'>
                                            <label className='my-auto' for="car">Place of Supply (for Inwards)</label>
                                            <select name="car" id="car">
                                                <option value="volvo">Active</option>
                                                <option value="saab">Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                </content>
                                <content>
                                    <input type="radio" name="tab-content" id="tab-content-2" />
                                    <div className='row'>
                                        <div className='col-lg-3 col-md-6 col-12 text-start'>
                                            <label for="fname">Company Name</label><br />
                                            <input className='w-100' type="text" id="fname" name="fname" />
                                        </div>
                                        <div className='col-lg-3 col-md-6 mt-3 offset-lg-1 col-12 text-start d-flex justify-content-between'>
                                            <label className='my-auto' for="car">Mode of Filing</label>
                                            <select name="car" id="car">
                                                <option value="volvo">Active</option>
                                                <option value="saab">Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                </content>
                                <content>
                                    <input type="radio" name="tab-content" id="tab-content-3" />
                                    <div className='row'>
                                        <div className='col-lg-3 col-md-6 mt-3 col-12 text-start d-flex justify-content-between'>
                                            <label className='my-auto' for="car">e-Way Bill applicable</label>
                                            <select name="car" id="car">
                                                <option value="volvo">Yes</option>
                                                <option value="saab">No</option>
                                            </select>
                                        </div>
                                        <div className='col-lg-3 col-md-6 mt-3 col-12 text-start d-flex justify-content-between'>
                                            <label className='my-auto' for="car">Applicable for intrastate</label>
                                            <select name="car" id="car">
                                                <option value="volvo">Yes</option>
                                                <option value="saab">No</option>
                                            </select>
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-12 text-start'>
                                            <label for="fname">Applicable from</label><br />
                                            <input className='w-100' type="text" id="fname" name="fname" />
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-12 text-start'>
                                            <label for="fname">Goods dispatched from</label><br />
                                            <input className='w-100' type="text" id="fname" name="fname" />
                                        </div>
                                    </div>
                                </content>
                                <content>
                                    <input type="radio" name="tab-content" id="tab-content-4" />
                                    <div className='row'>
                                        <div className='col-lg-3 col-md-6 col-12 text-start'>
                                            <label for="fname">Registration Name</label><br />
                                            <input className='w-100' type="text" id="fname" name="fname" />
                                        </div>
                                    </div>
                                </content>
                                <content>
                                    <input type="radio" name="tab-content" id="tab-content-5" />
                                    <div className='row'>
                                        <div className='col-lg-3 col-md-6 mt-3 col-12 text-start'>
                                            <label for="fname">LUT / Bond No.</label><br />
                                            <input className='w-100' type="text" id="fname" name="fname" />
                                        </div>
                                        <div className='col-lg-3 col-md-6 mt-3 col-12 text-start'>
                                            <label for="fname">From Date</label><br />
                                            <input className='w-100' type="text" id="fname" name="fname" />
                                        </div>
                                        <div className='col-lg-3 col-md-6 mt-3 col-12 text-start'>
                                            <label for="fname">To Date</label><br />
                                            <input className='w-100' type="text" id="fname" name="fname" />
                                        </div>
                                        <div className='col-lg-3 col-md-6 mt-3 col-12 text-start'>
                                            <div>
                                                <button type="button" class="btn btn-primary" style={{backgroundColor:'#3c8dbc'}}>Add</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row mt-4'>
                                        <div className='col-12'>
                                            <table class="table">
                                                <tbody>
                                                    <tr className='table-top'>
                                                        <td>Sr. No.</td>
                                                        <td>LUT / Bond No.</td>
                                                        <td>From Date</td>
                                                        <td>To Date</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                        <td>Mark</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                        <td>Mark</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                        <td>Mark</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </content>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
