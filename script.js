// ===============================
// Graduate Tailors Script
// ===============================

function reviewOrder() {

    const order = {

        name: document.getElementById("customerName").value,

        phone: document.getElementById("customerPhone").value,

        email: document.getElementById("customerEmail").value,

        product: document.getElementById("product").value,

        fabric: document.getElementById("fabric").value,

        fit: document.getElementById("fit").value,

        size: document.getElementById("size").value,

        shirtColor: document.getElementById("shirtColor").value,

        pantColor: document.getElementById("pantColor").value

    };

    if(order.name==="" || order.phone===""){

        alert("Please enter Name and Mobile Number.");

        return;

    }

    localStorage.setItem("graduateOrder", JSON.stringify(order));

    window.location.href="review.html";

}



function sendWhatsApp(){

    const order = JSON.parse(localStorage.getItem("graduateOrder"));

    if(!order){

        alert("No Order Found");

        return;

    }

    const message =

`Graduate Tailors Order

Name : ${order.name}

Phone : ${order.phone}

Email : ${order.email}

Product : ${order.product}

Fabric : ${order.fabric}

Fit : ${order.fit}

Size : ${order.size}`;

    window.open(
        "https://wa.me/919801408188?text=" +
        encodeURIComponent(message),
        "_blank"
    );

}



function submitReview(){

    const name=document.getElementById("reviewName").value;

    const review=document.getElementById("reviewText").value;

    if(name==="" || review===""){

        alert("Please fill all fields.");

        return;

    }

    const reviews=document.getElementById("reviewsList");

    const card=document.createElement("div");

    card.className="review-card";

    card.innerHTML=`

        <h3>${name}</h3>

        <div class="stars">★★★★★</div>

        <p>${review}</p>

    `;

    reviews.appendChild(card);

    document.getElementById("successMessage").style.display="block";

    document.getElementById("reviewName").value="";

    document.getElementById("reviewText").value="";

}
