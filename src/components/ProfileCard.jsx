import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col, Image } from 'react-bootstrap';
import Avatar1 from '../assets/general/avatar1.png'

function WithHeaderStyledExample(props) {
  return (
    <Card style={{ width: '28rem' }}>
      {/* <Card.Header as="h5">Featured</Card.Header> */}
      <Card.Body>
        <Row>
            <Col lg='3'>
            <img  style={{maxWidth: 90, marginTop:-50}} src={Avatar1} alt='' />
            </Col>
            <Col>
            Mr. N / 30s, office worker
            </Col>
        </Row>
        <Card.Title className='mt-4'>{props.title}</Card.Title>
        <Row>
            <Col>
             <Card.Text>
         {props.desc}
        </Card.Text>
            </Col>
            <Col>
             <span style={{fontSize:26 , color: "#004D94", fontWeight: 'bold'}}>
          + 20.66 %
        </span>
            </Col>
        </Row>
       
        <Button className='mt-4' variant="primary">Read testimonials</Button>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderStyledExample;