// Fivopay Digital Banking Platform — Enterprise Product Hierarchy & Features Dataset
// Consolidated into 12 Master Core Modules with Elaborated Capabilities & Video Demos

export const defaultVideoUrl = '/videos/VAHT-fGLK1k.mp4';

export const productCategories = [
  {
    id: 'customer-onboarding',
    number: 1,
    slideNumber: '01 - 02 / 16',
    slug: 'customer-onboarding',
    name: 'Customer Onboarding, KYC & Mobile Banking',
    group: 'Customer',
    icon: 'UserCheck',
    videoUrl: '/videos/VAHT-fGLK1k.mp4',
    shortDescription: 'Seamless Identity Verification (e-KYC) with dynamic compliance routing (India Aadhaar + PAN & International Passport) and self-service mobile banking activation.',
    purpose: 'Provides paperless identity verification, biometric facial liveness checks, multi-country document parsing, and instant 24/7 digital account provisioning.',
    primaryUsers: ['Customer', 'Field Agent', 'Branch Manager'],
    businessValue: 'Accelerates onboarding turnaround to under 3 minutes, reduces branch footfall by 70%, and ensures 100% regulatory KYC compliance.',
    featureCount: 7
  },
  {
    id: 'payments-money-movement',
    number: 2,
    slideNumber: '04 & 15 / 16',
    slug: 'payments-money-movement',
    name: 'Payments, Money Movement & Gateway Infra',
    group: 'Customer',
    icon: 'ArrowLeftRight',
    videoUrl: '/videos/VAHT-UFOGpM.mp4',
    shortDescription: 'Frictionless Payments, P2P, Merchant QR, and enterprise PA / PG / PPI payment gateway infrastructure & white-label APIs.',
    purpose: 'Powers multi-channel money movement pipelines connecting member savings, bank accounts, UPI 2.0, NPCI settlement engines, and PPI prepaid card issuance.',
    primaryUsers: ['Customer', 'Field Agent', 'Cashier', 'Core Banking Engine'],
    businessValue: 'Delivers 99.99% uptime payment gateway infrastructure with sub-3 second median settlement and automated fraud detection.',
    featureCount: 4
  },
  {
    id: 'auto-sweep-savings',
    number: 3,
    slideNumber: '05 / 16',
    slug: 'auto-sweep-savings',
    name: 'Auto-Sweep Smart Savings',
    group: 'Customer',
    icon: 'Zap',
    videoUrl: '/videos/VAHT-cjuGd0.mp4',
    shortDescription: 'Automated passive wealth booster — automatically sweeping idle saving balances into high-yield deposits and reverse sweeping on demand.',
    purpose: 'Maximizes interest yield for members by dynamically sweeping surplus saving balances above a threshold into short-term deposit units, with LIFO reverse sweeps for liquidity.',
    primaryUsers: ['Customer', 'Core Banking Engine'],
    businessValue: 'Optimizes capital yield for members while preserving 100% instant liquidity for daily saving expenses.',
    featureCount: 2
  },
  {
    id: 'fixed-recurring-deposits',
    number: 4,
    slideNumber: '06 / 16',
    slug: 'fixed-recurring-deposits',
    name: 'Fixed & Recurring Deposits (FD/RD)',
    group: 'Customer',
    icon: 'Lock',
    videoUrl: '/videos/VAHT-ZdNxig.mp4',
    shortDescription: 'Structured long-term savings suite — Fixed Deposits (FD), Recurring Deposits (RD), senior citizen bonuses, and digital certificates.',
    purpose: 'Offers high-return term investment solutions with automated monthly contributions, compounding options, premature withdrawal rules, and digital deposit certificates.',
    primaryUsers: ['Customer', 'Field Agent', 'Branch Manager', 'Cashier'],
    businessValue: 'Strengthens long-term institutional capital base and automates multi-tenure compound interest calculations.',
    featureCount: 3
  },
  {
    id: 'micro-savings-gullak',
    number: 5,
    slideNumber: '10 / 16',
    slug: 'micro-savings-gullak',
    name: 'Goal-Based Micro-Savings ("Gullak")',
    group: 'Customer',
    icon: 'PiggyBank',
    videoUrl: '/videos/VAHT-Ta_AWk.mp4',
    shortDescription: 'Gamifying savings goals (Emergency, Festival, Vehicle, Travel) with automated daily/weekly micro-sweeps and digital vault locks.',
    purpose: 'Promotes disciplined financial habits among members through digital goal vaults with visual targets and digital lock protection.',
    primaryUsers: ['Customer'],
    businessValue: 'Unlocks recurring micro-liquidity accumulation and enhances customer lifetime retention.',
    featureCount: 2
  },
  {
    id: 'member-shares-equity',
    number: 6,
    slideNumber: '03 / 16',
    slug: 'member-shares-equity',
    name: 'Member Shares & Equity Capital Management',
    group: 'Customer',
    icon: 'PieChart',
    videoUrl: '/videos/VAHT-ey1CcM.mp4',
    shortDescription: 'Equity Purchases & Shareholder Capital Growth — digitizing member share allocations, real-time valuations, and automated annual dividend payouts.',
    purpose: 'Manages member equity ownership in cooperative financial institutions, share transfers, capital tiering, digital share certificates, and automated dividend distribution.',
    primaryUsers: ['Customer', 'Chairman / Admin', 'Branch Manager'],
    businessValue: 'Digitizes member share capital allocation and automates annual dividend payout workflows across thousands of cooperative shareholders.',
    featureCount: 2
  },
  {
    id: 'loan-credit-lifecycle',
    number: 7,
    slideNumber: '07 / 16',
    slug: 'loan-credit-lifecycle',
    name: 'Loan Origination, Underwriting & Repayment Flow',
    group: 'Lending',
    icon: 'Briefcase',
    videoUrl: '/videos/VAHT-d8a-SA.mp4',
    shortDescription: 'Covers Personal, Business, Agriculture, and Gold Loans, JLG Groups, eSign digital contracts, cashier allocation, disbursement, and EMI repayments.',
    purpose: 'Controls the complete credit origination and recovery cycle — from eSign application to manager audit, chairman sanction, automated disbursal, and loan dossiers.',
    primaryUsers: ['Customer', 'Field Agent', 'Branch Manager', 'Credit Officer', 'Cashier', 'Chairman / Admin'],
    businessValue: 'Drives loan portfolio growth, reduces non-performing assets (NPA) via automated collection schedules, and ensures multi-tier executive risk governance.',
    featureCount: 6
  },
  {
    id: 'loan-interest-calculator',
    number: 8,
    slideNumber: '08 / 16',
    slug: 'loan-interest-calculator',
    name: 'Interactive Loan & Interest Calculator',
    group: 'Lending',
    icon: 'Calculator',
    videoUrl: '/videos/VAHT-TRH6e0.mp4',
    shortDescription: 'Empowers customers and field agents to model loan EMIs, interest projections, repayment options, and amortization tables.',
    purpose: 'Provides interactive plan modeling, real-time interest rate projections, and instant loan amortization tables for personal, gold, and business credit products before submitting formal applications.',
    primaryUsers: ['Customer', 'Field Agent', 'Branch Manager'],
    businessValue: 'Empowers members with transparent financial projections before committing to loans, driving higher conversion and customer trust.',
    featureCount: 2
  },
  {
    id: 'field-operations',
    number: 9,
    slideNumber: '11 / 16',
    slug: 'field-operations',
    name: 'Field Operations, Doorstep Banking & Outreach',
    group: 'Operations',
    icon: 'Footprints',
    videoUrl: '/videos/VAHT-Xq8NdY.mp4',
    shortDescription: 'Field Operations & Doorstep Banking — agent mobile app for offline customer onboarding, doorstep cash collection, thermal printing, and EOD branch vault handovers.',
    purpose: 'Equips door-to-door field agents with offline transaction caching, bluetooth thermal receipt printing, real-time agent GPS audit trails, and end-of-day branch till handovers.',
    primaryUsers: ['Field Agent', 'Branch Manager', 'Cashier'],
    businessValue: 'Maximizes field collection velocity, expands financial inclusion in rural sectors, and eliminates manual ledger errors.',
    featureCount: 4
  },
  {
    id: 'branch-cash-operations',
    number: 10,
    slideNumber: '12 / 16',
    slug: 'branch-cash-operations',
    name: 'Branch Cashier Operations',
    group: 'Operations',
    icon: 'Banknote',
    videoUrl: '/videos/VAHT-axQ83g.mp4',
    shortDescription: 'Managing counter liquidity, OTC deposits & withdrawals, 4-digit code pickup, agent settlement, loan disbursements, and EOD cash drawer balancing.',
    purpose: 'Secures physical cash movement at branch counter desks, cashier drawers, and main vault balances with dual-auth code verification and teller reconciliation.',
    primaryUsers: ['Cashier', 'Branch Manager', 'Admin'],
    businessValue: 'Ensures zero cash mismatch, audit-proof vault balancing, and seamless multi-level teller reconciliation.',
    featureCount: 7
  },
  {
    id: 'branch-manager-governance',
    number: 11,
    slideNumber: '13 / 16',
    slug: 'branch-manager-governance',
    name: 'Branch Manager & Governance Hub',
    group: 'Governance',
    icon: 'Building2',
    videoUrl: null,
    shortDescription: 'Comprehensive supervisory console for branch heads, covering credit governance, staffing, cash logistics, and branch-scoped analytics.',
    purpose: 'Empowers branch managers with full supervisory controls over loan sanctions, staff provisioning, agent cash logistics, vault reserves, and regulatory compliance.',
    primaryUsers: ['Branch Manager', 'Admin'],
    businessValue: 'Ensures strict branch data isolation, accelerates credit approvals, coordinates field logistics, and guarantees 100% audit readiness.',
    featureCount: 8
  },
  {
    id: 'ai-intelligent-automation',
    number: 12,
    slideNumber: '09 / 16',
    slug: 'ai-intelligent-automation',
    name: 'AI Advisor & Intelligent Automation',
    group: 'Intelligence',
    icon: 'Brain',
    videoUrl: '/videos/VAHT-QBT93M.mp4',
    shortDescription: 'AI Advisor: Personalized Wealth Assistant — smart financial advice for users, conversational banking, automated document OCR auditing, and risk anomaly detection.',
    purpose: 'Integrates artificial intelligence into natural language banking queries, document OCR processing, credit risk signal detection, and compliance auditing.',
    primaryUsers: ['Customer', 'Branch Manager', 'Chairman / Admin'],
    businessValue: 'Cuts document processing effort by 90% and proactively flags fraudulent transaction patterns before loss occurs.',
    featureCount: 4
  },
  {
    id: 'executive-governance-analytics',
    number: 13,
    slideNumber: '14 & 16 / 16',
    slug: 'executive-governance-analytics',
    name: 'Executive Governance, Accounting & Analytics',
    group: 'Governance',
    icon: 'ShieldAlert',
    videoUrl: '/videos/VAHT-Qi9W-A.mp4',
    shortDescription: 'Board-level governance, sanction controls, double-entry general ledger, and real-time BI visual analytics.',
    purpose: 'Grants leadership complete institutional control over interest policies, loan sanction limits, general ledger trial balances, and P&L reporting.',
    primaryUsers: ['Chairman / Admin', 'Branch Manager', 'Financial Auditor'],
    businessValue: 'Guarantees uncompromised corporate governance and 100% audit readiness for regulatory inspectors.',
    featureCount: 2
  }
];

export const moduleGroups = [
  { name: 'Customer', categorySlugs: ['customer-onboarding', 'payments-money-movement', 'auto-sweep-savings', 'fixed-recurring-deposits', 'micro-savings-gullak', 'member-shares-equity'] },
  { name: 'Lending', categorySlugs: ['loan-credit-lifecycle', 'loan-interest-calculator'] },
  { name: 'Operations', categorySlugs: ['field-operations', 'branch-cash-operations'] },
  { name: 'Intelligence', categorySlugs: ['ai-intelligent-automation'] },
  { name: 'Governance', categorySlugs: ['branch-manager-governance', 'executive-governance-analytics'] }
];

