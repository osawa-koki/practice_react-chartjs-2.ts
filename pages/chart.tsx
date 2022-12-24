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
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
import Layout from '../components/Layout';
import { chart_bar_data as data } from '../src/data';

const ChartPage = () => (
  <Layout title="chart">
    <h1>Chart</h1>
    <Chart
      type="line"
      data={data}
    />
  </Layout>
);

export default ChartPage;
