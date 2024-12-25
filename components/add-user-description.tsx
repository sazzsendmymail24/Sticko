import Image from "next/image";
import PropTypes from "prop-types";

const AddUserDescription = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[125px] flex flex-col items-start justify-between max-w-full text-left text-lgi text-colour-black font-body mq1150:h-auto ${className}`}
    >
      <div className="self-stretch relative leading-[140%]">
        Add User to your plan
      </div>
      <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-5 text-lg text-darkslategray font-inter mq1150:flex-wrap">
        <div className="h-[55px] w-[554px] flex flex-row items-center justify-between max-w-full">
          <div className="w-[319px] rounded-37xl border-aliceblue-300 border-[1px] border-solid box-border flex flex-row items-center justify-between py-3.5 px-[30px] gap-5">
            <input
              className="w-[127px] [border:none] [outline:none] font-inter text-lg bg-[transparent] relative leading-[150%] text-gray-200 text-left inline-block p-0"
              placeholder="Search items..."
              type="text"
            />
            <Image
              className="h-5 w-5 relative"
              width={20}
              height={20}
              alt=""
              src="/search-icon.svg"
            />
          </div>
          <div className="rounded-37xl border-aliceblue-300 border-[1px] border-solid flex flex-row items-center justify-center py-3.5 px-[22px]">
            <div className="flex flex-row items-center justify-start gap-2.5">
              <div className="relative leading-[150%] font-medium">Joined</div>
              <div className="relative leading-[150%]">Anytime</div>
              <Image
                className="h-6 w-6 relative"
                width={24}
                height={24}
                alt=""
                src="/iconlylightarrow--down-2.svg"
              />
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[16.5px] px-[23px] bg-[transparent] rounded-37xl [background:linear-gradient(108.27deg,_#0077ff_2.38%,_#2dc2ff),_#f2f8ff] flex flex-row items-center justify-center">
          <div className="flex flex-row items-center justify-start gap-2.5">
            <Image
              className="h-5 w-5 relative"
              width={20}
              height={20}
              alt=""
              src="/vector-1.svg"
            />
            <div className="flex flex-row items-center justify-start">
              <div className="relative text-base leading-[140%] font-body text-white text-left inline-block min-w-[80px]">
                New User
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

AddUserDescription.propTypes = {
  className: PropTypes.string,
};

export default AddUserDescription;
