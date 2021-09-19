import db from "../../config/database";

exports.allRequests = async(req, res) => {
    try {
        const apply = await db.query(" SELECT P.p_id, U.first_name, U.last_name, P.description, P.create_on, P.status FROM tech_portfolio P INNER JOIN users U ON P.service_id = U.id ORDER BY p_id ASC")
        res.json(apply.rows);
    } catch (error) {
        console.error(error.message)
    }
};

exports.updateRequest = async(req, res) => {
    try {
        const { pID } = req.params;
        const { status } = req.body
        const query = await db.query(" UPDATE tech_portfolio SET status = $1 WHERE p_id = $2", [status, pID])
        res.json(query);
    } catch (error) {
        console.error(error.message)
    }
}

exports.deleteRequest = async(req, res) => {
    try {
        const { id } = req.params;
        const deleteServiceType = await db.query("DELETE FROM tech_portfolio WHERE p_id = $1", [id]);
        res.json("portfolio appeal was rejected");
    } catch (error) {
        console.error(error.message);
    }
}