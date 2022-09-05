import s from "./ButtonRounded.module.scss"

function ButtonRounded({nameIn}) {
  return (
    <>
      <button className={s.btn}>{nameIn}</button>
    </>
  );
}

export default ButtonRounded;
