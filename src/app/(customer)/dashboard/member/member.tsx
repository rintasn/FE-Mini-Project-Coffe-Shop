"use client";
import React from "react";
import Navbar from "../_component/navbar";
import Footer from "../_component/footer";

const Member: React.FC = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col drawer-content">
          <Navbar />

          {/* Page content */}
          <div className="flex flex-col items-center justify-center p-6">
            {/* Registration Form */}
            <div className="mt-8 w-full max-w-md pt-8 pb-8 px-4 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Register as a Member</h2>
              <form className="space-y-4">
                <div>
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Register
                </button>
              </form>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Member;
