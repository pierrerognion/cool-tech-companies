import React, { Component } from "react";
//import logo from './logo.svg';
import GoogleMapReact from "google-map-react";

import CompanyCard from "./components/CompanyCard";
import Marker from "./components/marker";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      allcompanies: [],
      selectedCompany: null,
      search: ""
    };
  }

  componentDidMount() {
    fetch(
      `https://api.airtable.com/v0/${
        process.env.REACT_APP_AIRTABLE_BASE_KEY
      }/Cool%20Companies?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`
    ) // Fetch data from Airtable Base with companies
      .then(response => response.json())
      .then(data => {
        this.setState({
          companies: data.records,
          allcompanies: data.records,
          selectedCompany: data.records[0]
        });
      });
  }

  selectCompany = company => {
    this.setState({
      selectedCompany: company
    });
  };

  handleSearch = event => {
    this.setState({
      search: event.target.value,
      companies: this.state.allcompanies.filter(company =>
        new RegExp(event.target.value, "i").exec(company.fields.Name)
      )
    });
  };

  render() {
    let center = {
      lat: 48.8566,
      lng: 2.3522
    };

    if (this.state.selectedCompany) {
      center = {
        lat: this.state.selectedCompany.fields.lat,
        lng: this.state.selectedCompany.fields.lng
      };
    }

    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.search}
              onChange={this.handleSearch}
            />
          </div>
          <div className="companyCards">
            {this.state.companies.map(company => {
              return (
                <CompanyCard
                  key={company.id}
                  company={company}
                  name={company.fields.Name}
                  description={company.fields.Notes}
                  address={company.fields.Address}
                  imageUrl={company.fields.imageURL[0].url}
                  selectCompany={this.selectCompany}
                />
              );
            })}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact // Google Map Component
            center={center}
            zoom={14}
            bootstrapURLKeys={{
              key: `${process.env.REACT_APP_GOOGLE_API_KEY}`
            }}
            yesIWantToUseGoogleMapApiInternals
          >
            {this.state.companies.map(company => {
              // Map markers
              return (
                <Marker // A marker is returned for each company
                  {...company}
                  key={company.id}
                  selected={company === this.state.selectedCompany}
                  lat={company.fields.lat}
                  lng={company.fields.lng}
                  name={company.fields.Name}
                />
              );
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
