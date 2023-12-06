const PetInfo = function (props) {
   const { animal, age, hasPet } = props;

   // Перший варіант використання тернарника. Тут повертаємо звичайну строку JS, так як тут ми використовуємо код JS
   //const text = hasPet ? `My ${animal} is ${age} years old` : `I don't have an animal`;

   // Другий варіант використання тернарника. Тут повертаємо JSX код.
   return hasPet ? (
      <h1>
         My {animal} is {age} years old
      </h1>
   ) : (
      <h2>I don't have an animal</h2>
   );
};

export default PetInfo;
