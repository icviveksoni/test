import React from 'react';
import { Link } from 'react-router-dom';
import './MasterList.css'; 

const ListOfGodown = () => {
  const accounts = [
    { type: 'header', name: 'Main Location',route: '/main-location' },
    { type: 'header', name: 'Ram pur', route: '/ram-pur' },
  ];

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <div className='main-menu'>
            <div className="border">
              <div className="bg-info bg-opacity-25 p-2 d-flex justify-content-between">
                <div>Stock Items</div>
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

export default ListOfGodown;
