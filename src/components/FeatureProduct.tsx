import React from "react";
import Link from "next/link";
import { WixClientServer } from "@/lib/WixClientServer";
import { products } from "@wix/stores";
import { Section } from "lucide-react";
import DOMPurity from "isomorphic-dompurify";

const FeatureProduct = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  const ProductPerPage = 20;
  const mywixClient = await WixClientServer();
  const productQuery = mywixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryId)
    .hasSome("productType", [searchParams?.type || "physical" || "digital"])
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(limit || ProductPerPage);

  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" "); 
    if (sortType === "asc") {
      productQuery.ascending(sortBy);
    }
    if (sortType === "desc") {
      productQuery.descending(sortBy);
    }
  }

  const res = await productQuery.find();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {res.items.map((product: products.Product) => (
        <Link
          key={product._id}
          href={"/" + product.slug}
          className="border rounded-lg p-4 flex flex-col items-center"
        >
          <div className="relative w-full h-64 mb-4">
            <img
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt="Product 1"
              className="w-full h-full object-cover rounded-md transition-opacity duration-300 hover:opacity-0"
            />
            {product.media?.items && (
              <img
                src={product.media?.items[1].image?.url || "/product.png"}
                alt="Product 1 Alternate"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-md transition-opacity duration-300 opacity-0 hover:opacity-100"
              />
            )}
          </div>
          <h3 className="text-lg font-medium mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-2">${product.price?.price}</p>
          {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500 mb-4"
              dangerouslySetInnerHTML={{
                __html: DOMPurity.sanitize(
                  product.additionalInfoSections?.find(
                    (section: any) => section.title === "shortDesc"
                  )?.description || ""
                ),
              }}
            ></div>
          )}
          <button className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Add to Cart
          </button>
        </Link>
      ))}

      {/* Add more product cards manually as needed */}
    </div>
  );
};

export default FeatureProduct;
