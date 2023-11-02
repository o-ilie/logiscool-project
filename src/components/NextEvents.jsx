import { colors } from "../data";

const data = [
  {
    title: "Lorem ipsum lala lorem kiredfffaa",
    about: "Logical params",
    date: "22.10.23",
  },
  { title: "Lorem ipsum lala ", about: "Logical params", date: "22.10.23" },
  {
    title: "Lorem ipsum lorem kiredfffaa",
    about: "Logical params",
    date: "22.10.23",
  },
  { title: "Lorem ipsum lala", about: "Logical params", date: "22.10.23" },
  {
    title: "Lorem lorem kiredfffaa",
    about: "Logical params",
    date: "22.10.23",
  },
  { title: "Lorem ipsum", about: "Logical params", date: "22.10.23" },
];

const NextEvents = () => {
  return (
    <div className="flex flex-col w-full gap-4 card">
      <div className="subtitle">Urmatoarele cursuri</div>
      {data.map(({ title, about, date }, index) => (
        <div
          key={index + title.length}
          className="flex flex-row items-center gap-4"
        >
          <div
            className="rounded-full"
            style={{ backgroundColor: colors[index % colors.length] }}
          >
            <i className="far fa-calendar p-3 text-white"></i>
          </div>
          <div>
            <h4 className="font-semibold">{title}</h4>
            <div>
              {about} | {date}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NextEvents;
