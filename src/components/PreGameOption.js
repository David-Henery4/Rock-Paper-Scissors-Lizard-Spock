import React from 'react'
// import { Lizard } from '../SVGs/svgs'
import { useDispatch } from 'react-redux';
import { handlePlayerSelection } from '../toolkit/features/game/gameSlice';

const PreGameOption = (choice) => {
  // NEED the ".icon" for the svg component
  const { preGameGridPos, colors, id,  } = choice;
  const dispatch = useDispatch()
  //
  return (
    <div
      className={`${preGameGridPos} icon-wrap`}
      style={{
        background: `linear-gradient(${colors.colorLight}, ${colors.colorDark})`,
      }}
      onClick={() => dispatch(handlePlayerSelection(id))}
    >
      <div className="icon">
        <choice.icon/>
      </div>
    </div>
  );
};

export default PreGameOption