document.getElementById("body").innerHTML =
  "Join our team by clicking the Register button below";

document.getElementById("button").innerHTML = "Register";

const buttonclick = document.getElementById("button");

buttonclick.onclick = () => {
  const userName = prompt("Enter your username");
  // const username = Username.trim();

  if (typeof userName === "string" && isNaN(userName)) {
    alert(
      "The datatype you entered is a " +
        typeof userName +
        " ,proceed and enter your phone number"
    );
  } else {
    alert("The datatype you entered is not a string, check what you entered");
    return;
  }

  const phoneNumber = prompt("Enter your Phone number");
  // console.log(typeof Phonenumber);
  const numericphone = parseInt(phoneNumber);

  if (
    typeof numericphone === "number" &&
    !isNaN(numericphone) &&
    phoneNumber.length === 11 &&
    phoneNumber.charAt(0) === "0"
  ) {
    alert("The datatype you entered is a number");
  } else {
    alert("The datatype you entered is not a number");
  }
};
