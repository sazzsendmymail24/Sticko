import Image from "next/image";
import PageHeader from "./page-header";
import FieldLabels from "./field-labels";
import PropTypes from "prop-types";

const SettingsPage = ({ className = "" }) => {
  return (
    <section
      className={`flex-1 flex flex-col items-start justify-start gap-8 max-w-[calc(100%_-_256px)] text-left text-lgi text-colour-black font-body mq975:max-w-full mq725:gap-4 ${className}`}
    >
      <PageHeader myPlan="Settings" />
      <div className="self-stretch rounded-2xl bg-white flex flex-row items-start justify-start pt-[58px] px-[73px] pb-[54px] box-border max-w-full mq725:pt-[38px] mq725:pb-[35px] mq725:box-border mq1025:pl-9 mq1025:pr-9 mq1025:box-border">
        <div className="h-[629px] w-[1113px] relative rounded-2xl bg-white hidden max-w-full" />
        <div className="w-[871px] flex flex-col items-start justify-start max-w-full z-[1]">
          <div className="flex flex-row items-center justify-start gap-3.5 max-w-full mq450:flex-wrap">
            <div className="flex flex-row items-center justify-start p-2.5 relative gap-2.5 mq450:flex-1">
              <Image
                className="h-[101px] w-[101px] relative rounded-45xl object-cover mq450:flex-1"
                width={101}
                height={101}
                alt=""
                src="/profile-image@2x.png"
              />
              <Image
                className="h-[100px] w-[calc(100%_-_21px)] absolute !m-[0] top-[calc(50%_-_50.5px)] right-[10px] left-[11px] rounded-54xl max-w-full overflow-hidden z-[1]"
                width={100}
                height={100}
                alt=""
                src="/frame-1.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border min-w-[129px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
                <div className="self-stretch relative leading-[140%] font-semibold">
                  Alexa Rawles
                </div>
                <div className="relative text-base leading-[140%] text-gray-400">
                  alexarawles@gmail.com
                </div>
              </div>
            </div>
          </div>
          <form className="m-0 self-stretch flex flex-col items-start justify-start gap-10 max-w-full mq450:gap-5">
            <div className="self-stretch flex flex-col items-end justify-start gap-[37px] max-w-full mq450:gap-[18px]">
              <button className="cursor-pointer [border:none] py-[11px] px-[29px] bg-colour-black rounded-15xl flex flex-row items-center justify-center hover:bg-dimgray">
                <div className="relative text-base leading-[140%] font-semibold font-body text-white text-left">
                  Edit
                </div>
              </button>
              <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center py-0 px-px box-border gap-x-[33px] gap-y-10 max-w-full mq450:gap-4">
                <FieldLabels
                  labelText="First Name"
                  placeholder="Your First  Name"
                />
                <FieldLabels
                  labelText="Last Name"
                  fieldValuesBorder="1px solid #0077ff"
                  placeholder="Sakib"
                  yourFirstNameWidth="38px"
                  yourFirstNameColor="#1c1c1c"
                />
                <FieldLabels
                  labelText="Email"
                  fieldValuesBorder="1px solid #eaf5ff"
                  placeholder="alexarawles@gmail.com"
                  yourFirstNameWidth="161px"
                  yourFirstNameColor="#8d9199"
                />
                <FieldLabels
                  labelText="Password"
                  fieldValuesBorder="1px solid #eaf5ff"
                  placeholder="Set Your Password"
                  yourFirstNameWidth="123px"
                  yourFirstNameColor="#8d9199"
                />
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[16.5px] px-[58px] bg-[transparent] rounded-37xl [background:linear-gradient(108.27deg,_#0077ff_2.38%,_#2dc2ff),_#f2f8ff] flex flex-row items-center justify-center">
              <div className="flex-1 flex flex-row items-center justify-start">
                <div className="flex flex-row items-center justify-start">
                  <div className="relative text-base leading-[140%] font-body text-white text-left">
                    Save
                  </div>
                </div>
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

SettingsPage.propTypes = {
  className: PropTypes.string,
};

export default SettingsPage;
