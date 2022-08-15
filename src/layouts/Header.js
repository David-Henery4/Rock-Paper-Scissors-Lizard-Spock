import React from 'react'
import {Names, Score} from "../components/index"

const Header = () => {
  return (
    <header className="header">
      <Names/>
      <Score/>
    </header>
  );
}

export default Header