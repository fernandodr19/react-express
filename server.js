const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    // Load from DB here
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe1'},
        {id: 2, firstName: 'John', lastName: 'Doe2'},
        {id: 3, firstName: 'John', lastName: 'Doe3'},
    ]

    res.json(customers)
})

const port = 8080;
app.listen(port, () => console.log(`Server started on port ${port}`))