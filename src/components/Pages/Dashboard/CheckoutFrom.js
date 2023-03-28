import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
const CheckoutFrom = ({ data }) => {
  const { userName, userEmail, price, _id } = data;
  const [disabled, setDisabled] = useState(false)
  const [cardError, setCardError] = useState('')
  const [success, setSuccess] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetch("https://drillco.onrender.com/create-payment-intent", {
      method: "POST",
      headers: {
        'authorization': `Barer ${localStorage.getItem('accessToken')}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then(data => {
        setClientSecret(data.clientSecret)
      });
  }, [price]);
  const handleSubmit = async (event) => {

    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      setCardError(error.message)
    } else {
      setCardError('')
      // confirm card payment
      const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: userName,
              email: userEmail,
            },
          },
        },
      );
      if (intentError) {
        setCardError(error?.message)
        setSuccess('')

      } else {
        setTransactionId(paymentIntent.id)
        setCardError('')
        setSuccess('congratulations success payment')
        const payment = {
          transactionId: paymentIntent.id,
          product: _id
        };
        if (paymentIntent.id) {
          fetch(`https://drillco.onrender.com/payment-booking/${_id}`, {
            method: 'PATCH',
            headers: {
              'authorization': `Barer ${localStorage.getItem('accessToken')}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payment)
          })
            .then(res => res.json())
            .then(data => {

              if (data.modifiedCount > 0) {
                toast.success('successfully payment ')
                setDisabled(true)
              }
            })
        }

      }
    }
  };



  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {cardError && <p className=' text-red-700'>{cardError}</p>}
      {success && <>
        <p className=' text-success'>{success}</p>
        <p className=' text-base-100'> your transaction id : <span className='text-base-300'>{transactionId}</span></p>
      </>}

      {<button className=' btn-xs btn-secondary mt-5 btn' type="submit" disabled={!stripe || !clientSecret || disabled}>
        Pay
      </button>}
      <ToastContainer></ToastContainer>
    </form>
  );
};

export default CheckoutFrom;