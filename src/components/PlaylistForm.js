import React from "react";
import "./Stylesheet.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class PlaylistForm extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       isSubmitted: false,
    //     };
    //   }

    // handleSubmit() {
    // this.setState({isSubmitted: true});
    // }
    render() {
        const notify = () => {
            toast("Success");
        }

        return (
            <div className="playlistForm">
                <div className="heading-title">
                    <h1>Create</h1>
                    <h1>Playlist.</h1>
                </div>
                <div className="formControl">
                    <p>Title</p>
                    <input
                        placeholder="Write title here..."
                    />
                    <p>Description</p>
                    <textarea
                        placeholder="Write description here..."
                    />
                    <input
                        type="submit"
                        value="Create"
                        onClick={notify}
                    />
                </div>
            </div>
        );
    }
}

export default PlaylistForm;