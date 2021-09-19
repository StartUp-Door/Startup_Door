import db from "../../config/database";

exports.allReviews = async(req, res) => {
    try {
        const response = await db.query("SELECT R.rating_id AS id, R.value AS value, R.comment AS comment, A.username AS service_name, B.username AS client_name FROM ratings R, users A, users B WHERE A.id <> B.id AND R.service_id = A.id AND R.client_id = B.id ORDER BY R.rating_id");
        res.json(response.rows);

    } catch (error) {
        console.error(error.message);
    }
};