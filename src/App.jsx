import React from 'react';
import './App.css';
import logo from './assets/lazier_logo.png';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-12 flex flex-col items-center justify-center">
      <img src={logo} alt="LazierClub Logo" className="w-32 h-32 mb-6 rounded-full shadow-lg border-4 border-white" />

      <h1 className="text-5xl font-bold mb-4 tracking-wide">LazierClub</h1>

      <p className="text-lg text-gray-300 text-center max-w-2xl leading-relaxed">
        LazierClub 的目标是节省人们重复劳动的时间，
        让用户可以更加专注于创造，而不是不断重复操作。
        我们希望 LLM 成为真正的问题解决者，而不是被动的问答工具。
      </p>

      <p className="text-md text-gray-400 text-center max-w-xl mt-6">
        “把‘你怎么做’变成‘我来做’。”
      </p>

      <footer className="mt-12 text-sm text-gray-500">© 2025 LazierClub. All rights reserved.</footer>
    </div>
  );
}
