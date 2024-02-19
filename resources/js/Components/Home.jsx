import React from "react";
import ReactDOM from "react-dom/client";
import Hello from "./Hello";
import Test from "./Test";
const Home = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Hello</h1>
            <Hello />
            <Test />
        </div>
    );
};

export default Home;
ReactDOM.createRoot(document.getElementById("root")).render(<Home />);
