import React from 'react'
import '../../Organization Structure/Company/Company.css'
import Eye from '../../../assets/eye.png'

export default function Cities() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        {/* <Sidebar/> */}
                        <div className='main-menu'>
                            <div className='d-flex justify-content-between' style={{borderBottom:'1px solid #dfdfdf'}}>
                                <div className='heading'>Cities</div>
                                <div><button type="button" class="btn btn-primary" style={{backgroundColor:'#3c8dbc'}}>Create Cities</button></div>
                            </div>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div id="main">
                                                <div className='mt-4'>
                                                    <table class="table">
                                                        <tbody>
                                                            <tr className='table-top'>
                                                                <td>City</td>
                                                                <td>State</td>
                                                                <td style={{width:80}}>Action</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td>Mark</td>
                                                                <td><img src={Eye} width={20}/></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td>Mark</td>
                                                                <td><img src={Eye} width={20}/></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td>Mark</td>
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
