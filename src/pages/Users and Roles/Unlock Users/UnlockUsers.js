import React from 'react'
import '../../Organization Structure/Company/Company.css'

export default function UnlockUsers() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        {/* <Sidebar/> */}
                        <div className='main-menu'>
                            <div className='d-flex justify-content-between' style={{borderBottom:'1px solid #dfdfdf'}}>
                                <div className='heading'>Locked Users List</div>
                                <div><button type="button" class="btn btn-primary" style={{backgroundColor:'#3c8dbc'}}>Unlock</button></div>
                            </div>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div id="main">
                                                <div className='mt-4'>
                                                    <table class="table">
                                                        <tbody>
                                                            <tr className='table-top'>
                                                                <td>Name</td>
                                                                <td>Login Id</td>
                                                                <td>Mobile</td>
                                                                <td>Status</td>
                                                                <td>Admin</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td>Mark</td>
                                                                <td>2</td>
                                                                <td>Mark</td>
                                                                <td>Mark</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td>Mark</td>
                                                                <td>2</td>
                                                                <td>Mark</td>
                                                                <td>Mark</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td>Mark</td>
                                                                <td>2</td>
                                                                <td>Mark</td>
                                                                <td>Mark</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
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
