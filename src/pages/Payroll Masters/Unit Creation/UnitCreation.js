import React from 'react'

export default function UnitCreation() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <div className='main-menu'>
                    <div className='heading'>Unit Creation</div>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 col-12 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Type</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Simple</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">Symbol</label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">Formal name</label>
                            <input type="text" id="fname" name="fname"/>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 offset-lg-1 d-flex justify-content-between'>
                            <label className='my-auto' for="cars">Unit Quantity Code (UQC)</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Not Applicable</option>
                                <option value="saab">No</option>
                            </select>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 mt-2 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">Number of decimal places</label>
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
