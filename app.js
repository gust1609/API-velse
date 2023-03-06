require('./helpers/functions/express.utils').expressHelper();

// Import third-party packages
const express = require('express');
const boolParser = require('express-query-boolean');
const morgan = require('morgan');
const cors = require('cors');

// Import our own files
const tasksRouter = require('./routes/tasks.route');
const usersRouter = require('./routes/users.route');
const listsRouter = require('./routes/lists.route');

// Express configuration
const app = express();
const PORT = 8000;

// Middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use(boolParser());
app.use(cors());

// Static
app.use(express.static('public'));

// Routes
app.use('/api/tasks', tasksRouter);
app.use('/api/users', usersRouter);
app.use('/api/lists', listsRouter);

// Listen
app.listen(PORT, () => {
    console.log(`Server is listening on http://127.0.0.1:${PORT}/api/ - access routes on /api`);
    console.log(`Static files available on http://127.0.0.1:${PORT} - put them in the /public folder`)
});