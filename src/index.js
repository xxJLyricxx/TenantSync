import { writeData, updateData, listenToData, deleteData, readDataOnce } from "./databaseService.js";

const testingAll = true;
function createNewUser(name, role){
  var inputName = ""
  var inputRole = ""
  
  
  if (name) {
    inputName = name
  } else {
    const now = new Date();

    var dateString = `${now.getFullYear()}` +
    `${String(now.getMonth() + 1).padStart(2, "0")}` +
    `${String(now.getDate()).padStart(2, "0")}` +
    `${String(now.getHours()).padStart(2, "0")}` +
    `${String(now.getMinutes()).padStart(2, "0")}` +
    `${String(now.getSeconds()).padStart(2, "0")}`
    console.log(dateString)
    inputName = "_No_Name__"+dateString
  }


  if (role){
    inputRole = role
  } else {
    inputRole = "Basic"
  }
  
  
  writeData("users/"+ inputName, {
    name: inputName,
    role: inputRole,
  });
}
if (testingAll){
  createNewUser("Jonathan", "Master")
  createNewUser("", "Founder")
  createNewUser("Alpha")
}
// updateData("users/user123", {
//   role: "senior developer"
// });

// const user = await readDataOnce("users/user123");
// console.log(user);

// listenToData("users", (data) => {
//   console.log("Users updated:", data);
// });

// deleteData("users/user123");