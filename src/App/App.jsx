import ButtonRating from "./ButtonRating/ButtonRating"
import Submit from "./Submit/Submit"
import React from "react"

import './App.css'
const App = () => {
    const [numero, setNumber] = React.useState(0)

    return(
            <>
            <form>
            <img src="../../../images/icon-star.svg" alt="icon star" />
            <h1>How did you do?</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, quasi nostrum illum ipsam magnam aspernatur quas, tempora rerum obcaecati labore dolore dolor! Perspiciatis ipsa voluptatibus error eaque ad quam asperiores.</p>
            <span>
                <ButtonRating 
                number='1'
                value='1'
                onClick={() => setNumber('1')}
                />
                <ButtonRating 
                number='2'
                value='2'
                onClick={() => setNumber('2')}
                />
                <ButtonRating 
                number='3'
                value='3'
                onClick={() => setNumber('3')}
                />
                <ButtonRating 
                number='4'
                value='4'
                onClick={() => setNumber('4')}
                />
                <ButtonRating 
                number='5'
                value='5'
                onClick={() => setNumber('5')}
                />
            </span>
            <Submit
            textButton='Submit' />
        </form>
        </>
    )
}

export default App