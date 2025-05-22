import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PaymentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data – Replace with real data from an API or context
  const bills = [
    {
      id: 1,
      amount: '500.00',
      dueDate: '2025-04-20',
      status: 'Unpaid',
      description: 'Doctor consultation and tests',
    },
    {
      id: 2,
      amount: '350.00',
      dueDate: '2025-04-15',
      status: 'Paid',
      description: 'Surgery and aftercare',
    },
  ];

  const bill = bills.find((b) => b.id === parseInt(id));

  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(localStorage.getItem(`paymentStatus-${id}`) || bill.status);


  useEffect(() => {
    localStorage.setItem(`paymentStatus-${id}`, paymentStatus);
  }, [paymentStatus, id]);


  useEffect(() => {
    const storedStatus = localStorage.getItem(`paymentStatus-${id}`);
    if (storedStatus) {
      setPaymentStatus(storedStatus);
    }
  }, [id]);

  if (!bill) {
    return <p className="text-red-600">Bill not found</p>;
  }

  const handlePayment = () => {
    setPaymentProcessing(true);

    setTimeout(() => {
      setPaymentStatus('Paid');
      setPaymentProcessing(false);
    }, 2000);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-purple-700 dark:text-white mb-6">Payment Details</h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <p className="text-sm text-gray-500 dark:text-gray-400">Due Date: {bill.dueDate}</p>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Amount: ${bill.amount}</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">{bill.description}</p>


        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Status: {paymentStatus}</p>

        {paymentStatus === 'Unpaid' ? (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Payment</h3>


            <button
              onClick={handlePayment}
              className="mt-4 px-6 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-lg"
              disabled={paymentProcessing}
            >
              {paymentProcessing ? 'Processing...' : 'Pay Now'}
            </button>
          </div>
        ) : (
          <div className="mt-6">
            <p className="text-green-600">This bill has already been paid.</p>

            <button className="mt-4 px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg" disabled>
              Paid
            </button>
          </div>
        )}


        <button
          onClick={handleBack}
          className="mt-4 text-white bg-gray-500 hover:bg-gray-600 rounded-lg px-4 py-2"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;
