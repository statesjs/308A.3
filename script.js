// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

//Part 1: The Scenario
//async implicitly wraps into a Promise.resolve
async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
  const returnedValue = await central(id);
  const basicInfo = await dbs[returnedValue](id);
  const returnedValueVault = await vault(id);

  return {
    id,
    name: returnedValueVault.name,
    username: basicInfo.username,
    email: returnedValueVault.email,
    address: returnedValueVault.address,
    phone: returnedValueVault.phone,
    website: basicInfo.website,
    company: basicInfo.company,
  };
}
getUserData(2).then((user2) => {
  console.log(user2);
});

//dbs contain the username,website, and company
//the vault will contain the name, email, address, and phone data
