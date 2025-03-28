import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { clearError, selectErrorMsg } from "../../redux/slices/errorSlice";

const Error = () => {
   const errorMsg = useSelector(selectErrorMsg);
   const dispatch = useDispatch();

   useEffect(() => {
      const errorType = errorMsg.type ? errorMsg.type : "info";

      if (errorMsg.type && errorMsg.msg) {
         toast[errorType](errorMsg.msg);
         dispatch(clearError());
      }
   }, [errorMsg, dispatch]);

   return <ToastContainer position="top-right" autoClose={2000} />;
};

export default Error;
