import s from "./Button.module.scss"

function Button({nameIn, type}) {
  const btnType = type === 'btnRnd' ? s.btnRnd : s.btnSq;

  return (
    <>
      <button className={`${s.btn} ${btnType}`}>{nameIn}</button>
    </>
  );
}

export default Button;
