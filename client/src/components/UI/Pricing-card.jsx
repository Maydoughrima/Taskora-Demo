import { FaCheck } from "react-icons/fa6";
import Button from "../../components/UI/Button";

const PricingCard = ({
  title,
  description,
  pricing,
  features,
  btn,
  className = "",
  btnClass= "",
  titleClass="",
  descriptionClass= "",
  pricingClass = "",
  featuresClass = "",
  iconClass=" ",
}) => {
  return (
    <div
      className={`flex flex-col flex-1 border border-[var(--text)]/50 p-4 gap-4 rounded-lg ${className} shadow-sm`}
    >
      {/* card header */}
      <div className="card-header">
        <h4 className={`font-heading font-semibold ${titleClass}`}>
          {title}
        </h4>
        <p className={`text-sm font-body leading-tight ${descriptionClass}`}>
          {description}
        </p>
      </div>

      {/* Price */}
      <div className="border-b border-[var(--text)]/50">
        <p className={`font-heading font-semibold text-3xl ${pricingClass}`}>
          {pricing}
        </p>
      </div>

      {/* features */}
      <div className="features pb-8">
        <p className={`font-body mb-4 ${featuresClass}`}>Features:</p>
        <ul className="flex flex-col font-body gap-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <FaCheck  className={`${iconClass} text-[var(--cta)]`}/>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <Button className={`mt-auto rounded-full ${btnClass}`}>{btn}</Button>
    </div>
  );
};
export default PricingCard;
