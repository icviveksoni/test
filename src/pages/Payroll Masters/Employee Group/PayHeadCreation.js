import React from 'react'

export default function PayHeadCreation() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <div className='main-menu'>
                    <div className='heading'>Pay Head Creation</div>
                    <div className='row'>
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
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
