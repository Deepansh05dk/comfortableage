import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const { slug } = req.query; // Get the slug from the request query

    const client = await clientPromise;
    const db = client.db("comfortableAge");

    if (req.method === "GET") {
      // Handle GET request to retrieve products by category slug
      const products = await db
        .collection("Product")
        .find({ category: slug })
        .toArray();
      res.status(200).json(products);
    } else {
      res.status(405).end(); // Method not allowed
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
