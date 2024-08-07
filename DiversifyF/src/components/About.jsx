import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col items-left justify-center space-y-5 text-left max-w-2xl">
      <h1 className="text-4xl font-bold">About Diversify.ai</h1>
      <p className="text-zinc-400">Welcome to Diversif.ai – your go-to platform for seamless content diversification across multiple social media platforms. Our mission is to empower creators, marketers, and businesses by simplifying the process of adapting content to fit the unique requirements and formats of various platforms.</p>
      <h2 className="text-2xl font-bold">What we do</h2>
      <p className="text-zinc-400">In the fast-paced world of digital marketing and content creation, time and efficiency are paramount. Diversif.ai leverages cutting-edge AI technology to automate the transformation of your content, ensuring it’s perfectly tailored for every social media channel you use. Whether you’re adapting a blog post for Facebook, converting a video for Instagram, or crafting a tweet for Twitter, Diversif.ai has you covered.</p>
      <h2 className="text-2xl font-bold">Key Features</h2>
      <ul className="list-disc pl-5">
        <li className="text-zinc-400">Multi-Platform Compatibility</li>
        <li className="text-zinc-400">AI-Powered Conversion</li>
        <li className="text-zinc-400">Customization Options</li>
        <li className="text-zinc-400">User-Friendly Interface</li>
        <li className="text-zinc-400">Real-Time Previews</li>
      </ul>
      <h2 className="text-2xl font-bold">Our Vision</h2>
      <p className="text-zinc-400">At Diversif.ai, we envision a world where content creators can focus more on creativity and strategy, rather than the tedious task of manually adapting content for different platforms. We believe that by automating and optimizing this process, we can help you reach a broader audience with less effort and more consistency.</p>
      <p className="font-bold">Join Us on Our Journey</p>
    </div>
  );
}

export default About;
