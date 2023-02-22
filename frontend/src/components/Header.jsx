import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    // console.log('Logout');
    dispatch(logout());
  };

  return (
    <>
      <Navbar bg="dark" expand="lg" variant='dark' collapseOnSelect>
        <Container>

        <LinkContainer to="/">
        <Navbar.Brand>
            <h1 style={{color: "skyblue"}}>eShophy</h1>
        </Navbar.Brand>
        </LinkContainer>
       
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">

        <LinkContainer to='/cart'>
             <Nav.Link >
                 <i className='fas fa-shopping-cart'></i>
                 <span style={{ color: 'darkorange',fontWeight: 'bold'  }}>&nbsp;Cart</span>
                 </Nav.Link>
        </LinkContainer>

        {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">

                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>
                    <span style={{ color: 'darkorange',fontWeight: 'bold'  }}>&nbsp; Singin</span>
                    
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
        
        /* <LinkContainer to ='/login'> 
             <Nav.Link >
             <i className='fas fa-user'></i>
                 &nbsp; Signin
                 </Nav.Link>
         </LinkContainer>

             </Nav>
             </Navbar.Collapse>
        </Container>
          
      </Navbar>
             
    </>
  );
};

export default Header; */




// import React from 'react';
// import {Navbar,Nav, Container} from 'react-bootstrap'
// import {LinkContainer} from 'react-router-bootstrap'

// const Header = () => {
//   return (
//     <>
//     <Navbar bg="dark" expand="lg" variant='dark' collapseOnSelect>
//       <Container>
//         <LinkContainer to="/">
//             <Navbar.Brand >Online Shop</Navbar.Brand>
//         </LinkContainer>
        
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">

//           <Nav className="ml-auto">

//             <LinkContainer to='/cart'>
//             <Nav.Link >
//                 <i className='fas fa-shopping-cart'></i>
//                 &nbsp; Cart
//                 </Nav.Link>
//             </LinkContainer>
//             <LinkContainer to="/signin"> 
//             <Nav.Link >
//             <i className='fas fa-user'></i>
//                 &nbsp; Signin</Nav.Link>
//             </LinkContainer>
           
           
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
      
//     </>
//   );
// }

// export default Header;
