import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Container,
  Dropdown,
  Menu,
  Visibility
} from 'semantic-ui-react'
import './Gnb.scss'

const menuStyle = {
  margin: '0 auto',
  width: '700px',
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '1em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease'
}

const fixedMenuStyle = {
  // borderRadius: '40% 10px',
  left: '50%',
  marginLeft: '-350px',
  width: '700px',
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)'
}

class Gnb extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
    activeItem: 'bio'
  }

  render() {
    const { menuFixed } = this.state

    console.log(this.props.width)

    return (
      <div className="Gnb">
        <div className="mobile">
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
                <Menu.Item header as={NavLink} exact to="/">
                  Home
                </Menu.Item>
                <Menu.Item as={NavLink} to="/weather">
                  Weather
                </Menu.Item>

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
      </div>
    )
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  stickTopMenu = () => this.setState({ menuFixed: true })
  unStickTopMenu = () => this.setState({ menuFixed: false })
}

export default Gnb
