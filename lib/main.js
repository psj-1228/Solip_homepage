import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Tailwind �ʱ�ȭ ����

const root = createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));