function App({ tweakDefaults }) {
  const [tweaks, setTweak] = useTweaks(tweakDefaults);
  const { useState, useEffect, useMemo, useCallback } = React;

  /* ── Core state ─────────────────────── */
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);

  /* ── Persisted state ────────────────── */
  const [readItems, setReadItems] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem('ld-radar-read') || '[]')); }
    catch { return new Set(); }
  });

  useEffect(() => {
    localStorage.setItem('ld-radar-read', JSON.stringify([...readItems]));
  }, [readItems]);

  /* ── Theme ──────────────────────────── */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tweaks.theme === 'dark' ? 'dark' : 'light');
  }, [tweaks.theme]);

  /* ── Accent color CSS var ───────────── */
  useEffect(() => {
    document.documentElement.style.setProperty('--primary', tweaks.accentColor || '#0a47fd');
  }, [tweaks.accentColor]);

  /* ── Handlers ───────────────────────── */
  const openCard = useCallback(item => {
    setExpandedItem(item);
    setReadItems(prev => new Set(prev).add(item.id));
  }, []);

  const viewMode = tweaks.viewMode || 'grid';
  const showImpact = tweaks.showImpact !== false;
  const accentColor = tweaks.accentColor || '#0a47fd';

  /* ── Filter logic ───────────────────── */
  const filteredItems = useMemo(() => {
    return window.NEWS_DATA.filter(item => {
      if (activeCategory && item.categoryKey !== activeCategory) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          item.headline.toLowerCase().includes(q) ||
          item.explanation.toLowerCase().includes(q) ||
          item.impact.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [searchQuery, activeCategory]);

  /* ── Render ─────────────────────────── */
  return (
    <div style={{ minHeight: '100vh' }}>
      <RadarHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        viewMode={viewMode}
        onViewChange={v => setTweak('viewMode', v)}
      />

      <FilterBar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="cards-container">
        <div className={`cards-grid${viewMode === 'list' ? ' list-view' : ''}`}>
          {filteredItems.length === 0 ? (
            <EmptyState />
          ) : (
            filteredItems.map((item, i) => (
              <NewsCard
                key={item.id}
                item={item}
                index={i}
                isRead={readItems.has(item.id)}
                onClick={openCard}
                showImpact={showImpact}
                accentColor={accentColor}
              />
            ))
          )}
        </div>
      </div>

      {expandedItem && (
        <CardModal
          item={expandedItem}
          onClose={() => setExpandedItem(null)}
          accentColor={accentColor}
        />
      )}

      <TweaksPanel title="התאמות">
        <TweakSection label="תצוגה">
          <TweakRadio
            label="פריסה"
            value={tweaks.viewMode}
            options={[
              { label: 'רשת', value: 'grid' },
              { label: 'רשימה', value: 'list' }
            ]}
            onChange={v => setTweak('viewMode', v)}
          />
          <TweakToggle
            label="הצג השפעה על L&D"
            value={tweaks.showImpact}
            onChange={v => setTweak('showImpact', v)}
          />
        </TweakSection>
        <TweakSection label="עיצוב">
          <TweakRadio
            label="ערכת נושא"
            value={tweaks.theme}
            options={[
              { label: 'בהיר', value: 'light' },
              { label: 'כהה', value: 'dark' }
            ]}
            onChange={v => setTweak('theme', v)}
          />
          <TweakColor
            label="צבע מותג"
            value={tweaks.accentColor}
            options={['#0a47fd', '#7c3aed', '#059669', '#e11d48']}
            onChange={v => setTweak('accentColor', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

window.App = App;
