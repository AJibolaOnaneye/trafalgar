import React from 'react';
import { Link } from 'react-router-dom'

const ButtonWhite = (props) => {
    return (
        <div>
            <Link to={props.link}> <button className='button_white'>  {props.name} </button></Link>
        </div>
    )
}

export default ButtonWhite
