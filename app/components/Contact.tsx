"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [resultColor, setResultColor] = useState("white");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("");
    setLoading(true);

    const form = event.currentTarget; // 👈 capture reference immediately

    const formData = new FormData(form);
    formData.append("access_key", "068cf1eb-2a2c-410b-8f7b-f15db7b044a7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(data.message);
        setResultColor("green");
        form.reset(); // 👈 safe, always defined
      } else {
        console.error("Error", data);
        setResult(data.message || "Something went wrong ❌");
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setResult("Network error. Please try again.");
      setResultColor("red");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 font-outfit bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <h4 className="text-center mb-2 text-lg font-ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-ovo">Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            suppressHydrationWarning
          />
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            suppressHydrationWarning
          />
        </div>
        <textarea
          name="message"
          rows={6}
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          suppressHydrationWarning
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full cursor-pointer mx-auto duration-500 ${
            loading
              ? "bg-gray-400 cursor-wait"
              : "bg-black/80 text-white hover:bg-black"
          }`}
        >
          {loading ? "Sending....." : "Submit now"}
          {!loading && (
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          )}
        </button>

        <p
          className={`mt-4 text-center ${
            resultColor === "green" ? "text-green-500" : "text-red-500"
          }`}
        >
          {result}
        </p>
      </form>
    </div>
  );
};

export default Contact;
