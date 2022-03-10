import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from '@theme';
import { MainLayout } from '@layout';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>SHOP</title>;
      <meta name="description" content={'description'} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <ThemeProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  </>
);

export default MyApp;
