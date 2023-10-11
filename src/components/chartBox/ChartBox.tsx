import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import "./chartBox.scss";

type Props = {
  icon: string;
  title: string;
  number: number | string;
  dataKey: string;
  color: string;
  percentage: number;
  chartData: Object[];
};

export default function ChartBox({ icon, title, number, chartData, dataKey, color, percentage }: Props) {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={icon} alt={title} />
          <span>Total Users</span>
        </div>
        <h1>{number}</h1>
        <Link style={{ color: color }} to="/">
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="99%">
            <LineChart data={chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                position={{ x: 10, y: 60 }}
                labelStyle={{ display: "none" }}
              />
              <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span style={{ color: percentage < 0 ? "tomato" : "limegreen" }} className="percentage">
            {percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
}
