// Ek In Memory DB
// save('user-1', { fname, lname, })

// HashMap (Key, Value)
//        String String

// 1 { fname, lname, email, contact: { mobile }, address: { street, pin, country } }

type UserId = string;
interface User {
  id: UserId;
  fname: string;
  lname?: string; //this "?" makes this property optional to add
  email: string;
  contact: {
    mobile: string;
  };
  address: {
    street: number;
    pin: number;
    country: string;
  };
}

class InMemoryDb {
  private _db!: Map<UserId, User>; //generic

  constructor() {}

  public insertUser(data: User): UserId {
    if (this._db.has(data.id)) {
      throw new Error(`User with ID ${data.id} already exists.`);
    }
    this._db.set(data.id, data);
    return data.id;
  }
  public updateUser(id: UserId, updateData: Omit<User, "id">): boolean {
    if (!this._db.has(id)) {
      throw new Error(`User with ID:${id} does not exists`);
    }
    this._db.set(id, { ...updateData, id });
    return true;
  }
  public getUserById(id: UserId): User {
    if (!this._db.has(id)) {
      throw new Error(`User with ID:${id} does not exists`);
    }
    return this._db.get(id)!; //used exclamaion cuz ive  already checked that user with id exixta or not || typeScript bug
  }
}

const myDB = new InMemoryDb();
myDB.insertUser({
  id: "1",
  contact: { mobile: "7777777" },
  fname: "Rayyan",
  lname: "Haque",

  email: "raayht4@email.com",
  address: {
    country: "India",
    pin: 80004,
    street: 1,
  },
});

myDB.updateUser("1", {
  // id: "1",because  it is omitted during updateUser creation
  contact: { mobile: "7777777" },
  fname: "Rayyan",
  lname: "Haque",

  email: "raayht4@email.com",
  address: {
    country: "India",
    pin: 80004,
    street: 1,
  },
});
