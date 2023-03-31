import { Layout, Image } from 'antd';
import AppRoutes from './components/Routes';
import SideMenu from './components/SideMenu';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsconfig);



const { Sider, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Sider style={{backgroundColor: 'white'}}>
        <Image 
          src='https://lh3.googleusercontent.com/p/AF1QipNOJJBWlVV60ogRcAbZ0zgKIdfdlMx1vtreDrfk=s1360-w1360-h1020'
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
