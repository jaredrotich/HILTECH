import React, { useEffect, useRef } from 'react';
import './ReceiptModal.css';

const ReceiptModal = ({ order, onClose }) => {
  const printRef = useRef();

  
  useEffect(() => {
    if (order) {
      setTimeout(() => {
        window.print(); 
      }, 1000); 
    }
  }, [order]);

  if (!order) return null;

  const {
    id,
    customer,
    items,
    subtotal,
    shipping,
    total,
    created_at = new Date().toLocaleString(),
  } = order;

  return (
    <div className="receipt-modal-overlay">
      <div className="receipt-modal" ref={printRef}>
        <button className="close-btn" onClick={onClose}>X</button>
        <div className="receipt-header">
          <div>
            <h2>www.Hiltech.co.ke</h2>
            <p>The missing piece to your digital puzzle.</p>
            <p>Nairobi, Kimathi Street,  Building, 3rd Floor, Room 51A</p>
          </div>
          <div className="contact-info">
            <p>Call: 0723 467 198 / 0727 659 614</p>
            <p>WhatsApp: 0700 000 000</p>
            <p>Email: info@hiltech.co.ke</p>
          </div>
        </div>

        <h3 className="order-title">Customer Order - {id}</h3>

        <div className="order-meta">
          <div>
            <p><strong>Order Date:</strong> {created_at}</p>
            <p><strong>Order Type:</strong> Individual</p>
            <p><strong>Document:</strong> Sample (Customer Generated)</p>
          </div>
          <div>
            <p><strong>Name:</strong> {customer.name}</p>
            <p><strong>Phone:</strong> {customer.phone}</p>
            <p><strong>Address:</strong> {customer.address}</p>
          </div>
        </div>

        <table className="receipt-table">
          <thead>
            <tr>
              <th>Item Image</th>
              <th>Item Description</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={idx}>
                <td><img src={item.image} alt="product" /></td>
                <td>
                  <strong>{item.name}</strong><br />
                  {item.description}<br />
                  Add-ons: {item.addOns || "No add-ons available"}
                </td>
                <td>KSH {item.price.toLocaleString()}</td>
                <td>x {item.quantity}</td>
                <td>KSH {(item.price * item.quantity).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="totals">
          <p><strong>Sub Total:</strong> KSH {subtotal.toLocaleString()}</p>
          <p><strong>Shipping Cost:</strong> KSH {shipping.toLocaleString()}</p>
          <h4><strong>Grand Total:</strong> KSH {total.toLocaleString()}</h4>
        </div>

        <div className="terms">
          <h4>Laptops Terms & Conditions</h4>
          <ol>
            <li>1 year warranty on brand new laptops, 6 months on Ex UK/refurbished units.</li>
            <li>Software installation as agreed; trial versions of OS unless licensed is requested.</li>
            <li>No warranty on software, OS reinstallations, or customer-side installs.</li>
            <li>Warranty covers motherboard, not parts like keyboards after 1 month.</li>
            <li>No warranty for parts like battery, screen, keyboard after 2 weeks.</li>
            <li>Ex-UK battery life may vary (usually 1–4 hours).</li>
            <li>VAT-exclusive pricing unless otherwise stated.</li>
            <li>This is not a tax invoice. One is provided upon payment.</li>
          </ol>
        </div>

        <div className="footer">
          <p>Thank you for your business!</p>
          <p>Laptops | Desktops | Smartphones | MacBooks | iPhones | TVs | Projectors | Cameras | Printers</p>
        </div>
      </div>
    </div>
  );
};

export default ReceiptModal;
