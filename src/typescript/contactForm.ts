import { strapiApiBaseUrl } from "./consts";

interface FormData {
    name: string;
    email: string;
    message: string;
}

export async function sendContactRequest(
    event: SubmitEvent,
    onSuccess: Function,
    onErrror: Function
) {
    event.preventDefault();
    event.stopPropagation();

    const form = event.target as HTMLFormElement; // Get the form that was submitted
    const formData = {
        name: form.elements.namedItem("name"),
        email: form.elements.namedItem("email"),
        message: form.elements.namedItem("message"),
    };

    if (formData.name.value.length > 30) {
        onError(`Pole '${formData.name.placeholder}' nie może być puste !`);
        return;
    }

    if (formData.email.value.length > 30) {
        onError(`Pole '${formData.email.placeholder}' nie może być puste !`);
        return;
    }

    if (formData.message.value.length > 300) {
        onError(`Pole '${formData.message.placeholder}' nie może być puste !`);
        return;
    }

    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            data: {
                name: formData.name.value,
                email: formData.email.value,
                message: formData.message.value,
            },
        }),
    };

    await fetch(strapiApiBaseUrl + "/contact-forms", params)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            // console.log("Form submitted successfully!", data);
            // Do something with the response data, if needed
            onSuccess();
        })
        .catch((error) => {
            // console.error("Error submitting form:", error);
            // Handle any errors that occur during the submission
            onErrror(error);
        });
}
