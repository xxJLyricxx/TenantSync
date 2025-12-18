import { Injectable } from "@angular/core";
import { database } from "../firebase/firebase.js";
import {
  ref,
  set,
  get,
  child,
  onValue,
  update,
  remove
} from "firebase/database";

@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  constructor() {}


  async writeData(path: string, data: any): Promise<void> {
    await set(ref(database, path), data);
  }
  
  
  async updateData(path: string, data: any): Promise<void> {
    await update(ref(database, path), data);
  }
  
  
  async readDataOnce(path: string): Promise<any> {
    const snapshot = await get(child(ref(database), path));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  }
  
  
  async listenToData(path: string, callback: (data: any) => void): Promise<void> {
    const dataRef = ref(database, path);  
    onValue(dataRef, (snapshot) => {
      callback(snapshot.val());
    });
  }
  
  
  async deleteData(path: string): Promise<void> {
    await remove(ref(database, path)); 
  }

}
// export const databaseService = new DatabaseService();
// export const { writeData, updateData, readDataOnce, listenToData, deleteData } = databaseService;
