import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleRules } from '../toolkit/features/modal/modalSlice'


const Footer = () => {
  const dispatch = useDispatch()
  //
  const handleRulesClick = () => {
    dispatch(toggleRules())
  }
  //
  return (
    <footer className='footer'>
      <button className='footer__btn' onClick={handleRulesClick}>
        RULES
      </button>
    </footer>
  )
}

export default Footer