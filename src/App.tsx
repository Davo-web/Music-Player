import { useState } from "react";

function App() {
    // const tracks = null;
    const tracks = [
        { id: 1, title: 'Musicfun soundtrack', url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3" },
        { id: 2, title: 'Musicfun soundtrack instrumental', url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3" },
    ]

    const [selectedTrackId, setSelectedTrackId] = useState(null);

    if (tracks === null) {
        return (
            <>
                <h1>Musicfun Player</h1>
                <span>Loading...</span>
            </>
        )
    }

    if (tracks.length === 0) {
        return (
            <>
                <h1>Musicfun Player</h1>
                <span>No tracks</span>
            </>
        )
    }

    else {
        return (
            <>
                <h1>Musicfun Player</h1>
                <button onClick={() => setSelectedTrackId(null)}>reset selection</button>
                <ul>
                    {
                        tracks.map((track) => {
                            return (
                                <li key={track.id} style={{
                                    border: track.id === selectedTrackId ? '1px solid orange' : 'none',
                                }}>
                                    <div onClick={() => {
                                        setSelectedTrackId(track.id)
                                    }}>{track.title}</div>
                                    <audio src={track.url} controls></audio>
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
}

export default App
