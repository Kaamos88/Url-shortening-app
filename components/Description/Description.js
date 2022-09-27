import Cards from "../Cards/Cards";
import BrandRecognition from "../Icons/BrandRecognition";
import DetailedRecords from "../Icons/DetailedRecords";
import FullyCustomizable from "../Icons/FullyCustomizable";
import s from "./Description.module.scss"

const Description = () => {
  const descriptions = [
    {
      icon: <BrandRecognition />,
      heading: "Brand Recognition",
      description:
        "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    },
    {
      icon: <DetailedRecords />,
      heading: "Detailed Records",
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      icon: <FullyCustomizable />,
      heading: "Fully Customizable",
      description:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];
  return (
    <div>
      <div>
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <div>
        <ul className={s.list}>
          {descriptions.map((card, i) => {
            return (
              <li>
                <Cards
                  key={i}
                  icon={card.icon}
                  heading={card.heading}
                  description={card.description}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Description;
