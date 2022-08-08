import React from 'react'
import {Names, Score} from "../components/index"

const Header = () => {
  return (
    <div className="header">
      <Names/>
      <Score/>
    </div>
  );
}

export default Header