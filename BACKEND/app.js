import express from 'express' ;
import dotenv from 'dotenv' ;
import connectDB from './config/db.js' ;
// import user routes
import userRoutes from './routes/user.routes.js'

const app = express();
const port = process.env.PORT;

// Middleware
app.use(express.json());
dotenv.config();

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!hussain shamim');
});
// All User Routes
app.use('/api/', userRoutes);

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });