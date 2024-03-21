import NavBar from "./Components/NavBar";
import AboutUs from "./Pages/AboutUs";

function App() {
    return (<>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"/>
            </head>
            <div className="App">
                <AboutUs></AboutUs>
            </div>
        </>
    );
}

export default App;
