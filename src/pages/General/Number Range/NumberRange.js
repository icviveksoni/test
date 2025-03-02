import React from 'react'
import '../../Organization Structure/Company/Company.css'

export default function NumberRange() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        {/* <Sidebar/> */}
                        <div className='main-menu'>
                            <div className='heading'>Create Number Range</div>
                            <div className='container-fluid'>
                                <div className='row pb-4 mt-3'>
                                    <div className='col-lg-3 col-md-6 col-12'>
                                        <form action="/action_page.php">
                                            <label for="cars">Documents<sup style={{ color: 'red' }}>*</sup></label>
                                            <select className='w-100' name="cars" id="cars">
                                                <option value="volvo">Select</option>
                                                <option value="saab">Saab</option>
                                                <option value="opel">Opel</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </form>
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-12'>
                                        <form action="/action_page.php">
                                            <label for="hell">Documents Type<sup style={{ color: 'red' }}>*</sup></label>
                                            <select className='w-100' name="hell" id="hell">
                                                <option value="volvo">Select</option>
                                                <option value="saab">Saab</option>
                                                <option value="opel">Opel</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </form>
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-12'>
                                        <form action="/action_page.php">
                                            <label for="hello">Number Range Type<sup style={{ color: 'red' }}>*</sup></label>
                                            <select className='w-100' name="hello" id="hello">
                                                <option value="volvo">Select</option>
                                                <option value="saab">Saab</option>
                                                <option value="opel">Opel</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </form>
                                    </div>
                                    <div className='col-lg-3 col-md-6 col-12 mt-4'>
                                        <button type="button" class="btn btn-primary" style={{backgroundColor:'#3c8dbc'}}>Go</button>
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
