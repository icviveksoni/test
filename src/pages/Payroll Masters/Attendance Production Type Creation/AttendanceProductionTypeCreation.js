import React from 'react'

export default function AttendanceProductionTypeCreation() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <div className='main-menu'>
                <div className='row'>
                        <div className='col-12'>
                            <select name="cars" id="cars">
                                <option value="volvo">English</option>
                                <option value="saab">Hindi</option>
                                <option value="mercedes">Gujrati</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">Name</label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Under</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Primary</option>
                                <option value="saab">Create</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Attendance Type</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Production</option>
                                <option value="saab">Create</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">Unit</label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