// Raw detailed features data
const rawFeaturesData = [
  // ==========================================
  // MODULE 1: Customer Onboarding, KYC & Mobile Banking
  // ==========================================
  {
    id: 'onboard-otp', number: '1.1', categorySlug: 'customer-onboarding',
    title: 'Mobile OTP Verification & Secure Activation',
    shortDescription: 'Dispatches 6-digit One-Time Password via SMS gateway to verify member mobile number and issue secure session tokens.',
    description: 'The Mobile OTP Verification module acts as the frontline identity validator during digital customer onboarding. Upon entering a registered mobile number, the system triggers a rate-limited 6-digit cryptographic OTP via high-throughput SMS gateways. Upon successful entry, a timed JWT authentication session token is generated to proceed with profile completion.',
    roles: ['Customer', 'Field Agent'], platforms: ['Customer Mobile App', 'Field Agent App', 'Core Banking Engine'],
    capabilities: ['Dynamic 6-digit cryptographic OTP generation', 'Multi-gateway fallback SMS routing (AWS SNS / Fast2SMS)', 'Strict 180-second window rate-limiting & anti-spam defense', 'Instant JWT session token issuing upon verification'],
    workflow: [
      { step: 1, title: 'Enter Mobile Number', description: 'Customer inputs 10-digit mobile number in mobile banking app or agent terminal.' },
      { step: 2, title: 'Generate & Dispatch OTP', description: 'Core engine generates a timed 6-digit OTP and dispatches it via primary SMS gateway.' },
      { step: 3, title: 'Receive SMS Notification', description: 'Customer receives SMS containing single-use 6-digit verification code.' },
      { step: 4, title: 'Input Verification Code', description: 'Customer inputs OTP; frontend performs client-side pattern matching.' },
      { step: 5, title: 'Session Token Issued', description: 'Backend validates token, marks phone verified, and issues temporary onboarding JWT.' }
    ],
    businessValue: [
      { title: 'Security', description: 'Eliminates fake mobile activations using single-use cryptographic tokens.' },
      { title: 'Faster Onboarding', description: 'Completes mobile verification in under 5 seconds with zero human intervention.' },
      { title: 'Compliance', description: 'Creates an immutable timestamped audit log of mobile verification events.' }
    ],
    videoUrl: '/videos/VAHT-fGLK1k.mp4'
  },
  {
    id: 'onboard-profile', number: '1.2', categorySlug: 'customer-onboarding',
    title: 'Digital Customer Profile & Branch Assignment',
    shortDescription: 'Captures member demographic details, primary home branch association, secure PIN setup, and issues unique Member ID.',
    description: 'Captures essential member metadata including full legal name, date of birth, gender, email address, home branch assignment, and nominee details. Simultaneously creates a secure 4-digit transaction PIN encrypted with bcrypt salted hashes.',
    roles: ['Customer', 'Field Agent', 'Branch Manager'], platforms: ['Customer Mobile App', 'Field Agent App', 'Manager Dashboard'],
    capabilities: ['Demographic detail capture with automated field validation', 'Automatic home branch geolocation assignment', 'Bcrypt encrypted 4-digit transaction PIN creation', 'Nominee & relationship declaration module'],
    workflow: [
      { step: 1, title: 'Capture Demographics', description: 'Enter legal name, DOB, email, address, and nominee information.' },
      { step: 2, title: 'Assign Home Branch', description: 'Select nearest cooperative branch location from regional directory.' },
      { step: 3, title: 'Configure 4-Digit PIN', description: 'Customer sets secure 4-digit transaction PIN with double confirmation.' },
      { step: 4, title: 'Generate Member ID', description: 'System issues permanent unique Fivopay Member ID (e.g. FIVO-MBR-2026-8912).' }
    ],
    businessValue: [
      { title: 'Structured Data', description: 'Standardizes customer profiles across all digital and branch channels.' },
      { title: 'Branch Alignment', description: 'Maps every member to an operating home branch for localized portfolio tracking.' }
    ],
    videoUrl: '/videos/VAHT-fGLK1k.mp4'
  },
  {
    id: 'onboard-digilocker', number: '1.3', categorySlug: 'customer-onboarding',
    title: 'India Domestic e-KYC — DigiLocker Aadhaar & PAN',
    shortDescription: 'Automates paperless identity verification using official Government DigiLocker e-KYC integration for Aadhaar and PAN.',
    description: 'Seamlessly fetches government-verified KYC document artifacts directly from DigiLocker APIs. Validates Aadhaar demographic data, photograph, and PAN tax registration details in real-time, assigning a verified status without paper submission.',
    roles: ['Customer', 'Field Agent', 'Branch Manager'], platforms: ['Customer Mobile App', 'Field Agent App', 'Manager Dashboard', 'Core Banking Engine'],
    capabilities: ['Direct OAuth2 integration with Government DigiLocker vault', 'Real-time NSDL PAN verification & name-match scoring', 'Automated Aadhaar XML parsing and photo extraction', 'Instant Full KYC badge assignment'],
    workflow: [
      { step: 1, title: 'Initiate DigiLocker Auth', description: 'Customer redirects to official DigiLocker consent screen.' },
      { step: 2, title: 'UIDAI Aadhaar Fetch', description: 'System retrieves signed Aadhaar e-KYC XML package and facial photo.' },
      { step: 3, title: 'NSDL PAN Match', description: 'Verifies PAN number against NSDL database and calculates fuzzy name match.' },
      { step: 4, title: 'Verification Completed', description: 'KYC status updated to Verified on central member ledger.' }
    ],
    businessValue: [
      { title: 'Paperless', description: 'Eliminates physical xerox collection, storage cost, and manual document review.' },
      { title: 'RBI Compliance', description: 'Fulfills Indian regulatory standards for video/e-KYC paperless verification.' }
    ],
    videoUrl: '/videos/VAHT-fGLK1k.mp4'
  },
  {
    id: 'onboard-intl-kyc', number: '1.4', categorySlug: 'customer-onboarding',
    title: 'International e-KYC — Passport & National ID Track',
    shortDescription: 'Supports global cross-border member onboarding with international passport, national ID, and driving licence document processing.',
    description: 'Enables NRI and international cooperative members to complete identity verification by uploading international passports, state driver licences, or national identity cards. Employs OCR text extraction and MRZ zone validation.',
    roles: ['Customer', 'Branch Manager'], platforms: ['Customer Mobile App', 'Manager Dashboard'],
    capabilities: ['Passport MRZ (Machine Readable Zone) checksum parser', 'Multi-country National ID document scanner', 'Automated document expiry check', 'Manager manual approval queue for international edge cases'],
    workflow: [
      { step: 1, title: 'Select Country & Document', description: 'Choose issuing country and document type (Passport, Driving License, National ID).' },
      { step: 2, title: 'Capture Front/Back Image', description: 'Upload high-resolution front and back photos of the identity document.' },
      { step: 3, title: 'MRZ / OCR Extraction', description: 'AI vision extracts passport number, expiry date, nationality, and birth date.' },
      { step: 4, title: 'Compliance Approval', description: 'Branch manager reviews international KYC payload and marks account approved.' }
    ],
    businessValue: [
      { title: 'Global Reach', description: 'Allows diaspora and international members to join domestic cooperatives seamlessly.' }
    ],
    videoUrl: '/videos/VAHT-fGLK1k.mp4'
  },
  {
    id: 'onboard-liveness', number: '1.5', categorySlug: 'customer-onboarding',
    title: 'Biometric Facial Liveness & Anti-Spoofing Verification',
    shortDescription: 'Live camera selfie scanner with edge detection, liveness movement checks, and anti-spoofing facial recognition.',
    description: 'Captures live facial biometrics via smartphone camera. Integrates AI facial liveness checks (blink and head rotation movement) that compare a live selfie against the identity document photograph to prevent impersonation identity fraud.',
    roles: ['Customer', 'Field Agent'], platforms: ['Customer Mobile App', 'Field Agent App'],
    capabilities: ['Automated perspective correction and edge crop', 'Facial liveness verification (blink / head movement check)', 'Facial match percentage calculator against ID photo', 'Encrypted cloud storage submission'],
    workflow: [
      { step: 1, title: 'Snap Document Image', description: 'Field agent or customer captures document using camera with auto-framing.' },
      { step: 2, title: 'Perform Liveness Selfie', description: 'Customer performs live facial movement check in front of camera.' },
      { step: 3, title: 'Facial Biometric Match', description: 'AI compares live selfie against ID photo, returning confidence percentage.' },
      { step: 4, title: 'Upload to Secure Vault', description: 'Document encrypted and saved to AWS S3 / Cloud Storage KYC bucket.' }
    ],
    businessValue: [
      { title: 'Anti-Spoofing', description: 'Prevents identity impersonation using advanced biometrics and liveness detection.' }
    ],
    videoUrl: '/videos/VAHT-fGLK1k.mp4'
  },
  {
    id: 'mobile-app-self-service', number: '1.6', categorySlug: 'customer-onboarding',
    title: 'Customer Self-Service Mobile Banking Suite',
    shortDescription: 'Full-featured iOS & Android mobile banking portal for members to track balances, download passbooks, and initiate transfers.',
    description: 'Empowers cooperative members with a 24/7 self-service mobile banking application. Members can inspect live account balances, generate e-Passbook statements, transfer funds, manage deposit portfolios, and submit credit applications anytime.',
    roles: ['Customer'], platforms: ['Customer Mobile App'],
    capabilities: ['Biometric fingerprint & FaceID login', 'Real-time multi-account dashboard view', 'Instant e-Passbook PDF & Excel statement generation', 'Push notification alerts for all credit & debit transactions'],
    workflow: [
      { step: 1, title: 'Biometric Auth', description: 'Member logs in with fingerprint or FaceID.' },
      { step: 2, title: 'Dashboard Overview', description: 'Inspects savings, deposit, and active loan balances.' },
      { step: 3, title: 'Self-Service Action', description: 'Initiates transfer, downloads statement, or checks EMI schedule.' }
    ],
    businessValue: [
      { title: 'Reduced Branch Footfall', description: 'Cuts physical branch visits by up to 70% by empowering member self-service.' }
    ],
    videoUrl: '/videos/VAHT-fGLK1k.mp4'
  },
  {
    id: 'onboard-help-desk', number: '1.7', categorySlug: 'customer-onboarding',
    title: 'Member Support Tickets & Referral Reward Engine',
    shortDescription: 'Enables members to raise digital support tickets (e.g. duplicate passbook, address change), track SLA timers, and earn referral rewards.',
    description: 'Provides in-app support ticketing and member referral tracking. Members can raise service queries, upload proof documents, track resolution countdowns, and receive saving cashback rewards for referring new active members.',
    roles: ['Customer', 'Branch Manager'], platforms: ['Customer Mobile App', 'Manager Dashboard'],
    capabilities: ['Support ticket creation with SLA countdown timer', 'Categorization tags (Passbook, KYC, Saving, Loan, Equity)', 'Member referral link generator & automated cashback credit', 'Branch manager ticket assignment & resolution queue'],
    workflow: [
      { step: 1, title: 'Raise Support Ticket', description: 'Customer selects issue category and submits request.' },
      { step: 2, title: 'SLA Timer Starts', description: 'System assigns ticket ID (e.g. TCK-2026-4401) and routes to branch.' },
      { step: 3, title: 'Resolution & Referral Reward', description: 'Manager resolves ticket; referral bonuses credited upon member onboarding.' }
    ],
    businessValue: [
      { title: 'Customer Satisfaction', description: 'Ensures sub-24h support ticket resolution and incentivizes viral organic member growth.' }
    ],
    videoUrl: '/videos/VAHT-fGLK1k.mp4'
  },

  // ==========================================
  // MODULE 2: Payments, Money Movement & Gateway Infra
  // ==========================================
  {
    id: 'pay-saving-funding', number: '2.1', categorySlug: 'payments-money-movement',
    title: 'Saving Top-Up & Multi-Source Funding Engine',
    shortDescription: 'Add funds to digital saving balance via NPCI UPI, debit cards, netbanking, or branch counter cash deposit.',
    description: 'Enables members to top up their Fivopay digital saving balance using multiple payment channels, ensuring immediate liquidity for daily transactions and bill payments.',
    roles: ['Customer', 'Cashier'], platforms: ['Customer Mobile App', 'Manager Dashboard', 'Payment Infra'],
    capabilities: ['Multi-channel saving top-up engine', 'Zero-fee UPI saving loading', 'Instant webhook balance reconciliation', 'Cashier desk physical cash top-up'],
    workflow: [
      { step: 1, title: 'Select Top-Up Mode', description: 'Choose UPI, Netbanking, Card, or Branch Cash deposit.' },
      { step: 2, title: 'Authorize Payment', description: 'Enter UPI PIN or authorize via gateway.' },
      { step: 3, title: 'Balance Credited', description: 'Saving balance updated instantly with notification.' }
    ],
    businessValue: [
      { title: 'Stored Liquidity', description: 'Provides stored-value liquidity for seamless instant transactions.' }
    ],
    videoUrl: '/videos/VAHT-UFOGpM.mp4'
  },
  {
    id: 'pay-p2p-qr', number: '2.2', categorySlug: 'payments-money-movement',
    title: 'P2P Fund Transfers & Merchant QR Payments',
    shortDescription: 'Scan retail BharatQR / UPI QR codes or transfer money using mobile numbers with sub-3 second median settlement.',
    description: 'Direct peer-to-peer (P2P) fund transfer and merchant QR payment engine. Members can scan any store QR code or enter a member phone number for zero-latency money movement.',
    roles: ['Customer', 'Field Agent'], platforms: ['Customer Mobile App', 'Field Agent App'],
    capabilities: ['Dynamic BharatQR & UPI QR scanner', 'Sub-3 second median transaction settlement', 'Saved contacts & frequent payees directory', 'Instant payment confirmation digital receipt'],
    workflow: [
      { step: 1, title: 'Scan Merchant QR', description: 'Point camera at merchant QR code or enter phone number.' },
      { step: 2, title: 'Enter Amount & PIN', description: 'Specify payment amount and enter 4-digit transaction PIN.' },
      { step: 3, title: 'Instant Transfer', description: 'Funds transferred instantly to merchant with SMS advice.' }
    ],
    businessValue: [
      { title: 'Merchant Outreach', description: 'Expands digital merchant payment footprint across local cooperative ecosystems.' }
    ],
    videoUrl: '/videos/VAHT-UFOGpM.mp4'
  },
  {
    id: 'pay-gateway-infra', number: '2.3', categorySlug: 'payments-money-movement',
    title: 'PA / PG / PPI Payment Infrastructure & White-Label APIs',
    shortDescription: 'Enterprise Payment Aggregator (PA), Payment Gateway (PG), and Prepaid Payment Instrument (PPI) licensing & API engine.',
    description: 'Manages enterprise payment integrations connecting NPCI UPI, card networks, banking APIs, settlement pipelines, and PPI saving/card issuance engines for white-label partners.',
    roles: ['Admin', 'Core Banking Engine'], platforms: ['Payment Infra', 'Manager Dashboard'],
    capabilities: ['Payment Aggregator (PA) multi-source automated settlement', 'Payment Gateway (PG) fast 3DS transaction processing', 'Prepaid Payment Instrument (PPI) saving/card issuance', 'White-Label PA, PG, and PPI infrastructure APIs for partner fintechs'],
    workflow: [
      { step: 1, title: 'Process Payment / Issue PPI', description: 'Executes gateway authorization or provisions prepaid saving.' },
      { step: 2, title: 'Automated Settlement', description: 'Batches daily transactions and settles to merchant bank accounts.' }
    ],
    businessValue: [
      { title: 'Regulatory License', description: 'Builds institutional trust and credibility with RBI-compliant PA/PG/PPI architecture.' }
    ],
    videoUrl: '/videos/VAHT-UFOGpM.mp4'
  },
  {
    id: 'pay-cash-verification-code', number: '2.4', categorySlug: 'payments-money-movement',
    title: 'Digital Cash Withdrawal Verification Code',
    shortDescription: 'Generates a 30-minute secure 6-digit withdrawal token (CW-781920) for debit-cardless physical cash dispensing at branch cashier counters.',
    description: 'Enables cardless cash withdrawals at any cooperative branch counter. Members request cash in app, generating a single-use 6-digit cryptographic verification code presented to the branch teller.',
    roles: ['Customer', 'Cashier'], platforms: ['Customer Mobile App', 'Manager Dashboard'],
    capabilities: ['Single-use 6-digit timed withdrawal code generation', 'Strict 30-minute expiration window rate limiting', 'Instant cashier teller verification & saving debiting', 'Real-time SMS advice upon counter cash receipt'],
    workflow: [
      { step: 1, title: 'Request Withdrawal Code', description: 'Customer inputs amount in app and requests counter cash code.' },
      { step: 2, title: 'Present Code at Desk', description: 'Presents 6-digit code to branch cashier teller.' },
      { step: 3, title: 'Cash Dispensed', description: 'Cashier validates code, dispenses cash, and saving is debited.' }
    ],
    businessValue: [
      { title: 'Cardless Convenience', description: 'Eliminates plastic ATM debit card issuing costs while securing counter cash withdrawals.' }
    ],
    videoUrl: '/videos/VAHT-UFOGpM.mp4'
  },

  // ==========================================
  // MODULE 3: Auto-Sweep Smart Savings (Dedicated)
  // ==========================================
  {
    id: 'savings-auto-sweep-threshold', number: '3.1', categorySlug: 'auto-sweep-savings',
    title: 'Saving Balance Threshold Configuration',
    shortDescription: 'User configures maximum idle saving balance (e.g. ₹10,000) for automated yield optimization.',
    description: 'Configures custom saving threshold limits. Any surplus funds accumulated above the threshold are automatically swept into high-yield term deposit units.',
    roles: ['Customer'], platforms: ['Customer Mobile App'],
    capabilities: ['Custom threshold balance slider (e.g. ₹10,000 limit)', 'Automated sweep frequency rules', 'Real-time surplus balance visualizer'],
    workflow: [
      { step: 1, title: 'Set Threshold Limit', description: 'Member sets saving threshold limit in mobile app.' }
    ],
    businessValue: [
      { title: 'Yield Maximization', description: 'Ensures idle member money is automatically invested into interest-bearing products.' }
    ],
    videoUrl: '/videos/VAHT-cjuGd0.mp4'
  },
  {
    id: 'savings-auto-sweep-engine', number: '3.2', categorySlug: 'auto-sweep-savings',
    title: 'Automated Sweep & LIFO Reverse Sweep Engine',
    shortDescription: 'Excess balance automatically moved to short-term FD units; reverse swept LIFO when saving expenses occur.',
    description: 'Automated yield optimization engine that sweeps surplus saving balances into short-term FD units overnight, with LIFO reverse sweeps when saving expenses occur.',
    roles: ['Customer', 'Core Banking Engine'], platforms: ['Customer Mobile App', 'Core Banking Engine'],
    capabilities: ['Automatic FD unit creation for surplus funds', 'LIFO (Last-In-First-Out) reverse sweep liquidity protection', 'Real-time interest earned optimization dashboard'],
    workflow: [
      { step: 1, title: 'Auto-Sweep Surplus', description: 'Engine sweeps excess balance into short-term FD units overnight.' },
      { step: 2, title: 'Reverse Sweep Liquidity', description: 'When saving dips below threshold, engine reverse sweeps FD units automatically.' }
    ],
    businessValue: [
      { title: 'Maximized Interest', description: 'Earns higher term deposit rates while keeping 100% daily saving liquidity.' }
    ],
    videoUrl: '/videos/VAHT-cjuGd0.mp4'
  },

  // ==========================================
  // MODULE 4: Fixed & Recurring Deposits (FD/RD) (Dedicated)
  // ==========================================
  {
    id: 'fdrd-origination', number: '4.1', categorySlug: 'fixed-recurring-deposits',
    title: 'Term Deposit Origination — Fixed & Recurring Deposits',
    shortDescription: 'High-return long-term investment solutions with automated monthly contributions, compounding options, and digital certificates.',
    description: 'Offers comprehensive term deposit origination workflows for Fixed Deposits (FD) and Recurring Deposits (RD). Computes compound interest automatically and issues digital deposit certificates.',
    roles: ['Customer', 'Field Agent', 'Branch Manager'], platforms: ['Customer Mobile App', 'Field Agent App', 'Manager Dashboard'],
    capabilities: ['Senior citizen interest rate bonus (+0.50% p.a.)', 'Automated monthly RD standing instruction debits', 'Digital FD/RD certificate generation & PDF download'],
    workflow: [
      { step: 1, title: 'Select Deposit Product', description: 'Choose Fixed Deposit or Recurring Deposit.' },
      { step: 2, title: 'Configure Tenure & Amount', description: 'Select tenure (3 to 120 months) and payout frequency.' },
      { step: 3, title: 'Instant Booking', description: 'Debits saving balance and issues digital deposit certificate.' }
    ],
    businessValue: [
      { title: 'Stable Liability Capital', description: 'Secures long-term stable liability funding for cooperative lending portfolio.' }
    ],
    videoUrl: '/videos/VAHT-ZdNxig.mp4'
  },
  {
    id: 'fdrd-maturity-payout', number: '4.2', categorySlug: 'fixed-recurring-deposits',
    title: 'Deposit Maturity Settlement & Auto-Renewal',
    shortDescription: 'Automated maturity calculation, principal plus interest payout crediting, and auto-renewal options.',
    description: 'Manages deposit maturity settlements. Automatically calculates compound interest accrued, credits maturity proceeds to member saving account, or executes auto-renewal based on standing instructions.',
    roles: ['Customer', 'Branch Manager'], platforms: ['Customer Mobile App', 'Manager Dashboard'],
    capabilities: ['Automated maturity date calculator', 'Auto-renewal principal + interest option', 'Premature withdrawal penalty calculator'],
    workflow: [
      { step: 1, title: 'Maturity Reached', description: 'System triggers automated maturity payout.' },
      { step: 2, title: 'Credit Payout', description: 'Credits principal and interest directly to member saving account.' }
    ],
    businessValue: [
      { title: 'Automated Settlement', description: 'Eliminates manual cheque processing for deposit maturities.' }
    ],
    videoUrl: '/videos/VAHT-ZdNxig.mp4'
  },
  {
    id: 'fdrd-pigmy-micro-deposits', number: '4.3', categorySlug: 'fixed-recurring-deposits',
    title: 'Pigmy Daily Micro-Deposit Collection Scheme',
    shortDescription: 'Doorstep daily micro-savings collection engine for market vendors and shopkeepers with instant SMS receipt advice.',
    description: 'Powers daily Pigmy doorstep micro-savings collection schemes. Field agents visit local market vendors daily, collect micro-cash deposits, print Bluetooth thermal receipts, and credit savings accounts instantly.',
    roles: ['Field Agent', 'Cashier', 'Customer'], platforms: ['Field Agent App', 'Manager Dashboard'],
    capabilities: ['Daily Pigmy collection ledger for field agents', 'Bluetooth thermal receipt printing & instant SMS notification', 'GPS location check-in for collection verification', 'End-of-day Pigmy collection batch reconciliation'],
    workflow: [
      { step: 1, title: 'Daily Market Visit', description: 'Field agent visits merchant shop with mobile app & thermal printer.' },
      { step: 2, title: 'Collect Cash & Print', description: 'Receives daily micro-cash (e.g. ₹200) and prints instant physical receipt.' },
      { step: 3, title: 'Batch Clearance', description: 'Credits member Pigmy ledger and settles till at branch cashier.' }
    ],
    businessValue: [
      { title: 'Micro-Liquidity Mobilization', description: 'Mobilizes millions in daily micro-savings from informal commercial markets.' }
    ],
    videoUrl: '/videos/VAHT-ZdNxig.mp4'
  },

  // ==========================================
  // MODULE 5: Goal-Based Micro-Savings ("Gullak") (Dedicated)
  // ==========================================
  {
    id: 'gullak-vault-create', number: '5.1', categorySlug: 'micro-savings-gullak',
    title: 'Dedicated Goal Piggy Vaults (Festival, Emergency, Trip)',
    shortDescription: 'Create dedicated goal piggy vaults with target dates and visual progress tracking.',
    description: 'Enables members to create dedicated micro-savings piggy vaults for specific goals like Emergency Fund, Diwali Festival, Vehicle Purchase, or Family Trip.',
    roles: ['Customer'], platforms: ['Customer Mobile App'],
    capabilities: ['Dedicated goal piggy vaults (Emergency, Festival, Vehicle, Trip)', 'Visual progress tracking bars & milestone badges', 'Custom target date & amount calculator'],
    workflow: [
      { step: 1, title: 'Create Goal Vault', description: 'Select goal category, target amount, and target date.' }
    ],
    businessValue: [
      { title: 'Disciplined Habits', description: 'Encourages micro-savings discipline through visual progress goals.' }
    ],
    videoUrl: '/videos/VAHT-Ta_AWk.mp4'
  },
  {
    id: 'gullak-auto-sweep', number: '5.2', categorySlug: 'micro-savings-gullak',
    title: 'Automated Micro-Sweeps & Digital Vault Locking',
    shortDescription: 'Automated daily ₹50/₹100 micro-debits into goal vaults with digital lock protection.',
    description: 'Automatically sweeps small daily or weekly amounts from primary saving into goal vaults, locking funds until the target date is reached to prevent early impulse spending.',
    roles: ['Customer'], platforms: ['Customer Mobile App'],
    capabilities: ['Automated daily/weekly micro-sweeps (₹20, ₹50, ₹100)', 'Digital vault lock protection to prevent early impulse break', 'Emergency vault unlock with verification PIN'],
    workflow: [
      { step: 1, title: 'Auto Micro-Debit', description: 'System debits micro-amount daily into goal vault.' },
      { step: 2, title: 'Vault Unlocks', description: 'Vault unlocks automatically upon target date completion.' }
    ],
    businessValue: [
      { title: 'Customer Retention', description: 'Unlocks recurring micro-liquidity accumulation and drives long-term retention.' }
    ],
    videoUrl: '/videos/VAHT-Ta_AWk.mp4'
  },

  // ==========================================
  // MODULE 6: Member Shares & Equity Capital Management
  // ==========================================
  {
    id: 'eq-share-catalog', number: '6.1', categorySlug: 'member-shares-equity',
    title: 'Member Share Capital Subscription & Allotment',
    shortDescription: 'Browse cooperative share capital packages, buy equity shares digitally, and issue digital share certificates.',
    description: 'Manages member equity ownership in cooperative financial institutions. Members can purchase share packages directly using their saving account or bank account, with instant entry in the central share allotment register.',
    roles: ['Customer', 'Branch Manager', 'Chairman / Admin'], platforms: ['Customer Mobile App', 'Manager Dashboard'],
    capabilities: ['Share package pricing tier grid', 'Instant saving debit for share subscription', 'Automated share certificate PDF generation', 'Share allotment register entry & ledger tracking'],
    workflow: [
      { step: 1, title: 'Browse Share Tiers', description: 'Inspect available share classes and face values.' },
      { step: 2, title: 'Subscribe & Pay', description: 'Select share count and authorize saving payment.' },
      { step: 3, title: 'Digital Allotment', description: 'Share register updated and certificate issued instantly.' }
    ],
    businessValue: [
      { title: 'Capital Tiering', description: 'Digitizes member share capital allocation across thousands of cooperative shareholders.' }
    ],
    videoUrl: '/videos/VAHT-ey1CcM.mp4'
  },
  {
    id: 'eq-dividend-distribution', number: '6.2', categorySlug: 'member-shares-equity',
    title: 'Automated Dividend Calculation & Distribution',
    shortDescription: 'Computes annual cooperative dividend payouts based on share equity holdings and credits member savings.',
    description: 'Automates annual dividend calculation and distribution across all active cooperative members based on their share capital ratio and board-approved dividend percentage.',
    roles: ['Chairman / Admin', 'Branch Manager', 'Customer'], platforms: ['Manager Dashboard', 'Customer Mobile App'],
    capabilities: ['Pro-rata dividend calculation engine', 'Board resolution dividend percentage setup', 'Bulk automated saving dividend crediting', 'Dividend tax deduction (TDS) statement generation'],
    workflow: [
      { step: 1, title: 'Set Dividend Rate', description: 'Chairman configures approved dividend rate (e.g. 8% p.a.).' },
      { step: 2, title: 'Compute Share Payouts', description: 'Engine calculates exact dividend for every shareholder.' },
      { step: 3, title: 'Bulk Crediting', description: 'Credits dividend payouts directly into member savings with SMS advice.' }
    ],
    businessValue: [
      { title: 'Automated Dividend Payouts', description: 'Eliminates manual dividend cheque printing and distribution delays.' }
    ],
    videoUrl: '/videos/VAHT-ey1CcM.mp4'
  },

  // ==========================================
  // MODULE 7: Loan Origination, Underwriting, Gold Vault & Repayment Flow
  // ==========================================
  {
    id: 'loan-application-origination', number: '7.1', categorySlug: 'loan-credit-lifecycle',
    title: 'Loan Application & Origination',
    shortDescription: 'Multi-category credit origination covering Personal, Business, Agriculture, and Gold Loans with automated estimated EMI calculation.',
    description: 'Enables borrowers and branch agents to originate credit applications across Personal, Business, Agriculture, and Gold loan products. Evaluates customer KYC verification, captures loan purpose and requested tenure, and generates an initial loan dossier with real-time estimated EMI calculations.',
    roles: ['Customer', 'Field Agent', 'Branch Manager'], platforms: ['Customer Mobile App', 'Field Agent App', 'Manager Dashboard'],
    capabilities: [
      'Multi-product loan origination (Personal, Business, Agriculture, Gold Loans)',
      'Real-time estimated EMI calculation engine based on principal and tenure',
      'Automated KYC verification check prior to application submission',
      'Flexible tenure and repayment frequency selection (Monthly, Bi-weekly, Weekly)'
    ],
    workflow: [
      { step: 1, title: 'Select Product & Parameters', description: 'Customer or agent selects loan product, principal amount, tenure, and repayment frequency.' },
      { step: 2, title: 'KYC & Eligibility Verification', description: 'System validates KYC status, Aadhaar/PAN tokens, and borrower credit profile.' },
      { step: 3, title: 'Originate Loan Dossier', description: 'Engine creates loan dossier with unique Loan ID (LN-YYYY-XXXXXX) and initial estimated EMI schedule.' }
    ],
    businessValue: [
      { title: 'Instant Application Turnaround', description: 'Reduces loan application submission time from days to under 2 minutes.' }
    ],
    videoUrl: '/videos/VAHT-d8a-SA.mp4'
  },
  {
    id: 'loan-jlg-group', number: '7.2', categorySlug: 'loan-credit-lifecycle',
    title: 'Joint Liability Group (JLG Loan)',
    shortDescription: 'Community and peer-guaranteed microfinance group creation and collective credit liability management.',
    description: 'Facilitates community-based Joint Liability Group (JLG) loan origination for microfinance and rural self-help groups. Links group leaders and peer members together, enabling shared mutual guarantee and collective credit underwriting.',
    roles: ['Customer', 'Field Agent', 'Branch Manager'], platforms: ['Customer Mobile App', 'Field Agent App', 'Manager Dashboard'],
    capabilities: [
      'Peer group formation with designated group leader and member IDs',
      'Joint liability mutual guarantee tracking across all group participants',
      'Group-level credit ceiling and cross-guarantee risk assessment',
      'Doorstep group biometric verification for microfinance circles'
    ],
    workflow: [
      { step: 1, title: 'Register JLG Group', description: 'Field agent or leader inputs group name, leader ID, and member user IDs.' },
      { step: 2, title: 'Peer Mutual Guarantee', description: 'Group members verify mutual consent and accept collective liability terms.' },
      { step: 3, title: 'Group Credit Sanction', description: 'Credit officer audits group repayment capacity and issues group sanction.' }
    ],
    businessValue: [
      { title: 'High Recovery Assurance', description: 'Leverages social collateral and peer accountability to achieve 99%+ recovery rates.' }
    ],
    videoUrl: '/videos/VAHT-d8a-SA.mp4'
  },
  {
    id: 'loan-underwriting-approval', number: '7.3', categorySlug: 'loan-credit-lifecycle',
    title: 'Loan Underwriting, AI Risk Analysis & Approval',
    shortDescription: 'Automated AI credit risk scoring, credit officer verification, and multi-tier executive sanctioning or rejection.',
    description: 'Integrates machine learning credit risk scoring with human credit officer underwriting. Evaluates borrower banking telemetry, repayment probabilities, and collateral valuation, empowering officers and executives to sanction or reject with full audit remarks.',
    roles: ['Credit Officer', 'Branch Manager', 'Chairman / Admin'], platforms: ['Manager Dashboard'],
    capabilities: [
      'AI-driven creditworthiness scoring & default probability model (GET /loan/analyze/:id)',
      'Credit officer document verification and field check attestation (PATCH /loan/verify-loan/:id)',
      'Multi-tier executive approval with custom interest rate & amount sanctions (PATCH /loan/approve-loan/:id)',
      'Audit-trailed rejection workflow with detailed reason remarks (PATCH /loan/reject-loan/:id)'
    ],
    workflow: [
      { step: 1, title: 'AI Risk Analysis', description: 'Algorithmic model calculates AI credit score, debt-service ratio, and default probability.' },
      { step: 2, title: 'Credit Officer Verification', description: 'Credit officer validates income proofs, collateral valuation, and attests dossier.' },
      { step: 3, title: 'Executive Sanction or Rejection', description: 'Chairman/admin approves final amount and interest rate, or logs rejection with remarks.' }
    ],
    businessValue: [
      { title: 'Proactive NPA Prevention', description: 'Minimizes bad loans and defaults through AI-backed risk profiling and strict underwriting checks.' }
    ],
    videoUrl: '/videos/VAHT-d8a-SA.mp4'
  },
  {
    id: 'loan-digital-esign', number: '7.4', categorySlug: 'loan-credit-lifecycle',
    title: 'Paperless Digital Agreement & eSign',
    shortDescription: 'Generates legally binding digital loan contracts with Aadhaar OTP and digital signature token submission.',
    description: 'Automates the legal contract binding phase without requiring paper documentation. Formats sanction terms, repayment schedules, and covenants into a legally binding digital contract, executing eSignatures via Aadhaar OTP or digital certificate tokens.',
    roles: ['Customer', 'Branch Manager', 'Legal Auditor'], platforms: ['Customer Mobile App', 'Manager Dashboard'],
    capabilities: [
      'Automated digital loan agreement and sanction contract generation (POST /esign/generate-contract)',
      'Paperless eSign integration with digital signature image/token submission (POST /esign/submit-signature)',
      'Cryptographic signature verification and tamper-proof PDF sealing',
      'Instant contract archival in secure document vault with immutable audit logs'
    ],
    workflow: [
      { step: 1, title: 'Generate Digital Contract', description: 'Engine builds loan agreement with approved amount, tenure, interest rate, and covenants.' },
      { step: 2, title: 'Submit eSignature', description: 'Borrower reviews terms and submits digital signature image or Aadhaar OTP token.' },
      { step: 3, title: 'Legally Bound Archival', description: 'Contract locked with SHA-256 hash and archived for statutory audit compliance.' }
    ],
    businessValue: [
      { title: '100% Paperless Legal Compliance', description: 'Cuts loan contract turnaround from 3 days to under 60 seconds with full legal enforceability.' }
    ],
    videoUrl: '/videos/VAHT-d8a-SA.mp4'
  },
  {
    id: 'loan-cashier-disbursement', number: '7.5', categorySlug: 'loan-credit-lifecycle',
    title: 'Cashier Allocation & Disbursement',
    shortDescription: 'Assigns sanctioned loans to branch cashier counter desks or initiates instant wallet and bank disbursals.',
    description: 'Controls the final mile of loan funding. Managers allocate verified loans to specific cashier desks for physical counter cash payout or trigger automated electronic disbursements directly into customer savings accounts or wallets.',
    roles: ['Branch Manager', 'Cashier', 'Customer'], platforms: ['Manager Dashboard', 'Customer Mobile App'],
    capabilities: [
      'Cashier employee desk allocation and queue management (PATCH /loan/allocate-cashier/:id)',
      'Instant electronic loan disbursement to saving account / wallet credit (PATCH /loan/disburse-loan/:id)',
      'Physical counter cash dispensing verification with dual cashier approval',
      'Immediate general ledger entry posting and loan account activation'
    ],
    workflow: [
      { step: 1, title: 'Allocate Cashier Desk', description: 'Manager assigns sanctioned loan to specific cashier employee ID.' },
      { step: 2, title: 'Execute Disbursement', description: 'Cashier dispenses cash or triggers automated electronic wallet/account credit.' },
      { step: 3, title: 'Ledger Post & Activation', description: 'System debits loan asset ledger, credits borrower account, and activates repayment schedule.' }
    ],
    businessValue: [
      { title: 'Controlled Cash Governance', description: 'Prevents unauthorized payouts and maintains dual-custody audit logs for all disbursed capital.' }
    ],
    videoUrl: '/videos/VAHT-d8a-SA.mp4'
  },
  {
    id: 'loan-emi-repayment', number: '7.6', categorySlug: 'loan-credit-lifecycle',
    title: 'Loan EMI Repayment & Restructuring',
    shortDescription: 'Complete repayment suite: EMI schedule, wallet payment, Razorpay gateway, restructuring, and agent recovery assignment.',
    description: 'Manages the active loan servicing and recovery lifecycle. Borrowers can inspect full EMI amortization schedules, execute instant wallet repayments, or pay via Razorpay gateway. Officers can adjust interest rates/tenures for restructuring, and assign field collection recovery agents for overdue loans.',
    roles: ['Customer', 'Branch Manager', 'Recovery Agent', 'Credit Officer'], platforms: ['Customer Mobile App', 'Field Agent App', 'Manager Dashboard'],
    capabilities: [
      'Real-time loan EMI schedule retrieval with principal/interest split (GET /loan-emi/schedule/:loanId)',
      'Instant self-service wallet EMI payment with automated ledger clearance (POST /loan/user/pay-loan-wallet)',
      'Integrated Razorpay payment gateway order creation & verification (POST /loan/user/create-loan-payment-order & verify-loan-payment)',
      'Loan restructuring engine for interest rate adjustments and tenure extensions (PATCH /loan/adjust-interest-rate/:id)',
      'Automated overdue recovery agent assignment with field GPS tracking (POST /loan-recovery/assign-agent)'
    ],
    workflow: [
      { step: 1, title: 'Inspect EMI Schedule', description: 'Customer checks upcoming installment dues, principal breakdown, and penalty status.' },
      { step: 2, title: 'Execute Repayment', description: 'Borrower repays via wallet deduction or Razorpay payment gateway order.' },
      { step: 3, title: 'Restructure or Recover', description: 'Credit officer can adjust interest rates, or assign overdue accounts to field recovery agents.' }
    ],
    businessValue: [
      { title: 'Maximized Collection Velocity', description: 'Multiple payment rails and recovery automation cut delinquency and NPA rates by over 40%.' }
    ],
    videoUrl: '/videos/VAHT-d8a-SA.mp4'
  },


  // ==========================================
  // MODULE 8: Interactive Loan & Interest Calculator
  // ==========================================
  {
    id: 'loan-calculator-engine', number: '8.1', categorySlug: 'loan-interest-calculator',
    title: 'Interactive Loan & Interest Calculator Engine',
    shortDescription: 'Empowers customers and field agents to model loan EMIs, interest projections, and amortization tables.',
    description: 'Provides interactive plan modeling, real-time interest rate projections, and instant loan amortization tables for personal, gold, and business credit products before submitting formal applications.',
    roles: ['Customer', 'Field Agent', 'Branch Manager'], platforms: ['Customer Mobile App', 'Field Agent App', 'Manager Dashboard'],
    capabilities: ['Interactive loan principal & tenure sliders', 'Real-time EMI & total interest split visualizer', 'Full amortization table generation with monthly breakup', 'Direct "Apply Now" action button with pre-filled parameters'],
    workflow: [
      { step: 1, title: 'Select Credit Product', description: 'Choose Personal, Gold, Business, or JLG Loan.' },
      { step: 2, title: 'Adjust Parameters', description: 'Move amount, tenure, and APR sliders.' },
      { step: 3, title: 'Apply Directly', description: 'Proceed directly to formal loan application with pre-filled values.' }
    ],
    businessValue: [
      { title: 'Transparent Decision-Making', description: 'Empowers members with transparent financial projections before committing to loans.' }
    ],
    videoUrl: '/videos/VAHT-TRH6e0.mp4'
  },
  {
    id: 'loan-amortization-breakup', number: '8.2', categorySlug: 'loan-interest-calculator',
    title: 'Real-Time Loan Amortization & Tax Benefit Projection',
    shortDescription: 'Generates month-by-month principal vs interest repayment schedules, compound interest comparisons, and exportable tax certificates.',
    description: 'Provides detailed loan repayment breakdowns. Members can inspect month-by-month principal and interest splits, compare reducing balance vs flat rate schemes, and download official tax exemption certificates.',
    roles: ['Customer', 'Field Agent'], platforms: ['Customer Mobile App', 'Field Agent App'],
    capabilities: ['Month-by-month principal & interest split breakdown', 'Interactive APR interest rate comparison', 'Exportable PDF amortization schedule & Section 24 tax certificate', 'Early foreclosure & part-payment calculator'],
    workflow: [
      { step: 1, title: 'Calculate Amortization', description: 'System projects full monthly installment table.' },
      { step: 2, title: 'Download Tax Certificate', description: 'Exports Section 24 interest certificate PDF for tax filing.' }
    ],
    businessValue: [
      { title: 'Transparency', description: 'Builds complete borrower trust through clear financial breakdown and tax statement tools.' }
    ],
    videoUrl: '/videos/VAHT-TRH6e0.mp4'
  },

  // ==========================================
  // MODULE 9: Field Operations, Doorstep Banking & Outreach
  // ==========================================
  {
    id: 'field-doorstep-onboarding', number: '9.1', categorySlug: 'field-operations',
    title: 'Doorstep Customer Onboarding & Offline KYC Outreach',
    shortDescription: 'Field Agent mobile app for offline biometric customer registration, document camera OCR, and remote area financial inclusion.',
    description: 'Empowers field agents to onboard new members in rural and unbanked areas without active internet connectivity. Agents capture customer details, parse identity documents with camera OCR, capture live photos, and securely cache encrypted registration dossiers for background synchronization upon returning to cellular network coverage.',
    roles: ['Field Agent', 'Branch Manager'], platforms: ['Field Agent App', 'Manager Dashboard'],
    capabilities: [
      'Offline customer registration and profile creation without active internet',
      'On-device camera OCR for Aadhaar, PAN, and identity documents',
      'Live selfie photo capture with local biometric validation',
      'Encrypted local dossier caching and automated background cloud sync'
    ],
    workflow: [
      { step: 1, title: 'Doorstep Customer Visit', description: 'Field agent visits prospective customer home or village booth.' },
      { step: 2, title: 'Offline KYC & OCR Capture', description: 'Enters member profile, scans ID documents, and captures live photo.' },
      { step: 3, title: 'Background Cloud Sync', description: 'Encrypted registration dossier automatically synchronizes to core ledger once online.' }
    ],
    businessValue: [
      { title: 'Rural Financial Inclusion', description: 'Enables 100% digital onboarding in remote dark zones with zero network connectivity.' }
    ],
    videoUrl: '/videos/VAHT-Xq8NdY.mp4'
  },
  {
    id: 'field-doorstep-collections', number: '9.2', categorySlug: 'field-operations',
    title: 'Doorstep Cash Repayment & Pigmy Micro-Collection',
    shortDescription: 'Field collection of loan EMIs, recurring deposits, and daily pigmy with instant Bluetooth thermal receipt printing and SMS alerts.',
    description: 'Facilitates doorstep collection of loan EMI installments, recurring deposits, and daily pigmy micro-savings directly from borrowers and merchants. Agents scan member QR codes, record cash payments, instantly print Bluetooth thermal paper receipts, and hold funds in digital Cash-in-Hand balance.',
    roles: ['Field Agent', 'Branch Manager', 'Customer'], platforms: ['Field Agent App', 'Manager Dashboard'],
    capabilities: [
      'Doorstep cash collection for Loan EMIs, Recurring Deposits, and Pigmy accounts',
      'Bluetooth thermal printer receipt generation and real-time SMS dispatch',
      'QR code scanner for instant customer and loan account lookup',
      'Real-time Cash-in-Hand wallet tracking with physical cash tally'
    ],
    workflow: [
      { step: 1, title: 'Customer Account Lookup', description: 'Agent scans borrower QR code or searches member ID.' },
      { step: 2, title: 'Collect Cash & Print Receipt', description: 'Collects cash repayment, records amount, and prints Bluetooth thermal receipt.' },
      { step: 3, title: 'Cash-in-Hand Update', description: 'System updates agent Cash-in-Hand ledger and sends instant SMS receipt to member.' }
    ],
    businessValue: [
      { title: 'Collection Velocity', description: 'Accelerates rural micro-loan and savings collections with 100% receipt transparency.' }
    ],
    videoUrl: '/videos/VAHT-Xq8NdY.mp4'
  },
  {
    id: 'field-eod-collection-submission', number: '9.3', categorySlug: 'field-operations',
    title: 'End-of-Day (EOD) Cash Handover & Branch Teller Reconciliation',
    shortDescription: 'Agent cash-in-hand handover submission to branch cashier with secure 6-digit OTP verification and automatic GL posting.',
    description: 'Manages the critical end-of-shift cash handover lifecycle. After collecting cash during doorstep visits, the agent holds funds as Cash-in-Hand. At branch closing, the agent selects payment records to submit, generating a secure 6-digit verification OTP. The branch cashier counts the physical cash, enters the OTP to verify, settling agent till balances, posting General Ledger (GL) entries (Debit Vault, Credit Accounts), and marking loan EMIs as paid.',
    roles: ['Field Agent', 'Cashier', 'Branch Manager'], platforms: ['Field Agent App', 'Manager Dashboard'],
    capabilities: [
      'Agent handover initiation aggregating collected payment record IDs (POST /initiate)',
      'Secure 6-digit verification OTP generation with configurable expiry',
      'Branch cashier counter OTP verification and physical cash count clearance (POST /verify)',
      'Automatic General Ledger (GL) posting (Debit: Vault/Cash, Credit: Customer/EMI/Deposit)',
      'Real-time branch pending submissions query (GET /branch-pending)',
      'Historical agent and branch reconciled audit trails (GET /agent-history, GET /branch-history)',
      'One-tap OTP regeneration for cashier counter assistance (POST /regenerate-otp)'
    ],
    workflow: [
      { step: 1, title: 'Agent Initiates Handover', description: 'Agent selects collected payment records in app; system aggregates cash and generates a 6-digit OTP.' },
      { step: 2, title: 'Cashier Physical Count & OTP Verification', description: 'At branch counter, Cashier counts physical cash and inputs the OTP provided by the agent.' },
      { step: 3, title: 'Reconciliation & GL Posting', description: 'System marks submission verified, posts GL entries (Debit Vault, Credit Accounts), and updates loan EMIs to Paid.' }
    ],
    businessValue: [
      { title: 'Zero Till Variance', description: 'Guarantees dual-custody physical cash reconciliation and prevents collection leakage.' }
    ],
    videoUrl: '/videos/VAHT-Xq8NdY.mp4'
  },
  {
    id: 'field-agent-collections-kpi', number: '9.4', categorySlug: 'field-operations',
    title: 'Field Agent GPS Tracking & Collection Route Optimization',
    shortDescription: 'Real-time GPS check-ins for field agents, daily collection target tracking, route optimization, and live agent location audit trails.',
    description: 'Monitors and optimizes field agent collection routes. Managers track live agent GPS check-ins, doorstep visit logs, daily collection target progress, and route maps in real time.',
    roles: ['Field Agent', 'Branch Manager'], platforms: ['Field Agent App', 'Manager Dashboard'],
    capabilities: ['Live agent GPS location check-ins during customer visits', 'Daily collection target vs actual progress bar', 'Route map optimization for daily customer visits', 'Geofenced visit audit trail logging'],
    workflow: [
      { step: 1, title: 'Start Daily Route', description: 'Field agent opens app to view optimized daily customer visit list.' },
      { step: 2, title: 'GPS Visit Check-in', description: 'App logs GPS coordinates upon arrival at customer location.' },
      { step: 3, title: 'Track Real-Time Target', description: 'Dashboard updates daily collection progress automatically.' }
    ],
    businessValue: [
      { title: 'Field Efficiency', description: 'Increases agent daily customer visit capacity by 45% with optimized routing.' }
    ],
    videoUrl: '/videos/VAHT-Xq8NdY.mp4'
  },

  // ==========================================
  // MODULE 10: Branch Cashier Operations
  // ==========================================
  {
    id: 'branch-otc-deposit', number: '10.1', categorySlug: 'branch-cash-operations',
    title: 'Over-The-Counter (OTC) Cash Deposit',
    shortDescription: 'Walk-in customer cash deposit at branch counter with instant balance credit and GL journal posting.',
    description: 'Allows walk-in customers to deposit physical cash directly into their Savings/Current accounts at the branch counter. The cashier searches customer records, validates identity, counts physical cash, and executes instant account credit while updating the counter cash drawer and General Ledger (GL).',
    roles: ['Cashier', 'Branch Manager', 'Admin'], platforms: ['Manager Dashboard'],
    capabilities: [
      'Counter cash deposit processing for walk-in account holders (POST /deposit/cashier-deposit)',
      'Instant account balance credit (accountBalance) with physical cash receipt generation',
      'Counter cash drawer till increment tracking in real time',
      'Automated General Ledger (GL) journal entry posting categorized as branch_deposit'
    ],
    workflow: [
      { step: 1, title: 'Customer Identification', description: 'Customer presents cash and Account/Customer ID or phone at counter.' },
      { step: 2, title: 'Cash Count & Verification', description: 'Cashier validates identity, verifies physical currency notes, and enters deposit amount.' },
      { step: 3, title: 'Instant Credit & Receipt', description: 'System credits balance, updates drawer cash balance, and logs branch_deposit transaction.' }
    ],
    businessValue: [
      { title: 'Instant Liquidity Inflow', description: 'Provides zero-delay deposit processing for branch walk-ins with real-time audit logs.' }
    ],
    videoUrl: '/videos/VAHT-axQ83g.mp4'
  },
  {
    id: 'branch-otc-withdrawal', number: '10.2', categorySlug: 'branch-cash-operations',
    title: 'Over-The-Counter (OTC) Cash Withdrawal',
    shortDescription: 'Immediate counter cash payout to walk-in customers with limit checks and cash drawer debit.',
    description: 'Enables immediate counter cash payouts to walk-in customers without prior mobile booking. The cashier validates identity, verifies available account balance and daily withdrawal threshold limits, debits the account as branch_withdrawal, and dispenses physical cash from the counter drawer.',
    roles: ['Cashier', 'Branch Manager', 'Admin'], platforms: ['Manager Dashboard'],
    capabilities: [
      'Immediate counter cash withdrawal execution for walk-in members (POST /deposit/cashier-withdrawal)',
      'Real-time available balance and daily cash withdrawal limit checks',
      'Automated counter cash drawer till deduction',
      'Transaction categorization as branch_withdrawal with instant member SMS notification'
    ],
    workflow: [
      { step: 1, title: 'Request & Balance Verification', description: 'Customer requests counter withdrawal; cashier verifies identity, balance, and daily limits.' },
      { step: 2, title: 'Account Debit', description: 'Cashier enters amount; system debits customer account and logs branch_withdrawal debit.' },
      { step: 3, title: 'Cash Payout', description: 'Physical cash is dispensed from drawer to customer and printed receipt is issued.' }
    ],
    businessValue: [
      { title: 'Counter Liquidity Governance', description: 'Ensures strict adherence to KYC and withdrawal limits while maintaining accurate drawer logs.' }
    ],
    videoUrl: '/videos/VAHT-axQ83g.mp4'
  },
  {
    id: 'branch-code-cash-pickup', number: '10.3', categorySlug: 'branch-cash-operations',
    title: 'In-Branch Cash Pickup via 4-Digit Request Code',
    shortDescription: 'Pre-booked app cash withdrawals dispensed at counter via secure 4-digit token code.',
    description: 'Processes pre-booked cash withdrawals initiated on customer mobile banking apps. When a customer locks a withdrawal amount in-app, a secure 4-digit code is generated. At the counter, the cashier validates the code against the branch queue, checks balance lock, and dispenses physical cash.',
    roles: ['Cashier', 'Customer', 'Branch Manager'], platforms: ['Manager Dashboard', 'Customer Mobile App'],
    capabilities: [
      'Branch withdrawal queue inspection (GET /cash-withdrawal/cashier/requests)',
      '4-digit code validation & instant cash dispensing (PATCH /cash-withdrawal/cashier/complete-by-code)',
      'Withdrawal request status management & cancellation (PATCH /cash-withdrawal/cashier/request/:requestId/status)',
      'Automated code invalidation upon payout to prevent double-dispensing'
    ],
    workflow: [
      { step: 1, title: 'Mobile Booking', description: 'Customer initiates withdrawal in app; system locks funds and generates 4-digit code (e.g. 4819).' },
      { step: 2, title: 'Present Code at Counter', description: 'Customer visits branch counter and provides the 4-digit code to the cashier.' },
      { step: 3, title: 'Verify & Dispense', description: 'Cashier submits code; system validates branch lock, marks request completed, and cashier dispenses cash.' }
    ],
    businessValue: [
      { title: 'Sub-30-Second Turnaround', description: 'Reduces counter teller processing time to under 30 seconds per cash withdrawal.' }
    ],
    videoUrl: '/videos/VAHT-axQ83g.mp4'
  },
  {
    id: 'branch-agent-settlement', number: '10.4', categorySlug: 'branch-cash-operations',
    title: 'Field Agent Cash Handover & Settlement',
    shortDescription: 'Verifying doorstep agent cash collections via OTP approval and clearing agent till liabilities.',
    description: 'Processes end-of-shift field agent cash collection handovers at branch counter desks. Field agents submit collected loan EMIs, RD/Pigmy, and share capital records, generating a 6-digit OTP. The cashier counts the physical cash, enters the OTP to verify, clearing the agent\'s liability and crediting the branch vault.',
    roles: ['Cashier', 'Field Agent', 'Branch Manager'], platforms: ['Manager Dashboard'],
    capabilities: [
      'Pending agent collection submission queue review (GET /agent/collection-submission/branch-pending)',
      '6-digit OTP physical cash verification and acceptance (POST /agent/collection-submission/verify)',
      'Expired OTP regeneration support at counter desk (POST /agent/collection-submission/regenerate-otp)',
      'Branch reconciled historical audit logging (GET /agent/collection-submission/branch-history)'
    ],
    workflow: [
      { step: 1, title: 'View Pending Queue', description: 'Cashier opens pending agent submission list and itemized receipts.' },
      { step: 2, title: 'Physical Count & Enter OTP', description: 'Cashier counts physical cash and inputs agent\'s 6-digit OTP.' },
      { step: 3, title: 'Clear Liability & Post GL', description: 'System marks all records VERIFIED, clears agent liability, and credits branch cash drawer.' }
    ],
    businessValue: [
      { title: 'Dual-Custody Cash Audit', description: 'Ensures 100% auditable handover between field agents and branch cashiers.' }
    ],
    videoUrl: '/videos/VAHT-axQ83g.mp4'
  },
  {
    id: 'branch-loan-disbursement', number: '10.5', categorySlug: 'branch-cash-operations',
    title: 'Counter Loan Cash Disbursement Execution',
    shortDescription: 'Cash payout of approved loans with cashier desk segregation of duties and EMI schedule activation.',
    description: 'Executes physical counter cash disbursement for approved loans allocated to the cashier. Enforces strict segregation of duties where only the designated cashier can disburse sanctioned funds. Upon payout confirmation, the loan status transitions to disbursed and the repayment EMI schedule is activated.',
    roles: ['Cashier', 'Branch Manager', 'Admin'], platforms: ['Manager Dashboard'],
    capabilities: [
      'Assigned pending loans queue retrieval (GET /loan/get-all-loans?approvalStatus=approved)',
      'Disbursed loan historical record query (GET /loan/get-all-loans?approvalStatus=disbursed)',
      'Cashier allocation control (PATCH /loan/allocate-cashier/:id)',
      'Direct loan cash disbursement execution (PATCH /loan/disburse-loan/:id)',
      'Automatic EMI amortization schedule activation on core ledger'
    ],
    workflow: [
      { step: 1, title: 'Cashier Allocation', description: 'Manager allocates approved loan to specific cashier desk.' },
      { step: 2, title: 'KYC & Document Verification', description: 'Cashier inspects borrower identity documents at counter.' },
      { step: 3, title: 'Execute Disbursal', description: 'Cashier confirms disbursement; loan status transitions to disbursed and cash is handed over.' }
    ],
    businessValue: [
      { title: 'Segregation of Duties', description: 'Guarantees that credit sanctioners cannot disburse funds, preventing internal collusion.' }
    ],
    videoUrl: '/videos/VAHT-axQ83g.mp4'
  },
  {
    id: 'branch-daily-balancing', number: '10.6', categorySlug: 'branch-cash-operations',
    title: 'Daily Cash Balancing, Vault & Reconciliation',
    shortDescription: 'End-of-day teller cash drawer balancing, accounting daybook audit, and vault transfer reconciliation.',
    description: 'Provides comprehensive End-of-Day (EOD) balancing for branch cashier drawers. Evaluates the balancing equation: Closing Cash Drawer = Opening Balance + Total Inflows (OTC Deposits + Verified Agent Handovers) - Total Outflows (OTC Withdrawals + Code Pickups + Cash Loan Disbursals). Integrates daybook cash logs and vault transfers to guarantee zero mismatch.',
    roles: ['Cashier', 'Branch Manager', 'Financial Auditor'], platforms: ['Manager Dashboard'],
    capabilities: [
      'Daily branch transactions summary computation (GET /reports/transactions/summary)',
      'Accounting daybook cash log inspection (GET /reports/accounting/daybook)',
      'Deposit & withdrawal transaction history queries (GET /deposit/get-all-deposits)',
      'Vault cash transfer reconciliation with physical count validation'
    ],
    workflow: [
      { step: 1, title: 'Compute Drawer Inflows & Outflows', description: 'System tallies OTC deposits, agent handovers, withdrawals, and disbursements.' },
      { step: 2, title: 'Physical Count Tally', description: 'Cashier inputs physical currency note count to verify zero variance.' },
      { step: 3, title: 'Vault Settlement', description: 'Surplus drawer cash is transferred to the main branch vault and daybook is signed off.' }
    ],
    businessValue: [
      { title: 'Zero Discrepancy Auditing', description: 'Ensures 100% reconciliation between digital transaction logs and physical vault currency.' }
    ],
    videoUrl: '/videos/VAHT-axQ83g.mp4'
  },
  {
    id: 'branch-cashier-security', number: '10.7', categorySlug: 'branch-cash-operations',
    title: 'Cashier Onboarding & Security Boundary',
    shortDescription: 'Dedicated teller provisioning, credential onboarding, and role-based AuthGuard route restrictions.',
    description: 'Manages cashier provisioning, employee onboarding, and strict architectural route confinement. Managers provision cashier accounts with designated drawer IDs. An AuthGuard route barrier confines cashier sessions exclusively to /cashier, /loan-disbursements, and /agent-handovers, automatically deflecting unauthorized access attempts away from executive settings and master records.',
    roles: ['Branch Manager', 'Admin', 'Cashier'], platforms: ['Manager Dashboard'],
    capabilities: [
      'Branch cashier employee creation and desk assignment (POST /employee/create-branch-cashier)',
      'Secure employee authentication (POST /employee/employee-login)',
      'Automated role-based route guard confinement to /cashier, /loan-disbursements, and /agent-handovers',
      'Session timeout and security audit logging for counter terminals'
    ],
    workflow: [
      { step: 1, title: 'Cashier Provisioning', description: 'Branch manager creates cashier account with assigned branch and cash drawer ID.' },
      { step: 2, title: 'Employee Authentication', description: 'Cashier logs in via dedicated terminal endpoint.' },
      { step: 3, title: 'AuthGuard Confinement', description: 'System locks session to counter operations and restricts administrative tabs.' }
    ],
    businessValue: [
      { title: 'Architectural Security', description: 'Guarantees zero unauthorized privilege escalation and secures operational counter terminals.' }
    ],
    videoUrl: '/videos/VAHT-axQ83g.mp4'
  },

  // ==========================================
  // MODULE 11: Branch Manager & Governance Hub
  // ==========================================
  {
    id: 'branch-strict-data-scoping', number: '11.1', categorySlug: 'branch-manager-governance',
    title: 'Strict Branch Data Scoping & Multi-Tenant Isolation',
    shortDescription: 'Multi-tenant security perimeter restricting manager access strictly to branch-scoped customers, loans, cashiers, accounts, and assets.',
    description: 'Enforces an architectural security perimeter that automatically restricts the branch manager\'s operational and supervisory visibility strictly to records (customers, loan applications, staff rosters, cashier accounts, and branch fixed assets) belonging to their assigned branchId. Systematically shields against unauthorized cross-branch data access or leaks.',
    roles: ['Branch Manager', 'Admin'], platforms: ['Manager Dashboard', 'Core Banking Engine'],
    capabilities: [
      'Automated tenant isolation restricting queries to authenticated manager branchId',
      'Data perimeter enforcement across customer profiles, loans, deposits, and cash drawers',
      'Role-based access control (RBAC) preventing cross-branch unauthorized tampering',
      'Security audit logging for unauthorized cross-branch query interception'
    ],
    workflow: [
      { step: 1, title: 'Manager Authentication', description: 'Branch manager logs into supervisory console with credentials.' },
      { step: 2, title: 'Context & Scope Injection', description: 'Security layer validates claims and locks active session to branchId.' },
      { step: 3, title: 'Isolated Query Execution', description: 'All database queries automatically inject branch filter parameters.' },
      { step: 4, title: 'Perimeter Defense', description: 'Cross-branch data access attempts are denied with 403 Forbidden.' }
    ],
    businessValue: [
      { title: 'Zero Data Leakage', description: 'Guarantees absolute branch isolation and regulatory compliance under banking privacy laws.' }
    ],
    videoUrl: null
  },
  {
    id: 'branch-staff-cashier-provisioning', number: '11.2', categorySlug: 'branch-manager-governance',
    title: 'Branch Staff & Cashier Provisioning',
    shortDescription: 'Creates, provisions, and onboards new branch cashiers and operational desk staff into the CASH department.',
    description: 'Supervisory onboarding workflow allowing branch managers to create operational teller profiles, provision secure authentication credentials, allocate desk drawers, and establish payroll compensation records directly into the CASH department.',
    roles: ['Branch Manager', 'Admin'], platforms: ['Manager Dashboard', 'Core Banking Engine'],
    capabilities: [
      'Cashier employee onboarding with official ID, payroll, and desk assignment (POST /employee/create-branch-cashier)',
      'Automated credential hashing and welcome activation dispatch',
      'CASH department role provisioning with desk limit bindings',
      'Real-time staff roster management and branch attendance tracking'
    ],
    workflow: [
      { step: 1, title: 'Input Staff Profile', description: 'Manager submits employee KYC, department, salary, and initial password.' },
      { step: 2, title: 'Generate Employee ID', description: 'System issues unique branch cashier identifier (e.g., CSH-MUM-012).' },
      { step: 3, title: 'Bind CASH Department Role', description: 'Grants restricted teller access credentials confined to cashier counter desk.' }
    ],
    businessValue: [
      { title: 'Rapid Onboarding', description: 'Provisions operational counter tellers in under 2 minutes with automated security boundaries.' }
    ],
    videoUrl: null
  },
  {
    id: 'branch-doorstep-logistics-dispatch', number: '11.3', categorySlug: 'branch-manager-governance',
    title: 'Doorstep Logistics & Field Agent Dispatch',
    shortDescription: 'Real-time allocation and dispatch of field agents for customer doorstep cash delivery requests.',
    description: 'When customers place doorstep cash delivery orders (agent_cash_delivery), the supervisory dashboard queues pending withdrawal requests and allows the branch manager to assign specific field agents based on proximity, route schedules, and cash-in-transit limits.',
    roles: ['Branch Manager', 'Admin'], platforms: ['Manager Dashboard', 'Field Agent Mobile App'],
    capabilities: [
      'Live doorstep cash delivery dispatch queue (PATCH /cash-withdrawals/branch/assign-agent/:requestId)',
      'Proximity-based agent routing and territory assignment',
      'Cash-in-transit limit validation before task allocation',
      'Real-time GPS status monitoring and doorstep delivery fulfillment tracking'
    ],
    workflow: [
      { step: 1, title: 'Receive Doorstep Request', description: 'Customer requests cash delivery; system queues withdrawal at branch.' },
      { step: 2, title: 'Select Available Agent', description: 'Branch manager selects field agent with sufficient cash limit.' },
      { step: 3, title: 'Dispatch & Real-time Tracking', description: 'Agent receives push alert with destination coordinates and one-time delivery code.' }
    ],
    businessValue: [
      { title: 'Logistics Optimization', description: 'Slashes doorstep fulfillment turnaround time by 40% with automated dispatching.' }
    ],
    videoUrl: null
  },
  {
    id: 'branch-loan-governance-lifecycle', number: '11.4', categorySlug: 'branch-manager-governance',
    title: 'Full Loan Governance Lifecycle & Digital e-Stamp Contracts',
    shortDescription: '6-stage credit governance: verification, sanctioning, Zoop e-Stamp order, multi-party eSign, cashier allocation, and disbursement.',
    description: 'Complete multi-tier supervisory credit management lifecycle. Guides loan files from initial application verification and underwriter rejection, through sanctioning with auto-calculated amortization, Zoop state digital e-Stamp procurement, multi-party legal contract eSign (Borrower, Chairman/Manager, Guarantors), cashier counter desk allocation, and final cash/cheque disbursement execution.',
    roles: ['Branch Manager', 'Admin', 'Underwriter'], platforms: ['Manager Dashboard', 'Zoop Contract Gateway', 'Cashier Counter Desk'],
    capabilities: [
      'Application Verification & Rejection (PATCH /loan/verify-loan/:loanId & /loan/reject-loan/:loanId)',
      'Sanctioning & auto-generated amortization schedule (PATCH /loan/approve-loan/:loanId)',
      'State digital e-Stamp order procurement via Zoop API (POST /esign/generateEstamp/:loanId)',
      'Multi-party eSign orchestration for borrower, manager & guarantors (POST /esign/assign-eStamp)',
      'Real-time Aadhaar OTP eSign tracking (GET /esign/esign-status/:loanId)',
      'Cashier counter desk allocation (PATCH /loan/allocate-cashier/:loanId) & disbursement execution (PATCH /loan/disburse-loan/:loanId)'
    ],
    workflow: [
      { step: 1, title: 'Verification & Rejection', description: 'Branch manager reviews submitted KYC documents; marks verified or rejects with notes.' },
      { step: 2, title: 'Sanction & Amortization', description: 'Approves loan amount; engine instantly calculates schedule and generates all future loanEmis.' },
      { step: 3, title: 'Zoop e-Stamp Procurement', description: 'Initiates API call to Zoop to procure official state stamp duty with an order reference.' },
      { step: 4, title: 'Multi-Party eSign Flow', description: 'Configures e-Stamp contract and dispatches legal signing invites to borrower, manager, and guarantors.' },
      { step: 5, title: 'Cashier Allocation', description: 'Assigns sanctioned loan to specific teller counter for physical verification and cash handover.' },
      { step: 6, title: 'Disbursement Execution', description: 'Cashier executes cash/cheque disbursement (or manager executes administrative override).' }
    ],
    businessValue: [
      { title: 'End-to-End Governance', description: 'Eliminates paper agreements, accelerates credit turnaround from 7 days to 20 minutes, and ensures 100% legal enforceability.' }
    ],
    videoUrl: null
  },
  {
    id: 'branch-assisted-rd-creation', number: '11.5', categorySlug: 'branch-manager-governance',
    title: 'Assisted Recurring Deposit (RD) Account Creation',
    shortDescription: 'Manager-assisted term deposit account creation and first cash installment receipting for walk-in branch members.',
    description: 'Enables branch managers and supervisory desk staff to open high-interest Recurring Deposit (RD) accounts on behalf of walk-in branch members. Configures monthly installment amounts, tenure, automated maturity yields, and logs the initial physical cash installment receipt directly into the core banking engine.',
    roles: ['Branch Manager', 'Admin'], platforms: ['Manager Dashboard', 'Core Banking Engine'],
    capabilities: [
      'Assisted RD account opening for branch customers (POST /recurring-deposit/branch/create-rd)',
      'Real-time compound interest calculation and maturity projections',
      'First installment payment mode support (cash / savings debit)',
      'Instant digital deposit certificate and receipt generation'
    ],
    workflow: [
      { step: 1, title: 'Select Customer & Plan', description: 'Manager pulls member profile and inputs monthly installment, tenure, and interest rate.' },
      { step: 2, title: 'Accept First Cash Installment', description: 'Collects first installment cash at branch desk and generates transaction receipt.' },
      { step: 3, title: 'Activate RD Account', description: 'System creates active recurring deposit account and schedules future automated sweeps.' }
    ],
    businessValue: [
      { title: 'Deposit Growth', description: 'Accelerates branch retail savings mobilization with zero customer friction.' }
    ],
    videoUrl: null
  },
  {
    id: 'branch-jlg-microfinance-approvals', number: '11.6', categorySlug: 'branch-manager-governance',
    title: 'Microfinance Joint Liability Group (JLG / SHG) Approvals',
    shortDescription: 'Supervision and sanctioning of community Joint Liability Groups, center meetings, and collective liability loans.',
    description: 'Dedicated microfinance governance module for branch heads to inspect Joint Liability Groups (JLG) and Self-Help Groups (SHG), review center meeting schedules, validate cross-guarantee matrices, and issue collective loan sanctions.',
    roles: ['Branch Manager', 'Admin'], platforms: ['Manager Dashboard', 'Core Banking Engine'],
    capabilities: [
      'JLG and SHG group roster and center meeting inspection (GET /joint-liability/group)',
      'Collective credit appraisal and group loan sanctioning (POST /joint-liability/loan/approve)',
      'Peer cross-guarantee validation and individual member allocation breakdowns',
      'Center meeting schedule and repayment cycle management'
    ],
    workflow: [
      { step: 1, title: 'Review Group Formation', description: 'Inspects member composition, center leader endorsement, and KYC records.' },
      { step: 2, title: 'Validate Center Meetings', description: 'Confirms meeting frequency and repayment schedule with center officers.' },
      { step: 3, title: 'Sanction Collective Loan', description: 'Issues joint loan sanction and queues funds for center disbursement.' }
    ],
    businessValue: [
      { title: 'Financial Inclusion', description: 'Drives rural and community lending while minimizing credit defaults via peer liability dynamics.' }
    ],
    videoUrl: null
  },
  {
    id: 'branch-fixed-assets-vault-treasury', number: '11.7', categorySlug: 'branch-manager-governance',
    title: 'Branch Fixed Assets & Cash Vault Treasury',
    shortDescription: 'Supervision of physical branch assets, currency machines, and live monitoring of cash vault balances.',
    description: 'Provides comprehensive governance over branch physical infrastructure (currency counters, biometric scanners, fireproof safe lockers, and CCTV installations) alongside real-time oversight of branch vault accounts, petty cash reserves, and corporate bank drawdowns.',
    roles: ['Branch Manager', 'Admin', 'Financial Auditor'], platforms: ['Manager Dashboard', 'Treasury Ledger'],
    capabilities: [
      'Live cash vault and petty cash balance supervision (GET /treasury/accounts)',
      'Branch hardware and fixed asset inventory monitoring (GET /fixed-asset/branch-assets)',
      'Daily vault holding threshold alerts and excess liquidity sweep warnings',
      'Locker room and asset maintenance audit trail'
    ],
    workflow: [
      { step: 1, title: 'Inspect Vault Balances', description: 'Monitors real-time cash vault holdings against branch regulatory insurance caps.' },
      { step: 2, title: 'Review Petty Cash Needs', description: 'Audits branch day-to-day operational expense disbursements.' },
      { step: 3, title: 'Audit Fixed Assets', description: 'Conducts periodic verification of biometric devices, currency counters, and lockers.' }
    ],
    businessValue: [
      { title: 'Asset Integrity', description: 'Protects branch capital assets, prevents vault idle cash accumulation, and maintains insurance compliance.' }
    ],
    videoUrl: null
  },
  {
    id: 'branch-kpi-board-pack-reports', number: '11.8', categorySlug: 'branch-manager-governance',
    title: 'Branch KPI Analytics & Board Pack Reports',
    shortDescription: 'Real-time performance analytics, collection efficiency, delinquency tracking, and monthly board pack generation.',
    description: 'Executive reporting center delivering real-time branch performance metrics: live customer growth, loans disbursed, daily recovery ratios, portfolio delinquency (PAR 30/60/90), and one-click consolidated monthly board governance packs for executive committee reviews.',
    roles: ['Branch Manager', 'Admin', 'Chairman / Admin'], platforms: ['Manager Dashboard', 'Executive BI Reports'],
    capabilities: [
      'Real-time customer growth and loan disbursement statistics (GET /branch/get-branch-stats)',
      'Daily collection efficiency and recovery monitoring (GET /reports/collections)',
      'Comprehensive operational branch health indicators (GET /reports/dashboard)',
      'Automated monthly executive board pack PDF compiler (GET /reports/board-pack)'
    ],
    workflow: [
      { step: 1, title: 'Monitor Live Branch KPIs', description: 'Tracks daily footfall, disbursals, deposits, and agent collections.' },
      { step: 2, title: 'Track Portfolio Delinquency', description: 'Analyzes early warning indicators and PAR buckets for proactive recovery.' },
      { step: 3, title: 'Export Board Pack', description: 'Generates consolidated monthly supervisory report pack for board meetings.' }
    ],
    businessValue: [
      { title: 'Executive Transparency', description: 'Gives management 100% visibility into branch health, recovery ratios, and profitability.' }
    ],
    videoUrl: null
  },

  // ==========================================
  // MODULE 12: AI Advisor & Intelligent Automation
  // ==========================================
  {
    id: 'ai-wealth-advisor', number: '12.1', categorySlug: 'ai-intelligent-automation',
    title: 'AI Wealth Advisor & Personalized Financial Companion',
    shortDescription: 'Smart AI wealth companion offering personalized investment tips, yield optimization, and portfolio guidance.',
    description: 'Empowers cooperative members with an AI-driven wealth advisor that analyzes spending patterns, suggests auto-sweep threshold optimizations, and recommends tailored savings & deposit plans.',
    roles: ['Customer'], platforms: ['Customer Mobile App', 'AI Layer'],
    capabilities: ['Personalized yield & investment recommendations', 'Smart spending pattern analysis', 'Natural language wealth chat interface', 'Automated savings goal suggestions'],
    workflow: [
      { step: 1, title: 'Analyze Transaction Stream', description: 'AI evaluates idle balance trends and spending habits.' },
      { step: 2, title: 'Generate Recommendation', description: 'Presents tailored FD/RD or Auto-Sweep optimization tip.' },
      { step: 3, title: 'One-Tap Execution', description: 'Customer accepts AI recommendation with single tap.' }
    ],
    businessValue: [
      { title: 'Member Engagement', description: 'Drives member product adoption and maximizes idle balance yield.' }
    ],
    videoUrl: '/videos/VAHT-QBT93M.mp4'
  },
  {
    id: 'ai-doc-ocr-audit', number: '12.2', categorySlug: 'ai-intelligent-automation',
    title: 'AI Loan Document OCR & Automated Compliance Inspector',
    shortDescription: 'Automates loan agreement verification, income document OCR extraction, and regulatory compliance auditing.',
    description: 'Integrates AI computer vision and OCR to audit scanned loan agreements, pay slips, and property deeds. Automatically flags missing signatures, income mismatches, or invalid document templates.',
    roles: ['Branch Manager', 'Chairman / Admin'], platforms: ['Manager Dashboard', 'AI Layer'],
    capabilities: ['Automated loan agreement OCR parsing', 'Income proof & bank statement data extraction', 'Signature & stamp detection algorithms', 'Risk anomaly & document tampering alert signals'],
    workflow: [
      { step: 1, title: 'Upload Loan Dossier', description: 'Manager uploads scanned loan agreement.' },
      { step: 2, title: 'AI OCR Audit', description: 'AI extracts text, validates signatures, and checks compliance rules.' },
      { step: 3, title: 'Audit Report', description: 'Generates green compliance badge or flags risk anomalies.' }
    ],
    businessValue: [
      { title: '90% Time Savings', description: 'Cuts manual document audit effort by 90% while catching document fraud early.' }
    ],
    videoUrl: '/videos/VAHT-QBT93M.mp4'
  },
  {
    id: 'ai-conversational-bot', number: '12.3', categorySlug: 'ai-intelligent-automation',
    title: 'Conversational Natural Language Banking Query Bot',
    shortDescription: 'Multi-lingual conversational AI bot allowing members to query balances, mini-statements, and loan status in natural language.',
    description: 'Enables cooperative members to interact with their accounts using natural language voice and text queries in English, Hindi, and regional languages.',
    roles: ['Customer', 'Field Agent'], platforms: ['Customer Mobile App', 'Field Agent App', 'AI Layer'],
    capabilities: ['Multi-lingual natural language processing (NLP)', 'Voice-to-text transaction inquiry', 'Instant balance & mini-statement delivery', 'Context-aware customer support assistance'],
    workflow: [
      { step: 1, title: 'User Voice / Text Input', description: 'Member asks question in native language.' },
      { step: 2, title: 'NLP Intent Extraction', description: 'AI identifies account inquiry intent securely.' },
      { step: 3, title: 'Instant Response', description: 'Delivers real-time account data via chat interface.' }
    ],
    businessValue: [
      { title: 'Accessibility', description: 'Provides effortless banking access for users of all literacy levels.' }
    ],
    videoUrl: '/videos/VAHT-QBT93M.mp4'
  },
  {
    id: 'ai-risk-detector', number: '12.4', categorySlug: 'ai-intelligent-automation',
    title: 'AI Fraud Pattern & Risk Anomaly Detector',
    shortDescription: 'Real-time machine learning engine detecting suspicious transaction velocity, abnormal withdrawals, and credit risk signals.',
    description: 'Monitors incoming transaction streams to detect unusual payment velocity, geographical anomalies, or credit default signals before financial loss occurs.',
    roles: ['Chairman / Admin', 'Branch Manager'], platforms: ['Manager Dashboard', 'AI Layer'],
    capabilities: ['Real-time transaction velocity monitoring', 'Geographical impossibility anomaly triggers', 'Early warning NPA default risk scoring', 'Automated suspicious transaction report (STR) flag'],
    workflow: [
      { step: 1, title: 'Stream Transaction', description: 'Engine evaluates real-time payment parameters.' },
      { step: 2, title: 'Score Anomaly Risk', description: 'Calculates risk score against historical baselines.' },
      { step: 3, title: 'Alert Manager', description: 'Flags high-risk transactions for manager intervention.' }
    ],
    businessValue: [
      { title: 'Fraud Mitigation', description: 'Proactively prevents fraudulent payouts and minimizes portfolio NPAs.' }
    ],
    videoUrl: '/videos/VAHT-QBT93M.mp4'
  },

  // ==========================================
  // MODULE 13: Executive Governance, Accounting & Analytics
  // ==========================================
  {
    id: 'gov-executive-analytics', number: '13.1', categorySlug: 'executive-governance-analytics',
    title: 'Executive Governance & Final Loan Sanction Authority',
    shortDescription: 'Board-level governance, loan sanction limit approvals, and executive risk sign-offs.',
    description: 'Grants Chairman and executive board leadership final digital sign-off authority for high-value loan sanctions and macro institutional policy controls.',
    roles: ['Chairman / Admin'], platforms: ['Manager Dashboard'],
    capabilities: ['Final loan sanction digital sign-off authority', 'Loan limit policy creation', 'Board resolution archiving'],
    workflow: [
      { step: 1, title: 'Review Verified Dossier', description: 'Chairman inspects manager-verified loan file.' },
      { step: 2, title: 'Digital Sanction', description: 'Digitally signs sanction order releasing disbursal.' }
    ],
    businessValue: [
      { title: 'Executive Oversight', description: 'Enforces strict board-level risk oversight and system control.' }
    ],
    videoUrl: '/videos/VAHT-Qi9W-A.mp4'
  },
  {
    id: 'gov-general-ledger', number: '13.2', categorySlug: 'executive-governance-analytics',
    title: 'Double-Entry General Ledger & Accounting Core',
    shortDescription: 'Central double-entry ledger, automated trial balance generation, and multi-branch P&L consolidation.',
    description: 'Powers the core double-entry accounting engine for automated journal entries, P&L calculations, and multi-branch balance sheet consolidation.',
    roles: ['Chairman / Admin', 'Branch Manager', 'Financial Auditor'], platforms: ['Manager Dashboard'],
    capabilities: ['Double-entry general ledger posting', 'Automated Day Book & Trial Balance PDF/Excel export', 'Multi-branch balance sheet consolidation'],
    workflow: [
      { step: 1, title: 'Post Transactions', description: 'System records double-entry journal postings automatically.' },
      { step: 2, title: 'Export Financial Statements', description: 'Generates trial balance and P&L statements for auditors.' }
    ],
    businessValue: [
      { title: 'Audit Readiness', description: 'Guarantees 100% accurate financial accounting compliance and audit readiness.' }
    ],
    videoUrl: '/videos/VAHT-Qi9W-A.mp4'
  }
];

