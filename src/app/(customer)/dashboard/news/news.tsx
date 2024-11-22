"use client";
import React from "react";
import Navbar from "../_component/navbar";
import Footer from "../_component/footer";

const News: React.FC = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col drawer-content">
          <Navbar />

          {/* News Content */}
          <div className="p-6 pt-20 flex justify-center">
            <div className="max-w-4xl w-full">
              <h1 className="text-4xl font-bold mb-8 text-center">Coffee Shop News</h1>

              {/* News Articles */}
              <div className="space-y-6">
                {/* Article Card */}
                <article className="bg-white shadow-lg rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-2">
                    New Coffee Blend Launch at Dibimbing Coffee
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">November 20, 2024</p>
                  <p className="text-gray-700 leading-relaxed">
                    Dibimbing Coffee is excited to announce the launch of its new coffee blend, 
                    <strong> Morning Bliss</strong>. This unique blend combines beans from Colombia and Ethiopia, 
                    offering a rich and aromatic flavor profile. Join us for a tasting event this Saturday!
                  </p>
                </article>

                <article className="bg-white shadow-lg rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-2">
                    Barista Championship Coming to Bangkok
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">November 18, 2024</p>
                  <p className="text-gray-700 leading-relaxed">
                    The annual <strong>Bangkok Barista Championship</strong> is set to take place next month, showcasing 
                    the skills of the best baristas in the region. Don’t miss the chance to witness incredible coffee 
                    artistry and innovation!
                  </p>
                </article>

                <article className="bg-white shadow-lg rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-2">
                    Sustainable Practices in Coffee Shops
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">November 15, 2024</p>
                  <p className="text-gray-700 leading-relaxed">
                    Many coffee shops are adopting sustainable practices to reduce their environmental impact. From using 
                    biodegradable cups to sourcing fair-trade coffee, learn how your favorite coffee spots are making a 
                    difference.
                  </p>
                </article>

                <article className="bg-white shadow-lg rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-2">
                    Coffee Shop Open Mic Night
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">November 10, 2024</p>
                  <p className="text-gray-700 leading-relaxed">
                    Join us for an <strong>open mic night</strong> at Dibimbing Coffee this Friday! Whether you’re a musician, 
                    poet, or storyteller, we welcome all talents to share their art. Enjoy a cup of coffee while supporting 
                    local artists!
                  </p>
                </article>
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

export default News;
