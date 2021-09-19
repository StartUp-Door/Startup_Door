import db from "../../config/database";

exports.serviceTypes = async(req, res) => {
    try {
        const { service_type } = req.body;
        const newService = await db.query("INSERT INTO servicetypes (service_id, service_type) VALUES (DEFAULT, $1) RETURNING *", [service_type]);

        res.json(newService.rows);

    } catch (error) {
        console.error(error.message);
    }
};

exports.getServiceTypes = async(req, res) => {
    try {
        const allServiceTypes = await db.query("SELECT * FROM serviceTypes ORDER BY service_id ASC");
        res.json(allServiceTypes.rows);
    } catch (error) {
        console.error(error.message);
    }
};

exports.getServiceType = async(req, res) => {
    try {
        const { id } = req.params;

        const serviceType = await db.query("SELECT * FROM serviceTypes WHERE service_id = $1", [id]);

        res.json(serviceType.rows);
    } catch (error) {
        console.error(error.message);
    }
};

exports.updateServiceType = async(req, res) => {
    try {
        const { id } = req.params;
        const { service_type } = req.body;
        const updateServiceType = await db.query("UPDATE serviceTypes SET service_type = $1 WHERE service_id = $2", [service_type, id])

        res.json(updateServiceType);
    } catch (error) {
        console.error(error.message);
    }
};

exports.deleteServiceType = async(req, res) => {
    try {
        const { id } = req.params;
        const deleteServiceType = await db.query("DELETE FROM serviceTypes WHERE service_id = $1", [id]);
        res.json("Service type removed");
    } catch (error) {
        console.error(error.message);
    }
};

exports.getServiceId = async(req, res) => {
    try {
        const { type } = req.params;
        const request = await db.query("SELECT service_id FROM servicetypes WHERE service_type = $1", [type]);
        res.json(request.raws());
    } catch (error) {
        console.error(error.message)
    }
};