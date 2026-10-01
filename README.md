# Fivopay Sales Engine & Banking Technology Showcase — Client (Frontend)

Modern, high-performance web application built with **React 19**, **Vite**, and **Vanilla CSS**. Designed for Fivopay's enterprise sales team to manage high-touch institutional banking leads, execute AWS SES email campaigns, analyze pipeline metrics, and demonstrate Fivopay's banking technology suite.

---

## 🌟 Key Workspaces & Capabilities

### 1. 🗂️ CRM Leads Database (`LeadsScreen.jsx`)
- Complete lead lifecycle management for **Cooperative Societies**, **Cooperative Banks**, and **CA & Auditor Firms**.
- Filter by entity type, demanded banking modules, and pipeline stage.
- Real-time instant search across societies, contact persons, locations, and phone numbers.
- Detailed modal/page views displaying territory notes, scheduled follow-up dates, demanded modules, and activity timelines.

### 2. 📊 Drag-and-Drop Kanban Pipeline (`PipelineScreen.jsx`)
- Interactive Kanban board powered by `@dnd-kit`.
- Seamlessly transition leads across sales stages:
  `New` ➔ `Contacted` ➔ `Interested` ➔ `Demo Scheduled` ➔ `Proposal Sent` ➔ `Closed Won` / `Closed Lost`.
- Live visual deal-stage tally indicators and stage-specific entity cards.

### 3. ✉️ AWS SES / SMTP Campaign Dispatcher (`CampaignsScreen.jsx`)
- Enterprise email blast interface with live SMTP connectivity indicators.
- Pre-built, responsive HTML email templates tailored for Indian financial institutions:
  - *Micro-Savings ("Gullak") Deposit Mobilization*
  - *Member Shares & Equity Capital Management*
  - *Multi-Branch Accounting & Trial Balance Consolidation*
  - *Auditor Supervisory & Compliance Portal*
- Multi-channel recipient targeting: pick leads directly from the database or upload custom lists via **Excel / CSV** (`.xlsx`, `.csv`).
- **Dynamic File Attachments**: Attach brochures, loan policy sheets, and proposal packs (up to 25MB) directly to outgoing campaigns.
- Open rate and click-through tracking integration.

### 4. 📈 Past Campaigns & Engagement Analytics (`PastCampaignsScreen.jsx`)
- Comprehensive audit history of all dispatched email campaigns.
- Real-time engagement telemetry: total emails sent, unique opens, click counts, delivery failures, and open-rate percentages.
- Recipient-level engagement logs with delivery status badges.

### 5. 👔 Team Governance & Territory Management (`TeamManagementScreen.jsx`)
- Admin workspace to invite, manage, and monitor **Field Sales Representatives (BDEs)**.
- Reassign leads across territory sales agents with instant database synchronization.
- Active/Inactive status toggle for sales representative accounts.

### 6. 📄 Executive PDF Leads Export (`pdfExport.js`)
- Instant one-click PDF generation via **jsPDF** and **jspdf-autotable**.
- Fivopay-branded executive landscape format with header metadata, exporter credentials, and timestamp.
- High-level pipeline KPI ribbon (*New, Contacted, Interested, Demo Scheduled, Closed Won*).
- Multi-column grid containing Entity Details, Demanded Modules, Pipeline Stage, and Assigned BDE with auto-pagination and confidential footer.

### 7. 🏛️ Product Features & Developer REST API Showcase
- Interactive catalog featuring **13 core banking modules**:
  - Core Banking System (CBS)
  - Micro-Savings ("Gullak")
  - Multi-Branch General Ledger
  - Loan Origination & EMI Schedules
  - Board Compliance & Supervisory Reports
  - CA & Auditor Verification Portal
- **Stripe / Razorpay-style tabbed REST API documentation** featuring request/response payloads in `curl`, `Node.js`, and `Python`.
- Video walkthrough player and step-by-step workflow timelines.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Core Framework** | React 19.3 & React DOM 19.3 |
| **Bundler & Dev Server**| Vite 8.2 |
| **Routing** | React Router v7.18 |
| **Drag & Drop** | `@dnd-kit/core` & `@dnd-kit/utilities` |
| **PDF Generation** | `jspdf` 4.2 & `jspdf-autotable` 5.0 |
| **Icons** | Lucide React |
| **Spreadsheet Parsing**| `xlsx` (SheetJS) |
| **Styling** | Modern Vanilla CSS with dark/light design tokens |

