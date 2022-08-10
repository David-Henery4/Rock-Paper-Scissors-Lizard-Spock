import React from 'react'
import { Lizard } from '../SVGs/svgs'

const PreGameOption = (details) => {
    // NEED the ".icon" for the svg component
    const {pos,colors} = details
    return (
      <div
        className={`${pos} icon-wrap`}
        style={{
          background: `linear-gradient(${colors.colorLight}, ${colors.colorDark})`,
        }}
      >
        <div className="icon"><details.icon/></div>
      </div>
    );
}

export default PreGameOption