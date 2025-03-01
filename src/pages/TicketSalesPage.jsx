import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TicketCheckout from '../components/TicketCheckout';
import { getEventById } from '../services/api';  // Corrected import

function TicketSalesPage() {
  const { eventId } = useParams(); // Extract eventId from URL
  const [event, setEvent] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const fetchedEvent = await getEventById(eventId);  // API call to fetch event by ID
        setEvent(fetchedEvent);
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    };

    fetchEvent();
  }, [eventId]);

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
    // Optionally, redirect or handle confirmation logic here
  };

  if (!event) {
    return <div>Loading...</div>;  // Handle loading state
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-6">{event.title}</h1>
      {!paymentSuccess ? (
        <TicketCheckout event={event} onPaymentSuccess={handlePaymentSuccess} />
      ) : (
        <div className="text-center">
          <p className="text-xl">Payment Successful! You will receive a confirmation email shortly.</p>
        </div>
      )}
    </div>
  );
}

export default TicketSalesPage;