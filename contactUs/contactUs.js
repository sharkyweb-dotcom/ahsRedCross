const contacts=document.getElementById("contacts")
function newContact(position,name,number) {
    let newContact=document.createElement("li")
    newContact.innerHTML=`${position}: ${name} - <a href="mailto:${number}">${number}@amaisd.net</a>`
    contacts.appendChild(newContact);
}
function newContacts(infoLists) {
    infoLists.forEach(infoList => {
        newContact(infoList[0],infoList[1],infoList[2])
    });
}
newContacts([
    ["President","Veditha Chelikani","309920"],
    ["Officer","Zainab Adnan","267918"],
    ["Officer","Dakota Chavez","268366"],
    ["Officer","Sanjana Gunda","272781"],
    // ["Head Manager of Technology and Communications","Finn Archer","277341"]
])