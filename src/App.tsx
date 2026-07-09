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

  // Active Tab: 1-6 for days, 0 for MapCode list, -1 for Google Maps
  const [activeTab, setActiveTab] = useState<number>(() => {
    const saved = localStorage.getItem('miyakojima-active-tab');
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (parsed >= -1 && parsed <= 6) return parsed;
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
          <li>
            <button
              className={`tab-button ${activeTab === -1 ? 'active' : ''}`}
              onClick={() => setActiveTab(-1)}
            >
              <span>自訂地圖</span>
              <span className="tab-button-desc">Google Maps</span>
            </button>
          </li>
          <li>
            <button
              className={`tab-button ${activeTab === -2 ? 'active' : ''}`}
              onClick={() => setActiveTab(-2)}
            >
              <span>素食小卡</span>
              <span className="tab-button-desc">中日對照</span>
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
      ) : activeTab === 0 ? (
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
      ) : activeTab === -1 ? (
        /* Google My Maps Embed Tab */
        <div className="google-maps-panel glass-panel">
          <div className="filter-bar" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px' }}>
            <span className="day-theme-title">宮古島 Google 我的地圖 (自訂規劃)</span>
            <span style={{ fontSize: '13px', color: 'var(--text-dark-muted)' }}>
              已整合宮古島海陸熱門景點、素食餐廳、精品咖啡與自駕住宿，支援在地圖上直接點擊與規劃路線。
            </span>
          </div>
          <div className="maps-iframe-container glass-card" style={{ padding: '6px', overflow: 'hidden', height: '620px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1xPBlVw2djM31XMupsaG7EEbNEWGzX-w&ehbc=2E312F"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              title="Miyakojima Custom Google Map"
            ></iframe>
          </div>
        </div>
      ) : (
        /* Vegetarian Cards Tab (activeTab === -2) */
        <div className="veg-cards-panel glass-panel">
          <div className="filter-bar" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', marginBottom: '24px' }}>
            <span className="day-theme-title">日本點餐「五辛素/佛教純素」中日對照小卡</span>
            <span style={{ fontSize: '13px', color: 'var(--text-dark-muted)' }}>
              在日本餐廳點餐時，可直接出示本頁小卡給店員或主廚看，用客氣委婉的日文表達飲食限制。
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {/* Card 1: Detailed & Extremely Polite (詳細禮貌版) */}
            <div className="glass-card" style={{ padding: '24px', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f43f5e' }}>🟢 詳細詢問卡（禮貌委婉版）</h3>
                  <button
                    className="filter-btn"
                    style={{ fontSize: '11px', padding: '4px 8px' }}
                    onClick={() => {
                      const text = `【飲食店スタッフの皆様へ】\nいつも大変お世話になっております。\n\n恐れ入りますが、私は宗教上の理由（または個人の信念）により、以下の食材を食べることができません。\n\n・肉類全般（牛肉、豚肉、鶏肉など）\n・魚介類全般（魚、エビ、カニ、貝類など）\n・魚の出汁（かつお出汁など）\n・五葷（ごくん）の野菜：ネギ、ニンニク、玉ねぎ、ニラ、ラッキョウ\n\n大変お手数をおかけいたしますが、これらが入っていない料理はございますでしょうか？\n（※昆布の出汁や、醤油・塩でのシンプルな味付けは問題ございません。）\n\nご多忙のところ恐縮ですが、ご対応いただけますと幸いです。よろしくお願い申し上げます。`;
                      copyToClipboard(text);
                    }}
                  >
                    {copiedCode?.startsWith('【飲食店') ? '已複製 ✓' : '複製日文'}
                  </button>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '8px', marginBottom: '16px', fontSize: '14px', lineHeight: '1.6', color: 'var(--text-dark-card)' }}>
                  <strong>【飲食店スタッフの皆様へ】</strong><br />
                  いつも大変お世話になっております。<br /><br />
                  恐れ入りますが、私は宗教上の理由（または個人の信念）により、以下の食材を食べることができません。<br /><br />
                  <ul>
                    <li><strong>肉類全般</strong>（牛肉、豚肉、鶏肉など）</li>
                    <li><strong>魚介類全般</strong>（魚、エビ、カニ、貝類など）</li>
                    <li><strong>魚の出汁</strong>（かつお出汁など）</li>
                    <li><strong>五葷（ごくん）の野菜</strong>：ネギ、ニンニク、玉ねぎ、ニラ、ラッキョウ</li>
                  </ul>
                  大変お手数をおかけいたしますが、<strong>これらが入っていない料理</strong>はございますでしょうか？<br />
                  <span style={{ fontSize: '12px', color: '#10b981' }}>（※昆布の出汁や、醤油・塩でのシンプルな味付けは問題ございません。）</span><br /><br />
                  ご多忙のところ恐縮ですが、ご対応いただけますと幸いです。よろしくお願い申し上げます。
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-dark-muted)', borderTop: '1px dashed rgba(255,255,255,0.08)', paddingTop: '10px' }}>
                  <p><strong>中文意譯：</strong><br />
                  【致餐廳工作人員】感謝您一直以來的照料。<br />
                  抱歉，由於宗教原因（或個人信念），我無法食用以下食材：<br />
                  • 肉類、海鮮、魚類高湯（如鰹魚高湯）<br />
                  • 五辛蔬菜：蔥、大蒜、洋蔥、韭菜、薤菜<br />
                  麻煩您，請問是否有不含以上食材的料理呢？<br />
                  （※昆布高湯、醬油或鹽巴的簡單調味是可以食用的。）<br />
                  在您百忙之中給您添麻煩非常抱歉，如蒙協助，不勝感激。</p>
                </div>
              </div>
            </div>

            {/* Card 2: Short & Direct (精簡口語版) */}
            <div className="glass-card" style={{ padding: '24px', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0ea5e9' }}>⚡ 精簡確認卡（口語速查版）</h3>
                  <button
                    className="filter-btn"
                    style={{ fontSize: '11px', padding: '4px 8px' }}
                    onClick={() => {
                      const text = `すみません、私はお肉、魚介類、魚の出汁（かつおだし）、そしてネギ、ニンニク、玉ねぎ、ニラが食べられません。これらが入っていないメニューはありますか？`;
                      copyToClipboard(text);
                    }}
                  >
                    {copiedCode?.startsWith('すみません') ? '已複製 ✓' : '複製日文'}
                  </button>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '8px', marginBottom: '16px', fontSize: '14.5px', lineHeight: '1.7', color: 'var(--text-dark-card)' }}>
                  <strong>すみません、私はお肉、魚介類、魚の出汁（かつおだし）、そしてネギ、ニンニク、玉ねぎ、ニラが食べられません。</strong><br /><br />
                  <strong>これらが入っていないメニューはありますか？</strong><br /><br />
                  <span style={{ fontSize: '12px', color: '#38bdf8' }}>（※出汁に魚が使われているか確認していただけると助かります。）</span>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-dark-muted)', borderTop: '1px dashed rgba(255,255,255,0.08)', paddingTop: '10px' }}>
                  <p><strong>中文意譯：</strong><br />
                  不好意思，我不吃肉、海鮮、魚類高湯（鰹魚高湯），以及蔥、大蒜、洋蔥、韭菜。<br />
                  請問有不含這些食材的菜單嗎？<br />
                  （※若能幫我確認湯底是否含有魚類成分，將非常有幫助。）</p>
                </div>
              </div>
            </div>

            {/* Panel 3: Vegetarian Dictionary & Tips (常用詞彙與叮嚀) */}
            <div className="glass-card" style={{ padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#eab308', marginBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px' }}>
                💡 日本點素食實用詞彙與叮嚀
              </h3>
              <ul style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6', color: 'var(--text-dark-card)' }}>
                <li style={{ marginBottom: '8px' }}>
                  <strong>鰹魚高湯陷阱 (かつおだし/Katsuo Dashi)</strong>：日本極多菜餚以鰹魚做湯底，即使點的是「玉子丼」或「烏龍麵」，高湯通常也含魚。如店員面露難色，表示湯底不能換，建議不要勉強，應尋找素食專門店。
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <strong>「去蔥/去洋蔥」口語表達</strong>：
                  <ul>
                    <li>ネギ抜きでお願いします (Negi-nuki de onegaishimasu - 請幫我去蔥)</li>
                    <li>玉ねぎ抜きでお願いします (Tamanegi-nuki de onegaishimasu - 請幫我去洋蔥)</li>
                  </ul>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <strong>五辛日文詞彙速查</strong>：
                  <ul>
                    <li>蔥：ネギ (Negi)</li>
                    <li>大蒜：ニンニク (Ninniku)</li>
                    <li>洋蔥：玉ねぎ (Tamanegi)</li>
                    <li>韭菜：ニラ (Nira)</li>
                    <li>薤/蕎頭：らっきょう (Rakkyo)</li>
                  </ul>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <strong>可吃物品說明</strong>：
                  <ul>
                    <li>昆布の出汁は大丈夫です (Kombu no dashi wa daijobu desu - 昆布高湯是沒問題的)</li>
                    <li>醤油と塩での味付けは大丈夫です (Shoyu to shio de no ajitsuke wa daijobu desu - 用醬油與鹽巴調味是沒問題的)</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
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
