import React from 'react'
import '../../Organization Structure/Company/Company.css'

export default function EmailIntegrationforTrans() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        {/* <Sidebar/> */}
                        <div className='main-menu'>
                            <div className='d-flex justify-content-between' style={{borderBottom:'1px solid #dfdfdf'}}>
                                <div className='heading'>Edit Email Integration for Trans</div>
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
                                                                <td className='text-center'>Send to  Customer / Vendor</td>
                                                                <td className='text-center'>Send to  Executive</td>
                                                                <td className='text-center'>Send to  Users</td>
                                                                <td>Users</td>
                                                                <td>Email Format</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td className='text-center'><input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/></td>
                                                                <td className='text-center'><input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/></td>
                                                                <td className='text-center'><input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/></td>
                                                                {/* <td><input className='w-100' type="text" id="fname" name="fname" /></td> */}
                                                                <td>
                                                                    <div class="input-group">
                                                                    <input type="text" class="form-control"  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                                                    <div class="input-group-append">
                                                                        <button class="btn btn-outline-secondary" type="button" style={{marginTop:5}}>Add</button>
                                                                    </div>
                                                                    </div>
                                                                </td>
                                                                <td><textarea id="w3review" name="w3review" rows="4" cols="50">Dear @NameofParty @Customers , @Customer Products left at @ChallanDate , @DispatchDate . Sales order : @SONo P.List : Docno Dtd: Driver Mobile : @OtherReferences @Transporter , @NoOfPack Track Your Invoice: @Outstanding , @Amount @InvoiceLink @LRNo Regards, PEPPYZ</textarea></td>
                                                            </tr>
                                                            <tr>
                                                            <td>Mark</td>
                                                                <td className='text-center'><input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/></td>
                                                                <td className='text-center'><input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/></td>
                                                                <td className='text-center'><input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/></td>
                                                                <td>
                                                                    <div class="input-group">
                                                                    <input type="text" class="form-control"  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                                                    <div class="input-group-append">
                                                                        <button class="btn btn-outline-secondary" type="button" style={{marginTop:5}}>Add</button>
                                                                    </div>
                                                                    </div>
                                                                </td>
                                                                <td><textarea id="w3review" name="w3review" rows="4" cols="50">Dear @NameofParty @Customers , @Customer Products left at @ChallanDate , @DispatchDate . Sales order : @SONo P.List : Docno Dtd: Driver Mobile : @OtherReferences @Transporter , @NoOfPack Track Your Invoice: @Outstanding , @Amount @InvoiceLink @LRNo Regards, PEPPYZ</textarea></td>
                                                            </tr>
                                                            <tr>
                                                            <td>Mark</td>
                                                                <td className='text-center'><input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/></td>
                                                                <td className='text-center'><input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/></td>
                                                                <td className='text-center'><input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/></td>
                                                                <td>
                                                                    <div class="input-group">
                                                                    <input type="text" class="form-control"  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                                                    <div class="input-group-append">
                                                                        <button class="btn btn-outline-secondary" type="button" style={{marginTop:5}}>Add</button>
                                                                    </div>
                                                                    </div>
                                                                </td>
                                                                <td><textarea id="w3review" name="w3review" rows="4" cols="50">Dear @NameofParty @Customers , @Customer Products left at @ChallanDate , @DispatchDate . Sales order : @SONo P.List : Docno Dtd: Driver Mobile : @OtherReferences @Transporter , @NoOfPack Track Your Invoice: @Outstanding , @Amount @InvoiceLink @LRNo Regards, PEPPYZ</textarea></td>
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