// REST API Specification Lookup Map (Razorpay / Stripe Style Integration)
const defaultApiByFeatureId = {
  'onboard-otp': {
    method: 'POST',
    endpoint: '/api/v1/user/send-otp',
    authRequired: false,
    requestPayload: { phone: '9876543210', purpose: 'REGISTRATION' },
    responsePayload: { success: true, message: 'OTP dispatched to +919876543210', otpSessionId: 'otp_sess_8912389' },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/user/send-otp" \\\n  -H "Content-Type: application/json" \\\n  -d '{"phone": "9876543210"}'`
  },
  'onboard-profile': {
    method: 'POST',
    endpoint: '/api/v1/user/create-profile',
    authRequired: true,
    requestPayload: { fullName: 'Rahul Sharma', email: 'rahul@example.com', dob: '1992-05-15', branchId: 'brn_001' },
    responsePayload: { success: true, data: { memberId: 'FIVO-MBR-2026-0891', profileCompletion: '100%' } },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/user/create-profile" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -H "Content-Type: application/json" \\\n  -d '{"fullName": "Rahul Sharma", "branchId": "brn_001"}'`
  },
  'onboard-digilocker': {
    method: 'POST',
    endpoint: '/api/v1/user/digitap/aadhaar/verify',
    authRequired: true,
    requestPayload: { userId: 'usr_65a4bc9e', aadhaarNumber: 'XXXX-XXXX-8912', redirectUrl: 'fivopay://kyc-callback' },
    responsePayload: { success: true, isKycVerified: true, uidaiRefId: 'UIDAI-2026-99012' },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/user/digitap/aadhaar/verify" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -d '{"aadhaarNumber": "XXXX-XXXX-8912"}'`
  },
  'onboard-intl-kyc': {
    method: 'POST',
    endpoint: '/api/v1/user/kyc/international-upload',
    authRequired: true,
    requestPayload: { documentType: 'PASSPORT', countryCode: 'SGP', fileStream: '[Binary Stream]' },
    responsePayload: { success: true, documentId: 'DOC-INTL-9981', status: 'VERIFIED' },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/user/kyc/international-upload" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -F "file=@passport.pdf"`
  },
  'onboard-liveness': {
    method: 'POST',
    endpoint: '/api/v1/user/kyc/liveness-check',
    authRequired: true,
    requestPayload: { selfieImageBase64: 'data:image/jpeg;base64,...', docRefId: 'DOC-INTL-9981' },
    responsePayload: { success: true, livenessScore: 0.98, facialMatchPercentage: 99.4 },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/user/kyc/liveness-check" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -d '{"docRefId": "DOC-INTL-9981"}'`
  },
  'mobile-app-self-service': {
    method: 'GET',
    endpoint: '/api/v1/transaction/statement/usr_65a4bc9e',
    authRequired: true,
    requestPayload: null,
    responsePayload: { success: true, availableBalance: 45850.75, activeLoansCount: 1, activeDepositsCount: 2 },
    curl: `curl -X GET "https://api.fivopay.com/api/v1/transaction/statement/usr_65a4bc9e" \\\n  -H "Authorization: Bearer <JWT_TOKEN>"`
  },
  'onboard-help-desk': {
    method: 'POST',
    endpoint: '/api/v1/support-ticket/create',
    authRequired: true,
    requestPayload: { subject: 'Duplicate Passbook Request', category: 'PASSBOOK_SERVICE', description: 'Need duplicate passbook' },
    responsePayload: { success: true, ticketId: 'TCK-2026-4401', status: 'OPEN', slaHours: 24 },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/support-ticket/create" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -d '{"subject": "Duplicate Passbook Request"}'`
  },
  'pay-saving-funding': {
    method: 'POST',
    endpoint: '/api/v1/deposit/deposit-funds',
    authRequired: true,
    requestPayload: { amount: 5000, paymentMode: 'UPI_COLLECT', upiHandle: 'rahul@upi' },
    responsePayload: { success: true, transactionId: 'TXN-WLT-99120', updatedBalance: 50850.75 },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/deposit/deposit-funds" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -d '{"amount": 5000, "paymentMode": "UPI_COLLECT"}'`
  },
  'pay-p2p-qr': {
    method: 'POST',
    endpoint: '/api/v1/payout/transfer-funds',
    authRequired: true,
    requestPayload: { beneficiaryPhone: '9876543210', amount: 350, mode: 'UPI_QR' },
    responsePayload: { success: true, utrNumber: 'UTR2026091599812', status: 'SUCCESS' },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/payout/transfer-funds" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -d '{"amount": 350, "mode": "UPI_QR"}'`
  },
  'pay-gateway-infra': {
    method: 'POST',
    endpoint: '/api/v1/gateway/process-pa-settlement',
    authRequired: true,
    requestPayload: { merchantId: 'MERCH-FIVO-88', batchDate: '2026-09-16' },
    responsePayload: { success: true, settledAmount: 1450000.00, transactionCount: 420 },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/gateway/process-pa-settlement" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -d '{"merchantId": "MERCH-FIVO-88"}'`
  },
  'pay-cash-verification-code': {
    method: 'POST',
    endpoint: '/api/v1/cash-withdrawal/generate-code',
    authRequired: true,
    requestPayload: { amount: 10000, expiresMinutes: 30 },
    responsePayload: { success: true, withdrawalCode: 'CW-781920', expiryTimestamp: '2026-09-16T14:30:00Z' },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/cash-withdrawal/generate-code" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -d '{"amount": 10000}'`
  },
  'savings-auto-sweep-threshold': {
    method: 'POST',
    endpoint: '/api/v1/deposit/auto-sweep/configure',
    authRequired: true,
    requestPayload: { userId: 'usr_65a4bc9e', thresholdBalance: 25000, sweepMultiple: 5000 },
    responsePayload: { success: true, message: 'Auto-Sweep rule activated', thresholdSet: 25000 },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/deposit/auto-sweep/configure" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -d '{"thresholdBalance": 25000}'`
  },
  'savings-auto-sweep-engine': {
    method: 'POST',
    endpoint: '/api/v1/deposit/auto-sweep/reverse-sweep',
    authRequired: true,
    requestPayload: { userId: 'usr_65a4bc9e', requiredAmount: 7500 },
    responsePayload: { success: true, sweptBackAmount: 10000, savingBalanceRestored: 27500.00 },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/deposit/auto-sweep/reverse-sweep" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -d '{"requiredAmount": 7500}'`
  },
  'fdrd-origination': {
    method: 'POST',
    endpoint: '/api/v1/deposit/fd/create',
    authRequired: true,
    requestPayload: { userId: 'usr_65a4bc9e', principalAmount: 100000, tenureMonths: 24, nomineeName: 'Priya Sharma' },
    responsePayload: { success: true, fdCertificateNo: 'FD-CERT-2026-0091', maturityValue: 119500.00, maturityDate: '2028-09-16' },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/deposit/fd/create" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -d '{"principalAmount": 100000, "tenureMonths": 24}'`
  },
  'fdrd-maturity-payout': {
    method: 'POST',
    endpoint: '/api/v1/rd/close-maturity',
    authRequired: true,
    requestPayload: { rdAccountNo: 'RD-2026-77890' },
    responsePayload: { success: true, totalMaturityPayout: 12565.00, creditedToSaving: 'JNSV-90812904' },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/rd/close-maturity" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -d '{"rdAccountNo": "RD-2026-77890"}'`
  },
  'fdrd-pigmy-micro-deposits': {
    method: 'POST',
    endpoint: '/api/v1/deposit/pigmy/collect',
    authRequired: true,
    requestPayload: { userId: 'usr_65a4bc9e', amountCollected: 200, gpsLocation: { latitude: 18.5204, longitude: 73.8567 } },
    responsePayload: { success: true, receiptNo: 'PGM-2026-88912', updatedBalance: 12400.00 },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/deposit/pigmy/collect" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -d '{"amountCollected": 200}'`
  },
  'gullak-vault-create': {
    method: 'POST',
    endpoint: '/api/v1/goal/create-goal',
    authRequired: true,
    requestPayload: { goalName: 'Bike Down Payment', targetAmount: 25000, targetDate: '2026-12-31', autoDeductFrequency: 'DAILY' },
    responsePayload: { success: true, goalId: 'GUL-2026-0091', currentSaved: 0, progressPercentage: 0 },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/goal/create-goal" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -d '{"goalName": "Bike Down Payment", "targetAmount": 25000}'`
  },
  'gullak-auto-sweep': {
    method: 'POST',
    endpoint: '/api/v1/goal/process-deduction',
    authRequired: true,
    requestPayload: { goalId: 'GUL-2026-0091', amount: 100 },
    responsePayload: { success: true, totalSavedToDate: 4500, targetAmount: 25000, progressPercentage: 18.0 },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/goal/process-deduction" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -d '{"goalId": "GUL-2026-0091", "amount": 100}'`
  },
  'eq-share-catalog': {
    method: 'POST',
    endpoint: '/api/v1/share-transaction/buy-shares',
    authRequired: true,
    requestPayload: { userId: 'usr_65a4bc9e', numberOfShares: 10, faceValuePerShare: 100 },
    responsePayload: { success: true, certificateNo: 'FIVO-CERT-2026-9901', totalAmountPaid: 1000, sharesHoldingsCount: 10 },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/share-transaction/buy-shares" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -d '{"numberOfShares": 10}'`
  },
  'eq-dividend-distribution': {
    method: 'POST',
    endpoint: '/api/v1/dividend/distribute-all',
    authRequired: true,
    requestPayload: { financialYear: '2025-2026', dividendPercentage: 10.0, deductTds: true },
    responsePayload: { success: true, totalMembersCredited: 1420, totalDividendDisbursed: 710000 },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/dividend/distribute-all" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -d '{"dividendPercentage": 10.0}'`
  },
  // MODULE 7: Loan Origination, Underwriting, Gold Vault & Repayment Flow APIs
  'loan-application-origination': {
    method: 'POST',
    endpoint: '/api/v1/loan/create-loan',
    authRequired: true,
    requestPayload: {
      userId: 'usr_65a4bc9e',
      productId: 'prod_gold_01',
      principalAmount: 150000,
      tenureMonths: 12,
      repaymentFrequency: 'MONTHLY'
    },
    responsePayload: {
      success: true,
      loanId: 'LN-2026-004812',
      estimatedEmi: 13083.50
    },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/loan/create-loan" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -H "Content-Type: application/json" \\\n  -d '{"userId": "usr_65a4bc9e", "productId": "prod_gold_01", "principalAmount": 150000, "tenureMonths": 12, "repaymentFrequency": "MONTHLY"}'`
  },
  'loan-jlg-group': {
    method: 'POST',
    endpoint: '/api/v1/joint-liability/create-group',
    authRequired: true,
    requestPayload: {
      groupName: 'Mahila Samriddhi JLG',
      leaderUserId: 'usr_123',
      memberUserIds: ['usr_1', 'usr_2', 'usr_3']
    },
    responsePayload: {
      success: true,
      groupId: 'JLG-2026-0091',
      groupName: 'Mahila Samriddhi JLG',
      status: 'ACTIVE',
      memberCount: 4
    },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/joint-liability/create-group" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -H "Content-Type: application/json" \\\n  -d '{"groupName": "Mahila Samriddhi JLG", "leaderUserId": "usr_123", "memberUserIds": ["usr_1", "usr_2", "usr_3"]}'`
  },
  'loan-underwriting-approval': {
    method: 'PATCH',
    endpoint: '/api/v1/loan/approve-loan/LN-2026-004812',
    authRequired: true,
    relatedEndpoints: [
      { method: 'GET', endpoint: '/api/v1/loan/analyze/:id', description: 'AI Credit Scoring' },
      { method: 'PATCH', endpoint: '/api/v1/loan/verify-loan/:id', description: 'Credit Officer Verification' },
      { method: 'PATCH', endpoint: '/api/v1/loan/approve-loan/:id', description: 'Sanction loan amount & interest rate' },
      { method: 'PATCH', endpoint: '/api/v1/loan/reject-loan/:id', description: 'Rejection with remarks' }
    ],
    requestPayload: {
      approvedAmount: 150000,
      approvedInterestRate: 9.0
    },
    responsePayload: {
      success: true,
      loanId: 'LN-2026-004812',
      status: 'APPROVED',
      approvedAmount: 150000,
      approvedInterestRate: 9.0,
      aiScore: 782
    },
    curl: `curl -X PATCH "https://api.fivopay.com/api/v1/loan/approve-loan/LN-2026-004812" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -H "Content-Type: application/json" \\\n  -d '{"approvedAmount": 150000, "approvedInterestRate": 9.0}'`
  },
  'loan-digital-esign': {
    method: 'POST',
    endpoint: '/api/v1/esign/generate-contract',
    authRequired: true,
    relatedEndpoints: [
      { method: 'POST', endpoint: '/api/v1/esign/generate-contract', description: 'Generate digital loan contract' },
      { method: 'POST', endpoint: '/api/v1/esign/submit-signature', description: 'Submit digital signature image/token' }
    ],
    requestPayload: {
      loanId: 'LN-2026-004812'
    },
    responsePayload: {
      success: true,
      contractId: 'DOC-ESIGN-99120',
      loanId: 'LN-2026-004812',
      status: 'CONTRACT_GENERATED',
      esignUrl: 'https://esign.fivopay.com/sign/LN-2026-004812'
    },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/esign/generate-contract" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -H "Content-Type: application/json" \\\n  -d '{"loanId": "LN-2026-004812"}'`
  },
  'loan-cashier-disbursement': {
    method: 'PATCH',
    endpoint: '/api/v1/loan/allocate-cashier/LN-2026-004812',
    authRequired: true,
    relatedEndpoints: [
      { method: 'PATCH', endpoint: '/api/v1/loan/allocate-cashier/:id', description: 'Allocate cashier desk' },
      { method: 'PATCH', endpoint: '/api/v1/loan/disburse-loan/:id', description: 'Disburse cash or wallet credit' }
    ],
    requestPayload: {
      cashierEmployeeId: 'emp_cashier_09'
    },
    responsePayload: {
      success: true,
      loanId: 'LN-2026-004812',
      allocatedCashier: 'emp_cashier_09',
      status: 'ALLOCATED_TO_CASHIER'
    },
    curl: `curl -X PATCH "https://api.fivopay.com/api/v1/loan/allocate-cashier/LN-2026-004812" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -H "Content-Type: application/json" \\\n  -d '{"cashierEmployeeId": "emp_cashier_09"}'`
  },
  'loan-emi-repayment': {
    method: 'GET',
    endpoint: '/api/v1/loan-emi/schedule/LN-2026-004812',
    authRequired: true,
    relatedEndpoints: [
      { method: 'GET', endpoint: '/api/v1/loan-emi/schedule/:loanId', description: 'Get full EMI schedule' },
      { method: 'POST', endpoint: '/api/v1/loan/user/pay-loan-wallet', description: 'Self-service wallet EMI payment' },
      { method: 'POST', endpoint: '/api/v1/loan/user/create-loan-payment-order', description: 'Gateway Razorpay payment order' },
      { method: 'POST', endpoint: '/api/v1/loan/user/verify-loan-payment', description: 'Gateway payment verification' },
      { method: 'PATCH', endpoint: '/api/v1/loan/adjust-interest-rate/:id', description: 'Restructure EMI tenure/rate' },
      { method: 'POST', endpoint: '/api/v1/loan-recovery/assign-agent', description: 'Overdue collection recovery assignment' }
    ],
    requestPayload: null,
    responsePayload: {
      success: true,
      loanId: 'LN-2026-004812',
      totalInstallments: 12,
      paidInstallments: 0,
      pendingAmount: 150000.00,
      nextEmiDueDate: '2026-10-05',
      nextEmiAmount: 13083.50
    },
    curl: `curl -X GET "https://api.fivopay.com/api/v1/loan-emi/schedule/LN-2026-004812" \\\n  -H "Authorization: Bearer <JWT_TOKEN>"`
  },
  // Legacy aliases
  'loan-flow-funnel': {
    method: 'POST',
    endpoint: '/api/v1/loan/create-loan',
    authRequired: true,
    requestPayload: { userId: 'usr_65a4bc9e', productId: 'prod_personal_01', principalAmount: 150000, tenureMonths: 12 },
    responsePayload: { success: true, loanId: 'LN-2026-004812', estimatedEmi: 13083.50, interestRate: 9.0 },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/loan/create-loan" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -d '{"principalAmount": 150000}'`
  },
  'loan-esign-disbursement': {
    method: 'PATCH',
    endpoint: '/api/v1/loan/disburse-loan/LN-2026-004812',
    authRequired: true,
    requestPayload: { cashierEmployeeId: 'emp_cashier_09', disbursementMode: 'BANK_TRANSFER' },
    responsePayload: { success: true, transactionId: 'TXN-DISB-991204', disbursedAmount: 148500.00 },
    curl: `curl -X PATCH "https://api.fivopay.com/api/v1/loan/disburse-loan/LN-2026-004812" \\\n  -H "Authorization: Bearer <JWT_TOKEN>"`
  },
  'loan-calculator-engine': {
    method: 'POST',
    endpoint: '/api/v1/loan/calculate-emi',
    authRequired: false,
    requestPayload: { principalAmount: 100000, tenureMonths: 12, annualInterestRate: 9.5 },
    responsePayload: { success: true, monthlyEmi: 8768.00, totalInterestPayable: 5216.00, totalPayment: 105216.00 },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/loan/calculate-emi" \\\n  -H "Content-Type: application/json" \\\n  -d '{"principalAmount": 100000, "tenureMonths": 12}'`
  },
  'loan-amortization-breakup': {
    method: 'GET',
    endpoint: '/api/v1/loan/amortization-schedule/LN-2026-004812',
    authRequired: true,
    requestPayload: null,
    responsePayload: { success: true, loanId: 'LN-2026-004812', totalInstallments: 12, monthlyBreakup: [{ month: 1, principal: 11958.50, interest: 1125.00, balance: 138041.50 }] },
    curl: `curl -X GET "https://api.fivopay.com/api/v1/loan/amortization-schedule/LN-2026-004812" \\\n  -H "Authorization: Bearer <JWT_TOKEN>"`
  },
  'field-doorstep-onboarding': {
    method: 'POST',
    endpoint: '/api/v1/agent/onboarding/offline-sync',
    authRequired: true,
    requestPayload: {
      agentId: 'agt_9912',
      customerData: {
        fullName: 'Sunita Devi',
        phone: '9876543210',
        documentType: 'AADHAAR',
        documentNumber: 'XXXX-XXXX-4512'
      },
      offlineCapturedAt: '2026-09-22T10:15:00Z'
    },
    responsePayload: {
      success: true,
      memberId: 'FIVO-MBR-2026-0994',
      kycStatus: 'VERIFIED',
      syncedCount: 1
    },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/agent/onboarding/offline-sync" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -H "Content-Type: application/json" \\\n  -d '{"agentId": "agt_9912", "customerData": {"fullName": "Sunita Devi"}}'`
  },
  'field-doorstep-collections': {
    method: 'POST',
    endpoint: '/api/v1/agent/collection/collect-cash',
    authRequired: true,
    requestPayload: { customerId: 'usr_65a4bc9e', loanId: 'LN-2026-004812', amount: 2500, collectionType: 'LOAN_EMI' },
    responsePayload: { success: true, paymentRecordId: '6650a1b2c3d4e5f6a7b8c9d0', receiptNumber: 'RCP-2026-7781', cashInHandBalance: 7500.00, smsDispatched: true },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/agent/collection/collect-cash" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -H "Content-Type: application/json" \\\n  -d '{"customerId": "usr_65a4bc9e", "loanId": "LN-2026-004812", "amount": 2500}'`
  },
  'field-eod-collection-submission': {
    method: 'POST',
    endpoint: '/api/v1/agent/collection-submission/initiate',
    authRequired: true,
    relatedEndpoints: [
      { method: 'POST', endpoint: '/api/v1/agent/collection-submission/initiate', description: 'Agent initiates handover with payment IDs' },
      { method: 'POST', endpoint: '/api/v1/agent/collection-submission/verify', description: 'Cashier counts physical cash and inputs OTP' },
      { method: 'GET', endpoint: '/api/v1/agent/collection-submission/branch-pending', description: 'Cashier pending submissions queue' },
      { method: 'GET', endpoint: '/api/v1/agent/collection-submission/agent-history', description: 'Agent historical submission records' },
      { method: 'GET', endpoint: '/api/v1/agent/collection-submission/branch-history', description: 'Branch reconciled audit log' },
      { method: 'POST', endpoint: '/api/v1/agent/collection-submission/regenerate-otp', description: 'Regenerate handover OTP' }
    ],
    requestPayload: {
      paymentRecordIds: [
        "6650a1b2c3d4e5f6a7b8c9d0",
        "6650a1b2c3d4e5f6a7b8c9d1"
      ]
    },
    responsePayload: {
      success: true,
      message: "Submission initiated successfully",
      data: {
        _id: "sub_987654",
        totalAmount: 7500,
        otp: "482910",
        otpExpiry: "2026-09-23T17:30:00.000Z",
        status: "pending"
      }
    },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/agent/collection-submission/initiate" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -H "Content-Type: application/json" \\\n  -d '{"paymentRecordIds": ["6650a1b2c3d4e5f6a7b8c9d0", "6650a1b2c3d4e5f6a7b8c9d1"]}'`
  },
  'field-agent-collections-kpi': {
    method: 'POST',
    endpoint: '/api/v1/agent/gps-checkin',
    authRequired: true,
    requestPayload: { agentId: 'agt_9912', latitude: 18.5204, longitude: 73.8567, visitStatus: 'CUSTOMER_VISITED' },
    responsePayload: { success: true, visitId: 'VST-2026-881', targetProgressPercentage: 78.5 },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/agent/gps-checkin" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -d '{"agentId": "agt_9912"}'`
  },
  // MODULE 10: Branch Cashier Operations
  'branch-otc-deposit': {
    method: 'POST',
    endpoint: '/api/v1/deposit/cashier-deposit',
    authRequired: true,
    requestPayload: {
      userId: '664f8a3d1b2c3d4e5f6a7b8c',
      amount: 10000,
      notes: 'Cash deposit at counter'
    },
    responsePayload: {
      success: true,
      message: 'Cash deposit processed successfully',
      transactionId: 'TXN-DEP-2026-98102',
      updatedBalance: 65000.00,
      drawerCashBalance: 260000.00
    },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/deposit/cashier-deposit" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -H "Content-Type: application/json" \\\n  -d '{"userId": "664f8a3d1b2c3d4e5f6a7b8c", "amount": 10000, "notes": "Cash deposit at counter"}'`
  },
  'branch-otc-withdrawal': {
    method: 'POST',
    endpoint: '/api/v1/deposit/cashier-withdrawal',
    authRequired: true,
    requestPayload: {
      userId: '664f8a3d1b2c3d4e5f6a7b8c',
      amount: 5000,
      notes: 'Walk-in cash withdrawal'
    },
    responsePayload: {
      success: true,
      message: 'Withdrawal processed successfully',
      transactionId: 'TXN-WTH-2026-44012',
      remainingBalance: 60000.00,
      drawerCashBalance: 255000.00
    },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/deposit/cashier-withdrawal" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -H "Content-Type: application/json" \\\n  -d '{"userId": "664f8a3d1b2c3d4e5f6a7b8c", "amount": 5000, "notes": "Walk-in cash withdrawal"}'`
  },
  'branch-code-cash-pickup': {
    method: 'PATCH',
    endpoint: '/api/v1/cash-withdrawal/cashier/complete-by-code',
    authRequired: true,
    relatedEndpoints: [
      { method: 'GET', endpoint: '/api/v1/cash-withdrawal/cashier/requests', description: 'View branch withdrawal queue' },
      { method: 'PATCH', endpoint: '/api/v1/cash-withdrawal/cashier/complete-by-code', description: 'Dispense cash by 4-digit code' },
      { method: 'PATCH', endpoint: '/api/v1/cash-withdrawal/cashier/request/:requestId/status', description: 'Update or cancel withdrawal request status' }
    ],
    requestPayload: {
      cashierRequestCode: '4819'
    },
    responsePayload: {
      success: true,
      message: 'Cash dispensed successfully',
      requestId: 'req_wth_9921',
      dispensedAmount: 2000,
      status: 'completed'
    },
    curl: `curl -X PATCH "https://api.fivopay.com/api/v1/cash-withdrawal/cashier/complete-by-code" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -H "Content-Type: application/json" \\\n  -d '{"cashierRequestCode": "4819"}'`
  },
  'branch-agent-settlement': {
    method: 'POST',
    endpoint: '/api/v1/agent/collection-submission/verify',
    authRequired: true,
    relatedEndpoints: [
      { method: 'GET', endpoint: '/api/v1/agent/collection-submission/branch-pending', description: 'View branch pending handover queue' },
      { method: 'POST', endpoint: '/api/v1/agent/collection-submission/verify', description: 'Verify & accept cash handover (OTP)' },
      { method: 'POST', endpoint: '/api/v1/agent/collection-submission/regenerate-otp', description: 'Regenerate handover OTP if expired' },
      { method: 'GET', endpoint: '/api/v1/agent/collection-submission/branch-history', description: 'Branch handover settlement history' }
    ],
    requestPayload: {
      submissionId: '664f8a3d1b2c3d4e5f6a7b8c',
      otp: '837194'
    },
    responsePayload: {
      success: true,
      message: 'Collection submission verified successfully'
    },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/agent/collection-submission/verify" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -H "Content-Type: application/json" \\\n  -d '{"submissionId": "664f8a3d1b2c3d4e5f6a7b8c", "otp": "837194"}'`
  },
  'branch-loan-disbursement': {
    method: 'PATCH',
    endpoint: '/api/v1/loan/disburse-loan/LN-2026-004812',
    authRequired: true,
    relatedEndpoints: [
      { method: 'GET', endpoint: '/api/v1/loan/get-all-loans?approvalStatus=approved&assignedCashier=<cashierId>', description: 'Fetch assigned loans pending disbursement' },
      { method: 'GET', endpoint: '/api/v1/loan/get-all-loans?approvalStatus=disbursed&assignedCashier=<cashierId>', description: 'Fetch disbursed loan history' },
      { method: 'PATCH', endpoint: '/api/v1/loan/allocate-cashier/:id', description: 'Allocate cashier to loan' },
      { method: 'PATCH', endpoint: '/api/v1/loan/disburse-loan/:id', description: 'Execute loan cash disbursement' }
    ],
    requestPayload: {
      cashierId: '664f8a3d1b2c3d4e5f6a7b8c',
      notes: 'Allocated to Counter 1'
    },
    responsePayload: {
      success: true,
      loanId: 'LN-2026-004812',
      status: 'DISBURSED',
      disbursedAmount: 150000.00,
      disbursedAt: '2026-09-22T17:40:00Z'
    },
    curl: `curl -X PATCH "https://api.fivopay.com/api/v1/loan/disburse-loan/LN-2026-004812" \\\n  -H "Authorization: Bearer <JWT_TOKEN>"`
  },
  'branch-daily-balancing': {
    method: 'GET',
    endpoint: '/api/v1/reports/transactions/summary',
    authRequired: true,
    relatedEndpoints: [
      { method: 'GET', endpoint: '/api/v1/reports/transactions/summary?dateFrom=YYYY-MM-DD&dateTo=YYYY-MM-DD', description: 'Daily branch transactions summary' },
      { method: 'GET', endpoint: '/api/v1/reports/accounting/daybook?date=YYYY-MM-DD', description: 'Daily daybook / cash log' },
      { method: 'GET', endpoint: '/api/v1/deposit/get-all-deposits?page=1&limit=10&paymentMethod=branch_deposit', description: 'Branch deposit transaction history' },
      { method: 'GET', endpoint: '/api/v1/deposit/get-all-deposits?page=1&limit=10&transactionType=withdrawal', description: 'Branch withdrawal transaction history' }
    ],
    requestPayload: null,
    responsePayload: {
      success: true,
      date: '2026-09-22',
      openingCashBalance: 200000.00,
      totalInflows: 65000.00,
      totalOutflows: 25000.00,
      closingCashBalance: 240000.00,
      reconciliationStatus: 'BALANCED'
    },
    curl: `curl -X GET "https://api.fivopay.com/api/v1/reports/transactions/summary?dateFrom=2026-09-22&dateTo=2026-09-22" \\\n  -H "Authorization: Bearer <JWT_TOKEN>"`
  },
  'branch-cashier-security': {
    method: 'POST',
    endpoint: '/api/v1/employee/create-branch-cashier',
    authRequired: true,
    relatedEndpoints: [
      { method: 'POST', endpoint: '/api/v1/employee/create-branch-cashier', description: 'Create branch cashier employee' },
      { method: 'POST', endpoint: '/api/v1/employee/employee-login', description: 'Cashier terminal login' }
    ],
    requestPayload: {
      fullName: 'Pooja Verma',
      email: 'pooja.cashier@fivopay.com',
      phone: '9876543211',
      branchId: 'brn_001',
      drawerId: 'DRW-CASHIER-01'
    },
    responsePayload: {
      success: true,
      employeeId: 'emp_cashier_10',
      role: 'cashier',
      allowedRoutes: ['/cashier', '/loan-disbursements', '/agent-handovers']
    },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/employee/create-branch-cashier" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -H "Content-Type: application/json" \\\n  -d '{"fullName": "Pooja Verma", "branchId": "brn_001", "role": "cashier"}'`
  },
  // Legacy aliases
  'branch-cashier-desk': {
    method: 'POST',
    endpoint: '/api/v1/cashier/counter/dispense',
    authRequired: true,
    requestPayload: { withdrawalCode: 'CW-781920', drawerId: 'DRW-CASHIER-01' },
    responsePayload: { success: true, status: 'DISPENSED', remainingDrawerCash: 240000.00 },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/cashier/counter/dispense" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -d '{"withdrawalCode": "CW-781920"}'`
  },
  'branch-vault-balancing': {
    method: 'POST',
    endpoint: '/api/v1/treasury/reconcile',
    authRequired: true,
    requestPayload: { branchId: 'brn_001', physicalCashCount: 500000, digitalRecordBalance: 500000 },
    responsePayload: { success: true, reconciliationStatus: 'BALANCED', variance: 0.00 },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/treasury/reconcile" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -d '{"physicalCashCount": 500000}'`
  },
  'branch-agent-handover': {
    method: 'POST',
    endpoint: '/api/v1/agent/collection-submission/verify',
    authRequired: true,
    relatedEndpoints: [
      { method: 'POST', endpoint: '/api/v1/agent/collection-submission/verify', description: 'Cashier counts physical cash and inputs OTP' },
      { method: 'GET', endpoint: '/api/v1/agent/collection-submission/branch-pending', description: 'Pending agent collection submissions' },
      { method: 'POST', endpoint: '/api/v1/treasury/agent-handover', description: 'Till balance clearance' }
    ],
    requestPayload: {
      submissionId: 'sub_987654',
      otp: '482910'
    },
    responsePayload: {
      success: true,
      message: 'Collection submission verified successfully'
    },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/agent/collection-submission/verify" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -H "Content-Type: application/json" \\\n  -d '{"submissionId": "sub_987654", "otp": "482910"}'`
  },
  'branch-strict-data-scoping': {
    method: 'GET',
    endpoint: '/api/v1/branch/context',
    authRequired: true,
    relatedEndpoints: [
      { method: 'GET', endpoint: '/api/v1/branch/context', description: 'Fetch authenticated branch manager perimeter and scoping context' },
      { method: 'GET', endpoint: '/api/v1/branch/isolated-records', description: 'Retrieve branch-isolated accounts, staff, and customer records' }
    ],
    requestPayload: null,
    responsePayload: {
      success: true,
      branchId: 'BR-MUM-FORT-01',
      branchName: 'Mumbai Fort Commercial Branch',
      managerId: 'emp_mgr_881920',
      role: 'branch_manager',
      isolationMode: 'STRICT_BRANCH_SCOPED',
      accessibleEntities: [
        'CUSTOMERS',
        'LOANS',
        'STAFF_CASHIERS',
        'VAULT_ACCOUNTS',
        'FIXED_ASSETS'
      ]
    },
    curl: `curl -X GET "https://api.fivopay.com/api/v1/branch/context" \\\n  -H "Authorization: Bearer <JWT_TOKEN>"`
  },
  'branch-staff-cashier-provisioning': {
    method: 'POST',
    endpoint: '/api/v1/employee/create-branch-cashier',
    authRequired: true,
    roles: ['branch_manager', 'manager', 'admin'],
    requestPayload: {
      employeeId: 'CSH-MUM-012',
      firstName: 'Rahul',
      lastName: 'Sharma',
      email: 'rahul.csh@fivopay.com',
      phone: '9876543210',
      dateOfBirth: '1995-04-12',
      gender: 'male',
      addressLine1: 'Branch Premises, Fort',
      city: 'Mumbai',
      state: 'Maharashtra',
      postalCode: '400001',
      dateOfJoining: '2026-09-01',
      salary: 32000,
      password: 'SecurePassword@123'
    },
    responsePayload: {
      success: true,
      message: 'Branch cashier Rahul Sharma successfully provisioned',
      employee: {
        id: 'emp_6650a1b2c3d4e5f6a7b8c9d0',
        employeeId: 'CSH-MUM-012',
        name: 'Rahul Sharma',
        department: 'CASH',
        role: 'cashier',
        branchId: 'BR-MUM-FORT-01',
        status: 'ACTIVE'
      }
    },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/employee/create-branch-cashier" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -H "Content-Type: application/json" \\\n  -d '{"employeeId": "CSH-MUM-012", "firstName": "Rahul", "lastName": "Sharma", "email": "rahul.csh@fivopay.com", "phone": "9876543210", "salary": 32000}'`
  },
  'branch-doorstep-logistics-dispatch': {
    method: 'PATCH',
    endpoint: '/api/v1/cash-withdrawals/branch/assign-agent/req_6650a1b2c3d4',
    authRequired: true,
    relatedEndpoints: [
      { method: 'GET', endpoint: '/api/v1/cash-withdrawals/branch/requests', description: 'List pending doorstep cash delivery requests for branch' },
      { method: 'PATCH', endpoint: '/api/v1/cash-withdrawals/branch/assign-agent/:requestId', description: 'Assign field agent to doorstep cash delivery request' },
      { method: 'GET', endpoint: '/api/v1/cash-withdrawals/branch/agent-status', description: 'Monitor field agents active delivery status and GPS' }
    ],
    requestPayload: {
      agentId: 'emp_6650a1b2c3d4e5f6a7b8c9d0'
    },
    responsePayload: {
      success: true,
      message: 'Field agent successfully assigned to doorstep cash delivery',
      requestId: 'req_6650a1b2c3d4',
      agentId: 'emp_6650a1b2c3d4e5f6a7b8c9d0',
      status: 'agent_assigned',
      assignedAt: '2026-09-22T10:15:30Z'
    },
    curl: `curl -X PATCH "https://api.fivopay.com/api/v1/cash-withdrawals/branch/assign-agent/req_6650a1b2c3d4" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -H "Content-Type: application/json" \\\n  -d '{"agentId": "emp_6650a1b2c3d4e5f6a7b8c9d0"}'`
  },
  'branch-loan-governance-lifecycle': {
    method: 'POST',
    endpoint: '/api/v1/esign/assign-eStamp',
    authRequired: true,
    relatedEndpoints: [
      { method: 'PATCH', endpoint: '/api/v1/loan/verify-loan/:loanId', description: 'Step 1: Changes loan status from pending to verified' },
      { method: 'PATCH', endpoint: '/api/v1/loan/reject-loan/:loanId', description: 'Step 1: Rejects loan application with underwriter notes' },
      { method: 'PATCH', endpoint: '/api/v1/loan/approve-loan/:loanId', description: 'Step 2: Approves loan & auto-generates EMI repayment schedule' },
      { method: 'POST', endpoint: '/api/v1/esign/generateEstamp/:loanId', description: 'Step 3: Zoop API procurement of official state stamp duty order ID' },
      { method: 'POST', endpoint: '/api/v1/esign/assign-eStamp', description: 'Step 4: Configures e-Stamp & multi-party signers (borrower, manager, guarantors)' },
      { method: 'GET', endpoint: '/api/v1/esign/esign-status/:loanId', description: 'Step 4: Real-time Aadhaar OTP multi-party digital signature tracking' },
      { method: 'PATCH', endpoint: '/api/v1/loan/allocate-cashier/:loanId', description: 'Step 5: Allocates verified loan to cashier counter desk' },
      { method: 'PATCH', endpoint: '/api/v1/loan/disburse-loan/:loanId', description: 'Step 6: Payout disbursement execution (teller or manager override)' }
    ],
    requestPayload: {
      loanId: '664f8a3d1b2c3d4e',
      estampId: 'EST-MH-948201',
      pdfUrl: 'https://storage.fivopay.com/agreements/loan_4812.pdf',
      guarantors: [
        {
          name: 'Suresh Patil',
          email: 'suresh.patil@gmail.com',
          phone: '9820012345'
        }
      ]
    },
    responsePayload: {
      success: true,
      loanId: '664f8a3d1b2c3d4e',
      estampId: 'EST-MH-948201',
      status: 'ESIGN_IN_PROGRESS',
      signers: [
        { role: 'BORROWER', status: 'PENDING' },
        { role: 'BRANCH_MANAGER', status: 'PENDING' },
        { role: 'GUARANTOR', name: 'Suresh Patil', status: 'PENDING' }
      ],
      esignTrackingUrl: '/api/v1/esign/esign-status/664f8a3d1b2c3d4e'
    },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/esign/assign-eStamp" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -H "Content-Type: application/json" \\\n  -d '{"loanId": "664f8a3d1b2c3d4e", "estampId": "EST-MH-948201", "pdfUrl": "https://storage.fivopay.com/agreements/loan_4812.pdf", "guarantors": [{"name": "Suresh Patil", "email": "suresh.patil@gmail.com", "phone": "9820012345"}]}'`
  },
  'branch-assisted-rd-creation': {
    method: 'POST',
    endpoint: '/api/v1/recurring-deposit/branch/create-rd',
    authRequired: true,
    roles: ['branch_manager', 'manager', 'admin'],
    requestPayload: {
      userId: 'usr_664f8a3d1b2c3d4e5f6a7b8c',
      monthlyInstallment: 5000,
      tenureMonths: 12,
      interestRate: 7.5,
      firstInstallmentPaymentMode: 'cash'
    },
    responsePayload: {
      success: true,
      rdAccountId: 'RD-2026-004812',
      userId: 'usr_664f8a3d1b2c3d4e5f6a7b8c',
      monthlyInstallment: 5000,
      tenureMonths: 12,
      interestRate: 7.5,
      maturityAmount: 62480.00,
      firstInstallmentReceipt: 'RCP-RD-00129',
      status: 'ACTIVE'
    },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/recurring-deposit/branch/create-rd" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -H "Content-Type: application/json" \\\n  -d '{"userId": "usr_664f8a3d1b2c3d4e5f6a7b8c", "monthlyInstallment": 5000, "tenureMonths": 12, "interestRate": 7.5, "firstInstallmentPaymentMode": "cash"}'`
  },
  'branch-jlg-microfinance-approvals': {
    method: 'POST',
    endpoint: '/api/v1/joint-liability/loan/approve',
    authRequired: true,
    relatedEndpoints: [
      { method: 'GET', endpoint: '/api/v1/joint-liability/group', description: 'List branch Joint Liability Groups and center meeting schedules' },
      { method: 'POST', endpoint: '/api/v1/joint-liability/loan/approve', description: 'Sanction and approve collective JLG microfinance loan' }
    ],
    requestPayload: {
      groupId: 'jlg_grp_664f8a3d1b2c',
      sanctionedAmount: 300000,
      memberCount: 6,
      perMemberAllocation: 50000,
      repaymentCycle: 'WEEKLY',
      centerMeetingDay: 'TUESDAY'
    },
    responsePayload: {
      success: true,
      message: 'JLG group loan approved and scheduled for center disbursement',
      groupId: 'jlg_grp_664f8a3d1b2c',
      status: 'APPROVED',
      totalSanctioned: 300000,
      activeBorrowers: 6
    },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/joint-liability/loan/approve" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -H "Content-Type: application/json" \\\n  -d '{"groupId": "jlg_grp_664f8a3d1b2c", "sanctionedAmount": 300000}'`
  },
  'branch-fixed-assets-vault-treasury': {
    method: 'GET',
    endpoint: '/api/v1/treasury/accounts',
    authRequired: true,
    relatedEndpoints: [
      { method: 'GET', endpoint: '/api/v1/treasury/accounts', description: 'Branch vault and petty cash balance supervision' },
      { method: 'GET', endpoint: '/api/v1/fixed-asset/branch-assets', description: 'Supervise branch hardware, cash counters, and locker assets' }
    ],
    requestPayload: null,
    responsePayload: {
      success: true,
      branchId: 'BR-MUM-FORT-01',
      vault: {
        accountCode: '1001-VAULT-MUM',
        currentBalance: 4500000.00,
        dailyLimit: 10000000.00,
        holdingStatus: 'NORMAL'
      },
      pettyCash: {
        accountCode: '1002-PETTY-MUM',
        currentBalance: 28450.00,
        monthlyAllowance: 50000.00
      },
      fixedAssetsCount: 14,
      activeLockersCount: 60
    },
    curl: `curl -X GET "https://api.fivopay.com/api/v1/treasury/accounts" \\\n  -H "Authorization: Bearer <JWT_TOKEN>"`
  },
  'branch-kpi-board-pack-reports': {
    method: 'GET',
    endpoint: '/api/v1/reports/board-pack',
    authRequired: true,
    relatedEndpoints: [
      { method: 'GET', endpoint: '/api/v1/branch/get-branch-stats', description: 'Real-time customer counts, loans disbursed, and active portfolio' },
      { method: 'GET', endpoint: '/api/v1/reports/collections', description: 'Daily collection and delinquency percentages' },
      { method: 'GET', endpoint: '/api/v1/reports/dashboard', description: 'Operational branch health, teller efficiency, and recovery ratios' },
      { method: 'GET', endpoint: '/api/v1/reports/board-pack', description: 'Consolidated monthly governance pack for executive board meetings' }
    ],
    requestPayload: null,
    responsePayload: {
      success: true,
      branchId: 'BR-MUM-FORT-01',
      branchName: 'Mumbai Fort Branch',
      reportMonth: 'September 2026',
      stats: {
        totalCustomers: 12840,
        loansDisbursedMonth: 48250000.00,
        collectionEfficiency: '99.2%',
        delinquencyPAR30: '0.45%',
        activeFieldAgents: 8,
        tellerReconciliationStatus: 'BALANCED'
      },
      boardPackUrl: 'https://storage.fivopay.com/reports/board_pack_mum_sep2026.pdf'
    },
    curl: `curl -X GET "https://api.fivopay.com/api/v1/reports/board-pack" \\\n  -H "Authorization: Bearer <JWT_TOKEN>"`
  },
  'ai-wealth-advisor': {
    method: 'POST',
    endpoint: '/api/v1/ai-companion/wealth-recommendations',
    authRequired: true,
    requestPayload: { userId: 'usr_65a4bc9e' },
    responsePayload: { success: true, recommendedAction: 'SWEEP_SURPLUS_FD', projectedAnnualYield: '₹3,450 bonus interest' },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/ai-companion/wealth-recommendations" \\\n  -H "Authorization: Bearer <JWT_TOKEN>"`
  },
  'ai-doc-ocr-audit': {
    method: 'POST',
    endpoint: '/api/v1/ai-companion/ocr-audit-document',
    authRequired: true,
    requestPayload: { documentUrl: 'https://vault.fivopay.com/docs/loan_dossier_88.pdf' },
    responsePayload: { success: true, ocrStatus: 'PASSED', extractedIncome: 85000, signatureValid: true },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/ai-companion/ocr-audit-document" \\\n  -H "Authorization: Bearer <JWT_TOKEN>"`
  },
  'ai-conversational-bot': {
    method: 'POST',
    endpoint: '/api/v1/ai-companion/chat',
    authRequired: true,
    requestPayload: { prompt: 'What is my total loan EMI due date?' },
    responsePayload: { success: true, answer: 'Your next loan EMI of ₹13,083.50 is due on 5th October 2026.' },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/ai-companion/chat" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -d '{"prompt": "What is my total loan EMI due date?"}'`
  },
  'ai-risk-detector': {
    method: 'POST',
    endpoint: '/api/v1/ai-companion/detect-risk-anomalies',
    authRequired: true,
    requestPayload: { transactionId: 'TXN-WLT-99120' },
    responsePayload: { success: true, anomalyScore: 0.02, isFlagged: false, riskTier: 'LOW_RISK' },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/ai-companion/detect-risk-anomalies" \\\n  -H "Authorization: Bearer <JWT_TOKEN>"`
  },
  'gov-executive-analytics': {
    method: 'PATCH',
    endpoint: '/api/v1/loan/approve-loan/LN-2026-004812',
    authRequired: true,
    requestPayload: { approvedAmount: 150000, approvedInterestRate: 9.0, underwriterNotes: 'Sanctioned by Chairman Board' },
    responsePayload: { success: true, status: 'SANCTIONED', sanctionLetterUrl: 'https://vault.fivopay.com/letters/sanction.pdf' },
    curl: `curl -X PATCH "https://api.fivopay.com/api/v1/loan/approve-loan/LN-2026-004812" \\\n  -H "Authorization: Bearer <JWT_TOKEN>"`
  },
  'gov-general-ledger': {
    method: 'POST',
    endpoint: '/api/v1/ledger/journal-voucher',
    authRequired: true,
    requestPayload: { voucherDate: '2026-09-16', narration: 'Vault cash transfer', entries: [{ accountCode: '1001-VAULT', debit: 50000, credit: 0 }] },
    responsePayload: { success: true, voucherNumber: 'JV-2026-00912', isBalanced: true },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/ledger/journal-voucher" \\\n  -H "Authorization: Bearer <JWT_TOKEN>"`
  }
};

