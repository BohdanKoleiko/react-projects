import Person from "./Person";
import persons from "../data/persons";

const Persons = function () {
   return (
      <div className="persons">
         {persons.map((person) => (
            <Person key={person.id} {...person} />
         ))}
      </div>
   );
};

export default Persons;
