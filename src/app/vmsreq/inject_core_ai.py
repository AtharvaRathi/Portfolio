import json

with open("app.js", "r") as f:
    js = f.read()

# 1. New data array
core_ai_data = [
    {
        "engineName": "Object Detection & Classification Engine (CNN/YOLO-based)",
        "fulfills": ["AI-01 (Human Detection)", "AI-02 (Vehicle Classification)", "AI-12 (PPE Detection - Helmet/Vest/Mask)", "AI-23 (Weapon Detection)"],
        "consolidated": ["Shopping Mall Object Tracking", "Baggage Detection"],
        "coreTech": "Real-time bounding box generation, class confidence scoring, and multi-class object tracking.",
        "icon": "box-select"
    },
    {
        "engineName": "Behavioral & Action Recognition Engine (Temporal Analytics)",
        "fulfills": ["AI-07 (Loitering)", "AI-22 (Fight/Violence)", "AI-52 (Unsafe Behavior)", "AI-54 (Worker Fatigue)", "AI-19 (Smoking Detection)"],
        "consolidated": ["Slip and Fall Detection (Hospitals/Retail)", "Pose Estimation"],
        "coreTech": "Sequential frame analysis, pose estimation skeletons, and temporal duration thresholds.",
        "icon": "activity"
    },
    {
        "engineName": "Spatial & Boundary Analytics Engine",
        "fulfills": ["AI-05 (Intrusion Detection)", "AI-06 (Line Crossing)", "AI-14 (Wrong-Way Detection)", "AI-32 (Tailgating)"],
        "consolidated": ["Perimeter Breach (Industrial/Airports)", "Secure Zone Infiltration"],
        "coreTech": "Virtual polygon/tripwire coordinate mapping, directional vector tracking, and access-control interlocking.",
        "icon": "move-3d"
    },
    {
        "engineName": "Density, Flow & Counting Engine",
        "fulfills": ["AI-11b (Vehicle Counting)", "AI-36 (Traffic Congestion Analysis)"],
        "consolidated": ["Queue Threshold Management (Retail)", "Heatmapping & Dwell Time", "Crowd Density (Stadiums/Events)"],
        "coreTech": "Pixel-density estimation, optical flow tracking, and temporal spatial averaging.",
        "icon": "users"
    },
    {
        "engineName": "Identity & Optical Character Recognition (OCR)",
        "fulfills": ["AI-03 (Face Detection & Recognition)", "AI-11 (ANPR/LPR - License Plate Recognition)"],
        "consolidated": ["VIP Recognition", "Blacklist Alerting", "Smart Parking Automation"],
        "coreTech": "Feature extraction, vector embedding matching against encrypted databases, and high-speed OCR parsing.",
        "icon": "scan-face"
    },
    {
        "engineName": "Environmental & Industrial Anomaly Engine",
        "fulfills": ["AI-20 (Fire & Smoke Detection)", "AI-25 (Abandoned Vehicle/Object)", "AI-49 (Machine Monitoring)", "AI-50 (Conveyor Belt Monitoring)"],
        "consolidated": ["Optical Gas Imaging", "Lighting Anomalies", "Shelf Monitoring (Retail empty shelves)"],
        "coreTech": "Pixel color/texture anomaly detection, background subtraction modeling, and static-state deviation alerts.",
        "icon": "flame"
    },
    {
        "engineName": "Generative AI & LLM Engine (Vision-Language Models)",
        "fulfills": ["AI-73 (Natural Language Video Search)", "AI-74 (AI Incident Summary)", "AI-75 (AI Chat Assistant)", "AI-76 (AI Root Cause Analysis)"],
        "consolidated": ["Dashboard Generative UI", "NLP Smart Searching"],
        "coreTech": "Video-to-Text metadata indexing, RAG (Retrieval-Augmented Generation) pipelines, and LLM API integrations.",
        "icon": "brain-circuit"
    }
]

