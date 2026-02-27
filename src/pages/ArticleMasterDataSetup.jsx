import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Article.module.css'

const SECTIONS = [
    { id: 'overview', label: 'Overview' },
    { id: 'materials', label: '1. Materials' },
    { id: 'energy', label: '2. Energy' },
    { id: 'transport', label: '3. Transport' },
    { id: 'water', label: '4. Water & Waste' },
    { id: 'units', label: '5. Units' },
    { id: 'standards', label: '6. Standards' },
    { id: 'lifecycle', label: '7. Life Cycle' },
    { id: 'geography', label: '8. Geography & Time' },
    { id: 'org', label: '9. Organization' },
]

export default function ArticleMasterDataSetup() {
    const navigate = useNavigate()
    const [activeSection, setActiveSection] = useState('overview')

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = SECTIONS.map(s => document.getElementById(s.id))
            const scrollPosition = window.scrollY + 120
            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const el = sectionElements[i]
                if (el && el.offsetTop <= scrollPosition) {
                    setActiveSection(SECTIONS[i].id)
                    break
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id) => {
        const el = document.getElementById(id)
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
    }

    return (
        <div className={styles.page}>
            <div className={styles.topBar}>
                <button className={styles.backBtn} onClick={() => navigate('/manuals-admin')}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back to Admin Manuals
                </button>
            </div>

            <div className={styles.layout}>
                <aside className={styles.toc}>
                    <p className={styles.tocLabel}>MASTER DATA MODULES</p>
                    <nav className={styles.tocNav}>
                        {SECTIONS.map(s => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className={`${styles.tocLink} ${activeSection === s.id ? styles.tocLinkActive : ''}`}
                                onClick={(e) => { e.preventDefault(); scrollToSection(s.id) }}
                            >
                                {s.label}
                            </a>
                        ))}
                    </nav>
                </aside>

                <article className={styles.article}>
                    <div className={styles.breadcrumb}>
                        <button className={styles.breadLink} onClick={() => navigate('/help-centre')}>Help Center</button>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        <button className={styles.breadLink} onClick={() => navigate('/manuals-admin')}>Admin Manuals</button>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        <span className={styles.breadCurrent}>Master Data Setup</span>
                    </div>

                    <div className={styles.articleHeader}>
                        <span className={styles.articleTag}>ADMIN MANUALS · DOCUMENT #07</span>
                        <h1 className={styles.articleTitle}>What is Master Data Setup in EnviGuide?</h1>
                        <p className={styles.articleSubtitle}>
                            The reference data layer used to standardize all lookups for PCF requests, components, and reports.
                        </p>
                    </div>

                    <hr className={styles.divider} />

                    {/* Overview */}
                    <section id="overview" className={styles.section}>
                        <h2 className={styles.sectionTitle}>Overview</h2>
                        <p className={styles.body}>
                            Master Data Setup is the <strong>reference data layer</strong> of EnviGuide used to standardize all lookups (materials, energy, transport, water/waste, units, standards, life cycle, geography/time, organization).
                        </p>
                        <p className={styles.body}>
                            It ensures every product and process uses the same controlled lists so calculations and reports are consistent, auditable, and reusable across the system.
                        </p>

                        <h3 className={styles.subSectionTitle}>The 9 Master Data Setup modules</h3>
                        <div className={styles.articleTable}>
                            <table>
                                <thead>
                                    <tr><th>#</th><th>Module Name</th><th>Purpose</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>1</td><td><strong>Materials Configuration</strong></td><td>Maintain material and composition master (e.g., metals, plastics).</td></tr>
                                    <tr><td>2</td><td><strong>Energy Configuration</strong></td><td>Define all energy sources, energy types, fuels, and attributes.</td></tr>
                                    <tr><td>3</td><td><strong>Transport Configuration</strong></td><td>Define transport modes, vehicles, routes, and related attributes.</td></tr>
                                    <tr><td>4</td><td><strong>Water & Waste Configuration</strong></td><td>Define water sources/uses and waste categories/treatments.</td></tr>
                                    <tr><td>5</td><td><strong>Units Configuration</strong></td><td>Central list of units and unit families used across modules.</td></tr>
                                    <tr><td>6</td><td><strong>Standards & Compliance</strong></td><td>List of standards, certificates, and verification schemes.</td></tr>
                                    <tr><td>7</td><td><strong>Life Cycle & Methodology</strong></td><td>Define life cycle stages, boundaries, and LCA methodologies.</td></tr>
                                    <tr><td>8</td><td><strong>Geography & Time</strong></td><td>Countries/regions and time periods/time zones.</td></tr>
                                    <tr><td>9</td><td><strong>Organization Configuration</strong></td><td>Master data about suppliers and supplier tiers.</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* 1. Materials */}
                    <section id="materials" className={styles.section}>
                        <h2 className={styles.sectionTitle}>1. Materials Configuration</h2>
                        <p className={styles.body}>Master list of all materials used in products/components, plus composition structures (especially metals).</p>
                        <h3 className={styles.subSectionTitle}>Sub-entities</h3>
                        <ul className={styles.body}>
                            <li><strong>Material Category / Type:</strong> Metal, Plastic, Rubber, Glass, Composite.</li>
                            <li><strong>Composition Type:</strong> Indicates impact comes from multiple sub-metals.</li>
                            <li><strong>Composition Metal:</strong> Individual options like Fe, Cu, Al, Zn.</li>
                            <li><strong>Composition Metal Type:</strong> Grouping like Ferrous, Non-Ferrous, Precious.</li>
                            <li><strong>Material Definition:</strong> Actual material appearing in BoMs (e.g., Steel Grade 304).</li>
                        </ul>

                        <div className={styles.calloutBlue}>
                            <div className={styles.calloutIcon}>💡</div>
                            <div>
                                <p className={styles.calloutTitle}>Example: Stainless Steel 304</p>
                                <p className={styles.calloutText}>
                                    Linked to a Metal Composition profile with Fe 70%, Cr 18%, Ni 8%, Mn 2%.
                                </p>
                            </div>
                        </div>

                        <h3 className={styles.subSectionTitle}>Composition Metal Grid</h3>
                        <div className={styles.articleTable}>
                            <table>
                                <thead><tr><th>Column Name</th><th>Type</th><th>Description</th><th>Example</th></tr></thead>
                                <tbody>
                                    <tr><td>CODE</td><td>String</td><td>Unique system code</td><td>MCM0001</td></tr>
                                    <tr><td>NAME</td><td>String</td><td>Business name of metal</td><td>Iron (Fe)</td></tr>
                                    <tr><td>ACTIONS</td><td>UI</td><td>Edit or Delete item</td><td>...</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className={styles.subSectionTitle}>Lifecycle</h3>
                        <div className={styles.flowSummaryBox}>
                            <div className={styles.flowSummaryStep}><div className={styles.flowSummaryNum}>1</div><p className={styles.flowSummaryText}><strong>Create:</strong> Define categories, metal types, and final material profiles.</p></div>
                            <div className={styles.flowSummaryStep}><div className={styles.flowSummaryNum}>2</div><p className={styles.flowSummaryText}><strong>Use:</strong> Picked in Components Master and PCF Request BoMs.</p></div>
                            <div className={styles.flowSummaryStep}><div className={styles.flowSummaryNum}>3</div><p className={styles.flowSummaryText}><strong>Update:</strong> Add new metals or adjust composition percentages.</p></div>
                        </div>
                    </section>

                    {/* 2. Energy */}
                    <section id="energy" className={styles.section}>
                        <h2 className={styles.sectionTitle}>2. Energy Configuration</h2>
                        <p className={styles.body}>Master list of energy carriers used in manufacturing and upstream/downstream processes.</p>
                        <h3 className={styles.subSectionTitle}>Entity Structure</h3>
                        <ul className={styles.body}>
                            <li><strong>Energy Source:</strong> Electricity, Natural Gas, Diesel, LPG.</li>
                            <li><strong>Energy Type:</strong> "Grid electricity - Country X mix".</li>
                            <li><strong>Fuel Details:</strong> Net calorific value (NCV), density data.</li>
                        </ul>
                        <div className={styles.articleTable}>
                            <table>
                                <thead><tr><th>Column Name</th><th>Type</th><th>Description</th><th>Example</th></tr></thead>
                                <tbody>
                                    <tr><td>CODE</td><td>String</td><td>Unique ID</td><td>ENE0001</td></tr>
                                    <tr><td>NAME</td><td>String</td><td>Energy variant name</td><td>Electricity - Grid India</td></tr>
                                    <tr><td>RENEWABLE FLAG</td><td>Bool</td><td>Renewable status</td><td>Yes / No</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* 3. Transport */}
                    <section id="transport" className={styles.section}>
                        <h2 className={styles.sectionTitle}>3. Transport Configuration</h2>
                        <p className={styles.body}>Standardizes transport descriptions across the value chain.</p>
                        <h3 className={styles.subSectionTitle}>Entities</h3>
                        <ul className={styles.body}>
                            <li><strong>Transport Mode:</strong> Road, Rail, Air, Sea, Inland Waterways.</li>
                            <li><strong>Vehicle Type:</strong> 16–32 t EURO 6 diesel truck, Electric van.</li>
                            <li><strong>Route / Relation:</strong> Origin, Destination, Default distance.</li>
                        </ul>
                        <div className={styles.articleTable}>
                            <table>
                                <thead><tr><th>Column Name</th><th>Type</th><th>Description</th><th>Example</th></tr></thead>
                                <tbody>
                                    <tr><td>CODE</td><td>String</td><td>Vehicle identifier</td><td>TRK_16T_EURO6</td></tr>
                                    <tr><td>FUEL TYPE</td><td>String</td><td>Fuel consumed</td><td>Diesel</td></tr>
                                    <tr><td>DEFAULT UNIT</td><td>String</td><td>Activity unit</td><td>tkm</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* 4. Water & Waste */}
                    <section id="water" className={styles.section}>
                        <h2 className={styles.sectionTitle}>4. Water & Waste Configuration</h2>
                        <p className={styles.body}>Control vocabulary for water uses and waste streams.</p>
                        <h3 className={styles.subSectionTitle}>Entities</h3>
                        <ul className={styles.body}>
                            <li><strong>Water Source/Use:</strong> Municipal, Recycled, Cooling, Process water.</li>
                            <li><strong>Waste Category/Type:</strong> Hazardous, Recyclable, Mixed packaging waste.</li>
                            <li><strong>Waste Treatment:</strong> Landfill, Incineration, Recycling.</li>
                        </ul>
                        <div className={styles.articleTable}>
                            <table>
                                <thead><tr><th>Column Name</th><th>Type</th><th>Description</th><th>Example</th></tr></thead>
                                <tbody>
                                    <tr><td>CODE</td><td>String</td><td>Identifier</td><td>WST0001</td></tr>
                                    <tr><td>CATEGORY</td><td>String</td><td>Waste classification</td><td>Hazardous</td></tr>
                                    <tr><td>DEFAULT TREATMENT</td><td>String</td><td>Standard method</td><td>Incineration</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* 5. Units */}
                    <section id="units" className={styles.section}>
                        <h2 className={styles.sectionTitle}>5. Units Configuration</h2>
                        <p className={styles.body}>Single master for measurement units and unit families.</p>
                        <div className={styles.articleTable}>
                            <table>
                                <thead><tr><th>Column Name</th><th>Type</th><th>Description</th><th>Example</th></tr></thead>
                                <tbody>
                                    <tr><td>CODE</td><td>String</td><td>Unit symbol</td><td>kg</td></tr>
                                    <tr><td>FAMILY</td><td>String</td><td>Unit group (Mass, Energy)</td><td>Mass</td></tr>
                                    <tr><td>CONVERSION</td><td>Number</td><td>Convert to base unit</td><td>1</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* 6. Standards */}
                    <section id="standards" className={styles.section}>
                        <h2 className={styles.sectionTitle}>6. Standards & Compliance</h2>
                        <p className={styles.body}>List of sustainability standards, certifications, and verification schemes.</p>
                        <ul className={styles.body}>
                            <li><strong>Standard:</strong> ISO 14067, GHG Protocol.</li>
                            <li><strong>Certificate / Label:</strong> EPD program, labels.</li>
                            <li><strong>Verification:</strong> Auditor types and verification steps.</li>
                        </ul>
                        <div className={styles.articleTable}>
                            <table>
                                <thead><tr><th>Column Name</th><th>Type</th><th>Description</th><th>Example</th></tr></thead>
                                <tbody>
                                    <tr><td>CODE</td><td>String</td><td>Standard ID</td><td>STD_ISO14067</td></tr>
                                    <tr><td>CATEGORY</td><td>String</td><td>LCA or GHG type</td><td>LCA Standard</td></tr>
                                    <tr><td>VALID FROM</td><td>Date</td><td>Effective period start</td><td>01-01-2019</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* 7. Life Cycle */}
                    <section id="lifecycle" className={styles.section}>
                        <h2 className={styles.sectionTitle}>7. Life Cycle & Methodology</h2>
                        <p className={styles.body}>Define life cycle stages, system boundaries, and LCA methodologies.</p>
                        <div className={styles.articleTable}>
                            <table>
                                <thead><tr><th>Column Name</th><th>Type</th><th>Description</th><th>Example</th></tr></thead>
                                <tbody>
                                    <tr><td>CODE</td><td>String</td><td>Stage ID</td><td>A1</td></tr>
                                    <tr><td>NAME</td><td>String</td><td>Stage description</td><td>Raw material supply</td></tr>
                                    <tr><td>ORDER</td><td>Number</td><td>Process index</td><td>1</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* 8. Geography */}
                    <section id="geography" className={styles.section}>
                        <h2 className={styles.sectionTitle}>8. Geography & Time</h2>
                        <p className={styles.body}>Central repository for locations and time dimensions.</p>
                        <div className={styles.articleTable}>
                            <table>
                                <thead><tr><th>Column Name</th><th>Type</th><th>Description</th><th>Example</th></tr></thead>
                                <tbody>
                                    <tr><td>CODE</td><td>String</td><td>ISO Country Code</td><td>IN</td></tr>
                                    <tr><td>REGION</td><td>String</td><td>Global reporting region</td><td>APAC</td></tr>
                                    <tr><td>CURRENCY</td><td>String</td><td>Reporting currency</td><td>INR</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* 9. Organization */}
                    <section id="org" className={styles.section}>
                        <h2 className={styles.sectionTitle}>9. Organization Configuration</h2>
                        <p className={styles.body}>Focus on supplier role classification (Tier structures).</p>
                        <div className={styles.articleTable}>
                            <table>
                                <thead><tr><th>Column Name</th><th>Type</th><th>Description</th><th>Example</th></tr></thead>
                                <tbody>
                                    <tr><td>CODE</td><td>String</td><td>Supplier tier ID</td><td>TIER1</td></tr>
                                    <tr><td>NAME</td><td>String</td><td>Tier description</td><td>Tier 1</td></tr>
                                    <tr><td>ACTIVE</td><td>Bool</td><td>Availability flag</td><td>Yes</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Footer Nav */}
                    <div className={styles.articleFooterNav}>
                        <button className={styles.footerNavBtn} onClick={() => navigate('/admin-article-data-config')}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Previous: Data Configuration
                        </button>
                        <button className={styles.footerNavBtnNext} onClick={() => navigate('/manuals-admin')}>
                            Back to Admin Manuals
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </article>
            </div>
        </div>
    )
}
