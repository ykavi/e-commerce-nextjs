import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from '@theme';
import { MainLayout } from '@layout';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>SHOP</title>;
    </Head>
    <meta name="description" content={'description'} />
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  </>
);

export default MyApp;