// Enrich productFeatures list
export const productFeatures = rawFeaturesData.map(feat => {
  const cat = productCategories.find(c => c.slug === feat.categorySlug);
  const defaultApi = defaultApiByFeatureId[feat.id] || {
    method: 'POST',
    endpoint: `/api/v1/${feat.id.replace(/-/g, '/')}`,
    authRequired: true,
    requestPayload: { featureId: feat.id, action: 'EXECUTE' },
    responsePayload: { success: true, status: 'PROCESSED', timestamp: '2026-09-16T15:00:00Z' },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/${feat.id.replace(/-/g, '/')}" \\\n  -H "Authorization: Bearer <JWT_TOKEN>"`
  };

  return {
    ...feat,
    api: feat.api || defaultApi,
    slug: feat.id,
    categoryName: cat ? cat.name : feat.categorySlug,
    group: cat ? cat.group : 'Customer',
    roles: feat.roles || ['Customer'],
    platforms: feat.platforms || ['Customer Mobile App', 'Manager Dashboard'],
    capabilities: feat.capabilities || ['Secure processing', 'Real-time validation', 'Audit logging'],
    workflow: feat.workflow || [
      { step: 1, title: 'Initiate Request', description: 'User enters details in mobile app or portal.' },
      { step: 2, title: 'Validation', description: 'System validates rules and security tokens.' },
      { step: 3, title: 'Execution', description: 'Core engine updates ledgers and executes transaction.' }
    ],
    businessValue: feat.businessValue || [
      { title: 'Efficiency', description: 'Streamlines operational turnaround times.' },
      { title: 'Security', description: 'Ensures 100% audit-proof transaction records.' }
    ],
    videoUrl: feat.videoUrl !== undefined ? feat.videoUrl : (cat && cat.videoUrl !== undefined ? cat.videoUrl : null),
    screenshots: []
  };
});

export const getCategoryBySlug = (slug) => {
  return productCategories.find(c => c.slug === slug);
};

export const getFeaturesByCategorySlug = (categorySlug) => {
  return productFeatures.filter(f => f.categorySlug === categorySlug);
};

export const getFeatureBySlugs = (categorySlug, featureSlug) => {
  return productFeatures.find(f => f.categorySlug === categorySlug && f.slug === featureSlug);
};
