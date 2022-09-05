import s from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={s.searchBar}>
      <form>
        <input placeholder="Shorten a link here..." />
      </form>
    </div>
  );
};

export default SearchBar;
