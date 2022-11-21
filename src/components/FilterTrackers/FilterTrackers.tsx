export const FilterTrackers = ({onTextChange}: {onTextChange: any}) => {
    return (
        <div>
            <h2>Recherche de Trackers</h2>
            <input type="text" onChange={e => onTextChange(e.target.value)} />
        </div>
    )
}