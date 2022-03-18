import "./Stylesheet.css";
import React from "react";
import Logo1 from "./image/dewa4.jpg";
import Logo2 from "./image/barasuara.jpg";
import Logo3 from "./image/avicii.jpg";
import Logo4 from "./image/johnmayer.jpg";
import Logo5 from "./image/am.jpg";
import PlaylistForm from "./PlaylistForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Main extends React.Component {
  render() {
    const notify = () => {
      toast.error("ERROR", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored"
      });
    };

    return (
      <div className="container">
        <div className="heading-main">
          <div className="heading-left">
            <PlaylistForm />
          </div>
          <div className="heading-right">
            <h3>Recently played</h3>
            <img src={Logo5} alt="RecentlyPlayed" />
            <p title="title">Arctic Monkeys - Arabella</p>
            <button
              className="btn"
              onClick={() =>
                fetch(
                  "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json",
                  {}
                )
                  .then((response) => response.json())
                  .then((response) => console.log(response))
                  .then((response) => {notify()})
                  .catch((error) => <ToastContainer />)
              }
            >
              Button Get API
            </button>
            {/* <ToastContainer /> */}
          </div>
        </div>
        <div className="musics">
          <div className="heading-title">
            <h3>Recommendation for you</h3>
          </div>
          <div className="music">
            <img src={Logo1} alt="Logo" />
            <p>Dewa 19</p>
          </div>
          <div className="music">
            <img src={Logo2} alt="Logo2" />
            <p>Barasuara</p>
          </div>
          <div className="music">
            <img src={Logo3} alt="Logo3" />
            <p>Avicii</p>
          </div>
          <div className="music">
            <img src={Logo4} alt="Logo4" />
            <p>John Mayer</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
