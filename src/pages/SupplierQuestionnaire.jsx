import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SupplierQuestionnaire.module.css'

const SECTIONS = [
    {
        id: 'org',
        label: 'Organization Details',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
    },
    {
        id: 'product',
        label: 'Product Details',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="2" />
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 'scope1',
        label: 'Scope 1',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: 'scope2',
        label: 'Scope 2',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: 'scope3',
        label: 'Scope 3',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="1" y="3" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M16 8l4 2-4 2M1 17l3 4M7 17l-3 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: 'scope4',
        label: 'Scope 4',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
]

const QUESTIONS = [
    {
        id: 'q01',
        num: 'QUESTION 01',
        title: 'Organization Name',
        defaultOpen: true,
        what: (
            <>
                The <strong className={styles.hl}>registered legal name</strong> of your entity as it appears on{' '}
                <strong className={styles.hl}>official government documentation</strong> and tax filings. If your
                organization is a subsidiary, please provide the name of the{' '}
                <strong className={styles.hl}>reporting unit specifically engaged</strong> in this supply chain.
            </>
        ),
        why: (
            <>
                Ensuring data is mapped to the <strong className={styles.hl}>correct legal entity</strong> is critical
                for <strong className={styles.hl}>auditing and compliance reporting</strong>. This avoids
                double-counting of emissions and ensures your organization receives{' '}
                <strong className={styles.hl}>proper credit</strong> for its sustainability performance.
            </>
        ),
    },
    {
        id: 'q02',
        num: 'QUESTION 02',
        title: 'Core Business Activity',
        defaultOpen: false,
        what: (
            <>
                Describe your organization's <strong className={styles.hl}>primary business activities</strong> and
                the <strong className={styles.hl}>industry sector</strong> you operate in. Include any relevant{' '}
                <strong className={styles.hl}>NACE or SIC codes</strong> if available.
            </>
        ),
        why: (
            <>
                Understanding your core business helps us apply the{' '}
                <strong className={styles.hl}>correct emission factors</strong> and{' '}
                <strong className={styles.hl}>benchmarking standards</strong> relevant to your sector.
            </>
        ),
    },
    {
        id: 'q0305',
        num: 'QUESTION 03-05',
        title: 'Contact Person Details',
        defaultOpen: false,
        what: (
            <>
                Provide the <strong className={styles.hl}>name, email, and role</strong> of the primary contact
                responsible for ESG data within your organization.
            </>
        ),
        why: (
            <>
                A dedicated contact ensures <strong className={styles.hl}>faster resolution</strong> of any data
                queries and maintains a clear <strong className={styles.hl}>audit trail</strong>.
            </>
        ),
    },
    {
        id: 'q08',
        num: 'QUESTION 08',
        title: 'Emissions Data Available?',
        defaultOpen: false,
        what: (
            <>
                Indicate whether your organization currently tracks and reports{' '}
                <strong className={styles.hl}>GHG emissions data</strong> (Scope 1, 2, or 3) and the{' '}
                <strong className={styles.hl}>reporting standard</strong> used (e.g. GHG Protocol, ISO 14064).
            </>
        ),
        why: (
            <>
                Knowing your current <strong className={styles.hl}>data maturity</strong> allows us to tailor
                guidance and identify <strong className={styles.hl}>gaps in reporting</strong> that need to be
                addressed.
            </>
        ),
    },
    {
        id: 'q09',
        num: 'QUESTION 09',
        title: 'Operational Emissions Data',
        defaultOpen: false,
        what: (
            <>
                Submit your <strong className={styles.hl}>total Scope 1 and Scope 2 emissions</strong> for the most
                recent reporting year, including the <strong className={styles.hl}>measurement boundary</strong> and
                any <strong className={styles.hl}>exclusions applied</strong>.
            </>
        ),
        why: (
            <>
                Operational emissions form the <strong className={styles.hl}>baseline</strong> for calculating your
                organization's overall <strong className={styles.hl}>carbon footprint contribution</strong> to our
                supply chain.
            </>
        ),
    },
]

function AccordionItem({ q }) {
    const [open, setOpen] = useState(q.defaultOpen)

    return (
        <div className={`${styles.accordion} ${open ? styles.accordionOpen : ''}`}>
            <button className={styles.accordionHeader} onClick={() => setOpen(o => !o)}>
                <div className={styles.accordionLeft}>
                    <span className={styles.qNum}>{q.num}</span>
                    <span className={styles.qTitle}>{q.title}</span>
                </div>
                <svg
                    className={`${styles.chevron} ${open ? styles.chevronUp : ''}`}
                    width="18" height="18" viewBox="0 0 24 24" fill="none"
                >
                    <path d="M6 9l6 6 6-6" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {open && (
                <div className={styles.accordionBody}>
                    <div className={styles.accordionGrid}>
                        <div className={styles.accordionCol}>
                            <p className={styles.colLabel}>WHAT WE ARE ASKING</p>
                            <p className={styles.colText}>{q.what}</p>
                        </div>
                        <div className={styles.accordionDivider} />
                        <div className={styles.accordionCol}>
                            <p className={styles.colLabel}>WHY THIS MATTERS</p>
                            <p className={styles.colText}>{q.why}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default function SupplierQuestionnaire() {
    const navigate = useNavigate()
    const [activeSection, setActiveSection] = useState('org')
    const [search, setSearch] = useState('')

    return (
        <div className={styles.page}>

            {/* ── Top Nav ── */}
            <nav className={styles.nav}>
                <button className={styles.navBrand} onClick={() => navigate('/')}>
                    <div className={styles.navLogo}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                            <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className={styles.navBrandName}>EnviGuide</span>
                </button>

                <ul className={styles.navLinks}>
                    <li><button className={styles.navLink} onClick={() => navigate('/')}>Dashboard</button></li>
                    <li><button className={`${styles.navLink} ${styles.navLinkActive}`} onClick={() => navigate('/help-centre')}>Guidance</button></li>
                    <li><button className={styles.navLink}>Reports</button></li>
                    <li><button className={styles.navLink} onClick={() => navigate('/support')}>Support</button></li>
                </ul>

                <div className={styles.navActions}>
                    <button className={styles.iconBtn} title="Notifications">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <div className={styles.avatarBtn}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="8" r="4" stroke="#6b7280" strokeWidth="2" />
                            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            </nav>

            {/* ── Body ── */}
            <div className={styles.body}>

                {/* ── Left Sidebar ── */}
                <aside className={styles.sidebar}>
                    <p className={styles.sidebarLabel}>QUESTIONNAIRE SECTIONS</p>
                    <nav className={styles.sidebarNav}>
                        {SECTIONS.map(s => (
                            <button
                                key={s.id}
                                className={`${styles.sidebarItem} ${activeSection === s.id ? styles.sidebarItemActive : ''}`}
                                onClick={() => setActiveSection(s.id)}
                            >
                                <span className={styles.sidebarIcon}>{s.icon}</span>
                                {s.label}
                            </button>
                        ))}
                    </nav>

                    {/* Need Help Card */}
                    <div className={styles.helpCard}>
                        <div className={styles.helpIconWrap}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2" />
                                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h4 className={styles.helpTitle}>Need Help?</h4>
                        <p className={styles.helpDesc}>Our ESG specialists are available to guide you through complex reporting.</p>
                        <button className={styles.helpBtn} onClick={() => navigate('/support')}>Contact Expert</button>
                    </div>
                </aside>

                {/* ── Main Content ── */}
                <main className={styles.main}>

                    {/* Breadcrumb */}
                    <div className={styles.breadcrumb}>
                        <button className={styles.breadcrumbLink} onClick={() => navigate('/help-centre')}>Help Center</button>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18l6-6-6-6" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className={styles.breadcrumbCurrent}>Supplier Questionnaire</span>
                    </div>

                    {/* Page Title Row */}
                    <div className={styles.titleRow}>
                        <div>
                            <h1 className={styles.pageTitle}>Supplier ESG Questionnaire</h1>
                            <p className={styles.pageSub}>
                                Provide structured environmental, product, and sustainability data to help track and improve our shared ESG impact.
                            </p>
                        </div>
                        <div className={styles.searchBox}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                                <circle cx="11" cy="11" r="8" stroke="#9ca3af" strokeWidth="2" />
                                <path d="M21 21l-4.35-4.35" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <input
                                className={styles.searchInput}
                                placeholder="Search guidance topics..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Section Title */}
                    <div className={styles.sectionTitle}>
                        <div className={styles.sectionBar} />
                        <h2 className={styles.sectionHeading}>Organization Details</h2>
                    </div>

                    {/* Accordion Questions */}
                    <div className={styles.questionList}>
                        {QUESTIONS.map(q => (
                            <AccordionItem key={q.id} q={q} />
                        ))}
                    </div>

                    {/* Guidance Note */}
                    <div className={styles.guidanceNote}>
                        <div className={styles.guidanceIcon}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="2" />
                                <path d="M12 16v-4M12 8h.01" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div>
                            <span className={styles.guidanceLabel}>Guidance Notes</span>
                            <p className={styles.guidanceText}>
                                This guidance page is updated quarterly based on the latest GHG Protocol and IFRS S2 standards. Last updated: Oct 2023.
                            </p>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    )
}
