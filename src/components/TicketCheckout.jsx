import React, { useState } from 'react';

function TicketCheckout({ event, onPaymentSuccess }) {
  const [ticketType, setTicketType] = useState('general');
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiration: '',
    cvv: '',
  });

  const handlePayment = () => {
    if (onPaymentSuccess) {
      onPaymentSuccess(paymentInfo);
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl mb-4">Checkout</h2>
      <select
        value={ticketType}
        onChange={(e) => setTicketType(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      >
        <option value="general">General</option>
        <option value="vip">VIP</option>
      </select>
      <input
        type="text"
        placeholder="Card Number"
        value={paymentInfo.cardNumber}
        onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Expiration Date"
        value={paymentInfo.expiration}
        onChange={(e) => setPaymentInfo({ ...paymentInfo, expiration: e.target.value })}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="CVV"
        value={paymentInfo.cvv}
        onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <button onClick={handlePayment} className="w-full py-2 bg-blue-500 text-white rounded">
        Pay Now
      </button>
    </div>
  );
}

export default TicketCheckout;
