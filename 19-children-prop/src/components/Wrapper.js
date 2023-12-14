const Wrapper = function (props) {
   const style = {
      backgroundColor: props.color,
      width: "250px",
      padding: "20px",
      margin: "20px auto",
   };

   return <div style={style}>{props.children ? props.children : <h1>Hello from Wrapper</h1>}</div>;
};

export default Wrapper;
