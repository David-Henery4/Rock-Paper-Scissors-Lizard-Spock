import React from 'react'
import { Close, Rules } from "../SVGs/svgs";
import { useDispatch, useSelector } from "react-redux";
import { toggleRules } from "../toolkit/features/modal/modalSlice";


const RulesLarge = () => {
    const dispatch = useDispatch()
    const {isRulesActive} = useSelector(store => store.modal)
    return (
      <>
        {isRulesActive && <div className='overlay'></div>}
        <div
          className={
            isRulesActive ? "rules-large rules-large-active" : "rules-large"
          }
        >
          <div className="rules-large__header">
            <h4 className="rules-large__title">RULES</h4>
            <Close
              className="rules-large__close"
              onClick={() => dispatch(toggleRules())}
            />
          </div>
          <Rules className="rules-large__img" />
        </div>
      </>
    );
}

export default RulesLarge