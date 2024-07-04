// src/routes/api/register.js

require('dotenv').config();

export async function POST(request) {
    try {
        const { email, password, displayName, profilePic } = await request.json();

        const response = await fetch(process.env.API_REGISTER, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': process.env.API_KEY
            },
            body: JSON.stringify({ email, password, displayName, profilePic })
        });

        if (!response.ok) {
            const errorData = await response.json();
            return new Response(JSON.stringify({ message: 'Failed to register' }), { status: response.status });
        }

        // Assuming successful registration, return a success response
        return new Response(JSON.stringify({ message: 'Registration successful' }), { status: 200 });

    } catch (error) {
        console.error('Error registering user:', error);
        return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
    }
}
