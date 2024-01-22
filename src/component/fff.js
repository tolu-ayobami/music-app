import {React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./home.css"
import Reviews from '../components/reviews.js';
import Atm from '../components/atm.js';
import Billing from '../components/Billing.js';
import Summary from '../components/summary.js';
import Projectbox from '../components/project.js';
import Account from '../components/account.js';
import  Organ  from '../components/organization.js';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Search from 'react-bootstrap-icons/dist/icons/search';
import {HouseDoor} from 'react-bootstrap-icons';
import {AiOutlineDesktop, AiOutlineMobile} from 'react-icons/ai';
import {FiTablet} from "react-icons/fi"
import {BsCalendar4} from "react-icons/bs"
import {CiMenuKebab} from "react-icons/ci"
import {Upload, Trash} from "react-bootstrap-icons"
import { RxHamburgerMenu } from 'react-icons/rx';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Home() { 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
            <body>
                <div className="headerInfo">
                    <img src="logo.png" alt="" />
                    <div className="others d-flex flex-row">
                    <div className="search">
                        <input type="text" className='form-control searchInput' placeholder='Search'/>
                       <Search className="searchIcon" size={17}/>
                    </div>
                    <div className="imgs">
                        <img src="refresh.png" alt="" />
                        <img src="notification.png" alt="" />
                    </div>
                    <div className="user d-flex">
                        <img src="user.png" alt="" />
                        <div className="text d-flex flex-column">
                            <span className='title'>John Doe</span>
                            <span>System Admin</span>
                        </div>
                    </div>
                    <button className="menu" onClick={handleShow}>
                        <RxHamburgerMenu color='#0632BE'/>
                    </button>
                    </div>
                </div>
                <main>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
            <div className="sidebar">
                        <p>ACCOUNT</p>
                        <Row>
                            <Col sm={8}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                <Nav.Link  eventKey="first"><img src="domains.png" alt=''/></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second"><img src="reports.png" alt="" /></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="third"><img src="account.png" alt="" /></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="fourth"><img src="tickets.png" alt="" /></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="fifth"><img src="subs.png" alt="" /></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="sixth" className='last'><img src="teams.png" alt="" /></Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                        </Row>
                            <hr />
                            <div className="support">
                            <Row>
                <Nav href="" className="flex-column supAndLog">
                        <Nav.Link href="/home"><img src="support.png" alt="" /></Nav.Link>
                        <Nav.Link href=''><img src="logout.png" alt="" /></Nav.Link>
                            </Nav>
                            </Row>
                            </div>
                    </div>
            </Offcanvas.Body>
          </Offcanvas>
                    <div className="sidebar desktop">
                        <p>ACCOUNT</p>
                        <Row>
                            <Col sm={8}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                <Nav.Link  eventKey="first"><img src="domains.png" alt=''/></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second"><img src="reports.png" alt="" /></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="third"><img src="account.png" alt="" /></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="fourth"><img src="tickets.png" alt="" /></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="fifth"><img src="subs.png" alt="" /></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="sixth" className='last'><img src="teams.png" alt="" /></Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                        </Row>
                            <hr />
                            <div className="support">
                            <Row>
                <Nav href="" className="flex-column supAndLog">
                        <Nav.Link href="/home"><img src="support.png" alt="" /></Nav.Link>
                        <Nav.Link href=''><img src="logout.png" alt="" /></Nav.Link>
                            </Nav>
                            </Row>
                            </div>
                    </div>
                    <div className="content">
                    <Tab.Content>
                       <Tab.Pane eventKey="first">
                         <Tab.Container defaultActiveKey="domains">
            <Row>
                <Nav variant="pills">
               <div className="flex">
               <Nav.Item>
                    <Nav.Link eventKey="domains">
                        <div className='domainContTab'>
                            {/* add dropwdonw here */}
                            <div className="imgIcon">
                           <HouseDoor size={20} fontWeight={15} color='#0632BE'  className='house'/>
                            </div>
                           <span>Desterhost.com</span> 
                           <div className="imgIcon">
                           <img src="dropdown.png" alt="" />
                           </div>
                        </div>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="issues">
                        <div className="Tab">
                            <div className="imgIcon">
                                <img src="issues.png" alt="" />
                            </div>
                            <span>Issues</span>
                        </div>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="desterfix" className='changeT'>
                    <div className="Tab">
                        <div className="imgIcon">
                            <img src="desterfix.png" alt="" className='change'/>
                        </div>
                            <span>Desterfix</span>
                        </div>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="reports" className='changeT'>
                    <div className="Tab">
                            <img src="reports (3).png" alt="" className='change'/>
                            <span>Reports</span>
                        </div>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="insight" className='changeT'>
                    <div className="Tab">
                            <img src="insights.png" alt="" className='change'/>
                            <span>Insights</span>
                        </div>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="config">
                    <div className="Tab">
                            <img src="config.png" alt="" />
                            <span>Config</span>
                        </div>
                    </Nav.Link>
                </Nav.Item>
               </div>
                </Nav>
                  <Col sm={9} className='mx-5 mobile my-4'>
                  <Tab.Content>
                  <Tab.Pane eventKey="domains">
                        <p className='display-1'>
                        Hi domain
                        </p>
                    </Tab.Pane>
                  <Tab.Pane eventKey="issues">
                        <p className='display-1'>
                        Hi issues
                        </p>
                    </Tab.Pane>
                  <Tab.Pane eventKey="desterfix">
                       <div className="section">
                             <Summary />
                       </div>
                    </Tab.Pane>
                  <Tab.Pane eventKey="reports">
                        <p className='display-1'>
                        Hi reports
                        </p>
                    </Tab.Pane>
                  <Tab.Pane eventKey="insight">
                    <div className="TwoCards d-flex" >
                        <div className="usageLimit mb-5 d-flex flex-column">
                            <div className="usageTxt ms-3 mb-4">
                            <h3 className='mb-3'>Usage Limit</h3>
                            <div className="users">
                          <AiOutlineDesktop size={20} fontWeight={15} color="#0632BE" className='me-2 desktop'/>  <h6>Desktop Users Report</h6>
                            </div>
                            <div className="users">
                                <FiTablet className='me-2'/> <h6>Tablet Browser Type</h6>
                            </div>
                            <div className="users">
                                <AiOutlineMobile className='me-2'/> <h6>Mobile Users</h6>
                            </div>
                            </div>
                            <div className="usageBars mx-3">
                                <div className="pageViews">
                                    <h5>Page Views</h5>
                                <div className='pageViewsProgress'>
                                    <div className="pageViewsProgressBar"></div>
                                </div>
                                </div>
                                <div className="remediation">
                                    <h5>Remediation</h5>
                                <div className='remediationProgress'>
                                    <div className="remediationProgressBar"></div>
                                </div>
                                </div>
                                <div className="Avg mt-2">
                                    <h5>Avg run time per user</h5>
                                <div className='avgProgress'>
                                    <div className="avgProgressBar"></div>
                                </div>
                                </div>
                                <div className="totalPages mt-2">
                                    <h5>Total Pages</h5>
                                <div className='totalPagesProgress'>
                                    <div className="totalPagesProgressBar"></div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="domainScore">
                            <h3>Domain Score</h3>
                            <div className="imgAndContent d-flex flex-column">
                            <img src="donought.png" alt="" className='donought'/>
                                <div className="imgTxt d-flex flex-column">
                                    <span className='txtAccess'>Accesibility Score</span>
                                    <span className='numerals'>80%</span>
                                </div>
                            </div>
                            <div className="domainScoreFooter d-flex justify-content-between mt-3 mx-5">
                                <div className="critIssues d-flex flex-column align-items-center">
                                    <span className='numeralsText'>Critical Issues</span>
                                    <span className='numerals'>30</span>
                                </div>
                                <div className="moderate d-flex flex-column align-items-center">
                                    <span className='numeralsText'>Moderate</span>
                                    <span className='numerals'>74</span>
                                </div>
                                <div className="low d-flex flex-column align-items-center">
                                    <span className='numeralsText'>Low</span>
                                    <span className='numerals'>256</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="insightsChart">
                            <header>
                                <div className="contentChart d-flex flex-row align-items-center justify-content-between mx-3">
                                    <div className='headingInsights w-50'>
                                        <span>Insights</span>
                                    </div>
                                    <div className="context w-75">
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="week">
                                        <Row>
                                            <Col>
                                                <Row>
                                                <Nav variant="pills" className="flex-row">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="week" className='context-week'>7 days</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                    <Nav.Link eventKey="aMonth" className='context-aMonth'>1 month</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                    <Nav.Link eventKey="threeMonths" className='context-threeMonth'>3 months</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                                </Row>
                                            </Col>
                                            <Col>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="week">
                                                    <div className="div-Round d-flex align-items-center justify-content-center ">
                                                      <BsCalendar4 />  <span className='ms-2'>May 3, 2023 - May 10, 2023</span>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="aMonth">
                                                <div className="div-Round d-flex align-items-center justify-content-center ">
                                                      <BsCalendar4 />  <span className='ms-2'>May 2023 - June 2023</span>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="threeMonths">
                                                <div className="div-Round d-flex align-items-center justify-content-center ">
                                                      <BsCalendar4 />  <span className='ms-2'>May 2023 - August 2023</span>
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                            </Col>
                                        </Row>
                                        </Tab.Container>
                                    </div>
                                
                                </div>
                                <div className="domainsInsights  mb-5">
                                  <div className="filters d-flex w-100 mt-3">
                                  <div className="domainSelected d-flex align-items-center justify-content-around w-25 me-5">
                                    <span>Domains</span>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                                    </div>
                                  <div className="sourceSelected d-flex align-items-center justify-content-around w-25 me-5">
                                    <span>Sources</span>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                                    </div>
                                  <div className="tagsSelected d-flex align-items-center justify-content-around w-25 me-5">
                                    <span>Tags</span>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                                    </div>
                                  </div>
                                  <img src="imgslideone.png" alt="" className='chartMain mt-3 mx-3'/>
                                </div>
                            </header>

                    </div>
                       <div className="cardAccount">
                       <div className="accountCard">
                            <Tab.Container defaultActiveKey="Today">
                                <Row>
                                    <Col>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="Today">
                                            <div className="Txtcontent">
                                          <div className="topTxt">
                                             <p>Total value of assets</p>
                                             <h3>$13,371.01</h3>
                                          </div>
                                            <div className="dummyGraph">
                            <img src="dummyGraph.png" alt="" className='dummyGraph'/>
                                            </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="This Week">
                                            <div className="Txtcontent">
                                          <div className="topTxt">
                                             <p>Total value of assets</p>
                                            <h3>$10,371.01</h3>
                                            </div>
                                            <div className="dummyGraph">
                            <img src="dummyGraph.png" alt="" className='dummyGraph'/>
                                            </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="This Month">
                                            <div className="Txtcontent">
                                          <div className="topTxt">
                                             <p>Total value of assets</p>
                                            <h3>$3,371.01</h3>
                                            </div>
                                            <div className="dummyGraph">
                            <img src="dummyGraph.png" alt="" className='dummyGraph'/>
                                            </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="This Year">
                                            <div className="Txtcontent">
                                          <div className="topTxt">
                                             <p>Total value of assets</p>
                                            <h3>$63,371.01</h3>
                                            </div>
                                            <div className="dummyGraph">
                            <img src="dummyGraph.png" alt="" className='dummyGraph'/>
                                            </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="All Time">
                                            <div className="Txtcontent">
                                          <div className="topTxt">
                                             <p>Total value of assets</p>
                                            <h3>$4,371.01</h3>
                                            </div>
                                            <div className="dummyGraph">
                            <img src="dummyGraph.png" alt="" className='dummyGraph'/>
                                            </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                    </Col>
                                <Nav variant='pills'>
                                        <div className="captions">
                                    <Nav.Item>
                                        <Nav.Link eventKey="Today" className="custom">
                                            Today
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="This Week" className="custom">
                                            This Week
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="This Month" className="custom">
                                            This Month
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="This Year" className="custom">
                                            This Year
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="All Time" className="custom">
                                            All Time
                                        </Nav.Link>
                                    </Nav.Item>
                                </div>
                                </Nav>
                                </Row>
                            </Tab.Container>
                       </div>
                       </div>
                      <div className="activedomains my-5">
                      <table class="table table-responsive">
                        <thead>
                            <tr>
                            <th scope="col" className='p-3'>Server</th>
                            <th scope="col" className='p-3'>Hosted Assets</th>
                            <th scope="col" className='p-3'>Status</th>
                            <th scope="col" className='p-3'>Action</th>
                            <th scope="col" className='p-3'>Watchlist</th>
                            </tr>
                        </thead>
                            <tbody>
                            <tr>
                                <td rowspan="5">
                                <div className="mainCont">
                                        <img src="windows.png" alt="" className='margin'/>
                                        <span>
                                            Windows server
                                        </span>
                                        </div>
                                </td>
                                <td rowspan="5">
                                <div className="Coin">
                                        <div className="bIconImg">
                                            <img src="bImg.png" alt="" />
                                        </div>
                                        <span>EthBitcoin</span>
                                    </div>
                                <div className="Coin">
                                        <div className="bIconImg">
                                            <img src="bImg.png" alt="" />
                                        </div>
                                        <span>EthBitcoin</span>
                                    </div>
                                <div className="Coin">
                                        <div className="bIconImg">
                                            <img src="bImg.png" alt="" />
                                        </div>
                                        <span>EthBitcoin</span>
                                    </div>
                                <div className="Coin">
                                        <div className="bIconImg">
                                            <img src="bImg.png" alt="" />
                                        </div>
                                        <span>EthBitcoin</span>
                                    </div>
                                </td>
                                <td rowspan="5">
                                    <div className="statusContent">
                                        <span>Protected</span>
                                    </div>
                                    <div className="statusContent">
                                        <span>Recovered</span>
                                    </div>
                                    <div className="statusContent">
                                        <span>Protected</span>
                                    </div>
                                    <div className="statusContent">
                                        <span>Recovered</span>
                                    </div>
                                </td>
                                <td rowspan="5">
                                    <div className="button">
                                    <button href="#" className="btnAction">Live</button>
                                    </div>
                                    <div className="button">
                                    <button href="#" className="btnAction">Live</button>
                                    </div>
                                    <div className="button">
                                    <button href="#" className="btnAction danger">Offline</button>
                                    </div>
                                    <div className="button">
                                    <button href="#" className="btnAction">Live</button>
                                    </div>
                                </td>
                                {/* .multipleLinesOfContent */}
                            </tr>
                            <tr>
                                <td>
                                <div className="watchListContent">
                                            <span><a href="">Add</a></span>
                                        </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div className="watchListContent">
                                            <span><a href="">Add</a></span>
                                        </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div className="watchListContent">
                                            <span><a href="">Add</a></span>
                                        </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div className="watchListContent">
                                            <span><a href="">Add</a></span>
                                        </div>
                                </td>
                            </tr>

                            {/* nextLine */}
                            <tr>
                            <td rowspan="3">
                            <div className="mainCont">
                                        <img src="linux.png" alt="" className='margin'/>
                                        <span>
                                            Linux RedHart
                                        </span>
                                        </div>
                            </td>
                                <td rowspan="3">
                                <div className="Coin">
                                        <div className="bIconImg">
                                            <img src="bImg.png" alt="" />
                                        </div>
                                        <span>EthBitcoin</span>
                                    </div>
                                <div className="Coin">
                                        <div className="bIconImg">
                                            <img src="bImg.png" alt="" />
                                        </div>
                                        <span>EthBitcoin</span>
                                    </div>
                                </td>
                                <td rowspan="3">
                                    <div className="statusContent">
                                        <span>Protected</span>
                                    </div>
                                    <div className="statusContent">
                                        <span>Recovered</span>
                                    </div>
                                </td>
                                <td rowspan="3">
                                    <div className="button">
                                    <button href="#" className="btnAction">Live</button>
                                    </div>
                                    <div className="button">
                                    <button href="#" className="btnAction">Live</button>
                                    </div>
                                </td>
                                {/* .multipleLinesOfContent */}
                            </tr>
                            <tr>
                                <td>
                                <div className="watchListContent">
                                            <span><a href="">Add</a></span>
                                        </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div className="watchListContent">
                                            <span><a href="">Remove</a></span>
                                        </div>
                                </td>
                            </tr>

                            {/* nextLine */}
                            <tr>
                            <td rowspan="3">
                            <div className="mainCont">
                                        <img src="ubuntu.png" alt="" className='margin'/>
                                        <span>
                                            Ubuntu
                                        </span>
                                        </div>
                            </td>
                                <td rowspan="3">
                                <div className="Coin">
                                        <div className="bIconImg">
                                            <img src="bImg.png" alt="" />
                                        </div>
                                        <span>EthBitcoin</span>
                                    </div>
                                <div className="Coin">
                                        <div className="bIconImg">
                                            <img src="bImg.png" alt="" />
                                        </div>
                                        <span>EthBitcoin</span>
                                    </div>
                                </td>
                                <td rowspan="3">
                                    <div className="statusContent">
                                        <span>Protected</span>
                                    </div>
                                    <div className="statusContent">
                                        <span>Recovered</span>
                                    </div>
                                </td>
                                <td rowspan="3">
                                    <div className="button">
                                    <button href="#" className="btnAction">Live</button>
                                    </div>
                                    <div className="button">
                                    <button href="#" className="btnAction danger">Offline</button>
                                    </div>
                                </td>
                                {/* .multipleLinesOfContent */}
                            </tr>
                            <tr>
                                <td>
                                <div className="watchListContent">
                                            <span><a href="">Add</a></span>
                                        </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div className="watchListContent">
                                            <span><a href="">Add</a></span>
                                        </div>
                                </td>
                            </tr>
                             </tbody>
                        </table>
                      </div>
                <div className="section"> 
                    <Reviews />
                    </div>
                      
                      
                    </Tab.Pane>
                  <Tab.Pane eventKey="config">
                        <p className='display-1'>
                        Hi config
                        </p>
                    </Tab.Pane>
                  </Tab.Content>
                  </Col>
                            </Row>
                         </Tab.Container>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                                <Tab.Pane eventKey="third">
                                   <div className="accDetails">
                                        <div className="accImgDetails">
                                            <div className="backdropBgAcc">
                                                    <img src="accBg.png" alt="" />
                                                    <div className="kebabIcon">
                                                        <i class="fa-solid fa-ellipsis-vertical" style={{color: "#ffffff"}}></i>
                                                    </div>
                                                </div>
                                                <div className="profileImg">
                                                    <img src="profileImg.png" alt="" className='rounded-circle'/>
                                                    <div className="subsectDesc">
                                                        <div className="highlightedInfo rounded-pill bg-warning p-1">Admin</div>
                                                        <h3 className="accName">John Doe</h3>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="accTabs">
                                            <Tab.Container defaultActiveKey="Account">
                                    <Row>
                                        <div className="backdropAccTabs">
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                            <Nav.Link eventKey="Account">Account</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="Administration">Administration</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="Security">Security</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="Notification">Notification</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="Billing">Billing</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        </div>
                                          <div className="accTabsCont">
                                        <Tab.Content>
                                          <Tab.Pane eventKey="Account"><Account /></Tab.Pane>
                                            <Tab.Pane eventKey="Administration">
                                                <Tab.Container defaultActiveKey="OrgDetails">
        <Row>
        <div className="adminDetailsTab">
        <Nav className="navForAdmin flex-row w-100 justify-content-between">
                <Nav.Item>
                <Nav.Link eventKey="OrgDetails">Organisation Details</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="InvMem">Invite Members</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="ExpData">Export Data Account</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
            <Col>
            <Tab.Content>
                <Tab.Pane eventKey="OrgDetails"><Organ /></Tab.Pane>
                <Tab.Pane eventKey="InvMem">
                <table class="table w-100 invTable">
                            <thead>
                                <tr>
                                <th scope="col">Team Members</th>
                                <th scope="col">Team Role</th>
                                <th scope="col">Date added</th>
                                <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row" >
                                  <div className="d-flex">
                                  <img src="pic.png" alt="" className='pImg'/>
                                    <div className="d-flex flex-column">
                                        <p className='text-black-50'>Jack Michael</p>
                                        <span className='text-body-secondary'>@jack</span>
                                    </div>
                                  </div>
                                </th>
                                <td>Designer</td>
                                <td>March 22, 2023</td>
                                <td>
                                    <div className="statusOfTeam">
                                        <span className='text-success'>Active</span>
                                        <Trash size={20} color='#0634BF'/>
                                    </div>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">
                                <div className="d-flex">
                                  <img src="pic.png" alt="" className='pImg'/>
                                    <div className="d-flex flex-column">
                                        <p className='text-black-50'>Cynthia Ayomide</p>
                                        <span className='text-body-secondary'>@cynthiaA</span>
                                    </div>
                                  </div>
                                </th>
                                <td>Developer</td>
                                <td>March 22, 2023</td>
                                <td>
                                    <div className="statusOfTeam">
                                        <span className='text-danger'>Offline</span>
                                        <Trash size={20} color='#0634BF'/>
                                    </div>
                                </td>
                                </tr>
                            </tbody>
                                </table>
                                <div className="inviteMembersForm">
                                <button className='btn btn-primary me-3 p-2'>Save Changes</button>
                                <button className='btn btn-outline-primary p-2'>Cancel</button>
                                </div>
                </Tab.Pane>
                <Tab.Pane eventKey="ExpData">trd tab content</Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
                                                </Tab.Container>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="Security">Tird tab content</Tab.Pane>
                                            <Tab.Pane eventKey="Notification">Fourth tab content</Tab.Pane>
{/* billing Tabs For Account Details Here */}
                                            <Tab.Pane eventKey="Billing">
                                            <Tab.Container defaultActiveKey="payMeth">
        <Row>
        <div className="billingTab">
        <Nav className="navForBill flex-row w-100 justify-content-between">
                <Nav.Item>
                <Nav.Link eventKey="payMeth">Payment Methods</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="billPlans">Billing Plans</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="billHist">Billing History</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
            <Col>
            <Tab.Content>
                <Tab.Pane eventKey="payMeth">
                    <Atm />
                </Tab.Pane>
                <Tab.Pane eventKey="billPlans">
               <Billing />
                </Tab.Pane>
                <Tab.Pane eventKey="billHist">
                    <div className="billHistory w-100">
                        <div className="filter">
                          <span>Filter</span>  <i class="fa-solid fa-filter"></i> <i class="fa-solid fa-caret-down"></i>
                        </div>
                              <table class="table w-100 invTable">
                            <thead>
                                <tr>
                                <th scope="col">Invoice</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row" >Basic Plan</th>
                                <td>0$</td>
                                <td>March 22, 2023</td>
                                <td>
                                    <div className="statusOfInvoice">
                                        <span>Paid</span>
                                        <Upload />
                                    </div>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">Proffesional Plan</th>
                                <td>20%</td>
                                <td>March 22, 2023</td>
                                <td>
                                    <div className="statusOfInvoice">
                                        <span>Paid</span>
                                        <Upload />
                                    </div>
                                </td>
                                </tr>
                            </tbody>
                                </table>
                    </div>
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
                                                </Tab.Container>
                                            </Tab.Pane>
                                        </Tab.Content>
                                          </div>
                                    </Row>
                                            </Tab.Container>
                                        </div>
                                   </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <div className="section">
                                  <Projectbox />               
                                  </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">fifth tab content</Tab.Pane>
                                <Tab.Pane eventKey="sixth">sixth tab content</Tab.Pane>
                            </Tab.Content>
                    </div>
              </Tab.Container>
                </main>
            </body>
        </>
    );
}

export default Home;
