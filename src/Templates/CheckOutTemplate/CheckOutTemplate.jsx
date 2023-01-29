import React from "react";
import { useEffect } from "react";
import {
  Navigate,
  redirect,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import LoadingPage from "../../Components/LoadingPage";
import { USER_LOGIN } from "../../Utils/settings/config";
import CheckOutPage from "./CheckoutPage/CheckOutPage";

const CheckOutTemplate = () => {
  if (!localStorage.getItem(USER_LOGIN)) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <LoadingPage />
      <CheckOutPage />
    </div>
  );
};

export default CheckOutTemplate;
