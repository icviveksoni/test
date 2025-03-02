import React from 'react'
import './Master.css'
import Arrow from '../../assets/move-right.png'

export default function Master() {
    return (
        <>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='py-3 heading'>Masters</div>
                        <div className='mt-4 mb-4 sub-heading'>Accounting Masters</div>
                        <div className='row'>
                            <div className='col-3 tab-text p-2'>Group<img className='arrow' src={Arrow} width={30}/></div>
                            <div className='col-3 tab-text p-2'>Ledger<img className='arrow' src={Arrow} width={30}/></div>
                            <div className='col-3 tab-text p-2'>Cost Center<img className='arrow' src={Arrow} width={30}/></div>
                            <div className='col-3 tab-text p-2'>Currency<img className='arrow' src={Arrow} width={30}/></div>
                            <div className='col-3 mt-3 tab-text p-2'>Voucher Type<img className='arrow' src={Arrow} width={30}/></div> 
                        </div>

                        <div className='mt-5 mb-4 sub-heading'>Inventory Masters</div>
                        <div className='row'>
                            <div className='col-3 tab-text p-2'>Stock Group<img className='arrow' src={Arrow} width={30}/></div>
                            <div className='col-3 tab-text p-2'>Stock Category<img className='arrow' src={Arrow} width={30}/></div>
                            <div className='col-3 tab-text p-2'>Cost Center<img className='arrow' src={Arrow} width={30}/></div>
                            <div className='col-3 tab-text p-2'>Stock Item<img className='arrow' src={Arrow} width={30}/></div>
                            <div className='col-3 mt-3 tab-text p-2'>Unit<img className='arrow' src={Arrow} width={30}/></div> 
                            <div className='col-3 mt-3 tab-text p-2'>Godown<img className='arrow' src={Arrow} width={30}/></div> 
                            <div className='col-3 mt-3 tab-text p-2'>Price Level<img className='arrow' src={Arrow} width={30}/></div> 
                            <div className='col-3 mt-3 tab-text p-2'>Price List (Stock Group)<img className='arrow' src={Arrow} width={30}/></div> 
                            <div className='col-3 mt-3 tab-text p-2'>Price List (Stock Category)<img className='arrow' src={Arrow} width={30}/></div> 
                        </div>

                        <div className='mt-5 mb-4 sub-heading'>PayRoll Masters</div>
                        <div className='row'>
                            <div className='col-3 tab-text p-2'>Employee Group<img className='arrow' src={Arrow} width={30}/></div>
                            <div className='col-3 tab-text p-2'>Employee<img className='arrow' src={Arrow} width={30}/></div>
                            <div className='col-3 tab-text p-2'>Units (Work)<img className='arrow' src={Arrow} width={30}/></div>
                            <div className='col-3 tab-text p-2'>Attendence\Production Type<img className='arrow' src={Arrow} width={30}/></div>
                            <div className='col-3 mt-3 tab-text p-2'>Pay Heads<img className='arrow' src={Arrow} width={30}/></div> 
                            <div className='col-3 mt-3 tab-text p-2'>PayRoll Voucher Type<img className='arrow' src={Arrow} width={30}/></div> 
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
