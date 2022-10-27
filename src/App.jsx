import { useState } from "react";
import "./App.css";
import styled from "styled-components/macro";

function App() {
    const [count, setCount] = useState(0);

    const Wrapper = styled.div`
        background-color: red;
    `;

    return (
        <Wrapper>
            <div className="App"></div>
        </Wrapper>
    );
}

export default App;
