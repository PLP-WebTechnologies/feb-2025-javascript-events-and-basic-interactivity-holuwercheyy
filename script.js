documnet.getElemntById("clickBtn").addEventListener("click", function() {
    alert("Button clicked!");

});

const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => hoverBox.style.backgroundColor = "lightblue");
hoverBox.addEventListener("mouseout", () => hoverBox.style.backgroundColor = "white");
document.addEventListener("keydown", function(e) {
    console.log("Key pressed:", e.key);
});

document.getElementById("SecretBtn").addEventListener("dblclick", () => {
    alert("Secret double-click detected");
});

    document.getElementById("magicBtn").addEventListener("click", function() {
        this.innerText = "You clicked me";
        this.style.backgroundColor = "green";
    });
    
    const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
    let currentIndex = 0;
    document.getElementById("nextImg").addEventListener("click", function() {
        current = (current + 1) % images.length;
        document.getElementById("galleryImg").src = images[current];
    });

    document.queueSelectAll(".tab-button").forEach(button => {
        button.addEventListener("click", () => {
            const tab = button.dataset.tab;
            document.querySelectorAll(".tab-content").forEach(tc => tc.style.display = "none");
            document.getElementById(tab).style.display = "block";
        });
    });
    
    document.getElementById("email").addEventListener("submit", function(e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const emailPattern = /^[^\ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!emailPattern.test(email)) {
            alert("Invalid email format");
            return;
        } 
        if (email.length < 8) {
            alert("Password must be at least 8 characters long");
            return;
        }
            alert("Form submitted successfully");
    });

    document.getEllentById("password").addEventListener("input", function() {
        if (this.value.length < 8) {
            this.style.borderColor = "red";
        } else {
            this.style.borderColor = "green";
        }
    });