const express = require('express')
var cors = require('cors')

const app = express()

app.use(cors())
console.log('cors setted up') 

app.get('/api/customers', (req, res) => {
    // Load from DB here
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe1'},
        {id: 2, firstName: 'John', lastName: 'Doe2'},
        {id: 3, firstName: 'John', lastName: 'Doe3'},
        {id: 4, firstName: 'John', lastName: 'Doe4'},
    ]

    console.log('Req processed, gonna return ' + customers)
    res.json(customers)
})

const port = process.env.PORT || 8080;

console.log(port)

app.listen(port, () => console.log(`Server started on port ${port}`))