import React from 'react'
import '../Company/Company.css'

export default function CreateBinMaster() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='main-menu'>
                            <div className='heading'>Create Bin Master</div>
                            <div className='container-fluid'>
                                <div className='row details pb-4 mt-3'>
                                    <div className='col-lg-3 col-md-6 col-12'>
                                        <label for="fname">Name<sup style={{ color: 'red' }}>*</sup></label><br />
                                        <input className='w-100' type="text" id="fname" name="fname" />
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-12'>
                                        <form action="/action_page.php">
                                            <label for="hello">Plant<sup style={{ color: 'red' }}>*</sup></label>
                                            <select className='w-100' name="hello" id="hello">
                                                <option value="volvo">Select</option>
                                                <option value="saab">Saab</option>
                                                <option value="opel">Opel</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </form>
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-12'>
                                        <form action="/action_page.php">
                                            <label for="hell">Store<sup style={{ color: 'red' }}>*</sup></label>
                                            <select className='w-100' name="hell" id="hell">
                                                <option value="volvo">Select</option>
                                                <option value="saab">Saab</option>
                                                <option value="opel">Opel</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </form>
                                    </div>
                                    <div className='col-12 mt-4'>
                                        <button type="button" class="btn btn-primary" style={{backgroundColor:'#3c8dbc'}}>Save</button>
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
