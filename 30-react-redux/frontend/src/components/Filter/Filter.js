import { useDispatch, useSelector } from "react-redux";
import {
   setTitleFilter,
   setAuthorFilter,
   setOnlyFavoriteFilter,
   selectTitleFilter,
   selectAuthorNameFilter,
   selectOnlyFavoriteFilter,
   resetFilters,
} from "../../redux/slices/filterSlice";
import "./Filter.css";

const Filter = () => {
   const dispatch = useDispatch();
   const titleFilter = useSelector(selectTitleFilter);
   const authorFilter = useSelector(selectAuthorNameFilter);
   const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

   console.log(authorFilter);

   const handleTitleFilterChange = (e) => {
      dispatch(setTitleFilter(e.target.value));
   };

   const handleAuthorFilterChange = (e) => {
      dispatch(setAuthorFilter(e.target.value));
   };

   const handleButtonReset = () => {
      dispatch(resetFilters());
   };

   const handleOnlyFavoriteFilterChange = () => {
      dispatch(setOnlyFavoriteFilter());
   };

   return (
      <div className="app-block filter">
         <div className="filter-row">
            <div className="filter-group">
               <input
                  type="text"
                  placeholder="Filter by title..."
                  value={titleFilter}
                  onChange={handleTitleFilterChange}
               />
            </div>
            <div className="filter-group">
               <input
                  type="text"
                  placeholder="Filter by author's name..."
                  value={authorFilter}
                  onChange={handleAuthorFilterChange}
               />
            </div>
            <div className="filter-group">
               <label>
                  <input
                     type="checkbox"
                     checked={onlyFavoriteFilter}
                     onChange={handleOnlyFavoriteFilterChange}
                  />
                  <span>Only Favorite</span>
               </label>
            </div>
            <button type="button" onClick={handleButtonReset}>
               Reset Filters
            </button>
         </div>
      </div>
   );
};

export default Filter;
