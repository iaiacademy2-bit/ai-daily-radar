/* ── Shared SVG Icons ─────────────────────────────── */

const SearchIcon = () =>
<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.35-4.35" />
  </svg>;


const BookmarkOutline = () =>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>;


const BookmarkFilled = () =>
<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>;


const GridIcon = () =>
<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="3" width="8" height="8" rx="1.5" />
    <rect x="13" y="3" width="8" height="8" rx="1.5" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" />
  </svg>;


const ListIcon = () =>
<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>;


const RadarLogo = () =>
<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="3" fill="white" />
    <path d="M12 5a7 7 0 0 1 7 7" stroke="white" strokeWidth="2.2" strokeLinecap="round" opacity=".75" />
    <path d="M12 1.5a10.5 10.5 0 0 1 10.5 10.5" stroke="white" strokeWidth="2" strokeLinecap="round" opacity=".4" />
  </svg>;


const ImpactIcon = () =>
<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>;


const CloseIcon = () =>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>;


/* ── Header ──────────────────────────────────────── */

function RadarHeader({ searchQuery, onSearchChange, viewMode, onViewChange }) {
  const today = new Date();
  const dateStr = today.toLocaleDateString('he-IL', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-brand">
          <div className="header-logo"><RadarLogo /></div>
          <div className="header-titles">
            <div className="header-title">L&D Daily AI In IAI </div>
            <div className="header-subtitle">עדכוני AI יומיים לצוותי למידה ופיתוח</div>
          </div>
        </div>
        <div className="header-left">
          <div className="search-wrap">
            <span className="search-icon"><SearchIcon /></span>
            <input
              className="search-input"
              type="text"
              placeholder="חיפוש עדכונים..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)} />
            
            {searchQuery &&
            <button className="search-clear" onClick={() => onSearchChange('')}>✕</button>
            }
          </div>
          <div className="view-toggle">
            <button
              className={`view-btn${viewMode === 'list' ? ' active' : ''}`}
              onClick={() => onViewChange('list')}
              title="תצוגת רשימה">
              <ListIcon /></button>
            <button
              className={`view-btn${viewMode === 'grid' ? ' active' : ''}`}
              onClick={() => onViewChange('grid')}
              title="תצוגת רשת">
              <GridIcon /></button>
          </div>
          <div className="header-date">{dateStr}</div>
        </div>
      </div>
    </header>);

}

/* ── Stats Bar ───────────────────────────────────── */

function StatsBar({ items }) {
  const toolCount = items.filter((i) =>
  i.categoryKey === 'docs' || i.categoryKey === 'media'
  ).length;
  const updateCount = items.length - toolCount;

  return (
    <div className="stats-bar">
      <div className="stat-item">
        <span className="stat-value">{items.length}</span>
        <span className="stat-label">עדכונים היום</span>
      </div>
      <div className="stat-divider" />
      <div className="stat-item">
        <span className="stat-value">{toolCount}</span>
        <span className="stat-label">כלים חדשים</span>
      </div>
      <div className="stat-divider" />
      <div className="stat-item">
        <span className="stat-value">{updateCount}</span>
        <span className="stat-label">שדרוגים</span>
      </div>
    </div>);

}

/* ── Filter Bar ──────────────────────────────────── */

function FilterBar({ activeCategory, onCategoryChange }) {
  const cats = Object.entries(window.CATEGORIES);

  return (
    <div className="filter-bar">
      <button
        className={`filter-pill${!activeCategory ? ' active' : ''}`}
        onClick={() => onCategoryChange(null)}>
        הכל</button>
      {cats.map(([key, cat]) =>
      <button
        key={key}
        className={`filter-pill${activeCategory === key ? ' active' : ''}`}
        onClick={() => onCategoryChange(key)}>
        {cat.name}</button>
      )}
    </div>);

}

/* ── News Card ───────────────────────────────────── */

function NewsCard({ item, index, isRead, onClick, showImpact, accentColor }) {
  const cat = window.CATEGORIES[item.categoryKey];
  const primary = accentColor || '#0a47fd';

  return (
    <div
      className={`news-card${isRead ? ' read' : ''}${item.trending ? ' trending' : ''}`}
      style={{ animationDelay: `${index * 0.06}s` }}
      onClick={() => onClick(item)}>
      
      <div className="card-top">
        <div className="card-top-right">
          <span className="category-badge" style={{ background: cat.bg, color: cat.text }}>
            {cat.name}
          </span>
          {item.trending && <span className="trending-dot" title="טרנדינג" />}
        </div>
        <span className="card-time">{item.timeAgo}</span>
      </div>

      <h3 className="card-headline">{item.headline}</h3>
      <p className="card-explanation">{item.explanation}</p>

      {showImpact &&
      <div className="card-impact" style={{ borderRightColor: primary, background: primary + '12' }}>
          <div className="impact-label" style={{ color: primary }}>
            <ImpactIcon /> השפעה על למידה ופיתוח
          </div>
          <p className="impact-text">{item.impact}</p>
        </div>
      }

      <div className="card-footer">
        <span className="card-source">מקור: {item.source}</span>
      </div>
    </div>);

}

/* ── Card Modal ──────────────────────────────────── */

function CardModal({ item, onClose, accentColor }) {
  const cat = window.CATEGORIES[item.categoryKey];
  const primary = accentColor || '#0a47fd';

  React.useEffect(() => {
    const handler = (e) => {if (e.key === 'Escape') onClose();};
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><CloseIcon /></button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <span className="category-badge" style={{ background: cat.bg, color: cat.text }}>
            {cat.name}
          </span>
          {item.trending && <span className="trending-dot" />}
        </div>

        <h2 className="modal-headline">{item.headline}</h2>

        <div className="modal-section-title" style={{ color: primary }}>סיכום</div>
        <p className="modal-text">{item.explanation}</p>

        <div className="modal-impact" style={{ borderRightColor: primary, background: primary + '12' }}>
          <div className="impact-label" style={{ color: primary }}>
            <ImpactIcon /> השפעה על למידה ופיתוח
          </div>
          <p className="impact-text" style={{ fontSize: '.85rem' }}>{item.impact}</p>
        </div>

        <div className="modal-meta">
          <span>מקור: {item.source}</span>
          <span>{item.timeAgo}</span>
        </div>
      </div>
    </div>);

}

/* ── Empty State ─────────────────────────────────── */

function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-icon">⌕</div>
      <div className="empty-text">לא נמצאו עדכונים התואמים לחיפוש</div>
    </div>);

}

/* ── Export ───────────────────────────────────────── */

Object.assign(window, {
  RadarHeader, StatsBar, FilterBar, NewsCard, CardModal, EmptyState,
  SearchIcon, BookmarkOutline, BookmarkFilled, GridIcon, ListIcon,
  RadarLogo, ImpactIcon, CloseIcon
});