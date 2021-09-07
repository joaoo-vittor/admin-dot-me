import { useState } from 'react';
import P from 'prop-types';
import './style.css';
import { LineChart, Line, XAxis,
         CartesianGrid, Tooltip,
         ResponsiveContainer } from 'recharts';
import { DragSwitch } from 'react-dragswitch'
import 'react-dragswitch/dist/index.css'

export const Chart = ({ title, data, dataKeyLine, dataKeyXAxis }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="chart">
      <div className="chart-top">
        <h3 className="chart-title">{title}</h3>
        <DragSwitch checked={checked} onChange={(e) => setChecked(e)}/>
      </div>
      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
          <XAxis dataKey={dataKeyXAxis} stroke="#5550bd"/>
          <Line type="monotone" dataKey={dataKeyLine} stroke="#5550bd"/>
          <Tooltip />
          {checked && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

Chart.propTypes = {
  title: P.string.isRequired,
  data: P.object.isRequired,
  dataKeyLine: P.string.isRequired,
  dataKeyXAxis: P.string.isRequired,
};
