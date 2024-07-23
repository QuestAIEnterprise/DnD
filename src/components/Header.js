import React from 'react';

const Header = () => (
    <header>
        <nav className="container-fluid">
            <ul>
                <li><strong>Mythren: Legends Unfolded</strong></li>
            </ul>
            <ul className="tabs">
                <li><a href="#home" className="tablink active" onClick={(e) => openTab(e, 'home')}>Home</a></li>
                <li><a href="#characters" className="tablink" onClick={(e) => openTab(e, 'characters')}>Characters</a></li>
                <li><a href="#npcs" className="tablink" onClick={(e) => openTab(e, 'npcs')}>NPCs</a></li>
                <li><a href="#world" className="tablink" onClick={(e) => openTab(e, 'world')}>World</a></li>
                <li><a href="#politics" className="tablink" onClick={(e) => openTab(e, 'politics')}>Politics</a></li>
                <li><a href="#contact" className="tablink" onClick={(e) => openTab(e, 'contact')}>Contact</a></li>
            </ul>
        </nav>
    </header>
);

export default Header;

function openTab(event, tabId) {
    event.preventDefault();
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });
    const tabLinks = document.querySelectorAll('.tablink');
    tabLinks.forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.classList.add('active');
}
