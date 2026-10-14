import { useState } from "react";
import { TrackDetail } from "./components/TrackDetail";
import { TracksList } from "./components/TracksList";

export function MainPage() {
    const [trackId, setTrackId] = useState<string | null>(null)

    const handleTrackSelect = (id: string | null): void => {
        setTrackId(id);
    }

    return <div>
        <div style={{ display: "flex", gap: "50px" }}>
            <TracksList
                onTrackSelect={handleTrackSelect}
                selectedTrackId={trackId}
            />
            <TrackDetail trackId={trackId} />
        </div>
    </div>
}