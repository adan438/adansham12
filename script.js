"use strict";


const addBtn = document.getElementById("add-btn");
const contactList = document.getElementById("contact-list");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");
const closePopupBtn = document.getElementById("close-popup");
const searchInput = document.getElementById("search");

const obj = {name: "meow", number: 1}
const arr = [1,"gdsgsdg",5.5,true]



const contacts = [
    { name: 'Dorothy Gale', phone: '1234567890', email: 'DGale@example.com', address: '123 Elm Street', notes: 'her house got carried away' },
    { name: 'Scarecrow', phone: '9876543210', email: 'straw@example.com', address: '456 Oak Avenue', notes: 'Met at the cornmaze' },
    { name: 'The Tinman', phone: '5551234567', email: 'Woodman@example.com', address: '789 Pine Road', notes: '' },
    { name: 'The Cowardly Lion', phone: '3334445555', email: 'king@example.com', address: '', notes: 'Lives in the forest' }
];



function renderContacts(filteredContacts = contacts) {
    contactList.innerHTML = '';
    if (filteredContacts.length === 0) {
        contactList.innerHTML = '<p>No contacts available</p>';
    } else {
        filteredContacts.forEach((contact, index) => {
            const li = document.createElement('li');
            li.className = 'contact';
            li.innerHTML = `
                <h2>${contact.name}</h2>
                <p class="phone">${contact.phone}</p>
                <button class="edit-btn" onclick="showPopup(event,${index})" >Edit</button>
                <button class="delete-btn" onclick="deletecontact(${index})" >Delete</button>
                <button class="info-btn" onclick="showPopup(event,${index})">Info</button>
            `;
            contactList.appendChild(li);
        });
    }
}

function showPopup(event,obj=-1) {
    
let editbutton = document.querySelectorAll(".edit-btn");
let infobutton = document.querySelectorAll(".info-btn");

    if(event.target===editbutton[obj])
    popupContent.innerHTML = `    <h2>Edit Contact</h2>
            <form onsubmit="stopref()" id="edit-contact-form">
                <label>Name: <input id="namein" type="text" name="name" value="${contacts[obj].name}" required></label><br>
                <label>Phone: <input id="phonein" type="text" name="phone" value="${contacts[obj].phone}" required></label><br>
                <label>Email: <input id="emailin" type="email" name="email" value="${contacts[obj].email}"></label><br>
                <label>Address: <input id="addressin" type="text" name="address" value="${contacts[obj].address}"></label><br>
                <label>Notes: <textarea id="notesin" name="notes">${contacts[obj].notes}</textarea></label><br>
                <div class="options"> <button onclick="updateinfo(${obj})" >Update</button>
                <button id="close-popup2" onclick="hidePopup(event)">Cancel</button></div>

            </form>`;
    if(event.target===document.querySelector("#add-btn"))
        popupContent.innerHTML = `<h2>Add New Contact</h2>
        <form  onsubmit="stopref()" id="contact-form">
              <label>Name: <input id="namein" type="text" name="name" value="" required></label><br>
                <label>Phone: <input id="phonein" type="text" name="phone" value="" required></label><br>
                <label>Email: <input id="emailin" type="email" name="email" value=""></label><br>
                <label>Address: <input id="addressin" type="text" name="address" value=""></label><br>
                <label>Notes: <textarea id="notesin" name="notes"></textarea></label><br>
                <div class="options"> <button onclick="addcontact()" >Save</button>
                <button id="close-popup2" onclick="hidePopup(event)">Cancel</button></div>
        </form>`;


    if(event.target===infobutton[obj])
    {
        if(contacts[obj].notes.length==0 && contacts[obj].email.length==0 && contacts[obj].address.length==0)
            popupContent.innerHTML = `
           <div   id="contact-form">
           <div id="closebtn"><button onclick="hidePopup(event)">Close</button></div>
            <h2>More Info</h2>
                <p> Name: ${contacts[obj].name}<br>
                   Phone: ${contacts[obj].phone} <br>
                 </p>
           </div>`;

         
        else if(contacts[obj].notes.length==0 && contacts[obj].email.length==0 )
            popupContent.innerHTML = `
           <div   id="contact-form">
           <div id="closebtn"><button onclick="hidePopup(event)">Close</button></div>
            <h2>More Info</h2>
                <p> Name: ${contacts[obj].name}<br>
                   Phone: ${contacts[obj].phone} <br>
                    Address: ${contacts[obj].address} <br>
                 </p>
           </div>`;   

        else if(contacts[obj].email.length==0 && contacts[obj].address.length==0)
            popupContent.innerHTML = `
           <div   id="contact-form">
           <div id="closebtn"><button onclick="hidePopup(event)">Close</button></div>
            <h2>More Info</h2>
                <p> Name: ${contacts[obj].name}<br>
                   Phone: ${contacts[obj].phone} <br>
                   Notes: ${contacts[obj].notes}<br>
                 </p>
           </div>`;

        else if(contacts[obj].notes.length==0 && contacts[obj].address.length==0)
            popupContent.innerHTML = `
           <div   id="contact-form">
           <div id="closebtn"><button onclick="hidePopup(event)">Close</button></div>
            <h2>More Info</h2>
                <p> Name: ${contacts[obj].name}<br>
                   Phone: ${contacts[obj].phone} <br>
                   Notes: ${contacts[obj].email}<br>
                 </p>
           </div>`;

       else if(contacts[obj].email.length==0)
         popupContent.innerHTML = `
        <div id="contact-form">
        <div id="closebtn"><button onclick="hidePopup(event)">Close</button></div>
         <h2>More Info</h2>
             <p> Name: ${contacts[obj].name}<br>
                Phone: ${contacts[obj].phone} <br>
                Address: ${contacts[obj].address} <br>
                Notes: ${contacts[obj].notes}<br>
              </p>
        </div>`;

        else if(contacts[obj].notes.length==0)
            popupContent.innerHTML = `
           <div   id="contact-form">
             <div id="closebtn"><button onclick="hidePopup(event)">Close</button></div>
              <h2>More Info</h2>
                <p> Name: ${contacts[obj].name}<br>
                   Phone: ${contacts[obj].phone} <br>
                   Email: ${contacts[obj].email} <br>
                   Address: ${contacts[obj].address} <br>
                 </p>
           </div>`;

        else if(contacts[obj].address.length==0)
            popupContent.innerHTML = `
           <div id="contact-form">
           <div id="closebtn"><button onclick="hidePopup(event)">Close</button></div>
            <h2>More Info</h2>
                <p> Name: ${contacts[obj].name}<br>
                   Phone: ${contacts[obj].phone} <br>
                   Email: ${contacts[obj].email} <br>
                   Notes: ${contacts[obj].notes}<br>
                 </p>
           </div>`;   
         
          else
            popupContent.innerHTML = `
           <div id="contact-form">
            <div id="closebtn"><button id="close" onclick="hidePopup(event)">Close</button></div>
            <h2>More Info</h2>
                <p> <span>Name</span>: ${contacts[obj].name}<br>
                   <span>Phone</span>: ${contacts[obj].phone} <br>
                   <span>Email</span>: ${contacts[obj].email} <br>
                   <span>Address</span>: ${contacts[obj].address} <br>
                   <span>Notes</span>: ${contacts[obj].notes}<br>
                 </p>
           </div>`;

      
        let buttondiv = document.querySelector("#closebtn");
        buttondiv.style.textAlign="right";

    }  
   
    
    popup.style.display = 'flex';
}

