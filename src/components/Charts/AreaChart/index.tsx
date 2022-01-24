import React, { useRef } from 'react';
import {
  Area,
  AreaChart as D3AreaChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { useResize } from '../../../hooks';
import { formatMonetaryAmount } from '../utils';
import { Wrapper } from './styles';

interface Props {
  data: Array<{ key: string; value: number; }>;
  maxHeight?: number;
  metricName?: string;
  units?: string;
}

const AreaChart: React.FC<Props> = ({ data, maxHeight, metricName, units }) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const { screenWidth, rect } = useResize(parentRef);
  const isMobile = screenWidth <= 480;

  const calculatedHeight = maxHeight && rect?.height && rect?.height > maxHeight
    ? maxHeight
    : rect?.height;

  return (
    <Wrapper className="AreaChart" ref={ parentRef }>
      <D3AreaChart
        data={ data }
        height={ calculatedHeight ?? 300 }
        width={ rect?.width ?? 400 }
      >
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={ '#0000FF' } stopOpacity={ 0.2 }/>
            <stop offset="95%" stopColor={ '#0000FF' } stopOpacity={ 0.2 }/>
          </linearGradient>
        </defs>

        <XAxis
          angle={ -45 }
          dataKey="key"
          height={ isMobile ? 0 : 100 }
          tickCount={ 5 }
          tickMargin={ isMobile ? 0 : 40 }
        />

        <YAxis
          tickCount={ 4 }
          tickFormatter={ formatMonetaryAmount }
          tickMargin={ isMobile ? 0 : 8 }
          width={ isMobile ? 0 : 100 }
        />

        <Tooltip formatter={ formatMonetaryAmount } />

        <Area
          dataKey="value"
          dot
          fill="url(#lineGradient)"
          fillOpacity={ 1 }
          name={ metricName }
          stroke={ '#0000AA' }
          type="monotone"
          unit={ units }
        />
      </D3AreaChart>
    </Wrapper>
  )
};

export default AreaChart;
