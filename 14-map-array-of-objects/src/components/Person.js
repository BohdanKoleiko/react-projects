function Person(props) {
   const { firstName, lastName, email, img } = props;

   return (
      <div className="person">
         <img src={img} alt="" />
         <h3>
            {firstName} {lastName}
         </h3>
         <h4>{email}</h4>
      </div>
   );
}

export default Person;
