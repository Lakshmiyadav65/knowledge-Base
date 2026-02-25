import { useNavigate } from 'react-router-dom'
import styles from './Article.module.css'

const SECTIONS = [
    { id: 'overview', label: 'Overview' },
    { id: 'prerequisite', label: 'Prerequisite' },
    { id: 'steps', label: 'Step-by-Step Guide' },
]

export default function ArticleAddProduct() {
    const navigate = useNavigate()

    return (
        <div className={styles.page}>

            {/* ── Minimal Top Bar ── */}
            <div className={styles.topBar}>
                <button className={styles.backBtn} onClick={() => navigate('/manuals-pcf')}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back to PCF Manuals
                </button>
            </div>

            {/* ── Main Layout ── */}
            <div className={styles.layout}>

                {/* ── Left Sidebar TOC ── */}
                <aside className={styles.toc}>
                    <p className={styles.tocLabel}>ON THIS PAGE</p>
                    <nav className={styles.tocNav}>
                        {SECTIONS.map(s => (
                            <a key={s.id} href={`#${s.id}`} className={styles.tocLink}>
                                {s.label}
                            </a>
                        ))}
                    </nav>

                    {/* Need Help */}
                    <div className={styles.helpCard}>
                        <div className={styles.helpIconWrap}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2" />
                                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className={styles.helpTitle}>Need Help?</p>
                        <p className={styles.helpDesc}>Our product team is here to assist you with mapping.</p>
                        <button className={styles.helpBtn} onClick={() => navigate('/support')}>Contact Admin</button>
                    </div>
                </aside>

                {/* ── Article Content ── */}
                <article className={styles.article}>

                    {/* Breadcrumb */}
                    <div className={styles.breadcrumb}>
                        <button className={styles.breadLink} onClick={() => navigate('/help-centre')}>Help Center</button>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18l6-6-6-6" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <button className={styles.breadLink} onClick={() => navigate('/manuals-pcf')}>PCF Manuals</button>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18l6-6-6-6" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className={styles.breadCurrent}>Add a Product</span>
                    </div>

                    {/* Article Header */}
                    <div className={styles.articleHeader}>
                        <span className={styles.articleTag}>PCF MANUALS</span>
                        <h1 className={styles.articleTitle}>How to Add a Product to the Product Portfolio</h1>
                        <p className={styles.articleSubtitle}>
                            Learn the collaborative process of adding new materials or products to your organization's
                            portfolio so they can be accurately included in PCF calculation requests.
                        </p>
                        <div className={styles.articleMeta}>
                            <span className={styles.metaItem}>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="10" stroke="#9ca3af" strokeWidth="2" />
                                    <path d="M12 6v6l4 2" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                4 min read
                            </span>
                            <span className={styles.metaDot} />
                            <span className={styles.metaItem}>Updated Feb 2026</span>
                        </div>
                    </div>

                    <hr className={styles.divider} />

                    {/* Overview */}
                    <section id="overview" className={styles.section}>
                        <h2 className={styles.sectionTitle}>Overview</h2>
                        <p className={styles.body}>
                            This guide explains how a new product is added to your Product Portfolio in Enviguide with
                            the help of the admin team. Only products that are available in your Product Portfolio
                            can be selected when creating a PCF request. Ensuring your portfolio is up-to-date is a
                            critical first step for all sustainability reporting.
                        </p>
                    </section>

                    {/* Prerequisite */}
                    <section id="prerequisite" className={styles.section}>
                        <h2 className={styles.sectionTitle}>Prerequisite</h2>
                        <div className={styles.calloutBlue}>
                            <div className={styles.calloutIcon}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="2" />
                                </svg>
                            </div>
                            <div>
                                <p className={styles.calloutTitle}>Before You Start</p>
                                <p className={styles.calloutText}>
                                    Before adding a product, you must have completed your company and base setup
                                    as described in <button onClick={() => navigate('/article-get-access')} style={{ background: 'none', border: 'none', color: '#3b82f6', fontWeight: '700', cursor: 'pointer', padding: 0 }}>“1. How to Get Access to Enviguide”</button>.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Steps */}
                    <section id="steps" className={styles.section}>
                        <h2 className={styles.sectionTitle}>Step-by-Step Guide</h2>

                        <div className={styles.numberedSteps}>
                            {/* Step 1 */}
                            <div className={styles.numberedStep}>
                                <div className={styles.stepCircle}>1</div>
                                <div className={styles.stepContent}>
                                    <p className={styles.stepTitle}>Email Enviguide Admin to Request Creation</p>
                                    <p className={styles.stepBody}>
                                        If a product is not visible in your portfolio, contact the Enviguide admin team.
                                        In your email, include the following details:
                                    </p>
                                    <ul className={styles.bullets} style={{ marginTop: '10px' }}>
                                        <li>Company name and contact person details</li>
                                        <li>Product name and internal product code</li>
                                        <li>Brief product description and intended use</li>
                                        <li>Product category (Raw material, packaging, etc.)</li>
                                        <li>Technical specification or datasheet (optional)</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className={styles.numberedStep}>
                                <div className={styles.stepCircle}>2</div>
                                <div className={styles.stepContent}>
                                    <p className={styles.stepTitle}>Admin Review and Mapping</p>
                                    <p className={styles.stepBody}>
                                        The Enviguide admin will review the shared details and create a new master
                                        record for the product. This product will be mapped specifically to your
                                        organization, ensuring it is only visible and usable by your authorized users.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className={styles.numberedStep}>
                                <div className={styles.stepCircle}>3</div>
                                <div className={styles.stepContent}>
                                    <p className={styles.stepTitle}>Verify in Product Portfolio</p>
                                    <p className={styles.stepBody}>
                                        Log in to Enviguide and navigate to the <strong>Product Portfolio</strong> section.
                                        Verify that the product appears correctly in the list and that all
                                        metadata (name, code, category) is accurate.
                                    </p>

                                    {/* Product Portfolio Screenshot */}
                                    <div className={styles.imageContainer}>
                                        <img
                                            src="/portfolio-screenshot.png"
                                            alt="Enviguide Product Portfolio"
                                            className={styles.articleImage}
                                        />
                                        <p className={styles.imageCaption}>PORTFOLIO VERIFICATION SCREEN</p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className={styles.numberedStep}>
                                <div className={styles.stepCircle}>4</div>
                                <div className={styles.stepContent}>
                                    <p className={styles.stepTitle}>Use the Product in PCF Requests</p>
                                    <p className={styles.stepBody}>
                                        Once the product is visible in your portfolio, it becomes available in the
                                        PCF module dropdown. You can now select this product to start a new
                                        Product Carbon Footprint calculation request.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>



                    {/* Article Footer Nav */}
                    <div className={styles.articleFooterNav}>
                        <button className={styles.footerNavBtn} onClick={() => navigate('/article-get-access')}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Previous: Getting Access
                        </button>
                        <button className={styles.footerNavBtnNext} onClick={() => navigate('/manuals-pcf')}>
                            Next: Create PCF Request
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
