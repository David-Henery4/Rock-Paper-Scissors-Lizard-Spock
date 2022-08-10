import React from 'react'

const PreGameOption = (pos,colors,svg) => {
    return (
        <div
        className={`${pos} icon-wrap`}
        style={{
        background: `linear-gradient(${colors.colorLight}, ${colors.colorDark})`,}}>
            <div className="icon">{svg}</div>
        </div>
    );
}

export default PreGameOption