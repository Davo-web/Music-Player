import { useState } from "react";
import { TrackDetail } from "./TrackDetail";
import { TracksList } from "./TracksList";

export function MainPage() {
    const [
        trackId,
        setTrackId
    ] = useState(null)

    const handleTrackSelect = (id) => {
                setTrackId(id);
            }

    return <div>
        <div style={{ display: "flex", gap: "50px" }}>
            <TracksList onTrackSelect = {handleTrackSelect} selectedTrackId={trackId}/>
            <TrackDetail trackId={trackId} />
        </div>
    </div>
}