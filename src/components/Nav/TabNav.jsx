import React, {useState} from "react";

const TabNav = ({tabs}) => {
    const [selectedTabId, setSelectedTabId] = useState(tabs[0].id)
    const selectedTab = tabs.find(tab => tab.id === selectedTabId)
    return (
        <div>
            <ul className="nav nav-tabs">
                {tabs.map(t => (
                    <li className="nav-item" key={t.id}>
                        <button className={`nav-link ${selectedTabId===t.id ? "active" : ""}`}
                                onClick={() => setSelectedTabId(t.id)}>
                            {t.title}
                        </button>
                    </li>
                ))}
            </ul>
            <div key={selectedTabId} className="gy-5">
                {selectedTab.content}
            </div>
        </div>
    )
}

export default TabNav;