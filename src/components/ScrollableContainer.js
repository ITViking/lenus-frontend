import React from "react";

export default class ScrollableContainer extends React.Component {
  constructor(props) {
    super(props);

    this.entries = this.props.dataEntries.map((entry, i) => {
      let className = "light-blue entry";
      if(i % 2 === 0) {
        className = "white entry";
      }

      const htmlEntry = 
      <div className={className} key={i.toString()}>
        <p><strong>{entry.weight}</strong> kg</p>
        <p className="sm-font">{entry.createdAt}</p>
      </div>;
      return htmlEntry;
    });
  }

  render() {
    return (
      <div className="scrollable-container">{this.entries}</div>
    )
  };
}
