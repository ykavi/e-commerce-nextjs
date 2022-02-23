import Head from 'next/head';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>SHOP</title>;
    </Head>
    <meta name="description" content={'description'} />
    <Component {...pageProps} />
  </>
);

export default MyApp;
