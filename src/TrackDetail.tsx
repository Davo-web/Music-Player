import { useEffect, useState } from "react";

export function TrackDetail() {
    const [selectedTrack, setSelectedTrack] = useState(null);
    const selectedTrackId = '82fdfd0c-bfbf-4bd9-9088-b9e4a0af870f';

    useEffect(() => {
        if (!selectedTrackId) {
            return;
        }

        fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`,
            {
                headers: {
                    'api-key': 'c6ae160c-f6ba-42ba-8b81-c9e7e38345a4'
                }
            }
        )
            .then(response => response.json())
            .then(json => setSelectedTrack(json.data))
    }, [selectedTrackId])

    return <div>
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
}