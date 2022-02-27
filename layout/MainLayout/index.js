import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { Header, Footer } from '@components';
import { Main } from './style';

const MainLayout = ({ children }) => (
  <Grid>
    <Row>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Row>
  </Grid>
);

export default MainLayout;
