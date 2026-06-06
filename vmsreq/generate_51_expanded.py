import json

def get_venue_data():
    return [
    {
        "id": 1,
        "name": "Retail Supermarkets",
        "categoryId": "retail",
        "icon": "shopping-cart",
        "description": "Comprehensive retail surveillance focusing on loss prevention, queue management, staff optimization, shelf stocking, and customer journey analytics.",
        "aiModels": ["Behavioral & Intent Recognition", "Queue Threshold Management", "PoS Anomaly Detection", "Heatmapping & Dwell Time", "Shelf Out-of-Stock Detection", "Spill/Hazard Recognition", "Demographic Analytics", "Cart/Basket Tracking", "Employee Flow Optimization"],
        "dashboardStats": [{"label": "Shrinkage Reduction", "value": "34%"}, {"label": "Avg Queue Wait", "value": "-2.4m"}, {"label": "Footfall Accuracy", "value": "99.2%"}],
        "workflow": ["Aisle/Checkout Camera Capture", "Edge Intent & Density Analytics", "Metadata tagged via ONVIF", "VMS Trigger: Store Manager Alert"],
        "caseStudyNarrative": {
            "challenge": "Retail supermarkets face immense margin pressure due to inventory shrinkage, organized retail crime (ORC), empty shelves during peak hours, and long checkout queues leading to customer abandonment.",
            "solution": "By deploying Edge AI processing directly on aisle and checkout cameras, the VMS utilizes intent recognition to flag suspicious loitering and concealment behaviors in real-time. It tracks cart movements, detects spills for instant cleanup, and monitors queue depth, automatically alerting floor managers to open new registers.",
            "impact": "This proactive approach results in a 34% reduction in overall shrinkage, optimizes staff deployment during peak hours, ensures shelves are restocked 40% faster, and improves the customer journey with 99.2% accuracy in footfall analytics."
        }
    },
    {
        "id": 2,
        "name": "Shopping Malls & Plazas",
        "categoryId": "retail",
        "icon": "shopping-bag",
        "description": "Large-scale crowd monitoring, parking management, and cross-camera subject tracking across vast retail spaces.",
        "aiModels": ["Forensic Multi-Camera Search", "ALPR (Parking Entrances)", "Unattended Baggage Detection", "Crowd Density Alerts", "Directional Flow Tracking", "VIP Shopper Recognition", "Child Wandering Alert", "Nighttime Perimeter Defense", "Storefront Loitering Analytics"],
        "dashboardStats": [{"label": "Search Resolution", "value": "< 2m"}, {"label": "Parking Efficiency", "value": "+18%"}, {"label": "False Alarms", "value": "< 0.5%"}],
        "workflow": ["PTZ & Multi-Sensor Capture", "Edge Appearance Search Extraction", "Hybrid Cloud Feature Indexing", "VMS Global Search & Map Overlay"],
        "caseStudyNarrative": {
            "challenge": "Shopping Malls struggle with massive spatial footprints, making it nearly impossible for human operators to track persons of interest across hundreds of cameras, secure perimeters at night, or manage chaotic parking structures.",
            "solution": "The VMS ingests feeds from multi-sensor arrays and runs Edge Appearance Search. This allows operators to instantly locate a lost child or suspect across the entire property. ALPR at entrances automates parking gate flow, while loitering analytics secure storefronts post-closing.",
            "impact": "Search resolution time dropped from hours to under 2 minutes. Parking efficiency increased by 18%, lost child recovery achieved 100% success within 3 minutes, and the false alarm rate for perimeter breaches dropped below 0.5%."
        }
    },
    {
        "id": 3,
        "name": "Smart City Intersections",
        "categoryId": "infrastructure",
        "icon": "traffic-cone",
        "description": "Intelligent traffic management using edge-based classification of vehicles, pedestrians, micro-mobility, and traffic rule violations.",
        "aiModels": ["Vehicle Classification (Edge)", "Red Light/Speeding Detection", "Pedestrian Safety Analytics", "Congestion Heatmapping", "Micro-mobility Tracking (Bikes/Scooters)", "Wrong-way Driving Alert", "Accident/Crash Detection", "Emergency Vehicle Preemption", "Weather/Visibility Adaptation"],
        "dashboardStats": [{"label": "Throughput Init", "value": "+22%"}, {"label": "Violation Capture", "value": "98.9%"}, {"label": "Processing Latency", "value": "<15ms"}],
        "workflow": ["High-Speed Mast Camera Capture", "Edge Vehicle/Plate Classification", "Real-time Traffic Controller Sync", "VMS City Command Center Display"],
        "caseStudyNarrative": {
            "challenge": "Intersections are plagued by traffic congestion, pedestrian accidents, wrong-way driving, and red-light runners, while legacy loop sensors are expensive and frequently break.",
            "solution": "High-mast optical cameras replace physical sensors, processing vehicle classification, speed, wrong-way alerts, and micro-mobility tracking directly on the edge. The system dynamically interfaces with traffic controllers to optimize light cycles and preempt lights for approaching ambulances.",
            "impact": "Increased intersection throughput by 22%, captured 98.9% of traffic violations automatically, reduced emergency response times by 3 minutes, and reduced processing latency to under 15ms for life-saving pedestrian alerts."
        }
    },
    {
        "id": 4,
        "name": "Airport Terminals & Tarmacs",
        "categoryId": "infrastructure",
        "icon": "plane",
        "description": "Mission-critical perimeter security, baggage tracking, ground support operations, and passenger flow management under high-density constraints.",
        "aiModels": ["Perimeter Infiltration (Thermal)", "Face Verification (Opt-in)", "Left Object/Baggage Detection", "Turnaround Time Analytics", "Ground Support Equipment Tracking", "TSA Queue Wait Estimation", "Slip & Fall Detection", "Drone ID & Tracking", "Unauthorized Airside Access"],
        "dashboardStats": [{"label": "Perimeter Breaches", "value": "0%"}, {"label": "Processing Speed", "value": "+12%"}, {"label": "Gate Turnaround", "value": "-5m"}],
        "workflow": ["Thermal & Optical Hybrid Capture", "Edge Threat Vector Analysis", "Zero-Trust Cloud Alert Ingestion", "VMS Threat Dashboard Activation"],
        "caseStudyNarrative": {
            "challenge": "Airports operate under extreme mandates, facing threats from perimeter infiltrations, unattended baggage, unauthorized airside access, and severe bottlenecks at security checkpoints.",
            "solution": "Thermal-optical hybrid cameras monitor miles of perimeter and detect unauthorized drones. Inside, edge analytics monitor TSA queue lengths, flag unattended bags, and track the movement of ground support equipment to optimize gate operations.",
            "impact": "Achieved 0% critical perimeter breaches, increased passenger processing speeds by 12%, reduced gate turnaround times by 5 minutes through automated tarmac operational tracking, and eliminated drone incursions."
        }
    },
    {
        "id": 5,
        "name": "Seaports & Logistics Hubs",
        "categoryId": "industrial",
        "icon": "ship",
        "description": "Container tracking, crane operation safety, perimeter defense, and wide-area monitoring in harsh environmental conditions.",
        "aiModels": ["Container OCR & Tracking", "PPE Compliance Detection", "Crane Proximity Warnings", "Vessel Wake & Speed Tracking", "Railcar Identification", "Water-side Intrusion (Thermal)", "Hazardous Material Leak", "Forklift Telemetry Sync", "Nighttime Fog Enhancement"],
        "dashboardStats": [{"label": "Container Search", "value": "Seconds"}, {"label": "Safety Incidents", "value": "-45%"}, {"label": "OCR Accuracy", "value": "99.8%"}],
        "workflow": ["Ruggedized PTZ Camera Capture", "Edge Container OCR Extraction", "Logistics ERP System Sync", "VMS Unified Security Interface"],
        "caseStudyNarrative": {
            "challenge": "Seaports must process thousands of containers daily while ensuring worker safety around heavy machinery, monitoring water-side approaches, and mitigating unpredictable maritime weather.",
            "solution": "Edge cameras equipped with OCR automatically log container and railcar IDs as they are unloaded. Concurrently, computer vision creates dynamic safety geofences around moving cranes, detects hazmat leaks, and utilizes thermal sensors to monitor the water-side for unauthorized approaches in heavy fog.",
            "impact": "Eliminated manual container logging delays, reduced worksite accidents by 45%, achieved 99.8% accuracy in automated manifest reconciliation, and secured the vulnerable water-side perimeter."
        }
    },
    {
        "id": 6,
        "name": "Railway & Metro Stations",
        "categoryId": "infrastructure",
        "icon": "train",
        "description": "Platform safety monitoring, fare evasion detection, passenger analytics, and rolling stock inspection.",
        "aiModels": ["Line Crossing/Fall Detection", "Fare Evasion Analytics", "Loitering & Vagrancy Tracking", "Crowd Crush Prevention", "Rolling Stock Defect ID", "Graffiti/Vandalism Alerts", "Escalator Congestion Tracking", "Unattended Object Detection", "Aggression Recognition"],
        "dashboardStats": [{"label": "Platform Incidents", "value": "-60%"}, {"label": "Fare Recovery", "value": "+15%"}, {"label": "Evac Time", "value": "-2m"}],
        "workflow": ["Platform Wide-Angle Capture", "Edge Trajectory Analysis", "Central Station Server Ingestion", "VMS Station Manager Alert"],
        "caseStudyNarrative": {
            "challenge": "Rail stations face severe safety risks with passengers falling onto tracks, mass crowd surges during rush hour, rolling stock defects, and significant revenue loss from fare evasion.",
            "solution": "Analytics establish virtual tripwires on platform edges, instantly alerting train conductors of a track intrusion. Crowd density algorithms predict platform and escalator crushing before it happens, cameras inspect passing trains for mechanical defects, and turnstile cameras log fare evaders for transit police.",
            "impact": "Track incursions and accidents dropped by 60%, passenger flow during peak hours improved by 25%, automated evasion alerts recovered 15% of previously lost fare revenue, and mechanical train failures were reduced."
        }
    },
    {
        "id": 7,
        "name": "Hospitals & Healthcare",
        "categoryId": "healthcare",
        "icon": "hospital",
        "description": "Patient safety, restricted area access control, operational efficiency, and staff workflow optimization with strict HIPAA/DPDP privacy compliance.",
        "aiModels": ["Patient Fall/Slip Detection", "Aggression/Duress Recognition", "Automated PII/Face Blurring", "Asset Tracking (Wheelchairs)", "Bed Turnaround Analytics", "Restricted Ward Access Alerting", "Hand Hygiene Compliance", "Elopement Detection (Wandering)", "Surgical Count Verification"],
        "dashboardStats": [{"label": "Response Time", "value": "-40%"}, {"label": "Privacy Breaches", "value": "0"}, {"label": "Asset Tracking", "value": "99%"}],
        "workflow": ["Corridor & Ward Camera Capture", "Edge Automated Blurring (Privacy)", "Encrypted Metadata Transmission", "VMS Nurse Station Overlay"],
        "caseStudyNarrative": {
            "challenge": "Healthcare facilities need continuous monitoring for patient safety (like falls, elopement, or erratic behavior), infection control, and asset management without violating strict HIPAA and GDPR patient privacy laws.",
            "solution": "Cameras process skeletal and behavioral data on the edge to detect falls, aggression, or wandering patients (elopement), but utilize automatic facial blurring before the video ever reaches the network. Secondary algorithms monitor staff hand hygiene stations and track critical equipment like crash carts.",
            "impact": "Decreased nurse response times to patient falls by 40%, maintained 0 privacy compliance breaches, improved hospital acquired infection (HAI) rates via hygiene compliance, and recovered thousands in lost operational assets."
        }
    },
    {
        "id": 8,
        "name": "University Campuses",
        "categoryId": "healthcare",
        "icon": "graduation-cap",
        "description": "Open-campus safety, automated building access, event crowd management, and rapid incident response coordination.",
        "aiModels": ["Active Threat/Weapon Detection", "Nighttime Perimeter Safety", "License Plate Watchlist (ALPR)", "Vandalism Detection", "Campus Bus Tracking", "Stadium Crowd Density", "Bicycle Theft Prevention", "Emergency Blue-Light Sync", "Dormitory Tailgating Alert"],
        "dashboardStats": [{"label": "Threat Detection", "value": "< 3s"}, {"label": "Campus Coverage", "value": "95%"}, {"label": "False Positives", "value": "< 1%"}],
        "workflow": ["Multi-building Optical Capture", "Edge Threat Identification", "Campus Police Server Routing", "VMS Dispatch Center Alert"],
        "caseStudyNarrative": {
            "challenge": "Universities are massive, open environments that must protect students from active threats, dormitory unauthorized access, and nighttime assaults while remaining welcoming and accessible.",
            "solution": "The VMS deploys sub-second weapon detection algorithms across all entry points, while low-light campus cameras track anomalous loitering or running behaviors in unlit areas. Advanced analytics monitor dormitory tailgating and sync automatically with emergency blue-light stations.",
            "impact": "Reduced nighttime security incidents by nearly half, provided a 3-second alert latency for active shooter scenarios, prevented unauthorized dorm entries, and allowed security to cover 95% of the campus dynamically."
        }
    },
    {
        "id": 9,
        "name": "K-12 Schools",
        "categoryId": "healthcare",
        "icon": "school",
        "description": "Proactive threat detection, bullying prevention, and student safety ensuring secure perimeters during operating hours.",
        "aiModels": ["Weapon/Gun Detection", "Unauthorized Visitor Tracking", "Bullying/Aggression Analytics", "Perimeter Breach Alerts", "Vape/Smoke Detection Sync", "Bus Loading Zone Safety", "Missing Child Search", "After-hours Intrusion"],
        "dashboardStats": [{"label": "Lockdown Trigger", "value": "Auto"}, {"label": "Visitor Auth", "value": "100%"}, {"label": "Response Time", "value": "-70%"}],
        "workflow": ["Entryway & Hallway Capture", "Edge Aggression/Weapon ID", "Direct First-Responder Link", "VMS Principal Dashboard Alert"],
        "caseStudyNarrative": {
            "challenge": "K-12 schools face unprecedented pressure to secure buildings against active shooters, bullying in blind spots, and unauthorized visitors without turning the school into a fortress.",
            "solution": "Entryway cameras utilize real-time facial verification for known staff and parents, while instantly flagging unrecognized adults. Embedded weapon detection automatically triggers lockdown protocols, while hallway analytics flag aggressive crowding (bullying) and sync with restroom vape detectors.",
            "impact": "Achieved automated lockdown capabilities, ensuring 100% of visitors are authorized, reduced on-campus bullying incidents, and reduced law enforcement notification times by 70% in critical emergencies."
        }
    },
    {
        "id": 10,
        "name": "Corporate Office Buildings",
        "categoryId": "retail",
        "icon": "building-2",
        "description": "Seamless access control integration, space utilization analytics, and premium visitor management for modern enterprises.",
        "aiModels": ["Frictionless Access (Face Auth)", "Tailgating/Piggybacking Alerts", "Desk & Meeting Room Occupancy", "After-hours Intrusion", "HVAC Usage Optimization", "VIP Visitor Greeting", "Delivery/Courier Tracking", "Parking Spot Availability", "Ergonomic Office Analytics"],
        "dashboardStats": [{"label": "Space Utilization", "value": "+25%"}, {"label": "Tailgating Stops", "value": "99%"}, {"label": "Access Speed", "value": "< 1s"}],
        "workflow": ["Turnstile Camera Capture", "Edge Identity Verification", "Access Control System Sync", "VMS Security Desk Log"],
        "caseStudyNarrative": {
            "challenge": "Modern corporate offices struggle with unauthorized access via tailgating, inefficient real estate utilization due to unpredictable hybrid work schedules, and excessive HVAC costs in empty sectors.",
            "solution": "Cameras integrated with turnstiles use 3D anti-spoofing facial recognition for frictionless entry, while tracking secondary bodies to alert on tailgating. Overhead sensors map desk occupancy anonymously and feed data to the HVAC system to power down empty zones.",
            "impact": "Blocked 99% of tailgating attempts, reduced entry friction to sub-second times, saved 15% on energy costs via HVAC syncing, and allowed real estate teams to downsize unused office space based on hard utilization data."
        }
    }
    ]

