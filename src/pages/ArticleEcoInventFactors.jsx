import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Article.module.css'

const SECTIONS = [
    { id: 'overview', label: 'Overview' },
    { id: 'common', label: 'DNA of a Factor' },
    { id: 'materials', label: '1. Materials' },
    { id: 'electricity', label: '2. Electricity' },
    { id: 'fuel', label: '3. Fuel' },
    { id: 'packaging', label: '4. Packaging' },
    { id: 'vehicles', label: '5. Vehicles' },
    { id: 'waste', label: '6. Waste' },
]

export default function ArticleEcoInventFactors() {
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
                    <p className={styles.tocLabel}>TECHNICAL SPECIFICATIONS</p>
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
                        <span className={styles.breadCurrent}>EcoInvent Emission Factors</span>
                    </div>

                    <div className={styles.articleHeader}>
                        <span className={styles.articleTag} style={{ background: '#fef3c7', color: '#92400e' }}>TECHNICAL MANUAL · DOCUMENT #08</span>
                        <h1 className={styles.articleTitle}>EcoInvent Emission Factors Guide</h1>
                        <p className={styles.articleSubtitle}>
                            A detailed architectural breakdown of how EnviGuide converts activity data into climate impact using the world-standard EcoInvent database.
                        </p>
                    </div>

                    {/* Dashboard Style Overview */}
                    <section id="overview" className={styles.section}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '30px', alignItems: 'center' }}>
                            <div>
                                <h2 className={styles.sectionTitle}>System Architecture</h2>
                                <p className={styles.body}>
                                    EcoInvent factors in EnviGuide provide the numeric "bridge" between operational activities and environmental impact. Each factor is a verified dataset describing GHG output per unit.
                                </p>
                            </div>
                            <div style={{
                                background: '#f8fafc',
                                border: '1px solid #e2e8f0',
                                borderRadius: '16px',
                                padding: '24px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '15px'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>
                                    <span style={{ fontSize: '13px', color: '#64748b' }}>Primary Database</span>
                                    <span style={{ fontSize: '13px', fontWeight: '700', color: '#1e40af' }}>EcoInvent 3.11</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ fontSize: '13px', color: '#64748b' }}>Impact Metric</span>
                                    <span style={{ fontSize: '13px', fontWeight: '700', color: '#059669' }}>kg CO₂e</span>
                                </div>
                            </div>
                        </div>

                        {/* Calculation Formula Box */}
                        <div style={{
                            background: '#f1f7fe',
                            borderRadius: '16px',
                            padding: '32px 48px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '40px',
                            marginTop: '30px'
                        }}>
                            <div style={{ flexShrink: 0 }}>
                                <p style={{ margin: 0, fontWeight: '700', fontSize: '18px', color: '#1e3a8a', lineHeight: '1.2' }}>
                                    Calculation<br />Logic
                                </p>
                            </div>
                            <div style={{ height: '40px', width: '1px', background: '#dbeafe', opacity: 0.6 }}></div>
                            <div style={{ flex: 1, fontSize: '22px', color: '#64748b', lineHeight: '1.6' }}>
                                Activity Data <span style={{ color: '#cbd5e1', fontWeight: '300', margin: '0 4px' }}>×</span> <strong style={{ color: '#0f172a' }}>Emission Factor</strong> <span style={{ color: '#cbd5e1', fontWeight: '300', margin: '0 4px' }}>=</span> <br />
                                <strong style={{ color: '#0f172a', fontSize: '24px' }}>Impact</strong>
                            </div>
                        </div>
                    </section>

                    {/* The DNA Grid */}
                    <section id="common" className={styles.section}>
                        <h2 className={styles.sectionTitle}>The DNA of an Emission Factor</h2>
                        <p className={styles.body}>Every factor in EnviGuide contains high-fidelity metadata for audit traceability.</p>
                        <div className={styles.manualGrid}>
                            {[
                                { label: 'Category', val: 'Groups similar activities (Steel, Grid, etc)', bg: '#f1f5f9' },
                                { label: 'Geography', val: 'Region-specific production mixes (IN, EU, GLO)', bg: '#f0f9ff' },
                                { label: 'Unit', val: 'Basis of measurement (kg, kWh, tkm)', bg: '#f0fdf4' },
                                { label: 'Validity', val: 'Data source year and reference context', bg: '#fffbeb' },
                            ].map((item, i) => (
                                <div key={i} className={styles.manualCard}>
                                    <span className={styles.valueBadge} style={{ background: item.bg }}>{item.label}</span>
                                    <p style={{ marginTop: '12px', fontSize: '14px', color: '#4b5563', lineHeight: '1.5' }}>{item.val}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Specification Sheets */}
                    <div style={{ display: 'grid', gap: '40px', marginTop: '40px' }}>

                        {/* 1. Materials */}
                        <section id="materials" className={styles.manualCard} style={{ borderLeft: '5px solid #6366f1' }}>
                            <div className={styles.manualHeader}>
                                <div style={{ background: '#6366f1', color: '#fff', padding: '8px 12px', borderRadius: '8px', fontWeight: '700' }}>01</div>
                                <h3 style={{ margin: 0, fontSize: '20px', color: '#111827' }}>Materials Emission Factors</h3>
                            </div>
                            <p className={styles.body}>Converts raw mass into upstream carbon footprint.</p>
                            <div style={{ marginTop: '20px' }}>
                                <div className={styles.parameterRow}><span className={styles.paramLabel}>Primary Basis</span><span className={styles.paramValue}>kg / Ton</span></div>
                                <div className={styles.parameterRow}><span className={styles.paramLabel}>Boundary</span><span className={styles.paramValue}>Cradle-to-Gate</span></div>
                                <div className={styles.parameterRow}><span className={styles.paramLabel}>Logic</span><span className={styles.paramValue}>Mining, refining, and polymerization energy.</span></div>
                            </div>
                            <div className={styles.calloutBlue} style={{ marginTop: '20px', padding: '15px' }}>
                                <strong>Manual Insight:</strong> Use strictly for Scope 3 Category 1 (Purchased Goods).
                            </div>
                        </section>

                        {/* 2. Electricity */}
                        <section id="electricity" className={styles.manualCard} style={{ borderLeft: '5px solid #eab308' }}>
                            <div className={styles.manualHeader}>
                                <div style={{ background: '#eab308', color: '#fff', padding: '8px 12px', borderRadius: '8px', fontWeight: '700' }}>02</div>
                                <h3 style={{ margin: 0, fontSize: '20px', color: '#111827' }}>Electricity Emission Factors</h3>
                            </div>
                            <p className={styles.body}>Maps energy billing data to Scope 2 location-based impacts.</p>
                            <div style={{ marginTop: '20px' }}>
                                <div className={styles.parameterRow}><span className={styles.paramLabel}>Primary Basis</span><span className={styles.paramValue}>kWh</span></div>
                                <div className={styles.parameterRow}><span className={styles.paramLabel}>Key Variables</span><span className={styles.paramValue}>Grid mix, Voltage level (Low/Med/High)</span></div>
                                <div className={styles.parameterRow}><span className={styles.paramLabel}>Audit Source</span><span className={styles.paramValue}>EcoInvent Country Electricity Datasets</span></div>
                            </div>
                        </section>

                        {/* 3. Fuel */}
                        <section id="fuel" className={styles.manualCard} style={{ borderLeft: '5px solid #ef4444' }}>
                            <div className={styles.manualHeader}>
                                <div style={{ background: '#ef4444', color: '#fff', padding: '8px 12px', borderRadius: '8px', fontWeight: '700' }}>03</div>
                                <h3 style={{ margin: 0, fontSize: '20px', color: '#111827' }}>Fuel Emission Factors</h3>
                            </div>
                            <p className={styles.body}>Direct on-site combustion modeling for Boilers and Furnaces.</p>
                            <div style={{ marginTop: '20px' }}>
                                <div className={styles.parameterRow}><span className={styles.paramLabel}>Primary Basis</span><span className={styles.paramValue}>Liter, kg, m³, or MJ</span></div>
                                <div className={styles.parameterRow}><span className={styles.paramLabel}>Tech Mapping</span><span className={styles.paramValue}>Specific combustion efficiency markers</span></div>
                                <div className={styles.parameterRow}><span className={styles.paramLabel}>Reporting</span><span className={styles.paramValue}>Scope 1 (Direct) + Scope 3 (WTT)</span></div>
                            </div>
                        </section>

                        {/* 4. Packaging */}
                        <section id="packaging" className={styles.manualCard} style={{ borderLeft: '5px solid #3b82f6' }}>
                            <div className={styles.manualHeader}>
                                <div style={{ background: '#3b82f6', color: '#fff', padding: '8px 12px', borderRadius: '8px', fontWeight: '700' }}>04</div>
                                <h3 style={{ margin: 0, fontSize: '20px', color: '#111827' }}>Packaging Factors</h3>
                            </div>
                            <p className={styles.body}>Standardized items for secondary and tertiary packaging.</p>
                            <div style={{ marginTop: '20px' }}>
                                <div className={styles.parameterRow}><span className={styles.paramLabel}>Types</span><span className={styles.paramValue}>Corrugated, PE-Film, PET, Wooden-Pallet</span></div>
                                <div className={styles.parameterRow}><span className={styles.paramLabel}>EoL Impact</span><span className={styles.paramValue}>Integrated recycling/disposal assumptions</span></div>
                            </div>
                        </section>

                        {/* 5. Vehicles */}
                        <section id="vehicles" className={styles.manualCard} style={{ borderLeft: '5px solid #8b5cf6' }}>
                            <div className={styles.manualHeader}>
                                <div style={{ background: '#8b5cf6', color: '#fff', padding: '8px 12px', borderRadius: '8px', fontWeight: '700' }}>05</div>
                                <h3 style={{ margin: 0, fontSize: '20px', color: '#111827' }}>Vehicle Load Factors</h3>
                            </div>
                            <p className={styles.body}>Transport activity mapped per Ton-Kilometer.</p>
                            <div style={{ marginTop: '20px' }}>
                                <div className={styles.parameterRow}><span className={styles.paramLabel}>Unit</span><span className={styles.paramValue}>ton-km (tkm)</span></div>
                                <div className={styles.parameterRow}><span className={styles.paramLabel}>Granularity</span><span className={styles.paramValue}>Euro 5/6, Truck Size (7.5t - 32t)</span></div>
                            </div>
                        </section>

                        {/* 6. Waste */}
                        <section id="waste" className={styles.manualCard} style={{ borderLeft: '5px solid #10b981' }}>
                            <div className={styles.manualHeader}>
                                <div style={{ background: '#10b981', color: '#fff', padding: '8px 12px', borderRadius: '8px', fontWeight: '700' }}>06</div>
                                <h3 style={{ margin: 0, fontSize: '20px', color: '#111827' }}>Waste End-of-Life</h3>
                            </div>
                            <p className={styles.body}>Modeled impact of treatment and recovery scenarios.</p>
                            <div style={{ marginTop: '20px' }}>
                                <div className={styles.parameterRow}><span className={styles.paramLabel}>Scenarios</span><span className={styles.paramValue}>Landfill, Incineration, Recycling</span></div>
                                <div className={styles.parameterRow}><span className={styles.paramLabel}>Credits</span><span className={styles.paramValue}>Includes recovery benefits where applicable</span></div>
                            </div>
                        </section>
                    </div>

                    {/* Final Footer Section */}
                    <div style={{ marginTop: '60px', padding: '40px', background: '#eff6ff', borderRadius: '20px', textAlign: 'center' }}>
                        <h3 style={{ color: '#1e40af', fontSize: '24px', margin: '0 0 10px' }}>Ready for Audit?</h3>
                        <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto 25px' }}>
                            Every factor used in EnviGuide can be traced back to a specific EcoInvent Process ID, ensuring 100% compliance with ISO 14067 standards.
                        </p>
                        <button className={styles.breadLink} onClick={() => navigate('/manuals-admin')}>Return to Admin Manuals Central</button>
                    </div>

                    {/* Footer Nav */}
                    <div className={styles.articleFooterNav}>
                        <button className={styles.footerNavBtn} onClick={() => navigate('/admin-article-master-setup')}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Previous: Master Data Setup
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
