import json

categories = [
    { 'id': 'retail', 'name': 'Retail & Commercial' },
    { 'id': 'infrastructure', 'name': 'Public Safety & Transit' },
    { 'id': 'healthcare', 'name': 'Healthcare & Education' },
    { 'id': 'industrial', 'name': 'Industrial & Energy' },
    { 'id': 'hospitality', 'name': 'Hospitality & Leisure' },
    { 'id': 'specialized', 'name': 'Specialized Operations' }
]

venues = [
    (1, "Retail Supermarkets", "retail", "shopping-cart"),
    (2, "Shopping Malls & Plazas", "retail", "shopping-bag"),
    (3, "Smart City Intersections", "infrastructure", "traffic-cone"),
    (4, "Airport Terminals & Tarmacs", "infrastructure", "plane"),
    (5, "Seaports & Logistics Hubs", "industrial", "ship"),
    (6, "Railway & Metro Stations", "infrastructure", "train"),
    (7, "Hospitals & Healthcare", "healthcare", "hospital"),
    (8, "University Campuses", "healthcare", "graduation-cap"),
    (9, "K-12 Schools", "healthcare", "school"),
    (10, "Corporate Offices", "retail", "building-2"),
    (11, "Manufacturing & Assembly", "industrial", "factory"),
    (12, "Oil & Gas Refineries", "industrial", "flame"),
    (13, "Solar & Wind Farms", "industrial", "sun"),
    (14, "Agriculture & Smart Farming", "industrial", "tractor"),
    (15, "Warehouses & Distribution", "industrial", "package"),
    (16, "Banks & Financial", "retail", "landmark"),
    (17, "Casinos & Gaming", "hospitality", "dice-5"),
    (18, "Hotels & Luxury Resorts", "hospitality", "hotel"),
    (19, "Public Parks & Rec", "infrastructure", "tree-pine"),
    (20, "Stadiums & Sports Arenas", "hospitality", "ticket"),
    (21, "Concert Halls", "hospitality", "music"),
    (22, "Smart Parking Garages", "infrastructure", "parking-circle"),
    (23, "Prisons & Correctional", "specialized", "shield-alert"),
    (24, "Border Control & Customs", "specialized", "globe"),
    (25, "Military Bases", "specialized", "crosshair"),
    (26, "Construction Sites", "industrial", "hard-hat"),
    (27, "Hyperscale Datacenters", "specialized", "server"),
    (28, "Residential Gated", "retail", "home"),
    (29, "High-Rise Apartments", "retail", "building"),
    (30, "Mining Operations", "industrial", "pickaxe"),
    (31, "Pharma Laboratories", "healthcare", "microscope"),
    (32, "Cold Storage", "industrial", "snowflake"),
    (33, "Food Processing", "industrial", "utensils-crossed"),
    (34, "Auto Dealerships", "retail", "car"),
    (35, "Museums & Art Galleries", "hospitality", "palette"),
    (36, "Theme Parks", "hospitality", "ferris-wheel"),
    (37, "Public Transit Fleets", "infrastructure", "bus"),
    (38, "Law Enforcement", "specialized", "badge"),
    (39, "Waste Management", "industrial", "trash-2"),
    (40, "Water Treatment", "industrial", "droplets"),
    (41, "Convention Centers", "hospitality", "users"),
    (42, "Toll Booths", "infrastructure", "coins"),
    (43, "QSR Drive-thrus", "retail", "coffee"),
    (44, "Luxury Boutiques", "retail", "gem"),
    (45, "Telecom Tower Sites", "infrastructure", "radio-tower"),
    (46, "Wildlife Reserves", "specialized", "paw-print"),
    (47, "Courthouses", "specialized", "scale"),
    (48, "Commercial Pharmacies", "retail", "pill"),
    (49, "Marinas & Yacht Clubs", "hospitality", "anchor"),
    (50, "EV Charging Hubs", "infrastructure", "battery-charging"),
    (51, "Commercial Bank Vaults", "retail", "vault")
]

generated_data = []

