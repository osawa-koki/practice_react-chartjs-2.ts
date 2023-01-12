import Setting from '../common/Setting';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <div id='Index'>
      <div id='MainTopic'>
        <h1>Hello react-chartjs-2 👋</h1>
        <img id='Logo' src={`${Setting.IMG_ROOT_PATH}/Logo.svg`} alt="Logo" />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
