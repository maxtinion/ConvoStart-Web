import { Navbar, Nav, Image, Button } from "react-bootstrap";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import './App.css'
import React from 'react'
import ReactDOM from 'react-dom'


function App() {
  return (
    <div className={"App-Main"}>
      <div className={"Navbar"}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <span style={{ fontFamily: "Balsamiq Sans" }}>Dashboard</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <span style={{ fontFamily: "Krona One" }}>Home</span>
              </Nav.Link>
              <Nav.Link>
                <span style={{ fontFamily: "Krona One" }}>Dashboard</span>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <span style={{ fontFamily: "Krona One" }}>
                  Sign In &nbsp; <FaDiscord />{" "}
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className={"App-Hero"}>
        <p align="center" style={{paddingTop: "70px"}}>
        <Image height={150} draggable={false} className={"Hero-Img"} src="https://cdn.discordapp.com/avatars/812751074925609050/1cccea9d7e2d170ea78b9b843d36faee.png?size=2048" roundedCircle/>
        </p>
        <p align="center">
        <span className={"Hero-Title"}>ConvoStart</span>
        </p>
        <p align="center">
        <a href="https://discord.com/oauth2/authorize?client_id=812751074925609050&scope=bot&permissions=8"><Button>
            <span style={{fontFamily: "Balsamiq Sans"}}>
            Invite Me
            </span>
          </Button></a>
          &nbsp; &nbsp; &nbsp;
          <Button variant="danger">
            <span style={{fontFamily: "Balsamiq Sans"}}>
            Dashboard
            </span>
          </Button>
          &nbsp; &nbsp; &nbsp;
          <a href="https://github.com/maxtinion/convoStart"><Button>
            <span style={{fontFamily: "Balsamiq Sans"}}>
            Github
            </span>
          </Button></a>
        </p>
        <br/>
      </div>
      <footer>
        <h4>
        Made by Maxim Ausloos &nbsp; <a href="https://github.com/maxtinion"><FaGithub />{" "}</a> &nbsp; <FaDiscord title="Jelly Time#0266"/>{" "} &nbsp; <a href="mailto:maxtinion@gmail.com"><IoMdMail />{" "}</a>
        </h4>
      </footer>
    </div>
  );
}

export default App;