# Hand-crafted content for a diverse set
templates = {
    "retail": {
        "desc": "Advanced retail analytics and surveillance optimizing customer flow, loss prevention, and space utilization.",
        "models": ["Intent & Loitering Analytics", "Queue Wait Tracking", "Stock Out Detection", "Footfall Heatmaps"],
        "challenge": "{name} face ongoing issues with organized retail crime, poor staffing allocation during peak times, and understanding customer spatial journeys within complex layouts.",
        "solution": "Leveraging edge-based intent analysis and cross-camera tracking, the system identifies suspicious concealment behaviors instantly. Queue management algorithms continuously monitor checkout friction, while heatmapping processes spatial utilization without requiring cloud transmission.",
        "impact": "Achieved a 30% reduction in measurable shrinkage, elevated customer satisfaction by predicting register bottlenecks, and optimized floor planning based on reliable dwelling data.",
        "workflow": ["Overhead Capture", "Edge Intent Analysis", "VMS Data Aggregation", "Manager Alert Trigger"]
    },
    "industrial": {
        "desc": "Ruggedized industrial monitoring focusing on OSHA compliance, predictive equipment maintenance, and hazardous zone security.",
        "models": ["PPE Compliance Checking", "Thermal Leak Detection", "Hazard Zone Incursion", "Forklift Proximity Warning"],
        "challenge": "{name} operate in inherently dangerous environments where a single lapse in safety protocol or an unnoticed equipment failure can result in catastrophic injuries or massive operational downtime.",
        "solution": "Deploying hybrid optical-thermal edge sensors, the VMS continually scans for missing Personal Protective Equipment (PPE) like hardhats and vests. Simultaneously, it maps dynamic geofences around heavy machinery to alert on unauthorized incursions.",
        "impact": "Reduced OSHA-recordable incidents by 45%, eliminated near-misses with heavy machinery, and decreased insurance premiums through verifiable, automated compliance auditing.",
        "workflow": ["Thermal/Optical Capture", "Edge Safety Verification", "Factory Scada Sync", "Siren/Dashboard Alert"]
    },
    "healthcare": {
        "desc": "Privacy-first healthcare surveillance focused on patient duress, sterile zone access, and staff workflow efficiency.",
        "models": ["Patient Fall Detection", "Aggression Recognition", "Auto PII Blurring", "Asset Tracking (Wheelchairs)"],
        "challenge": "{name} require strict patient safety and rapid duress response, but are severely constrained by HIPAA/GDPR privacy laws that forbid traditional widespread recording and monitoring.",
        "solution": "The platform utilizes on-edge real-time video blurring, ensuring patient and staff faces are irreversibly anonymized before transmission. Embedded fall-detection and aggression-recognition models analyze body mechanics (skeletal tracking) without processing identity.",
        "impact": "Decreased nurse response times to patient falls by 60%, eradicated compliance violations via zero-trust data anonymization, and recovered thousands in lost operational assets.",
        "workflow": ["Corridor Capture", "Edge Skeletal Analysis & Blur", "Secure Metadata Tx", "Nurse Station Pop-up"]
    },
    "infrastructure": {
        "desc": "Large-scale infrastructure and transit security focused on crowd crush prevention, perimeter defense, and flow management.",
        "models": ["Crowd Density Estimation", "Unattended Object ID", "ALPR & Speeding", "Perimeter Breach (Thermal)"],
        "challenge": "{name} must safely process thousands of individuals and vehicles per hour while constantly remaining vigilant against terror threats, unauthorized access, and fatal congestion bottlenecks.",
        "solution": "The system ingests high-definition streams to perform real-time crowd density estimations and pathing predictions. Any abandoned objects are instantly flagged, and perimeter cameras use thermal vectors to identify infiltrations miles away in total darkness.",
        "impact": "Prevented critical overcrowding events through predictive alerts, secured vast unlit perimeters seamlessly, and decreased security operator fatigue by filtering 99% of false environmental alarms.",
        "workflow": ["Multi-Sensor Array", "Edge Density/Threat Processing", "City/Transit Cloud Sync", "Command Center Overlay"]
    },
    "hospitality": {
        "desc": "Discreet, high-end security providing VIP recognition, perimeter safety, and liability protection without disrupting the guest experience.",
        "models": ["VIP Opt-in Recognition", "Slip & Fall Liability", "Vagrancy & Loitering", "Vehicle Tracking"],
        "challenge": "{name} strive to provide a frictionless, premium guest experience, meaning security must be completely invisible yet immediately responsive to unauthorized intrusions or liability claims (like slip-and-falls).",
        "solution": "Optical sensors are tuned for discreet integration. The VMS runs forensic search algorithms that can quickly isolate an incident using metadata (e.g., 'red shirt, blue bag') rather than manual scrubbing, while instantly recognizing known VIPs via opt-in facial vectors.",
        "impact": "Saved over $2M annually in fraudulent liability claim payouts, elevated VIP guest satisfaction through proactive greeting, and minimized visible security patrols by relying on AI-directed dispatches.",
        "workflow": ["Lobby/Hallway Capture", "Edge Forensic Extraction", "Hybrid Search DB Sync", "Concierge/Security Dispatch"]
    },
    "specialized": {
        "desc": "Mission-critical surveillance for high-stakes environments demanding zero-trust security and instantaneous threat neutralization.",
        "models": ["Weapon Detection", "Drone ID & Tracking", "Biometric Anti-Spoofing", "Classified Zone Access"],
        "challenge": "{name} represent the highest tier of security requirements, where state-sponsored espionage, armed incursions, or severe contraband smuggling are daily realistic threats.",
        "solution": "Leveraging military-grade edge nodes, the AI performs sub-millisecond weapon detection and drone tracking. Access to restricted areas requires multi-factor visual authentication with 3D anti-spoofing depth analysis.",
        "impact": "Achieved a 100% block rate on unauthorized infiltrations, neutralized armed threats seconds before entry, and maintained absolute data sovereignty through air-gapped, on-premise VMS deployments.",
        "workflow": ["Specialized Sensor Capture", "Zero-Latency Threat ID", "Air-Gapped Core Server", "Automated Lockdown Trigger"]
    }
}

