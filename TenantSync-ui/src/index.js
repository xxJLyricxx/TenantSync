import { writeData, updateData, listenToData, deleteData, readDataOnce } from "./src/app/services/databaseService.js";

const testingAll = true;
function createNewUser(name, role){
  var inputName = ""
  var inputRole = ""
  var idNumber = 0;
  idNumber = generateIDNumber();
  
  console.log("Generated ID Number: " + idNumber);

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

function generateIDNumber(){
  // This function generates a random ID number and returns it
  return Math.floor(100000 + Math.random() * 900000);
}

if (testingAll){
  createNewUser("Jonathan", "Admin")
  createNewUser("Gary", "Founder")
  createNewUser("Sigma", "Moderator")
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