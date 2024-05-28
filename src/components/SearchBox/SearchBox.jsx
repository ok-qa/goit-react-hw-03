import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.searchBoxLabel}>
      <p>Find contacts by name </p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        className={css.inputSearch}
      />
    </div>
  );
};

export default SearchBox;
