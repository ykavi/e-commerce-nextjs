import Head from 'next/head';
import Image from 'next/image';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

const Home = () => (
  <Grid>
    <Row>
      <Col lg={6}>
        <p>Kavi</p>
      </Col>
      <Col lg={6}>
        <p>Kavi</p>
      </Col>
    </Row>
  </Grid>
);

export default Home;
