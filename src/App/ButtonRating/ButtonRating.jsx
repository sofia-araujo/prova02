import React from "react"
import './ButtonRating.css'

const ButtonRating = ({number}) => {
    const [color, setColor] = React.useState('')
    return(
        <button type="button" className="rating" style={{backgroundColor: color}} onClick={() => setColor('hsl(25, 97%, 53%)')}
        onMouseOver={() => setColor('.gray')}>{number}</button>
    )
}

export default ButtonRating