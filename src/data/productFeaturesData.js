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
    purpose: 'Powers multi-channel money movement pipelines connecting member wallets, bank accounts, UPI 2.0, NPCI settlement engines, and PPI prepaid card issuance.',
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
    shortDescription: 'Automated passive wealth booster — automatically sweeping idle wallet savings into high-yield deposits and reverse sweeping on demand.',
    purpose: 'Maximizes interest yield for members by dynamically sweeping surplus wallet balances above a threshold into short-term deposit units, with LIFO reverse sweeps for liquidity.',
    primaryUsers: ['Customer', 'Core Banking Engine'],
    businessValue: 'Optimizes capital yield for members while preserving 100% instant liquidity for daily wallet expenses.',
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
    name: 'Loan & Credit Lifecycle Engine',
    group: 'Lending',
    icon: 'Briefcase',
    videoUrl: '/videos/VAHT-d8a-SA.mp4',
    shortDescription: 'End-to-end credit lifecycle (Personal, Gold, Business, Agriculture, JLG) with multi-stage approval funnel from customer eSign to chairman sanction.',
    purpose: 'Controls the complete credit origination and recovery cycle — from eSign application to manager audit, chairman sanction, automated disbursal, and loan dossiers.',
    primaryUsers: ['Customer', 'Field Agent', 'Branch Manager', 'Chairman / Admin'],
    businessValue: 'Drives loan portfolio growth, reduces non-performing assets (NPA) via automated collection schedules, and ensures multi-tier executive risk governance.',
    featureCount: 2
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
    shortDescription: 'Field Operations & Doorstep Banking — agent mobile app for offline customer onboarding, doorstep cash collection, thermal printing, and vault handovers.',
    purpose: 'Equips door-to-door field agents with offline transaction caching, bluetooth thermal receipt printing, real-time agent GPS audit trails, and end-of-day branch till handovers.',
    primaryUsers: ['Field Agent', 'Branch Manager'],
    businessValue: 'Maximizes field collection velocity, expands financial inclusion in rural sectors, and eliminates manual ledger errors.',
    featureCount: 2
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
    shortDescription: 'Managing counter liquidity, withdrawal code approvals, cashier drawer balancing, field agent cash check-ins, and vault reconciliation.',
    purpose: 'Secures physical cash movement at branch counter desks, cashier drawers, and main vault balances with dual-auth code verification and teller reconciliation.',
    primaryUsers: ['Cashier', 'Branch Manager'],
    businessValue: 'Ensures zero cash mismatch, audit-proof vault balancing, and seamless multi-level teller reconciliation.',
    featureCount: 3
  },
  {
    id: 'manager-branch-management',
    number: 11,
    slideNumber: '13 / 16',
    slug: 'manager-branch-management',
    name: 'Branch Management & Loan Verification',
    group: 'Operations',
    icon: 'Building2',
    videoUrl: '/videos/VAHT-UoLsO8.mp4',
    shortDescription: 'Supervising branch performance, first-stage loan reviews, compliance exceptions, agent collection metrics, and branch health dashboards.',
    purpose: 'Provides branch managers with full supervisory controls over daily customer approvals, field agent collection metrics, first-stage credit audits, and local branch compliance.',
    primaryUsers: ['Branch Manager'],
    businessValue: 'Empowers branch managers to optimize operational productivity, enforce KYC compliance, and control credit risk locally.',
    featureCount: 3
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
  { name: 'Operations', categorySlugs: ['field-operations', 'branch-cash-operations', 'manager-branch-management'] },
  { name: 'Intelligence', categorySlugs: ['ai-intelligent-automation'] },
  { name: 'Governance', categorySlugs: ['executive-governance-analytics'] }
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
      { step: 2, title: 'Dashboard Overview', description: 'Inspects savings, wallet, deposit, and active loan balances.' },
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
    description: 'Provides in-app support ticketing and member referral tracking. Members can raise service queries, upload proof documents, track resolution countdowns, and receive wallet cashback rewards for referring new active members.',
    roles: ['Customer', 'Branch Manager'], platforms: ['Customer Mobile App', 'Manager Dashboard'],
    capabilities: ['Support ticket creation with SLA countdown timer', 'Categorization tags (Passbook, KYC, Wallet, Loan, Equity)', 'Member referral link generator & automated cashback credit', 'Branch manager ticket assignment & resolution queue'],
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
    id: 'pay-wallet-funding', number: '2.1', categorySlug: 'payments-money-movement',
    title: 'Wallet Top-Up & Multi-Source Funding Engine',
    shortDescription: 'Add funds to digital wallet balance via NPCI UPI, debit cards, netbanking, or branch counter cash deposit.',
    description: 'Enables members to top up their Fivopay digital wallet balance using multiple payment channels, ensuring immediate liquidity for daily transactions and bill payments.',
    roles: ['Customer', 'Cashier'], platforms: ['Customer Mobile App', 'Manager Dashboard', 'Payment Infra'],
    capabilities: ['Multi-channel wallet top-up engine', 'Zero-fee UPI wallet loading', 'Instant webhook balance reconciliation', 'Cashier desk physical cash top-up'],
    workflow: [
      { step: 1, title: 'Select Top-Up Mode', description: 'Choose UPI, Netbanking, Card, or Branch Cash deposit.' },
      { step: 2, title: 'Authorize Payment', description: 'Enter UPI PIN or authorize via gateway.' },
      { step: 3, title: 'Balance Credited', description: 'Wallet balance updated instantly with notification.' }
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
    description: 'Manages enterprise payment integrations connecting NPCI UPI, card networks, banking APIs, settlement pipelines, and PPI wallet/card issuance engines for white-label partners.',
    roles: ['Admin', 'Core Banking Engine'], platforms: ['Payment Infra', 'Manager Dashboard'],
    capabilities: ['Payment Aggregator (PA) multi-source automated settlement', 'Payment Gateway (PG) fast 3DS transaction processing', 'Prepaid Payment Instrument (PPI) wallet/card issuance', 'White-Label PA, PG, and PPI infrastructure APIs for partner fintechs'],
    workflow: [
      { step: 1, title: 'Process Payment / Issue PPI', description: 'Executes gateway authorization or provisions prepaid wallet.' },
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
    capabilities: ['Single-use 6-digit timed withdrawal code generation', 'Strict 30-minute expiration window rate limiting', 'Instant cashier teller verification & wallet debiting', 'Real-time SMS advice upon counter cash receipt'],
    workflow: [
      { step: 1, title: 'Request Withdrawal Code', description: 'Customer inputs amount in app and requests counter cash code.' },
      { step: 2, title: 'Present Code at Desk', description: 'Presents 6-digit code to branch cashier teller.' },
      { step: 3, title: 'Cash Dispensed', description: 'Cashier validates code, dispenses cash, and wallet is debited.' }
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
    title: 'Wallet Balance Threshold Configuration',
    shortDescription: 'User configures maximum idle wallet balance (e.g. ₹10,000) for automated yield optimization.',
    description: 'Configures custom wallet threshold limits. Any surplus funds accumulated above the threshold are automatically swept into high-yield term deposit units.',
    roles: ['Customer'], platforms: ['Customer Mobile App'],
    capabilities: ['Custom threshold balance slider (e.g. ₹10,000 limit)', 'Automated sweep frequency rules', 'Real-time surplus balance visualizer'],
    workflow: [
      { step: 1, title: 'Set Threshold Limit', description: 'Member sets wallet threshold limit in mobile app.' }
    ],
    businessValue: [
      { title: 'Yield Maximization', description: 'Ensures idle member money is automatically invested into interest-bearing products.' }
    ],
    videoUrl: '/videos/VAHT-cjuGd0.mp4'
  },
  {
    id: 'savings-auto-sweep-engine', number: '3.2', categorySlug: 'auto-sweep-savings',
    title: 'Automated Sweep & LIFO Reverse Sweep Engine',
    shortDescription: 'Excess balance automatically moved to short-term FD units; reverse swept LIFO when wallet expenses occur.',
    description: 'Automated yield optimization engine that sweeps surplus wallet balances into short-term FD units overnight, with LIFO reverse sweeps when wallet expenses occur.',
    roles: ['Customer', 'Core Banking Engine'], platforms: ['Customer Mobile App', 'Core Banking Engine'],
    capabilities: ['Automatic FD unit creation for surplus funds', 'LIFO (Last-In-First-Out) reverse sweep liquidity protection', 'Real-time interest earned optimization dashboard'],
    workflow: [
      { step: 1, title: 'Auto-Sweep Surplus', description: 'Engine sweeps excess balance into short-term FD units overnight.' },
      { step: 2, title: 'Reverse Sweep Liquidity', description: 'When wallet dips below threshold, engine reverse sweeps FD units automatically.' }
    ],
    businessValue: [
      { title: 'Maximized Interest', description: 'Earns higher term deposit rates while keeping 100% daily wallet liquidity.' }
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
      { step: 3, title: 'Instant Booking', description: 'Debits wallet balance and issues digital deposit certificate.' }
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
    description: 'Manages deposit maturity settlements. Automatically calculates compound interest accrued, credits maturity proceeds to member savings wallet, or executes auto-renewal based on standing instructions.',
    roles: ['Customer', 'Branch Manager'], platforms: ['Customer Mobile App', 'Manager Dashboard'],
    capabilities: ['Automated maturity date calculator', 'Auto-renewal principal + interest option', 'Premature withdrawal penalty calculator'],
    workflow: [
      { step: 1, title: 'Maturity Reached', description: 'System triggers automated maturity payout.' },
      { step: 2, title: 'Credit Payout', description: 'Credits principal and interest directly to member wallet.' }
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
    description: 'Automatically sweeps small daily or weekly amounts from primary wallet into goal vaults, locking funds until the target date is reached to prevent early impulse spending.',
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
    description: 'Manages member equity ownership in cooperative financial institutions. Members can purchase share packages directly using their savings wallet or bank account, with instant entry in the central share allotment register.',
    roles: ['Customer', 'Branch Manager', 'Chairman / Admin'], platforms: ['Customer Mobile App', 'Manager Dashboard'],
    capabilities: ['Share package pricing tier grid', 'Instant wallet debit for share subscription', 'Automated share certificate PDF generation', 'Share allotment register entry & ledger tracking'],
    workflow: [
      { step: 1, title: 'Browse Share Tiers', description: 'Inspect available share classes and face values.' },
      { step: 2, title: 'Subscribe & Pay', description: 'Select share count and authorize wallet payment.' },
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
    shortDescription: 'Computes annual cooperative dividend payouts based on share equity holdings and credits member wallets.',
    description: 'Automates annual dividend calculation and distribution across all active cooperative members based on their share capital ratio and board-approved dividend percentage.',
    roles: ['Chairman / Admin', 'Branch Manager', 'Customer'], platforms: ['Manager Dashboard', 'Customer Mobile App'],
    capabilities: ['Pro-rata dividend calculation engine', 'Board resolution dividend percentage setup', 'Bulk automated wallet dividend crediting', 'Dividend tax deduction (TDS) statement generation'],
    workflow: [
      { step: 1, title: 'Set Dividend Rate', description: 'Chairman configures approved dividend rate (e.g. 8% p.a.).' },
      { step: 2, title: 'Compute Share Payouts', description: 'Engine calculates exact dividend for every shareholder.' },
      { step: 3, title: 'Bulk Crediting', description: 'Credits dividend payouts directly into member wallets with SMS advice.' }
    ],
    businessValue: [
      { title: 'Automated Dividend Payouts', description: 'Eliminates manual dividend cheque printing and distribution delays.' }
    ],
    videoUrl: '/videos/VAHT-ey1CcM.mp4'
  },

  // ==========================================
  // MODULE 7: Loan & Credit Lifecycle Engine
  // ==========================================
  {
    id: 'loan-flow-funnel', number: '7.1', categorySlug: 'loan-credit-lifecycle',
    title: 'End-to-End Credit Lifecycle & Multi-Stage Approval Funnel',
    shortDescription: 'Multi-role credit lifecycle: Customer eSign -> Manager Verification -> Chairman Approval -> Disbursal.',
    description: 'Controls the full credit lifecycle across Personal, Business, Gold, Agriculture, Individual, and Joint Liability Group (JLG) loans. Tracks loan dossiers seamlessly across customer eSign, manager verification, chairman sanction, and disbursal.',
    roles: ['Customer', 'Field Agent', 'Branch Manager', 'Chairman / Admin'], platforms: ['Customer Mobile App', 'Field Agent App', 'Manager Dashboard'],
    capabilities: [
      'Customer digital application & Aadhaar eSign (100%)',
      'Manager credit audit & document verification (78%)',
      'Chairman executive approval & sanction order (62%)',
      'Automated disbursal & EMI schedule creation (58%)'
    ],
    workflow: [
      { step: 1, title: 'Customer Application & eSign', description: 'Customer submits loan dossier and eSigns contract.' },
      { step: 2, title: 'Manager Verification', description: 'Branch manager audits income proof and collateral.' },
      { step: 3, title: 'Chairman Approval', description: 'Chairman reviews and digitally sanctions loan.' },
      { step: 4, title: 'Disbursal & EMI Schedule', description: 'Funds disbursed to wallet; EMI schedule created on ledger.' }
    ],
    businessValue: [
      { title: 'Credit Portfolio Control', description: 'Drives credit portfolio growth while enforcing multi-tier risk governance.' }
    ],
    videoUrl: '/videos/VAHT-d8a-SA.mp4'
  },
  {
    id: 'loan-esign-disbursement', number: '7.2', categorySlug: 'loan-credit-lifecycle',
    title: 'Paperless eSign Agreement & Controlled Disbursal Engine',
    shortDescription: 'Attaches Aadhaar/digital eSignature to approved loan contracts and triggers controlled cash/IMPS/NEFT disbursal into member accounts.',
    description: 'Automates loan contract execution and funds disbursement. Once sanctioned by the Chairman, the system generates a legally binding eSign contract, receives digital signature, and dispatches funds via IMPS/NEFT or counter cash queue.',
    roles: ['Customer', 'Branch Manager', 'Chairman / Admin', 'Cashier'], platforms: ['Customer Mobile App', 'Manager Dashboard'],
    capabilities: ['Legal Aadhaar eSign contract execution', 'Controlled loan disbursal queue (Cashier counter vs Instant IMPS/NEFT)', 'Automated EMI schedule creation on central ledger', 'Sanction letter & agreement PDF archiving'],
    workflow: [
      { step: 1, title: 'Digital Contract eSign', description: 'Customer eSigns sanctioned loan contract using Aadhaar OTP.' },
      { step: 2, title: 'Disbursement Authorization', description: 'Manager authorizes fund release mode (IMPS or Counter Cash).' },
      { step: 3, title: 'Ledger Post & EMI Trigger', description: 'Funds credited; active loan record and EMI schedule created on ledger.' }
    ],
    businessValue: [
      { title: 'Instant Disbursal', description: 'Slashes loan disbursement turnaround from 5 days to under 15 minutes.' }
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
    id: 'field-doorstep-collections', number: '9.1', categorySlug: 'field-operations',
    title: 'Field Operations & Doorstep Outreach App',
    shortDescription: 'Field Agent mobile app for offline customer onboarding, doorstep cash collection, thermal printing, and branch handovers.',
    description: 'Equips door-to-door field agents with a dedicated mobile application for financial inclusion in rural sectors. Agents can onboard members offline, collect cash repayments, print thermal receipts, and perform end-of-day branch till handovers.',
    roles: ['Field Agent', 'Branch Manager'], platforms: ['Field Agent App', 'Manager Dashboard'],
    capabilities: ['Offline onboarding without active cellular connection', 'Bluetooth thermal printer receipt generation', 'Doorstep cash repayment collection & QR scan', 'End-of-day branch vault cash handover audit'],
    workflow: [
      { step: 1, title: 'Doorstep Visit', description: 'Agent visits customer home or shop.' },
      { step: 2, title: 'Collect & Print Receipt', description: 'Collects cash repayment and prints thermal receipt.' },
      { step: 3, title: 'Branch Till Handover', description: 'Deposits collected cash at branch counter at end of day.' }
    ],
    businessValue: [
      { title: 'Rural Outreach', description: 'Maximizes field collection velocity and brings doorstep banking to unbanked sectors.' }
    ],
    videoUrl: '/videos/VAHT-Xq8NdY.mp4'
  },
  {
    id: 'field-agent-collections-kpi', number: '9.2', categorySlug: 'field-operations',
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
  // MODULE 9: Branch Cashier Operations
  // ==========================================
  {
    id: 'branch-cashier-desk', number: '9.1', categorySlug: 'branch-cash-operations',
    title: 'Branch Cashier Operations & Counter Liquidity',
    shortDescription: 'Managing physical cash counter liquidity, withdrawal code approvals, and cashier till count clearances.',
    description: 'Secures physical cash movement at branch counters and cashier drawers with withdrawal token verification and till balancing.',
    roles: ['Cashier', 'Branch Manager'], platforms: ['Manager Dashboard'],
    capabilities: ['Secure withdrawal code verification & cash dispensing', 'Cashier drawer till balance auditing against digital transaction logs', 'Physical cash count verification'],
    workflow: [
      { step: 1, title: 'Verify Withdrawal Code', description: 'Customer presents 6-digit withdrawal code.' },
      { step: 2, title: 'Dispense Cash', description: 'Cashier verifies code, dispenses cash, and updates drawer balance.' }
    ],
    businessValue: [
      { title: 'Zero Cash Discrepancy', description: 'Ensures zero cash mismatch at branch counter desks.' }
    ],
    videoUrl: '/videos/VAHT-axQ83g.mp4'
  },
  {
    id: 'branch-vault-balancing', number: '9.2', categorySlug: 'branch-cash-operations',
    title: 'Main Vault Reconciliation & Cashier Till Audit',
    shortDescription: 'Reconciling main branch vault balance with daily cashier drawer tills and agent collection check-ins.',
    description: 'Manages physical vault balancing, dual-custody vault keys, and end-of-day teller reconciliation for branch counters.',
    roles: ['Cashier', 'Branch Manager'], platforms: ['Manager Dashboard'],
    capabilities: ['Dual-custody vault key verification', 'End-of-day cashier till balancing', 'Field agent cash deposit check-in'],
    workflow: [
      { step: 1, title: 'Agent Cash Check-in', description: 'Field agent deposits daily cash collections at cashier desk.' },
      { step: 2, title: 'Vault Transfer', description: 'Surplus cashier till cash transferred to main branch vault.' }
    ],
    businessValue: [
      { title: 'Vault Security', description: 'Guarantees audit-proof vault balancing and daily teller reconciliation.' }
    ],
    videoUrl: '/videos/VAHT-axQ83g.mp4'
  },
  {
    id: 'branch-agent-handover', number: '9.3', categorySlug: 'branch-cash-operations',
    title: 'Field Agent Cash Handover & Till Clearance',
    shortDescription: 'Verifying doorstep agent cash collections against thermal receipt logs and approving agent till clearances.',
    description: 'Verifies field agent cash handovers against digital receipt logs, approving agent till clearances before closing daily branch books.',
    roles: ['Cashier', 'Branch Manager'], platforms: ['Manager Dashboard'],
    capabilities: ['Agent thermal receipt log matching', 'Instant agent cash handover clearance', 'Audit trail log entry'],
    workflow: [
      { step: 1, title: 'Handover Verification', description: 'Cashier counts agent physical cash against app receipt log.' },
      { step: 2, title: 'Clear Agent Till', description: 'Marks agent daily collection cleared on system.' }
    ],
    businessValue: [
      { title: 'Agent Audit Trail', description: 'Provides immutable audit log of field agent cash handovers.' }
    ],
    videoUrl: '/videos/VAHT-axQ83g.mp4'
  },

  // ==========================================
  // MODULE 10: Branch Management & Loan Verification
  // ==========================================
  {
    id: 'mgr-loan-verification', number: '10.1', categorySlug: 'manager-branch-management',
    title: 'First-Stage Loan Dossier Audit & Verification',
    shortDescription: 'Branch Manager first-stage credit audit, income proof verification, and collateral document validation.',
    description: 'Provides branch managers with tools to audit incoming loan dossiers, verify applicant income proofs, validate collateral property deeds, and forward dossiers for Chairman sanction.',
    roles: ['Branch Manager'], platforms: ['Manager Dashboard'],
    capabilities: ['Income document & bank statement audit tool', 'Collateral property deed verification', 'Credit score check & delinquency check', 'Forward for Chairman final sanction button'],
    workflow: [
      { step: 1, title: 'Review Loan Dossier', description: 'Manager inspects incoming customer application.' },
      { step: 2, title: 'Verify Collateral & Income', description: 'Audits income proof and collateral valuation.' },
      { step: 3, title: 'Forward to Chairman', description: 'Marks loan as verified and submits for executive sanction.' }
    ],
    businessValue: [
      { title: 'First-Line Credit Quality', description: 'Prevents non-performing assets by enforcing thorough first-stage credit checks.' }
    ],
    videoUrl: '/videos/VAHT-UoLsO8.mp4'
  },
  {
    id: 'mgr-compliance-flags', number: '10.2', categorySlug: 'manager-branch-management',
    title: 'KYC Compliance Exception & Fraud Resolution',
    shortDescription: 'Managing branch compliance flags, high-value transaction alerts, and document exception approvals.',
    description: 'Allows branch managers to resolve KYC exceptions, review name-match warnings, and approve high-value withdrawal flags.',
    roles: ['Branch Manager'], platforms: ['Manager Dashboard'],
    capabilities: ['KYC exception approval queue', 'High-value transaction override authorization', 'Suspicious activity report (SAR) initiation'],
    workflow: [
      { step: 1, title: 'Receive Exception Alert', description: 'Manager notified of high-value withdrawal or KYC flag.' },
      { step: 2, title: 'Investigate & Override', description: 'Inspects member history and authorizes transaction.' }
    ],
    businessValue: [
      { title: 'Risk Oversight', description: 'Empowers local branch managers to control fraud risk and enforce KYC compliance.' }
    ],
    videoUrl: '/videos/VAHT-UoLsO8.mp4'
  },
  {
    id: 'mgr-branch-metrics', number: '10.3', categorySlug: 'manager-branch-management',
    title: 'Branch Performance Metrics & Field Agent Audits',
    shortDescription: 'Supervising daily branch deposit growth, loan recovery rates, and field agent performance metrics.',
    description: 'Delivers real-time operational BI dashboards for branch managers to monitor daily CASA deposit growth, loan recovery rates, and field agent performance.',
    roles: ['Branch Manager'], platforms: ['Manager Dashboard'],
    capabilities: ['Branch daily P&L and deposit balance graph', 'Field agent collection target vs actual matrix', 'Staff activity audit trail logs'],
    workflow: [
      { step: 1, title: 'Monitor Branch Dashboard', description: 'Manager reviews daily branch deposit and recovery KPIs.' }
    ],
    businessValue: [
      { title: 'Operational Productivity', description: 'Drives branch operational performance and agent productivity.' }
    ],
    videoUrl: '/videos/VAHT-UoLsO8.mp4'
  },

  // ==========================================
  // MODULE 11: AI Advisor & Intelligent Automation
  // ==========================================
  {
    id: 'ai-wealth-advisor', number: '11.1', categorySlug: 'ai-intelligent-automation',
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
    id: 'ai-doc-ocr-audit', number: '11.2', categorySlug: 'ai-intelligent-automation',
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
    id: 'ai-conversational-bot', number: '11.3', categorySlug: 'ai-intelligent-automation',
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
    id: 'ai-risk-detector', number: '11.4', categorySlug: 'ai-intelligent-automation',
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
  // MODULE 12: Executive Governance, Accounting & Analytics
  // ==========================================
  {
    id: 'gov-executive-analytics', number: '12.1', categorySlug: 'executive-governance-analytics',
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
    id: 'gov-general-ledger', number: '12.2', categorySlug: 'executive-governance-analytics',
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
  'pay-wallet-funding': {
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
    responsePayload: { success: true, sweptBackAmount: 10000, walletBalanceRestored: 27500.00 },
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
    responsePayload: { success: true, totalMaturityPayout: 12565.00, creditedToWallet: 'JNSV-90812904' },
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
  'field-doorstep-collections': {
    method: 'POST',
    endpoint: '/api/v1/agent/collection/collect-cash',
    authRequired: true,
    requestPayload: { customerId: 'usr_65a4bc9e', loanId: 'LN-2026-004812', amount: 2500 },
    responsePayload: { success: true, collectionId: 'COL-99012', receiptNumber: 'RCP-2026-7781', smsDispatched: true },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/agent/collection/collect-cash" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -d '{"amount": 2500}'`
  },
  'field-agent-collections-kpi': {
    method: 'POST',
    endpoint: '/api/v1/agent/gps-checkin',
    authRequired: true,
    requestPayload: { agentId: 'agt_9912', latitude: 18.5204, longitude: 73.8567, visitStatus: 'CUSTOMER_VISITED' },
    responsePayload: { success: true, visitId: 'VST-2026-881', targetProgressPercentage: 78.5 },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/agent/gps-checkin" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -d '{"agentId": "agt_9912"}'`
  },
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
    endpoint: '/api/v1/treasury/agent-handover',
    authRequired: true,
    requestPayload: { agentId: 'agt_9912', cashHandoverAmount: 18500.00 },
    responsePayload: { success: true, handoverRef: 'HND-2026-9901', agentTillCleared: true },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/treasury/agent-handover" \\\n  -H "Authorization: Bearer <JWT_TOKEN>" \\\n  -d '{"cashHandoverAmount": 18500}'`
  },
  'mgr-loan-verification': {
    method: 'PATCH',
    endpoint: '/api/v1/manager/loan/verify/LN-2026-004812',
    authRequired: true,
    requestPayload: { verificationStatus: 'VERIFIED', managerNotes: 'Income proof and collateral verified.' },
    responsePayload: { success: true, status: 'VERIFIED_FORWARDED_CHAIRMAN' },
    curl: `curl -X PATCH "https://api.fivopay.com/api/v1/manager/loan/verify/LN-2026-004812" \\\n  -H "Authorization: Bearer <JWT_TOKEN>"`
  },
  'mgr-compliance-flags': {
    method: 'POST',
    endpoint: '/api/v1/manager/compliance/override',
    authRequired: true,
    requestPayload: { flagId: 'FLG-KYC-9901', overrideReason: 'Manual physical passport verified by branch manager' },
    responsePayload: { success: true, flagStatus: 'RESOLVED_OVERRIDDEN' },
    curl: `curl -X POST "https://api.fivopay.com/api/v1/manager/compliance/override" \\\n  -H "Authorization: Bearer <JWT_TOKEN>"`
  },
  'mgr-branch-metrics': {
    method: 'GET',
    endpoint: '/api/v1/manager/branch-kpis/brn_001',
    authRequired: true,
    requestPayload: null,
    responsePayload: { success: true, totalBranchDeposits: 18500000, totalActiveLoans: 42, collectionRatePercentage: 98.2 },
    curl: `curl -X GET "https://api.fivopay.com/api/v1/manager/branch-kpis/brn_001" \\\n  -H "Authorization: Bearer <JWT_TOKEN>"`
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
    videoUrl: feat.videoUrl || (cat ? cat.videoUrl : defaultVideoUrl),
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
