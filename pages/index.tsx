import Setting from '../common/Setting';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <div id='Index'>
      <div id='MainTopic'>
        <h1>Hello react-chartjs-2 👋</h1>
        <a href='https://react-chartjs-2.js.org/'><img id='Logo' src={`${Setting.IMG_ROOT_PATH}/Logo.svg`} alt="Logo" /></a>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
