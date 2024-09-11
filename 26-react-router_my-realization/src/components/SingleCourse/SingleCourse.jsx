import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import courses from "../../data/courses";
//import NotFound from "./NotFound";

const SingleCourse = function () {
   const params = useParams();
   const certainCourse = courses.find((course) => course.slug === params.courseSlug);

   // For automatic redirection
   const navigate = useNavigate();
   useEffect(() => {
      if (!certainCourse) {
         navigate("..", { relative: "path" });
      }
   }, [certainCourse, navigate]);

   // Simple show the Not Fount page
   //if (!certainCourse) {
   //   return <NotFound />;
   //}

   return (
      <div className="single-course">
         <h1 className="single-course__title">{certainCourse?.title}</h1>
         <h2>{certainCourse?.slug}</h2>
         <h3>{certainCourse?.id}</h3>

         {/* The first variant is to return to the page with all courses by using direct link */}
         {/* <Link to="/courses">Back to all courses</Link> */}

         {/* The second variant is to return to the page with all courses by using returning syntax to prev folder but specifying "relative" attribut */}
         <Link to=".." relative="path">
            Back to all courses
         </Link>
      </div>
   );
};

export default SingleCourse;
