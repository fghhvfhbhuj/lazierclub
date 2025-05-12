import React from 'react';
import logo from './assets/lazier_logo.png';
import './index.css'; // 或 './app.css'，视你使用的哪个为主

export default function App() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-rose-200 via-violet-200 to-indigo-100 text-gray-800 font-sans overflow-x-hidden">
      {/* 顶部导航栏 */}
      <header className="flex justify-between items-center px-8 py-4 text-white max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="LazierClub Logo" className="w-10 h-10 rounded-full bg-transparent" />
          <span className="text-xl font-bold">懒人俱乐部</span>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#" className="hover:underline">首页</a>
          <a href="#" className="hover:underline">找Chat回饭</a>
          <a href="#" className="hover:underline">工具库</a>
          <a href="#" className="hover:underline">联系我们</a>
        </nav>
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* 主视觉区域 */}
      <section className="text-center py-16 px-4 max-w-3xl mx-auto">
        <img src={logo} alt="LazierClub Logo" className="w-28 h-28 mx-auto mb-6 bg-transparent rounded-full" />

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">工作更懒，创造更酷</h1>
        <p className="text-white text-base md:text-lg leading-relaxed">
          我们的理念<br />
          LazierClub 希望通过自动化工具与智能系统，节省你日常的重复劳动时间，<br />
          让你更专注于真正重要的创造与思考。<br />
          我们希望 LLM 成为问题的解决者，而不是反复提问的一次性工具。
        </p>
      </section>

      {/* 功能展示区域 */}
      <section className="px-6 py-12 bg-white rounded-t-3xl shadow-lg">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-10">即将推出的功能</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg shadow text-center transform hover:scale-105 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-2">任务自动化</h3>
            <p className="text-sm text-gray-600">支持重复性文档编写、文件整理、脚本运行自动化</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow text-center transform hover:scale-105 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-2">截图与反馈</h3>
            <p className="text-sm text-gray-600">一键截图并上传 GPT 获取即时诊断与解决方案</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow text-center transform hover:scale-105 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-2">智能操作</h3>
            <p className="text-sm text-gray-600">通过语音/文本指令远程控制鼠标、键盘执行操作</p>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="text-center text-xs text-gray-600 py-6 bg-white">
        © 2025 LazierClub. All rights reserved.
      </footer>
    </div>
  );
}
