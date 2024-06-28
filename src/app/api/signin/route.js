
require('dotenv').config();

export async function POST(request) {
  try {
      // Parse the request body
      const { email, password } = await request.json();

      // Make the request to the external API
      const response = await fetch(process.env.API_SIGNIN, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
              'Ocp-Apim-Subscription-Key': process.env.API_KEY
          },
          body: JSON.stringify({ email, password })
      });

      // Check if the request was successful
      if (!response.ok) {
          const errorData = await response.json();
          return new Response(JSON.stringify({ message: 'Failed to sign in' }), { status: response.status });
      }

      // Parse the response from the external API
      const data = await response.json();

      // Return the parsed response
      return new Response(JSON.stringify({
          message: "Login successful",
          token: data.token,
          user: {
              id: data.user.id,
              email: data.user.email,
              display_name: data.user.display_name,
              profile_pic: data.user.profile_picture_url
          }
      }), { status: 200 });

  } catch (error) {
      // Handle any errors that occurred during the fetch
      return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}


