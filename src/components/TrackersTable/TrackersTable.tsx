import { Tracker } from "../../models/Tracker"
import { TrackerRow } from "../TrackerRow/TrackerRow"
import "./TrackersTable.css"
import { groupBy } from '../../helpers/helpers'
import { TrackerCategory } from "../TrackerCategory/TrackerCategory"

export const TrackersTable = ({ trackers }: { trackers: Tracker[] }) => {
    const groupedTrackers = groupBy(trackers, "category")

    console.table(groupedTrackers)

    return (<div className="TableContainer">
        <table>
            <thead>
                <tr>
                    <th>Nom du Tracker</th>
                    <th>Début</th>
                    <th>Fin</th>
                    <th>Durée</th>
                </tr>
            </thead>
            <tbody>
                {groupedTrackers.map((category: any) => {
                    const categoryTrackers = category.values.map((tracker: any, index: any) => <TrackerRow index={index} tracker={tracker} />)

                    return (
                        <TrackerCategory category={category.key}  />
                    )
                })}
            </tbody>
        </table>
    </div>)
}