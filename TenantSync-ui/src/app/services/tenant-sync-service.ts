import { Injectable, OnInit } from '@angular/core';
import { Database } from 'firebase/database';
import { DatabaseService } from "./databaseService";

@Injectable({
  providedIn: 'root',
})
export class TenantSyncService implements OnInit {
  constructor(private service: DatabaseService) {}


  ngOnInit() {
    this.getCurrentDate
  }
  async getCurrentDate(): Promise<string> {
    const now = new Date();
    console.log("GetCurrentDate ran: " + now.toISOString());
    return now.toISOString();
  }

  async createNewUser(name: string, role: string): Promise<void> {
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


    this.service.writeData("users/"+ inputName, {
      name: inputName,
      role: inputRole,
    });
  }
};
