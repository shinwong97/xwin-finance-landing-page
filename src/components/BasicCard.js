import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function HeaderAndFooterExample(props) {
  return (
    <Card
      className="text-center mb-5"
      style={{ border: "1px solid white" }}
      // data-aos="fade-up"
      // data-aos-offset="120"
      // data-aos-duration="1000"
      // data-aos-easing="linear"
      // data-aos-delay="700"
      // data-aos-anchor-placement="top-bottom"
      data-aos="fade-up-right"
      data-aos-offset="80"
      data-aos-duration="1600"
      data-aos-delay="1200"
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
