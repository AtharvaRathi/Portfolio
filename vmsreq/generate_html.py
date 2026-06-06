import re

with open('index.html', 'r') as f:
    html = f.read()

# Extract header (up to </header>)
header_match = re.search(r'(.*?</header>)', html, re.DOTALL)
header = header_match.group(1)

# Extract tab-content-cases and tab-content-models
cases_match = re.search(r'(<main id="tab-content-cases".*?</main>)', html, re.DOTALL)
models_match = re.search(r'(<main id="tab-content-models".*?</main>)', html, re.DOTALL)
template_match = re.search(r'(<template id="venue-template".*?</template>)', html, re.DOTALL)

cases = cases_match.group(1)
models = models_match.group(1)
template = template_match.group(1)

# Now assemble the new HTML
new_html = header + """

        <!-- Top-Level Navigation -->
        <div class="bg-primary border-b border-gray-200 px-8 py-0 z-30 relative shrink-0">
            <div class="max-w-[1600px] mx-auto flex gap-8">
                <button id="ws-btn-roadmap" class="py-4 text-[13px] font-bold text-textMain border-b-2 border-accentBlue transition-colors" onclick="switchWorkspace('roadmap')">PLATFORM CONFIGURATION & ROADMAP</button>
                <button id="ws-btn-matrix" class="py-4 text-[13px] font-semibold text-gray-400 hover:text-textMain border-b-2 border-transparent hover:border-gray-300 transition-colors" onclick="switchWorkspace('matrix')">AI ANALYTICS MATRIX</button>
            </div>
        </div>

        <!-- WORKSPACE 1: ROADMAP -->
        <main id="workspace-roadmap" class="flex-1 overflow-y-auto w-full bg-primary relative min-h-screen">
            <div class="max-w-[1600px] mx-auto w-full p-8 xl:p-12 pb-24 space-y-16">
                <!-- Panel 1: Executive Summary & Benchmarks -->
                <div>
                    <h2 class="text-xl font-bold tracking-tight text-textMain mb-6">1. Executive Summary & Core Platform Benchmarks</h2>
                    <div class="grid grid-cols-2 lg:grid-cols-5 gap-4">
                        <div class="bg-surface p-6 rounded-xl border border-gray-100 flex flex-col justify-center">
                            <div class="text-3xl font-bold text-textMain font-mono mb-1">90+</div>
                            <div class="text-[11px] font-bold text-gray-500 uppercase tracking-widest">AI Use Cases</div>
                        </div>
                        <div class="bg-surface p-6 rounded-xl border border-gray-100 flex flex-col justify-center">
                            <div class="text-3xl font-bold text-textMain font-mono mb-1">10,000+</div>
                            <div class="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Concurrent Streams</div>
                        </div>
                        <div class="bg-surface p-6 rounded-xl border border-gray-100 flex flex-col justify-center">
                            <div class="text-3xl font-bold text-textMain font-mono mb-1">4-Phase</div>
                            <div class="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Structured Rollout</div>
                        </div>
                        <div class="bg-surface p-6 rounded-xl border border-gray-100 flex flex-col justify-center">
                            <div class="text-3xl font-bold text-textMain font-mono mb-1">8+</div>
                            <div class="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Industry Sectors</div>
                        </div>
                        <div class="bg-surface p-6 rounded-xl border border-gray-100 flex flex-col justify-center">
                            <div class="text-3xl font-bold text-accentGreen font-mono mb-1">99.9%</div>
                            <div class="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Platform Uptime</div>
                        </div>
                    </div>
                    <div class="mt-4 flex gap-6 text-sm font-medium text-gray-600">
                        <span class="flex items-center gap-2"><i data-lucide="zap" class="w-4 h-4 text-accentBlue"></i> Live View Latency: <span class="font-bold text-textMain">&lt;2s</span></span>
                        <span class="flex items-center gap-2"><i data-lucide="crosshair" class="w-4 h-4 text-accentBlue"></i> AI Detection Accuracy: <span class="font-bold text-textMain">≥95%</span></span>
                    </div>
                </div>

                <!-- Panel 2: Multi-Device Ingestion Engine -->
                <div>
                    <h2 class="text-xl font-bold tracking-tight text-textMain mb-6">2. Multi-Device Ingestion Engine</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-primary border border-gray-200 p-8 rounded-xl shadow-sm">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="p-2 bg-surface border border-gray-100 rounded-lg"><i data-lucide="video" class="w-5 h-5 text-gray-700"></i></div>
                                <h3 class="font-bold text-textMain text-sm uppercase tracking-wider">Supported Input Streams</h3>
                            </div>
                            <ul class="space-y-3 text-sm text-gray-600">
                                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-accentGreen"></i> Universal IP Cameras (ONVIF Profile S/G/T)</li>
                                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-accentGreen"></i> NVR & DVR Setups</li>
                                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-accentGreen"></i> DIY Hardware & Custom Nodes</li>
                                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-accentGreen"></i> RTSP/RTSPS & RTMP/RTMPS Secure Live Streaming</li>
                                <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-accentGreen"></i> P2P Device Protocols</li>
                            </ul>
                        </div>
                        <div class="bg-primary border border-gray-200 p-8 rounded-xl shadow-sm flex flex-col justify-center">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="p-2 bg-surface border border-gray-100 rounded-lg"><i data-lucide="cloud" class="w-5 h-5 text-gray-700"></i></div>
                                <h3 class="font-bold text-textMain text-sm uppercase tracking-wider">Cloud Integration</h3>
                            </div>
                            <p class="text-sm text-gray-600 leading-relaxed mb-6">
                                Native edge-to-cloud discovery protocols allow for zero-configuration deployments. The system establishes secure remote tunneling via unique device UIDs hosted exclusively on the high-availability Warner Cloud infrastructure.
                            </p>
                            <div>
                                <div class="flex items-center gap-2 text-xs font-bold text-accentBlue bg-blue-50 px-3 py-2 rounded-lg inline-flex border border-blue-100">
                                    <i data-lucide="shield-check" class="w-4 h-4"></i> END-TO-END ENCRYPTED TUNNEL
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Panel 3: RBAC Stakeholder Matrix -->
                <div>
                    <h2 class="text-xl font-bold tracking-tight text-textMain mb-6">3. Role-Based Access Control (RBAC) Matrix</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div class="bg-surface border border-gray-100 p-5 rounded-xl group hover:border-accentBlue transition-colors">
                            <div class="font-bold text-textMain mb-2 flex items-center justify-between">System Administrator <i data-lucide="settings" class="w-4 h-4 text-gray-400 group-hover:text-accentBlue transition-colors"></i></div>
                            <p class="text-xs text-gray-600 leading-relaxed">System wide configuration, device/user management, and global security policies.</p>
                        </div>
                        <div class="bg-surface border border-gray-100 p-5 rounded-xl group hover:border-accentBlue transition-colors">
                            <div class="font-bold text-textMain mb-2 flex items-center justify-between">Security Operator <i data-lucide="eye" class="w-4 h-4 text-gray-400 group-hover:text-accentBlue transition-colors"></i></div>
                            <p class="text-xs text-gray-600 leading-relaxed">Real-time live view monitoring, alarm handling, and instant incident triage.</p>
                        </div>
                        <div class="bg-surface border border-gray-100 p-5 rounded-xl group hover:border-accentBlue transition-colors">
                            <div class="font-bold text-textMain mb-2 flex items-center justify-between">Investigation Officer <i data-lucide="search" class="w-4 h-4 text-gray-400 group-hover:text-accentBlue transition-colors"></i></div>
                            <p class="text-xs text-gray-600 leading-relaxed">Post-event timeline playback, forensic smart searching, and secure evidence collection.</p>
                        </div>
                        <div class="bg-surface border border-gray-100 p-5 rounded-xl group hover:border-accentBlue transition-colors">
                            <div class="font-bold text-textMain mb-2 flex items-center justify-between">Management Team <i data-lucide="bar-chart-3" class="w-4 h-4 text-gray-400 group-hover:text-accentBlue transition-colors"></i></div>
                            <p class="text-xs text-gray-600 leading-relaxed">Visual KPI business intelligence dashboards and auto-scheduled reporting trends.</p>
                        </div>
                        <div class="bg-surface border border-gray-100 p-5 rounded-xl group hover:border-accentBlue transition-colors">
                            <div class="font-bold text-textMain mb-2 flex items-center justify-between">OEM Customer <i data-lucide="briefcase" class="w-4 h-4 text-gray-400 group-hover:text-accentBlue transition-colors"></i></div>
                            <p class="text-xs text-gray-600 leading-relaxed">Multi-tenant isolation, remote fleet monitoring, and device activation portal.</p>
                        </div>
                        <div class="bg-surface border border-gray-100 p-5 rounded-xl group hover:border-accentBlue transition-colors">
                            <div class="font-bold text-textMain mb-2 flex items-center justify-between">Service Engineer <i data-lucide="wrench" class="w-4 h-4 text-gray-400 group-hover:text-accentBlue transition-colors"></i></div>
                            <p class="text-xs text-gray-600 leading-relaxed">Remote diagnostics, camera health monitoring, and automated firmware upgrades.</p>
                        </div>
                    </div>
                </div>

                <!-- Panel 4: Foundational VMS Feature Core (UC-01 to UC-16) -->
                <div>
                    <h2 class="text-xl font-bold tracking-tight text-textMain mb-6">4. Foundational VMS Feature Core</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="vms-features-container">
                        <!-- JS injected collapsible cards -->
                    </div>
                </div>

                <!-- Panel 5: Deep-Tech Security & Encryption Protocol Panel -->
                <div>
                    <h2 class="text-xl font-bold tracking-tight text-textMain mb-6">5. Deep-Tech Security & Encryption Protocol</h2>
                    <div class="bg-primary border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                        <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                            <div class="p-6 bg-surface/50">
                                <h4 class="font-bold text-textMain mb-3 text-sm flex items-center gap-2"><i data-lucide="network" class="w-4 h-4 text-gray-500"></i> In-Transit Data</h4>
                                <p class="text-xs text-gray-600 leading-relaxed">Mandatory TLS 1.2/1.3 and forced HTTPS on all endpoint communications. Zero-trust architecture ensures data streams are sealed.</p>
                            </div>
                            <div class="p-6 bg-surface/50">
                                <h4 class="font-bold text-textMain mb-3 text-sm flex items-center gap-2"><i data-lucide="hard-drive" class="w-4 h-4 text-gray-500"></i> At-Rest Data</h4>
                                <p class="text-xs text-gray-600 leading-relaxed">AES-256 standard encryption on all stored video chunks and indexed metadata databases on both local arrays and cloud volumes.</p>
                            </div>
                            <div class="p-6 bg-surface/50">
                                <h4 class="font-bold text-textMain mb-3 text-sm flex items-center gap-2"><i data-lucide="file-check" class="w-4 h-4 text-gray-500"></i> Data Integrity</h4>
                                <p class="text-xs text-gray-600 leading-relaxed">Immutable, write-once audit logs tracking every configuration change and operator login. Embedded digital signatures prevent tampering.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Panel 6: 4-Phase Delivery Roadmap Timeline -->
                <div>
                    <h2 class="text-xl font-bold tracking-tight text-textMain mb-6">6. 4-Phase Delivery Roadmap</h2>
                    <div class="bg-surface border border-gray-100 rounded-xl p-8 relative">
                        <div class="absolute top-12 bottom-12 left-[39px] w-0.5 bg-gray-200"></div>
                        <div class="space-y-8 relative">
                            <div class="flex gap-6 group">
                                <div class="w-6 h-6 rounded-full bg-accentBlue border-4 border-surface shrink-0 z-10 flex items-center justify-center mt-1 transition-transform group-hover:scale-110 shadow-sm"></div>
                                <div>
                                    <h4 class="font-bold text-textMain">Phase 1: Foundation</h4>
                                    <p class="text-sm text-gray-600 mt-1">Live view layout engine, playback timeline, core recording, PTZ, and basic RBAC.</p>
                                </div>
                            </div>
                            <div class="flex gap-6 group">
                                <div class="w-6 h-6 rounded-full bg-gray-300 border-4 border-surface shrink-0 z-10 flex items-center justify-center mt-1 transition-colors group-hover:bg-gray-400"></div>
                                <div>
                                    <h4 class="font-bold text-textMain">Phase 2: Edge AI Integration</h4>
                                    <p class="text-sm text-gray-600 mt-1">Activation of human/vehicle analytics, ANPR matching, face detection, and PPE compliance.</p>
                                </div>
                            </div>
                            <div class="flex gap-6 group">
                                <div class="w-6 h-6 rounded-full bg-gray-300 border-4 border-surface shrink-0 z-10 flex items-center justify-center mt-1 transition-colors group-hover:bg-gray-400"></div>
                                <div>
                                    <h4 class="font-bold text-textMain">Phase 3: Cloud Scale & GenAI</h4>
                                    <p class="text-sm text-gray-600 mt-1">Multi-tenant OEM portal, natural language vector search ("Find a red truck at gate 2"), and automated AI incident summaries.</p>
                                </div>
                            </div>
                            <div class="flex gap-6 group">
                                <div class="w-6 h-6 rounded-full bg-gray-300 border-4 border-surface shrink-0 z-10 flex items-center justify-center mt-1 transition-colors group-hover:bg-gray-400"></div>
                                <div>
                                    <h4 class="font-bold text-textMain">Phase 4: Enterprise Intelligence</h4>
                                    <p class="text-sm text-gray-600 mt-1">Cross-camera tracking (Multi-Camera ReID), 3D Digital Twin environment integration, and predictive risk scoring.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Panel 7: QA Testing Framework -->
                <div>
                    <h2 class="text-xl font-bold tracking-tight text-textMain mb-6">7. Quality Assurance (QA) Verification</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-primary border border-gray-200 p-6 rounded-xl shadow-sm border-t-4 border-t-gray-700 flex flex-col justify-between">
                            <div>
                                <h4 class="font-bold text-textMain mb-2 text-sm uppercase tracking-wider flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4"></i> Functional QA</h4>
                                <p class="text-xs text-gray-600 leading-relaxed">Stability across massive multi-grids, verified PTZ patrol routing, and fail-safe recording modes.</p>
                            </div>
                        </div>
                        <div class="bg-primary border border-gray-200 p-6 rounded-xl shadow-sm border-t-4 border-t-accentBlue flex flex-col justify-between">
                            <div>
                                <h4 class="font-bold text-textMain mb-2 text-sm uppercase tracking-wider flex items-center gap-2"><i data-lucide="activity" class="w-4 h-4 text-accentBlue"></i> Performance & Scale</h4>
                                <p class="text-xs text-gray-600 leading-relaxed">Tested stable under 10,000+ simultaneous streams; live latency &lt;2s, playback seek &lt;1s, alarm dispatch &lt;5s.</p>
                            </div>
                        </div>
                        <div class="bg-primary border border-gray-200 p-6 rounded-xl shadow-sm border-t-4 border-t-accentGreen flex flex-col justify-between">
                            <div>
                                <h4 class="font-bold text-textMain mb-2 text-sm uppercase tracking-wider flex items-center gap-2"><i data-lucide="shield" class="w-4 h-4 text-accentGreen"></i> Hardening Metrics</h4>
                                <p class="text-xs text-gray-600 leading-relaxed">Active privilege escalation checks, 2FA bypass resistance testing, and immutable log validation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- WORKSPACE 2: AI ANALYTICS MATRIX -->
        <div id="workspace-matrix" class="hidden flex-1 flex flex-col w-full relative min-h-screen">
            <!-- Sub-Navigation -->
            <div class="bg-surfaceAlt border-b border-gray-200 px-8 py-0 z-20 relative shrink-0">
                <div class="max-w-[1600px] mx-auto flex gap-6">
                    <button id="sub-btn-cases" class="py-3 text-[12px] font-bold text-textMain border-b-2 border-accentBlue transition-colors" onclick="switchSubTab('cases')">Venue Case Studies</button>
                    <button id="sub-btn-models" class="py-3 text-[12px] font-semibold text-gray-500 hover:text-textMain border-b-2 border-transparent hover:border-gray-300 transition-colors" onclick="switchSubTab('models')">Global AI Functionalities</button>
                </div>
            </div>
            
""" + cases + "\n" + models + """
        </div>
    </div>
    
""" + template + """
    
    <script src="app.js"></script>
</body>
</html>
"""

with open('index.html', 'w') as f:
    f.write(new_html)
