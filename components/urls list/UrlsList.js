import { useSelector } from "react-redux";
import Button from "../Buttons/Button";
import s from "./UrlsList.module.scss";

const UrlsList = () => {
  const { URLs, shortenURLs } = useSelector((store) => store.urls);
  const renderList = URLs.map((url, i) => {
    return (
      <li>
        <div className={s.listElement}>
          <p>{url}</p>
          <p>{shortenURLs[i]}</p>
          <div className={s.btnWrapper}>
            <Button nameIn={"Copy"} type={"btnSq"} />
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className={s.wrapper}>
      <ul>{renderList}</ul>
    </div>
  );
};

export default UrlsList;
