import { useEffect, useState } from "react";
import TrackItem from './TrackItem';
import type { TrackListItemOutput } from './TrackItem'

type Props = {
    selectedTrackId: string | null
    onTrackSelect: (id: string | null) => void
}

export function TracksList({ onTrackSelect, selectedTrackId }: Props) {
    const [tracks, setTracks] = useState< Array<TrackListItemOutput> | null >(null);

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
        onTrackSelect?.(null);
    }

    const handleClick = (trackId: string) => {
        onTrackSelect?.(trackId);
    }

    return <div>
        <button onClick={handleResetClick}>reset</button>
        <hr />
        <ul>
            {
                tracks?.map((track) => {
                    return <TrackItem key={track.id}
                        track={track}
                        isSelected={track.id === selectedTrackId}
                        onSelect={handleClick}
                    />
                })
            }
        </ul >
    </div>
}