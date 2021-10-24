import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

import {Navbar, Nav} from 'react-bootstrap'
import {logout} from '../../actions/auth'

export class Header extends Component {
    render() {

      const {isAuthenticated, user} = this.props.auth;

      const AuthLinks = (
        <ul>
          <span className="navebar-text mr-3 ">
            <strong>
              {user ? `Welcome ${user.username} ` : ''}
            </strong>
          </span>
        <button onClick ={this.props.logout} className=" nav-link btn btn-info btn-sm text-light">
        
        <Link to="/register"  className="nav-item">Logout</Link>
      
      
      </button>
      </ul>
      )
      const guestLinks = (
        <ul>
        <Nav.Link href="\">
        <Link to="/register"  className="nav-item">Register</Link></Nav.Link>
      
      <Nav.Link href="/login" >
      <Link to="/login" className="nav-item"> Login</Link>
      </Nav.Link>
      </ul>
      )
    

        return (
            
<Navbar bg="light" expand="sm">
  <Navbar.Brand href="#">Lead Manager</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#"  className="nav-item">Home</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
  {isAuthenticated ? AuthLinks : guestLinks}
</Navbar>
            
        )
    }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logout})(Header)
