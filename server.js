const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Temporary storage for complaints
let complaints = [];

// Home Route
app.get("/", (req, res) => {
    res.send("CivicDNA Backend Running");
});

// Add Complaint
app.post("/api/complaints", (req, res) => {

    console.log("New Complaint Received:");
    console.log(req.body);

    complaints.push(req.body);

    res.json({
        success: true,
        message: "Complaint Added Successfully"
    });

});

// Get All Complaints
app.get("/api/complaints", (req, res) => {

    res.json(complaints);

});

// Total Complaints Count
app.get("/api/complaints/count", (req, res) => {

    res.json({
        totalComplaints: complaints.length
    });

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});