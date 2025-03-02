import React from 'react'
import '../Company/Company.css'
import Eye from '../../../assets/eye.png'
import { Link } from "react-router-dom";

export default function BinMaster() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        {/* <Sidebar/> */}
                        <div className='main-menu'>
                            <div className='d-flex justify-content-between' style={{borderBottom:'1px solid #dfdfdf'}}>
                                <div className='heading'>Bin Master</div>
                                <div><Link to="/create-bin-master"><button type="button" class="btn btn-primary" style={{backgroundColor:'#3c8dbc'}}>Create Store</button></Link></div>
                            </div>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div id="main">
                                                <div className='mt-4'>
                                                    <table class="table">
                                                        <tbody>
                                                            <tr className='table-top'>
                                                                <td>Bin</td>
                                                                <td>Plant</td>
                                                                <td>Store</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>Mark</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>Mark</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
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
