// import axios from 'axios';

// export default async function handler(req, res) {
//     console.log('Handler called');

//     if (req.method === 'POST') {
//         console.log('POST request received');
//         const { email, password } = req.body;

//         try {
//             console.log('Sending request to Azure API');
//             const response = await axios.post(
//                 'https://oo-auth-apim.azure-api.net/OO-auth/signin',
//                 {
//                     email,
//                     password
//                 },
//                 {
//                     headers: {
//                         'Ocp-Apim-Subscription-Key': process.env.API_KEY // Use your environment variable for the API key
//                     }
//                 }
//             );

//             const { token, user } = response.data;

//             console.log('Response from Azure API:', response.data);

//             res.status(200).json({ token, user });
//         } catch (error) {
//             console.error('Error during sign-in:', error.message);
//             res.status(error.response?.status || 500).json({ message: error.message });
//         }
//     } else {
//         res.status(405).json({ message: 'Method Not Allowed' });
//     }
// }

export async function GET(request) {
  // const { searchParams } = new URL(request.url)
  // const id = searchParams.get('id')
  // const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // })
  // const product = await res.json()
 
  return Response.json({ 'product': 'test' })
}

export async function POST(request) {
  const body = await request.json();

  const { email, password } = body;
  const bodystring = JSON.stringify({
      email,
      password
  });
  console.log(`Posted data is: ${bodystring}`);
  return Response.json({ res: body });
}