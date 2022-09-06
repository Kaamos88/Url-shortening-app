import Button from "../Buttons/Button";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <section className={s.img}>
        <img src="/assets/illustration-working.svg" />
      </section>
      <section className={s.text}>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <div className={s.btnWrapper}>
          <Button nameIn={"Get Started"} type={'btnRnd'} />
        </div>
      </section>
    </header>
  );
};

export default Header;
