import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("Server is ready")
});

app.get('/api/users',(req,res)=>{
    const users = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "student",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "teacher",
  },
  {
    id: 3,
    name: "Rahul Singh",
    role: "student",
  },
  {
    id: 4,
    name: "Sneha Patel",
    role: "teacher",
  },
  {
    id: 5,
    name: "Aditya Kumar",
    role: "student",
  },
  {
    id: 6,
    name: "Neha Gupta",
    role: "teacher",
  },
  {
    id: 7,
    name: "Rohan Mehta",
    role: "student",
  },
  {
    id: 8,
    name: "Ananya Joshi",
    role: "teacher",
  },
  {
    id: 9,
    name: "Vikram Rao",
    role: "student",
  },
  {
    id: 10,
    name: "Ishita Kapoor",
    role: "teacher",
  },
];

    res.send(users)
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server running at port: ${port}`)
})