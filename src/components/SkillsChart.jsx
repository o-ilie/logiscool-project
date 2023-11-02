import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { colors } from "../data";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const SkillsChart = () => {
  return (
    <div className="flex flex-col w-full min-h-[28rem] gap-6 justify-center items-center card">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            innerRadius={50}
            outerRadius={70}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <table className="table-fixed w-full">
        <thead>
          <tr className="text-lg border-b-2">
            <th className="font-semibold text-start">Abilitati castigate</th>
            <th className="font-semibold text-end">%</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={`cell-${index + 1}`}>
              <td className="flex flex-row py-1 gap-2 items-center">
                <i
                  style={{ color: colors[index % colors.length] }}
                  className={`fas fa-circle text-xs`}
                />
                {entry.name}
              </td>
              <td className="text-end">{entry.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkillsChart;
