import React from "react";
import { Link } from 'react-router-dom'

export default class EntriesContainer extends React.Component {
  render() {
    function prettyDate(isoString) {
      const dateObj = new Date(isoString);
      return dateObj.toLocaleDateString("da-dk");
    };
    const entries = this.props.dataEntries.map((entry, i) => {
      const htmlEntry = 
        <Link to={"/weight/" + entry.id} className="white entry" key={i.toString()}>
          <span className="fs-m">{prettyDate(entry.createdAt)}</span>
          <span><strong>{entry.weight}</strong> kg</span>
        </Link>;
      return htmlEntry;
    });

    return (
      <div className="m-40">{entries}</div>
    )
  };
}
