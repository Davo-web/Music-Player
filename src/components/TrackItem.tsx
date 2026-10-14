type AttachmentDto = {
    url: string
}

type Attributes = {
    title: string
    attachments: Array<AttachmentDto>
}

export type TrackListItemOutput = {
    id: string
    attributes: Attributes
}

type Props = {
    isSelected: boolean
    onSelect: (trackId: string) => void
    track: TrackListItemOutput
}

export default function TrackItem({ onSelect, track, isSelected }: Props) {
    const handleClick = (() => { onSelect?.(track.id) })

    return <li key={track.id} style={{
        border: isSelected ? '1px solid orange' : 'none',
    }}>
        <div onClick={handleClick}>{track.attributes.title}</div>
        <audio src={track.attributes.attachments[0]?.url} controls></audio>
    </li>
}