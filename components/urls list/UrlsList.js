import { useDispatch, useSelector } from "react-redux";
import { copyLink } from "../../features/url-list/urlListSlice";
import Button from "../Buttons/Button";
import s from "./UrlsList.module.scss";

const UrlsList = () => {
  const { URLs, shortenURLs, isCopied } = useSelector((store) => store.urls);
  const dispatch = useDispatch();

  const renderList = URLs.map((url, i) => {
    return (
      <li id="scrollTo" key={i}>
        <div className={s.listElement}>
          <p>{url}</p>
          <p id="copyUrl">{shortenURLs[i]}</p>
          <div className={s.btnWrapper} onClick={() => dispatch(copyLink(i))}>
            <Button nameIn={"Copy"} type={"btnSq"} copy={isCopied ? true : false}/>
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
