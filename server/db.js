const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    password: "postgres",
    host: "husseinmac",
    port: 5432,
    database: "my_database"
})

client.connect()
.then(() => console.log("Connected successfuly"))
.then(() => client.query("select * from todo"))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())