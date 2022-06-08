

const Button = ({displayChanger, text, num}) => {
    return (
        <div className="button-container">
            <button className="go-button" onClick={() => displayChanger(num)}>{text}</button>
        </div>
    )
}

export default Button;