function hidePopup(event) {
    
    if(event.target===document.querySelector("#close-popup2") || event.target === popup || event.target===document.getElementById("close"))
    popup.style.display = 'none';
}

function validatePhoneNumber(phone) {
    const phonePattern = /^\d{10}$/; // Regex pattern for exactly 10 digits
    return phonePattern.test(phone);
}

function isDuplicateName(name, excludeIndex = -1) {
    return contacts.some((contact, index) => contact.name.toLowerCase()=== name.toLowerCase() && index != excludeIndex);
}



function showErrorMessage(message) {
    const errorMsg = document.createElement('p');
    errorMsg.className = 'error';
    errorMsg.style.color = 'red';
    errorMsg.textContent = message;
    return errorMsg;
}


function updateinfo(index){
let editform = document.getElementById("edit-contact-form");
let namein= document.getElementById("namein").value;
let phonein= document.getElementById("phonein").value ;
let emailin= document.getElementById("emailin").value ;
let addressin= document.getElementById("addressin").value ;
let notesin= document.getElementById("notesin").value;
let Newcontact = {name: namein, phone: phonein, email: emailin, address: addressin,notes: notesin };
let currentcontact = contacts[index];

let errormsg = editform.querySelector(".error");

if(errormsg!==null)
editform.removeChild(errormsg);


if(!validatePhoneNumber(Newcontact.phone))
{   
    editform.appendChild(showErrorMessage("Make sure the phone number valid (10 numbers long)"));
    return;
}

if(isDuplicateName(Newcontact.name,index))
{      
    editform.appendChild(showErrorMessage("Make sure the name doesn't already exist in the list"));

    return;
}

currentcontact.name=namein;
currentcontact.phone=phonein;
currentcontact.email=emailin;
currentcontact.address=addressin;
currentcontact.notes=notesin;

popup.style.display = 'none';

renderContacts();
}


function addcontact(){
let addform = document.getElementById("contact-form");
let namein= document.getElementById("namein").value;
let phonein= document.getElementById("phonein").value ;
let emailin= document.getElementById("emailin").value ;
let addressin= document.getElementById("addressin").value ;
let notesin= document.getElementById("notesin").value;
let Newcontact = {name: namein, phone: phonein, email: emailin, address: addressin,notes: notesin };


let errormsg = addform.querySelector(".error");

if(errormsg!==null)
 addform.removeChild(errormsg);


if(!validatePhoneNumber(Newcontact.phone))
{
    addform.appendChild(showErrorMessage("Make sure the phone number valid (10 numbers long)"));
    return;
}

if(isDuplicateName(Newcontact.name))
{  
    addform.appendChild(showErrorMessage("Make sure the name doesn't already exist in the list"));
    return;
}


popup.style.display = 'none';
contacts.push(Newcontact);

renderContacts();
}


function deletecontact(index){
let confirmation = confirm(`Are you sure you want to delete contact ${contacts[index].name}?` );

if(confirmation)
    contacts.splice(index,1);


renderContacts();

}

function deleteallcontacts(){
let confirmation = confirm(`Are you sure you want to delete ALL of your contacts?` );
if(confirmation)
    contacts.splice(0,contacts.length);
renderContacts();
}

searchInput.addEventListener("input", (e) =>{
let searchin = searchInput.value.toLowerCase()

let filteredContacts= contacts.filter((item) =>
item.name.toLowerCase().startsWith(searchin))

renderContacts(filteredContacts);
}

)

function stopref(e) {
event.preventDefault();
}


renderContacts();
