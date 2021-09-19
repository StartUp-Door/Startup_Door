import db from "../../config/database";

exports.getAllUsers = async(req, res) => {
    try {
        const allUsers = await db.query('SELECT U.id, U.username, U.first_name, U.last_name, U.birthday, U.email, S.service_type, U.last_login, U.phone, U.street, U.city, U.status, U.register_date FROM users U LEFT  JOIN servicetypes S ON U.user_role = S.service_id WHERE NOT U.user_role = 2 ORDER BY U.id ASC')

        res.json(allUsers.rows);

    } catch (error) {
        console.error(error.message)
    }
};

exports.getAUser = async(req, res) => {
    try {
        const { userID } = req.params;
        const response = await db.query(" SELECT U.id, U.username, U.first_name, U.last_name, U.email, U.birthday, S.service_type, U.user_role,  U.street, U.city, U.status FROM users U LEFT JOIN servicetypes S ON S.service_id = U.user_role WHERE U.id = $1", [userID])
        res.json(response.rows);
    } catch (error) {
        console.error(error.message);
    }
};

exports.updateUser = async(req, res) => {
    try {
        const { userID } = req.params
        const { status } = req.body

        const updateUser = await db.query("UPDATE users SET status = $1 WHERE id = $2", [status, userID])
        res.json(updateUser);
    } catch (error) {
        console.error(error.message);
    }
};