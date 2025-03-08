const router = require('express').Router();
const User = require('../models/user');

// POST Route to Add a Student
router.post('/students', async (req, res) => {
    const { name, email, phone, gender, resume, subject, about } = req.body;

    try {
        const user = new User({
            name,
            email,
            phone,
            gender,
            resume,
            subject,
            about,
        });

        await user.save();
        res.status(201).json({ message: "Student added successfully", user });
    } catch (error) {
        console.error("Error saving student:", error);
        res.status(500).json({ error: "Failed to add student" });
    }
});

// GET Route to Fetch All Students
router.get('/students', async (req, res) => {
    try {
        const users = await User.find(); // Fetch all students
        res.json(users);
    } catch (error) {
        console.error("Error fetching students:", error);
        res.status(500).json({ error: "Failed to fetch students" });
    }
});
router.get('/user/:id',async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
      } catch (error) {
        res.status(500).json({ message: "Server Error", error });
      }
});
router.delete('/user/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
router.put('/update/students/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully", updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});


// Export the Router Correctly
module.exports = router;

