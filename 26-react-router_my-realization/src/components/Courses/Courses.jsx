import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import courses from "../../data/courses";
import "./Courses.css";

const SORTED_KEYS = Object.keys(courses[0]).filter((key) => key !== "img");

function sortCourses(courses, key) {
   const sortedCourses = [...courses];

   if (!key || !SORTED_KEYS.includes(key)) {
      return sortedCourses;
   }

   sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
   return sortedCourses;
}

const Courses = function () {
   const location = useLocation();
   const query = queryString.parse(location.search);
   const navigate = useNavigate();
   const [sortValue, setSortValue] = useState(query.sort);
   const [sortedCourses, setSortedCourses] = useState(sortCourses(courses, sortValue));

   const handleSetSortValue = function (e) {
      setSortValue(e.target.value);
      setSortedCourses(sortCourses(courses, e.target.value));
   };

   useEffect(() => {
      if (!sortValue || !SORTED_KEYS.includes(sortValue)) {
         navigate(".");
         setSortValue();
         setSortedCourses([...courses]);
      } else {
         navigate(`?sort=${sortValue}`);
      }
   }, [navigate, sortValue]);

   return (
      <section>
         <div className="container">
            {sortValue ? (
               <h1 className="title">Courses sorted by {sortValue}</h1>
            ) : (
               <h1>Courses</h1>
            )}

            <select
               className="sort-fild"
               name="sort"
               onChange={handleSetSortValue}
               value={sortValue}
            >
               <option value="">-</option>
               <option value="title">Title</option>
               <option value="id">ID</option>
               <option value="slug">Slug</option>
            </select>

            <div className="courses">
               {sortedCourses.map((course, index) => (
                  <div className="course" key={index}>
                     <figure className="courses__img-container">
                        <img
                           className="course__img"
                           src={course.img}
                           alt="It is illustrating of the theme of the certaine course we suggest you"
                        />
                     </figure>
                     <h3 className="course__title">{course.title}</h3>
                     <Link className="course__link" to={course.slug}>
                        To course
                     </Link>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Courses;
