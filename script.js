function submitReview() {

    const name = document.querySelector('input').value;
    const review = document.querySelector('textarea').value;

    if(name==="" || review===""){
        alert("Please fill all fields.");
        return;
    }

    document.getElementById("successMessage").style.display="block";

    const newReview = `
        <div class="review-card">
            <h3>${name}</h3>
            <div style="color:gold;font-size:22px;">★★★★★</div>
            <p>${review}</p>
        </div>
    `;

    document.getElementById("reviewsList").innerHTML += newReview;

    document.querySelector('input').value="";
    document.querySelector('textarea').value="";
}