# Dynamically generate 41 more with extensive models
def get_all_venues():
    venues = get_venue_data()
    
    base_id = 11
    extra = [
        ("Manufacturing & Assembly", "industrial", "factory", "Monitoring production lines for quality control, worker safety, and equipment downtime.", ["Defect Detection", "Worker Ergonomics", "Machine Uptime Analytics", "Spill & Leak Detection", "Forklift Speed/Pathing", "Conveyor Belt Halt", "PPE Compliance", "Thermal Overheating ID"]),
        ("Oil & Gas Refineries", "industrial", "flame", "Intrinsically safe monitoring for hazardous leaks, flare stack analysis, and perimeter security.", ["Gas/Liquid Leak (Thermal)", "Flare Stack Monitoring", "Intrusion Detection", "Man-down Alerts", "Pipeline Corrosion Scan", "Explosion/Flash Detect", "Tank Level Tracking", "Helmet/Vest Tracking"]),
        ("Solar & Wind Farms", "industrial", "sun", "Remote perimeter protection and asset inspection for sprawling, unmanned renewable energy sites.", ["Drone-based Panel Inspection", "Perimeter Intrusion", "Copper Theft Prevention", "Wildlife Tracking", "Blade Damage ID", "Shadow/Friction Mapping", "Transformer Thermal Scan", "Vehicle Approach Alert"]),
        ("Agriculture & Smart Farming", "industrial", "tractor", "Crop and livestock monitoring integrating environmental sensors with long-range optical surveillance.", ["Livestock Health/Tracking", "Crop Disease Mapping", "Equipment Theft Guard", "Irrigation Flow Analytics", "Predator Deterrence", "Silo Level Estimation", "Tractor Autonomy Sync", "Produce Grading (Conveyor)"]),
        ("Warehouses & Distribution", "industrial", "package", "Inventory tracking, loading dock efficiency, and safety monitoring in fast-paced logistics centers.", ["Loading Dock Turnaround", "Pallet/Barcode Tracking", "Forklift Safety", "Aisle Congestion", "Slip/Trip Hazard Detect", "Incorrect Bin Placement", "Trailer Chock Verification", "Worker Rest Break Monitor"]),
        ("Banks & Financial", "retail", "landmark", "High-security surveillance focused on fraud prevention, vault access, and ATM monitoring.", ["ATM Skimmer Detection", "Vault Dual-Auth Verification", "Loitering/Casing Alerts", "Facial Verification (KYC)", "Cash Handling Tracking", "Weapon Detection", "Tailgating into Secure Zones", "Mask/Disguise Recognition"]),
        ("Casinos & Gaming", "hospitality", "dice-5", "Zero-latency monitoring of gaming tables, VIP tracking, and cheat detection under complex lighting.", ["Table Game Analytics", "Known Cheater Watchlist", "Chip/Card Tracking", "VIP Guest Recognition", "Dealer Sleight-of-Hand", "Slot Machine Tampering", "Cash Cage Duress", "Restricted Area Breach"]),
        ("Hotels & Luxury Resorts", "hospitality", "hotel", "Discreet, high-end security providing VIP recognition, perimeter safety, and liability protection.", ["VIP Opt-in Recognition", "Slip & Fall Liability", "Pool Safety/Drowning", "Vagrancy & Loitering", "Valet Vehicle Damage Tracking", "Luggage Abandonment", "Room Service Flow", "Balcony Safety Alerts"]),
        ("Public Parks & Recreation", "infrastructure", "tree-pine", "Wide-area monitoring for public safety, vandalism prevention, and crowd management.", ["Vandalism/Graffiti Alerts", "After-hours Loitering", "Lost Child Tracking", "Illegal Dumping", "Fire/Smoke Detection", "Pet Off-leash Tracking", "Restroom Access Anomalies", "Event Crowd Spikes"]),
        ("Stadiums & Sports Arenas", "hospitality", "ticket", "High-density crowd monitoring, ticket fraud detection, and rapid incident response.", ["Crowd Crush Prediction", "Frictionless Ticketing", "Aggression/Fight Detection", "Perimeter Tailgating", "Concession Queue Wait", "VIP Suite Access", "Pitch/Field Incursion", "Drone Defense (UAV ID)"]),
        ("Concert Halls", "hospitality", "music", "Monitoring mosh pits, stage incursions, and crowd surges.", ["Stage Intrusion", "Crowd Density", "VIP Access", "Fire/Smoke Detection", "Acoustic Anomaly (Gunshot)", "Bottle Throwing Detect", "Emergency Exit Blockage", "Ticket Scalper Loitering"]),
        ("Smart Parking Garages", "infrastructure", "parking-circle", "Automated entry/exit, loitering detection, and vehicle security.", ["ALPR", "Vehicle Break-in", "Available Space Map", "Vagrancy Alert", "Speeding Vehicle Track", "EV Charger Blockage", "Hit-and-Run Capture", "Directional Wrong-way"]),
        ("Prisons & Correctional", "specialized", "shield-alert", "Absolute security monitoring for contraband drops and inmate violence.", ["Drone Contraband Drop", "Inmate Aggression", "Perimeter Fence Climb", "Guard Duress", "Cell Block Headcount", "Weapon/Shiv Detection", "Blind-spot Loitering", "Gate Tailgating"]),
        ("Border Control & Customs", "specialized", "globe", "Vast perimeter monitoring, vehicle inspection, and smuggling detection.", ["Thermal Intrusion", "Under-vehicle Scan", "Facial Watchlist", "Cargo Anomaly", "Tunneling Detection", "Drone Swarm Tracking", "Night-vision Threat ID", "License Plate Forgery"]),
        ("Military Bases", "specialized", "crosshair", "Mission-critical perimeter defense and classified zone access.", ["Weapon Detection", "UAV Tracking", "3D Anti-Spoof Access", "Explosive Detonation", "Sniper Glint Detection", "Vehicle IED Scan", "Air-gapped Protocol Sync", "Camouflage Defeat Analytics"]),
        ("Construction Sites", "industrial", "hard-hat", "After-hours theft prevention and daytime OSHA compliance.", ["PPE Tracking", "Heavy Equipment Theft", "Fall Detection", "Material Delivery Logging", "Crane Lift Analytics", "Scaffolding Safety", "Tool Tracking", "Fire Hazard (Welding)"]),
        ("Hyperscale Datacenters", "specialized", "server", "Server rack security, tailgating prevention, and thermal monitoring.", ["Server Rack Access", "Tailgating/Piggybacking", "Thermal Anomaly", "Fire Suppression Sync", "Hard Drive Removal", "Cable Tampering", "Under-floor Leak ID", "Biometric Auth Check"]),
        ("Residential Gated", "retail", "home", "Community safety, visitor management, and package theft prevention.", ["ALPR Visitor Log", "Package Theft/Porch Pirate", "Pool Safety", "Perimeter Breach", "Pet Escape Track", "School Bus Stop Safety", "Speeding in Zone", "Vandalism/Graffiti"]),
        ("High-Rise Apartments", "retail", "building", "Lobby security, elevator monitoring, and amenity access.", ["Frictionless Lobby Access", "Elevator Duress", "Gym/Pool Overcrowding", "Vandalism", "Roof Access Breach", "Delivery Courier Track", "Bicycle Storage Theft", "Fire Exit Blockage"]),
        ("Mining Operations", "industrial", "pickaxe", "Deep-earth safety, vehicle tracking, and hazard detection.", ["Dump Truck Proximity", "Cave-in/Dust Anomaly", "Worker Tracking", "Conveyor Belt Halt", "Toxic Gas Plume (Thermal)", "Blast Zone Clear Check", "Fatigue Detection", "Equipment Overheating"]),
        ("Pharma Laboratories", "healthcare", "microscope", "Sterile zone access, chemical spill detection, and IP protection.", ["Cleanroom Compliance", "Chemical Spill/Vapor", "Dual-Auth Access", "Asset Tracking", "Pipette/Tool Contamination", "Temperature Logging Sync", "Animal Subject Track", "Biohazard Breach"]),
        ("Cold Storage", "industrial", "snowflake", "Extreme environment monitoring for inventory and thermal compliance.", ["Thermal Door Left Open", "Worker Hypothermia", "Frost/Ice Build-up", "Forklift Tracking", "Pallet Shrinkage", "Ammonia Leak Detection", "Conveyor Freezing", "Lighting Optimization"]),
        ("Food Processing", "industrial", "utensils-crossed", "FDA compliance, contamination tracking, and line speed monitoring.", ["Hygiene/Hairnet Check", "Contaminant ID", "Line Stoppage", "Washdown Compliance", "Pest/Rodent Detection", "Labeling Accuracy (OCR)", "Temperature Shift Alert", "Cross-contamination Track"]),
        ("Auto Dealerships", "retail", "car", "High-value outdoor asset protection and customer engagement.", ["After-hours Lot Intrusion", "Customer Dwell Time", "Vehicle Removal Alert", "Vandalism", "Showroom Heatmapping", "Test Drive License Verification", "Key Cabinet Access", "Service Bay Efficiency"]),
        ("Museums & Art Galleries", "hospitality", "palette", "Priceless asset protection, touch-alerts, and visitor flow.", ["Proximity/Touch Alert", "Art Theft/Removal", "Flash Photography Detect", "Crowd Density", "Docent/Tour Tracking", "Climate Control Sync", "After-hours Motion", "VIP/Donor Recognition"]),
        ("Theme Parks", "hospitality", "ferris-wheel", "Ride safety, lost children, and immense crowd management.", ["Lost Child Search", "Ride Perimeter Breach", "Queue Wait Times", "Aggression", "Slip & Fall Alert", "Character/Mascot Escort", "Parade Route Density", "Water Ride Safety"]),
        ("Public Transit Fleets", "infrastructure", "bus", "Mobile surveillance for bus and train interiors.", ["Driver Fatigue", "Passenger Assault", "Left Object", "Passenger Counting", "Wheelchair Ramp Track", "Graffiti in Transit", "Fare Evasion (Mobile)", "Traffic Signal Preemption Sync"]),
        ("Law Enforcement", "specialized", "badge", "Evidence room security, booking area monitoring, and perimeter safety.", ["Evidence Tampering", "Booking Area Aggression", "Vehicle Sally Port", "Officer Duress", "Interrogation Room Emotion", "Cell Suicide Prevention", "Weapon Draw Detection", "K-9 Unit Tracking"]),
        ("Waste Management", "industrial", "trash-2", "Sorting line efficiency and fire hazard detection.", ["Lithium Battery Fire", "Sorter Ergonomics", "Truck Weigh-in", "Illegal Dumping", "Recyclable Contamination", "Landfill Perimeter", "Heavy Machinery Proximity", "Biohazard Sort Alert"]),
        ("Water Treatment", "industrial", "droplets", "Critical infrastructure protection and chemical monitoring.", ["Perimeter Terrorism Defense", "Chemical Tank Leak", "Pump Vibration Anomaly", "Unauthorized Access", "Water Discoloration ID", "Flood/Spill Detect", "Valve Tampering", "Drone Perimeter Scan"]),
        ("Convention Centers", "hospitality", "users", "Massive dynamic space utilization and event security.", ["Crowd Flow Heatmapping", "VIP Protection", "Left Baggage", "Capacity Threshold", "Booth Traffic Analytics", "Badge/Credential Scan", "Loading Dock Logistics", "After-hours Expo Secure"]),
        ("Toll Booths", "infrastructure", "coins", "High-speed vehicle capture and plaza security.", ["High-speed ALPR", "Axle Counting", "Lane Congestion", "Plaza Collision", "Toll Evader Track", "Overweight Vehicle ID", "Cash Lane Duress", "Wrong-way Highway Enter"]),
        ("QSR Drive-thrus", "retail", "coffee", "Speed of service and order accuracy monitoring.", ["Drive-thru Wait Time", "License Plate Loyalty", "Window Hand-off", "Parking Lot Congestion", "Mobile Order Pickup Track", "Kitchen Line Ergonomics", "Trash Can Overflow", "Slip/Spill Detect"]),
        ("Luxury Boutiques", "retail", "gem", "High-end loss prevention and VIP customer styling.", ["Flash Mob Robbery", "VIP Customer ID", "High-Value Item Track", "Employee Collusion", "Display Case Tampering", "Fitting Room Occupancy", "Customer Sentiment", "Inventory Count (Night)"]),
        ("Telecom Tower Sites", "infrastructure", "radio-tower", "Remote, unstaffed infrastructure protection.", ["Copper/Battery Theft", "Vandalism", "Service Truck Log", "Weather Damage Scan", "Generator Fuel Level", "Tower Climb Detect", "Thermal Overheat", "Wildlife Interference"]),
        ("Wildlife Reserves", "specialized", "paw-print", "Anti-poaching and endangered species tracking.", ["Poacher Thermal ID", "Species Classification", "Vehicle Tracking", "Fire Detection", "Fence Breach Alert", "Trap/Snare Detection", "Waterhole Congestion", "Drone Anti-Poaching Sync"]),
        ("Courthouses", "specialized", "scale", "High-threat protection for judges, witnesses, and public.", ["Weapon Screen Bypass", "Courtroom Aggression", "Secure Corridor Access", "Protest Tracking", "Jury Tamper Alert", "Judge Duress Signal", "Contraband Drop", "Cell Block Transfer Safety"]),
        ("Commercial Pharmacies", "retail", "pill", "Narcotics protection and pharmacy counter safety.", ["Narcotics Safe Access", "Robbery/Duress", "Drive-thru Pharmacy", "Customer Wait Time", "Prescription Fraud (Face Match)", "Store Aisle Loitering", "Pharmacist Ergonomics", "Nighttime Break-in"]),
        ("Marinas & Yacht Clubs", "hospitality", "anchor", "Waterfront security and vessel protection.", ["Vessel Wake/Speed", "Dock Intrusion", "Man Overboard", "Storm Damage Scan", "Unauthorized Vessel Mooring", "Fuel Spill Detection", "Jet Ski Perimeter Breach", "Yacht Asset Tracking"]),
        ("EV Charging Hubs", "infrastructure", "battery-charging", "Charger vandalism and loitering protection.", ["Cable Cut/Theft", "Loitering/Squatting", "Charger Fire (Thermal)", "ALPR Billing", "ICEing (Gas Car in EV Spot)", "Queue Management", "Vandalism/Graffiti", "Power Station Tampering"]),
        ("Commercial Bank Vaults", "retail", "vault", "Absolute zero-trust security for physical assets.", ["Seismic/Drill Detect", "Dual-Auth Entry", "Time-lock Violation", "Asset Removal", "Thermal Cutting ID", "Oxygen Depletion Sync", "Lockbox Tamper", "Guard Duress Profile"])
    ]

    for item in extra:
        name, cat, icon, desc, models = item
        venues.append({
            "id": base_id,
            "name": name,
            "categoryId": cat,
            "icon": icon,
            "description": f"{desc} Enhancing operational security with advanced AI capabilities tailored for {name} environments.",
            "aiModels": models,
            "dashboardStats": [{"label": "Security Gains", "value": "+45%"}, {"label": "ROI Timeline", "value": "6 Mos"}, {"label": "Automation", "value": "90%"}],
            "workflow": ["Sensor Array Capture", "Edge Neural Processing", "Secure VMS Pipeline", "Actionable Alert"],
            "caseStudyNarrative": {
                "challenge": f"{name} face unique, high-stakes operational challenges ranging from specialized asset protection to severe environmental or safety hazards that traditional cameras simply cannot solve or scale to manage.",
                "solution": f"By deploying customized Edge AI vision models—including {models[0].lower()} and {models[1].lower()}—the VMS continually analyzes video feeds in real-time. It instantly identifies anomalies, tracks specialized assets, and enforces strict compliance protocols without requiring constant human intervention.",
                "impact": "This resulted in a massive leap in operational awareness, neutralizing critical threats before they escalated, and delivering a full return on investment within months through automated efficiency and risk mitigation."
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

# We need to extract unique AI models
all_models = set()
for v in venues:
    for m in v["aiModels"]:
        all_models.add(m)

# Logic script
logic_script = """
// App State
let activeVenueId = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    startClock();
    startTicker();
    renderSidebar();
    renderGlobalModels();
    
    // Search functionality
    document.getElementById('venue-search').addEventListener('input', (e) => {
        renderSidebar(e.target.value);
    });
});

// Tab Switching Logic
function switchTab(tabId) {
    // Hide all contents
    document.getElementById('tab-content-cases').classList.add('hidden');
    document.getElementById('tab-content-models').classList.add('hidden');
    
    // Reset button styles
    document.getElementById('tab-btn-cases').className = 'py-3 text-sm font-semibold text-gray-400 hover:text-textMain border-b-2 border-transparent hover:border-gray-300 transition-colors';
    document.getElementById('tab-btn-models').className = 'py-3 text-sm font-semibold text-gray-400 hover:text-textMain border-b-2 border-transparent hover:border-gray-300 transition-colors';
    
    // Activate target
    document.getElementById('tab-content-' + tabId).classList.remove('hidden');
    document.getElementById('tab-btn-' + tabId).className = 'py-3 text-sm font-bold text-textMain border-b-2 border-accentBlue transition-colors';
}

// Render Global Models
function renderGlobalModels() {
    const container = document.getElementById('global-models-grid');
    
    // Extract unique models
    const allModelsSet = new Set();
    venueData.forEach(v => {
        v.aiModels.forEach(m => allModelsSet.add(m));
    });
    
    // Sort alphabetically
    const sortedModels = Array.from(allModelsSet).sort();
    
    container.innerHTML = '';
    sortedModels.forEach((model, idx) => {
        const div = document.createElement('div');
        div.className = `bg-surface p-4 rounded-xl border border-gray-100 flex items-center gap-3 hover:border-accentBlue transition-colors group animate-fade-in`;
        div.style.animationDelay = `${(idx % 10) * 50}ms`;
        
        div.innerHTML = `
            <div class="w-8 h-8 rounded-lg bg-primary border border-gray-200 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <i data-lucide="cpu" class="w-4 h-4 text-accentBlue"></i>
            </div>
            <span class="text-sm font-semibold text-textMain">${model}</span>
        `;
        container.appendChild(div);
    });
    lucide.createIcons();
}

// Clock & Date Logic
function startClock() {
    const timeEl = document.getElementById('live-clock');
    const dateEl = document.getElementById('live-date');
    
    setInterval(() => {
        const now = new Date();
        timeEl.innerText = now.toLocaleTimeString('en-US', { hour12: false });
        dateEl.innerText = now.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).toUpperCase();
    }, 1000);
}

// Live Ticker Logic
const tickerMessages = [
    "[RETAIL SUPERMARKET] - Alert: Queue Threshold Exceeded at Counter 3",
    "[AIRPORT TERMINAL] - Thermal Alert: Perimeter Breach Detected at Zone 4B",
    "[SMART CITY] - ALPR Match: Vehicle on Watchlist Spotted at Main St Intersection",
    "[MANUFACTURING] - Safety Violation: Missing PPE at Assembly Line C",
    "[HOSPITAL] - Duress Alert triggered at Ward 7 Nurse Station",
    "[METRO STATION] - Analytics Warning: Crowd Crush Probability High at Platform 2",
    "[SEAPORT] - OCR Alert: Unregistered Container ID Scanned at Gate 1"
];

function startTicker() {
    const tickerEl = document.getElementById('ticker-content');
    let i = 0;
    
    setInterval(() => {
        const now = new Date();
        const timestamp = `[${now.toLocaleTimeString('en-US', { hour12: false })}]`;
        
        tickerEl.style.opacity = '0';
        
        setTimeout(() => {
            tickerEl.innerText = `${timestamp} ${tickerMessages[i]}`;
            tickerEl.style.opacity = '1';
            i = (i + 1) % tickerMessages.length;
        }, 300);
        
    }, 4500);
}

// Render Sidebar
function renderSidebar(searchQuery = '') {
    const container = document.getElementById('sidebar-categories');
    container.innerHTML = '';
    const term = searchQuery.toLowerCase();
    
    categories.forEach(category => {
        const vens = venueData.filter(v => v.categoryId === category.id && v.name.toLowerCase().includes(term));
        if (vens.length === 0) return; 
        
        const catHeader = document.createElement('div');
        catHeader.className = 'mt-6 mb-2 px-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2';
        catHeader.innerHTML = `<div class="w-1 h-1 rounded-full bg-gray-400"></div> ${category.name}`;
        container.appendChild(catHeader);
        
        vens.forEach(venue => {
            const btn = document.createElement('button');
            const isActive = activeVenueId === venue.id;
            
            btn.className = `w-full text-left px-3 py-2.5 rounded-lg mb-1 flex items-center gap-3 transition-all duration-200 group ${isActive ? 'bg-primary border border-gray-200 shadow-sm' : 'hover:bg-primary/60 border border-transparent'}`;
            btn.onclick = () => loadVenue(venue.id);
            
            btn.innerHTML = `
                <i data-lucide="${venue.icon}" class="w-4 h-4 ${isActive ? 'text-accentBlue' : 'text-gray-400 group-hover:text-gray-600'}"></i>
                <span class="text-[13px] font-medium ${isActive ? 'text-textMain' : 'text-gray-600 group-hover:text-textMain'}">${venue.name}</span>
            `;
            container.appendChild(btn);
        });
    });
    lucide.createIcons();
}

// Load Venue Case Study
function loadVenue(id) {
    activeVenueId = id;
    renderSidebar(document.getElementById('venue-search').value); 
    
    const venue = venueData.find(v => v.id === id);
    const cat = categories.find(c => c.id === venue.categoryId);
    const container = document.getElementById('main-content');
    
    container.innerHTML = '';
    
    const template = document.getElementById('venue-template');
    const clone = template.content.cloneNode(true);
    
    clone.getElementById('tpl-title').innerText = venue.name;
    clone.getElementById('tpl-category').innerText = cat.name;
    clone.getElementById('tpl-desc').innerText = venue.description;
    
    if (venue.caseStudyNarrative) {
        clone.getElementById("tpl-cs-challenge").innerText = venue.caseStudyNarrative.challenge;
        clone.getElementById("tpl-cs-solution").innerText = venue.caseStudyNarrative.solution;
        clone.getElementById("tpl-cs-impact").innerText = venue.caseStudyNarrative.impact;
    }
    
    clone.getElementById('tpl-icon-container').innerHTML = `<i data-lucide="${venue.icon}" class="w-8 h-8 text-textMain"></i>`;
    
    const modelsContainer = clone.getElementById('tpl-models');
    venue.aiModels.forEach((model, idx) => {
        const div = document.createElement('div');
        div.className = `bg-surface p-3 rounded-lg border border-gray-100 flex items-center gap-2.5 animate-fade-in delay-${(idx%5+1)*100}`;
        div.innerHTML = `<i data-lucide="check-circle-2" class="w-4 h-4 text-accentGreen shrink-0"></i> <span class="text-xs font-semibold text-textMain">${model}</span>`;
        modelsContainer.appendChild(div);
    });
    
    const statsContainer = clone.getElementById('tpl-stats');
    venue.dashboardStats.forEach((stat, idx) => {
        const div = document.createElement('div');
        div.className = `animate-fade-in delay-${(idx+1)*100}`;
        div.innerHTML = `
            <div class="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">${stat.label}</div>
            <div class="text-2xl font-bold text-primary font-mono tracking-tighter">${stat.value}</div>
        `;
        statsContainer.appendChild(div);
    });
    
    const chartContainer = clone.getElementById('tpl-mock-chart');
    for(let i=0; i<12; i++) {
        const height = 30 + Math.random() * 70;
        const isHighlight = i === 8 || i === 9;
        const bar = document.createElement('div');
        bar.className = `flex-1 ${isHighlight ? 'bg-accentBlue' : 'bg-gray-700'} rounded-t-sm animate-bar`;
        bar.style.height = `${height}%`;
        bar.style.animationDelay = `${i * 50}ms`;
        chartContainer.appendChild(bar);
    }
    
    const timelineContainer = clone.getElementById('tpl-timeline');
    venue.workflow.forEach((step, idx) => {
        const div = document.createElement('div');
        div.className = `relative pl-6 mb-6 last:mb-0 animate-fade-in delay-${(idx+1)*100}`;
        
        let icon = "circle";
        if(idx === 0) icon = "camera";
        else if(idx === 1) icon = "cpu";
        else if(idx === 2) icon = "cloud-upload";
        else if(idx === 3) icon = "bell-ring";
        
        div.innerHTML = `
            <div class="absolute -left-1.5 top-1 w-3 h-3 rounded-full ${idx === 3 ? 'bg-accentRed animate-ping-slow' : 'bg-accentBlue'} border-2 border-primary z-10"></div>
            <div class="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Step 0${idx+1}</div>
            <div class="text-xs font-semibold text-textMain">${step}</div>
        `;
        timelineContainer.appendChild(div);
    });
    
    const flowchartContainer = clone.getElementById('tpl-flowchart');
    flowchartContainer.innerHTML = `
        <div class="flex items-center justify-between w-full relative z-10 px-4">
            <div class="flex flex-col items-center group cursor-pointer z-10 bg-surfaceAlt pb-2">
                <div class="w-12 h-12 rounded-xl bg-primary border border-gray-200 flex items-center justify-center shadow-sm text-gray-600 group-hover:border-accentBlue group-hover:text-accentBlue transition-colors mb-3">
                    <i data-lucide="video" class="w-5 h-5"></i>
                </div>
                <span class="text-[10px] uppercase tracking-wider font-bold text-textMain text-center">Capture</span>
            </div>
            
            <div class="flex flex-col items-center group cursor-pointer z-10 bg-surfaceAlt pb-2">
                <div class="w-12 h-12 rounded-xl bg-primary border border-gray-200 flex items-center justify-center shadow-sm text-gray-600 group-hover:border-accentGreen group-hover:text-accentGreen transition-colors mb-3 relative">
                    <div class="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accentGreen border-2 border-primary animate-pulse"></div>
                    <i data-lucide="cpu" class="w-5 h-5"></i>
                </div>
                <span class="text-[10px] uppercase tracking-wider font-bold text-textMain text-center">Edge AI</span>
            </div>
            
            <div class="flex flex-col items-center group cursor-pointer z-10 bg-surfaceAlt pb-2">
                <div class="w-12 h-12 rounded-xl bg-primary border border-gray-200 flex items-center justify-center shadow-sm text-gray-600 group-hover:border-accentBlue group-hover:text-accentBlue transition-colors mb-3">
                    <i data-lucide="database" class="w-5 h-5"></i>
                </div>
                <span class="text-[10px] uppercase tracking-wider font-bold text-textMain text-center">Index</span>
            </div>
            
            <div class="flex flex-col items-center group cursor-pointer z-10 bg-surfaceAlt pb-2">
                <div class="w-12 h-12 rounded-xl bg-textMain border border-gray-800 flex items-center justify-center shadow-lg text-primary group-hover:scale-105 transition-transform mb-3">
                    <i data-lucide="layout-dashboard" class="w-5 h-5"></i>
                </div>
                <span class="text-[10px] uppercase tracking-wider font-bold text-textMain text-center">VMS</span>
            </div>
        </div>
        
        <svg class="absolute top-12 left-0 w-full h-10 pointer-events-none z-0" preserveAspectRatio="none">
            <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="#E5E7EB" stroke-width="2" />
            <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="#3B82F6" stroke-width="2" class="workflow-line" />
        </svg>
    `;
    
    container.appendChild(clone);
    lucide.createIcons();
}
"""

with open('app.js', 'w') as f:
    f.write(js_content + logic_script)

print("Successfully injected all 51 uniquely generated venues with 8-10 functionalities into app.js, and added tab logic.")
