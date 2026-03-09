# Unified Threat Intelligence Dashboard (UTID)

> **One IOC. Multiple Intelligence Sources. Faster SOC Decisions.**

A SOC-focused **Threat Intelligence Dashboard** designed to streamline the enrichment and investigation of **Indicators of Compromise (IOCs)** by aggregating multiple OSINT intelligence platforms into a single unified interface.

# Screenshots

The following screenshots highlight the key components and workflow of the **Unified Threat Intelligence Dashboard (UTID)**.

---

### Dashboard & Project Information

<table>
<tr>
<td align="center">
<b>Main Dashboard</b><br>
<img src="https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/01_UTID_Dashboard.png" width="500"/>
</td>

<td align="center">
<b>Project Details Page</b><br>
<img src="https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/02_UTID_Projectdetails.png" width="500"/>
</td>
</tr>

<tr>
<td align="center">
<b>Why SOC Analysts Need This Tool</b><br>
<img src="https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/03_UTID_why_We_Need_This_Tool.png" width="500"/>
</td>

<td align="center">
<b>About the Creator</b><br>
<img src="https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/04_UTID_About_Creater.png" width="500"/>
</td>
</tr>
</table>

---

### SOC Investigation Workflow

<table>
<tr>
<td align="center">
<b>How UTID Improves SOC Triage Speed</b><br>
<img src="https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/04_UTID_How_This_Improves_SOC_Triage_Speed.png" width="500"/>
</td>

<td align="center">
<b>IOC Search Entry</b><br>
<img src="https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/05_UTID_IOC_Search_Entry.png" width="500"/>
</td>
</tr>

<tr>
<td align="center">
<b>OSINT Tool Selection</b><br>
<img src="https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/06_UTID_IOC_Tool_Selection.png" width="500"/>
</td>

<td align="center">
<b>Unified Intelligence Results</b><br>
<img src="https://raw.githubusercontent.com/NANDAN-S-GMIT/images/main/07_UTID_Unified_Intelligence_Results_Cards.png" width="500"/>
</td>
</tr>
</table>

---

These screenshots demonstrate the full **SOC investigation workflow**, starting from IOC entry to unified intelligence analysis across multiple OSINT platforms.


🔗 **Live Demo:**
https://unified-threat-intelligence.netlify.app/

---

## Project Status

![Status](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![React](https://img.shields.io/badge/React-18-blue)

---

# Overview

The **Unified Threat Intelligence Dashboard (UTID)** is a SOC-oriented security tool that demonstrates how modern Security Operations Center analysts can significantly improve their IOC investigation workflow.

Instead of manually opening multiple threat intelligence websites, analysts can **submit a single IOC and instantly access multiple intelligence sources from one dashboard**.

This project demonstrates:

* SOC analyst investigation workflows
* Threat intelligence enrichment processes
* Modern frontend architecture using React and Next.js
* Security-focused UI/UX design
* Practical cybersecurity tool development

---

# Key Features

### Unified IOC Investigation

* Single input field supporting **multiple IOC types**
* Automatic **IOC type detection**
* Simultaneous access to multiple OSINT intelligence platforms
* Side-by-side intelligence analysis

### Integrated Threat Intelligence Sources

The dashboard integrates access to several commonly used OSINT intelligence platforms:

* VirusTotal
* AbuseIPDB
* Cisco Talos Intelligence
* IPVoid
* URLScan.io
* AlienVault OTX
* ThreatCrowd
* GreyNoise

These platforms help analysts determine whether an indicator is **malicious, suspicious, or benign**.

### SOC-Friendly Interface

* Dark theme inspired by SOC environments
* Responsive design for multiple devices
* Expandable OSINT panels
* IOC copy-to-clipboard functionality
* Recent search history stored in browser

---

# SOC Analyst Use Case

### Traditional Investigation Workflow

SOC analysts typically spend **5–10 minutes investigating a single IOC** by manually:

* Opening multiple OSINT platforms
* Copying and pasting the same indicator repeatedly
* Switching between different browser tabs
* Reviewing intelligence sources individually

### UTID Workflow

Using UTID, the same investigation can be performed in **under 30 seconds**:

1. Enter the IOC
2. Click **Analyze IOC**
3. Review multiple threat intelligence sources simultaneously
4. Make a faster triage decision

### Operational Benefits

* Faster IOC triage
* Reduced context switching
* Improved analyst productivity
* Centralized intelligence view

---

# Supported IOC Types

| IOC Type   | Description            | Example                            |
| ---------- | ---------------------- | ---------------------------------- |
| IP Address | IPv4 addresses         | `8.8.8.8`                          |
| URL        | Full website addresses | `https://example.com`              |
| Domain     | Domain names           | `malicious-domain.xyz`             |
| File Hash  | MD5 / SHA1 / SHA256    | `5d41402abc4b2a76b9719d911017c592` |

The system automatically identifies the IOC type and queries compatible intelligence platforms.

---

# Technology Stack

### Frontend

* **Framework:** Next.js 14
* **UI Library:** React 18
* **Styling:** CSS Modules
* **State Management:** React Hooks
* **Storage:** Browser LocalStorage

### Architecture

* Component-based architecture
* Frontend-only proof of concept
* OSINT access through embedded interfaces
* Responsive UI design

---

# Installation & Setup

### Prerequisites

* Node.js 16+
* npm or yarn

### Clone the Repository

```bash
git clone https://github.com/NANDAN-S-GMIT/unified-threat-intelligence-dashboard.git
cd unified-threat-intelligence-dashboard
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

# Project Structure

```
unified-threat-intelligence-dashboard
│
├── app
│   ├── globals.css
│   ├── layout.jsx
│   ├── page.jsx
│
├── components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── SearchBar.jsx
│   ├── OSINTPanel.jsx
│   ├── ToolToggle.jsx
│   └── RecentSearches.jsx
│
├── utils
│   ├── iocDetector.js
│   └── osintConfig.js
│
├── public
├── package.json
├── next.config.js
└── README.md
```

---

# Limitations

This project is a **frontend proof-of-concept** created for **educational and portfolio demonstration purposes**.

Current limitations include:

* No direct API integration with OSINT platforms
* Some platforms restrict iframe embedding
* Results are not automatically parsed or aggregated
* Analysts must manually review each intelligence source
* No automated threat scoring system

Despite these limitations, the dashboard effectively demonstrates how **threat intelligence enrichment workflows operate in a SOC environment**.

---

# Screenshots

### Threat Intelligence Dashboard

Main IOC investigation interface displaying multiple intelligence sources.

### Project Documentation Page

Detailed explanation of SOC workflows and project architecture.

### About Creator Page

Professional overview of the developer and cybersecurity interests.

---

# About the Creator

**Nandan S**

Cyber Security Analyst Trainee
Aspiring SOC Analyst | Full Stack Developer

I built this project to demonstrate my understanding of **SOC analyst workflows, threat intelligence enrichment, and modern web application development**.

My goal is to combine **cybersecurity knowledge with technical development skills** to create practical tools that support real-world security operations.

---

# Contact

**Nandan S**

📧 Email
[nandans.dev@gmail.com](mailto:nandans.dev@gmail.com)

🔗 LinkedIn
https://www.linkedin.com/in/nandan-s

💻 GitHub
https://github.com/NANDAN-S-GMIT

🌐 Live Project
https://unified-threat-intelligence.netlify.app/

---

# License

This project is licensed under the **MIT License**.

Copyright © 2026 Nandan S
