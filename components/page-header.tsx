import Image from "next/image";
import PropTypes from "prop-types";

const PageHeader = ({ className = "", myPlan }) => {
  return (
    <header
      className={`self-stretch rounded-2xl bg-white flex flex-row items-center justify-between py-[15.5px] px-[18px] top-[0] z-[99] sticky gap-5 text-left text-14xl text-colour-black font-body ${className}`}
    >
      <h2 className="m-0 relative text-inherit leading-[140%] font-normal font-[inherit]">
        {myPlan}
      </h2>
      <div className="self-stretch w-[303px] flex flex-row items-center justify-start gap-2.5 text-smi">
        <div className="rounded-3xs bg-royalblue-300 flex flex-row items-center justify-center p-4">
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src="/notification.svg"
          />
        </div>
        <div className="self-stretch flex-1 rounded-3xs bg-gray-300 border-aliceblue-300 border-[1px] border-solid flex flex-row items-center justify-start p-[7px] gap-2.5">
          <Image
            className="h-[38px] w-[38px] relative rounded-10xl-7 overflow-hidden shrink-0 object-cover"
            loading="lazy"
            width={38}
            height={38}
            alt=""
            src="/frame-435@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[140%]">
              Welcome back,
            </div>
            <div className="self-stretch relative text-base leading-[140%] font-semibold">
              Sazz
            </div>
          </div>
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0"
            width={24}
            height={24}
            alt=""
            src="/arrow--down-2.svg"
          />
        </div>
      </div>
    </header>
  );
};

PageHeader.propTypes = {
  className: PropTypes.string,
  myPlan: PropTypes.string,
};

export default PageHeader;
