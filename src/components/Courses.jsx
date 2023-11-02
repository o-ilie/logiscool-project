// import useFetchData from "../../hooks/use-fetch-data";
import { Disclosure, Transition } from "@headlessui/react";
import { colors } from "../data";

const Courses = () => {
  // const { data, loading } = useFetchData("/api/courses");
  const data = [
    {
      course_type: "Python 1",
      course_description: {
        short_description: "short py1",
        long_description: "long py1",
      },
      next_possible_course: ["Python 2 Romana"],
    },
    {
      course_type: "Python 1",
      course_description: {
        short_description: "short py1",
        long_description: "long py1",
      },
      next_possible_course: ["Python 2 Romana"],
    },
    {
      course_type: "Python 1",
      course_description: {
        short_description: "short py1",
        long_description: "long py1",
      },
      next_possible_course: ["Python 2 Romana"],
    },
    {
      course_type: "Python 1",
      course_description: {
        short_description: "short py1",
        long_description: "long py1",
      },
      next_possible_course: ["Python 2 Romana"],
    },
    {
      course_type: "Python 1",
      course_description: {
        short_description: "short py1",
        long_description: "long py1",
      },
      next_possible_course: ["Python 2 Romana"],
    },
    {
      course_type: "Python 1",
      course_description: {
        short_description: "short py1",
        long_description: "long py1",
      },
      next_possible_course: ["Python 2 Romana"],
    },
    {
      course_type: "Python 1",
      course_description: {
        short_description: "short py1",
        long_description: "long py1",
      },
      next_possible_course: ["Python 2 Romana"],
    },
    {
      course_type: "Python 1",
      course_description: {
        short_description: "short py1",
        long_description: "long py1",
      },
      next_possible_course: ["Python 2 Romana"],
    },
    {
      course_type: "Python 1",
      course_description: {
        short_description: "short py1",
        long_description: "long py1",
      },
      next_possible_course: ["Python 2 Romana"],
    },
  ];

  return data.map(
    (
      {
        course_type,
        course_description: { short_description, long_description },
      },
      index
    ) => {
      return (
        <Disclosure key={index}>
          {({ open }) => (
            <div className="mb-4">
              <Disclosure.Button
                style={{
                  backgroundColor: `${colors[index % colors.length]}40`,
                }}
                className={`${
                  open ? "shadow-lg rounded-t-2xl" : "rounded-2xl"
                } transition-border duration-300 flex w-full justify-between items-center px-4 py-2 text-left text-sm font-medium text-primary-dark focus:outline-none hover:shadow-lg`}
              >
                <div className="flex flex-row justify-center items-center gap-4">
                  <div className="text-7xl font-bold">{index + 1}</div>
                  <div className="flex-1">
                    <div className="text-2xl">{course_type}</div>
                    <span className="text-base font-normal">
                      {short_description}
                    </span>
                  </div>
                </div>
                <i
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } fa-solid fa-chevron-up text-xl text-primary-dark hover:text-white`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition ease-out duration-300"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-300"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-base-400 bg-white rounded-b-2xl shadow-lg">
                  {long_description}
                </Disclosure.Panel>
              </Transition>
            </div>
          )}
        </Disclosure>
      );
    }
  );
};

export default Courses;
