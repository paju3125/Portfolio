export function initTabs() {
    const tabs = document.querySelectorAll('.tabs-tab');
    const panels = document.querySelectorAll('.tabpanel');
    const marker = document.querySelector('.tabs-marker');

    function setActiveTab(tab) {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('ui-active'));
        // Add active class to clicked tab
        tab.classList.add('ui-active');

        // Hide all panels
        panels.forEach(panel => {
            panel.hidden = true;
            panel.classList.remove('ui-enter-active', 'ui-enter-from');
        });

        // Show selected panel
        const panelId = tab.getAttribute('data-ui-tablist-tab');
        const panel = document.getElementById(panelId);
        panel.hidden = false;

        // Add animation classes
        requestAnimationFrame(() => {
            panel.classList.add('ui-enter-active', 'ui-enter-from');
            requestAnimationFrame(() => {
                panel.classList.remove('ui-enter-from');
            });
        });

        // Move marker
        if (marker) {
            marker.style.width = `${tab.offsetWidth}px`;
            marker.style.left = `${tab.offsetLeft}px`;
        }
    }

    // Add click handlers
    tabs.forEach(tab => {
        tab.addEventListener('click', () => setActiveTab(tab));
    });

    // Set initial active tab
    if (tabs.length > 0) {
        setActiveTab(tabs[0]);
    }
}