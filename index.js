let username = "RafaelFerreiraVasconcelos";
let phonenumber = "(83) 99133-6039"

firstLetter = username.charAt(0);// Find char at position
lastLetter = username.charAt(-1);// Last Letter
firstOccurence = username.indexOf("a");// Find the first occurence
lastOccurence = username.lastIndexOf("a");
length = username.length;
trimmedUsername = username.trim();
UpperCase = trimmedUsername.toUpperCase();
LowerCase = trimmedUsername.toLowerCase();
StartsWith = username.startsWith("R");
EndsWith = username.endsWith("f");
Include = username.includes("@");
replace = phonenumber.replaceAll(" ", "@");

console.log(replace)
