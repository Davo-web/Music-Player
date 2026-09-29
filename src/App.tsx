import { useEffect, useState } from "react";

function App() {
    const [tracks, setTracks] = useState(null)

    const [selectedTrack, setSelectedTrack] = useState(null);
    const [selectedTrackId, setSelectedTrackId] = useState(null);

    useEffect(() => {
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks',
            {
                headers: {
                    'api-key': 'c6ae160c-f6ba-42ba-8b81-c9e7e38345a4'
                }
            }
        )
            .then(response => response.json())
            .then(json => setTracks(json.data))
    }, [])

    if (tracks === null) {
        return (
            <>
                <h1>Musicfun Player</h1>
                <span>Loading...</span>
            </>
        )
    }

    if (tracks?.length === 0) {
        return (
            <>
                <h1>Musicfun Player</h1>
                <span>No tracks</span>
            </>
        )
    }

    return (
        <>
            <h1>Musicfun Player</h1>
            <button onClick={() => {
                setSelectedTrackId(null);
                setSelectedTrack(null);
            }}>
                reset selection
            </button>
            <div style={{
                display: "flex",
                gap: "50px",
            }}>
                <ul>
                    {
                        tracks?.map((track) => {
                            return (
                                <li key={track.id} style={{
                                    border: track.id === selectedTrackId ? '1px solid orange' : 'none',
                                }}>
                                    <div onClick={() => {
                                        setSelectedTrackId(track.id);
                                        setSelectedTrack(null);

                                        fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${track.id}`,
                                            {
                                                headers: {
                                                    'api-key': 'c6ae160c-f6ba-42ba-8b81-c9e7e38345a4'
                                                }
                                            }
                                        )
                                            .then(response => response.json())
                                            .then(json => setSelectedTrack(json.data))
                                    }}>{track.attributes.title}</div>
                                    <audio src={track.attributes.attachments[0]?.url} controls></audio>
                                </li>
                            )
                        })
                    }
                </ul>
                <div>
                    <h2>Details</h2>
                    {selectedTrackId !== null && selectedTrack === null && <span>Loading...</span>}
                    {!selectedTrackId && 'Track is not selected'}
                    {
                        selectedTrack && (
                            <div>
                                <h3>{selectedTrack.attributes.title}</h3>
                                <h4>Lyrics</h4>
                                <p>
                                    {selectedTrack.attributes.lyrics ?? 'no lyrics'}
                                </p>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default App;