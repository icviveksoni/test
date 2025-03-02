import React from 'react'
import { Link } from "react-router-dom";

export default function VoucherType() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-12'>
                <div className='main-menu mb-5'>
                    <div className='sub-heading mb-3'>List Of Voucher Type</div>
                    <div><Link to="/attendance">Attendance</Link></div>
                    <div><Link to="/contra">Contra</Link></div>
                    <div><Link to="/credit-note">Credit Note</Link></div>
                    <div><Link to="/debit-note">Debit Note</Link></div>
                    <div><Link to="/delivery-note">Delivery Note</Link></div>
                    <div><Link to="/job-work-in-order">Job Work In Order</Link></div>
                    <div><Link to="/job-work-out-order">Job Work Out Order</Link></div>
                    <div><Link to="/journal">Journal</Link></div>
                    <div><Link to="/material-in">Material In</Link></div>
                    <div><Link to="/material-out">Material Out</Link></div>
                    <div><Link to="/memorandum">Memorandum</Link></div>
                    <div><Link to="/payment">Payment</Link></div>
                    <div><Link to="/payroll">Payroll</Link></div>
                    <div><Link to="/physical-stock">Physical Stock</Link></div>
                    <div><Link to="/purchase">Purchase</Link></div>
                    <div><Link to="/purchase-order">Purchase Order</Link></div>
                    <div><Link to="/receipt">Receipt</Link></div>
                    <div><Link to="/receipt-note">Receipt Note</Link></div>
                    <div><Link to="/rejections-in">Rejections In</Link></div>
                    <div><Link to="/rejections-out">Rejections Out</Link></div>
                    <div><Link to="/reversing-journal">Reversing Journal</Link></div>
                    <div><Link to="/sales">Sales</Link></div>
                    <div><Link to="/sales-order">Sales Order</Link></div>
                    <div><Link to="/stock-journal">Stock Journal</Link></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
