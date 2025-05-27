import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { useSelector, useDispatch } from "react-redux";

export default function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filters.name);

  const onFilter = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };
  return (
    <div className={css.searchBox}>
      <label htmlFor="searchInput">Find contacts by name</label>
      <input type="text" id="searchInput" value={value} onChange={onFilter} />
    </div>
  );
}
