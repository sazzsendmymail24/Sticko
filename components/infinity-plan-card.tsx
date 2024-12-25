import { useCallback } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const InfinityPlanCard = ({ className = "" }) => {
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
      className={`self-stretch flex flex-row items-start justify-start gap-8 max-w-full text-left text-2xl text-mediumseagreen font-body mq800:gap-4 mq1150:flex-wrap ${className}`}
    >
      <div className="shadow-[0px_26px_40px_rgba(188,_202,_255,_0.13)] [filter:blur(4px)] rounded-2xl bg-white overflow-hidden flex flex-col items-start justify-start pt-10 px-10 pb-[45px] box-border gap-5 max-w-full mq450:min-w-full mq800:pt-[26px] mq800:pb-[29px] mq800:box-border mq1150:flex-1">
        <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
          <Image
            className="h-14 w-14 relative rounded-sm overflow-hidden shrink-0"
            width={56}
            height={56}
            alt=""
            src="/custom-devices-1.svg"
          />
          <div className="relative uppercase font-semibold inline-block min-w-[97px] mq450:text-mid">
            infinity
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[23px] gap-3.5 text-21xl text-colour-black">
          <h1 className="m-0 w-[237px] relative text-inherit leading-[140%] font-semibold font-[inherit] inline-block mq450:text-5xl mq450:leading-[34px] mq800:text-13xl mq800:leading-[45px]">
            1 Device
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-px gap-[26px] text-lgi text-colour-gray">
            <div className="relative leading-[140%]">
              For seamless experience
            </div>
            <div className="flex flex-col items-start justify-start gap-5 text-29xl text-colour-black">
              <div className="flex flex-row items-start justify-start">
                <div className="w-[117px] flex flex-col items-start justify-start py-0 px-0 box-border">
                  <div className="mr-[-85px] w-[203px] relative [text-decoration:line-through] leading-[140%] font-semibold inline-block shrink-0 mq450:text-10xl mq450:leading-[40px] mq800:text-19xl mq800:leading-[54px]">
                    $60
                  </div>
                </div>
                <div className="relative [text-decoration:line-through] leading-[140%] font-semibold text-lightgray shrink-0 mq450:text-10xl mq450:leading-[40px] mq800:text-19xl mq800:leading-[54px]">
                  $150
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[21px] text-lg font-text-single-300-bold mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                  <div className="relative leading-[30px]">How many users</div>
                </div>
                <div className="h-[52px] w-[102px] rounded-mini bg-white border-lavender-300 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[13px] px-10 text-xl">
                  <div className="h-[52px] w-[102px] relative rounded-mini bg-white border-lavender-300 border-[1px] border-solid box-border hidden" />
                  <b className="relative leading-[22px] inline-block min-w-[9px] z-[1] mq450:text-base mq450:leading-[18px]">
                    1
                  </b>
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative border-lavender-200 border-t-[1px] border-solid box-border" />
          </div>
        </div>
        <button className="cursor-pointer border-royalblue-100 border-[1px] border-solid py-6 px-[91px] bg-[transparent] rounded-30xl flex flex-row items-start justify-center hover:bg-cornflowerblue-200 hover:border-cornflowerblue-100 hover:border-[1px] hover:border-solid hover:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="relative text-lgi leading-[140%] font-body text-royalblue-100 text-left inline-block min-w-[86px]">
            Upgrade
          </div>
        </button>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start min-w-[475px] max-w-full text-lgi text-darkslateblue mq800:min-w-full">
        <div className="self-stretch h-[301px] rounded-2xl bg-white flex flex-col items-start justify-start pt-[29px] px-[43px] pb-[30px] box-border gap-[23px] max-w-full mq800:pl-[21px] mq800:pr-[21px] mq800:box-border">
          <div className="w-[731px] h-[301px] relative rounded-2xl bg-white hidden max-w-full" />
          <div className="flex flex-row items-start justify-start py-0 pl-[5px] pr-1">
            <div className="relative leading-[140%] z-[1]">What’s included</div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-center justify-between z-[1]">
            <div className="self-stretch flex flex-row items-center justify-start py-[5px] px-0">
              <Image
                className="h-7 w-7 relative rounded-7xs-6 overflow-hidden shrink-0"
                loading="lazy"
                width={28}
                height={28}
                alt=""
                src="/check.svg"
              />
            </div>
            <div className="self-stretch h-[38px] relative">
              <Image
                className="absolute top-[5px] left-[0px] rounded-7xs-6 w-7 h-7 overflow-hidden"
                width={28}
                height={28}
                alt=""
                src="/check.svg"
              />
            </div>
            <div className="self-stretch h-[38px] relative">
              <Image
                className="absolute top-[5px] left-[0px] rounded-7xs-6 w-7 h-7 overflow-hidden"
                width={28}
                height={28}
                alt=""
                src="/check.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-[5px] px-0">
              <Image
                className="h-7 w-7 relative rounded-7xs-6 overflow-hidden shrink-0"
                width={28}
                height={28}
                alt=""
                src="/check.svg"
              />
            </div>
          </div>
        </div>
        <div
          className="self-stretch flex flex-col items-end justify-start gap-[62px] mt-[-222px] text-colour-black"
          data-acc-group
        >
          <div
            className="h-48 flex flex-row items-start justify-end py-0 px-11 box-border [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
            data-acc-item
            data-acc-open
            data-acc-header
            data-acc-original
            data-acc-default-open
            onClick={onAccordionHeaderClick}
          >
            <div className="h-48 w-[600px] flex flex-row items-start justify-start">
              <div className="h-[186.5px] w-[546px] flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border">
                <div className="w-[546px] h-[181px] flex flex-col items-start justify-start gap-[24.3px]">
                  <div className="w-[387px] h-[27px] relative leading-[140%] inline-block">
                    All Features
                  </div>
                  <div className="w-[387px] h-[27px] relative leading-[140%] inline-block">
                    14 Days Free trial
                  </div>
                  <div className="w-[387px] h-[27px] relative leading-[140%] inline-block">
                    Premium Support
                  </div>
                  <div className="w-[547px] h-[27px] relative leading-[140%] inline-block">
                    Lifetime Use
                  </div>
                </div>
              </div>
              <div className="h-48 w-[198px] flex flex-col items-end justify-start gap-[13.3px] ml-[-144px]">
                <div className="w-[198px] h-[38px] flex flex-row items-start justify-start gap-[15.3px]">
                  <div className="h-[38px] rounded-27xl bg-aliceblue-200 flex flex-row items-center justify-center py-[18px] px-2.5 box-border w-[38px]">
                    <Image
                      className="h-[18px] w-[18px] relative"
                      loading="lazy"
                      width={18}
                      height={18}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="h-[38px] rounded-27xl bg-honeydew flex flex-row items-center justify-center py-[18px] px-[9px] box-border w-[38px]">
                    <Image
                      className="h-2.5 w-5 relative"
                      width={20}
                      height={10}
                      alt=""
                      src="/vector-11.svg"
                    />
                  </div>
                  <div className="h-[38px] rounded-27xl bg-lavender-100 flex flex-row items-center justify-center py-[18px] px-2.5 box-border w-[38px]">
                    <Image
                      className="h-[18px] w-[18px] relative"
                      width={18}
                      height={18}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className="h-[38px] rounded-27xl bg-oldlace flex flex-row items-center justify-center py-[18px] px-[9px] box-border w-[38px]">
                    <Image
                      className="h-[18px] w-5 relative"
                      width={20}
                      height={18}
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                </div>
                <div
                  className="w-[198px] grid grid-rows-[1fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                  data-acc-content
                >
                  <div className="w-[198px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    <div className="w-[198px] h-[89.4px] flex flex-row items-start justify-start flex-wrap content-start gap-x-[15.3px] gap-y-[13.4px]">
                      <div className="h-[38px] rounded-27xl bg-aliceblue-200 flex flex-row items-center justify-center py-[18px] px-2.5 box-border w-[38px]">
                        <Image
                          className="h-[18px] w-[18px] relative"
                          width={18}
                          height={18}
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className="h-[38px] rounded-27xl bg-honeydew flex flex-row items-center justify-center py-[18px] px-[9px] box-border w-[38px]">
                        <Image
                          className="h-2.5 w-5 relative"
                          width={20}
                          height={10}
                          alt=""
                          src="/vector-11.svg"
                        />
                      </div>
                      <div className="h-[38px] rounded-27xl bg-lavender-100 flex flex-row items-center justify-center py-[18px] px-2.5 box-border w-[38px]">
                        <Image
                          className="h-[18px] w-[18px] relative"
                          width={18}
                          height={18}
                          alt=""
                          src="/icon.svg"
                        />
                      </div>
                      <div className="h-[38px] rounded-27xl bg-oldlace flex flex-row items-center justify-center py-[18px] px-[9px] box-border w-[38px]">
                        <Image
                          className="h-[18px] w-5 relative"
                          width={20}
                          height={18}
                          alt=""
                          src="/vector-2.svg"
                        />
                      </div>
                      <div className="h-[38px] rounded-27xl bg-aliceblue-200 flex flex-row items-center justify-center py-[18px] px-2.5 box-border w-[38px]">
                        <Image
                          className="h-[18px] w-[18px] relative"
                          width={18}
                          height={18}
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className="h-[38px] rounded-27xl bg-honeydew flex flex-row items-center justify-center py-[18px] px-[9px] box-border w-[38px]">
                        <Image
                          className="h-2.5 w-5 relative"
                          width={20}
                          height={10}
                          alt=""
                          src="/vector-11.svg"
                        />
                      </div>
                      <div className="h-[38px] rounded-27xl bg-lavender-100 flex flex-row items-center justify-center py-[18px] px-2.5 box-border w-[38px]">
                        <Image
                          className="h-[18px] w-[18px] relative"
                          width={18}
                          height={18}
                          alt=""
                          src="/icon.svg"
                        />
                      </div>
                      <div className="h-[38px] rounded-27xl bg-oldlace flex flex-row items-center justify-center py-[18px] px-[9px] box-border w-[38px]">
                        <Image
                          className="h-[18px] w-5 relative"
                          width={20}
                          height={18}
                          alt=""
                          src="/vector-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[38px] rounded-27xl bg-honeydew flex flex-row items-center justify-center py-[18px] px-[9px] box-border w-[38px]">
                  <Image
                    className="h-2.5 w-5 relative"
                    width={20}
                    height={10}
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="h-48 hidden flex-row items-start justify-end py-0 px-11 box-border [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
            data-acc-item
            data-acc-header
            onClick={onAccordionHeaderClick}
          >
            <div className="h-48 w-[600px] flex flex-row items-start justify-start">
              <div className="h-[186.5px] w-[546px] flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border">
                <div className="w-[546px] h-[181px] flex flex-col items-start justify-start gap-[24.3px]">
                  <div className="w-[387px] h-[27px] relative leading-[140%] inline-block">
                    All Features
                  </div>
                  <div className="w-[387px] h-[27px] relative leading-[140%] inline-block">
                    14 Days Free trial
                  </div>
                  <div className="w-[387px] h-[27px] relative leading-[140%] inline-block">
                    Premium Support
                  </div>
                  <div className="w-[547px] h-[27px] relative leading-[140%] inline-block">
                    Lifetime Use
                  </div>
                </div>
              </div>
              <div className="h-48 w-[198px] flex flex-col items-end justify-start gap-[13.3px] ml-[-144px]">
                <div className="w-[198px] h-[38px] flex flex-row items-start justify-start gap-[15.3px]">
                  <div className="h-[38px] rounded-27xl bg-aliceblue-200 flex flex-row items-center justify-center py-[18px] px-2.5 box-border w-[38px]">
                    <Image
                      className="h-[18px] w-[18px] relative"
                      loading="lazy"
                      width={18}
                      height={18}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="h-[38px] rounded-27xl bg-honeydew flex flex-row items-center justify-center py-[18px] px-[9px] box-border w-[38px]">
                    <Image
                      className="h-2.5 w-5 relative"
                      width={20}
                      height={10}
                      alt=""
                      src="/vector-11.svg"
                    />
                  </div>
                  <div className="h-[38px] rounded-27xl bg-lavender-100 flex flex-row items-center justify-center py-[18px] px-2.5 box-border w-[38px]">
                    <Image
                      className="h-[18px] w-[18px] relative"
                      width={18}
                      height={18}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className="h-[38px] rounded-27xl bg-oldlace flex flex-row items-center justify-center py-[18px] px-[9px] box-border w-[38px]">
                    <Image
                      className="h-[18px] w-5 relative"
                      width={20}
                      height={18}
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                </div>
                <div
                  className="w-[198px] grid grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                  data-acc-content
                >
                  <div className="w-[198px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    <div className="w-[198px] h-[89.4px] hidden flex-row items-start justify-start flex-wrap content-start gap-x-[15.3px] gap-y-[13.4px]">
                      <div className="h-[38px] rounded-27xl bg-aliceblue-200 flex flex-row items-center justify-center py-[18px] px-2.5 box-border w-[38px]">
                        <Image
                          className="h-[18px] w-[18px] relative"
                          width={18}
                          height={18}
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className="h-[38px] rounded-27xl bg-honeydew flex flex-row items-center justify-center py-[18px] px-[9px] box-border w-[38px]">
                        <Image
                          className="h-2.5 w-5 relative"
                          width={20}
                          height={10}
                          alt=""
                          src="/vector-11.svg"
                        />
                      </div>
                      <div className="h-[38px] rounded-27xl bg-lavender-100 flex flex-row items-center justify-center py-[18px] px-2.5 box-border w-[38px]">
                        <Image
                          className="h-[18px] w-[18px] relative"
                          width={18}
                          height={18}
                          alt=""
                          src="/icon.svg"
                        />
                      </div>
                      <div className="h-[38px] rounded-27xl bg-oldlace flex flex-row items-center justify-center py-[18px] px-[9px] box-border w-[38px]">
                        <Image
                          className="h-[18px] w-5 relative"
                          width={20}
                          height={18}
                          alt=""
                          src="/vector-2.svg"
                        />
                      </div>
                      <div className="h-[38px] rounded-27xl bg-aliceblue-200 flex flex-row items-center justify-center py-[18px] px-2.5 box-border w-[38px]">
                        <Image
                          className="h-[18px] w-[18px] relative"
                          width={18}
                          height={18}
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className="h-[38px] rounded-27xl bg-honeydew flex flex-row items-center justify-center py-[18px] px-[9px] box-border w-[38px]">
                        <Image
                          className="h-2.5 w-5 relative"
                          width={20}
                          height={10}
                          alt=""
                          src="/vector-11.svg"
                        />
                      </div>
                      <div className="h-[38px] rounded-27xl bg-lavender-100 flex flex-row items-center justify-center py-[18px] px-2.5 box-border w-[38px]">
                        <Image
                          className="h-[18px] w-[18px] relative"
                          width={18}
                          height={18}
                          alt=""
                          src="/icon.svg"
                        />
                      </div>
                      <div className="h-[38px] rounded-27xl bg-oldlace flex flex-row items-center justify-center py-[18px] px-[9px] box-border w-[38px]">
                        <Image
                          className="h-[18px] w-5 relative"
                          width={20}
                          height={18}
                          alt=""
                          src="/vector-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[38px] rounded-27xl bg-honeydew flex flex-row items-center justify-center py-[18px] px-[9px] box-border w-[38px]">
                  <Image
                    className="h-2.5 w-5 relative"
                    width={20}
                    height={10}
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
              </div>
            </div>
            <div className="relative text-[transparent] hidden" />
            <div className="absolute w-0 h-0" />
          </div>
          <div
            className="w-[731px] h-[238px] rounded-2xl bg-white flex flex-col items-start justify-start pt-[27px] px-12 pb-8 box-border gap-[15px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
            data-acc-item
            data-acc-open
            data-acc-header
            data-acc-original
            data-acc-default-open
            onClick={onAccordionHeaderClick}
          >
            <div className="w-[731px] relative rounded-2xl bg-white h-[238px] hidden" />
            <div className="w-[166px] h-[27px] relative leading-[140%] inline-block shrink-0 z-[1]">{`Payment method `}</div>
            <div
              className="w-[630px] grid grid-rows-[1fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
              data-acc-content
            >
              <div className="w-[630px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                <div className="w-[630px] h-[137px] flex flex-row items-start justify-start gap-[76px]">
                  <div className="h-[137px] w-[500px] flex flex-col items-start justify-start pt-[47px] px-0 pb-0 box-border">
                    <Image
                      className="w-[500px] h-[90px] relative object-cover z-[1]"
                      loading="lazy"
                      width={500}
                      height={90}
                      alt=""
                      src="/image-13@2x.png"
                    />
                  </div>
                  <div className="w-[54px] flex flex-row items-center justify-between z-[1]">
                    <Image
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      width={24}
                      height={24}
                      alt=""
                      src="/frame-11.svg"
                    />
                    <Image
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      width={24}
                      height={24}
                      alt=""
                      src="/frame-2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="h-48 hidden flex-row items-start justify-end py-0 px-11 box-border [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
            data-acc-item
            data-acc-header
            onClick={onAccordionHeaderClick}
          >
            <div className="h-48 w-[600px] flex flex-row items-start justify-start">
              <div className="h-[186.5px] w-[546px] flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border">
                <div className="w-[546px] h-[181px] flex flex-col items-start justify-start gap-[24.3px]">
                  <div className="w-[166px] h-[27px] relative leading-[140%] inline-block shrink-0">{`Payment method `}</div>
                  <div className="w-[387px] h-[27px] relative leading-[140%] inline-block">
                    14 Days Free trial
                  </div>
                  <div className="w-[387px] h-[27px] relative leading-[140%] inline-block">
                    Premium Support
                  </div>
                  <div className="w-[547px] h-[27px] relative leading-[140%] inline-block">
                    Lifetime Use
                  </div>
                </div>
              </div>
              <div className="h-48 w-[198px] flex flex-col items-end justify-start gap-[13.3px] ml-[-144px]">
                <div className="w-[198px] h-[38px] flex flex-row items-start justify-start gap-[15.3px]">
                  <div className="h-[38px] rounded-27xl bg-aliceblue-200 flex flex-row items-center justify-center py-[18px] px-2.5 box-border w-[38px]">
                    <Image
                      className="h-[18px] w-[18px] relative"
                      loading="lazy"
                      width={18}
                      height={18}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="h-[38px] rounded-27xl bg-honeydew flex flex-row items-center justify-center py-[18px] px-[9px] box-border w-[38px]">
                    <Image
                      className="h-2.5 w-5 relative"
                      width={20}
                      height={10}
                      alt=""
                      src="/vector-11.svg"
                    />
                  </div>
                  <div className="h-[38px] rounded-27xl bg-lavender-100 flex flex-row items-center justify-center py-[18px] px-2.5 box-border w-[38px]">
                    <Image
                      className="h-[18px] w-[18px] relative"
                      width={18}
                      height={18}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className="h-[38px] rounded-27xl bg-oldlace flex flex-row items-center justify-center py-[18px] px-[9px] box-border w-[38px]">
                    <Image
                      className="h-[18px] w-5 relative"
                      width={20}
                      height={18}
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                </div>
                <div
                  className="w-[198px] grid grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                  data-acc-content
                >
                  <div className="w-[198px] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    <div className="w-[198px] h-[89.4px] hidden flex-row items-start justify-start flex-wrap content-start gap-x-[15.3px] gap-y-[13.4px]">
                      <div className="h-[38px] rounded-27xl bg-aliceblue-200 flex flex-row items-center justify-center py-[18px] px-2.5 box-border w-[38px]">
                        <Image
                          className="h-[18px] w-[18px] relative"
                          width={18}
                          height={18}
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className="h-[38px] rounded-27xl bg-honeydew flex flex-row items-center justify-center py-[18px] px-[9px] box-border w-[38px]">
                        <Image
                          className="h-2.5 w-5 relative"
                          width={20}
                          height={10}
                          alt=""
                          src="/vector-11.svg"
                        />
                      </div>
                      <div className="h-[38px] rounded-27xl bg-lavender-100 flex flex-row items-center justify-center py-[18px] px-2.5 box-border w-[38px]">
                        <Image
                          className="h-[18px] w-[18px] relative"
                          width={18}
                          height={18}
                          alt=""
                          src="/icon.svg"
                        />
                      </div>
                      <div className="h-[38px] rounded-27xl bg-oldlace flex flex-row items-center justify-center py-[18px] px-[9px] box-border w-[38px]">
                        <Image
                          className="h-[18px] w-5 relative"
                          width={20}
                          height={18}
                          alt=""
                          src="/vector-2.svg"
                        />
                      </div>
                      <div className="h-[38px] rounded-27xl bg-aliceblue-200 flex flex-row items-center justify-center py-[18px] px-2.5 box-border w-[38px]">
                        <Image
                          className="h-[18px] w-[18px] relative"
                          width={18}
                          height={18}
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className="h-[38px] rounded-27xl bg-honeydew flex flex-row items-center justify-center py-[18px] px-[9px] box-border w-[38px]">
                        <Image
                          className="h-2.5 w-5 relative"
                          width={20}
                          height={10}
                          alt=""
                          src="/vector-11.svg"
                        />
                      </div>
                      <div className="h-[38px] rounded-27xl bg-lavender-100 flex flex-row items-center justify-center py-[18px] px-2.5 box-border w-[38px]">
                        <Image
                          className="h-[18px] w-[18px] relative"
                          width={18}
                          height={18}
                          alt=""
                          src="/icon.svg"
                        />
                      </div>
                      <div className="h-[38px] rounded-27xl bg-oldlace flex flex-row items-center justify-center py-[18px] px-[9px] box-border w-[38px]">
                        <Image
                          className="h-[18px] w-5 relative"
                          width={20}
                          height={18}
                          alt=""
                          src="/vector-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[38px] rounded-27xl bg-honeydew flex flex-row items-center justify-center py-[18px] px-[9px] box-border w-[38px]">
                  <Image
                    className="h-2.5 w-5 relative"
                    width={20}
                    height={10}
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
              </div>
            </div>
            <div className="relative text-[transparent] hidden" />
            <div className="absolute w-0 h-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

InfinityPlanCard.propTypes = {
  className: PropTypes.string,
};

export default InfinityPlanCard;
