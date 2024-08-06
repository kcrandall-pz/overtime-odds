// src/routes/api/editProfile.js

require('dotenv').config();

export async function PATCH(request) {
    try {
        const { email, displayName, profilePic } = await request.json();

        const response = await fetch(process.env.API_EDITPROFILE, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': process.env.API_KEY
            },
            body: JSON.stringify({ email, displayName, profilePic })
        });

        if (!response.ok) {
            const errorData = await response.json();
            return new Response(JSON.stringify({ message: 'Failed to edit profile data' }), { status: response.status });
        }

        // Assuming successful registration, return a success response
        return new Response(JSON.stringify({ message: 'Edit successful' }), { status: 200 });

    } catch (error) {
        console.error('Error registering user:', error);
        return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
    }
}
