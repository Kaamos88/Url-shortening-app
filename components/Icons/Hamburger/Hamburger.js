import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleOff, toggleOn } from "../../../features/nav/navSlice";
import s from "./Hamburger.module.scss"

const Hamburger = () => {
  const dispatch = useDispatch();
  const { toggle } = useSelector(store => store.nav);
  
  const onOff = toggle ? s.change : '';
  
  return (
    <div className={`${s.container} ${onOff}` } onClick={() => toggle ? dispatch(toggleOff()) : dispatch(toggleOn())}>
      <div className={s.bar1}></div>
      <div className={s.bar2}></div>
      <div className={s.bar3}></div>
    </div>
  );
};

export default Hamburger;
