import { useState } from "react";

const Login = function () {
   const [data, setData] = useState({ username: "", password: "" });

   const handlerFormSubmit = function (event) {
      event.preventDefault();

      console.log(data);
      alert(JSON.stringify(data));
   };

   const handleInputChange = function (text, name) {
      setData({ ...data, [name]: text });
   };

   return (
      <>
         <h1>Login Form</h1>
         <form onSubmit={handlerFormSubmit}>
            <label>
               Username:
               <input
                  type="text"
                  value={data.username}
                  onChange={(e) => {
                     handleInputChange(e.target.value, "username");
                  }}
               />
            </label>
            <label>
               Password:
               <input
                  type="password"
                  value={data.password}
                  onChange={(e) => {
                     handleInputChange(e.target.value, "password");
                  }}
               />
            </label>
            <button type="submit">Login</button>
         </form>
      </>
   );
};

export default Login;
