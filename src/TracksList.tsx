import { useEffect, useState } from "react";

export function TracksList() {
    const [tracks, setTracks] = useState(null);
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

    return <ul>
        {
            tracks?.map((track) => {
                return (
                    <li key={track.id} style={{
                        border: track.id === selectedTrackId ? '1px solid orange' : 'none',
                    }}>
                        <div onClick={() => {
                            setSelectedTrackId(track.id);
                        }}>{track.attributes.title}</div>
                        <audio src={track.attributes.attachments[0]?.url} controls></audio>
                    </li>
                )
            })
        }
    </ul >
}