
const Button = (props) => {
    return (
        <div className="btn__container">
            <button className="btn">{props.text}</button>
        </div>
    )
}

export default Button;