import React from 'react'
import '../../Organization Structure/Company/Company.css'
import Bin from '../../../assets/bin.png'
import Rupee from '../../../assets/rupee-indian.png'

export default function CurrencyConversation() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        {/* <Sidebar/> */}
                        <div className='main-menu'>
                            <div className='d-flex justify-content-between' style={{borderBottom:'1px solid #dfdfdf'}}>
                                <div className='heading'>Create Currency Conversation</div>
                                {/* <div><button type="button" class="btn btn-primary" style={{backgroundColor:'#3c8dbc'}}>Create Currency</button></div> */}
                            </div>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div id="main">
                                                <div className='row mt-3'>
                                                    <div className='col-3 d-flex'>
                                                        <label className='my-auto' for="fname">Eff. Date<sup style={{ color: 'red' }}>*</sup></label>
                                                        <input className='mx-2' type="text" id="fname" name="fname" />
                                                    </div>
                                                    <div className='col-9 d-flex'>
                                                        <label className='my-auto' for="fname">Exchange Rate</label>
                                                        <input className='mx-2' type="text" id="fname" name="fname" />
                                                        <div className='my-auto'><img src={Rupee} width={20}/></div>
                                                        <div className='my-auto mx-2'>=</div>
                                                        <input type="text" id="fname" name="fname"/>
                                                        <li class="nav-item dropdown my-auto mx-2" style={{listStyle:'none'}}>
                                                            <a class="nav-link dropdown-toggle px-3 py-1" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{border:'1px solid #d8d8d8',borderRadius:5}}>
                                                                Select Currency
                                                            </a>
                                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                            </ul>
                                                        </li>
                                                        <div className='my-auto'><button type="button" class="btn btn-primary py-1 " style={{backgroundColor:'#3c8dbc'}}>Add</button></div>
                                                    </div>
                                                </div>
                                                <div className='mt-4'>
                                                    <table class="table">
                                                        <tbody>
                                                            <tr className='table-top'>
                                                                <td>Sr. No.</td>
                                                                <td>Eff. Date</td>
                                                                <td>Base Curr.</td>
                                                                <td>Base Rate</td>
                                                                <td>Foreign Curr.</td>
                                                                <td>FC Rate</td>
                                                                <td style={{width:40}}></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td>Mark</td>
                                                                <td>2</td>
                                                                <td>Mark</td>
                                                                <td>Mark</td>
                                                                <td>2</td>
                                                                <td style={{width:40}}><img src={Bin} width={20}/></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td>Mark</td>
                                                                <td>2</td>
                                                                <td>Mark</td>
                                                                <td>Mark</td>
                                                                <td>2</td>
                                                                <td style={{width:40}}><img src={Bin} width={20}/></td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mark</td>
                                                                <td>Mark</td>
                                                                <td>2</td>
                                                                <td>Mark</td>
                                                                <td>Mark</td>
                                                                <td>2</td>
                                                                <td style={{width:40}}><img src={Bin} width={20}/></td>
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
