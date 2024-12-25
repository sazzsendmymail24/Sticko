import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import PageHeader from "../components/page-header";
import PricingCards from "../components/pricing-cards";
import InfinityPlanCard from "../components/infinity-plan-card";

const UserMyPlan = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  const onSidebarItemTrueFalseContainerClick = useCallback(() => {
    router.push("/user-add");
  }, [router]);

  const onSidebarItemTrueFalseContainerClick1 = useCallback(() => {
    router.push("/settings");
  }, [router]);

  return (
    <div className="w-full relative bg-aliceblue-100 flex flex-row items-start justify-start pt-[33px] px-[25px] pb-[67px] box-border gap-4 leading-[normal] tracking-[normal] text-left text-base text-colour-black font-body mq1350:flex-wrap">
      <div className="w-60 shadow-[0px_4px_103px_rgba(50,_50,_71,_0.01),_0px_4px_59px_rgba(50,_50,_71,_0.03)] rounded-2xl bg-white flex flex-col items-start justify-start p-4 box-border gap-[348.8px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-12">
          <div
            className="flex flex-row items-end justify-start gap-[7.3px] cursor-pointer"
            onClick={onGroupContainerClick}
          >
            <Image
              className="h-[30.2px] w-[30.2px] relative overflow-hidden shrink-0"
              loading="lazy"
              width={30}
              height={30}
              alt=""
              src="/frame.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
              <Image
                className="self-stretch h-[17.4px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                width={69}
                height={17}
                alt=""
                src="/sticko.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-2.5">
            <div className="self-stretch rounded-22xl [background:linear-gradient(108.27deg,_#0077ff_2.38%,_#2dc2ff)] flex flex-row items-start justify-start py-[11.5px] px-6 gap-[7.5px] text-white">
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/activity1.svg"
              />
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative leading-[140%] inline-block min-w-[63px]">
                  My Plan
                </div>
              </div>
            </div>
            <div
              className="self-stretch rounded-md flex flex-row items-start justify-start py-[11.5px] px-[7px] gap-[7.5px] cursor-pointer"
              onClick={onSidebarItemTrueFalseContainerClick}
            >
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/calendar.svg"
              />
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative leading-[140%] inline-block min-w-[48px]">
                  Users
                </div>
              </div>
            </div>
            <div
              className="self-stretch rounded-md flex flex-row items-start justify-start py-[11px] px-[7px] gap-[7.5px] cursor-pointer"
              onClick={onSidebarItemTrueFalseContainerClick1}
            >
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/chat1.svg"
              />
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative leading-[140%]">Settings</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-48 rounded-md flex flex-row items-start justify-start py-[7.5px] px-[7px] box-border gap-[7.5px] text-lgi">
          <div className="flex-1 relative leading-[140%]">Logout</div>
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src="/logout@2x.png"
          />
        </div>
      </div>
      <main className="flex flex-col items-start justify-start gap-8 max-w-full mq800:gap-4">
        <PageHeader myPlan="My Plan" />
        <div className="self-stretch flex flex-col items-start justify-start gap-8 max-w-full mq800:gap-4">
          <PricingCards />
          <InfinityPlanCard />
        </div>
      </main>
    </div>
  );
};

export default UserMyPlan;
