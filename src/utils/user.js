import { Chontak } from "../model/chontak.js";
import { User } from "../model/index.js";

export const getUser = async (id) => {
  return User.findOne({ where: { id } });
};
export const userSave = async (data) => {
  const user = new User(data);
  await user.save();
};

export const contakSave = async (data) => {
  const chontak = new Chontak(data);
  await chontak.save();
};

export const getAllData = async (id) => {
  const data = await  Chontak.find({ user_id: id }).select("key _id").lean();
  return data.map((item) => [
    {
      text: item.key,
      callback_data: item._id.toString(),
    },
  ]);
};

export const getOneData = async (id) => {
  return Chontak.findOne({ _id: id })
  };
export const deleteChontak = async (id) => {
    return Chontak.findByIdAndDelete(id)
  };