import {
  Chart as ChartJS,
  registerables,
} from 'chart.js'
import { Line } from 'react-chartjs-2';
import Layout from '../components/Layout';
import { data } from '../src/data';

ChartJS.register(
  ...registerables,
);

const LinePage = () => (
  <Layout title="line">
    <h1>Line</h1>
    <Line
      className="chart"
      data={data}
    />
  </Layout>
);

export default LinePage;
