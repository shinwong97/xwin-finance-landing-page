import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function HeaderAndFooterExample(props) {
  return (
    <Card className=" mb-5" style={{border: '1px solid white'}}>
      <Card.Body>
        <Row>
        <Col>
        <Container>
<Card.Title className='m-5 pt-2'>
{props.title}</Card.Title>
        <Card.Text className='m-5 pt-2'>
         {props.desc}
        </Card.Text>
        </Container>
        
        </Col>
        <Col>
        <Card.Img variant='top' style={{maxWidth: 428}} src={props.imgUrl} />

        </Col>
        </Row>

      </Card.Body>
    </Card>
  );
}

export default HeaderAndFooterExample;