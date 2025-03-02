import React from 'react'

export default function MultiAddress() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <div className='main-menu'>
                    <div className='heading'>Company : Demo India Pvt Ltd</div>
                    <div className='sub-heading mt-2'>Address Type</div>
                    <div className='col-lg-3 col-md-6 col-12 mt-3 d-flex'>
                        <input className='w-100 mt-0' type="text" id="fname" name="fname" />
                        <div><button type="button" class="btn btn-primary" style={{backgroundColor:"#3c8dbc"}}>Show</button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
