export const registerUser = async (data) => {
    try {
        const response = await fetch('http://localhost:8080/api/auth/registration', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const result = await response.json();
            throw new Error(result.message || "Registraion failed");
        }

        return await response.json();

    } catch (error) {
        throw error;
    }
}