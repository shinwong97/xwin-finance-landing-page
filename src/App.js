import NavBar from "./components/Navbar";
import Hero from "./assets/navbar/hero landing.png";
import Container from "react-bootstrap/Container";
import Card from "./components/BasicCard";
import CardImg1 from "./assets/general/Card1.png";
import CardImg2 from "./assets/general/CardImg2.png";
import CardImg3 from "./assets/general/CardImg3.png";
import CardImg4 from "./assets/general/CardImg4.png";
import CardImg5 from "./assets/general/CardImg5.png";
import CardImg6 from "./assets/general/CardImg6.png";
import CardImg7 from "./assets/general/CardImg7.png";
import CardImg8 from "./assets/general/CardImg8.png";
import Button from "./components/Button";
import Card2 from "./components/Card2";
import Profile from "./components/ProfileCard";
import Col from "react-bootstrap/Col";
import { Row, Stack } from "react-bootstrap";
import Button2 from "react-bootstrap/Button";
import StepCard from './components/StepCard'
import StepCard1 from "./assets/general/stepcard1.JPG"
import StepCard2 from "./assets/general/stepcard2.JPG"
import StepCard3 from "./assets/general/stepcard3.JPG"
import alpaca from './assets/partners/alpaca-logo.png'
import baby from './assets/partners/BABY-icon.png'
import band from './assets/partners/bandprotocol.png'
import bscscan from './assets/partners/bscscan.png'
import chainlink from './assets/partners/chainlink-logo.png'
import coing from './assets/partners/coingecko-logo.png'
import coinm from './assets/partners/coinmarketcap-logo.png'
import crox from './assets/partners/CROX-Color-logo-HD.png'
import icon from './assets/partners/icon-square-512.png'
import metamask from './assets/partners/metamask.png'
import p2p from './assets/partners/p2pb2b.png'
import vulkania from './assets/partners/vulkania.png'
import AOS from 'aos';
import {useEffect} from 'react'

function App() {
  const divStyle = {
    overflowX: "hidden",
  };

  useEffect(() => {
		AOS.init({
			disable: 'mobile'
		  });
	});

  return (
    <div className="App" style={{}}>
      <NavBar />
      <Container>
        <div style={divStyle} className="mt-5">
          <img src={Hero} alt="" height="500" />
          <span style={{ fontFamily: "Noto Sans JP", fontSize: 12 }}>
            Comparing internet specialists based on Japan Investment Advisers
            Association "Contract Asset Status (latest version) (as of March 31,
            2022) 'wrap business' and 'discretionary investment business'"
            Survey by Morningstar (June 2022) point)
          </span>
        </div>
      </Container>

      <div className="pt-2 pb-3" style={{ background: "#F4F4F3" }}>
        <Container className="mt-5">
          <h2
            className="text-center mb-4 pb-3"
            style={{ color: "#004D94", fontSize: 36 }}
          >
            What is WealthNavi?
          </h2>
          <Card
            title="Fully automated asset management service"
            desc="Anyone can automatically manage assets for a prosperous future with a smartphone or computer."
            imgUrl={CardImg1}
          />

          <Card
            title="Aiming to maximize returns through “long-term, accumulation, and diversification”
"
            desc="Even in an unstable market like 2022,
