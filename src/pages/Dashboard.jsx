import { Courses, NextEvents, SkillsChart } from "../components";

const Dashboard = () => {
  return (
    <div>
      <h1 className="title">PARCURSUL EDUCAȚIONAL AL COPILULUI TĂU</h1>
      <div className="text-base-400 text-base">
        Lorem ipsum dolor sit amet consectetur. Vitae pretium ultricies ac
        vivamus dolor. Varius magna blandit nunc eget diam nisl tincidunt.
      </div>
      <div className="mt-8 flex lg:flex-row flex-col gap-4 flex-wrap">
        <div className="flex-1">
          <Courses />
        </div>
        <div className="flex flex-col gap-4 lg:w-[30%] w-full">
          <SkillsChart />
          <NextEvents />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
