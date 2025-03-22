import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { clearError, selectErrorMsg } from "../../redux/slices/errorSlice";

const Error = () => {
   const errorMsg = useSelector(selectErrorMsg);
   const dispatch = useDispatch();

   useEffect(() => {
      if (errorMsg) {
         toast.info(errorMsg);
         dispatch(clearError());
      }
   }, [errorMsg, dispatch]);

   return <ToastContainer position="top-right" autoClose={2000} />;
};

export default Error;
