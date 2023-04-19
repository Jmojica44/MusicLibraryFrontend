import React, { useState } from 'react';
import './MusicTable.css'


const MusicTable = (props) => {

    return (
        <div>
            <table className="table table-striped table-light">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Artist</th>
                        <th scope="col">Album</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Release Date</th>
                        <th scope="col">Running Time</th>
                    </tr>
                </thead>
                <tbody>
                    {props.parentSongs.map((song, index) => {
                        return(
                            <tr key={song.id}>
                                <td> {index + 1}</td>
                                <td> {song.title}</td>
                                <td> {song.artist}</td>
                                <td> {song.album}</td>
                                <td> {song.genre}</td>
                                <td> {song.release_date}</td>
                                <td> {song.running_time}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

function MusicSearch() {
    const [query, setQuery] = useState("");
    const [filteredData, setFilterData] = useState([]);

    function handleSearch(event) {
        const newQuery = event.target.value;
        setQuery(newQuery);
        const newData = query.filter(
            (item) =>
            item.title.includes(newQuery) ||
            item.artist.includes(newQuery) ||
            item.album.includes(newQuery) ||
            item.genre.includes(newQuery) ||
            item.releaseDate.includes(newQuery)
        );
        setFilterData(newData);
    }

    return (
        <div>
            <input type="text" placeholder="Search" onChange={handleSearch} />
            {filteredData.length > 0 ? (
                <MusicTable data={filteredData} />
            ) : (
                <MusicTable data={MusicSearch} />
            )}
        </div>
    )
}

const data = [
    {
        id: 1,
        title: "",
        artist: "Kings of Leon",
        album: "Album",
        genre: "R&B",
        releaseDate: "01/01/01",
        runningTime: "",
    }
]

export default MusicTable;