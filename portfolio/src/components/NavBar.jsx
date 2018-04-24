import React, { Component } from 'react'
import styled from 'styled-components';


const Background = styled.div`
background-image: url('https://i.imgur.com/sh59XMd.jpg');
background-size: cover;
width: 100%;
height: 30vh;
border: solid black 2vh;


#logo {
width: 45vw;
height: 20vh;
}
`
const NavText = styled.div`

  display: flex;
  flex-direction: row-reverse;

.text {
  margin-right: 2.5vw;
}
`
export class NavBar extends Component {
  render() {
    return (
      <div>
          <Background>
              <img id="logo" src="https://i.imgur.com/xnD7bwE.png" alt="logo"/>
              <NavText>
              <a class="text" href="#">about</a>
              
              <a class="text" href="#">work</a>
              
              <a class="text" href="#">constact</a>
              </NavText>
          </Background>
      </div>
    )
  }
}

export default NavBar
