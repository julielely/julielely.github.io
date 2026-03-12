import React, { useState, useEffect, useRef } from "react";
import { ProjectGrid } from "./ProjectGrid";
import { AboutPanel } from "./AboutPanel";
import { ResumePanel } from "./ResumePanel";
import { SmileyIcon } from "../icons/SmileyIcon";
import { StatusTicker } from "./StatusTicker";
import { ThemeToggle } from "./ThemeToggle";

type TabId = "work" | "about" | "resume";

interface Tab {
  id: TabId;
  label: string;
  component: React.ComponentType;
}

const TABS: Tab[] = [
  { id: "work", label: "Work", component: ProjectGrid },
  { id: "about", label: "About", component: AboutPanel },
  { id: "resume", label: "Resume", component: ResumePanel },
];

export function PortfolioWindow() {
  const [activeTab, setActiveTab] = useState<TabId>("work");
  const [scrollY, setScrollY] = useState(0);
  const [showFixedTabs, setShowFixedTabs] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [tabsTop, setTabsTop] = useState<number | null>(null);

  // Get initial position of tabs
  useEffect(() => {
    if (tabsRef.current && tabsTop === null) {
      setTabsTop(tabsRef.current.getBoundingClientRect().top + window.scrollY);
    }
  }, [tabsTop]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax values - fade out over 100px of scroll
  const descriptionOpacity = Math.max(0, 1 - scrollY / 100);
  const descriptionTranslate = Math.min(scrollY * 0.5, 50);
  // Move browser window up as description fades (ends ~32px below name)
  const browserWindowTranslate = Math.min(scrollY * 0.8, 80);

  // Determine if fixed tabs should show - when in-flow tabs scroll out of view
  const fixedThreshold = tabsTop !== null ? tabsTop : 200;
  const shouldShowFixed = scrollY >= fixedThreshold;

  // Update fixed tabs visibility
  useEffect(() => {
    setShowFixedTabs(shouldShowFixed);
  }, [shouldShowFixed]);

  // Border radius and full-width based on scroll position
  const borderRadius = showFixedTabs ? 0 : 16;
  const isFullWidth = showFixedTabs;

  const ActiveComponent =
    TABS.find((tab) => tab.id === activeTab)?.component || ProjectGrid;

  const handleKeyDown = (e: React.KeyboardEvent, tabId: TabId) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveTab(tabId);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center px-8 lg:px-12 transition-colors duration-300 ${
      activeTab === "resume" && isFullWidth ? "bg-bg-primary" : "bg-bg-secondary"
    }`}>
      <div className="w-full max-w-[1184px] pt-8 md:pt-16 pb-8 md:pb-16 flex-1 flex flex-col">
        {/* Header Section */}
        <div className="mb-8">
          <SmileyIcon className="w-12 h-12 md:w-16 md:h-16 mb-6 md:mb-8" />
          <h1 className="text-[40px] md:text-[60px] lg:text-[80px] font-semibold leading-[1.2] md:leading-[1.5] text-content-primary tracking-tight-lg mb-4">
            julie lely
          </h1>
          <p
            className="text-base md:text-lg leading-[1.5] text-content-primary max-w-[318px] transition-all duration-150 ease-out"
            style={{
              opacity: descriptionOpacity,
              transform: `translateY(-${descriptionTranslate}px)`,
            }}
          >
            product designer with specialties in prototyping, interaction design, and design systems
          </p>
        </div>

        {/* Browser Window - Fills remaining viewport height */}
        <div
          className={`overflow-visible flex flex-col min-w-0 flex-1 transition-[border,background-color,border-radius] duration-300 ${
            isFullWidth ? "border-transparent" : "border border-stroke-primary"
          } bg-bg-primary`}
          style={{
            marginTop: `-${browserWindowTranslate}px`,
            borderRadius: `${borderRadius}px`,
          }}
        >
          {/* In-flow Tab Bar - stays in document flow */}
          <div
            ref={tabsRef}
            className="bg-bg-tertiary border-b border-stroke-primary px-4 flex items-center flex-shrink-0"
          >
            <div className="flex gap-2 py-4">
              <div className="w-3 h-3 rounded-full" style={{ background: '#DE96FF' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#3773DA' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#60BB8E' }} />
            </div>

            {/* Tab Navigation */}
            <div className="flex ml-4 items-center">
              {TABS.map((tab, index) => {
                const isActive = activeTab === tab.id;
                const prevIsActive = index > 0 && activeTab === TABS[index - 1].id;
                const hideLeadingDivider = isActive || prevIsActive;
                const isLast = index === TABS.length - 1;
                const hideTrailingDivider = isLast && isActive;

                return (
                  <React.Fragment key={tab.id}>
                    {/* Vertical divider - hidden when adjacent to active tab */}
                    <div
                      className={`w-px h-5 transition-opacity duration-150 ${
                        hideLeadingDivider ? 'opacity-0' : 'bg-stroke-primary'
                      }`}
                    />
                    <button
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`panel-${tab.id}`}
                      id={`tab-${tab.id}`}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => setActiveTab(tab.id)}
                      onKeyDown={(e) => handleKeyDown(e, tab.id)}
                      className={`px-3 py-1.5 mx-1 text-sm font-medium rounded-md transition-colors duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                        isActive
                          ? "bg-bg-secondary text-content-primary"
                          : "text-content-secondary hover:bg-hover-bg"
                      }`}
                    >
                      {tab.label}
                    </button>
                    {/* Trailing divider after last tab */}
                    {isLast && (
                      <div
                        className={`w-px h-5 transition-opacity duration-150 ${
                          hideTrailingDivider ? 'opacity-0' : 'bg-stroke-primary'
                        }`}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Theme Toggle - right side */}
            <div className="ml-auto">
              <ThemeToggle />
            </div>
          </div>

          {/* Fixed Tab Bar - always fixed, visibility controlled by opacity */}
          <div
            className="fixed top-0 left-0 right-0 bg-bg-tertiary border-b border-stroke-primary px-4 flex items-center z-50 transition-all duration-300 ease-out"
            style={{
              opacity: showFixedTabs ? 1 : 0,
              transform: showFixedTabs ? 'translateY(0)' : 'translateY(-8px)',
              boxShadow: showFixedTabs ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
              pointerEvents: showFixedTabs ? 'auto' : 'none',
            }}
          >
            <div className="flex gap-2 py-4">
              <div className="w-3 h-3 rounded-full" style={{ background: '#DE96FF' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#3773DA' }} />
              <div className="w-3 h-3 rounded-full" style={{ background: '#60BB8E' }} />
            </div>

            {/* Tab Navigation */}
            <div className="flex ml-4 items-center">
              {TABS.map((tab, index) => {
                const isActive = activeTab === tab.id;
                const prevIsActive = index > 0 && activeTab === TABS[index - 1].id;
                const hideLeadingDivider = isActive || prevIsActive;
                const isLast = index === TABS.length - 1;
                const hideTrailingDivider = isLast && isActive;

                return (
                  <React.Fragment key={tab.id}>
                    {/* Vertical divider - hidden when adjacent to active tab */}
                    <div
                      className={`w-px h-5 transition-opacity duration-150 ${
                        hideLeadingDivider ? 'opacity-0' : 'bg-stroke-primary'
                      }`}
                    />
                    <button
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`panel-${tab.id}`}
                      tabIndex={showFixedTabs && isActive ? 0 : -1}
                      onClick={() => setActiveTab(tab.id)}
                      onKeyDown={(e) => handleKeyDown(e, tab.id)}
                      className={`px-3 py-1.5 mx-1 text-sm font-medium rounded-md transition-colors duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                        isActive
                          ? "bg-bg-secondary text-content-primary"
                          : "text-content-secondary hover:bg-hover-bg"
                      }`}
                    >
                      {tab.label}
                    </button>
                    {/* Trailing divider after last tab */}
                    {isLast && (
                      <div
                        className={`w-px h-5 transition-opacity duration-150 ${
                          hideTrailingDivider ? 'opacity-0' : 'bg-stroke-primary'
                        }`}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Status Ticker and Theme Toggle - visible in fixed bar */}
            <div className="ml-auto flex items-center gap-2">
              <div className="hidden md:block">
                <StatusTicker />
              </div>
              <ThemeToggle />
            </div>
          </div>

          {/* Tab Content */}
          <div
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            className={`min-w-0 transition-[border-radius] duration-150 ease-out ${
              activeTab === "resume" ? "bg-bg-primary" : "bg-bg-secondary"
            }`}
            style={{ borderBottomLeftRadius: `${borderRadius}px`, borderBottomRightRadius: `${borderRadius}px` }}
          >
            <div className="max-w-[1280px] mx-auto">
              <ActiveComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
