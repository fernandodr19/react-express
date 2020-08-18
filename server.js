const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('https://fdr-react-express.herokuapp.com/api/customers', (req, res) => {
    // Load from DB here
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe1'},
        {id: 2, firstName: 'John', lastName: 'Doe2'},
        {id: 3, firstName: 'John', lastName: 'Doe3'},
    ]

    res.json(customers)
})

const port = process.env.PORT || 8080;

console.log(port)

app.listen(port, () => console.log(`Server started on port ${port}`))