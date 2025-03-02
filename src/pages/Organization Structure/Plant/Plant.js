import React from 'react'
import '../Company/Company.css'
import Eye from '../../../assets/eye.png'
import { Link } from "react-router-dom";

export default function Plant() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        {/* <Sidebar/> */}
                        <div className='main-menu'>
                            <div className='d-flex justify-content-between' style={{borderBottom:'1px solid #dfdfdf'}}>
                                <div className='heading'>Plant</div>
                                <div><Link to="/create-plant"><button type="button" class="btn btn-primary" style={{backgroundColor:'#3c8dbc'}}>Create Plant</button></Link></div>
                            </div>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div id="main">
                                                <div className='mt-4'>
                                                    <table class="table">
                                                        <tbody>
                                                            <tr className='table-top'>
                                                                <td>Plant</td>
                                                                <td>Address</td>
                                                                <td>State</td>
                                                                <td>City</td>
                                                                <td>District</td>
                                                                <td>Phone</td>
                                                                <td>Mobile</td>
                                                                <td>Action</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>@mdo</td>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>@mdo</td>
                                                                <td>@mdo</td>
                                                                <td><img src={Eye} width={20}/></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>@mdo</td>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>@mdo</td>
                                                                <td>@mdo</td>
                                                                <td><img src={Eye} width={20}/></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>@mdo</td>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>@mdo</td>
                                                                <td>@mdo</td>
                                                                <td><img src={Eye} width={20}/></td>
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
