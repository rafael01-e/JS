const full_name = "João Viscente Pagliatto";

firstName = full_name.slice(0, full_name.indexOf(" "));
middleName = full_name.slice(full_name.indexOf(" ") + 1, full_name.lastIndexOf(" "));
lastName = full_name.slice(full_name.lastIndexOf(" ") + 1);

console.log(firstName);
console.log(middleName);
console.log(lastName);

const email = "BroCode@gmail.com"
user = email.slice(0, email.indexOf("@"));
console.log(user);