import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
    constructor() {
        super()
        this.state = {
            customers: []
        }
    }

    // Following code runs automatically once componet is mounted
    componentDidMount() {
        // We do not have to type full path because we already defined the proxy on client package.json
        // fetch('http://localhost:8080/api/customers')
        //     .then(res => res.json())
        //     .then(customers => this.setState({customers: customers}, () => console.log('Customers fetched...', customers)))
    }

    render() {
        return (
            <div>
                <h2>Customers</h2>
                <ul>
                    {this.state.customers.map(customer =>
                        <li key={customer.id}>{customer.firstName} {customer.lastName}</li>)}
                </ul>
            </div>
          );
    }
}

export default Customers;
