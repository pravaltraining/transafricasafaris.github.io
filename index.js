function validateForm() {
    // let firstName = document.getElementById("firstName").value;
    // let lastName = document.getElementById("lastName").value;
    // let email = document.getElementById("email").value;
    // let phone = document.getElementById("phone").value;

    // if (firstName === "" || lastName === "" || email === "" || phone === "") {
    //     alert("Please fill out all required fields.");
    //     return false;
    // }
    // let pdfUrl = "Images/blank.pdf";
    // let link = document.createElement("a");
    // link.href = pdfUrl;
    // link.download = "Itinerary.pdf";
    // document.body.appendChild(link);
    // link.click();
    return true;
}

var previousSelectedItinerary = '';

var previousSelectedItinerary2 = 'southafrica';


var bookings = [
    {
        refId:"TAS-01",
        firstName:"Mark",
        lastName:"Otto",
        email:"mark@gmail.com",
        phoneNumber:"+27 123-4567-90",
        country:"USA",
        pickupLocation:"SA Airport",
        childrenCount:2,
        adultsCount:2,
        checkIn:'10-04-2025',
        checkOut:'20-04-2025',
        tripName:'South Africa - 3D/4N',
        status:'Pending',
    },
    {
        refId:"TAS-02",
        firstName:"Jacob",
        lastName:"Thornton",
        email:"jacob@gmail.com",
        phoneNumber:"+27 123-4567-90",
        country:"USA",
        pickupLocation:"SA Airport",
        adultsCount:3,
        childrenCount:1,
        checkIn:'11-04-2025',
        checkOut:'15-04-2025',
        tripName:'South Africa - 3D/4N',
        status:'Confirm'
    }
]

localStorage.setItem('bookings', JSON.stringify(bookings));


const formID = ['firstName','lastName','email','phoneNumber','country','pickupLocation','childrenCount','adultsCount','checkIn','checkOut']

function createNewReservation(){
    const formID = ['firstName','lastName','email','phoneNumber','country','pickupLocation','childrenCount','adultsCount','checkIn','checkOut']
    formID.forEach((id)=>{
       var ele =  document.getElementById(id);
       ele.placeholder = '';
    })
}

function updateItinerary(selectedItinerary){
    var Itinerary = document.getElementById(selectedItinerary);
    Itinerary.classList.remove('d-none');
    Itinerary.classList.add('d-block');
    if(previousSelectedItinerary!=""){
        var Itinerary = document.getElementById(previousSelectedItinerary);
        Itinerary.classList.remove('d-block');
        Itinerary.classList.add('d-none');
    }
    previousSelectedItinerary = selectedItinerary;
}

function createNewBooking() {
    const formID = ['firstName', 'lastName', 'email', 'phoneNumber', 'country', 'pickupLocation', 'childrenCount', 'adultsCount', 'checkIn', 'checkOut'];
    
    const bookingData = {};

    formID.forEach((id) => {
        bookingData[id] = document.getElementById(id).value;
    });


}

var count =0;
function addNewBooking(){
    count++;
    var id = 'newbookingrecord'+count;
    var newBooking = document.getElementById(id);
    if(newBooking)
        newBooking.classList.remove('d-none');
    else
        return;
}

function uploadBookingTable() {
    var tableBody = document.getElementById("bookings"); 
    
    tableBody.innerHTML = "";
    var bookings = JSON.parse(localStorage.getItem('bookings')) || [];

    if (bookings.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7" class="text-center">No Bookings Found</td></tr>`;
        return;
    }

    bookings.forEach((booking) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <th scope="row">${booking.refId}</th>
            <td>${booking.tripName}</td>
            <td>${booking.firstName}</td>
            <td>${booking.lastName}</td>
            <td>${booking.email}</td>
            <td>${booking.status}</td>
            <td>
                <button type="button" class="btn btn-success edit-button" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                    <i class="fa fa-edit"></i>
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    console.log("Updated Booking Table");
}
uploadBookingTable();

function updateItinerary2(selectedItinerary){
    var Itinerary = document.getElementById(selectedItinerary);
    Itinerary.classList.remove('d-none');
    Itinerary.classList.add('d-block');
    if(previousSelectedItinerary2!=""){
        var Itinerary = document.getElementById(previousSelectedItinerary2);
        Itinerary.classList.remove('d-block');
        Itinerary.classList.add('d-none');
    }
    previousSelectedItinerary2 = selectedItinerary;
}

