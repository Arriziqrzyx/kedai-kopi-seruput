import { useState } from "react";

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState("coffee");

  const renderTabContent = () => {
    const content = {
      coffee: [
        {
          title: "Cappuccino",
          description: "A creamy blend of espresso and milk.",
        },
        {
          title: "Vietnam Drip",
          description: "Rich, strong coffee with condensed milk.",
        },
        {
          title: "Kopi Susu Gula Aren",
          description: "Traditional coffee with palm sugar.",
        },
      ],
      tea: [
        {
          title: "Es Teh Jumbo",
          description: "Refreshing iced tea in a jumbo size.",
        },
        {
          title: "Tjampolay",
          description: "Unique Indonesian fruit syrup tea.",
        },
        { title: "Es Jeruk", description: "Freshly squeezed orange juice." },
      ],
      chicken: [
        {
          title: "Ayam Goreng",
          description: "Crispy fried chicken with spices.",
        },
        {
          title: "Ayam Bakar",
          description: "Grilled chicken with traditional seasoning.",
        },
        {
          title: "Steak Ayam",
          description: "Tender chicken steak with sauce.",
        },
      ],
    };

    return (
      <div className="grid gap-6 md:grid-cols-3">
        {content[activeTab].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center shadow-lg rounded-lg p-4 border border-gray-700"
          >
            <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>
            <h4 className="text-lg font-bold text-yellow-500">{item.title}</h4>
            <p className="text-gray-400 text-sm text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="bg-black py-16 px-6 md:px-12 lg:px-24 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-10 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl md:text-lg font-bold text-white tracking-widest">
          PRODUCTS
        </h2>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-3">
          OUR <span className="text-yellow-500">SPECIAL MENU</span>
        </h3>
        <p className="mt-4 text-gray-400 text-base sm:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          iure velit dolore mollitia, corporis quaerat.
        </p>
      </div>

      {/* Tabs */}
      <div className="w-full max-w-7xl">
        <div
          role="tablist"
          className="tabs tabs-lifted justify-center mb-8 text-lg"
        >
          <a
            role="tab"
            className={`tab ${
              activeTab === "coffee"
                ? "tab-active [--tab-bg:#f59e0b] [--tab-border-color:#FFA500] text-white"
                : "text-white"
            } px-8 py-4 text-xl font-semibold`}
            onClick={() => setActiveTab("coffee")}
          >
            Coffee Shop
          </a>
          <a
            role="tab"
            className={`tab ${
              activeTab === "tea"
                ? "tab-active [--tab-bg:#f59e0b] [--tab-border-color:#FFA500] text-white"
                : "text-white"
            } px-8 py-4 text-xl font-semibold`}
            onClick={() => setActiveTab("tea")}
          >
            Teh Seruput
          </a>
          <a
            role="tab"
            className={`tab ${
              activeTab === "chicken"
                ? "tab-active [--tab-bg:#f59e0b] [--tab-border-color:#FFA500] text-white"
                : "text-white"
            } px-8 py-4 text-xl font-semibold`}
            onClick={() => setActiveTab("chicken")}
          >
            Ayam D-Kremes
          </a>
        </div>

        {/* Tab Content */}
        <div className="p-6 rounded-lg shadow-lg text-center">
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
}
