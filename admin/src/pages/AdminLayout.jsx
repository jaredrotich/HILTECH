import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './admin.css';

const AdminLayout = () => {
  const [openDropdown, setOpenDropdown] = useState('');

  const toggleDropdown = (section) => {
    setOpenDropdown(openDropdown === section ? '' : section);
  };

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h2>Hiltech Admin</h2>
        <nav>
          <ul>
            <li>
              <button onClick={() => toggleDropdown('orders')}> Orders</button>
              {openDropdown === 'orders' && (
                <ul className="submenu">
                  <li><NavLink to="/admin/orders/all"> All Orders</NavLink></li>
                  <li><NavLink to="/admin/orders/unchecked"> Unchecked Orders</NavLink></li>
                  <li><NavLink to="/admin/orders/my-orders"> My Orders</NavLink></li>
                  <li><NavLink to="/admin/orders/pending-orders"> Pending Orders</NavLink></li>
                  <li><NavLink to="/admin/orders/my-pending"> My Pending Orders</NavLink></li>
                  <li><NavLink to="/admin/orders/clients-engaged"> Clients Engaged</NavLink></li>
                  <li><NavLink to="/admin/orders/verified"> Product Details Verified</NavLink></li>
                  <li><NavLink to="/admin/orders/ready-to-ship"> Ready to Ship</NavLink></li>
                  <li><NavLink to="/admin/orders/dispatched"> Dispatched</NavLink></li>
                  <li><NavLink to="/admin/orders/delivered"> Delivered & Received</NavLink></li>
                  <li><NavLink to="/admin/orders/pending-payment"> Pending Payment</NavLink></li>
                  <li><NavLink to="/admin/orders/completed"> Completed</NavLink></li>
                  <li><NavLink to="/admin/orders/cancelled"> Cancelled Orders</NavLink></li>
                </ul>
              )}
            </li>

            <li>
              <button onClick={() => toggleDropdown('reports')}> Reports</button>
              {openDropdown === 'reports' && (
                <ul className="submenu">
                  <li><NavLink to="/admin/reports/dispatch-leaders"> Dispatch Leaders & Engagements</NavLink></li>
                  <li><NavLink to="/admin/reports/sales-team"> Sales Team Monitoring</NavLink></li>
                  <li><NavLink to="/admin/reports/riders"> Riders Reports</NavLink></li>
                  <li><NavLink to="/admin/reports/overview"> Orders Overview</NavLink></li>
                </ul>
              )}
            </li>

            <li>
              <button onClick={() => toggleDropdown('delivery')}> Delivery Settings</button>
              {openDropdown === 'delivery' && (
                <ul className="submenu">
                  <li><NavLink to="/admin/delivery/zones"> Delivery Zones / Pricing Map</NavLink></li>
                  <li><NavLink to="/admin/delivery/routes"> Nairobi Routes Input</NavLink></li>
                  <li><NavLink to="/admin/delivery/dispatch-management"> Dispatch Management</NavLink></li>
                </ul>
              )}
            </li>

            <li><NavLink to="/admin/cart"> Admin Cart</NavLink></li>

            <li>
              <button onClick={() => toggleDropdown('home')}> Home</button>
              {openDropdown === 'home' && (
                <ul className="submenu">
                  <li><NavLink to="/admin/home/category-summary"> Category Summary</NavLink></li>
                  <li><NavLink to="/admin/home/quotation"> Quotation Management</NavLink></li>
                  <li><NavLink to="/admin/home/frontend"> Frontend Management</NavLink></li>
                  <li>
                    <NavLink to="/admin/home/accounts"> Accounts</NavLink>
                    <ul>
                      <li><NavLink to="/admin/home/accounts/transactions"> Transaction History</NavLink></li>
                      <li><NavLink to="/admin/home/accounts/invoices"> Invoices Manager</NavLink></li>
                    </ul>
                  </li>
                  <li><NavLink to="/admin/home/users"> User Management</NavLink></li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </aside>

      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
