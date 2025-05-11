// src/pages/ControlPanel.jsx
// 🧠 LazierClub - 控制界面页面（初始版本）
// 用于输入任务描述、显示执行步骤和日志，未来可连接后端

import React, { useState } from 'react';

const ControlPanel = () => {
  const [task, setTask] = useState('');
  const [logs, setLogs] = useState([]);

  // 模拟执行逻辑：将任务分成几步假动作并打印日志
  const handleExecute = () => {
    const fakeSteps = [
      `开始任务：“${task}”`,
      '移动鼠标到 (100, 200)...',
      '点击按钮...',
      '输入文字...',
      '截图保存...'
    ];
    setLogs(fakeSteps);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto text-white">
      <h1 className="text-2xl font-bold mb-4">🧠 LazierClub - AI Agent 控制面板</h1>

      <textarea
        className="w-full p-2 border border-gray-600 rounded bg-black"
        rows={3}
        placeholder="请输入你的任务描述，如：打开记事本并写入‘你好’"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button
        onClick={handleExecute}
        className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
      >
        开始执行
      </button>

      <div className="mt-6 bg-gray-800 p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">📜 执行日志：</h2>
        <ul className="list-disc pl-5 space-y-1">
          {logs.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ControlPanel;
