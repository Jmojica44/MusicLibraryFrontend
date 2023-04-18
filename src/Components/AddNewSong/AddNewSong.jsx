import React, { useState } from 'react';

const AddNewSong = (props) => {

    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [genre, setGenre] = useState("");
    const [release_date, setReleaseDate] = useState("");
    const [running_time, setRunningTime] = useState(0)

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album, album,
            genre: genre,
            release_date: release_date,
            running_time: running_time
        };
    console.log(newSong);
    props.addNewSongProperty(newSong)
}

    return (
        <form onSubmit={handleSubmit} clasName ="form-grid">
            <div className="form-group">
                <label> Title </label>
                <input type="text" className="form-control" id="inputTitle" placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div className="form-group">
                <label> Artist </label>
                <input type="text" className="form-control" id="inputArtist" placeholder="Artist" value={artist} onChange={(event) => setArtist(event.target.value)} />
            </div>
            <div className="form-group">
                <label> Album </label>
                <input type="text" className="form-control" id="inputAlbum" placeholder="Album" value={album} onChange={(event) => setAlbum(event.target.value)} />
            </div>
            <div className="form-group">
                <label> Genre </label>
                <input type="text" className="form-control" id="inputGenre" placeholder="Genre" value={genre} onChange={(event) => setGenre(event.target.value)} />
            </div>
            <div className="form-group">
                <label> Release Date </label>
                <input type="date" className="form-control" value={release_date} onChange={(event) => setReleaseDate(event.target.value)} />
            </div>
            <div className="form-group">
                <label> Running Time </label>
                <input type="number" className="form-control" value={running_time} onChange={(event) => setRunningTime(event.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary" style={{"margin-top": "1em"}}> Add </button>
        </form>
    )
};

export default AddNewSong