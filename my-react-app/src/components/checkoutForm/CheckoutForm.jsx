import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import apiRequest from "../../lib/apiRequest";
import "./checkoutForm.scss";

const CheckoutForm = ({ courseId, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    email: "",
  });
  const [course, setCourse] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBillingDetails({ ...billingDetails, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    try {
      const response = await apiRequest.post("/stripe/create-payment-intent", {
        courseId,
      });
      const { client_secret } = response.data;

      const payload = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: billingDetails.name,
            email: billingDetails.email,
          },
        },
      });

      if (payload.error) {
        setError(`Payment failed: ${payload.error.message}`);
      } else {
        setError(null);
        setSucceeded(true);
        onSuccess(); // Call onSuccess to handle post-payment logic
      }
    } catch (error) {
      setError(`Payment failed: ${error.message}`);
    } finally {
      setProcessing(false);
    }
  };

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await apiRequest.get("/courses/" + courseId);
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    fetchCourse();
  }, [courseId]);

  return (
    <div className="checkout-form">
      <h2>Enroll in {course && course.title}</h2>
      <h3> ${course && course.price}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name
          <input
            type="text"
            name="name"
            value={billingDetails.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={billingDetails.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Card Information
          <CardElement />
        </label>
        <button
          disabled={processing || !stripe || !elements}
          id="submit"
          className="submit-button"
        >
          {processing ? "Processing..." : "Pay"}
        </button>
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        {succeeded && (
          <p className="success-message">
            Payment succeeded, you are now enrolled in the course!
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
