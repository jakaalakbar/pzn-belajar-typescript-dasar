import type { Category, Product } from "../src/type-alias";

describe("Type Alias", () => {
  it("should suport in typescript", () => {
    const category: Category = {
      id: 1,
      name: "Electronics",
      description: "Devices and gadgets",
    };

    const product: Product = {
      id: "p1",
      name: "Smartphone",
      price: 699,
      category: category,
      // description: "Latest model smartphone",
    };

    console.info("Category:", category);
    console.info("Product:", product);
  });
});
