const Modal = ({numero, modal}) => {
    if(modal == true){
            return(
                <article>
                    <img src="../../../images/illustration-thank-you.svg" alt="phone icon" />
                    <span>You selected out {numero} of 5</span>
                    <h2>Thank You!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae aliquam quod atque, quia sed neque eaque similique, perferendis aliquid asperiores repellendus saepe iste maxime, at officia consequatur nostrum cumque?</p>
                </article>
            )
        } else {
            return null
        }
}

export default Modal