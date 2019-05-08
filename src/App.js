import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const companies = [
  {
      name: 'Bankin',
      description: 'Finance and budget tracker.',
      imageURL: 'https://via.placeholder.com/362x200',
      address: '4 Rue de la Pierre Levée, 75011 Paris'
  },
  {
      name: 'Lydia',
      description: 'Micro-payment app.',
      imageURL: 'https://via.placeholder.com/362x200',
      address: '137 rue d’Aboukir, 75002 Paris'
  }]

class App extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card-deck">
              <div className="card">
                <img className="card-img-top" src="https://via.placeholder.com/362x200" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="https://via.placeholder.com/362x200" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="https://via.placeholder.com/362x200" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;