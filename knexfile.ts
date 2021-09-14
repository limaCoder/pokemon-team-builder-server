import path from 'path'
import 'ts-node/register';


module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
  },
  migrations: {
    extension: 'ts',
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
};