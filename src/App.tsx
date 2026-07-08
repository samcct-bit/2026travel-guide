import { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  MapPin,
  Copy,
  Search,
  BookOpen,
  Trash2,
  Utensils,
  Info,
  Calendar,
  Compass
} from 'lucide-react';
import { itineraryData, mapCodeList } from './data/itinerary';
import type { DailyItinerary } from './data/itinerary';
import './App.css';

function App() {
  // Theme State
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('miyakojima-theme');
    if (saved === 'light') return 'light';
    return 'dark';
  });

  // Active Tab: 1-6 for days, 0 for MapCode list
  const [activeTab, setActiveTab] = useState<number>(() => {
    const saved = localStorage.getItem('miyakojima-active-tab');
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (parsed >= 0 && parsed <= 6) return parsed;
    }
    return 1;
  });

  // Filter State: 'all' | 'veg' | 'edu'
  const [filterType, setFilterType] = useState<'all' | 'veg' | 'edu'>('all');

  // Completed Activities (localStorage key: 'miyakojima-completed')
  const [completed, setCompleted] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('miyakojima-completed');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return {};
      }
    }
    return {};
  });

  // Daily Memos (localStorage key: 'miyakojima-memos')
  const [memos, setMemos] = useState<Record<number, string>>(() => {
    const saved = localStorage.getItem('miyakojima-memos');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return {};
      }
    }
    return {};
  });

  // Copy status helper
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Search query for MapCodes
  const [searchQuery, setSearchQuery] = useState('');

  // Expanded details state (store activity title)
  const [expandedActivity, setExpandedActivity] = useState<string | null>(null);

  // Apply theme to body element
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
    localStorage.setItem('miyakojima-theme', theme);
  }, [theme]);

  // Keep active tab in localStorage
  useEffect(() => {
    localStorage.setItem('miyakojima-active-tab', activeTab.toString());
  }, [activeTab]);

  // Keep completed activities in localStorage
  useEffect(() => {
    localStorage.setItem('miyakojima-completed', JSON.stringify(completed));
  }, [completed]);

  // Keep memos in localStorage
  useEffect(() => {
    localStorage.setItem('miyakojima-memos', JSON.stringify(memos));
  }, [memos]);

  // Toggle Theme
  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Toggle Activity Completion
  const toggleComplete = (activityTitle: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid expanding card when checking checkbox
    setCompleted(prev => ({
      ...prev,
      [activityTitle]: !prev[activityTitle]
    }));
  };

  // Update Memo
  const handleMemoChange = (dayNum: number, value: string) => {
    setMemos(prev => ({
      ...prev,
      [dayNum]: value
    }));
  };

  // Reset Progress & Memos
  const handleReset = () => {
    if (window.confirm('確定要重置所有行程完成狀態與備忘錄嗎？')) {
      setCompleted({});
      setMemos({});
      localStorage.removeItem('miyakojima-completed');
      localStorage.removeItem('miyakojima-memos');
    }
  };

  // Copy MapCode utility
  const copyToClipboard = (code: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    });
  };

  // Calculate Progress Percentage
  const totalActivitiesCount = itineraryData.reduce((acc, curr) => acc + curr.flow.length, 0);
  const completedCount = Object.values(completed).filter(Boolean).length;
  const progressPercent = totalActivitiesCount > 0 ? Math.round((completedCount / totalActivitiesCount) * 100) : 0;

  // Selected Day Data
  const currentDayData = itineraryData.find(d => d.day === activeTab);

  // Filtered Activities
  const getFilteredActivities = (dayData: DailyItinerary) => {
    return dayData.flow.filter(activity => {
      if (filterType === 'veg') {
        // Show if it's food or has specific vegetarian keywords
        return activity.type === 'food' || activity.title.includes('自炊') || activity.title.includes('素食');
      }
      if (filterType === 'edu') {
        return !!activity.teachingLink;
      }
      return true;
    });
  };

  // Filtered MapCodes based on search
  const filteredMapCodes = mapCodeList.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.note && item.note.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="app-container">
      {/* Header Panel */}
      <header className="app-header glass-panel">
        <div className="header-title-container">
          <span className="header-subtitle">Miyakojima Itinerary Planner</span>
          <h1 className="header-title glow-text">宮古島 6 天 5 夜「海陸整合與素食防踩雷」完美指南</h1>
        </div>
        <div className="header-controls">
          <button className="reset-btn" onClick={handleReset} title="重置進度">
            <Trash2 size={18} />
          </button>
          <button className="theme-toggle-btn" onClick={toggleTheme} title="切換主題">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      {/* Progress Panel */}
      <section className="progress-panel glass-panel">
        <div className="progress-header">
          <span>解鎖進度：已探索 {completedCount} / {totalActivitiesCount} 個行程</span>
          <span>{progressPercent}%</span>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }} />
        </div>
      </section>

      {/* Day Tabs Navigation */}
      <nav className="navigation-panel glass-panel">
        <ul className="tabs-list">
          {itineraryData.map(d => (
            <li key={d.day}>
              <button
                className={`tab-button ${activeTab === d.day ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(d.day);
                  setFilterType('all');
                }}
              >
                <span>Day {d.day}</span>
                <span className="tab-button-desc">{d.dayOfWeek}</span>
              </button>
            </li>
          ))}
          <li>
            <button
              className={`tab-button ${activeTab === 0 ? 'active' : ''}`}
              onClick={() => setActiveTab(0)}
            >
              <span>MapCode</span>
              <span className="tab-button-desc">全島導航</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Main Dashboard */}
      {activeTab > 0 && currentDayData ? (
        <div className="dashboard-grid">
          {/* Timeline and Details */}
          <main className="main-content-panel glass-panel">
            <div className="filter-bar">
              <span className="day-theme-title">Day {currentDayData.day} - {currentDayData.theme}</span>
              <div className="filter-options">
                <button
                  className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
                  onClick={() => setFilterType('all')}
                >
                  <Compass size={14} /> 全部
                </button>
                <button
                  className={`filter-btn ${filterType === 'veg' ? 'active' : ''}`}
                  onClick={() => setFilterType('veg')}
                >
                  <Utensils size={14} /> 素食友善
                </button>
                <button
                  className={`filter-btn ${filterType === 'edu' ? 'active' : ''}`}
                  onClick={() => setFilterType('edu')}
                >
                  <BookOpen size={14} /> 教學連結
                </button>
              </div>
            </div>

            {getFilteredActivities(currentDayData).length === 0 ? (
              <div className="empty-state">
                <span className="empty-state-icon">🏖️</span>
                <p>此類別今日無特定行程，放鬆享受陽光與沙灘吧！</p>
              </div>
            ) : (
              <div className="timeline-container">
                {getFilteredActivities(currentDayData).map((activity, idx) => {
                  const isCompleted = !!completed[activity.title];
                  const isExpanded = expandedActivity === activity.title;
                  return (
                    <div
                      key={idx}
                      className={`timeline-item ${isCompleted ? 'completed' : ''}`}
                    >
                      {/* Checkbox Node */}
                      <div className="timeline-node">
                        <label className="custom-checkbox">
                          <input
                            type="checkbox"
                            checked={isCompleted}
                            onChange={(e) => toggleComplete(activity.title, e as any)}
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>

                      {/* Content Card */}
                      <div
                        className="timeline-card glass-card hover-scale"
                        onClick={() => setExpandedActivity(isExpanded ? null : activity.title)}
                      >
                        <div className="timeline-header">
                          <span className="time-badge">{activity.time}</span>
                          <h3 className="timeline-card-title">{activity.title}</h3>
                          <span className={`type-badge ${activity.type}`}>
                            {activity.type === 'attraction' && '景點'}
                            {activity.type === 'food' && '餐飲'}
                            {activity.type === 'hotel' && '住宿'}
                            {activity.type === 'activity' && '體驗'}
                            {activity.type === 'transport' && '交通'}
                            {activity.type === 'shopping' && '採買'}
                            {activity.type === 'other' && '其他'}
                          </span>
                        </div>

                        {activity.notes && (
                          <p className="timeline-notes">{activity.notes}</p>
                        )}

                        {/* Collapsible details */}
                        {isExpanded && (
                          <div className="timeline-expanded-content">
                            {activity.details && (
                              <p className="timeline-details">{activity.details}</p>
                            )}

                            {activity.mapCode && (
                              <div
                                className="mapcode-widget"
                                onClick={(e) => copyToClipboard(activity.mapCode!, e)}
                              >
                                <MapPin size={14} className="mapcode-icon" />
                                <span className="mapcode-label">MapCode:</span>
                                <span className="mapcode-value">{activity.mapCode}</span>
                                <span className="mapcode-copy-status">
                                  {copiedCode === activity.mapCode ? '已複製 ✓' : <Copy size={12} />}
                                </span>
                              </div>
                            )}

                            {activity.teachingLink && (
                              <div className="teaching-alert">
                                <BookOpen size={16} className="teaching-icon" />
                                <span className="teaching-text">
                                  <strong>蔡老師專屬教學連結：</strong>
                                  {activity.teachingLink}
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </main>

          {/* Sidebar: Vegetarian & Notes */}
          <aside className="sidebar-panel">
            {/* Vegetarian Tips Panel */}
            <div className="sidebar-section glass-panel">
              <h2 className="sidebar-section-title">
                <Utensils size={18} /> 素食防踩雷與餐飲安排
              </h2>
              {currentDayData.vegTips.length === 0 ? (
                <p className="sidebar-desc">今日餐飲請配合自炊或自備素食。祝用餐順利！</p>
              ) : (
                <div>
                  {currentDayData.vegTips.map((tip, idx) => (
                    <div key={idx} className="glass-card veg-tip-card">
                      <div className="veg-tip-header">
                        <span>{tip.title}</span>
                        {tip.safetyRating !== undefined && (
                          <span className="veg-tip-stars">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span
                                key={i}
                                className={`star-icon ${i < tip.safetyRating! ? '' : 'empty'}`}
                              >
                                ★
                              </span>
                            ))}
                          </span>
                        )}
                      </div>
                      <p className="veg-tip-content">{tip.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Teaching Notes / Memos Panel */}
            <div className="sidebar-section glass-panel">
              <h2 className="sidebar-section-title">
                <Calendar size={18} /> 蔡老師隨行備忘錄
              </h2>
              <p className="sidebar-desc">
                在此寫下今日的自學教學重點、出遊隨手記或需採買的細節，資料將自動保存在此瀏覽器中。
              </p>
              <textarea
                className="memo-textarea"
                placeholder="輸入今日備忘錄..."
                value={memos[currentDayData.day] || ''}
                onChange={(e) => handleMemoChange(currentDayData.day, e.target.value)}
              />
              {memos[currentDayData.day] && (
                <p className="memo-save-status">自動存檔成功 ✓</p>
              )}

              {/* Day-specific Educational Highlights if any */}
              {currentDayData.educationalNotes && currentDayData.educationalNotes.length > 0 && (
                <div style={{ marginTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
                  <h4 style={{ fontSize: '13.5px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px', color: '#38bdf8', marginBottom: '8px' }}>
                    <Info size={14} /> 行程特別提醒
                  </h4>
                  {currentDayData.educationalNotes.map((note, idx) => (
                    <p key={idx} style={{ fontSize: '12px', color: 'var(--text-dark-muted)', marginBottom: '8px', lineHeight: '1.4' }}>
                      • {note}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </aside>
        </div>
      ) : (
        /* MapCode Directory Tab */
        <div className="mapcode-search-panel glass-panel">
          <div className="filter-bar">
            <span className="day-theme-title">宮古島完整景點 MapCode 總整理</span>
            <div className="search-input-wrapper">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="搜尋景點或關鍵字..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {filteredMapCodes.length === 0 ? (
            <div className="empty-state">
              <span className="empty-state-icon">🔍</span>
              <p>找不到相符的景點或 MapCode，請嘗試其他關鍵字。</p>
            </div>
          ) : (
            <div className="mapcode-grid">
              {filteredMapCodes.map((item, idx) => (
                <div key={idx} className="glass-card mapcode-list-card hover-scale">
                  <div className="mapcode-info">
                    <span className="mapcode-name">{item.name}</span>
                    {item.note && <span className="mapcode-desc">{item.note}</span>}
                  </div>
                  <div className="mapcode-action">
                    <div
                      className="mapcode-widget"
                      onClick={() => copyToClipboard(item.code)}
                      style={{ marginTop: 0 }}
                    >
                      <MapPin size={13} />
                      <span className="mapcode-value" style={{ fontSize: '13px' }}>{item.code}</span>
                    </div>
                    {copiedCode === item.code && (
                      <span className="mapcode-copy-status" style={{ fontSize: '10px' }}>已複製 ✓</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <footer style={{ marginTop: '24px', textAlign: 'center', fontSize: '12px', color: 'var(--text-dark-muted)', opacity: 0.6 }}>
        <p>© 2026 宮古島海陸整合與素食完美執行清單 • 蔡老師專屬優化版本</p>
      </footer>
    </div>
  );
}

export default App;
