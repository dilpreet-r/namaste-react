const heading = React.createElement("h1", {}, "Hello Dilpreet Randhawa");
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", {}, "Hi There"),React.createElement("h2", {}, "Its Dilpreet")]
    )
);
root.render(parent);
