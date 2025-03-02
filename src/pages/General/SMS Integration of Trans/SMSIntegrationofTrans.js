import React from 'react'
import '../../Organization Structure/Company/Company.css'

export default function SMSIntegrationOfTrans() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        {/* <Sidebar/> */}
                        <div className='main-menu'>
                            <div className='d-flex justify-content-between' style={{borderBottom:'1px solid #dfdfdf'}}>
                                <div className='heading'>Edit SMS Integration Of Trans</div>
                                <div><button type="button" class="btn btn-primary" style={{backgroundColor:'#3c8dbc'}}>Save</button></div>
                            </div>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div id="main">
                                                <div className='mt-4'>
                                                    <table class="table">
                                                        <tbody>
                                                            <tr className='table-top'>
                                                                <td>Transaction</td>
                                                                <td className='text-center'>Send to<br/> Customer / Vendor</td>
                                                                <td className='text-center'>Send to<br/> Executive</td>
                                                                <td>SMS Format</td>
                                                                <td>SMS Template Id</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td className='text-center'><input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/></td>
                                                                <td className='text-center'><input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/></td>
                                                                <td><textarea id="w3review" name="w3review" rows="3" cols="80"/></td>
                                                                <td><input className='w-100' type="text" id="fname" name="fname" /></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td className='text-center'><input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/></td>
                                                                <td className='text-center'><input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/></td>
                                                                <td><textarea id="w3review" name="w3review" rows="3" cols="80"/></td>
                                                                <td><input className='w-100' type="text" id="fname" name="fname" /></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td className='text-center'><input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/></td>
                                                                <td className='text-center'><input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/></td>
                                                                <td><textarea id="w3review" name="w3review" rows="3" cols="80"/></td>
                                                                <td><input className='w-100' type="text" id="fname" name="fname" /></td>
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
