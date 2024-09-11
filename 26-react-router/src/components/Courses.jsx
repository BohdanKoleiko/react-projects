import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import courses from "../data/courses";

const SORT_KYES = ["title", "slug", "id"];

function sortCourser(courses, key) {
   const sortedCourses = [...courses];
   if (!key || !SORT_KYES.includes(key)) {
      return sortedCourses;
   }
   sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
   return sortedCourses;
}

const Courses = function () {
   const location = useLocation();
   const query = queryString.parse(location.search);
   const navigate = useNavigate();
   const [sortKey, setSortKey] = useState(query.sort);
   const [sortedCourses, setSourtedCourses] = useState(sortCourser(courses, sortKey));

   useEffect(() => {
      if (!SORT_KYES.includes(sortKey)) {
         navigate(".");
         setSortKey();
         setSourtedCourses([...courses]);
      }
   }, [sortKey, navigate]);

   return (
      <section>
         {sortKey ? <h1>Courses sorted by {sortKey}</h1> : <h1>Courses</h1>}

         <div className="courses">
            {sortedCourses.map((course, index) => (
               <Link to={course.slug} key={index}>
                  {course.title}
               </Link>
            ))}
         </div>
      </section>
   );
};

export default Courses;
