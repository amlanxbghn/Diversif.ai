import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleGenerativeAI } from "@google/generative-ai";

const Convert = () => {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState("");
  const [inputText, setInputText] = useState("");
  const [convertFrom, setConvertFrom] = useState("");
  const [convertTo, setConvertTo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/register'); // Redirect to register page if not logged in
    }
  }, [navigate]);

  const genAI = new GoogleGenerativeAI("AIzaSyCy0Remq9c1uGAPvmIMsuTZZi_lG4EAy3k");

  const fetchData = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Convert the following text: "${inputText}" which was originally written for ${convertFrom} platform and optimize it for posting on ${convertTo} with proper format of ${convertTo} so that it gets maximum engagement. Also, don't add any highlights or bold texts`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    setApiData(text);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchData();
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-5">Convert your Content Seamlessly.</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-4xl">
        <div className="flex flex-wrap -mx-2 mb-5">
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <label htmlFor="inputText" className="block text-sm font-medium mb-1">Input Text</label>
            <input
              type="text"
              id="inputText"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <label htmlFor="convertFrom" className="block text-sm font-medium mb-1">Convert From</label>
            <select
              id="convertFrom"
              value={convertFrom}
              onChange={(e) => setConvertFrom(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Platform</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Twitter">Twitter</option>
              <option value="YouTube">YouTube</option>
            </select>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <label htmlFor="convertTo" className="block text-sm font-medium mb-1">Convert To</label>
            <select
              id="convertTo"
              value={convertTo}
              onChange={(e) => setConvertTo(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Platform</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Twitter">Twitter</option>
              <option value="YouTube">YouTube</option>
            </select>
          </div>
          <div className="w-full md:w-1/6 px-2 flex items-end">
            <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg font-semibold">Submit</button>
          </div>
        </div>
      </form>
      <div className="mt-5 w-full max-w-4xl">
        {!loading && apiData && <p className="text-left">{apiData}</p>}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default Convert;
