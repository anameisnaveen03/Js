console.log("Welcome To Our Bus Services");

let pessengerName = prompt("Please Enter Pessenger Name : ");

let Destination = prompt("Enter Your Destination : ");
let d = Destination.toLowerCase()
switch (d) {
    case "jaipur":
        console.log(pessengerName,"You need to pay 100 Rupees");
        break;
    case "jodhpur":
        console.log(pessengerName, "You need to pay 150 Rupees");
            break;
    case "udaipur":
        console.log(pessengerName, "You need to pay 200 Rupees");
        break;
    case "bikaner":
        console.log(pessengerName, "You need to pay 250 Rupees");
        break;
    default:
        console.log("Destination Not Available");
        break;
}