we aim to increase assets over the medium to long term while reducing risk."
            imgUrl={CardImg2}
          />

          <Card
            title="Chosen by many people, mainly working generations"
            imgUrl={CardImg3}
          />
        </Container>
      </div>

      <div className="d-grid m-5">
        <Container>
          <Button />
        </Container>
      </div>

      <div className="pt-2 " style={{ background: "#E2F2FD" }}>
        <Container className="mt-5 pb-3">
          <h2
            className="text-center mb-4 pb-3"
            style={{ color: "#004D94", fontSize: 36 }}
          >
            Why is WealthNavi Chosen?
          </h2>
          <Card2
            title="Reduce investment risk"
            desc="Invest in 12,000 stocks in about 50 countries around the world to reduce the shock of market declines."
            imgUrl={CardImg4}
          />
          <Card2
            title="Aiming for returns that exceed global economic growth"
            desc="By investing globally, we aim to generate returns that exceed global economic growth over the medium to long term."
            imgUrl={CardImg5}
          />
          <Card2
            title="I can leave the difficult things to you"
            desc="Even people who are busy and don't have time or who don't have knowledge of asset management can easily manage assets."
            imgUrl={CardImg6}
          />
          <Card2
            title="NISA can also be used automatically"
            desc="You can manage assets for the future while automatically utilizing the tax exemption benefits of NISA."
            imgUrl={CardImg7}
          />
          <Card2
            title="Safe and secure to use"
            desc="We are working on various security measures to protect important assets."
            imgUrl={CardImg8}
          />
        </Container>
      </div>

      <div className="d-grid m-5">
        <Container>
          <h2
            className="text-center mb-4 pb-3"
            style={{ color: "#004D94", fontSize: 36 }}
          >
            Wealth Navi Experience
          </h2>
          <Row>
            <Col>
              <Profile
                title="I want to continue believing in the experience of withstanding the corona shock."
                desc="4 years and 0 months of investment performance"
              />
            </Col>
            <Col>
              <Profile
                title={`Even with zero knowledge, I thought, "I should do it."`}
                desc="5 years and 2 months of investment performance"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pt-2 " style={{ background: "#F4F4F3" }}>
        <Container className="mt-5 pb-3">
          <h2
            className="text-center mb-4 pb-3"
            style={{ color: "#004D94", fontSize: 36 }}
          >
            Client profit/loss status
          </h2>
          <Stack className="text-center">
            <h5>
              We will disclose the profit and loss status of customers who
              continue to manage “long-term, accumulated, diversified” assets
              with WealthNavi.
            </h5>
            <Button2 className="mt-3" variant="link">
              View profile and loss
            </Button2>
          </Stack>
        </Container>
      </div>
      <div className="d-grid m-5">
        <Container>
          <Stack>
            <Button />
            <Button2 className="mt-3" variant="link">
              Flow of account opening
            </Button2>
          </Stack>
        </Container>
      </div>

      <div className="pt-2 " style={{ background: "#0984E3" }}>
        <Container className="mt-5 pb-3">
          <h2
            className="text-center mb-4 pb-3"
            style={{ color: "white", fontSize: 36 }}
          >
            How to start WealthNavi
          </h2>
          <Row className="justify-content-md-center" >
            <Col lg="3">
            <StepCard title="Free diagnosis of operation plan" desc="Just answer 6 questions and we will propose the optimal operation plan." subtitle="It is possible to open an account without being diagnosed." img={StepCard1}/>
            </Col>
            <Col lg="3">
               <StepCard title="Application for opening an account" desc="All procedures, including registration of customer information, are completed online."img={StepCard2}/>

            </Col>
            <Col lg="3">
               <StepCard title="Asset management started" desc="After setting your risk tolerance and depositing 100,000 yen or more, you can start asset management." subtitle="During periods of high volume of applications, the process may be delayed." img={StepCard3}/>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="d-grid m-5">
        <Container>
          <Stack>
            <Button />
            <Button2 className="mt-3" variant="link">
              Flow of account opening
            </Button2>
          </Stack>
        </Container>

      </div>
          <hr />

      <div className="d-grid m-5" data-aos="flip-left" data-aos-offset="80" data-aos-duration="600" data-aos-delay="200">
        <Container>
          <h2
            className="text-center mb-4 pb-3"
            style={{ color: "#004D94", fontSize: 36 }}
          >
            Alliance Partners
          </h2>
          <Row  className="justify-content-md-center m-5"  data-aos="flip-right" data-aos-offset="80" data-aos-duration="600" data-aos-delay="200" >
              <Col>

              <img   width={120} height={120} src={alpaca} alt="" />

              </Col>
              <Col>
              <img width={120} height={120} src={baby} alt="" />
              </Col>
              <Col>
              <img width={120} height={120} src={band} alt="" />
              </Col>
              <Col>
              <img width={120} height={120} src={bscscan} alt="" />
              </Col>
              <Col>
              <img  width={120} height={120} src={chainlink} alt="" />
              </Col>
              <Col>
              <img  width={120} height={120} src={coing} alt="" />
              </Col>
              
          </Row>
          <Row className="justify-content-md-center m-5" >
              <Col>
              <img width={120} height={120} src={coinm} alt="" />
              </Col>
              <Col>
              <img width={120} height={120} src={crox} alt="" />
              </Col>
              <Col>
              <img width={120} height={120} src={icon} alt="" />
              </Col>
              <Col>
              <img width={120} height={120} src={metamask} alt="" />
              </Col>
              <Col>
              <img  width={120} height={120} src={p2p} alt="" />
              </Col>
              <Col>
              <img  width={120} height={120} src={vulkania} alt="" />
              </Col>
              
          </Row>
        
        </Container>
      </div>
     
    </div>
  );
}

export default App;
