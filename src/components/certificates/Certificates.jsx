import React from "react";
import certificate1 from "./Nipun_Kumar_singh_certificate.pdf";
import certificate2 from "./NodeJsCertificates.pdf";
import certificate3 from "./ProgrammingInCpp.pdf";
import certificate4 from "./javascriptHtmlCss.pdf";
import certificate5 from "./dpAndGreedyProgramming.pdf";
import certificate6 from "./dsaUdemy.pdf";
const certificates = [
  {
    title: "React Fundamentals",
    platform: "Coursera",
    date: "July 2024",
    file: certificate1,
  },
  {
    title: "Server side JavaScript with Node.js",
    platform: "Cousera",
    date: "May 2024",
    file: certificate2,
  },
  {
    title: "Programming in C++: Hands-on Introduction",
    platform : "Coursera",
    date : "",
    file : certificate3,
  },
  {
    title: "HTML, CSS, and Javascript for Web Developers",
    platform : "Coursera",
    date : "May 2024",
    file : certificate4,
  },
  {
    title: "Dynamic Programming, Greedy Algorithms",
    platform : "Coursera",
    date : "May 2024",
    file : certificate5,
  },
  {
    title: "The Complete Introduction to C++ Programming",
    platform : "Udemy",
    date : "June 2023",
    file : certificate6,
  }
];

const Certificates = () => {
  return (
    <div className="p-6 text-[#8245ec] leading-tight min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">My Certificates</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl overflow-hidden p-4 border hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">
              {/* Embed PDF inside the div */}
              <embed
                src={cert.file}
                type="application/pdf"
                width="100%"
                height="200px"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="text-gray-600">{cert.platform}</p>
              <p className="text-gray-500 text-sm">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
