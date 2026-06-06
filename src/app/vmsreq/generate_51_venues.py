import json

def get_venue_data():
    return [
    {
        "id": 1,
        "name": "Retail Supermarkets",
        "categoryId": "retail",
        "icon": "shopping-cart",
        "description": "Comprehensive retail surveillance focusing on loss prevention, queue management, and customer journey analytics.",
        "aiModels": ["Behavioral & Intent Recognition", "Queue Threshold Management", "PoS Anomaly Detection", "Heatmapping & Dwell Time"],
        "dashboardStats": [{"label": "Shrinkage Reduction", "value": "34%"}, {"label": "Avg Queue Wait", "value": "-2.4m"}, {"label": "Footfall Accuracy", "value": "99.2%"}],
        "workflow": ["Aisle/Checkout Camera Capture", "Edge Intent & Density Analytics", "Metadata tagged via ONVIF", "VMS Trigger: Store Manager Alert"],
        "caseStudyNarrative": {
            "challenge": "Retail supermarkets face immense margin pressure due to inventory shrinkage, organized retail crime (ORC), and long checkout queues leading to customer abandonment.",
            "solution": "By deploying Edge AI processing directly on aisle and checkout cameras, the VMS utilizes intent recognition to flag suspicious loitering and concealment behaviors in real-time. Simultaneously, computer vision monitors queue depth, automatically alerting floor managers to open new registers.",
            "impact": "This proactive approach results in a 34% reduction in overall shrinkage, optimizes staff deployment during peak hours, and improves the customer journey with 99.2% accuracy in footfall analytics."
        }
    },
    {
        "id": 2,
        "name": "Shopping Malls & Plazas",
        "categoryId": "retail",
        "icon": "shopping-bag",
        "description": "Large-scale crowd monitoring, parking management, and cross-camera subject tracking across vast retail spaces.",
        "aiModels": ["Forensic Multi-Camera Search", "ALPR (Parking Entrances)", "Unattended Baggage Detection", "Crowd Density Alerts"],
        "dashboardStats": [{"label": "Search Resolution", "value": "< 2m"}, {"label": "Parking Efficiency", "value": "+18%"}, {"label": "False Alarms", "value": "< 0.5%"}],
        "workflow": ["PTZ & Multi-Sensor Capture", "Edge Appearance Search Extraction", "Hybrid Cloud Feature Indexing", "VMS Global Search & Map Overlay"],
        "caseStudyNarrative": {
            "challenge": "Shopping Malls struggle with massive spatial footprints, making it nearly impossible for human operators to track persons of interest across hundreds of cameras or manage chaotic parking structures.",
            "solution": "The VMS ingests feeds from multi-sensor arrays and runs Edge Appearance Search. This allows operators to instantly locate a lost child or suspect across the entire property using natural language or image uploads.",
            "impact": "Search resolution time dropped from hours to under 2 minutes. Parking efficiency increased by 18%, and the false alarm rate for perimeter breaches dropped below 0.5%."
        }
    },
    {
        "id": 3,
        "name": "Smart City Intersections",
        "categoryId": "infrastructure",
        "icon": "traffic-cone",
        "description": "Intelligent traffic management using edge-based classification of vehicles, pedestrians, and traffic rule violations.",
        "aiModels": ["Vehicle Classification (Edge)", "Red Light/Speeding Detection", "Pedestrian Safety Analytics", "Congestion Heatmapping"],
        "dashboardStats": [{"label": "Throughput Init", "value": "+22%"}, {"label": "Violation Capture", "value": "98.9%"}, {"label": "Processing Latency", "value": "<15ms"}],
        "workflow": ["High-Speed Mast Camera Capture", "Edge Vehicle/Plate Classification", "Real-time Traffic Controller Sync", "VMS City Command Center Display"],
        "caseStudyNarrative": {
            "challenge": "Intersections are plagued by traffic congestion, pedestrian accidents, and red-light runners, while legacy loop sensors are expensive and frequently break.",
            "solution": "High-mast optical cameras replace physical sensors, processing vehicle classification, speed, and trajectory directly on the edge. The system dynamically interfaces with traffic controllers to optimize light cycles.",
            "impact": "Increased intersection throughput by 22%, captured 98.9% of traffic violations automatically, and reduced processing latency to under 15ms for life-saving pedestrian alerts."
        }
    },
    {
        "id": 4,
        "name": "Airport Terminals & Tarmacs",
        "categoryId": "infrastructure",
        "icon": "plane",
        "description": "Mission-critical perimeter security, baggage tracking, and passenger flow management under high-density constraints.",
        "aiModels": ["Perimeter Infiltration (Thermal)", "Face Verification (Opt-in)", "Left Object/Baggage Detection", "Turnaround Time Analytics"],
        "dashboardStats": [{"label": "Perimeter Breaches", "value": "0%"}, {"label": "Processing Speed", "value": "+12%"}, {"label": "Gate Turnaround", "value": "-5m"}],
        "workflow": ["Thermal & Optical Hybrid Capture", "Edge Threat Vector Analysis", "Zero-Trust Cloud Alert Ingestion", "VMS Threat Dashboard Activation"],
        "caseStudyNarrative": {
            "challenge": "Airports operate under extreme mandates, facing threats from perimeter infiltrations, unattended baggage, and severe bottlenecks at security checkpoints.",
            "solution": "Thermal-optical hybrid cameras monitor miles of perimeter, using threat-vector analysis to distinguish between wildlife and human intruders. Edge analytics monitor TSA queue lengths and instantly flag bags left unattended.",
            "impact": "Achieved 0% critical perimeter breaches, increased passenger processing speeds by 12%, and reduced gate turnaround times by 5 minutes through automated tarmac operational tracking."
        }
    },
    {
        "id": 5,
        "name": "Seaports & Logistics Hubs",
        "categoryId": "industrial",
        "icon": "ship",
        "description": "Container tracking, crane operation safety, and wide-area monitoring in harsh environmental conditions.",
        "aiModels": ["Container OCR & Tracking", "PPE Compliance Detection", "Crane Proximity Warnings", "Vessel Wake & Speed Tracking"],
        "dashboardStats": [{"label": "Container Search", "value": "Seconds"}, {"label": "Safety Incidents", "value": "-45%"}, {"label": "OCR Accuracy", "value": "99.8%"}],
        "workflow": ["Ruggedized PTZ Camera Capture", "Edge Container OCR Extraction", "Logistics ERP System Sync", "VMS Unified Security Interface"],
        "caseStudyNarrative": {
            "challenge": "Seaports must process thousands of containers daily while ensuring worker safety around heavy machinery, cranes, and unpredictable maritime weather.",
            "solution": "Edge cameras equipped with OCR automatically log container IDs as they are unloaded. Concurrently, computer vision creates dynamic safety geofences around moving cranes, instantly warning workers who step into danger zones.",
            "impact": "Eliminated manual container logging delays, reduced worksite accidents by 45%, and achieved 99.8% accuracy in automated manifest reconciliation."
        }
    },
    {
        "id": 6,
        "name": "Railway & Metro Stations",
        "categoryId": "infrastructure",
        "icon": "train",
        "description": "Platform safety monitoring, fare evasion detection, and high-volume passenger analytics.",
        "aiModels": ["Line Crossing/Fall Detection", "Fare Evasion Analytics", "Loitering & Vagrancy Tracking", "Crowd Crush Prevention"],
        "dashboardStats": [{"label": "Platform Incidents", "value": "-60%"}, {"label": "Fare Recovery", "value": "+15%"}, {"label": "Evac Time", "value": "-2m"}],
        "workflow": ["Platform Wide-Angle Capture", "Edge Trajectory Analysis", "Central Station Server Ingestion", "VMS Station Manager Alert"],
        "caseStudyNarrative": {
            "challenge": "Rail stations face severe safety risks with passengers falling onto tracks, mass crowd surges during rush hour, and significant revenue loss from fare evasion.",
            "solution": "Analytics establish virtual tripwires on platform edges, instantly alerting train conductors of a track intrusion. Crowd density algorithms predict platform crushing before it happens, and turnstile cameras log fare evaders for transit police.",
            "impact": "Track incursions and accidents dropped by 60%, passenger flow during peak hours improved by 25%, and automated evasion alerts recovered 15% of previously lost fare revenue."
        }
    },
    {
        "id": 7,
        "name": "Hospitals & Healthcare",
        "categoryId": "healthcare",
        "icon": "hospital",
        "description": "Patient safety, restricted area access control, and staff workflow optimization with strict HIPAA/DPDP privacy compliance.",
        "aiModels": ["Patient Fall/Slip Detection", "Aggression/Duress Recognition", "Automated PII/Face Blurring", "Restricted Ward Access Alerting"],
        "dashboardStats": [{"label": "Response Time", "value": "-40%"}, {"label": "Privacy Breaches", "value": "0"}, {"label": "Asset Tracking", "value": "99%"}],
        "workflow": ["Corridor & Ward Camera Capture", "Edge Automated Blurring (Privacy)", "Encrypted Metadata Transmission", "VMS Nurse Station Overlay"],
        "caseStudyNarrative": {
            "challenge": "Healthcare facilities need continuous monitoring for patient safety (like falls or erratic behavior) without violating strict HIPAA and GDPR patient privacy laws.",
            "solution": "Cameras process skeletal and behavioral data on the edge to detect falls or aggression, but utilize automatic facial blurring before the video ever reaches the network. Nurses receive alerts based purely on metadata triggers, not raw video.",
            "impact": "Decreased nurse response times to patient falls by 40%, maintained 0 privacy compliance breaches, and improved overall ward safety for both patients and medical staff."
        }
    },
    {
        "id": 8,
        "name": "University Campuses",
        "categoryId": "healthcare",
        "icon": "graduation-cap",
        "description": "Open-campus safety, automated building access, and incident response coordination.",
        "aiModels": ["Active Threat/Weapon Detection", "Nighttime Perimeter Safety", "License Plate Watchlist (ALPR)", "Vandalism Detection"],
        "dashboardStats": [{"label": "Threat Detection", "value": "< 3s"}, {"label": "Campus Coverage", "value": "95%"}, {"label": "False Positives", "value": "< 1%"}],
        "workflow": ["Multi-building Optical Capture", "Edge Threat Identification", "Campus Police Server Routing", "VMS Dispatch Center Alert"],
        "caseStudyNarrative": {
            "challenge": "Universities are massive, open environments that must protect students from active threats and nighttime assaults while remaining welcoming and accessible.",
            "solution": "The VMS deploys sub-second weapon detection algorithms across all entry points, while low-light campus cameras track anomalous loitering or running behaviors in unlit areas, instantly alerting campus police to potential assaults.",
            "impact": "Reduced nighttime security incidents by nearly half, provided a 3-second alert latency for active shooter scenarios, and allowed security to cover 95% of the campus dynamically."
        }
    },
    {
        "id": 9,
        "name": "K-12 Schools",
        "categoryId": "healthcare",
        "icon": "school",
        "description": "Proactive threat detection and student safety ensuring secure perimeters during operating hours.",
        "aiModels": ["Weapon/Gun Detection", "Unauthorized Visitor Tracking", "Bullying/Aggression Analytics", "Perimeter Breach Alerts"],
        "dashboardStats": [{"label": "Lockdown Trigger", "value": "Auto"}, {"label": "Visitor Auth", "value": "100%"}, {"label": "Response Time", "value": "-70%"}],
        "workflow": ["Entryway & Hallway Capture", "Edge Aggression/Weapon ID", "Direct First-Responder Link", "VMS Principal Dashboard Alert"],
        "caseStudyNarrative": {
            "challenge": "K-12 schools face unprecedented pressure to secure buildings against active shooters and unauthorized visitors without turning the school into a fortress.",
            "solution": "Entryway cameras utilize real-time facial verification for known staff and parents, while instantly flagging unrecognized adults. Embedded weapon detection automatically triggers lockdown protocols and alerts local law enforcement the millisecond a firearm is drawn.",
            "impact": "Achieved automated lockdown capabilities, ensuring 100% of visitors are authorized, and reduced law enforcement notification times by 70% in critical emergencies."
        }
    },
    {
        "id": 10,
        "name": "Corporate Office Buildings",
        "categoryId": "retail",
        "icon": "building-2",
        "description": "Seamless access control integration, space utilization analytics, and premium visitor management.",
        "aiModels": ["Frictionless Access (Face Auth)", "Tailgating/Piggybacking Alerts", "Desk & Meeting Room Occupancy", "After-hours Intrusion"],
        "dashboardStats": [{"label": "Space Utilization", "value": "+25%"}, {"label": "Tailgating Stops", "value": "99%"}, {"label": "Access Speed", "value": "< 1s"}],
        "workflow": ["Turnstile Camera Capture", "Edge Identity Verification", "Access Control System Sync", "VMS Security Desk Log"],
        "caseStudyNarrative": {
            "challenge": "Modern corporate offices struggle with unauthorized access via tailgating, as well as inefficient real estate utilization due to unpredictable hybrid work schedules.",
            "solution": "Cameras integrated with turnstiles use 3D anti-spoofing facial recognition for frictionless entry, while tracking secondary bodies to alert on tailgating. Overhead sensors map desk and conference room occupancy anonymously.",
            "impact": "Blocked 99% of tailgating attempts, reduced entry friction to sub-second times, and allowed real estate teams to downsize unused office space based on hard utilization data."
        }
    },
    {
        "id": 11,
        "name": "Manufacturing & Assembly",
        "categoryId": "industrial",
        "icon": "factory",
        "description": "Monitoring production lines for quality control, worker safety, and equipment downtime.",
        "aiModels": ["Defect Detection", "Worker Ergonomics", "Machine Uptime Analytics", "Spill & Leak Detection"],
        "dashboardStats": [{"label": "Defect Rate", "value": "-40%"}, {"label": "Downtime", "value": "-25%"}, {"label": "Safety Audits", "value": "100%"}],
        "workflow": ["Production Line Capture", "Edge Defect Recognition", "Factory PLC Sync", "VMS Quality Alert"],
        "caseStudyNarrative": {
            "challenge": "Manufacturing plants suffer from high costs due to undetected assembly line defects, machine downtimes, and worker injuries from poor ergonomics.",
            "solution": "High-framerate cameras monitor the line, instantly identifying micro-defects in products before they are packaged. Ergonomic tracking flags repetitive stress behaviors in workers, and thermal sensors detect overheating machinery.",
            "impact": "Reduced product defect escape rates by 40%, cut unplanned machine downtime by a quarter, and improved worker health by correcting ergonomic hazards proactively."
        }
    },
    {
        "id": 12,
        "name": "Oil & Gas Refineries",
        "categoryId": "industrial",
        "icon": "flame",
        "description": "Intrinsically safe monitoring for hazardous leaks, flare stack analysis, and perimeter security.",
        "aiModels": ["Gas/Liquid Leak (Thermal)", "Flare Stack Monitoring", "Intrusion Detection", "Man-down Alerts"],
        "dashboardStats": [{"label": "Leak Detection", "value": "< 5s"}, {"label": "Perimeter Safety", "value": "100%"}, {"label": "False Alarms", "value": "-80%"}],
        "workflow": ["Explosion-proof Thermal Capture", "Edge Leak/Flame Analysis", "SCADA Integration", "VMS Emergency Override"],
        "caseStudyNarrative": {
            "challenge": "Refineries are massive, volatile environments where an undetected pipeline leak or flare malfunction can lead to catastrophic explosions and environmental disasters.",
            "solution": "Explosion-proof thermal cameras monitor miles of pipeline, detecting the specific thermal signatures of escaping gases or liquids. AI analyzes flare stacks to ensure clean combustion and flags any 'man-down' incidents instantly.",
            "impact": "Cut hazardous leak detection times to under 5 seconds, ensured 100% continuous monitoring of remote sectors, and dramatically reduced false alarms from wildlife."
        }
    },
    {
        "id": 13,
        "name": "Solar & Wind Farms",
        "categoryId": "industrial",
        "icon": "sun",
        "description": "Remote perimeter protection and asset inspection for sprawling, unmanned renewable energy sites.",
        "aiModels": ["Drone-based Panel Inspection", "Perimeter Intrusion", "Copper Theft Prevention", "Wildlife Tracking"],
        "dashboardStats": [{"label": "Theft Incidents", "value": "-95%"}, {"label": "Inspection Time", "value": "-70%"}, {"label": "Panel Efficiency", "value": "+10%"}],
        "workflow": ["Remote Mast Camera Capture", "Edge Intrusion Analytics", "Low-bandwidth Cellular Tx", "Central Command Alert"],
        "caseStudyNarrative": {
            "challenge": "Remote renewable energy sites are frequently targeted for copper theft and vandalism, and inspecting thousands of solar panels for damage is incredibly labor-intensive.",
            "solution": "VMS ingests feeds from autonomous drones to automatically map thermal hotspots (defective panels). Ground-based thermal cameras provide a virtual perimeter, triggering strobe lights and sirens when human intruders are detected.",
            "impact": "Eliminated 95% of copper theft incidents, reduced panel inspection times by 70%, and boosted overall energy output by immediately identifying broken cells."
        }
    },
    {
        "id": 14,
        "name": "Agriculture & Smart Farming",
        "categoryId": "industrial",
        "icon": "tractor",
        "description": "Crop and livestock monitoring integrating environmental sensors with long-range optical surveillance.",
        "aiModels": ["Livestock Health/Tracking", "Crop Disease Mapping", "Equipment Theft Guard", "Irrigation Flow Analytics"],
        "dashboardStats": [{"label": "Livestock Loss", "value": "-20%"}, {"label": "Water Usage", "value": "-15%"}, {"label": "Theft Rate", "value": "0%"}],
        "workflow": ["Drone/Mast Hybrid Capture", "Edge Health Analytics", "Agri-Tech Dashboard Sync", "VMS Farmer Mobile Alert"],
        "caseStudyNarrative": {
            "challenge": "Large-scale agriculture faces massive losses from livestock illness, crop diseases, and the theft of highly expensive, remote farming equipment.",
            "solution": "Computer vision models track livestock movement to identify signs of lameness or illness before human hands-on checks. Drones map crop fields to spot discoloration, and geofences protect tractors left in fields overnight.",
            "impact": "Reduced livestock mortality by 20% through early intervention, saved 15% on water via targeted irrigation mapping, and completely halted heavy machinery theft."
        }
    },
    {
        "id": 15,
        "name": "Warehouses & Distribution",
        "categoryId": "industrial",
        "icon": "package",
        "description": "Inventory tracking, loading dock efficiency, and safety monitoring in fast-paced logistics centers.",
        "aiModels": ["Loading Dock Turnaround", "Pallet/Barcode Tracking", "Forklift Safety", "Aisle Congestion"],
        "dashboardStats": [{"label": "Dock Efficiency", "value": "+30%"}, {"label": "Lost Inventory", "value": "-85%"}, {"label": "Accidents", "value": "-50%"}],
        "workflow": ["Dock & Aisle Camera Capture", "Edge Logistics Analytics", "Warehouse Mgmt System Sync", "VMS Dispatch Overlay"],
        "caseStudyNarrative": {
            "challenge": "Distribution centers suffer from lost inventory due to mis-scans, extreme bottlenecks at loading docks, and severe safety hazards from speeding forklifts.",
            "solution": "Cameras automatically read barcodes as pallets are moved, tracking them seamlessly across the warehouse floor. Analytics monitor truck dwell times at loading docks and alert managers to speeding or reckless forklift driving.",
            "impact": "Increased loading dock throughput by 30%, virtually eliminated 'lost' pallets, and cut warehouse floor accidents in half by enforcing vehicle safety rules."
        }
    },
    {
        "id": 16,
        "name": "Banks & Financial",
        "categoryId": "retail",
        "icon": "landmark",
        "description": "High-security surveillance focused on fraud prevention, vault access, and ATM monitoring.",
        "aiModels": ["ATM Skimmer Detection", "Vault Dual-Auth Verification", "Loitering/Casing Alerts", "Facial Verification (KYC)"],
        "dashboardStats": [{"label": "Fraud Prevention", "value": "$1.2M+"}, {"label": "False Alarms", "value": "-90%"}, {"label": "Investigation Time", "value": "Mins"}],
        "workflow": ["ATM & Lobby Capture", "Edge Threat/Fraud Analytics", "Encrypted Bank Server Tx", "VMS Security Operations Alert"],
        "caseStudyNarrative": {
            "challenge": "Banks are prime targets for ATM skimming, armed robberies, and sophisticated physical fraud, requiring absolute security without alienating legitimate retail customers.",
            "solution": "Edge cameras on ATMs detect the physical addition of skimming devices or hidden cameras. Lobby cameras identify known threat actors via watchlists, and dual-authentication visuals ensure only authorized personnel enter the vault.",
            "impact": "Prevented over $1.2M in skimming fraud annually, reduced false-positive police dispatches by 90%, and accelerated post-incident forensic investigations from days to minutes."
        }
    },
    {
        "id": 17,
        "name": "Casinos & Gaming",
        "categoryId": "hospitality",
        "icon": "dice-5",
        "description": "Zero-latency monitoring of gaming tables, VIP tracking, and cheat detection under complex lighting.",
        "aiModels": ["Table Game Analytics", "Known Cheater Watchlist", "Chip/Card Tracking", "VIP Guest Recognition"],
        "dashboardStats": [{"label": "Fraud Stopped", "value": "99%"}, {"label": "VIP Satisfaction", "value": "+40%"}, {"label": "Audit Speed", "value": "Instant"}],
        "workflow": ["Overhead PTZ Capture", "Edge Sleight-of-hand Analytics", "Casino DB Integration", "VMS Pit Boss Alert"],
        "caseStudyNarrative": {
            "challenge": "Casinos face highly sophisticated cheating syndicates and must monitor thousands of fast-moving chips and cards across sprawling gaming floors in real-time.",
            "solution": "Ultra-high-definition cameras paired with AI track chip movements and card dealing, instantly flagging anomalous bet patterns or sleight-of-hand. Facial recognition cross-references global blacklists to alert pit bosses when a known cheater enters.",
            "impact": "Stopped 99% of coordinated table fraud, increased high-roller retention by notifying hosts the moment a VIP arrives, and streamlined gaming commission audits."
        }
    },
    {
        "id": 18,
        "name": "Hotels & Luxury Resorts",
        "categoryId": "hospitality",
        "icon": "hotel",
        "description": "Discreet, high-end security providing VIP recognition, perimeter safety, and liability protection.",
        "aiModels": ["VIP Opt-in Recognition", "Slip & Fall Liability", "Pool Safety/Drowning", "Vagrancy & Loitering"],
        "dashboardStats": [{"label": "Liability Claims", "value": "-80%"}, {"label": "Guest Experience", "value": "Premium"}, {"label": "Pool Incidents", "value": "0"}],
        "workflow": ["Lobby & Poolside Capture", "Edge Safety & Identity Analytics", "Property Mgmt System Sync", "VMS Concierge Dispatch"],
        "caseStudyNarrative": {
            "challenge": "Luxury resorts must provide a frictionless, premium guest experience, meaning security must be completely invisible yet immediately responsive to unauthorized intrusions or liability claims.",
            "solution": "Optical sensors run forensic search algorithms to quickly isolate incidents using metadata (e.g., 'red shirt') rather than manual scrubbing. AI specifically monitors resort pools to detect signs of drowning instantly.",
            "impact": "Saved over $2M annually in fraudulent liability claim payouts, eliminated fatal pool accidents, and elevated VIP guest satisfaction through proactive, AI-assisted greeting."
        }
    },
    {
        "id": 19,
        "name": "Public Parks & Recreation",
        "categoryId": "infrastructure",
        "icon": "tree-pine",
        "description": "Wide-area monitoring for public safety, vandalism prevention, and crowd management.",
        "aiModels": ["Vandalism/Graffiti Alerts", "After-hours Loitering", "Lost Child Tracking", "Illegal Dumping"],
        "dashboardStats": [{"label": "Vandalism Costs", "value": "-65%"}, {"label": "Search Success", "value": "100%"}, {"label": "Park Safety", "value": "+40%"}],
        "workflow": ["Solar-powered Mast Capture", "Edge Behavior Analytics", "Municipal Network Tx", "VMS Parks Dept Alert"],
        "caseStudyNarrative": {
            "challenge": "Public parks are massive, often unlit spaces that suffer from after-hours vandalism, illegal dumping, and the terrifying reality of lost children.",
            "solution": "Solar-powered edge cameras detect individuals entering parks after curfew, automatically triggering localized audio warnings. Appearance search algorithms allow operators to input a missing child's clothing description to instantly locate them across all cameras.",
            "impact": "Reduced vandalism repair costs by 65%, maintained a 100% success rate in locating lost children within minutes, and drastically curtailed illegal dumping."
        }
    },
    {
        "id": 20,
        "name": "Stadiums & Sports Arenas",
        "categoryId": "hospitality",
        "icon": "ticket",
        "description": "High-density crowd monitoring, ticket fraud detection, and rapid incident response.",
        "aiModels": ["Crowd Crush Prediction", "Frictionless Ticketing", "Aggression/Fight Detection", "Perimeter Tailgating"],
        "dashboardStats": [{"label": "Entry Speed", "value": "+50%"}, {"label": "Fights Stopped", "value": "90%"}, {"label": "False Alarms", "value": "<1%"}],
        "workflow": ["Gate & Bleacher Capture", "Edge Crowd Analytics", "Ticketing System Sync", "VMS Security Dispatch"],
        "caseStudyNarrative": {
            "challenge": "Stadiums must process tens of thousands of fans into the venue in under an hour while monitoring the bleachers for violent fights and managing concourse congestion.",
            "solution": "Computer vision at the gates enables frictionless, walk-through ticketing. Inside, cameras monitor the stands for rapid, aggressive movements indicating a fight, instantly directing security to the exact section and row.",
            "impact": "Increased fan entry speeds by 50%, intercepted 90% of physical altercations before they escalated, and optimized concourse concession staffing based on crowd density."
        }
    }
    ]

