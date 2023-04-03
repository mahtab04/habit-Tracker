import Header from './components/Header';
import Overview from './components/Overview';
import HabitDisplay from './components/HabitDisplay';
import { Row, Col, Container } from 'react-bootstrap';

const App = () => {
    return (
        <>
            <Header />
            <Container className='mt-5'>
                <Row>
                    <Col md={3}>
                        <Overview />
                    </Col>
                    <Col md={9}>
                        <HabitDisplay />
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default App;
