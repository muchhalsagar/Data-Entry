const Employee = require('../models/employee');


/******************************************************
 * @add_employee
 * @route http://localhost:8000/user/add_employee
 * @description Save New Employee in Database
 * @returns Employee object
 ******************************************************/
const add_employee = async(req, res) => {
    try {
        const { name, email, mobile, address, salary, designation } = req.body;
        // Check required fields are provided
        if (!name || !email || !mobile) {
            return res.status(400).json({ message: 'All fields are required.' });
        }
        // Check if the email and accesscode are unique
        const existingEmployee = await Employee.findOne({ $or: [{ email }] });
        if (existingEmployee) {
            return res.status(400).json({ message: 'Email  already exists.' });
        }
        const newEmployee = new Employee({
            name,
            email,
            mobile,
            address,
            salary,
            designation,
        });
        // Save the new employee
        const savedEmployee = await newEmployee.save();
        res.status(201).json({ message: 'Employee added successfully', employee: savedEmployee });
    } catch (error) {
        console.error('Error adding employee:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

/******************************************************
 ** @get_all_employee
 * @route http://localhost:8000/user/get_all_employee
 * @description Get all employees from the database with Pagination Functionality
 * @returns Array of Employee objects
 ******************************************************/
const get_all_employee = async(req, res) => {
    try {
        const defaultPage = 1;
        const defaultLimit = 10;
        // Get page number and limit from query parameters
        const { page = defaultPage, limit = defaultLimit } = req.query;
        const pageNumber = parseInt(page, 10);
        const limitNumber = parseInt(limit, 10);
        if (isNaN(pageNumber) || isNaN(limitNumber) || pageNumber < 1 || limitNumber < 1) {
            return res.status(400).json({ message: 'Invalid page or limit values.' });
        }
        // Get the total number of Employee
        const totalUsers = await Employee.countDocuments();
        // Calculate the total number of pages
        const totalPages = Math.ceil(totalUsers / limitNumber);
        // Ensure the requested page is within bounds
        if (pageNumber > totalPages) {
            return res.status(400).json({ message: 'Invalid page number.' });
        }
        // Calculate the skip value based on the page number and limit
        const skip = (pageNumber - 1) * limitNumber;
        const allemployee = await Employee.find().skip(skip).limit(limitNumber);
        res.status(200).json({
            allemployee,
            currentPage: pageNumber,
            totalPages,
            totalUsers,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

/******************************************************
 * @delete_employee
 * @route http://localhost:8000/user/delete_employee/:id
 * @description Delete an employee by ID
 * @returns Success message if deletion is successful
 ******************************************************/
const delete_employee = async(req, res) => {
    try {
        const employeeId = req.params.id;
        // Check if EmployeeId is provided
        if (!employeeId) {
            return res.status(400).json({ message: 'Employee ID is required.' });
        }
        const result = await Employee.deleteOne({ _id: employeeId });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'User not found.' });
        }
        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

/******************************************************
 * @edit_employee
 * @route http://localhost:8000/user/edit_employee/:id
 * @description Edit an employee by ID
 * @returns Success message and the updated Employee object
 ******************************************************/
const edit_employee = async(req, res) => {
    try {
        const employeeId = req.params.id; // Extract Employee ID from the URL parameter
        const { name, email, password, accesscode, mobile, address, salary } = req.body;
        if (!employeeId) {
            return res.status(400).json({ message: 'Employee ID is required.' });
        }
        const updatedemployee = await Employee.findByIdAndUpdate(
            employeeId, {
                name,
                email,
                password,
                accesscode,
                mobile,
                address,
                salary
            }, { new: true }
        );
        if (!updatedemployee) {
            return res.status(404).json({ message: 'Employee not found.' });
        }
        res.status(200).json({ message: 'Employee updated successfully', Employee: updatedemployee });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

/******************************************************
 * @getemployee_by_id
 * @route http://localhost:8000/user/getemployee_by_id/:id
 * @description Get Employee by ID
 * @returns User object
 ******************************************************/
const getemployee_by_id = async(req, res) => {
    try {
        const getid = req.params.id;
        const user = await Employee.findById(getid); // Corrected this line by using findById
        res.status(200).json({ User: user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

/******************************************************
 * @search_employee
 * @route http://localhost:8000/user/search_employee
 * @description Search Employee by Name
 * @returns Employee object
 ******************************************************/
const search_employee = async(req, res) => {
    try {
        const { name } = req.body; // Destructuring to get the 'name' property
        const query = { name: { $regex: new RegExp(name, 'i') } };
        const results = await Employee.find(query);
        console.log(results);
        if (name == "") {
            return res.status(404).json({ message: 'Please Enter Any Values for Search.' });
        }
        if (!results.length) {
            return res.status(404).json({ message: 'Employee not found with the specified name.' });
        }

        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error!' });
    }
};

module.exports = { add_employee, get_all_employee, delete_employee, edit_employee, getemployee_by_id, search_employee };