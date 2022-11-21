import { Tracker } from "../../models/Tracker";
import { diffTime } from '../../helpers/helpers'

export const TrackerRow = ({tracker, index}: {tracker: Tracker, index: number}) => {
    const duration = diffTime(tracker?.starttime, tracker?.endtime )
    return (
        <tr key={index} className="selectedLine">
          <td>{tracker.name}</td>
          <td>{tracker.starttime}</td>
          <td>{tracker.endtime}</td>
          <td>{duration}</td>
        </tr>
      )
}