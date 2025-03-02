import React from 'react'

export default function EmployeeGroup() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <div className='main-menu'>
                    <div className='heading'>Employee Group Creation</div>
                    <div className='row mt-3'>
                        <div className='col-12'>
                            <select name="cars" id="cars">
                                <option value="volvo">English</option>
                                <option value="saab">Hindi</option>
                                <option value="mercedes">Gujrati</option>
                            </select>
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">Name</label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-12 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Under</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Primary</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-12 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Define salary details</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Yes</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
