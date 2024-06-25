const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require('multer');
const bodyParser = require('body-parser');

router.use(express.json());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// const bcrypt = require('bcrypt');
const { signup, signin, adminsignin, add_terms, get_terms, get_terms_by_id, search_agreement, changePassword, getTodaysRegistrations } = require('../controller/home.controller');
const { add_employee, get_all_employee, delete_employee, edit_employee, getemployee_by_id, search_employee } = require('../controller/employee.controller');
const { add_user, get_all_user, getuser_by_status, update_user_status, delete_user, edit_user, search_users, getuser_by_id, userlogin, search_user_by_name, user_pagination, sendUserInfo, forgot_password, verify_otp, submit_password, update_endDate, recovery_user, search_user_recovery, get_report_by_id, get_incorrect_assignments, get_successOrfreeze_user } = require('../controller/user.controller');
const {
    add_assignment,
    get_assignments,
    get_totalAssignment,
    get_assignment_details,
    refresh_get_assignment_details,
} = require("../controller/assignment.controller");

const { update_assignment_Details } = require("../controller/update_assignmentDetails.controller");

// Create a multer storage for handling file uploads
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, 'uploads/'); // Set the destination folder for file uploads
//     },
//     filename: function(req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     },
// });
const storage = multer.memoryStorage();

const upload = multer({ storage: storage });
router.use('/uploads', express.static(path.join(__dirname, 'uploads')));
router.use('/static', express.static(path.join(__dirname, 'static')));
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/adminsignin", adminsignin);
router.post('/add_terms', upload.fields([
    { name: 'signature', maxCount: 1 },
    { name: 'photo', maxCount: 1 }
]), add_terms);
router.get("/get_terms", get_terms);
router.get("/get_terms_by_id/:id", get_terms_by_id);
router.post("/search_agreement", search_agreement);

router.post("/add_employee", add_employee);
router.get("/get_all_employee", get_all_employee);
router.delete("/delete_employee/:id", delete_employee);
router.put("/edit_employee/:id", edit_employee);
router.post("/search_employee", search_employee);

router.post("/add_user", add_user);
router.get("/get_all_user", get_all_user);
router.get("/getuser_by_status", getuser_by_status);
router.get("/getuser_by_id/:id", getuser_by_id);
router.put("/update_user_status/:id", update_user_status);
router.delete("/delete_user/:id", delete_user);
router.put("/edit_user/:id", edit_user);
router.post("/search_users", search_users);
router.post("/userlogin", userlogin);
router.post("/search_user_by_name", search_user_by_name);
router.get("/user_pagination", user_pagination);
router.post("/sendUserInfo/:userId", sendUserInfo);
router.post("/forgot_password", forgot_password);
router.post("/verify_otp", verify_otp);
router.put("/submit_password/:id", submit_password);
router.put("/update_endDate/:id", update_endDate);
router.get("/recovery_user", recovery_user);
router.post("/search_user_recovery", search_user_recovery);
router.get("/get_report_by_id/:id", get_report_by_id);
router.get("/get_incorrect_assignments/:id", get_incorrect_assignments);
router.get("/get_successOrfreeze_user", get_successOrfreeze_user);

router.post("/add_assignment/:id", add_assignment);
router.get("/get_assignments", get_assignments);
router.get("/get_totalAssignment/:id", get_totalAssignment);

// get employee by ID route
router.get("/getemployee_by_id/:id", getemployee_by_id);
//get assignment details reload button
router.post("/get_assignment_details", get_assignment_details);
router.get("/refresh_assignment_detail/:assignmentId", refresh_get_assignment_details);

router.put("/update_assignment_Details", update_assignment_Details);

// change password
router.post("/changePassword",changePassword)
// get todays registered users
router.get("/getTodaysRegistrations",getTodaysRegistrations)

module.exports = router;