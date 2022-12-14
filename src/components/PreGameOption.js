import React from 'react'
import { useDispatch } from 'react-redux';
import { handlePlayerSelection, handleHouseSelection, handleGameFinished } from '../toolkit/features/game/gameSlice';

const PreGameOption = (choice) => {
  // NEED the ".icon" for the svg component
  const { preGameGridPos, colors, id,  } = choice;
  const dispatch = useDispatch()
  //
  return (
    <div
      className={`${preGameGridPos} icon-wrap`}
      style={{
        background: `linear-gradient(${colors.colorDark}, ${colors.colorLight})`,
        borderBottom: `0.7em solid ${colors.shadowColor}`,
      }}
      onClick={() => {
        dispatch(handlePlayerSelection(id));
        setTimeout(() => {
          dispatch(handleHouseSelection());
        }, 1500);
        setTimeout(() => {
          dispatch(handleGameFinished());
        }, 3000);
      }}
    >
      <div className="icon">
        <choice.icon />
      </div>
    </div>
  );
};

export default PreGameOption