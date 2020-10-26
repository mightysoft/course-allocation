import express from 'express';
import morgan from 'morgan';

const app = express();

import AppError from './utils/appError.js';
import courseRoutes from './routes/courseRoutes.js';
import sessionRoutes from './routes/sessionRoute.js';
import teacherRoutes from './routes/teacherRoute.js';

// view engine
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// Development Logging 
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

// Body parser Middleware
app.use(express.json());

// Use Routes
app.use('/api/courses', courseRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/teachers', teacherRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.all('*', (req, res, next) => {
    next(
      new AppError(`Sorry! Can't find ${req.originalUrl} on this server!`, 404)
    );
});
export default app;