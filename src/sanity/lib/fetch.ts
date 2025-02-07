import { createClient } from "@sanity/client";
import { getAllProductsQuery } from "./query"; // ✅ Query import

const client = createClient({
  projectId: "0fpfqt5l",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});

// ✅ Function to Fetch Products
export async function fetchProducts() {
  try {
    const products = await client.fetch(getAllProductsQuery);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
