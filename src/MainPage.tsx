import { TrackDetail } from "./TrackDetail";
import { TracksList } from "./TracksList";

export function MainPage() {
    return <div>
        <div style={{ display: "flex", gap: "50px" }}>
            <TracksList />
            <TrackDetail />
        </div>
    </div>
}