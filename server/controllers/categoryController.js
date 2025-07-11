import connectToProductDB from '../config/connectToProductDB.js'

const { db, productCollection } = await connectToProductDB()

export const getProductsByCategory = async (req, res) => {
    try {
        const { category } = req.query;

        // Validate input
        if (!category) {
            return res.status(400).json({ message: "Missing 'category' parameter in query" });
        }

        const products = await productCollection.find({ category }).toArray();

        if (products.length === 0) {
            return res.status(404).json({ message: `No products found in category '${category}'` });
        }

        res.status(200).json(products);

    } catch (error) {
        console.error("Category fetch error:", error);
        res.status(500).json({
            message: "Error fetching products by category",
            error: error
        });
    }
};

// try {
//     const { page, limit } = req.query;

//     if (!page) throw new Error("Page parameter is required");

//     const pageNumber = parseInt(page);
//     const limitNumber = parseInt(limit);
//     const nextPage = (pageNumber - 1) * limitNumber;

//     // Fetch paginated products
//     const products = await productCollection
//       .find({ category })
//       .skip(nextPage)
//       .limit(limitNumber)
//       .toArray();

//     // Get the total count of products to determine pagination info
//     const totalCount = await productCollection.countDocuments();

//     // Calculate if there are more pages
//     const totalPages = Math.ceil(totalCount / limitNumber);
//     const hasMore = pageNumber < totalPages;

//     // Return products with pagination info
//     res.status(200).json({
//       products,
//       totalCount,
//       totalPages,
//       hasMore, // Whether there are more products to load
//     });
    
//   } catch (error) {
//     return res.status(500).json({
//       message: "Error fetching PAGINATED products: ",
//       Error: error.message,
//     });
//   }
// };