# 2. Modify switchWorkspace
old_switch_workspace = """function switchWorkspace(workspaceId) {
    document.getElementById('workspace-roadmap').classList.add('hidden');
    document.getElementById('workspace-matrix').classList.add('hidden');
    
    document.getElementById('ws-btn-roadmap').className = 'py-4 text-[13px] font-semibold text-gray-400 hover:text-textMain border-b-2 border-transparent hover:border-gray-300 transition-colors';
    document.getElementById('ws-btn-matrix').className = 'py-4 text-[13px] font-semibold text-gray-400 hover:text-textMain border-b-2 border-transparent hover:border-gray-300 transition-colors';
    
    document.getElementById('workspace-' + workspaceId).classList.remove('hidden');
    document.getElementById('ws-btn-' + workspaceId).className = 'py-4 text-[13px] font-bold text-textMain border-b-2 border-accentBlue transition-colors';
}"""

new_switch_workspace = """function switchWorkspace(workspaceId) {
    ['roadmap', 'matrix', 'core-ai'].forEach(id => {
        const ws = document.getElementById('workspace-' + id);
        if (ws) ws.classList.add('hidden');
        
        const btn = document.getElementById('ws-btn-' + id);
        if (btn) btn.className = 'py-4 text-[13px] font-semibold text-gray-400 hover:text-textMain border-b-2 border-transparent hover:border-gray-300 transition-colors';
    });
    
    const activeWs = document.getElementById('workspace-' + workspaceId);
    if (activeWs) activeWs.classList.remove('hidden');
    
    const activeBtn = document.getElementById('ws-btn-' + workspaceId);
    if (activeBtn) activeBtn.className = 'py-4 text-[13px] font-bold text-textMain border-b-2 border-accentBlue transition-colors';
}"""

js = js.replace(old_switch_workspace, new_switch_workspace)

# 3. Add coreAIEngines data and render function at the top
core_ai_js = "const coreAIEngines = " + json.dumps(core_ai_data, indent=4) + ";\n\n"

render_func = """
function renderCoreAIEngines() {
    const container = document.getElementById('core-ai-grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    coreAIEngines.forEach((engine, idx) => {
        const div = document.createElement('div');
        div.className = 'bg-surface border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col group hover:border-accentBlue transition-colors animate-fade-in';
        div.style.animationDelay = `${idx * 50}ms`;
        
        // Fulfills badges
        const fulfillsHtml = engine.fulfills.map(code => 
            `<span class="bg-primary border border-gray-200 text-textMuted px-2 py-1 rounded text-[10px] font-bold tracking-wider">${code}</span>`
        ).join('');
        
        // Consolidates features
        const consHtml = engine.consolidated.map(feat => 
            `<div class="flex items-center gap-2 text-xs text-gray-600"><div class="w-1 h-1 rounded-full bg-gray-400"></div>${feat}</div>`
        ).join('');
        
        div.innerHTML = `
            <div class="flex items-center gap-4 mb-5 border-b border-gray-100 pb-4">
                <div class="w-12 h-12 rounded-xl bg-primary border border-gray-200 shadow-sm flex items-center justify-center text-accentBlue group-hover:bg-accentBlue group-hover:text-primary transition-colors shrink-0">
                    <i data-lucide="${engine.icon}" class="w-6 h-6"></i>
                </div>
                <h3 class="text-base font-bold text-textMain">${engine.engineName}</h3>
            </div>
            
            <div class="mb-5">
                <h4 class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i data-lucide="check-circle-2" class="w-3 h-3"></i> Fulfills Trueview Codes</h4>
                <div class="flex flex-wrap gap-2">
                    ${fulfillsHtml}
                </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto pt-4 border-t border-gray-100">
                <div>
                    <h4 class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i data-lucide="layers" class="w-3 h-3"></i> Consolidates Features</h4>
                    <div class="space-y-1.5">
                        ${consHtml}
                    </div>
                </div>
                <div>
                    <h4 class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i data-lucide="cpu" class="w-3 h-3"></i> Core Technical Requirement</h4>
                    <p class="text-xs text-gray-600 leading-relaxed">${engine.coreTech}</p>
                </div>
            </div>
        `;
        
        container.appendChild(div);
    });
}
"""

# 4. Inject init call
init_old = """    renderVMSFeatures();
    
    // Init state"""

init_new = """    renderVMSFeatures();
    renderCoreAIEngines();
    
    // Init state"""

js = js.replace(init_old, init_new)

# Combine
final_js = core_ai_js + js + render_func

with open("app.js", "w") as f:
    f.write(final_js)
