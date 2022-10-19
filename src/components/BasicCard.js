import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function HeaderAndFooterExample(props) {
  return (
    <Card
      className="text-center mb-5"
      style={{ border: "1px solid white" }}
      data-aos="fade-down-right"
      data-aos-offset="80"
      data-aos-duration="600"
      data-aos-delay="200"
    >
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <Card.Img variant="top" style={{ maxWidth: 428 }} src={props.imgUrl} />
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default HeaderAndFooterExample;
