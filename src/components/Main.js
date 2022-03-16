import "./Stylesheet.css";
import React from "react";
import Logo1 from "./image/dewa4.jpg";
import Logo2 from "./image/barasuara.jpg";
import Logo3 from "./image/avicii.jpg";
import Logo4 from "./image/johnmayer.jpg";
import PlaylistForm from "./PlaylistForm";

class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <PlaylistForm />
                <div className="heading-title">
                    <h3>Recomendation for you</h3>
                </div>
                <div className="musics">
                    <div className="music">
                        <img src={ Logo1 } alt = "Logo"/>
                        <p>Dewa 19</p>
                    </div>
                    <div className="music">
                        <img src={ Logo2 } alt = "Logo2"/>
                        <p>Barasuara</p>
                    </div>
                    <div className="music">
                        <img src={ Logo3 } alt = "Logo3"/>
                        <p>Avicii</p>
                    </div>
                    <div className="music">
                        <img src={ Logo4 } alt = "Logo4"/>
                        <p>John Mayer</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;