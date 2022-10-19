import NavBar from './components/Navbar'
import Hero from './assets/navbar/hero landing.png'
import Container from 'react-bootstrap/Container';
import Card from './components/BasicCard'
import CardImg1 from './assets/general/Card1.png'
import CardImg2 from './assets/general/CardImg2.png'
import CardImg3 from './assets/general/CardImg3.png'
import CardImg4 from './assets/general/CardImg4.png'
import CardImg5 from './assets/general/CardImg5.png'
import CardImg6 from './assets/general/CardImg6.png'
import CardImg7 from './assets/general/CardImg7.png'
import CardImg8 from './assets/general/CardImg8.png'
import Button from './components/Button';
import Card2 from './components/Card2'
import Profile from './components/ProfileCard'
import Col from 'react-bootstrap/Col';
import { Row, Stack } from 'react-bootstrap';
import Button2 from 'react-bootstrap/Button';


function App() {
const divStyle={
  overflowX: 'hidden',
 
};

  return (
    <div className="App" style={{}}>
      <NavBar />
      <Container>
        <div style={divStyle} className="mt-5">
        <img src={Hero} alt="" height="500" />
          <span style={{fontFamily:"Noto Sans JP", fontSize: 12}}>
           Comparing internet specialists based on Japan Investment Advisers Association "Contract Asset Status (latest version) (as of March 31, 2022) 'wrap business' and 'discretionary investment business'" Survey by Morningstar (June 2022) point)
          </span>
        </div>
      </Container>

      <div className='pt-2 pb-3' style={{background: '#F4F4F3', }}>
        <Container className='mt-5' >

<h2 className='text-center mb-4 pb-3' style={{color: '#004D94', fontSize: 36}}>What is WealthNavi?</h2>
<Card  title="Fully automated asset management service" desc="Anyone can automatically manage assets for a prosperous future with a smartphone or computer." imgUrl={CardImg1}/>

<Card title="Aiming to maximize returns through “long-term, accumulation, and diversification”
" desc="Even in an unstable market like 2022,
we aim to increase assets over the medium to long term while reducing risk." imgUrl={CardImg2}/>

<Card title="Chosen by many people, mainly working generations" imgUrl={CardImg3}/>
        </Container>

      </div>

      <div className="d-grid m-5">
        <Container>
        <Button />

        </Container>
      </div>

      <div className='pt-2 ' style={{background: '#E2F2FD'}}>
<Container className='mt-5 pb-3' >
  <h2 className='text-center mb-4 pb-3' style={{color: '#004D94', fontSize: 36}}>Why is WealthNavi Chosen?</h2>
 <Card2 title="Reduce investment risk" desc="Invest in 12,000 stocks in about 50 countries around the world to reduce the shock of market declines." imgUrl={CardImg4} />
 <Card2 title="Aiming for returns that exceed global economic growth" desc="By investing globally, we aim to generate returns that exceed global economic growth over the medium to long term." imgUrl={CardImg5} />
 <Card2 title="I can leave the difficult things to you" desc="Even people who are busy and don't have time or who don't have knowledge of asset management can easily manage assets." imgUrl={CardImg6} />
 <Card2 title="NISA can also be used automatically" desc="You can manage assets for the future while automatically utilizing the tax exemption benefits of NISA." imgUrl={CardImg7} />
 <Card2 title="Safe and secure to use" desc="We are working on various security measures to protect important assets." imgUrl={CardImg8} />
</Container>
      </div>

      <div className="d-grid m-5">
        <Container>
          <h2 className='text-center mb-4 pb-3' style={{color: '#004D94', fontSize: 36}}>Wealth Navi Experience</h2>
          <Row>

          <Col>
        <Profile title="I want to continue believing in the experience of withstanding the corona shock."  desc="4 years and 0 months of investment performance"/>
          
          </Col>
  <Col>
        <Profile title={`Even with zero knowledge, I thought, "I should do it."`}  desc="5 years and 2 months of investment performance" />
          
          </Col>
          </Row>

        </Container>
      </div>
<div className='pt-2 ' style={{background: '#F4F4F3'}}>
  <Container className='mt-5 pb-3' >

<h2 className='text-center mb-4 pb-3' style={{color: '#004D94', fontSize: 36}}>Client profit/loss status</h2>
<Stack className='text-center'>
    <h5>We will disclose the profit and loss status of customers who continue to manage “long-term, accumulated, diversified” assets with WealthNavi.
</h5>
    <Button2 className='mt-3'  variant="link">
      View profile and loss
    </Button2>
</Stack>
  </Container>


</div>
<div className="d-grid m-5">
        <Container>
          <Stack>
 <Button />
<Button2 className='mt-3' variant="link">
      Flow of account opening
    </Button2>
          </Stack>
       
        </Container>
      </div>

    </div>
  );
}

export default App;
