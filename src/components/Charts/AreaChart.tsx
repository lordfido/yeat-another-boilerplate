import React, { useRef } from 'react';
import {
  Area,
  AreaChart as D3AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { useResize } from '../../hooks';

interface Props {
  data: Array<{ key: string; value: number; }>;
  metricName?: string;
  units?: string;
}

const AreaChart: React.FC<Props> = ({ data, metricName, units }) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const { rect } = useResize(parentRef);  

  return (
    <div className="AreaChart" ref={ parentRef }>
      <D3AreaChart
        data={ data }
        height={ rect?.height ?? 300}
        width={ rect?.width ?? 400 }
      >
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={ '#0000FF' } stopOpacity={ 0.2 }/>
            <stop offset="100%" stopColor={ '#0000FF' } stopOpacity={ 0.2 }/>
          </linearGradient>
        </defs>

        <CartesianGrid stroke={ '#FAFAFA' } />

        <XAxis dataKey="key" tickCount={ 5 } tickLine={ false } />

        <YAxis tickCount={ 4 } tickLine={ false } />

        <Tooltip />

        <Area
          dataKey="value"
          dot={ { stroke: 'red', strokeWidth: 2 } }
          fill="url(#lineGradient)"
          fillOpacity={ 1 }
          name={ metricName }
          stroke={ '#0000AA' }
          type="monotone"
          unit={ units }
        />
      </D3AreaChart>
    </div>
  )
};

export default AreaChart;
