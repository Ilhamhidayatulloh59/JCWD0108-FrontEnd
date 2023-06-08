import styled from "styled-components"

import "./home.css"

const StyledButton = styled.button`
    background-color: black;
    font-size: 32px;
    color: white;
`

function Home({ message, info }) {
    return (
        <div>
            <h1 className="message">{message}</h1>
            <p style={{ color: "green", backgroundColor: "rgb(0, 0, 255)" }}>{info}</p>
            <StyledButton>Sign in</StyledButton>
        </div>
    )
}

export default Home