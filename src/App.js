import { Layout, Image } from 'antd';
import AppRoutes from './components/Routes';
import SideMenu from './components/SideMenu';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import logo from './assets/griffin_flag.png'
Amplify.configure(awsconfig);



const { Sider, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Sider style={{backgroundColor: 'white'}}>
        <Image 
          src={logo}
          preview={false}
        />
        <SideMenu />
      </Sider>
      <Layout>
        <Content>
          <AppRoutes />
        </Content>
        <Footer style={{textAlign: 'center'}}>
          Logue Link Dashboard
        </Footer>
      </Layout>
    </Layout>
  );
}

export default withAuthenticator(App);
