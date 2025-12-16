import { writeData } from "./databaseService";

writeData("users/user123", {
  name: "Jonathan",
  role: "developer",
  experience: 3
});

updateData("users/user123", {
  role: "senior developer"
});

const user = await readDataOnce("users/user123");
console.log(user);

listenToData("users", (data) => {
  console.log("Users updated:", data);
});

deleteData("users/user123");