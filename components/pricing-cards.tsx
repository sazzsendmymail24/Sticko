import Image from "next/image";
import PricingCardHeader from "./pricing-card-header";
import PropTypes from "prop-types";

const PricingCards = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-8 max-w-full text-left text-2xl text-royalblue-100 font-body mq800:gap-4 mq1150:flex-wrap ${className}`}
    >
      <div className="flex-1 shadow-[0px_26px_40px_rgba(188,_202,_255,_0.13)] rounded-2xl bg-white overflow-hidden flex flex-col items-start justify-start pt-10 px-10 pb-12 box-border gap-7 min-w-[262px] max-w-full mq800:pt-[26px] mq800:pb-[31px] mq800:box-border">
        <PricingCardHeader
          devices="/1devices.svg"
          pro="Pro"
          device="1 Device"
          bestForIndividual="Best for individual"
          teamPlanDescription="$4"
        />
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[6.5px] gap-4 text-lgi text-colour-gray mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <div className="flex flex-col items-start justify-start gap-[22.5px]">
              <div className="relative leading-[140%]">Auto Renewal</div>
              <div className="w-[122px] relative leading-[140%] text-center inline-block">
                05 Jun 2025
              </div>
            </div>
          </div>
          <div className="h-[33px] w-[74px] relative rounded-xl [background:linear-gradient(-76.27deg,_#0077ff,_#2dc2ff),_#0077ff]">
            <div className="absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(-76.27deg,_#0077ff,_#2dc2ff),_#0077ff] w-full h-full hidden" />
            <div className="absolute top-[4px] left-[43px] rounded-[50%] bg-white w-[25px] h-[25px] z-[1]" />
          </div>
        </div>
        <button className="cursor-pointer border-red-200 border-[1px] border-solid py-6 pl-[79px] pr-[76px] bg-[transparent] self-stretch rounded-30xl flex flex-row items-start justify-start hover:bg-red-300 hover:border-red-100 hover:border-[1px] hover:border-solid hover:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="relative text-lgi leading-[140%] font-body text-red-200 text-left">
            Cancel Plan
          </div>
        </button>
      </div>
      <div className="flex-1 shadow-[0px_26px_40px_rgba(188,_202,_255,_0.13)] [filter:blur(4px)] rounded-2xl bg-white overflow-hidden flex flex-col items-start justify-start pt-10 px-10 pb-[49px] box-border gap-[141px] min-w-[262px] max-w-full mq450:gap-[70px] mq800:pt-[26px] mq800:pb-8 mq800:box-border">
        <PricingCardHeader
          devices="/1devices-1.svg"
          pro="Diamond"
          proColor="#9d00ff"
          proDisplay="inline-block"
          proMinWidth="114px"
          planTargetFlex="1"
          device="5 Devices"
          bestForIndividual="Best for family use"
          teamPlanDescription="$14"
          teamPlanDescriptionMinWidth="85px"
        />
        <button className="cursor-pointer border-royalblue-100 border-[1px] border-solid py-6 pl-[92px] pr-[89px] bg-[transparent] self-stretch rounded-30xl flex flex-row items-start justify-center hover:bg-cornflowerblue-200 hover:border-cornflowerblue-100 hover:border-[1px] hover:border-solid hover:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="relative text-lgi leading-[140%] font-body text-royalblue-100 text-left inline-block min-w-[86px]">
            Upgrade
          </div>
        </button>
      </div>
      <div className="flex-1 shadow-[0px_26px_40px_rgba(188,_202,_255,_0.13)] [filter:blur(4px)] rounded-2xl bg-white overflow-hidden flex flex-col items-start justify-start pt-10 px-10 pb-[46px] box-border gap-[65px] min-w-[262px] max-w-full text-darkorange-100 mq450:gap-8 mq800:pt-[26px] mq800:pb-[30px] mq800:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-5">
          <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
            <Image
              className="h-14 w-14 relative rounded-sm overflow-hidden shrink-0"
              loading="lazy"
              width={56}
              height={56}
              alt=""
              src="/custom-devices.svg"
            />
            <div className="relative uppercase font-semibold inline-block min-w-[99px] mq450:text-mid">
              Custom
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-3.5 text-21xl text-colour-black">
            <div className="self-stretch relative leading-[140%] font-semibold mq450:text-5xl mq450:leading-[34px] mq800:text-13xl mq800:leading-[45px]">
              10 Devices
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-6 text-lgi text-colour-gray">
              <div className="self-stretch relative leading-[140%]">
                For big team user
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-5 text-29xl text-colour-black">
                <div className="flex flex-row items-start justify-start gap-4">
                  <div className="relative [text-decoration:line-through] leading-[140%] font-semibold inline-block min-w-[101px] mq450:text-10xl mq450:leading-[40px] mq800:text-19xl mq800:leading-[54px]">
                    $40
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[30px] px-0 pb-0 text-lgi text-colour-gray">
                    <div className="relative leading-[140%]">per month</div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-px gap-7 text-lg font-text-single-300-bold">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[21px]">
                    <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                      <div className="relative leading-[30px]">
                        How many users
                      </div>
                    </div>
                    <div className="self-stretch w-[102px] rounded-mini bg-white border-lavender-300 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[13px] px-10">
                      <div className="h-[52px] w-[102px] relative rounded-mini bg-white border-lavender-300 border-[1px] border-solid box-border hidden" />
                      <input
                        className="w-full [border:none] [outline:none] inline-block font-text-single-300-bold text-xl bg-[transparent] flex-1 relative leading-[22px] font-bold text-colour-black text-left min-w-[14px] p-0 z-[1] mq450:text-base mq450:leading-[18px]"
                        placeholder="10"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="self-stretch h-px relative border-lavender-200 border-t-[1px] border-solid box-border" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer border-royalblue-100 border-[1px] border-solid py-6 px-[91px] bg-[transparent] self-stretch rounded-30xl flex flex-row items-start justify-center hover:bg-cornflowerblue-200 hover:border-cornflowerblue-100 hover:border-[1px] hover:border-solid hover:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="relative text-lgi leading-[140%] font-body text-royalblue-100 text-left inline-block min-w-[86px]">
            Upgrade
          </div>
        </button>
      </div>
    </div>
  );
};

PricingCards.propTypes = {
  className: PropTypes.string,
};

export default PricingCards;
