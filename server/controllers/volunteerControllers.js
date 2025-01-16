const Volunteer = require('../models/Vol')
exports.addVolunteer = async (req, res) => {
    console.log(req.body);
    const {first_name,last_name,username,password,zip,skills,heard_about,interest,availability} = req.body;
    console.log(first_name,last_name,username,password,zip,skills,heard_about,interest,availability);
    const volData = await Volunteer.create(first_name,last_name,username,password,zip,skills,heard_about,interest,availability);
    res.send(volData);

}