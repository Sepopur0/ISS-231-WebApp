const oracledb = require('oracledb');

async function login(username, password)
{
    let connection;
    try {
        connection = await oracledb.getConnection({ user: username, password: password, connectionString: process.env.CONNECTION_STRING});
        console.log("Successfully connected to Oracle Database as", username);
    } catch (err) {
        console.error(err);
    } 
    finally {
        if (connection)
            {
            try {
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
}
module.exports = { login }