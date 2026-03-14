import readLine from "readline";
import {
    chaiOrder,
    autoFare,
    sabziCart,
    rationCard,
    parcel,
    thalli,
    passengerStatus,
    emptyValue,
    notAssigned,
    pinCode,
    phoneTxt,
} from "./data.js";

import {
    getDataType,
    printHeading,
    printLine,
    toJSON,
    fromJSON,
} from "./helper.js"

const r1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

function showMainMenu() {
    printHeading("Desi Data Types Playground");
    console.log("1. Learn Sting");
    console.log("2. learn Number");
    console.log("3. learn Boolean");
    console.log("4. Learn Array ");
    console.log("5. learn Obeject");
    console.log("6. lean null and undfined");
    console.log("7  Learn JSON");
    console.log("8. TypeChecking");
    console.log("9. Learn type conversions");
    console.log("10. Mixed learn life demo");
    console.log("Exit");
}
function learnString() {
    printHeading("String Lessons - Chai Order");

    printLine("Original vlaue", chaiOrder);
    printLine("Type", getDataType(chaiOrder));
    printLine("Head of Faimly", rationCard.head);
    printLine("Keys", Object.keys(rationCard));
    printLine("Values", Object.values(rationCard));
    printLine("Entries", Object.entries(rationCard));
    
    console.log(("\nReal life:"));
    console.log("Obeject tab use hota hai ek cheex ki multiple properties hoti hian");
    goBack();
}
function goBack() {
    r1.question("\nPress Enter to go back menu...", () => {
        main();
    })
}

function main() {
    showMainMenu();
    r1.question("\nChoose an option: ",(Choice) =>{
        switch (Choice){
            case "1":
                learnString();
                break;
            case "2":
                learnNumber();
                break;
            case "3":
                learnBoolean();
                break;
            case "4":
                learnArray();
                break;
            case "5":
                learnObject();
                break;
            case "6":
                learnNullUndefined();
                break;
            case "7":
                learnJSON();
                break;
            case "8":
                learnTypeChecking();
            case "9":
                learnTypeConversions();
                break;
            case "10":
                mixDemo();
                break;
            case "11":
                console.log("\nProject closed Good job");
                r1.close();
                break;
            default:
                console.log("\nInvalid option");
                main();
                
                
        }
    })
}
main();