import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("comfortableAge");

    if (req.method === "GET") {
      // Handle GET request to return all products
      const products = await db.collection("Product").find({}).toArray();
      res.status(200).json({ products });
    } else if (req.method === "POST") {
      // Handle POST request to insert a new product
      const products = req.body;
      products.forEach(async (product) => {
        const {
          title,
          description,
          price,
          discountPercentage,
          rating,
          stock,
          brand,
          category,
          allowedqty,
          thumbnail,
          images,
        } = product;

        if (
          !title ||
          !description ||
          !price ||
          !discountPercentage ||
          !rating ||
          !stock ||
          !brand ||
          !category ||
          !allowedqty ||
          !thumbnail ||
          !images
        ) {
          // Check if all required fields are provided
          return res.status(400).json({ error: "All fields are required" });
        }

        const newProduct = {
          title,
          description,
          price,
          discountPercentage,
          rating,
          stock,
          brand,
          category,
          allowedqty,
          thumbnail,
          images,
        };

        await db.collection("Product").insertOne(newProduct);
      });
      res.status(200).json({ success: true });
    } else {
      res.status(405).end(); // Method not allowed
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
