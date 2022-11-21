import { useState } from 'react';
import db from '../../data';
import { FilterTrackers } from '../FilterTrackers/FilterTrackers';
import { TrackersTable } from '../TrackersTable/TrackersTable';
import "./TrackersApp.css"

export const TrackersApp = () => {
    const [allTrackers, setAllTrackers] = useState(db);
    const [filterText, setFilterText] = useState("");
    const [selectedTracker, setSelectedTracker] = useState({})

    const handleTextChange = (text: string) => {
        setFilterText(text);
        const filteredDb = db.filter(tracker => tracker.name.toLowerCase().indexOf(text) !== -1);
        setAllTrackers(filteredDb);
    }

    return (
        <div>
            <div>Il y a {allTrackers.length} trackers</div>
            <div className="main">
                <div>
                    <FilterTrackers onTextChange={handleTextChange} />
                </div>
                <div>
                    <TrackersTable trackers={allTrackers} />
                </div>
            </div>
        </div>)
}