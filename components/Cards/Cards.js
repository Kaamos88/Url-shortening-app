import s from "./Cards.module.scss";

const Cards = ({ icon, heading, description }) => {
  return (
    <div className={s.card}>
      <div className={s.content}>
        <div className={s.icon}>{icon}</div>
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Cards;
