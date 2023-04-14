import { Layout, Image } from 'antd';
import AppRoutes from './components/Routes';
import SideMenu from './components/SideMenu';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, ThemeProvider, Theme, useTheme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import logo from './assets/griffin_flag.png'
Amplify.configure(awsconfig);



const { Sider, Content, Footer } = Layout;

function App() {
  const { tokens } = useTheme();
const theme = {
  name: 'Auth Example Theme',
  tokens: {
    colors: {
      background: {
        primary: {
          value: tokens.colors.neutral['90'].value,
        },
        secondary: {
          value: tokens.colors.neutral['100'].value,
        },
      },
      font: {
        interactive: {
          value: tokens.colors.white.value,
        },
      },
      brand: {
        primary: {
          '10': tokens.colors.teal['100'],
          '80': tokens.colors.teal['40'],
          '90': tokens.colors.teal['20'],
          '100': tokens.colors.teal['10'],
        },
      },
    },
    components: {
      tabs: {
        item: {
          _focus: {
            color: {
              value: tokens.colors.white.value,
            },
          },
          _hover: {
            color: {
              value: tokens.colors.yellow['80'].value,
            },
          },
          _active: {
            color: {
              value: tokens.colors.white.value,
            },
          },
        },
      },
    },
  },
}
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Sider style={{ backgroundColor: 'white' }}>
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
          <Footer style={{ textAlign: 'center' }}>
            Logue Link Dashboard
          </Footer>
        </Layout>
      </Layout>
    </ThemeProvider>
  );
}

export default withAuthenticator(App);
