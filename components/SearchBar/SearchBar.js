import { useState } from "react";
import { useDispatch } from "react-redux";
import { getShortUrl } from "../../features/url-list/urlListSlice";
import Button from "../Buttons/Button";
import s from "./SearchBar.module.scss";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  const [err, setErr] = useState(false);
  const empty = err ? s.err : "";
  const onSubmit = (e) => {
    e.preventDefault();
    if (!term) {
      setErr(true);
    } else {
      dispatch(getShortUrl(term));
      setTerm("");
    }
  };

  return (
    <div className={s.searchBar}>
      <form onSubmit={onSubmit}>
        <div className={s.inputWrapper}>
          <input
            placeholder="Shorten a link here..."
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
              setErr(false);
            }}
            className={empty}
          />
          <label className={empty}>Please add a link</label>
        </div>

        <div className={s.btnWrapper}>
          <Button nameIn={"Shorten It!"} type={"btnSq"} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
