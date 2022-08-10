import React from 'react';
// Inline
import {Close, Rules} from "../SVGs/svgs"
// Img Source
import RulesImage from "../images/image-rules-bonus.svg"
import { useDispatch, useSelector } from "react-redux";
import { toggleRules } from "../toolkit/features/modal/modalSlice";

const RulesSmall = () => {
    const dispatch = useDispatch()
    const { isRulesActive } = useSelector((store) => store.modal)
    return (
      <div
        className={
          isRulesActive ? "rules-small rules-small-active" : "rules-small"
        }
      >
        <h4 className="rules-small__title">RULES</h4>
        {/* <img className="rules-small__img" src={RulesImage} alt="" /> */}
        <Rules className="rules-small__img" />
        <Close
          className="rules-small__close"
          onClick={() => dispatch(toggleRules())}
        />
      </div>
    );
}

export default RulesSmall