function getPersonalDetails(fname, lname, email, phone) {
  return {
    fname,
    lname,
    email,
    phone,
    getFullName() {
      return this.fname + " " + this.lname;
    },
    getContact() {
      return "\nPhone: " + this.phone + "\nEmail: " + this.phone;
    },
  };
}

const firstPerson = getPersonalDetails(
  "John",
  "Wick",
  "jwick@kmail.com",
  "7862369698"
);

console.log(firstPerson.getFullName(), firstPerson.getContact());
