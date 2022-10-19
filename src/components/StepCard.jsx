import Card from 'react-bootstrap/Card';

function KitchenSinkExample(props) {
  return (
    <Card style={{ width: '20rem',  }}>
      <Card.Img  variant="top" src={props.img} />
      <Card.Body className='mb-4'>
        <Card.Title className='mb-4'>{props.title}</Card.Title>
        <Card.Text className='mb-4'>
        {props.desc}
        </Card.Text>
        <Card.Text className='mb-4' style={{fontFamily: 'Noto Sans JP', fontWeight:400, color:'#888888', fontSize: 14}}>
{props.subtitle}       </Card.Text>
      </Card.Body>
     
      
    </Card>
  );
}

export default KitchenSinkExample;