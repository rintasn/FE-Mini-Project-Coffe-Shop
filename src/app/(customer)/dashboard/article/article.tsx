"use client";
import React from "react";
import Navbar from "../_component/navbar";
import Footer from "../_component/footer";

const Article: React.FC = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col drawer-content">
          <Navbar />

          {/* Article Content */}
          <div className="p-6 pt-20 flex justify-center">
            <div className="card bg-white shadow-lg rounded-lg max-w-4xl">
              <div className="card-body p-8">
                <h1 className="text-4xl font-bold mb-6">
                  The Art of Coffee: A Journey Through Coffee Shops
                </h1>
                <p className="mb-6 text-lg">
                  Coffee shops have become a staple in modern society, serving as a gathering place for friends, a workspace for professionals, and a haven for coffee enthusiasts. The aroma of freshly brewed coffee, the sound of espresso machines, and the cozy ambiance create an inviting atmosphere that draws people in.
                </p>

                <h2 className="text-3xl font-semibold mt-6 mb-4">
                  A Brief History of Coffee Shops
                </h2>
                <p className="mb-6">
                  The history of coffee shops dates back to the 15th century in the Middle East, where coffee was first cultivated. The first coffee house, known as a qahveh khaneh, opened in Constantinople (now Istanbul) in the 16th century. These establishments quickly became popular social hubs, where people gathered to discuss politics, literature, and culture over a cup of coffee.
                </p>

                <h2 className="text-3xl font-semibold mt-6 mb-4">
                  Types of Coffee Offered
                </h2>
                <p className="mb-4">
                  Coffee shops offer a wide variety of coffee beverages, catering to different tastes and preferences. Some popular options include:
                </p>
                <ul className="list-disc list-inside mb-6">
                  <li>
                    <strong>Espresso:</strong> A concentrated coffee brewed by forcing hot water through finely-ground coffee beans.
                  </li>
                  <li>
                    <strong>Cappuccino:</strong> A blend of equal parts espresso, steamed milk, and milk foam, often topped with cocoa powder.
                  </li>
                  <li>
                    <strong>Latte:</strong> A creamy drink made with espresso and steamed milk, typically with a small amount of milk foam on top.
                  </li>
                  <li>
                    <strong>Cold Brew:</strong> Coffee brewed with cold water over an extended period, resulting in a smooth and less acidic flavor.
                  </li>
                </ul>

                <h2 className="text-3xl font-semibold mt-6 mb-4">
                  The Coffee Shop Experience
                </h2>
                <p className="mb-4">
                  Beyond just serving coffee, coffee shops create a unique experience for their customers. The ambiance is often designed to be warm and inviting, with comfortable seating, soft lighting, and sometimes even live music. Many coffee shops also offer free Wi-Fi, making them popular spots for remote workers and students.
                </p>
                <p className="mb-6">
                  Additionally, coffee shops often host events such as open mic nights, art shows, and coffee tastings, fostering a sense of community and connection among patrons.
                </p>

                <h2 className="text-3xl font-semibold mt-6 mb-4">
                  Conclusion
                </h2>
                <p className="mb-6">
                  Coffee shops are more than just places to grab a quick caffeine fix; they are cultural landmarks that bring people together. Whether you’re looking for a quiet place to read, a lively spot to catch up with friends, or a cozy corner to work, a coffee shop offers a little something for everyone. So next time you visit your local coffee shop, take a moment to appreciate the rich history and vibrant culture that surrounds this beloved beverage.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Article;