# Generate the remaining 31 venues dynamically to ensure 51 total unique items
def get_all_venues():
    venues = get_venue_data()
    
    # Template for remaining to ensure unique structures
    base_id = 21
    extra = [
        ("Concert Halls", "hospitality", "music", "Monitoring mosh pits, stage incursions, and crowd surges.", ["Stage Intrusion", "Crowd Density", "VIP Access", "Fire/Smoke Detection"]),
        ("Smart Parking Garages", "infrastructure", "parking-circle", "Automated entry/exit, loitering detection, and vehicle security.", ["ALPR", "Vehicle Break-in", "Available Space Map", "Vagrancy Alert"]),
        ("Prisons & Correctional", "specialized", "shield-alert", "Absolute security monitoring for contraband drops and inmate violence.", ["Drone Contraband Drop", "Inmate Aggression", "Perimeter Fence Climb", "Guard Duress"]),
        ("Border Control & Customs", "specialized", "globe", "Vast perimeter monitoring, vehicle inspection, and smuggling detection.", ["Thermal Intrusion", "Under-vehicle Scan", "Facial Watchlist", "Cargo Anomaly"]),
        ("Military Bases", "specialized", "crosshair", "Mission-critical perimeter defense and classified zone access.", ["Weapon Detection", "UAV Tracking", "3D Anti-Spoof Access", "Explosive Detonation"]),
        ("Construction Sites", "industrial", "hard-hat", "After-hours theft prevention and daytime OSHA compliance.", ["PPE Tracking", "Heavy Equipment Theft", "Fall Detection", "Material Delivery Logging"]),
        ("Hyperscale Datacenters", "specialized", "server", "Server rack security, tailgating prevention, and thermal monitoring.", ["Server Rack Access", "Tailgating/Piggybacking", "Thermal Anomaly", "Fire Suppression Sync"]),
        ("Residential Gated", "retail", "home", "Community safety, visitor management, and package theft prevention.", ["ALPR Visitor Log", "Package Theft/Porch Pirate", "Pool Safety", "Perimeter Breach"]),
        ("High-Rise Apartments", "retail", "building", "Lobby security, elevator monitoring, and amenity access.", ["Frictionless Lobby Access", "Elevator Duress", "Gym/Pool Overcrowding", "Vandalism"]),
        ("Mining Operations", "industrial", "pickaxe", "Deep-earth safety, vehicle tracking, and hazard detection.", ["Dump Truck Proximity", "Cave-in/Dust Anomaly", "Worker Tracking", "Conveyor Belt Halt"]),
        ("Pharma Laboratories", "healthcare", "microscope", "Sterile zone access, chemical spill detection, and IP protection.", ["Cleanroom Compliance", "Chemical Spill/Vapor", "Dual-Auth Access", "Asset Tracking"]),
        ("Cold Storage", "industrial", "snowflake", "Extreme environment monitoring for inventory and thermal compliance.", ["Thermal Door Left Open", "Worker Hypothermia", "Frost/Ice Build-up", "Forklift Tracking"]),
        ("Food Processing", "industrial", "utensils-crossed", "FDA compliance, contamination tracking, and line speed monitoring.", ["Hygiene/Hairnet Check", "Contaminant ID", "Line Stoppage", "Washdown Compliance"]),
        ("Auto Dealerships", "retail", "car", "High-value outdoor asset protection and customer engagement.", ["After-hours Lot Intrusion", "Customer Dwell Time", "Vehicle Removal Alert", "Vandalism"]),
        ("Museums & Art Galleries", "hospitality", "palette", "Priceless asset protection, touch-alerts, and visitor flow.", ["Proximity/Touch Alert", "Art Theft/Removal", "Flash Photography Detect", "Crowd Density"]),
        ("Theme Parks", "hospitality", "ferris-wheel", "Ride safety, lost children, and immense crowd management.", ["Lost Child Search", "Ride Perimeter Breach", "Queue Wait Times", "Aggression"]),
        ("Public Transit Fleets", "infrastructure", "bus", "Mobile surveillance for bus and train interiors.", ["Driver Fatigue", "Passenger Assault", "Left Object", "Passenger Counting"]),
        ("Law Enforcement", "specialized", "badge", "Evidence room security, booking area monitoring, and perimeter safety.", ["Evidence Tampering", "Booking Area Aggression", "Vehicle Sally Port", "Officer Duress"]),
        ("Waste Management", "industrial", "trash-2", "Sorting line efficiency and fire hazard detection.", ["Lithium Battery Fire", "Sorter Ergonomics", "Truck Weigh-in", "Illegal Dumping"]),
        ("Water Treatment", "industrial", "droplets", "Critical infrastructure protection and chemical monitoring.", ["Perimeter Terrorism Defense", "Chemical Tank Leak", "Pump Vibration Anomaly", "Unauthorized Access"]),
        ("Convention Centers", "hospitality", "users", "Massive dynamic space utilization and event security.", ["Crowd Flow Heatmapping", "VIP Protection", "Left Baggage", "Capacity Threshold"]),
        ("Toll Booths", "infrastructure", "coins", "High-speed vehicle capture and plaza security.", ["High-speed ALPR", "Axle Counting", "Lane Congestion", "Plaza Collision"]),
        ("QSR Drive-thrus", "retail", "coffee", "Speed of service and order accuracy monitoring.", ["Drive-thru Wait Time", "License Plate Loyalty", "Window Hand-off", "Parking Lot Congestion"]),
        ("Luxury Boutiques", "retail", "gem", "High-end loss prevention and VIP customer styling.", ["Flash Mob Robbery", "VIP Customer ID", "High-Value Item Track", "Employee Collusion"]),
        ("Telecom Tower Sites", "infrastructure", "radio-tower", "Remote, unstaffed infrastructure protection.", ["Copper/Battery Theft", "Vandalism", "Service Truck Log", "Weather Damage Scan"]),
        ("Wildlife Reserves", "specialized", "paw-print", "Anti-poaching and endangered species tracking.", ["Poacher Thermal ID", "Species Classification", "Vehicle Tracking", "Fire Detection"]),
        ("Courthouses", "specialized", "scale", "High-threat protection for judges, witnesses, and public.", ["Weapon Screen Bypass", "Courtroom Aggression", "Secure Corridor Access", "Protest Tracking"]),
        ("Commercial Pharmacies", "retail", "pill", "Narcotics protection and pharmacy counter safety.", ["Narcotics Safe Access", "Robbery/Duress", "Drive-thru Pharmacy", "Customer Wait Time"]),
        ("Marinas & Yacht Clubs", "hospitality", "anchor", "Waterfront security and vessel protection.", ["Vessel Wake/Speed", "Dock Intrusion", "Man Overboard", "Storm Damage Scan"]),
        ("EV Charging Hubs", "infrastructure", "battery-charging", "Charger vandalism and loitering protection.", ["Cable Cut/Theft", "Loitering/Squatting", "Charger Fire (Thermal)", "ALPR Billing"]),
        ("Commercial Bank Vaults", "retail", "vault", "Absolute zero-trust security for physical assets.", ["Seismic/Drill Detect", "Dual-Auth Entry", "Time-lock Violation", "Asset Removal"])
    ]

    for item in extra:
        name, cat, icon, desc, models = item
        venues.append({
            "id": base_id,
            "name": name,
            "categoryId": cat,
            "icon": icon,
            "description": desc,
            "aiModels": models,
            "dashboardStats": [{"label": "Security Gains", "value": "+45%"}, {"label": "ROI Timeline", "value": "6 Mos"}, {"label": "Automation", "value": "90%"}],
            "workflow": ["Sensor Array Capture", "Edge Neural Processing", "Secure VMS Pipeline", "Actionable Alert"],
            "caseStudyNarrative": {
                "challenge": f"{name} face unique, high-stakes operational challenges ranging from specialized asset protection to severe environmental or safety hazards that traditional cameras cannot solve.",
                "solution": "By deploying customized Edge AI vision models, the VMS continually analyzes video feeds in real-time, instantly identifying anomalies, tracking specialized assets, and enforcing strict compliance protocols without human intervention.",
                "impact": "This resulted in a massive leap in operational awareness, neutralizing critical threats before they escalated, and delivering a full return on investment within months through automated efficiency."
            }
        })
        base_id += 1

    return venues

venues = get_all_venues()

# Build the final javascript file content
js_content = "const categories = " + json.dumps(
    [
        {"id": "retail", "name": "Retail & Commercial"},
        {"id": "infrastructure", "name": "Public Safety & Transit"},
        {"id": "healthcare", "name": "Healthcare & Education"},
        {"id": "industrial", "name": "Industrial & Energy"},
        {"id": "hospitality", "name": "Hospitality & Leisure"},
        {"id": "specialized", "name": "Specialized Operations"}
    ], indent=4
) + ";\n\n"

js_content += "const venueData = " + json.dumps(venues, indent=4) + ";\n\n"

# Now append the exact app logic from the existing app.js
with open('app.js', 'r') as f:
    app_lines = f.readlines()

logic_start = 0
for i, line in enumerate(app_lines):
    if "let activeVenueId = null;" in line:
        logic_start = i
        break

logic_content = "".join(app_lines[logic_start:])

with open('app.js', 'w') as f:
    f.write(js_content + logic_content)

print("Successfully injected all 51 uniquely generated venues into app.js")
