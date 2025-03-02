import React from 'react'
import '../../Organization Structure/Company/Company.css'
import Eye from '../../../assets/eye.png'

export default function Currency() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        {/* <Sidebar/> */}
                        <div className='main-menu'>
                            <div className='d-flex justify-content-between' style={{borderBottom:'1px solid #dfdfdf'}}>
                                <div className='heading'>Currency</div>
                                <div><button type="button" class="btn btn-primary" style={{backgroundColor:'#3c8dbc'}}>Create Currency</button></div>
                            </div>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div id="main">
                                                <div className='mt-4'>
                                                    <table class="table">
                                                        <tbody>
                                                            <tr className='table-top'>
                                                                <td>Symbol</td>
                                                                <td>Formal Name</td>
                                                                <td style={{width:140}}>Decimal Places</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td>Mark</td>
                                                                <td>2</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td>Mark</td>
                                                                <td>2</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td>Mark</td>
                                                                <td>2</td>
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
