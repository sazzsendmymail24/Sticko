import { useCallback } from "react";
import Image from "next/image";
import RecentUsers from "./recent-users";
import PropTypes from "prop-types";

const UserList = ({ className = "" }) => {
  const onUserGridClick = useCallback(() => {
    // Please sync "User Management" to the project
  }, []);

  const onAccordionHeaderClick = useCallback((event) => {
    const element = event.target;

    const accItem = element.closest("[data-acc-item]") || element;
    const accContent = accItem.querySelector("[data-acc-content]");
    const isOpen = accItem.hasAttribute("data-acc-open");
    const nextOuterSibling =
      accItem?.nextElementSibling || accItem?.parentElement?.nextElementSibling;
    const prevOuterSibling =
      accItem?.previousElementSibling ||
      accItem?.parentElement?.previousElementSibling;
    const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
      ? accItem?.nextElementSibling ||
        nextOuterSibling?.querySelector("[data-acc-item]") ||
        nextOuterSibling
      : accItem?.previousElementSibling ||
        prevOuterSibling?.querySelector("[data-acc-item]") ||
        prevOuterSibling;
    const siblingAccItem =
      siblingContainerAccItem?.querySelector("[data-acc-item]") ||
      siblingContainerAccItem;

    if (!siblingAccItem) return;
    const originalDisplay = "flex";
    const siblingDisplay = "flex";

    const openClasses = ["grid-rows-[1fr]"];
    const closeClasses = ["pt-0", "pb-0", "mb-0", "mt-0", "grid-rows-[0fr]"];

    if (isOpen) {
      accContent?.classList.remove(...openClasses);
      accContent?.classList.add(...closeClasses);

      setTimeout(() => {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = siblingDisplay;
        }
      }, 100);
    } else {
      if (accItem) {
        accItem.style.display = "none";
        siblingAccItem.style.display = originalDisplay;
      }
      const siblingAccContent =
        siblingAccItem?.querySelector("[data-acc-content]");
      setTimeout(() => {
        siblingAccContent?.classList.remove(...closeClasses);
        siblingAccContent?.classList.add(...openClasses);
      }, 1);
    }
  }, []);

  return (
    <div
      className={`self-stretch h-[373px] flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full text-left text-base text-colour-gray font-body ${className}`}
    >
      <div
        className="self-stretch flex-1 flex flex-col items-start justify-start gap-[15px] max-w-full cursor-pointer"
        data-acc-group
        onClick={onUserGridClick}
      >
        <RecentUsers
          bitmap="/bitmap@2x.png"
          edit="Jonny Rich"
          edit1="jonny@gmail.com"
          edit2="1  Jan 2025"
          edit3="Pro Free"
        />
        <div className="w-[1043px] hidden flex-col" data-acc-item data-acc-open>
          <div
            className="w-[1043px] h-[84px] rounded-32xl bg-white border-aliceblue-300 border-[1px] border-solid box-border flex flex-row items-center justify-between py-[9.5px] pl-[13px] pr-[41px] cursor-pointer"
            data-acc-header
            onClick={onAccordionHeaderClick}
          >
            <Image
              className="h-[63px] w-[58px] relative object-cover"
              loading="lazy"
              width={58}
              height={63}
              alt=""
              src="/bitmap@2x.png"
            />
            <div className="h-[41px] w-[870px] flex flex-row items-center justify-center gap-[106px]">
              <div className="h-[30px] flex-1 flex flex-row items-center justify-center py-1 px-0 box-border">
                <div className="h-[22px] flex-1 relative leading-[140%] flex items-center">
                  Jonny Rich
                </div>
              </div>
              <div className="h-[30px] w-[207px] flex flex-row items-center justify-center py-1 px-0 box-border text-colour-black">
                <div className="h-[22px] flex-1 relative leading-[140%] flex items-center">
                  jonny@gmail.com
                </div>
              </div>
              <div className="h-[30px] flex-1 flex flex-row items-center justify-center py-1 px-0 box-border">
                <div className="h-[22px] flex-1 relative leading-[140%] whitespace-pre-wrap flex items-center">
                  1 Jan 2025
                </div>
              </div>
              <div className="h-[41px] flex-1 rounded-81xl bg-lightyellow flex flex-row items-center justify-center py-[9.5px] px-0 box-border text-center text-limegreen">
                <div className="h-[22px] flex-1 relative leading-[140%] flex items-center justify-center">
                  Pro Free
                </div>
              </div>
            </div>
            <Image
              className="h-5 w-[3.7px] relative"
              loading="lazy"
              width={4}
              height={20}
              alt=""
              src="/group-73.svg"
            />
            <div className="relative text-[transparent] hidden" />
          </div>
          <div
            className="w-[1043px] rounded-32xl bg-white border-aliceblue-300 border-[1px] border-solid box-border grid flex-row items-center justify-between py-[9.5px] pl-[13px] pr-[41px] cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
            data-acc-content
          >
            <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </div>
        </div>
        <RecentUsers
          bitmap="/bitmap-1@2x.png"
          edit="Dauch Fen"
          edit1="dauch@gmail.com"
          edit2="23 Sep 2024"
          nameBackgroundColor="rgba(157, 0, 255, 0.08)"
          edit3="Diamond"
          editColor="#9d00ff"
        />
        <div className="w-[1043px] hidden flex-col" data-acc-item data-acc-open>
          <div
            className="w-[1043px] h-[84px] rounded-32xl bg-white border-aliceblue-300 border-[1px] border-solid box-border flex flex-row items-center justify-between py-[9.5px] pl-[13px] pr-[41px] cursor-pointer"
            data-acc-header
            onClick={onAccordionHeaderClick}
          >
            <Image
              className="h-[63px] w-[58px] relative object-cover"
              loading="lazy"
              width={58}
              height={63}
              alt=""
              src="/bitmap@2x.png"
            />
            <div className="h-[41px] w-[870px] flex flex-row items-center justify-center gap-[106px]">
              <div className="h-[30px] flex-1 flex flex-row items-center justify-center py-1 px-0 box-border">
                <div className="h-[22px] flex-1 relative leading-[140%] flex items-center">
                  Dauch Fen
                </div>
              </div>
              <div className="h-[30px] w-[207px] flex flex-row items-center justify-center py-1 px-0 box-border text-colour-black">
                <div className="h-[22px] flex-1 relative leading-[140%] flex items-center">
                  jonny@gmail.com
                </div>
              </div>
              <div className="h-[30px] flex-1 flex flex-row items-center justify-center py-1 px-0 box-border">
                <div className="h-[22px] flex-1 relative leading-[140%] whitespace-pre-wrap flex items-center">
                  1 Jan 2025
                </div>
              </div>
              <div className="h-[41px] flex-1 rounded-81xl bg-lightyellow flex flex-row items-center justify-center py-[9.5px] px-0 box-border text-center text-limegreen">
                <div className="h-[22px] flex-1 relative leading-[140%] flex items-center justify-center">
                  Pro Free
                </div>
              </div>
            </div>
            <Image
              className="h-5 w-[3.7px] relative"
              loading="lazy"
              width={4}
              height={20}
              alt=""
              src="/group-73.svg"
            />
            <div className="relative text-[transparent] hidden" />
          </div>
          <div
            className="w-[1043px] rounded-32xl bg-white border-aliceblue-300 border-[1px] border-solid box-border grid flex-row items-center justify-between py-[9.5px] pl-[13px] pr-[41px] cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
            data-acc-content
          >
            <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </div>
        </div>
        <div
          className="w-[1043px] h-[84px] rounded-32xl bg-white border-aliceblue-300 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[12.5px] pl-[13px] pr-[41px] gap-[106px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer text-lg text-white font-outfit"
          data-acc-item
          data-acc-header
          data-acc-original
          onClick={onAccordionHeaderClick}
        >
          <div className="h-[57px] w-[200.7px] flex flex-row items-start justify-start gap-[27.7px]">
            <div className="h-[57px] w-[58px] relative overflow-hidden shrink-0">
              <div className="absolute top-[0px] left-[0px] w-full h-full">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(108.27deg,_#0077ff_2.38%,_#2dc2ff)] w-full h-full" />
              </div>
              <Image
                className="absolute h-[138.6%] w-[136.21%] top-[-26.32%] right-[-18.97%] bottom-[-12.28%] left-[-17.24%] rounded-45xl max-w-full overflow-hidden max-h-full object-cover hidden"
                width={79}
                height={79}
                alt=""
                src="/57@2x.png"
              />
              <b className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_12px)] leading-[18px] uppercase flex items-center w-[25px] h-[18px] z-[2]">
                NS
              </b>
            </div>
            <div className="h-[39.5px] w-[115px] flex flex-col items-start justify-start pt-[17.5px] px-0 pb-0 box-border text-base text-colour-gray font-body">
              <div className="w-[116px] h-[22px] relative leading-[140%] flex items-center">
                Nail Sakip
              </div>
            </div>
          </div>
          <div className="h-[49px] w-[680.3px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border text-base text-colour-black font-body">
            <div className="w-[680.3px] h-[41px] flex flex-row items-start justify-start gap-[106px]">
              <div className="h-[31.5px] w-[207px] flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0 box-border">
                <div className="w-52 h-[22px] relative leading-[140%] flex items-center">
                  nail@gmail.com
                </div>
              </div>
              <div className="h-[31.5px] w-[115px] flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0 box-border text-colour-gray">
                <div className="w-[116px] h-[22px] relative leading-[140%] flex items-center">
                  4 Aug 2022
                </div>
              </div>
              <div className="h-[41px] w-[146.3px] flex flex-row items-start justify-start gap-[27.6px] text-center text-darkorange-200">
                <div className="h-[41px] flex-1 rounded-23xl bg-darkorange-300 flex flex-row items-start justify-start py-[9.5px] px-0 box-border">
                  <div className="h-[22px] flex-1 relative leading-[140%] flex items-center justify-center">
                    Custom
                  </div>
                </div>
                <div className="h-[30.5px] w-[3.7px] flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0 box-border">
                  <Image
                    className="w-[3.7px] h-5 relative"
                    width={4}
                    height={20}
                    alt=""
                    src="/group-73.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1043px] hidden flex-col" data-acc-item data-acc-open>
          <div
            className="w-[1043px] h-[84px] rounded-32xl bg-white border-aliceblue-300 border-[1px] border-solid box-border flex flex-row items-center justify-between py-[9.5px] pl-[13px] pr-[41px] cursor-pointer"
            data-acc-header
            onClick={onAccordionHeaderClick}
          >
            <Image
              className="h-[63px] w-[58px] relative object-cover"
              loading="lazy"
              width={58}
              height={63}
              alt=""
              src="/bitmap@2x.png"
            />
            <div className="h-[41px] w-[870px] flex flex-row items-center justify-center gap-[106px]">
              <div className="h-[30px] flex-1 flex flex-row items-center justify-center py-1 px-0 box-border">
                <div className="h-[18px] flex-1 relative leading-[140%] flex items-center">
                  NS
                </div>
              </div>
              <div className="h-[30px] w-[207px] flex flex-row items-center justify-center py-1 px-0 box-border text-colour-black">
                <div className="h-[22px] flex-1 relative leading-[140%] flex items-center">
                  jonny@gmail.com
                </div>
              </div>
              <div className="h-[30px] flex-1 flex flex-row items-center justify-center py-1 px-0 box-border">
                <div className="h-[22px] flex-1 relative leading-[140%] whitespace-pre-wrap flex items-center">
                  1 Jan 2025
                </div>
              </div>
              <div className="h-[41px] flex-1 rounded-81xl bg-lightyellow flex flex-row items-center justify-center py-[9.5px] px-0 box-border text-center text-limegreen">
                <div className="h-[22px] flex-1 relative leading-[140%] flex items-center justify-center">
                  Pro Free
                </div>
              </div>
            </div>
            <Image
              className="h-5 w-[3.7px] relative"
              loading="lazy"
              width={4}
              height={20}
              alt=""
              src="/group-73.svg"
            />
            <div className="relative text-[transparent] hidden" />
          </div>
          <div
            className="w-[1043px] rounded-32xl bg-white border-aliceblue-300 border-[1px] border-solid box-border grid flex-row items-center justify-between py-[9.5px] pl-[13px] pr-[41px] cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
            data-acc-content
          >
            <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </div>
        </div>
        <div
          className="w-[1043px] h-[84px] rounded-32xl bg-white border-aliceblue-300 border-[1px] border-solid box-border flex flex-row items-center justify-between py-[9.5px] pl-[13px] pr-[41px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
          data-acc-item
          data-acc-header
          data-acc-original
          onClick={onAccordionHeaderClick}
        >
          <Image
            className="h-[63px] w-[58px] relative object-cover"
            width={58}
            height={63}
            alt=""
            src="/bitmap-2@2x.png"
          />
          <div className="h-[41px] w-[870px] flex flex-row items-center justify-center gap-[106px]">
            <div className="h-[30px] flex-1 flex flex-row items-center justify-center py-1 px-0 box-border">
              <div className="h-[22px] flex-1 relative leading-[140%] flex items-center">
                Damie Mones
              </div>
            </div>
            <div className="h-[30px] w-[207px] flex flex-row items-center justify-center py-1 px-0 box-border text-colour-black">
              <div className="h-[22px] flex-1 relative leading-[140%] flex items-center">
                damie@gmail.com
              </div>
            </div>
            <div className="h-[30px] flex-1 flex flex-row items-center justify-center py-1 px-0 box-border">
              <div className="h-[22px] flex-1 relative leading-[140%] whitespace-pre-wrap flex items-center">
                12 Jun 2022
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[9.5px] px-0 bg-royalblue-200 h-[41px] flex-1 rounded-81xl flex flex-row items-center justify-center box-border hover:bg-cornflowerblue-300">
              <div className="h-[22px] flex-1 relative text-base leading-[140%] font-body text-royalblue-100 text-center flex items-center justify-center">
                Pro
              </div>
            </button>
          </div>
          <Image
            className="h-5 w-[3.7px] relative"
            width={4}
            height={20}
            alt=""
            src="/group-73.svg"
          />
        </div>
        <div className="w-[1043px] hidden flex-col" data-acc-item data-acc-open>
          <div
            className="w-[1043px] h-[84px] rounded-32xl bg-white border-aliceblue-300 border-[1px] border-solid box-border flex flex-row items-center justify-between py-[9.5px] pl-[13px] pr-[41px] cursor-pointer"
            data-acc-header
            onClick={onAccordionHeaderClick}
          >
            <Image
              className="h-[63px] w-[58px] relative object-cover"
              loading="lazy"
              width={58}
              height={63}
              alt=""
              src="/bitmap@2x.png"
            />
            <div className="h-[41px] w-[870px] flex flex-row items-center justify-center gap-[106px]">
              <div className="h-[30px] flex-1 flex flex-row items-center justify-center py-1 px-0 box-border">
                <div className="h-[22px] flex-1 relative leading-[140%] flex items-center">
                  Damie Mones
                </div>
              </div>
              <div className="h-[30px] w-[207px] flex flex-row items-center justify-center py-1 px-0 box-border text-colour-black">
                <div className="h-[22px] flex-1 relative leading-[140%] flex items-center">
                  jonny@gmail.com
                </div>
              </div>
              <div className="h-[30px] flex-1 flex flex-row items-center justify-center py-1 px-0 box-border">
                <div className="h-[22px] flex-1 relative leading-[140%] whitespace-pre-wrap flex items-center">
                  1 Jan 2025
                </div>
              </div>
              <div className="h-[41px] flex-1 rounded-81xl bg-lightyellow flex flex-row items-center justify-center py-[9.5px] px-0 box-border text-center text-limegreen">
                <div className="h-[22px] flex-1 relative leading-[140%] flex items-center justify-center">
                  Pro Free
                </div>
              </div>
            </div>
            <Image
              className="h-5 w-[3.7px] relative"
              loading="lazy"
              width={4}
              height={20}
              alt=""
              src="/group-73.svg"
            />
            <div className="relative text-[transparent] hidden" />
          </div>
          <div
            className="w-[1043px] rounded-32xl bg-white border-aliceblue-300 border-[1px] border-solid box-border grid flex-row items-center justify-between py-[9.5px] pl-[13px] pr-[41px] cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
            data-acc-content
          >
            <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

UserList.propTypes = {
  className: PropTypes.string,
};

export default UserList;
