import { database } from "./firebase.js";
import {
  ref,
  set,
  get,
  child,
  onValue,
  update,
  remove
} from "firebase/database";

/**
 * WRITE DATA
 */
export function writeData(path, data) {
  return set(ref(database, path), data);
}

/**
 * UPDATE DATA (partial update)
 */
export function updateData(path, data) {
  return update(ref(database, path), data);
}

/**
 * READ DATA ONCE
 */
export async function readDataOnce(path) {
  const snapshot = await get(child(ref(database), path));
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return null;
  }
}

/**
 * LISTEN FOR REAL-TIME CHANGES
 */
export function listenToData(path, callback) {
  const dataRef = ref(database, path);
  onValue(dataRef, (snapshot) => {
    callback(snapshot.val());
  });
}

/**
 * DELETE DATA
 */
export function deleteData(path) {
  return remove(ref(database, path));
}