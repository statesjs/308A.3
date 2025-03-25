// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

//Part 1: The Scenario
//async implicitly wraps into a Promise.resolve
async function getUserData(id) {
  if (typeof id !== "number" || id < 1 || id > 10) {
    throw new Error("Invalid ID: must be a number between 1 and 10.");
  }

  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };

  try {
    const returnedValue = await central(id);

    const [basicInfo, returnedValueVault] = await Promise.all([
      dbs[returnedValue](id).catch((err) => {
        throw new Error(`${returnedValue} failed: ${err.message}`);
      }),
      vault(id),
    ]);

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
  } catch (error) {
    throw new Error(`Failed to get user data: ${error.message}`);
  }
}
getUserData(11)
  .then((user) => {
    console.log(user);
  })
  .catch((err) => console.log(`theres was an error: ${err}`));

getUserData("hello")
  .then((user) => {
    console.log(user);
  })
  .catch((err) => console.log(`theres was an error: ${err}`));

getUserData(1)
  .then((user) => {
    console.log(user);
  })
  .catch((err) => console.log(`theres was an error: ${err}`));

//dbs contain the username,website, and company
//the vault will contain the name, email, address, and phone data
