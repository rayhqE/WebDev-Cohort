const playerHealth = 75;
const hasShield = true;
const hasSword = false;

if (playerHealth <= 30 && hasShield) {
}

const isLoggedIn = true;
const hasCourseAccess = false;

if (isLoggedIn || hasCourseAccess) {
  //allow to watch videos
}

const courseLauched = true;

const chosenPath = "right";

switch (chosenPath) {
  case "top":
    console.log("user going top");
    break;
  case "bottom":
    console.log("user going bottom");
    break;
  case "left":
    console.log("user going left");
    break;
  default:
    console.log("Jiska koi uska default");
    break;
}
