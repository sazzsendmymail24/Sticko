import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const PricingCardHeader = ({
  className = "",
  devices,
  pro,
  proColor,
  proDisplay,
  proMinWidth,
  planTargetFlex,
  device,
  bestForIndividual,
  teamPlanDescription,
  teamPlanDescriptionMinWidth,
}) => {
  const proStyle = useMemo(() => {
    return {
      color: proColor,
      display: proDisplay,
      minWidth: proMinWidth,
    };
  }, [proColor, proDisplay, proMinWidth]);

  const planTargetStyle = useMemo(() => {
    return {
      flex: planTargetFlex,
    };
  }, [planTargetFlex]);

  const teamPlanDescriptionStyle = useMemo(() => {
    return {
      minWidth: teamPlanDescriptionMinWidth,
    };
  }, [teamPlanDescriptionMinWidth]);

  return (
    <div
      className={`self-stretch border-lavender-200 border-b-[1px] border-solid flex flex-col items-start justify-start pt-0 px-0 pb-[22px] gap-5 text-left text-2xl text-royalblue-100 font-body ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
        <Image
          className="h-14 w-14 relative rounded-sm overflow-hidden shrink-0"
          loading="lazy"
          width={56}
          height={56}
          alt=""
          src={devices}
        />
        <div
          className="relative uppercase font-semibold mq450:text-mid"
          style={proStyle}
        >
          {pro}
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-6 text-21xl text-colour-black">
        <div
          className="self-stretch flex flex-col items-start justify-start gap-3.5"
          style={planTargetStyle}
        >
          <h1 className="m-0 self-stretch relative text-inherit leading-[140%] font-semibold font-[inherit] mq450:text-5xl mq450:leading-[34px] mq800:text-13xl mq800:leading-[45px]">
            {device}
          </h1>
          <div className="self-stretch relative text-lgi leading-[140%] text-colour-gray">
            {bestForIndividual}
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[19px] text-29xl">
          <div
            className="relative [text-decoration:line-through] leading-[140%] font-semibold inline-block min-w-[65px] mq450:text-10xl mq450:leading-[40px] mq800:text-19xl mq800:leading-[54px]"
            style={teamPlanDescriptionStyle}
          >
            {teamPlanDescription}
          </div>
          <div className="flex flex-col items-start justify-start pt-[30px] px-0 pb-0 text-lgi text-colour-gray">
            <div className="relative leading-[140%]">per month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

PricingCardHeader.propTypes = {
  className: PropTypes.string,
  devices: PropTypes.string.isRequired,
  pro: PropTypes.string,
  device: PropTypes.string,
  bestForIndividual: PropTypes.string,
  teamPlanDescription: PropTypes.string,

  /** Style props */
  proColor: PropTypes.string,
  proDisplay: PropTypes.string,
  proMinWidth: PropTypes.string,
  planTargetFlex: PropTypes.string,
  teamPlanDescriptionMinWidth: PropTypes.string,
};

export default PricingCardHeader;
