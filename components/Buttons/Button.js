import s from "./Button.module.scss"

function Button({nameIn, type, copy}) {
  const btnType = type === 'btnRnd' ? s.btnRnd : s.btnSq;
  const copied = copy ? s.copy : '';
  
  return (
    <>
      <button className={`${s.btn} ${btnType} ${copied}`} ><span>{nameIn}</span></button>
    </>
  );
}

export default Button;
