import { useEffect, useState } from "react";

export function TrackDetail({trackId}) {
    const [selectedTrack, setSelectedTrack] = useState(null);

    useEffect(() => {
        if (!trackId) {
            setSelectedTrack(null);
            return;
        }

        fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`,
            {
                headers: {
                    'api-key': 'c6ae160c-f6ba-42ba-8b81-c9e7e38345a4'
                }
            }
        )
            .then(response => response.json())
            .then(json => setSelectedTrack(json.data))
    }, [trackId])

    return <div>
        <h2>Details</h2>
        {trackId !== null && selectedTrack === null && <span>Loading...</span>}
        {!trackId && 'Track is not selected'}
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
}