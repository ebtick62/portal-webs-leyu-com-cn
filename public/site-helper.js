// public/site-helper.js
(function() {
  'use strict';

  const PAGE_CONFIG = {
    portalUrl: 'https://portal-webs-leyu.com.cn',
    keyword: '乐鱼体育',
    version: '2.1.0'
  };

  function buildHintCard(container) {
    const card = document.createElement('div');
    card.className = 'site-hint-card';
    card.style.cssText = [
      'background: #f0f8ff',
      'border: 1px solid #b0d4f1',
      'border-radius: 12px',
      'padding: 20px 24px',
      'margin: 20px auto',
      'max-width: 640px',
      'box-shadow: 0 2px 8px rgba(0,0,0,0.08)',
      'font-family: system-ui, -apple-system, sans-serif',
      'line-height: 1.5'
    ].join(';');

    const title = document.createElement('h3');
    title.textContent = `欢迎访问 ${PAGE_CONFIG.keyword} 官方入口`;
    title.style.cssText = 'margin: 0 0 10px 0; color: #1a3a5c; font-size: 1.25rem';

    const desc = document.createElement('p');
    desc.textContent = `当前页面为 ${PAGE_CONFIG.keyword} 平台演示页面，所有服务入口均指向 ${PAGE_CONFIG.portalUrl}，请认准官方域名。`;
    desc.style.cssText = 'margin: 0 0 12px 0; color: #2c3e50; font-size: 0.95rem';

    const accessNote = document.createElement('div');
    accessNote.className = 'access-instruction';
    accessNote.style.cssText = 'background: #e6f7e6; border-left: 4px solid #52c41a; padding: 10px 14px; border-radius: 6px; font-size: 0.9rem; color: #1d4d1d';
    accessNote.textContent = '💡 说明：本卡片仅为辅助提示，不收集任何用户信息。直接点击链接或手动输入 URL 即可访问。';

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(accessNote);
    container.appendChild(card);
  }

  function buildBadgeGroup(container) {
    const badges = [
      { label: '官方', color: '#1677ff' },
      { label: '体育', color: '#52c41a' },
      { label: '乐鱼', color: '#fa8c16' },
      { label: '入口', color: '#eb2f96' },
      { label: '安全', color: '#2f54eb' }
    ];

    const wrapper = document.createElement('div');
    wrapper.className = 'keyword-badges';
    wrapper.style.cssText = 'display: flex; flex-wrap: wrap; gap: 8px; margin: 15px auto; max-width: 640px; justify-content: center';

    badges.forEach(item => {
      const span = document.createElement('span');
      span.textContent = `#${item.label}`;
      span.style.cssText = [
        'display: inline-block',
        'padding: 4px 12px',
        'background: ' + item.color,
        'color: #fff',
        'border-radius: 20px',
        'font-size: 0.85rem',
        'font-weight: 500',
        'cursor: default',
        'transition: transform 0.2s'
      ].join(';');
      span.addEventListener('mouseenter', function() { this.style.transform = 'scale(1.05)'; });
      span.addEventListener('mouseleave', function() { this.style.transform = 'scale(1)'; });
      wrapper.appendChild(span);
    });

    container.appendChild(wrapper);
  }

  function buildAccessLink(container) {
    const linkBox = document.createElement('div');
    linkBox.style.cssText = 'text-align: center; margin: 20px auto; max-width: 640px';

    const link = document.createElement('a');
    link.href = PAGE_CONFIG.portalUrl;
    link.textContent = `前往 ${PAGE_CONFIG.keyword} 平台`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.style.cssText = [
      'display: inline-block',
      'padding: 10px 28px',
      'background: #1677ff',
      'color: #fff',
      'text-decoration: none',
      'border-radius: 30px',
      'font-size: 1rem',
      'font-weight: 600',
      'box-shadow: 0 4px 12px rgba(22,119,255,0.3)',
      'transition: background 0.2s, transform 0.1s'
    ].join(';');
    link.addEventListener('mouseenter', function() { this.style.background = '#4096ff'; });
    link.addEventListener('mouseleave', function() { this.style.background = '#1677ff'; });
    link.addEventListener('mousedown', function() { this.style.transform = 'scale(0.97)'; });
    link.addEventListener('mouseup', function() { this.style.transform = 'scale(1)'; });

    linkBox.appendChild(link);
    container.appendChild(linkBox);
  }

  function init() {
    const container = document.createElement('div');
    container.id = 'site-helper-root';
    container.style.cssText = 'padding: 10px 0';

    const target = document.body;
    if (!target) return;

    buildHintCard(container);
    buildBadgeGroup(container);
    buildAccessLink(container);

    target.insertBefore(container, target.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();