for v in venues:
    vid, vname, cat, icon = v
    tmpl = templates[cat]
    
    # Customize the challenge slightly to inject the name
    custom_challenge = tmpl['challenge'].replace("{name}", vname)
    
    obj = {
        "id": vid,
        "name": vname,
        "categoryId": cat,
        "icon": icon,
        "description": tmpl["desc"],
        "aiModels": tmpl["models"],
        "dashboardStats": [
            {"label": "Incident Drop", "value": "-30%"},
            {"label": "Response Time", "value": "<2s"},
            {"label": "Uptime", "value": "99.9%"}
        ],
        "workflow": tmpl["workflow"],
        "caseStudyNarrative": {
            "challenge": custom_challenge,
            "solution": tmpl["solution"],
            "impact": tmpl["impact"]
        }
    }
    generated_data.append(obj)

# Specific overrides for the first 10 for absolute perfection as previously defined
overrides = {
    1: {
        "challenge": "Retail supermarkets face immense margin pressure due to inventory shrinkage, organized retail crime (ORC), and long checkout queues leading to customer abandonment.",
        "solution": "By deploying Edge AI processing directly on aisle and checkout cameras, the VMS utilizes intent recognition to flag suspicious loitering and concealment behaviors in real-time. Simultaneously, computer vision monitors queue depth, automatically alerting floor managers to open new registers before wait times exceed 3 minutes.",
        "impact": "This proactive approach results in a 34% reduction in overall shrinkage, optimizes staff deployment during peak hours, and improves the customer journey with 99.2% accuracy in footfall analytics."
    },
    2: {
        "challenge": "Shopping Malls & Plazas struggle with massive spatial footprints, making it nearly impossible for human operators to track persons of interest across hundreds of cameras or manage chaotic parking structures.",
        "solution": "The VMS ingests feeds from multi-sensor arrays and runs Edge Appearance Search. This allows operators to instantly locate a lost child or suspect across the entire property using natural language or image uploads. ALPR at entrances automates parking gate flow.",
        "impact": "Search resolution time dropped from hours to under 2 minutes. Parking efficiency increased by 18%, and the false alarm rate for perimeter breaches dropped below 0.5%."
    },
    3: {
        "challenge": "Smart City Intersections are plagued by traffic congestion, pedestrian accidents, and red-light runners, while legacy loop sensors are expensive and frequently break.",
        "solution": "High-mast optical cameras replace physical sensors, processing vehicle classification, speed, and trajectory directly on the edge. The system dynamically interfaces with traffic controllers to optimize light cycles based on real-time congestion and pedestrian presence.",
        "impact": "Increased intersection throughput by 22%, captured 98.9% of traffic violations automatically, and reduced processing latency to under 15ms for life-saving pedestrian alerts."
    },
    4: {
        "challenge": "Airport Terminals & Tarmacs operate under extreme security mandates, facing threats from perimeter infiltrations, unattended baggage, and severe bottlenecks at security checkpoints.",
        "solution": "Thermal-optical hybrid cameras monitor miles of perimeter, using threat-vector analysis to distinguish between wildlife and human intruders. Inside, edge analytics monitor TSA queue lengths and instantly flag bags left unattended for more than 60 seconds.",
        "impact": "Achieved 0% critical perimeter breaches, increased passenger processing speeds by 12%, and reduced gate turnaround times by 5 minutes through automated tarmac operational tracking."
    }
}

for item in generated_data:
    if item["id"] in overrides:
        item["caseStudyNarrative"] = overrides[item["id"]]

# Write out a JS file fragment that contains the data
with open("data_fragment.js", "w") as f:
    f.write("const categories = " + json.dumps(categories, indent=4) + ";\n\n")
    f.write("const venueData = " + json.dumps(generated_data, indent=4) + ";\n")

print("Generated data_fragment.js successfully.")
