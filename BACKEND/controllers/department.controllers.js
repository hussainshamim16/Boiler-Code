import Department from '../models/Department.module.js';

// Token Presentation: Display department details based on token
// This function fetches the department's details by the given token.
const getDepartmentByToken = async (req, res) => {
    // Extract token from the URL parameters
    const { token } = req.params;

    try {
        // Find the department using the token in the database
        const department = await Department.findOne({ token });
        
        // If no department found with that token, return a 404 error
        if (!department) {
            return res.status(404).json({ message: 'Department interaction not found' });
        }

        // If the department is found, return its details
        res.status(200).json(department);
    } catch (error) {
        // If any error occurs during database interaction, send a 500 error
        res.status(500).json({ message: error.message });
    }
};

// Scan and Retrieve: Update the department with remarks and status
// This function updates the department's status and remarks, and records an action in the history.
const updateDepartmentInteraction = async (req, res) => {
    // Extract token from the URL parameters and new data from the request body
    const { token } = req.params;
    const { remarks, status, action } = req.body;

    try {
        // Find the department by token and update its details
        const department = await Department.findOneAndUpdate(
            { token }, // Search department by token
            {
                $push: { history: { action, timestamp: new Date() } }, // Push new action to the history array
                remarks, // Update the remarks field
                status // Update the status field
            },
            { new: true } // Return the updated department
        );

        // If the department wasn't found, return a 404 error
        if (!department) {
            return res.status(404).json({ message: 'Department interaction not found' });
        }

        // Return the updated department data
        res.status(200).json({ message: 'Department interaction updated successfully', department });
    } catch (error) {
        // If any error occurs during the update, send a 500 error
        res.status(500).json({ message: error.message });
    }
};

// Add New Department Interaction
// This function adds a new department interaction record with the given token, beneficiary, and purpose.
const addNewInteraction = async (req, res) => {
    // Extract token, beneficiary, and purpose from the request body
    const { token, beneficiary, purpose } = req.body;

    try {
        // Create a new department interaction using the provided data
        const newInteraction = new Department({
            token,
            beneficiary,
            purpose
        });

        // Save the new interaction to the database
        const savedInteraction = await newInteraction.save();

        // Return a success message along with the saved interaction data
        res.status(201).json({ message: 'New department interaction created successfully', savedInteraction });
    } catch (error) {
        // If any error occurs while saving, send a 500 error
        res.status(500).json({ message: error.message });
    }
};

// Export the controller functions so they can be used in the routes
export { getDepartmentByToken, updateDepartmentInteraction, addNewInteraction };
