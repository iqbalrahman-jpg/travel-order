import React from "react";
import Header from "../components/page/Header";

const Product: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to My Website
        </h2>
        <p className="text-lg text-gray-600">
          This is the Product page content.
        </p>
      </main>
    </div>
  );
};

export default Product;
