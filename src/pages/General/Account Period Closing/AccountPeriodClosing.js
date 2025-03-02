import React from 'react'
import '../../Organization Structure/Company/Company.css'

export default function AccountPeriodClosing() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        {/* <Sidebar/> */}
                        <div className='main-menu'>
                            <div className='d-flex justify-content-between' style={{borderBottom:'1px solid #dfdfdf'}}>
                                <div className='heading'>Account Period Closing</div>
                            </div>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-lg-4 col-md-6 col-12'>
                                            <div id="main">
                                                <div className='mt-4'>
                                                    <table class="table">
                                                        <tbody>
                                                            <tr className='table-top'>
                                                                <td>Month Year</td>
                                                                <td>Status</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Apr-2024</td>
                                                                <td>
                                                                    <form action="/action_page.php">
                                                                        <select className='w-100' name="cars" id="cars">
                                                                            <option value="volvo">Reopen</option>
                                                                            <option value="saab">Close</option>
                                                                        </select>
                                                                    </form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>May-2024</td>
                                                                <td>
                                                                    <form action="/action_page.php">
                                                                        <select className='w-100' name="cars" id="cars">
                                                                            <option value="volvo">Reopen</option>
                                                                            <option value="saab">Close</option>
                                                                        </select>
                                                                    </form>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Jun-2024</td>
                                                                <td>
                                                                    <form action="/action_page.php">
                                                                        <select className='w-100' name="cars" id="cars">
                                                                            <option value="volvo">Reopen</option>
                                                                            <option value="saab">Close</option>
                                                                        </select>
                                                                    </form>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div><button type="button" class="btn btn-primary" style={{backgroundColor:'#3c8dbc'}}>Save</button></div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
