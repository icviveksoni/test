import React from 'react';
import { Link } from 'react-router-dom';
import './GroupList.css'; 

const GroupsList = () => {
  const accounts = [
    { type: 'header', name: 'Branch / Divisions', route: '/branch-divisions' },
    { type: 'header', name: 'Capital Account', route: '/capital-account' },
    { type: 'subitem', name: 'Reserves & Surplus', route: '/reserves-surplus' },
    { type: 'header', name: 'Current Assets', route: '/current-assets' },
    { type: 'subitem', name: 'Bank Accounts', route: '/bank-accounts' },
    { type: 'subitem', name: 'Cash-in-Hand', route: '/cash-in-hand' },
    { type: 'subitem', name: 'Deposits (Asset)', route: '/deposits-asset' },
    { type: 'subitem', name: 'Loans & Advances (Asset)', route: '/loans-advances' },
    { type: 'subitem', name: 'Stock-in-Hand', route: '/stock-in-hand' },
    { type: 'subitem', name: 'Sundry Debtors', route: '/sundry-debtors' },
    { type: 'header', name: 'Current Liabilities', route: '/current-liabilities' },
    { type: 'subitem', name: 'Duties & Taxes', route: '/duties-taxes' },
    { type: 'subitem', name: 'Provisions', route: '/provisions' },
    { type: 'subitem', name: 'Sundry Creditors', route: '/sundry-creditors' },
    { type: 'header', name: 'Direct Expenses', route: '/direct-expenses' },
    { type: 'header', name: 'Direct Incomes', route: '/direct-incomes' },
    { type: 'header', name: 'Fixed Assets', route: '/fixed-assets' },
    { type: 'header', name: 'Indirect Expenses', route: '/indirect-expenses' },
    { type: 'header', name: 'Indirect Incomes', route: '/indirect-incomes' },
    { type: 'header', name: 'Investments', route: '/investments' },
    { type: 'header', name: 'Loans (Liability)', route: '/loans-liability' },
    { type: 'subitem', name: 'Bank OD A/c', route: '/bank-od' },
    { type: 'subitem', name: 'Secured Loans', route: '/secured-loans' },
    { type: 'subitem', name: 'Unsecured Loans', route: '/unsecured-loans' },
    { type: 'header', name: 'Misc. Expenses (ASSET)', route: '/misc-expenses' },
    { type: 'header', name: 'Purchase Accounts', route: '/purchase-accounts' },
    { type: 'header', name: 'Sales Accounts', route: '/sales-accounts' },
    { type: 'header', name: 'Suspense A/c', route: '/suspense-account' }
  ];

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <div className='main-menu'>
            <div className="border">
              <div className="bg-info bg-opacity-25 p-2 d-flex justify-content-between">
                <div>List of Groups</div>
                <div>{accounts.length} Group(s)</div>
              </div>
              <div className="groups-list">
                {accounts.map((account, index) => (
                  <Link
                    key={index}
                    to={account.route}
                    className={`group-item d-block py-1 text-decoration-none text-dark ${
                      account.type === 'header'
                        ? 'fw-bold'
                        : account.type === 'subitem'
                        ? 'ps-4'
                        : ''
                    }`}
                  >
                    {account.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupsList;
