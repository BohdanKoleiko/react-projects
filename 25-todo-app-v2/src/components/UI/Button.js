import styles from "./Button.module.css";

const Button = function (props) {
   const { children, disabled = false } = props;

   /**
    * I removed onClick and title props from de-structurization because
    * the same names are used in button attributes.
    * So, it doesn`t need to write these props directly when the props object
    * divides into independent props right in the button.
    * It looked like onClick={onClick} and title={title}.
    */

   return (
      <button {...props} className={styles.button} disabled={disabled}>
         {children}
      </button>
   );
};

export default Button;
