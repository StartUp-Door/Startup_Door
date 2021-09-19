const db = require("../../config/database");

exports.stats = async(req, res) => {
    try {
        const { type } = req.params;

        switch (type) {
            case "services":
                const services = await pool.query("SELECT COUNT(id) AS users FROM users WHERE NOT (user_role = 2 OR user_role = 5)");
                res.json(services.rows);
                break;

            case "clients":
                const clients = await pool.query("SELECT COUNT(id) AS users FROM users WHERE user_role = 5");
                res.json(clients.rows);
                break;

            case "providers":
                const providers = await pool.query(" SELECT S.service_type AS name, COUNT(U.id) AS value FROM users U LEFT JOIN servicetypes S ON U.user_role = S.service_id WHERE NOT (U.user_role = 2 OR U.user_role = 5) GROUP BY S.service_type");
                res.json(providers.rows);
                break;

            case "memberships":
                const members = await pool.query(" SELECT M.type AS name, COUNT(U.id) AS value FROM users U LEFT JOIN memberships M ON U.member_type = M.id WHERE NOT U.member_type = '' GROUP BY M.type")
                res.json(members.rows)
                break;
        }

    } catch (error) {
        console.error(error.message);
    }
};

exports.ratings = async(req, res) => {
    try {
        const response = await pool.query("SELECT COUNT(rating_id) FROM ratings WHERE value < 3");
        res.json(response.rows);

    } catch (error) {
        console.error(error.message);
    }
};

exports.typeCountRatings = async(req, res) => {
    try {
        const request = await pool.query("SELECT value AS rate, COUNT(rating_id) FROM ratings WHERE value >= 3 OR value < 3 GROUP BY value ORDER BY value ASC")
        res.json(request.rows);

    } catch (error) {
        console.error(error.message)
    }
};

exports.categoryCount = async(req, res) => {
    try {
        const request = await pool.query("SELECT COUNT(service_id) FROM servicetypes")
        res.json(request.rows);
    } catch (error) {
        console.error(error.message)
    }
};

exports.bidCount = async(req, res) => {
    try {
        const query = await pool.query("SELECT COUNT(*) FROM bidding");
        res.json(query.rows);
    } catch (error) {
        console.error(error.message)
    }
};