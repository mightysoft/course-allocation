import express from 'express';
import morgan from 'morgan';

const app = express();

import cors from 'cors'
import AppError from './utils/appError.js';
import courseRoutes from './routes/courseRoutes.js';
import sectionRoutes from './routes/sectionRoute.js';
import teacherRoutes from './routes/teacherRoute.js';
import levelRoutes from './routes/levelRoutes.js';
import batchRoutes from './routes/batchRoutes.js';
import termRoutes from './routes/termRoutes.js';
import courseAllocationRoutes from './routes/courseAllocationRoute.js';


// 1) GLOBAL MIDDLEWARES
// Implement CORS
app.use(cors());

app.options('*', cors());
// app.options('/api/v1/tours/:id', cors());

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
app.use('/api/sections', sectionRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/levels', levelRoutes);
app.use('/api/terms', termRoutes);
app.use('/api/batchs', batchRoutes);
app.use('/api/course-Allocation', courseAllocationRoutes);

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