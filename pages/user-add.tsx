import Sidebar from "../components/sidebar";
import PageHeader from "../components/page-header";
import AddUserDescription from "../components/add-user-description";
import UserList from "../components/user-list";

const UserAdd = () => {
  return (
    <div className="w-full relative bg-aliceblue-100 overflow-hidden flex flex-row items-start justify-start pt-[33px] px-[25px] pb-[84px] box-border gap-4 leading-[normal] tracking-[normal] mq1350:flex-wrap">
      <Sidebar calendar="/calendar1.svg" chat="/chat1.svg" />
      <main className="w-[1113px] flex flex-col items-start justify-start gap-8 max-w-full mq800:gap-4">
        <PageHeader myPlan="Add Users" />
        <section className="self-stretch rounded-2xl bg-white flex flex-col items-start justify-start pt-[30px] px-[31px] pb-[284px] box-border gap-[47px] max-w-full text-left text-lg text-colour-black font-inter mq800:gap-[23px] mq800:pb-[120px] mq800:box-border mq1150:pt-5 mq1150:pb-[185px] mq1150:box-border">
          <AddUserDescription />
          <div className="flex flex-row items-start justify-start py-0 px-[377px] mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pl-[94px] mq800:pr-[94px] mq800:box-border mq1150:pl-[188px] mq1150:pr-[188px] mq1150:box-border">
            <div className="relative leading-[150%] font-medium">
              <span>{`5 Users left in your `}</span>
              <span className="text-darkviolet-100">DIAMOND</span>
              <span> plan</span>
            </div>
          </div>
          <UserList />
        </section>
      </main>
    </div>
  );
};

export default UserAdd;
