import User from "./test";

const user = {
  name: "abc",
  age: 25,
  email: "abc@abc.com",
};

const run = async () => {
  const data = new User(user);
  const result = await data.save();
  console.log(result);
};

const run2 = async () => {
  const result = await User.find();
  console.log(result);
};

const run3 = async () => {
  const result = await User.updateOne(
    { name: "a" },
    {
      email: "test@a.com",
    }
  );
  console.log(result);
};

const run4 = async () => {
  const result = await User.deleteOne({ name: "a" });
  console.log(result);
};

run4();
