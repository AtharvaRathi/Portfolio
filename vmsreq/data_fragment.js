const categories = [
    {
        "id": "retail",
        "name": "Retail & Commercial"
    },
    {
        "id": "infrastructure",
        "name": "Public Safety & Transit"
    },
    {
        "id": "healthcare",
        "name": "Healthcare & Education"
    },
    {
        "id": "industrial",
        "name": "Industrial & Energy"
    },
    {
        "id": "hospitality",
        "name": "Hospitality & Leisure"
    },
    {
        "id": "specialized",
        "name": "Specialized Operations"
    }
];

const venueData = [
    {
        "id": 1,
        "name": "Retail Supermarkets",
        "categoryId": "retail",
        "icon": "shopping-cart",
        "description": "Advanced retail analytics and surveillance optimizing customer flow, loss prevention, and space utilization.",
        "aiModels": [
            "Intent & Loitering Analytics",
            "Queue Wait Tracking",
            "Stock Out Detection",
            "Footfall Heatmaps"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Overhead Capture",
            "Edge Intent Analysis",
            "VMS Data Aggregation",
            "Manager Alert Trigger"
        ],
        "caseStudyNarrative": {
            "challenge": "Retail supermarkets face immense margin pressure due to inventory shrinkage, organized retail crime (ORC), and long checkout queues leading to customer abandonment.",
            "solution": "By deploying Edge AI processing directly on aisle and checkout cameras, the VMS utilizes intent recognition to flag suspicious loitering and concealment behaviors in real-time. Simultaneously, computer vision monitors queue depth, automatically alerting floor managers to open new registers before wait times exceed 3 minutes.",
            "impact": "This proactive approach results in a 34% reduction in overall shrinkage, optimizes staff deployment during peak hours, and improves the customer journey with 99.2% accuracy in footfall analytics."
        }
    },
    {
        "id": 2,
        "name": "Shopping Malls & Plazas",
        "categoryId": "retail",
        "icon": "shopping-bag",
        "description": "Advanced retail analytics and surveillance optimizing customer flow, loss prevention, and space utilization.",
        "aiModels": [
            "Intent & Loitering Analytics",
            "Queue Wait Tracking",
            "Stock Out Detection",
            "Footfall Heatmaps"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Overhead Capture",
            "Edge Intent Analysis",
            "VMS Data Aggregation",
            "Manager Alert Trigger"
        ],
        "caseStudyNarrative": {
            "challenge": "Shopping Malls & Plazas struggle with massive spatial footprints, making it nearly impossible for human operators to track persons of interest across hundreds of cameras or manage chaotic parking structures.",
            "solution": "The VMS ingests feeds from multi-sensor arrays and runs Edge Appearance Search. This allows operators to instantly locate a lost child or suspect across the entire property using natural language or image uploads. ALPR at entrances automates parking gate flow.",
            "impact": "Search resolution time dropped from hours to under 2 minutes. Parking efficiency increased by 18%, and the false alarm rate for perimeter breaches dropped below 0.5%."
        }
    },
    {
        "id": 3,
        "name": "Smart City Intersections",
        "categoryId": "infrastructure",
        "icon": "traffic-cone",
        "description": "Large-scale infrastructure and transit security focused on crowd crush prevention, perimeter defense, and flow management.",
        "aiModels": [
            "Crowd Density Estimation",
            "Unattended Object ID",
            "ALPR & Speeding",
            "Perimeter Breach (Thermal)"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Multi-Sensor Array",
            "Edge Density/Threat Processing",
            "City/Transit Cloud Sync",
            "Command Center Overlay"
        ],
        "caseStudyNarrative": {
            "challenge": "Smart City Intersections are plagued by traffic congestion, pedestrian accidents, and red-light runners, while legacy loop sensors are expensive and frequently break.",
            "solution": "High-mast optical cameras replace physical sensors, processing vehicle classification, speed, and trajectory directly on the edge. The system dynamically interfaces with traffic controllers to optimize light cycles based on real-time congestion and pedestrian presence.",
            "impact": "Increased intersection throughput by 22%, captured 98.9% of traffic violations automatically, and reduced processing latency to under 15ms for life-saving pedestrian alerts."
        }
    },
    {
        "id": 4,
        "name": "Airport Terminals & Tarmacs",
        "categoryId": "infrastructure",
        "icon": "plane",
        "description": "Large-scale infrastructure and transit security focused on crowd crush prevention, perimeter defense, and flow management.",
        "aiModels": [
            "Crowd Density Estimation",
            "Unattended Object ID",
            "ALPR & Speeding",
            "Perimeter Breach (Thermal)"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Multi-Sensor Array",
            "Edge Density/Threat Processing",
            "City/Transit Cloud Sync",
            "Command Center Overlay"
        ],
        "caseStudyNarrative": {
            "challenge": "Airport Terminals & Tarmacs operate under extreme security mandates, facing threats from perimeter infiltrations, unattended baggage, and severe bottlenecks at security checkpoints.",
            "solution": "Thermal-optical hybrid cameras monitor miles of perimeter, using threat-vector analysis to distinguish between wildlife and human intruders. Inside, edge analytics monitor TSA queue lengths and instantly flag bags left unattended for more than 60 seconds.",
            "impact": "Achieved 0% critical perimeter breaches, increased passenger processing speeds by 12%, and reduced gate turnaround times by 5 minutes through automated tarmac operational tracking."
        }
    },
    {
        "id": 5,
        "name": "Seaports & Logistics Hubs",
        "categoryId": "industrial",
        "icon": "ship",
        "description": "Ruggedized industrial monitoring focusing on OSHA compliance, predictive equipment maintenance, and hazardous zone security.",
        "aiModels": [
            "PPE Compliance Checking",
            "Thermal Leak Detection",
            "Hazard Zone Incursion",
            "Forklift Proximity Warning"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Thermal/Optical Capture",
            "Edge Safety Verification",
            "Factory Scada Sync",
            "Siren/Dashboard Alert"
        ],
        "caseStudyNarrative": {
            "challenge": "Seaports & Logistics Hubs operate in inherently dangerous environments where a single lapse in safety protocol or an unnoticed equipment failure can result in catastrophic injuries or massive operational downtime.",
            "solution": "Deploying hybrid optical-thermal edge sensors, the VMS continually scans for missing Personal Protective Equipment (PPE) like hardhats and vests. Simultaneously, it maps dynamic geofences around heavy machinery to alert on unauthorized incursions.",
            "impact": "Reduced OSHA-recordable incidents by 45%, eliminated near-misses with heavy machinery, and decreased insurance premiums through verifiable, automated compliance auditing."
        }
    },
    {
        "id": 6,
        "name": "Railway & Metro Stations",
        "categoryId": "infrastructure",
        "icon": "train",
        "description": "Large-scale infrastructure and transit security focused on crowd crush prevention, perimeter defense, and flow management.",
        "aiModels": [
            "Crowd Density Estimation",
            "Unattended Object ID",
            "ALPR & Speeding",
            "Perimeter Breach (Thermal)"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Multi-Sensor Array",
            "Edge Density/Threat Processing",
            "City/Transit Cloud Sync",
            "Command Center Overlay"
        ],
        "caseStudyNarrative": {
            "challenge": "Railway & Metro Stations must safely process thousands of individuals and vehicles per hour while constantly remaining vigilant against terror threats, unauthorized access, and fatal congestion bottlenecks.",
            "solution": "The system ingests high-definition streams to perform real-time crowd density estimations and pathing predictions. Any abandoned objects are instantly flagged, and perimeter cameras use thermal vectors to identify infiltrations miles away in total darkness.",
            "impact": "Prevented critical overcrowding events through predictive alerts, secured vast unlit perimeters seamlessly, and decreased security operator fatigue by filtering 99% of false environmental alarms."
        }
    },
    {
        "id": 7,
        "name": "Hospitals & Healthcare",
        "categoryId": "healthcare",
        "icon": "hospital",
        "description": "Privacy-first healthcare surveillance focused on patient duress, sterile zone access, and staff workflow efficiency.",
        "aiModels": [
            "Patient Fall Detection",
            "Aggression Recognition",
            "Auto PII Blurring",
            "Asset Tracking (Wheelchairs)"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Corridor Capture",
            "Edge Skeletal Analysis & Blur",
            "Secure Metadata Tx",
            "Nurse Station Pop-up"
        ],
        "caseStudyNarrative": {
            "challenge": "Hospitals & Healthcare require strict patient safety and rapid duress response, but are severely constrained by HIPAA/GDPR privacy laws that forbid traditional widespread recording and monitoring.",
            "solution": "The platform utilizes on-edge real-time video blurring, ensuring patient and staff faces are irreversibly anonymized before transmission. Embedded fall-detection and aggression-recognition models analyze body mechanics (skeletal tracking) without processing identity.",
            "impact": "Decreased nurse response times to patient falls by 60%, eradicated compliance violations via zero-trust data anonymization, and recovered thousands in lost operational assets."
        }
    },
    {
        "id": 8,
        "name": "University Campuses",
        "categoryId": "healthcare",
        "icon": "graduation-cap",
        "description": "Privacy-first healthcare surveillance focused on patient duress, sterile zone access, and staff workflow efficiency.",
        "aiModels": [
            "Patient Fall Detection",
            "Aggression Recognition",
            "Auto PII Blurring",
            "Asset Tracking (Wheelchairs)"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Corridor Capture",
            "Edge Skeletal Analysis & Blur",
            "Secure Metadata Tx",
            "Nurse Station Pop-up"
        ],
        "caseStudyNarrative": {
            "challenge": "University Campuses require strict patient safety and rapid duress response, but are severely constrained by HIPAA/GDPR privacy laws that forbid traditional widespread recording and monitoring.",
            "solution": "The platform utilizes on-edge real-time video blurring, ensuring patient and staff faces are irreversibly anonymized before transmission. Embedded fall-detection and aggression-recognition models analyze body mechanics (skeletal tracking) without processing identity.",
            "impact": "Decreased nurse response times to patient falls by 60%, eradicated compliance violations via zero-trust data anonymization, and recovered thousands in lost operational assets."
        }
    },
    {
        "id": 9,
        "name": "K-12 Schools",
        "categoryId": "healthcare",
        "icon": "school",
        "description": "Privacy-first healthcare surveillance focused on patient duress, sterile zone access, and staff workflow efficiency.",
        "aiModels": [
            "Patient Fall Detection",
            "Aggression Recognition",
            "Auto PII Blurring",
            "Asset Tracking (Wheelchairs)"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Corridor Capture",
            "Edge Skeletal Analysis & Blur",
            "Secure Metadata Tx",
            "Nurse Station Pop-up"
        ],
        "caseStudyNarrative": {
            "challenge": "K-12 Schools require strict patient safety and rapid duress response, but are severely constrained by HIPAA/GDPR privacy laws that forbid traditional widespread recording and monitoring.",
            "solution": "The platform utilizes on-edge real-time video blurring, ensuring patient and staff faces are irreversibly anonymized before transmission. Embedded fall-detection and aggression-recognition models analyze body mechanics (skeletal tracking) without processing identity.",
            "impact": "Decreased nurse response times to patient falls by 60%, eradicated compliance violations via zero-trust data anonymization, and recovered thousands in lost operational assets."
        }
    },
    {
        "id": 10,
        "name": "Corporate Offices",
        "categoryId": "retail",
        "icon": "building-2",
        "description": "Advanced retail analytics and surveillance optimizing customer flow, loss prevention, and space utilization.",
        "aiModels": [
            "Intent & Loitering Analytics",
            "Queue Wait Tracking",
            "Stock Out Detection",
            "Footfall Heatmaps"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Overhead Capture",
            "Edge Intent Analysis",
            "VMS Data Aggregation",
            "Manager Alert Trigger"
        ],
        "caseStudyNarrative": {
            "challenge": "Corporate Offices face ongoing issues with organized retail crime, poor staffing allocation during peak times, and understanding customer spatial journeys within complex layouts.",
            "solution": "Leveraging edge-based intent analysis and cross-camera tracking, the system identifies suspicious concealment behaviors instantly. Queue management algorithms continuously monitor checkout friction, while heatmapping processes spatial utilization without requiring cloud transmission.",
            "impact": "Achieved a 30% reduction in measurable shrinkage, elevated customer satisfaction by predicting register bottlenecks, and optimized floor planning based on reliable dwelling data."
        }
    },
    {
        "id": 11,
        "name": "Manufacturing & Assembly",
        "categoryId": "industrial",
        "icon": "factory",
        "description": "Ruggedized industrial monitoring focusing on OSHA compliance, predictive equipment maintenance, and hazardous zone security.",
        "aiModels": [
            "PPE Compliance Checking",
            "Thermal Leak Detection",
            "Hazard Zone Incursion",
            "Forklift Proximity Warning"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Thermal/Optical Capture",
            "Edge Safety Verification",
            "Factory Scada Sync",
            "Siren/Dashboard Alert"
        ],
        "caseStudyNarrative": {
            "challenge": "Manufacturing & Assembly operate in inherently dangerous environments where a single lapse in safety protocol or an unnoticed equipment failure can result in catastrophic injuries or massive operational downtime.",
            "solution": "Deploying hybrid optical-thermal edge sensors, the VMS continually scans for missing Personal Protective Equipment (PPE) like hardhats and vests. Simultaneously, it maps dynamic geofences around heavy machinery to alert on unauthorized incursions.",
            "impact": "Reduced OSHA-recordable incidents by 45%, eliminated near-misses with heavy machinery, and decreased insurance premiums through verifiable, automated compliance auditing."
        }
    },
    {
        "id": 12,
        "name": "Oil & Gas Refineries",
        "categoryId": "industrial",
        "icon": "flame",
        "description": "Ruggedized industrial monitoring focusing on OSHA compliance, predictive equipment maintenance, and hazardous zone security.",
        "aiModels": [
            "PPE Compliance Checking",
            "Thermal Leak Detection",
            "Hazard Zone Incursion",
            "Forklift Proximity Warning"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Thermal/Optical Capture",
            "Edge Safety Verification",
            "Factory Scada Sync",
            "Siren/Dashboard Alert"
        ],
        "caseStudyNarrative": {
            "challenge": "Oil & Gas Refineries operate in inherently dangerous environments where a single lapse in safety protocol or an unnoticed equipment failure can result in catastrophic injuries or massive operational downtime.",
            "solution": "Deploying hybrid optical-thermal edge sensors, the VMS continually scans for missing Personal Protective Equipment (PPE) like hardhats and vests. Simultaneously, it maps dynamic geofences around heavy machinery to alert on unauthorized incursions.",
            "impact": "Reduced OSHA-recordable incidents by 45%, eliminated near-misses with heavy machinery, and decreased insurance premiums through verifiable, automated compliance auditing."
        }
    },
    {
        "id": 13,
        "name": "Solar & Wind Farms",
        "categoryId": "industrial",
        "icon": "sun",
        "description": "Ruggedized industrial monitoring focusing on OSHA compliance, predictive equipment maintenance, and hazardous zone security.",
        "aiModels": [
            "PPE Compliance Checking",
            "Thermal Leak Detection",
            "Hazard Zone Incursion",
            "Forklift Proximity Warning"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Thermal/Optical Capture",
            "Edge Safety Verification",
            "Factory Scada Sync",
            "Siren/Dashboard Alert"
        ],
        "caseStudyNarrative": {
            "challenge": "Solar & Wind Farms operate in inherently dangerous environments where a single lapse in safety protocol or an unnoticed equipment failure can result in catastrophic injuries or massive operational downtime.",
            "solution": "Deploying hybrid optical-thermal edge sensors, the VMS continually scans for missing Personal Protective Equipment (PPE) like hardhats and vests. Simultaneously, it maps dynamic geofences around heavy machinery to alert on unauthorized incursions.",
            "impact": "Reduced OSHA-recordable incidents by 45%, eliminated near-misses with heavy machinery, and decreased insurance premiums through verifiable, automated compliance auditing."
        }
    },
    {
        "id": 14,
        "name": "Agriculture & Smart Farming",
        "categoryId": "industrial",
        "icon": "tractor",
        "description": "Ruggedized industrial monitoring focusing on OSHA compliance, predictive equipment maintenance, and hazardous zone security.",
        "aiModels": [
            "PPE Compliance Checking",
            "Thermal Leak Detection",
            "Hazard Zone Incursion",
            "Forklift Proximity Warning"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Thermal/Optical Capture",
            "Edge Safety Verification",
            "Factory Scada Sync",
            "Siren/Dashboard Alert"
        ],
        "caseStudyNarrative": {
            "challenge": "Agriculture & Smart Farming operate in inherently dangerous environments where a single lapse in safety protocol or an unnoticed equipment failure can result in catastrophic injuries or massive operational downtime.",
            "solution": "Deploying hybrid optical-thermal edge sensors, the VMS continually scans for missing Personal Protective Equipment (PPE) like hardhats and vests. Simultaneously, it maps dynamic geofences around heavy machinery to alert on unauthorized incursions.",
            "impact": "Reduced OSHA-recordable incidents by 45%, eliminated near-misses with heavy machinery, and decreased insurance premiums through verifiable, automated compliance auditing."
        }
    },
    {
        "id": 15,
        "name": "Warehouses & Distribution",
        "categoryId": "industrial",
        "icon": "package",
        "description": "Ruggedized industrial monitoring focusing on OSHA compliance, predictive equipment maintenance, and hazardous zone security.",
        "aiModels": [
            "PPE Compliance Checking",
            "Thermal Leak Detection",
            "Hazard Zone Incursion",
            "Forklift Proximity Warning"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Thermal/Optical Capture",
            "Edge Safety Verification",
            "Factory Scada Sync",
            "Siren/Dashboard Alert"
        ],
        "caseStudyNarrative": {
            "challenge": "Warehouses & Distribution operate in inherently dangerous environments where a single lapse in safety protocol or an unnoticed equipment failure can result in catastrophic injuries or massive operational downtime.",
            "solution": "Deploying hybrid optical-thermal edge sensors, the VMS continually scans for missing Personal Protective Equipment (PPE) like hardhats and vests. Simultaneously, it maps dynamic geofences around heavy machinery to alert on unauthorized incursions.",
            "impact": "Reduced OSHA-recordable incidents by 45%, eliminated near-misses with heavy machinery, and decreased insurance premiums through verifiable, automated compliance auditing."
        }
    },
    {
        "id": 16,
        "name": "Banks & Financial",
        "categoryId": "retail",
        "icon": "landmark",
        "description": "Advanced retail analytics and surveillance optimizing customer flow, loss prevention, and space utilization.",
        "aiModels": [
            "Intent & Loitering Analytics",
            "Queue Wait Tracking",
            "Stock Out Detection",
            "Footfall Heatmaps"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Overhead Capture",
            "Edge Intent Analysis",
            "VMS Data Aggregation",
            "Manager Alert Trigger"
        ],
        "caseStudyNarrative": {
            "challenge": "Banks & Financial face ongoing issues with organized retail crime, poor staffing allocation during peak times, and understanding customer spatial journeys within complex layouts.",
            "solution": "Leveraging edge-based intent analysis and cross-camera tracking, the system identifies suspicious concealment behaviors instantly. Queue management algorithms continuously monitor checkout friction, while heatmapping processes spatial utilization without requiring cloud transmission.",
            "impact": "Achieved a 30% reduction in measurable shrinkage, elevated customer satisfaction by predicting register bottlenecks, and optimized floor planning based on reliable dwelling data."
        }
    },
    {
        "id": 17,
        "name": "Casinos & Gaming",
        "categoryId": "hospitality",
        "icon": "dice-5",
        "description": "Discreet, high-end security providing VIP recognition, perimeter safety, and liability protection without disrupting the guest experience.",
        "aiModels": [
            "VIP Opt-in Recognition",
            "Slip & Fall Liability",
            "Vagrancy & Loitering",
            "Vehicle Tracking"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Lobby/Hallway Capture",
            "Edge Forensic Extraction",
            "Hybrid Search DB Sync",
            "Concierge/Security Dispatch"
        ],
        "caseStudyNarrative": {
            "challenge": "Casinos & Gaming strive to provide a frictionless, premium guest experience, meaning security must be completely invisible yet immediately responsive to unauthorized intrusions or liability claims (like slip-and-falls).",
            "solution": "Optical sensors are tuned for discreet integration. The VMS runs forensic search algorithms that can quickly isolate an incident using metadata (e.g., 'red shirt, blue bag') rather than manual scrubbing, while instantly recognizing known VIPs via opt-in facial vectors.",
            "impact": "Saved over $2M annually in fraudulent liability claim payouts, elevated VIP guest satisfaction through proactive greeting, and minimized visible security patrols by relying on AI-directed dispatches."
        }
    },
    {
        "id": 18,
        "name": "Hotels & Luxury Resorts",
        "categoryId": "hospitality",
        "icon": "hotel",
        "description": "Discreet, high-end security providing VIP recognition, perimeter safety, and liability protection without disrupting the guest experience.",
        "aiModels": [
            "VIP Opt-in Recognition",
            "Slip & Fall Liability",
            "Vagrancy & Loitering",
            "Vehicle Tracking"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Lobby/Hallway Capture",
            "Edge Forensic Extraction",
            "Hybrid Search DB Sync",
            "Concierge/Security Dispatch"
        ],
        "caseStudyNarrative": {
            "challenge": "Hotels & Luxury Resorts strive to provide a frictionless, premium guest experience, meaning security must be completely invisible yet immediately responsive to unauthorized intrusions or liability claims (like slip-and-falls).",
            "solution": "Optical sensors are tuned for discreet integration. The VMS runs forensic search algorithms that can quickly isolate an incident using metadata (e.g., 'red shirt, blue bag') rather than manual scrubbing, while instantly recognizing known VIPs via opt-in facial vectors.",
            "impact": "Saved over $2M annually in fraudulent liability claim payouts, elevated VIP guest satisfaction through proactive greeting, and minimized visible security patrols by relying on AI-directed dispatches."
        }
    },
    {
        "id": 19,
        "name": "Public Parks & Rec",
        "categoryId": "infrastructure",
        "icon": "tree-pine",
        "description": "Large-scale infrastructure and transit security focused on crowd crush prevention, perimeter defense, and flow management.",
        "aiModels": [
            "Crowd Density Estimation",
            "Unattended Object ID",
            "ALPR & Speeding",
            "Perimeter Breach (Thermal)"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Multi-Sensor Array",
            "Edge Density/Threat Processing",
            "City/Transit Cloud Sync",
            "Command Center Overlay"
        ],
        "caseStudyNarrative": {
            "challenge": "Public Parks & Rec must safely process thousands of individuals and vehicles per hour while constantly remaining vigilant against terror threats, unauthorized access, and fatal congestion bottlenecks.",
            "solution": "The system ingests high-definition streams to perform real-time crowd density estimations and pathing predictions. Any abandoned objects are instantly flagged, and perimeter cameras use thermal vectors to identify infiltrations miles away in total darkness.",
            "impact": "Prevented critical overcrowding events through predictive alerts, secured vast unlit perimeters seamlessly, and decreased security operator fatigue by filtering 99% of false environmental alarms."
        }
    },
    {
        "id": 20,
        "name": "Stadiums & Sports Arenas",
        "categoryId": "hospitality",
        "icon": "ticket",
        "description": "Discreet, high-end security providing VIP recognition, perimeter safety, and liability protection without disrupting the guest experience.",
        "aiModels": [
            "VIP Opt-in Recognition",
            "Slip & Fall Liability",
            "Vagrancy & Loitering",
            "Vehicle Tracking"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Lobby/Hallway Capture",
            "Edge Forensic Extraction",
            "Hybrid Search DB Sync",
            "Concierge/Security Dispatch"
        ],
        "caseStudyNarrative": {
            "challenge": "Stadiums & Sports Arenas strive to provide a frictionless, premium guest experience, meaning security must be completely invisible yet immediately responsive to unauthorized intrusions or liability claims (like slip-and-falls).",
            "solution": "Optical sensors are tuned for discreet integration. The VMS runs forensic search algorithms that can quickly isolate an incident using metadata (e.g., 'red shirt, blue bag') rather than manual scrubbing, while instantly recognizing known VIPs via opt-in facial vectors.",
            "impact": "Saved over $2M annually in fraudulent liability claim payouts, elevated VIP guest satisfaction through proactive greeting, and minimized visible security patrols by relying on AI-directed dispatches."
        }
    },
    {
        "id": 21,
        "name": "Concert Halls",
        "categoryId": "hospitality",
        "icon": "music",
        "description": "Discreet, high-end security providing VIP recognition, perimeter safety, and liability protection without disrupting the guest experience.",
        "aiModels": [
            "VIP Opt-in Recognition",
            "Slip & Fall Liability",
            "Vagrancy & Loitering",
            "Vehicle Tracking"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Lobby/Hallway Capture",
            "Edge Forensic Extraction",
            "Hybrid Search DB Sync",
            "Concierge/Security Dispatch"
        ],
        "caseStudyNarrative": {
            "challenge": "Concert Halls strive to provide a frictionless, premium guest experience, meaning security must be completely invisible yet immediately responsive to unauthorized intrusions or liability claims (like slip-and-falls).",
            "solution": "Optical sensors are tuned for discreet integration. The VMS runs forensic search algorithms that can quickly isolate an incident using metadata (e.g., 'red shirt, blue bag') rather than manual scrubbing, while instantly recognizing known VIPs via opt-in facial vectors.",
            "impact": "Saved over $2M annually in fraudulent liability claim payouts, elevated VIP guest satisfaction through proactive greeting, and minimized visible security patrols by relying on AI-directed dispatches."
        }
    },
    {
        "id": 22,
        "name": "Smart Parking Garages",
        "categoryId": "infrastructure",
        "icon": "parking-circle",
        "description": "Large-scale infrastructure and transit security focused on crowd crush prevention, perimeter defense, and flow management.",
        "aiModels": [
            "Crowd Density Estimation",
            "Unattended Object ID",
            "ALPR & Speeding",
            "Perimeter Breach (Thermal)"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Multi-Sensor Array",
            "Edge Density/Threat Processing",
            "City/Transit Cloud Sync",
            "Command Center Overlay"
        ],
        "caseStudyNarrative": {
            "challenge": "Smart Parking Garages must safely process thousands of individuals and vehicles per hour while constantly remaining vigilant against terror threats, unauthorized access, and fatal congestion bottlenecks.",
            "solution": "The system ingests high-definition streams to perform real-time crowd density estimations and pathing predictions. Any abandoned objects are instantly flagged, and perimeter cameras use thermal vectors to identify infiltrations miles away in total darkness.",
            "impact": "Prevented critical overcrowding events through predictive alerts, secured vast unlit perimeters seamlessly, and decreased security operator fatigue by filtering 99% of false environmental alarms."
        }
    },
    {
        "id": 23,
        "name": "Prisons & Correctional",
        "categoryId": "specialized",
        "icon": "shield-alert",
        "description": "Mission-critical surveillance for high-stakes environments demanding zero-trust security and instantaneous threat neutralization.",
        "aiModels": [
            "Weapon Detection",
            "Drone ID & Tracking",
            "Biometric Anti-Spoofing",
            "Classified Zone Access"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Specialized Sensor Capture",
            "Zero-Latency Threat ID",
            "Air-Gapped Core Server",
            "Automated Lockdown Trigger"
        ],
        "caseStudyNarrative": {
            "challenge": "Prisons & Correctional represent the highest tier of security requirements, where state-sponsored espionage, armed incursions, or severe contraband smuggling are daily realistic threats.",
            "solution": "Leveraging military-grade edge nodes, the AI performs sub-millisecond weapon detection and drone tracking. Access to restricted areas requires multi-factor visual authentication with 3D anti-spoofing depth analysis.",
            "impact": "Achieved a 100% block rate on unauthorized infiltrations, neutralized armed threats seconds before entry, and maintained absolute data sovereignty through air-gapped, on-premise VMS deployments."
        }
    },
    {
        "id": 24,
        "name": "Border Control & Customs",
        "categoryId": "specialized",
        "icon": "globe",
        "description": "Mission-critical surveillance for high-stakes environments demanding zero-trust security and instantaneous threat neutralization.",
        "aiModels": [
            "Weapon Detection",
            "Drone ID & Tracking",
            "Biometric Anti-Spoofing",
            "Classified Zone Access"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Specialized Sensor Capture",
            "Zero-Latency Threat ID",
            "Air-Gapped Core Server",
            "Automated Lockdown Trigger"
        ],
        "caseStudyNarrative": {
            "challenge": "Border Control & Customs represent the highest tier of security requirements, where state-sponsored espionage, armed incursions, or severe contraband smuggling are daily realistic threats.",
            "solution": "Leveraging military-grade edge nodes, the AI performs sub-millisecond weapon detection and drone tracking. Access to restricted areas requires multi-factor visual authentication with 3D anti-spoofing depth analysis.",
            "impact": "Achieved a 100% block rate on unauthorized infiltrations, neutralized armed threats seconds before entry, and maintained absolute data sovereignty through air-gapped, on-premise VMS deployments."
        }
    },
    {
        "id": 25,
        "name": "Military Bases",
        "categoryId": "specialized",
        "icon": "crosshair",
        "description": "Mission-critical surveillance for high-stakes environments demanding zero-trust security and instantaneous threat neutralization.",
        "aiModels": [
            "Weapon Detection",
            "Drone ID & Tracking",
            "Biometric Anti-Spoofing",
            "Classified Zone Access"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Specialized Sensor Capture",
            "Zero-Latency Threat ID",
            "Air-Gapped Core Server",
            "Automated Lockdown Trigger"
        ],
        "caseStudyNarrative": {
            "challenge": "Military Bases represent the highest tier of security requirements, where state-sponsored espionage, armed incursions, or severe contraband smuggling are daily realistic threats.",
            "solution": "Leveraging military-grade edge nodes, the AI performs sub-millisecond weapon detection and drone tracking. Access to restricted areas requires multi-factor visual authentication with 3D anti-spoofing depth analysis.",
            "impact": "Achieved a 100% block rate on unauthorized infiltrations, neutralized armed threats seconds before entry, and maintained absolute data sovereignty through air-gapped, on-premise VMS deployments."
        }
    },
    {
        "id": 26,
        "name": "Construction Sites",
        "categoryId": "industrial",
        "icon": "hard-hat",
        "description": "Ruggedized industrial monitoring focusing on OSHA compliance, predictive equipment maintenance, and hazardous zone security.",
        "aiModels": [
            "PPE Compliance Checking",
            "Thermal Leak Detection",
            "Hazard Zone Incursion",
            "Forklift Proximity Warning"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Thermal/Optical Capture",
            "Edge Safety Verification",
            "Factory Scada Sync",
            "Siren/Dashboard Alert"
        ],
        "caseStudyNarrative": {
            "challenge": "Construction Sites operate in inherently dangerous environments where a single lapse in safety protocol or an unnoticed equipment failure can result in catastrophic injuries or massive operational downtime.",
            "solution": "Deploying hybrid optical-thermal edge sensors, the VMS continually scans for missing Personal Protective Equipment (PPE) like hardhats and vests. Simultaneously, it maps dynamic geofences around heavy machinery to alert on unauthorized incursions.",
            "impact": "Reduced OSHA-recordable incidents by 45%, eliminated near-misses with heavy machinery, and decreased insurance premiums through verifiable, automated compliance auditing."
        }
    },
    {
        "id": 27,
        "name": "Hyperscale Datacenters",
        "categoryId": "specialized",
        "icon": "server",
        "description": "Mission-critical surveillance for high-stakes environments demanding zero-trust security and instantaneous threat neutralization.",
        "aiModels": [
            "Weapon Detection",
            "Drone ID & Tracking",
            "Biometric Anti-Spoofing",
            "Classified Zone Access"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Specialized Sensor Capture",
            "Zero-Latency Threat ID",
            "Air-Gapped Core Server",
            "Automated Lockdown Trigger"
        ],
        "caseStudyNarrative": {
            "challenge": "Hyperscale Datacenters represent the highest tier of security requirements, where state-sponsored espionage, armed incursions, or severe contraband smuggling are daily realistic threats.",
            "solution": "Leveraging military-grade edge nodes, the AI performs sub-millisecond weapon detection and drone tracking. Access to restricted areas requires multi-factor visual authentication with 3D anti-spoofing depth analysis.",
            "impact": "Achieved a 100% block rate on unauthorized infiltrations, neutralized armed threats seconds before entry, and maintained absolute data sovereignty through air-gapped, on-premise VMS deployments."
        }
    },
    {
        "id": 28,
        "name": "Residential Gated",
        "categoryId": "retail",
        "icon": "home",
        "description": "Advanced retail analytics and surveillance optimizing customer flow, loss prevention, and space utilization.",
        "aiModels": [
            "Intent & Loitering Analytics",
            "Queue Wait Tracking",
            "Stock Out Detection",
            "Footfall Heatmaps"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Overhead Capture",
            "Edge Intent Analysis",
            "VMS Data Aggregation",
            "Manager Alert Trigger"
        ],
        "caseStudyNarrative": {
            "challenge": "Residential Gated face ongoing issues with organized retail crime, poor staffing allocation during peak times, and understanding customer spatial journeys within complex layouts.",
            "solution": "Leveraging edge-based intent analysis and cross-camera tracking, the system identifies suspicious concealment behaviors instantly. Queue management algorithms continuously monitor checkout friction, while heatmapping processes spatial utilization without requiring cloud transmission.",
            "impact": "Achieved a 30% reduction in measurable shrinkage, elevated customer satisfaction by predicting register bottlenecks, and optimized floor planning based on reliable dwelling data."
        }
    },
    {
        "id": 29,
        "name": "High-Rise Apartments",
        "categoryId": "retail",
        "icon": "building",
        "description": "Advanced retail analytics and surveillance optimizing customer flow, loss prevention, and space utilization.",
        "aiModels": [
            "Intent & Loitering Analytics",
            "Queue Wait Tracking",
            "Stock Out Detection",
            "Footfall Heatmaps"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Overhead Capture",
            "Edge Intent Analysis",
            "VMS Data Aggregation",
            "Manager Alert Trigger"
        ],
        "caseStudyNarrative": {
            "challenge": "High-Rise Apartments face ongoing issues with organized retail crime, poor staffing allocation during peak times, and understanding customer spatial journeys within complex layouts.",
            "solution": "Leveraging edge-based intent analysis and cross-camera tracking, the system identifies suspicious concealment behaviors instantly. Queue management algorithms continuously monitor checkout friction, while heatmapping processes spatial utilization without requiring cloud transmission.",
            "impact": "Achieved a 30% reduction in measurable shrinkage, elevated customer satisfaction by predicting register bottlenecks, and optimized floor planning based on reliable dwelling data."
        }
    },
    {
        "id": 30,
        "name": "Mining Operations",
        "categoryId": "industrial",
        "icon": "pickaxe",
        "description": "Ruggedized industrial monitoring focusing on OSHA compliance, predictive equipment maintenance, and hazardous zone security.",
        "aiModels": [
            "PPE Compliance Checking",
            "Thermal Leak Detection",
            "Hazard Zone Incursion",
            "Forklift Proximity Warning"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Thermal/Optical Capture",
            "Edge Safety Verification",
            "Factory Scada Sync",
            "Siren/Dashboard Alert"
        ],
        "caseStudyNarrative": {
            "challenge": "Mining Operations operate in inherently dangerous environments where a single lapse in safety protocol or an unnoticed equipment failure can result in catastrophic injuries or massive operational downtime.",
            "solution": "Deploying hybrid optical-thermal edge sensors, the VMS continually scans for missing Personal Protective Equipment (PPE) like hardhats and vests. Simultaneously, it maps dynamic geofences around heavy machinery to alert on unauthorized incursions.",
            "impact": "Reduced OSHA-recordable incidents by 45%, eliminated near-misses with heavy machinery, and decreased insurance premiums through verifiable, automated compliance auditing."
        }
    },
    {
        "id": 31,
        "name": "Pharma Laboratories",
        "categoryId": "healthcare",
        "icon": "microscope",
        "description": "Privacy-first healthcare surveillance focused on patient duress, sterile zone access, and staff workflow efficiency.",
        "aiModels": [
            "Patient Fall Detection",
            "Aggression Recognition",
            "Auto PII Blurring",
            "Asset Tracking (Wheelchairs)"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Corridor Capture",
            "Edge Skeletal Analysis & Blur",
            "Secure Metadata Tx",
            "Nurse Station Pop-up"
        ],
        "caseStudyNarrative": {
            "challenge": "Pharma Laboratories require strict patient safety and rapid duress response, but are severely constrained by HIPAA/GDPR privacy laws that forbid traditional widespread recording and monitoring.",
            "solution": "The platform utilizes on-edge real-time video blurring, ensuring patient and staff faces are irreversibly anonymized before transmission. Embedded fall-detection and aggression-recognition models analyze body mechanics (skeletal tracking) without processing identity.",
            "impact": "Decreased nurse response times to patient falls by 60%, eradicated compliance violations via zero-trust data anonymization, and recovered thousands in lost operational assets."
        }
    },
    {
        "id": 32,
        "name": "Cold Storage",
        "categoryId": "industrial",
        "icon": "snowflake",
        "description": "Ruggedized industrial monitoring focusing on OSHA compliance, predictive equipment maintenance, and hazardous zone security.",
        "aiModels": [
            "PPE Compliance Checking",
            "Thermal Leak Detection",
            "Hazard Zone Incursion",
            "Forklift Proximity Warning"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Thermal/Optical Capture",
            "Edge Safety Verification",
            "Factory Scada Sync",
            "Siren/Dashboard Alert"
        ],
        "caseStudyNarrative": {
            "challenge": "Cold Storage operate in inherently dangerous environments where a single lapse in safety protocol or an unnoticed equipment failure can result in catastrophic injuries or massive operational downtime.",
            "solution": "Deploying hybrid optical-thermal edge sensors, the VMS continually scans for missing Personal Protective Equipment (PPE) like hardhats and vests. Simultaneously, it maps dynamic geofences around heavy machinery to alert on unauthorized incursions.",
            "impact": "Reduced OSHA-recordable incidents by 45%, eliminated near-misses with heavy machinery, and decreased insurance premiums through verifiable, automated compliance auditing."
        }
    },
    {
        "id": 33,
        "name": "Food Processing",
        "categoryId": "industrial",
        "icon": "utensils-crossed",
        "description": "Ruggedized industrial monitoring focusing on OSHA compliance, predictive equipment maintenance, and hazardous zone security.",
        "aiModels": [
            "PPE Compliance Checking",
            "Thermal Leak Detection",
            "Hazard Zone Incursion",
            "Forklift Proximity Warning"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Thermal/Optical Capture",
            "Edge Safety Verification",
            "Factory Scada Sync",
            "Siren/Dashboard Alert"
        ],
        "caseStudyNarrative": {
            "challenge": "Food Processing operate in inherently dangerous environments where a single lapse in safety protocol or an unnoticed equipment failure can result in catastrophic injuries or massive operational downtime.",
            "solution": "Deploying hybrid optical-thermal edge sensors, the VMS continually scans for missing Personal Protective Equipment (PPE) like hardhats and vests. Simultaneously, it maps dynamic geofences around heavy machinery to alert on unauthorized incursions.",
            "impact": "Reduced OSHA-recordable incidents by 45%, eliminated near-misses with heavy machinery, and decreased insurance premiums through verifiable, automated compliance auditing."
        }
    },
    {
        "id": 34,
        "name": "Auto Dealerships",
        "categoryId": "retail",
        "icon": "car",
        "description": "Advanced retail analytics and surveillance optimizing customer flow, loss prevention, and space utilization.",
        "aiModels": [
            "Intent & Loitering Analytics",
            "Queue Wait Tracking",
            "Stock Out Detection",
            "Footfall Heatmaps"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Overhead Capture",
            "Edge Intent Analysis",
            "VMS Data Aggregation",
            "Manager Alert Trigger"
        ],
        "caseStudyNarrative": {
            "challenge": "Auto Dealerships face ongoing issues with organized retail crime, poor staffing allocation during peak times, and understanding customer spatial journeys within complex layouts.",
            "solution": "Leveraging edge-based intent analysis and cross-camera tracking, the system identifies suspicious concealment behaviors instantly. Queue management algorithms continuously monitor checkout friction, while heatmapping processes spatial utilization without requiring cloud transmission.",
            "impact": "Achieved a 30% reduction in measurable shrinkage, elevated customer satisfaction by predicting register bottlenecks, and optimized floor planning based on reliable dwelling data."
        }
    },
    {
        "id": 35,
        "name": "Museums & Art Galleries",
        "categoryId": "hospitality",
        "icon": "palette",
        "description": "Discreet, high-end security providing VIP recognition, perimeter safety, and liability protection without disrupting the guest experience.",
        "aiModels": [
            "VIP Opt-in Recognition",
            "Slip & Fall Liability",
            "Vagrancy & Loitering",
            "Vehicle Tracking"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Lobby/Hallway Capture",
            "Edge Forensic Extraction",
            "Hybrid Search DB Sync",
            "Concierge/Security Dispatch"
        ],
        "caseStudyNarrative": {
            "challenge": "Museums & Art Galleries strive to provide a frictionless, premium guest experience, meaning security must be completely invisible yet immediately responsive to unauthorized intrusions or liability claims (like slip-and-falls).",
            "solution": "Optical sensors are tuned for discreet integration. The VMS runs forensic search algorithms that can quickly isolate an incident using metadata (e.g., 'red shirt, blue bag') rather than manual scrubbing, while instantly recognizing known VIPs via opt-in facial vectors.",
            "impact": "Saved over $2M annually in fraudulent liability claim payouts, elevated VIP guest satisfaction through proactive greeting, and minimized visible security patrols by relying on AI-directed dispatches."
        }
    },
    {
        "id": 36,
        "name": "Theme Parks",
        "categoryId": "hospitality",
        "icon": "ferris-wheel",
        "description": "Discreet, high-end security providing VIP recognition, perimeter safety, and liability protection without disrupting the guest experience.",
        "aiModels": [
            "VIP Opt-in Recognition",
            "Slip & Fall Liability",
            "Vagrancy & Loitering",
            "Vehicle Tracking"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Lobby/Hallway Capture",
            "Edge Forensic Extraction",
            "Hybrid Search DB Sync",
            "Concierge/Security Dispatch"
        ],
        "caseStudyNarrative": {
            "challenge": "Theme Parks strive to provide a frictionless, premium guest experience, meaning security must be completely invisible yet immediately responsive to unauthorized intrusions or liability claims (like slip-and-falls).",
            "solution": "Optical sensors are tuned for discreet integration. The VMS runs forensic search algorithms that can quickly isolate an incident using metadata (e.g., 'red shirt, blue bag') rather than manual scrubbing, while instantly recognizing known VIPs via opt-in facial vectors.",
            "impact": "Saved over $2M annually in fraudulent liability claim payouts, elevated VIP guest satisfaction through proactive greeting, and minimized visible security patrols by relying on AI-directed dispatches."
        }
    },
    {
        "id": 37,
        "name": "Public Transit Fleets",
        "categoryId": "infrastructure",
        "icon": "bus",
        "description": "Large-scale infrastructure and transit security focused on crowd crush prevention, perimeter defense, and flow management.",
        "aiModels": [
            "Crowd Density Estimation",
            "Unattended Object ID",
            "ALPR & Speeding",
            "Perimeter Breach (Thermal)"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Multi-Sensor Array",
            "Edge Density/Threat Processing",
            "City/Transit Cloud Sync",
            "Command Center Overlay"
        ],
        "caseStudyNarrative": {
            "challenge": "Public Transit Fleets must safely process thousands of individuals and vehicles per hour while constantly remaining vigilant against terror threats, unauthorized access, and fatal congestion bottlenecks.",
            "solution": "The system ingests high-definition streams to perform real-time crowd density estimations and pathing predictions. Any abandoned objects are instantly flagged, and perimeter cameras use thermal vectors to identify infiltrations miles away in total darkness.",
            "impact": "Prevented critical overcrowding events through predictive alerts, secured vast unlit perimeters seamlessly, and decreased security operator fatigue by filtering 99% of false environmental alarms."
        }
    },
    {
        "id": 38,
        "name": "Law Enforcement",
        "categoryId": "specialized",
        "icon": "badge",
        "description": "Mission-critical surveillance for high-stakes environments demanding zero-trust security and instantaneous threat neutralization.",
        "aiModels": [
            "Weapon Detection",
            "Drone ID & Tracking",
            "Biometric Anti-Spoofing",
            "Classified Zone Access"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Specialized Sensor Capture",
            "Zero-Latency Threat ID",
            "Air-Gapped Core Server",
            "Automated Lockdown Trigger"
        ],
        "caseStudyNarrative": {
            "challenge": "Law Enforcement represent the highest tier of security requirements, where state-sponsored espionage, armed incursions, or severe contraband smuggling are daily realistic threats.",
            "solution": "Leveraging military-grade edge nodes, the AI performs sub-millisecond weapon detection and drone tracking. Access to restricted areas requires multi-factor visual authentication with 3D anti-spoofing depth analysis.",
            "impact": "Achieved a 100% block rate on unauthorized infiltrations, neutralized armed threats seconds before entry, and maintained absolute data sovereignty through air-gapped, on-premise VMS deployments."
        }
    },
    {
        "id": 39,
        "name": "Waste Management",
        "categoryId": "industrial",
        "icon": "trash-2",
        "description": "Ruggedized industrial monitoring focusing on OSHA compliance, predictive equipment maintenance, and hazardous zone security.",
        "aiModels": [
            "PPE Compliance Checking",
            "Thermal Leak Detection",
            "Hazard Zone Incursion",
            "Forklift Proximity Warning"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Thermal/Optical Capture",
            "Edge Safety Verification",
            "Factory Scada Sync",
            "Siren/Dashboard Alert"
        ],
        "caseStudyNarrative": {
            "challenge": "Waste Management operate in inherently dangerous environments where a single lapse in safety protocol or an unnoticed equipment failure can result in catastrophic injuries or massive operational downtime.",
            "solution": "Deploying hybrid optical-thermal edge sensors, the VMS continually scans for missing Personal Protective Equipment (PPE) like hardhats and vests. Simultaneously, it maps dynamic geofences around heavy machinery to alert on unauthorized incursions.",
            "impact": "Reduced OSHA-recordable incidents by 45%, eliminated near-misses with heavy machinery, and decreased insurance premiums through verifiable, automated compliance auditing."
        }
    },
    {
        "id": 40,
        "name": "Water Treatment",
        "categoryId": "industrial",
        "icon": "droplets",
        "description": "Ruggedized industrial monitoring focusing on OSHA compliance, predictive equipment maintenance, and hazardous zone security.",
        "aiModels": [
            "PPE Compliance Checking",
            "Thermal Leak Detection",
            "Hazard Zone Incursion",
            "Forklift Proximity Warning"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Thermal/Optical Capture",
            "Edge Safety Verification",
            "Factory Scada Sync",
            "Siren/Dashboard Alert"
        ],
        "caseStudyNarrative": {
            "challenge": "Water Treatment operate in inherently dangerous environments where a single lapse in safety protocol or an unnoticed equipment failure can result in catastrophic injuries or massive operational downtime.",
            "solution": "Deploying hybrid optical-thermal edge sensors, the VMS continually scans for missing Personal Protective Equipment (PPE) like hardhats and vests. Simultaneously, it maps dynamic geofences around heavy machinery to alert on unauthorized incursions.",
            "impact": "Reduced OSHA-recordable incidents by 45%, eliminated near-misses with heavy machinery, and decreased insurance premiums through verifiable, automated compliance auditing."
        }
    },
    {
        "id": 41,
        "name": "Convention Centers",
        "categoryId": "hospitality",
        "icon": "users",
        "description": "Discreet, high-end security providing VIP recognition, perimeter safety, and liability protection without disrupting the guest experience.",
        "aiModels": [
            "VIP Opt-in Recognition",
            "Slip & Fall Liability",
            "Vagrancy & Loitering",
            "Vehicle Tracking"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Lobby/Hallway Capture",
            "Edge Forensic Extraction",
            "Hybrid Search DB Sync",
            "Concierge/Security Dispatch"
        ],
        "caseStudyNarrative": {
            "challenge": "Convention Centers strive to provide a frictionless, premium guest experience, meaning security must be completely invisible yet immediately responsive to unauthorized intrusions or liability claims (like slip-and-falls).",
            "solution": "Optical sensors are tuned for discreet integration. The VMS runs forensic search algorithms that can quickly isolate an incident using metadata (e.g., 'red shirt, blue bag') rather than manual scrubbing, while instantly recognizing known VIPs via opt-in facial vectors.",
            "impact": "Saved over $2M annually in fraudulent liability claim payouts, elevated VIP guest satisfaction through proactive greeting, and minimized visible security patrols by relying on AI-directed dispatches."
        }
    },
    {
        "id": 42,
        "name": "Toll Booths",
        "categoryId": "infrastructure",
        "icon": "coins",
        "description": "Large-scale infrastructure and transit security focused on crowd crush prevention, perimeter defense, and flow management.",
        "aiModels": [
            "Crowd Density Estimation",
            "Unattended Object ID",
            "ALPR & Speeding",
            "Perimeter Breach (Thermal)"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Multi-Sensor Array",
            "Edge Density/Threat Processing",
            "City/Transit Cloud Sync",
            "Command Center Overlay"
        ],
        "caseStudyNarrative": {
            "challenge": "Toll Booths must safely process thousands of individuals and vehicles per hour while constantly remaining vigilant against terror threats, unauthorized access, and fatal congestion bottlenecks.",
            "solution": "The system ingests high-definition streams to perform real-time crowd density estimations and pathing predictions. Any abandoned objects are instantly flagged, and perimeter cameras use thermal vectors to identify infiltrations miles away in total darkness.",
            "impact": "Prevented critical overcrowding events through predictive alerts, secured vast unlit perimeters seamlessly, and decreased security operator fatigue by filtering 99% of false environmental alarms."
        }
    },
    {
        "id": 43,
        "name": "QSR Drive-thrus",
        "categoryId": "retail",
        "icon": "coffee",
        "description": "Advanced retail analytics and surveillance optimizing customer flow, loss prevention, and space utilization.",
        "aiModels": [
            "Intent & Loitering Analytics",
            "Queue Wait Tracking",
            "Stock Out Detection",
            "Footfall Heatmaps"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Overhead Capture",
            "Edge Intent Analysis",
            "VMS Data Aggregation",
            "Manager Alert Trigger"
        ],
        "caseStudyNarrative": {
            "challenge": "QSR Drive-thrus face ongoing issues with organized retail crime, poor staffing allocation during peak times, and understanding customer spatial journeys within complex layouts.",
            "solution": "Leveraging edge-based intent analysis and cross-camera tracking, the system identifies suspicious concealment behaviors instantly. Queue management algorithms continuously monitor checkout friction, while heatmapping processes spatial utilization without requiring cloud transmission.",
            "impact": "Achieved a 30% reduction in measurable shrinkage, elevated customer satisfaction by predicting register bottlenecks, and optimized floor planning based on reliable dwelling data."
        }
    },
    {
        "id": 44,
        "name": "Luxury Boutiques",
        "categoryId": "retail",
        "icon": "gem",
        "description": "Advanced retail analytics and surveillance optimizing customer flow, loss prevention, and space utilization.",
        "aiModels": [
            "Intent & Loitering Analytics",
            "Queue Wait Tracking",
            "Stock Out Detection",
            "Footfall Heatmaps"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Overhead Capture",
            "Edge Intent Analysis",
            "VMS Data Aggregation",
            "Manager Alert Trigger"
        ],
        "caseStudyNarrative": {
            "challenge": "Luxury Boutiques face ongoing issues with organized retail crime, poor staffing allocation during peak times, and understanding customer spatial journeys within complex layouts.",
            "solution": "Leveraging edge-based intent analysis and cross-camera tracking, the system identifies suspicious concealment behaviors instantly. Queue management algorithms continuously monitor checkout friction, while heatmapping processes spatial utilization without requiring cloud transmission.",
            "impact": "Achieved a 30% reduction in measurable shrinkage, elevated customer satisfaction by predicting register bottlenecks, and optimized floor planning based on reliable dwelling data."
        }
    },
    {
        "id": 45,
        "name": "Telecom Tower Sites",
        "categoryId": "infrastructure",
        "icon": "radio-tower",
        "description": "Large-scale infrastructure and transit security focused on crowd crush prevention, perimeter defense, and flow management.",
        "aiModels": [
            "Crowd Density Estimation",
            "Unattended Object ID",
            "ALPR & Speeding",
            "Perimeter Breach (Thermal)"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Multi-Sensor Array",
            "Edge Density/Threat Processing",
            "City/Transit Cloud Sync",
            "Command Center Overlay"
        ],
        "caseStudyNarrative": {
            "challenge": "Telecom Tower Sites must safely process thousands of individuals and vehicles per hour while constantly remaining vigilant against terror threats, unauthorized access, and fatal congestion bottlenecks.",
            "solution": "The system ingests high-definition streams to perform real-time crowd density estimations and pathing predictions. Any abandoned objects are instantly flagged, and perimeter cameras use thermal vectors to identify infiltrations miles away in total darkness.",
            "impact": "Prevented critical overcrowding events through predictive alerts, secured vast unlit perimeters seamlessly, and decreased security operator fatigue by filtering 99% of false environmental alarms."
        }
    },
    {
        "id": 46,
        "name": "Wildlife Reserves",
        "categoryId": "specialized",
        "icon": "paw-print",
        "description": "Mission-critical surveillance for high-stakes environments demanding zero-trust security and instantaneous threat neutralization.",
        "aiModels": [
            "Weapon Detection",
            "Drone ID & Tracking",
            "Biometric Anti-Spoofing",
            "Classified Zone Access"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Specialized Sensor Capture",
            "Zero-Latency Threat ID",
            "Air-Gapped Core Server",
            "Automated Lockdown Trigger"
        ],
        "caseStudyNarrative": {
            "challenge": "Wildlife Reserves represent the highest tier of security requirements, where state-sponsored espionage, armed incursions, or severe contraband smuggling are daily realistic threats.",
            "solution": "Leveraging military-grade edge nodes, the AI performs sub-millisecond weapon detection and drone tracking. Access to restricted areas requires multi-factor visual authentication with 3D anti-spoofing depth analysis.",
            "impact": "Achieved a 100% block rate on unauthorized infiltrations, neutralized armed threats seconds before entry, and maintained absolute data sovereignty through air-gapped, on-premise VMS deployments."
        }
    },
    {
        "id": 47,
        "name": "Courthouses",
        "categoryId": "specialized",
        "icon": "scale",
        "description": "Mission-critical surveillance for high-stakes environments demanding zero-trust security and instantaneous threat neutralization.",
        "aiModels": [
            "Weapon Detection",
            "Drone ID & Tracking",
            "Biometric Anti-Spoofing",
            "Classified Zone Access"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Specialized Sensor Capture",
            "Zero-Latency Threat ID",
            "Air-Gapped Core Server",
            "Automated Lockdown Trigger"
        ],
        "caseStudyNarrative": {
            "challenge": "Courthouses represent the highest tier of security requirements, where state-sponsored espionage, armed incursions, or severe contraband smuggling are daily realistic threats.",
            "solution": "Leveraging military-grade edge nodes, the AI performs sub-millisecond weapon detection and drone tracking. Access to restricted areas requires multi-factor visual authentication with 3D anti-spoofing depth analysis.",
            "impact": "Achieved a 100% block rate on unauthorized infiltrations, neutralized armed threats seconds before entry, and maintained absolute data sovereignty through air-gapped, on-premise VMS deployments."
        }
    },
    {
        "id": 48,
        "name": "Commercial Pharmacies",
        "categoryId": "retail",
        "icon": "pill",
        "description": "Advanced retail analytics and surveillance optimizing customer flow, loss prevention, and space utilization.",
        "aiModels": [
            "Intent & Loitering Analytics",
            "Queue Wait Tracking",
            "Stock Out Detection",
            "Footfall Heatmaps"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Overhead Capture",
            "Edge Intent Analysis",
            "VMS Data Aggregation",
            "Manager Alert Trigger"
        ],
        "caseStudyNarrative": {
            "challenge": "Commercial Pharmacies face ongoing issues with organized retail crime, poor staffing allocation during peak times, and understanding customer spatial journeys within complex layouts.",
            "solution": "Leveraging edge-based intent analysis and cross-camera tracking, the system identifies suspicious concealment behaviors instantly. Queue management algorithms continuously monitor checkout friction, while heatmapping processes spatial utilization without requiring cloud transmission.",
            "impact": "Achieved a 30% reduction in measurable shrinkage, elevated customer satisfaction by predicting register bottlenecks, and optimized floor planning based on reliable dwelling data."
        }
    },
    {
        "id": 49,
        "name": "Marinas & Yacht Clubs",
        "categoryId": "hospitality",
        "icon": "anchor",
        "description": "Discreet, high-end security providing VIP recognition, perimeter safety, and liability protection without disrupting the guest experience.",
        "aiModels": [
            "VIP Opt-in Recognition",
            "Slip & Fall Liability",
            "Vagrancy & Loitering",
            "Vehicle Tracking"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Lobby/Hallway Capture",
            "Edge Forensic Extraction",
            "Hybrid Search DB Sync",
            "Concierge/Security Dispatch"
        ],
        "caseStudyNarrative": {
            "challenge": "Marinas & Yacht Clubs strive to provide a frictionless, premium guest experience, meaning security must be completely invisible yet immediately responsive to unauthorized intrusions or liability claims (like slip-and-falls).",
            "solution": "Optical sensors are tuned for discreet integration. The VMS runs forensic search algorithms that can quickly isolate an incident using metadata (e.g., 'red shirt, blue bag') rather than manual scrubbing, while instantly recognizing known VIPs via opt-in facial vectors.",
            "impact": "Saved over $2M annually in fraudulent liability claim payouts, elevated VIP guest satisfaction through proactive greeting, and minimized visible security patrols by relying on AI-directed dispatches."
        }
    },
    {
        "id": 50,
        "name": "EV Charging Hubs",
        "categoryId": "infrastructure",
        "icon": "battery-charging",
        "description": "Large-scale infrastructure and transit security focused on crowd crush prevention, perimeter defense, and flow management.",
        "aiModels": [
            "Crowd Density Estimation",
            "Unattended Object ID",
            "ALPR & Speeding",
            "Perimeter Breach (Thermal)"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Multi-Sensor Array",
            "Edge Density/Threat Processing",
            "City/Transit Cloud Sync",
            "Command Center Overlay"
        ],
        "caseStudyNarrative": {
            "challenge": "EV Charging Hubs must safely process thousands of individuals and vehicles per hour while constantly remaining vigilant against terror threats, unauthorized access, and fatal congestion bottlenecks.",
            "solution": "The system ingests high-definition streams to perform real-time crowd density estimations and pathing predictions. Any abandoned objects are instantly flagged, and perimeter cameras use thermal vectors to identify infiltrations miles away in total darkness.",
            "impact": "Prevented critical overcrowding events through predictive alerts, secured vast unlit perimeters seamlessly, and decreased security operator fatigue by filtering 99% of false environmental alarms."
        }
    },
    {
        "id": 51,
        "name": "Commercial Bank Vaults",
        "categoryId": "retail",
        "icon": "vault",
        "description": "Advanced retail analytics and surveillance optimizing customer flow, loss prevention, and space utilization.",
        "aiModels": [
            "Intent & Loitering Analytics",
            "Queue Wait Tracking",
            "Stock Out Detection",
            "Footfall Heatmaps"
        ],
        "dashboardStats": [
            {
                "label": "Incident Drop",
                "value": "-30%"
            },
            {
                "label": "Response Time",
                "value": "<2s"
            },
            {
                "label": "Uptime",
                "value": "99.9%"
            }
        ],
        "workflow": [
            "Overhead Capture",
            "Edge Intent Analysis",
            "VMS Data Aggregation",
            "Manager Alert Trigger"
        ],
        "caseStudyNarrative": {
            "challenge": "Commercial Bank Vaults face ongoing issues with organized retail crime, poor staffing allocation during peak times, and understanding customer spatial journeys within complex layouts.",
            "solution": "Leveraging edge-based intent analysis and cross-camera tracking, the system identifies suspicious concealment behaviors instantly. Queue management algorithms continuously monitor checkout friction, while heatmapping processes spatial utilization without requiring cloud transmission.",
            "impact": "Achieved a 30% reduction in measurable shrinkage, elevated customer satisfaction by predicting register bottlenecks, and optimized floor planning based on reliable dwelling data."
        }
    }
];
