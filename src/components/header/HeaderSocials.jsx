import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiNetlify} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/19972309daiana-eger-michels/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/DaianaEgerMichels' target="_blank"><FaGithub/></a>
        <a href='https://app.netlify.com/teams/daianaegermichels/' target="_blank"><SiNetlify/></a>
    </div>
  )
}

export default HeaderSocials