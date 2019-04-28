import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility
} from 'semantic-ui-react'
import './Gnb.scss'

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
  backgroundColor: '#5e5a5a'
}
const fixedMenuStyle = {
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  backgroundColor: '#5e5a5a'
}

class Gnb extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false
  }

  render() {
    const { menuFixed } = this.state

    return (
      <div className='Gnb'>
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item header>Project Name</Menu.Item>
              <Menu.Item as="a">Weather</Menu.Item>
              <Menu.Item as="a">Articles</Menu.Item>

              <Menu.Menu position="right">
                <Dropdown text="Dropdown" pointing className="link item">
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                      <i className="dropdown icon" />
                      <span className="text">Submenu</span>
                      <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
            </Container>
          </Menu>
        </Visibility>
      </div>
    )
  }

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickTopMenu = () => this.setState({ menuFixed: false })
}

export default Gnb
