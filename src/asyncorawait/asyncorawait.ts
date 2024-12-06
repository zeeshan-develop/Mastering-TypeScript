// Define interfaces for Product and Cart
interface Product {
  productId: number;
  quantity: number;
}

interface Cart {
  id: number;
  userId: number;
  date: string;
  products: Product[];
}

// Async function to fetch cart data with proper error handling
const fetchCartsData = async (): Promise<Cart[]> => {
  try {
    const response = await fetch("https://fakestoreapi.com/carts");

    // Check if the response status is OK (2xx range)
    if (!response.ok) {
      throw new Error(`Failed to fetch carts data: ${response.statusText}`);
    }

    // Parse the JSON response and return the data
    const data: Cart[] = await response.json();
    return data;
  } catch (error: unknown) {
    // Improved error handling
    if (error instanceof Error) {
      throw new Error(`Failed to fetch carts data: ${error.message}`);
    } else {
      throw new Error("An unknown error occurred while fetching carts data.");
    }
  }
};

// Call the function and handle data or errors
fetchCartsData()
  .then((data) => {
    console.log("Carts data fetched successfully:", data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
