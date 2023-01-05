export const finAll = async (req, res) => {
  try {
    const result = await req.knex("users");
    return res.json({ status: "success", message: "User Route", data: result });
  } catch (error) {
    return res.json({ status: "error", message: error.message });
  }
};

export const findById = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const result = await req.knex("users").where({ id: id }).first();
      if (result) {
        return res.json({ status: "success", message: "Users", data: result });
      } else {
        return res.json({
          status: "success",
          message: "Not found user",
          data: [],
        });
      }
    } else {
      return res.json({ status: "error", message: "Not found id" });
    }
  } catch (error) {
    return res.json({ status: "error", message: error.message });
  }
};
export const create = async (req, res) => {
  try {
    const data = req.fields;
    const result = await req.knex("users").insert(data);
    return res.json({
      status: "success",
      message: "Insert User Successfully",
      data: result,
      data: data
    });
  } catch (error) {
    return res.json({ status: "error", message: error.message });
  }
};

export default {
  finAll,
  findById,
  create,
};
