// These variables are our "database" for users.
// You can actually change the values to whatever you'd like!
// And you can and should use them in your `isRegisteredUser` function.
// But we use them in your test code as well, so whatever you do, don't delete them!

const user1 = 'krose@perseverenow.org';
const password1 = 'Hotforhimself';
const user2 = 'jdoty@perseverenow.org';
const password2 = 'Console.logger';
const user3 = 'dhiggins.prsvr@gmail.com';
const password3 = "supToThis"


// **YOUR** code below. Pass those tests!


function isValidEmail(str)
 {
  const str2 = (str.length);
if (((str.endsWith(".prsvr@gmail.com")) && ((str2>16))) ||
((str.endsWith("@perseverenow.org")) && (str2>17))) {
  return true; 
} else {
  return false;
}
}




const good1="krose@perseverenow.orgHotforhimself"
const good2="jdoty@perseverenow.orgConsole.logger"
const good3="dhiggins.prsvr@gmail.comsupToThis"
function passwordMatches(input1,input2) {
var tryit=(input1+input2);
if ((tryit === good1) ||
 (tryit === good2 ) ||
 (tryit === good3 )){
 return true
} else {
   return false;
}
}


function  isValidEmail2(typeOf) {
  var atend1 = typeOf.endsWith(".prsvr@gmail.com");
  var locat1 = typeOf.lastIndexOf(".prsvr@gmail.com");
  var atend2 = typeOf.endsWith("@perseverenow.org");
  var locat2 = typeOf.lastIndexOf("@perseverenow.org");

  if  ((locat1 != ".prsvr@gmail.com") && 
  (locat2 != "@perseverenow.org") && 
  (typeOf != ".prsvr@gmail.com") &&
 (typeOf != "@perseverenow.org") &&
  (locat1 != -1 || locat2 != -1 )) {
       return true
   } else {
      return false;
  }
}



function isRegisteredUser(str3) {
  if ((str3 === "krose@perseverenow.org") ||
      
      (str3 === "jdoty@perseverenow.org") ||
      (str3 === "dhiggins.prsvr@gmail.com")) {
      return true
    } else  {
      return false;
  }
}



function isValidPassword(str) {

const getup = str.toUpperCase()
const getdown = str.toLowerCase()

if ((str.length>=8) &&
((str.toLowerCase()) !== (str))  &&

((str.toUpperCase()) !== (str))){
return true; 
} else {
  return false;}
}





// Our code below. Do not touch!


if (typeof isValidEmail === 'undefined') {
  isValidEmail = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof isRegisteredUser === 'undefined') {
  isRegisteredUser = undefined;
}

if (typeof passwordMatches === 'undefined') {
  passwordMatches = undefined;
}

if (typeof user1 === 'undefined') {
  user1 = undefined;
}

if (typeof user2 === 'undefined') {
  user2 = undefined;
}

if (typeof user3 === 'undefined') {
  user3 = undefined;
}

if (typeof password1 === 'undefined') {
  password1 = undefined;
}

if (typeof password2 === 'undefined') {
  password2 = undefined;
}

if (typeof password3 === 'undefined') {
  password3 = undefined;
}



module.exports = {
  isValidEmail,
  isValidPassword,
  isRegisteredUser,
  passwordMatches,
  user1,
  user2,
  user3,
  password1,
  password2,
  password3
}