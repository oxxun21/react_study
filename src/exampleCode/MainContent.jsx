import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div
            style={{
                width: "700px",
                height: "300px",
                padding: "1.5rem",
                backgroundColor: theme == "light" ? "white" : "black",
                color: theme == "light" ? "black" : "white",
            }}
        >
            <p>하잉 테마 변경 가능</p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    );
}

export default MainContent;