import { useDispatch, useSelector } from "react-redux";
import { copyLink } from "../../features/url-list/urlListSlice";
import Button from "../Buttons/Button";
import s from "./UrlsList.module.scss";

const UrlsList = () => {
  const { URLs, shortenURLs, isCopied } = useSelector((store) => store.urls);
  const dispatch = useDispatch();

  const renderList = URLs.map((url, i) => {
    return (
      <li id={i} key={i}>
        <div className={s.urlsLinks}>
          <p className={s.url}>{url}</p>
          <p id="copyUrl" className={s.copyUrl}>
            {shortenURLs[i]}
          </p>
        </div>
        <div
          className={s.btnWrapper}
          onClick={() => {
            dispatch(copyLink(i));
          }}
        >
          <Button
            nameIn={"Copy"}
            type={"btnSq"}
            copy={isCopied ? true : false}
          />
        </div>
      </li>
    );
  });

  return (
    <div id="scrollToMe" className={s.wrapper}>
      <ul>{renderList}</ul>
    </div>
  );
};

export default UrlsList;
