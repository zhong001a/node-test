export const findAll = async (req, res) => {
    try {
        const result = await req.knex("users");
        return res.json({ status: "success", message: "User Route", data: result });
    } catch (error) {
        return res.json({ status: "error", message: error.message });
    }
};

export const insertIntoColor = async (req, res) => {
    try {
        const data = req.fields.data;
        const result = await req.knex("color").insert(data);

        return res.json({
            status: "success",
            message: "Insert "+result+" User Successfully",
            result: result,
            data: data
        });
    } catch (error) {
        return res.json({ status: "error", message: error.message });
    }
};

export const insertIntoCapacity = async (req, res) => {
    try {
        const data = req.fields.data;
        const result = await req.knex("capacity").insert(data);
        return res.json({
            status: "success",
            message: "Insert User Successfully",
            result: result,
            data: data
        });
    } catch (error) {
        return res.json({ status: "error", message: error.message });
    }
};
  
export default {
    findAll,
    insertIntoColor,
    insertIntoCapacity

};
