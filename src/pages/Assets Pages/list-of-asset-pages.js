import React from 'react';
import { Link } from 'react-router-dom';
import './AssetPage.css'; 

const AssetPage = () => {
  const accounts = [
    { type: 'header', name: 'Current Assets' , route: '/current-assets' },
    {
      type: 'subitem',
      name: 'Bank Accounts',
      route: '/bank-accounts'
    },
    {
      type: 'subitem',
      name: 'Cash-in-Hand',
      route: '/cash-in-hand',
      children: [
        {
          type: 'subitem',
          name: 'Cash',
          route: '/cash',
        },
      ],
    },
    {
      type: 'subitem',
      name: 'Deposits (Asset)',
      route: '/deposits',
    },
    {
      type: 'subitem',
      name: 'Loans & Advances (Assets)',
      route: '/loan-advances',
    },
    {
      type: 'subitem',
      name: 'Stock-in-Hand',
      route: '/stock-in-hand',
    },
    {
      type: 'subitem',
      name: 'Sundry Debtors',
      route: '/sundry-debtors',
    },
    { type: 'header', name: 'Fixed Assets', route: '/fixed-asset' },
    { type: 'header', name: 'Investments', route: '/investments' },
    { type: 'header', name: 'Misc. Expenses (ASSET)', route: '/misc-expenses' },
  ];

  const renderAccounts = (accounts, parentIndent = '') => {
    return accounts.map((account, index) => (
      <React.Fragment key={index}>
        <Link
          to={account.route || '#'}
          className={`group-item d-block py-1 text-decoration-none text-dark ${
            account.type === 'header'
              ? 'fw-bold'
              : account.type === 'subitem'
              ? `${parentIndent} ps-4`
              : ''
          }`}
        >
          {account.name}
        </Link>
        {account.children && renderAccounts(account.children, 'ps-4')}
      </React.Fragment>
    ));
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <div className='main-menu'>
            <div className="border">
              <div className="bg-info bg-opacity-25 p-2 d-flex justify-content-between">
                <div>Assets</div>
                <div>{accounts.length} Group(s)</div>
              </div>
              <div className="groups-list">
                {renderAccounts(accounts)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetPage;
