import { Injectable } from '@angular/core';
import { Database } from 'firebase/database';
import { writeData, updateData, listenToData, deleteData, readDataOnce } from ".databaseService.js";

@Injectable({
  providedIn: 'root',
})
export class TenantSyncService {
  
  constructor(private service: TenantSyncService) {}


  ngOnInit() {
    // this.service.getTenants().then(data => {
    //   this.tenants = data;
    // });
  }

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
}
