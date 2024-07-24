import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
// Load your publishable key from an environment variable or a config file
const stripePromise = loadStripe(
  "pk_test_51PfNiOLiIKF2MDvL1LAbCLml4skKRTkwew1BprQlr4n7EMCxxCo1CQGLI1cjL8jB5Km96wGS0EBjDCtdLMnGxJM700ubxbdDa4"
);

const CheckoutPage = () => {
  const { courseId } = useParams();
  const {currentUser} = useContext(AuthContext);
  const userId = currentUser ? currentUser.id : null;
  const navigate = useNavigate();

  const handleSuccess = async () => {
    try {
      // Optionally, send a request to enroll the user in the course after successful payment
      await apiRequest.post("/enrollment/enrollUserInCourse", { courseId, userId});
      navigate("/home")
    } catch (error) {
      console.error("Error enrolling user:", error);
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm courseId={courseId} onSuccess={handleSuccess} />
    </Elements>
  );
};

export default CheckoutPage;
