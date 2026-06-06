import json

with open("app.js", "r") as f:
    js = f.read()

vms_features = [
    {"id": "UC-01", "name": "Live Video Monitoring", "desc": "Single & multi-view layouts (4/9/16/25/36/64), digital zoom, and custom grid profiling."},
    {"id": "UC-02", "name": "Playback Management", "desc": "Timeline & AI-filtered event playback, speed manipulation, and bookmark creation."},
    {"id": "UC-03", "name": "Recording Management", "desc": "Continuous, scheduled, motion, and AI-triggered metadata recording policies."},
    {"id": "UC-04", "name": "Alarm Management", "desc": "Tampering/offline notifications, storage failure detection, and cross-site alarm correlation."},
    {"id": "UC-05", "name": "PTZ Camera Control", "desc": "Pan/Tilt/Zoom manual control, preset targeting, patrol routes, and auto-tracking."},
    {"id": "UC-06", "name": "User & Security Policies", "desc": "6 distinct operational roles, strict password complexity enforcement, and mandatory 2FA."},
    {"id": "UC-07", "name": "Multi-Site Monitoring", "desc": "Unified command dash managing geographically separated facilities with site-level health logs."},
    {"id": "UC-08", "name": "Video Export & Watermarking", "desc": "Secure MP4 exports with embedded digital signatures for legal chain-of-custody."},
    {"id": "UC-09", "name": "Health Monitoring", "desc": "Automated device ping tracking, packet status, and firmware version matching."},
    {"id": "UC-10", "name": "Multi-Channel Notifications", "desc": "Real-time push, automated emergency SMS, and customizable email thresholds."},
    {"id": "UC-11", "name": "Mobile Ecosystem", "desc": "Native iOS/Android app integration allowing complete live feeds and remote PTZ manipulation."},
    {"id": "UC-12", "name": "Tiered Storage Ingestion", "desc": "Multi-destination pipelines (Local, NAS, Cloud) with automated age-based purging."},
    {"id": "UC-13", "name": "Access Control Interlocking", "desc": "Hardwired physical access door badge reader integration with automatic camera pop-up alerts."},
    {"id": "UC-14", "name": "Intelligent Reporting Engine", "desc": "Auto-scheduled delivery of security trend charts and system uptime logs."},
    {"id": "UC-15", "name": "Interactive E-Maps", "desc": "SVG/PNG physical floor plan uploads with active, clickable camera pins that flash red during live alarms."},
    {"id": "UC-16", "name": "Third-Party Open API", "desc": "Complete REST API kit allowing live feeds and metadata strings to be piped into existing CRM/ERP portals."}
]

features_js = "const vmsFeatures = " + json.dumps(vms_features, indent=4) + ";\n\n"

new_js_logic = """
// Workspace & Sub-tab Navigation
function switchWorkspace(workspaceId) {
    document.getElementById('workspace-roadmap').classList.add('hidden');
    document.getElementById('workspace-matrix').classList.add('hidden');
    
    document.getElementById('ws-btn-roadmap').className = 'py-4 text-[13px] font-semibold text-gray-400 hover:text-textMain border-b-2 border-transparent hover:border-gray-300 transition-colors';
    document.getElementById('ws-btn-matrix').className = 'py-4 text-[13px] font-semibold text-gray-400 hover:text-textMain border-b-2 border-transparent hover:border-gray-300 transition-colors';
    
    document.getElementById('workspace-' + workspaceId).classList.remove('hidden');
    document.getElementById('ws-btn-' + workspaceId).className = 'py-4 text-[13px] font-bold text-textMain border-b-2 border-accentBlue transition-colors';
}

function switchSubTab(tabId) {
    document.getElementById('tab-content-cases').classList.add('hidden');
    document.getElementById('tab-content-models').classList.add('hidden');
    
    document.getElementById('sub-btn-cases').className = 'py-3 text-[12px] font-semibold text-gray-500 hover:text-textMain border-b-2 border-transparent hover:border-gray-300 transition-colors';
    document.getElementById('sub-btn-models').className = 'py-3 text-[12px] font-semibold text-gray-500 hover:text-textMain border-b-2 border-transparent hover:border-gray-300 transition-colors';
    
    document.getElementById('tab-content-' + tabId).classList.remove('hidden');
    document.getElementById('sub-btn-' + tabId).className = 'py-3 text-[12px] font-bold text-textMain border-b-2 border-accentBlue transition-colors';
}

// Collapsible UC features
function renderVMSFeatures() {
    const container = document.getElementById('vms-features-container');
    if(!container) return;
    
    vmsFeatures.forEach((feat, idx) => {
        const div = document.createElement('div');
        div.className = 'bg-surface border border-gray-200 rounded-xl overflow-hidden transition-all duration-300';
        
        div.innerHTML = `
            <button onclick="toggleFeatureCard('uc-${idx}')" class="w-full p-4 flex items-center justify-between bg-primary hover:bg-gray-50 transition-colors text-left focus:outline-none">
                <div class="flex items-center gap-3">
                    <span class="text-[10px] font-mono font-bold text-accentBlue bg-blue-50 px-2 py-1 rounded border border-blue-100 shrink-0">${feat.id}</span>
                    <span class="font-bold text-textMain text-[13px]">${feat.name}</span>
                </div>
                <i data-lucide="chevron-down" id="uc-icon-${idx}" class="w-4 h-4 text-gray-400 transition-transform duration-300 shrink-0"></i>
            </button>
            <div id="uc-${idx}" class="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out bg-surface">
                <div class="p-4 pt-2 text-xs text-gray-600 leading-relaxed border-t border-gray-100">
                    ${feat.desc}
                </div>
            </div>
        `;
        container.appendChild(div);
    });
}

function toggleFeatureCard(id) {
    const el = document.getElementById(id);
    const icon = document.getElementById(id.replace('uc-', 'uc-icon-'));
    
    if (el.classList.contains('max-h-0')) {
        el.classList.remove('max-h-0', 'opacity-0');
        el.classList.add('max-h-40', 'opacity-100');
        icon.classList.add('rotate-180');
    } else {
        el.classList.add('max-h-0', 'opacity-0');
        el.classList.remove('max-h-40', 'opacity-100');
        icon.classList.remove('rotate-180');
    }
}
"""

js = js.replace("switchTab(", "oldSwitchTab(") 
js = js.replace("function switchTab", "function oldSwitchTab")

init_old = """document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    startClock();
    startTicker();
    renderSidebar();
    renderGlobalModels();"""

init_new = """document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    startClock();
    startTicker();
    renderSidebar();
    renderGlobalModels();
    renderVMSFeatures();
    
    // Init state
    switchWorkspace('roadmap');
    switchSubTab('cases');"""

js = js.replace(init_old, init_new)

with open("app.js", "w") as f:
    f.write(features_js + js + new_js_logic)