---

## 📁 Directory Architecture

```
client/
├── public/                   # Static assets & brand media
│   ├── fivopay-icon.png      # 3D Fivopay cloud icon
│   ├── fivopay-logo.png      # Full resolution logo
│   └── videos/               # Feature demonstration videos
├── src/
│   ├── assets/               # Local asset files & base64 logo generator
│   ├── components/           # Reusable UI components
│   │   ├── Breadcrumbs.jsx       # Category/Feature breadcrumb navigation
│   │   ├── FeatureSearch.jsx     # Global search for product features
│   │   ├── KPICards.jsx          # Live pipeline & SES dispatch metrics
│   │   ├── Sidebar.jsx           # Main CRM & documentation navigation
│   │   ├── VideoModal.jsx        # Video preview modal dialog
│   │   ├── VideoPlayer.jsx       # Responsive MP4 video player
│   │   └── WorkflowTimeline.jsx  # Interactive feature implementation stages
│   ├── data/
│   │   ├── defaultLeads.js       # Fallback starter leads dataset
│   │   └── productFeaturesData.js# Comprehensive 13-module catalog & API specs
│   ├── pages/                # Primary workspace views
│   │   ├── AdminCampaignsScreen.jsx   # Organization-wide campaign audit log
│   │   ├── CampaignsScreen.jsx        # Email dispatcher & template composer
│   │   ├── CategoryDetailPage.jsx     # Category-level product view
│   │   ├── FeatureDetailPage.jsx      # Feature deep dive with REST API docs
│   │   ├── LeadDetailScreen.jsx       # Entity dossier & activity history
│   │   ├── LeadsScreen.jsx            # Lead registry with filters & pagination
│   │   ├── LoginScreen.jsx            # Authentication with RBAC login
│   │   ├── PastCampaignsScreen.jsx    # Campaign history & engagement metrics
│   │   ├── PipelineScreen.jsx         # Kanban drag-and-drop pipeline board
│   │   ├── ProductFeaturesLanding.jsx # Banking technology modules landing
│   │   └── TeamManagementScreen.jsx   # BDE representative governance
│   ├── services/
│   │   └── api.js            # Centralized REST API client (Fetch wrapper)
│   ├── utils/
│   │   └── pdfExport.js      # Executive PDF leads report generator
│   ├── App.jsx               # Root component, routing & global state
│   ├── index.css             # Design tokens, typography & CSS variables
│   └── main.jsx              # Application bootstrap & React 19 root
├── index.html                # HTML entry point with modern typography
├── package.json              # Client dependencies and npm scripts
└── vite.config.js            # Vite configuration & React plugin
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** v18 or higher
- The **Fivopay Backend Server** running on `http://localhost:5001` (see `../server/README.md`)

### 2. Installation
```bash
cd client
npm install
```

### 3. Development Server
Start the local Vite development server:
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### 4. Production Build
Verify bundle compilation and produce optimized production assets:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## 🔐 User Roles & Access Control

| Role | Default Email | Permissions |
|---|---|---|
| **Admin Manager** *(Head of Governance)* | `manager@fivopay.com` | Full organizational oversight: view all leads, assign leads across BDEs, manage BDE team members, dispatch organization-wide email blasts, export audit reports. |
| **Field Sales BDE** *(Sales Representative)* | `harsh@fivopay.com` | Dedicated territory view: view assigned leads, advance Kanban pipeline stages, schedule follow-up reminders, log client meetings, dispatch personalized campaign templates. |

---

## 🔌 Backend Connectivity

The frontend communicates with the backend via `src/services/api.js`:
- Default API Base URL: `http://localhost:5001/api`
- Automatically attaches the JWT bearer token stored in `localStorage` (`fivopay_token`) to every authenticated request.
- Handles network errors gracefully and notifies the user with contextual toasts/alerts.

---

## 🎨 Design System

The application features a sleek corporate banking aesthetic with **light and dark modes**:
- **Primary Color**: `#482d82` (Deep Fivopay Purple)
- **Secondary Accent**: `#1b68b3` (Banking Cyan-Blue)
- **Status Indicators**:
  - `Closed Won`: Emerald Green (`#10b981`)
  - `Demo Scheduled`: Indigo / Purple (`#6366f1`)
  - `Closed Lost`: Rose Red (`#ef4444`)
- **Theme Persistence**: Preference is remembered via `localStorage.getItem('fivopay_theme')`.
