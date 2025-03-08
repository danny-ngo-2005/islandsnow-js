import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import MainImage from '@/components/MainImage';
import Categories from '@/components/Categories'; // Change this line
import Header from '@/components/Header';
import { Container } from 'react-bootstrap';

const Home = () => (
  <Container fluid>
    <main>
      <TopMenu />
      <Header />
      <Categories />
      <MainImage />
      <Footer />
    </main>
  </Container>
);

export default Home;
