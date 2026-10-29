
function validateForm() {
	const msg = document.getElementById("formMessage");
	const email = document.getElementById('email').value.trim();
	const concerns = document.getElementById('concerns').value.trim();
	
	if (!email || !concerns) {
		msg.textContent = "Both Fields are required to Submit!";
		msg.className = "error";
		return false;
	}
	
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!emailRegex.test(email)) {
			msg.textContent = "Invalid Email!";
			msg.className = "error";
			return false;
		}
		
	msg.textContent = "Form submitted successfully!";
	msg.className = "success";
	return true;
}


