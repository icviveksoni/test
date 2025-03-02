import React from 'react'
import '../../Organization Structure/Company/Company.css'
import Eye from '../../../assets/eye.png'
import { Link } from "react-router-dom";

export default function Roles() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        {/* <Sidebar/> */}
                        <div className='main-menu'>
                            <div className='d-flex justify-content-between' style={{borderBottom:'1px solid #dfdfdf'}}>
                                <div className='heading'>Roles</div>
                                <div><Link to="/create-roles"><button type="button" class="btn btn-primary" style={{backgroundColor:'#3c8dbc'}}>Create Roles</button></Link></div>
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
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                            </tr>
                                                            <tr>
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
