const Organization = require('../models/Org')
exports.addOrganization = async (req, res) => {
    console.log(req.body);
    const {username, password,org_name,about_org,adress,zip,cause} = req.body;
    console.log(username, password,org_name,about_org,adress,zip,cause);
    const orgData = await Organization.create(username, password, org_name, about_org,adress,zip,cause);
    res.send(orgData);
}