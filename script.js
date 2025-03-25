// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

//Part 1: The Scenario
async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
  const returnedValue = await central(id);
  const basicInfo = await dbs[returnedValue](id);
  console.log(basicInfo);
  console.log(returnedValue);
}
getUserData(2);

//dbs contain the username,website, and company
//the vault will contain the name,
