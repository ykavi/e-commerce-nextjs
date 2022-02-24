import Head from 'next/head';
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>SHOP</title>;
    </Head>
    <meta name="description" content={'description'} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
  </>
);

export default MyApp;
