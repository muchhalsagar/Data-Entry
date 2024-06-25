const AssingmentDetails = require("../models/assingmentDetails.schema");


/******************************************************
 * @update_assignment_Details
 * @route http://localhost:8000/user/update_assignment_Details
 * @description Updates all AssigbnmentDetails annualRevenue
 * @returns Message for Update Success
 ******************************************************/
const update_assignment_Details = async(req, res) => {
    try {
        // Fetch all records from the AssingmentDetails collection
        const allRecords = await AssingmentDetails.find();
        // Update each record with a unique random annualRevenue between 10000 and 100000
        await Promise.all(
            allRecords.map(async(record) => {
                const randomAnnualRevenue = Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000;
                await AssingmentDetails.updateOne({ _id: record._id }, { $set: { annualRevenue: randomAnnualRevenue } });
            })
        );
        res.status(200).json({ success: true, message: "Annual revenue updated successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

module.exports = {
    update_assignment_Details
}