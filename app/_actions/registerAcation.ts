'use server'
import axios from 'axios'; // Import axios
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

type Inputs = {
    username: string;
    email: string;
    password: string;
  };

export async function registerAction(data:Inputs) {
  const url = process.env.NEXT_PUBLIC_DB

  try {
    const response = await axios.post(`${url}/api/register`,data); // Replace with your actual endpoint
    // Handle successful response
    (await cookies()).set('userToken',response.data.token)
    // console.log("🚀 ~ login ~ response:", response.data)
    revalidatePath('/')
    
    return response.data; // Return the fetched data

  } catch (err:unknown) {
    console.log("🚀 ~ getCart ~ err:", err)
    // console.error('Error fetching data:', err.response?.status);
    return {err}
  }
}