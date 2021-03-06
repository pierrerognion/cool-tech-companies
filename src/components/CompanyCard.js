import React from "react";
import "./CompanyCard.css";

class CompanyCard extends React.Component {
  render() {
    const style = {
      backgroundImage: `url('${this.props.imageUrl}')`
    };
    return (
      <div className="company" onClick={this.handleClick}>
        <div className="company-picture" style={style}></div>
        <div className="company-title">{this.props.name}</div>
        <div className="company-notes">{this.props.description}</div>
        <div className="company-notes">{this.props.address}</div>
      </div>);

  }

  handleClick = () => {
    this.props.selectCompany(this.props.company);
  }

}

export default CompanyCard;
