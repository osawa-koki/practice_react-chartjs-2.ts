import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Chart } from 'react-chartjs-2';
import Layout from '../components/Layout';
import { data } from '../src/data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        callback: function(value: number, _: any) {
          return `🐟${value}🐟`;
        },
      },
    },
  },
};

const ChartPage = () => (
  <Layout title="chart">
    <h1>Chart</h1>
    <Chart
      type="line"
      data={data}
      options={options}
    />
  </Layout>
);

export default ChartPage;
