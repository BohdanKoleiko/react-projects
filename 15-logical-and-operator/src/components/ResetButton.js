const buttonStyle = { backgroundColor: "lightgreen" };

const ResetButton = function ({ resetCountNum }) {
   return (
      <div>
         <button style={buttonStyle} onClick={resetCountNum}>
            Reset
         </button>
      </div>
   );
};

export default ResetButton;
