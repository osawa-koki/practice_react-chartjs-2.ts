import {
  Chart as ChartJS,
  registerables,
} from 'chart.js'
import { Bar } from 'react-chartjs-2';
import Layout from '../components/Layout';
import { data } from '../src/data';

ChartJS.register(
  ...registerables,
);

const BarPage = () => (
  <Layout title="bar">
    <h1>Bar</h1>
    <Bar
      data={data}
    />
  </Layout>
);

export default BarPage;
