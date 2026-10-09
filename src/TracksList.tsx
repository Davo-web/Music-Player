import { useEffect, useState } from "react";
import TrackItem from './TrackItem';

export function TracksList(props) {
    const {
        onTrackSelect,
        selectedTrackId
    } = props

    const [tracks, setTracks] = useState(null);

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

    const handleResetClick = () => {
        props.onTrackSelect?.(null);
    }

    return <div>
        <button onClick={handleResetClick}>reset</button>
        <ul>
            {
                tracks?.map((track) => {
                    const handleClick = (trackId) => {
                        onTrackSelect?.(trackId);
                    }

                    return <TrackItem key={track.id}
                                      track={track}
                                      isSelected={track.id === selectedTrackId}
                                      selectedTrackId={selectedTrackId}
                                      onSelect={handleClick}
                            />
                })
            }
        </ul >
    </div>
}