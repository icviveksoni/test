import React from 'react'

export default function SalaryDetailsCreation() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <div className='main-menu'>
                    <div className='heading'>Salary Details Creation</div>
                    <div className='row mt-3'>
                        <div className='col-lg-3 col-md-6 col-12 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">Name</label>
                            <input type="text" id="fname" name="fname" value="Sachin"/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-12 d-flex justify-content-between'>
                            <label className='my-auto' for="fname">Under</label>
                            <input type="text" id="fname" name="fname" value="Primary"/>
                        </div>
                        <div className='col-12 mt-4'>
                            <table class="table">
                                <tbody>
                                    <tr className='table-top'>
                                        <td>Effective From</td>
                                        <td>Pay Head</td>
                                        <td>Rate</td>
                                        <td>Per</td>
                                        <td>Pay Head Type</td>
                                        <td>Calculation Type</td>
                                        <td>Computed On</td>
                                    </tr>
                                    <tr>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
