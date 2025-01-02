import React, { useState } from "react";

const UpcomingMarathons = () => {
    const marathons = [
        {
            id: 1,
            title: "City Marathon 2025",
            date: "Apr 15, 2025",
            location: "New York, USA",
        },
        {
            id: 2,
            title: "Spring Run 2025",
            date: "May 10, 2025",
            location: "London, UK",
        },
        {
            id: 3,
            title: "Desert Dash 2025",
            date: "Jun 22, 2025",
            location: "Dubai, UAE",
        },
        {
            id: 4,
            title: "Beachside Sprint",
            date: "Jul 5, 2025",
            location: "Sydney, Australia",
        },
        {
            id: 5,
            title: "Mountain Trek Marathon",
            date: "Aug 20, 2025",
            location: "Kathmandu, Nepal",
        },
        {
            id: 6,
            title: "Night Glow Run",
            date: "Sep 15, 2025",
            location: "Tokyo, Japan",
        },
    ];

    return (
        <section className="py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-base font-bold text-center text-purple-700 mb-3">
                    Events
                </h2>
                <h2 className="text-3xl md:text-5xl font-extrabold text-center text-purple-800 mb-5">
                    Upcoming Marathons Events
                </h2>
                <div className="mb-12 md:mb-16 h-1 w-36 bg-[#591a6a] mx-auto"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {marathons.map((marathon) => (
                        <div
                            key={marathon.id}
                            className="relative shadow-lg rounded-lg p-5 hover:scale-105 transition-transform duration-300 overflow-hidden border"
                        >
                            {/* Overlay for "Upcoming" text */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                Upcoming
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                {marathon.title}
                            </h3>
                            <p className="text-gray-500">
                                <span className="font-bold">Date:</span> {marathon.date}
                            </p>
                            <p className="text-gray-500">
                                <span className="font-bold">Location:</span> {marathon.location}
                            </p>
                            <button className="mt-4 btn btn-sm bg-[#591a6a] text-white hover:bg-[#3f084d]">
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpcomingMarathons;
