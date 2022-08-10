import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleRules } from '../toolkit/features/modal/modalSlice'


const Footer = () => {
  // const {isRulesActive} = useSelector(store => store.modal)
  const dispatch = useDispatch()
  //
  const handleRulesClick = () => {
    dispatch(toggleRules())
  }
  //
  return (
    <div className='footer'>
      <button className='footer__btn' onClick={handleRulesClick}>
        RULES
      </button>
    </div>
  )
}

export default Footer