import { useNavigate } from 'react-router-dom'
import styles from './Article.module.css'

const SECTIONS = [
    { id: 'navigate', label: '1. Navigate to Management' },
    { id: 'new-request', label: '2. Start New Request' },
    { id: 'overview', label: 'Overview' },
    { id: 'step-1', label: 'Step 1: Basic Information' },
    { id: 'step-2', label: 'Step 2: Product Details' },
    { id: 'step-3', label: 'Step 3: Documentation' },
    { id: 'step-4', label: 'Step 4: Review & Submit' },
    { id: 'tips', label: 'Success Tips' },
]

export default function ArticleCreatePCFRequest() {
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
                        <p className={styles.helpTitle}>Create Support</p>
                        <p className={styles.helpDesc}>Our analysts can help you with data mapping issues.</p>
                        <button className={styles.helpBtn} onClick={() => navigate('/support')}>Contact Expert</button>
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
                        <span className={styles.breadCurrent}>Create PCF Request</span>
                    </div>

                    {/* Article Header */}
                    <div className={styles.articleHeader}>
                        <span className={styles.articleTag}>PCF MANUALS</span>
                        <h1 className={styles.articleTitle}>3. How to Create a PCF Request for a product</h1>
                        <p className={styles.articleSubtitle}>
                            This guide provides step-by-step instructions on how to create a Product Carbon Footprint (PCF) Request
                            in the EnviGuide Management Suite.
                        </p>
                    </div>

                    <hr className={styles.divider} />

                    {/* Step 1: Navigate */}
                    <section id="navigate" className={styles.section}>
                        <h2 className={styles.sectionTitle}>Step 1: Navigate to PCF Request Management</h2>
                        <div className={styles.numberedSteps}>
                            <div className={styles.numberedStep}>
                                <div className={styles.stepCircle}>1</div>
                                <div className={styles.stepContent}>
                                    <p className={styles.stepBody}>Log in to your EnviGuide Management Suite account with your credentials</p>
                                </div>
                            </div>
                            <div className={styles.numberedStep}>
                                <div className={styles.stepCircle}>2</div>
                                <div className={styles.stepContent}>
                                    <p className={styles.stepBody}>From the left sidebar menu, locate and click on "PCF Request" (displayed with a green document icon)</p>
                                </div>
                            </div>
                            <div className={styles.numberedStep}>
                                <div className={styles.stepCircle}>3</div>
                                <div className={styles.stepContent}>
                                    <p className={styles.stepBody}>You will be redirected to the PCF Request Management Dashboard</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.imageContainer}>
                            <img src="/pcf-management-dashboard.png" alt="PCF Request Management Dashboard" className={styles.articleImage} />
                            <p className={styles.imageCaption}>PCF Request Management dashboard with status cards, search filters, and the green "+ New Request" button.</p>
                        </div>
                    </section>

                    {/* Step 2: Locate Button */}
                    <section id="new-request" className={styles.section}>
                        <h2 className={styles.sectionTitle}>Step 2: Locate and Click the "+New Request" Button</h2>
                        <p className={styles.body}>
                            In the PCF Requests section of the dashboard, you will see a prominent <strong>green "+ New Request" button</strong> located above the table of existing requests.
                        </p>
                        <div className={styles.calloutBlue} style={{ marginTop: '16px' }}>
                            <p className={styles.calloutText}>
                                📍 <strong>Location:</strong> The button is positioned to the left of the search bar in the PCF Requests section
                            </p>
                        </div>

                        <div className={styles.imageContainer}>
                            <img src="/locate-new-request.png" alt="New Request Button Location" className={styles.articleImage} />
                            <p className={styles.imageCaption}>ACTION: CLICK THIS BUTTON TO INITIALIZE THE PCF REQUEST CREATION FORM</p>
                        </div>
                    </section>

                    {/* Overview */}
                    <section id="overview" className={styles.section}>
                        <h2 className={styles.sectionTitle}>Overview</h2>
                        <p className={styles.body}>The PCF request process consists of 4 main steps:</p>
                        <div className={styles.dqGrid} style={{ marginTop: '20px' }}>
                            <div className={styles.dqCard}>
                                <p className={styles.dqTitle}>1. Basic Information</p>
                                <p className={styles.dqText}>Project titles, priority levels, and timelines.</p>
                            </div>
                            <div className={styles.dqCard}>
                                <p className={styles.dqTitle}>2. Product Details</p>
                                <p className={styles.dqText}>Categories, codes, and BOM mapping.</p>
                            </div>
                            <div className={styles.dqCard}>
                                <p className={styles.dqTitle}>3. Documentation</p>
                                <p className={styles.dqText}>Technical specs and product imagery.</p>
                            </div>
                            <div className={styles.dqCard}>
                                <p className={styles.dqTitle}>4. Review & Submit</p>
                                <p className={styles.dqText}>Final verification and tracking number.</p>
                            </div>
                        </div>
                    </section>

                    <hr className={styles.divider} />

                    {/* Step 1: Basic Information */}
                    <section id="step-1" className={styles.section}>
                        <h2 className={styles.sectionTitle}>Step 1: Basic Information</h2>
                        <p className={styles.body}>
                            In this first step, you'll enter the basic details of your PCF request. All fields marked with an asterisk
                            (<span style={{ color: '#ef4444' }}>*</span>) are required.
                        </p>

                        <div className={styles.infoBlock} style={{ marginTop: '30px' }}>
                            <h3 style={{ fontSize: '16px', color: '#111827', marginBottom: '8px' }}>1. Request Title <span style={{ color: '#ef4444' }}>*</span></h3>
                            <p className={styles.body} style={{ fontSize: '14px' }}>
                                Enter a descriptive title for your PCF request. This will help identify and track your request.
                                <br /><em>Example: "PCF Request for Product XYZ"</em>
                            </p>
                            <div className={styles.imageContainer}>
                                <img src="/pcf-step1-title.png" alt="Request Title Field" className={styles.articleImage} />
                            </div>
                        </div>

                        <div className={styles.infoBlock} style={{ marginTop: '30px' }}>
                            <h3 style={{ fontSize: '16px', color: '#111827', marginBottom: '8px' }}>2. Priority Level <span style={{ color: '#ef4444' }}>*</span></h3>
                            <p className={styles.body} style={{ fontSize: '14px' }}>Select the urgency of the request:</p>
                            <ul className={styles.bullets} style={{ marginBottom: '12px' }}>
                                <li><strong>High:</strong> 10 days turnaround time</li>
                                <li><strong>Medium:</strong> 21 days turnaround time</li>
                                <li><strong>Low:</strong> 30 days turnaround time</li>
                            </ul>
                            <div className={styles.imageContainer}>
                                <img src="/pcf-step1-priority.png" alt="Priority Level Selection" className={styles.articleImage} />
                            </div>
                        </div>

                        <div className={styles.infoBlock} style={{ marginTop: '30px' }}>
                            <h3 style={{ fontSize: '16px', color: '#111827', marginBottom: '8px' }}>3. Due Date <span style={{ color: '#ef4444' }}>*</span></h3>
                            <p className={styles.body} style={{ fontSize: '14px' }}>
                                This date is calculated automatically based on the priority level you select. It marks the expected completion date.
                            </p>
                            <div className={styles.imageContainer}>
                                <img src="/pcf-step1-duedate.png" alt="Due Date Field" className={styles.articleImage} />
                            </div>
                        </div>

                        <div className={styles.infoBlock} style={{ marginTop: '30px' }}>
                            <h3 style={{ fontSize: '16px', color: '#111827', marginBottom: '8px' }}>4. Requesting Organization <span style={{ color: '#ef4444' }}>*</span></h3>
                            <p className={styles.body} style={{ fontSize: '14px' }}>
                                Enter the name of the organization requesting the PCF.
                                <br /><em>Example: "XYZ Manufacturing Inc."</em>
                            </p>
                            <div className={styles.imageContainer}>
                                <img src="/pcf-step1-org.png" alt="Requesting Organization Field" className={styles.articleImage} />
                            </div>
                        </div>

                        <div className={styles.infoBlock} style={{ marginTop: '30px' }}>
                            <h3 style={{ fontSize: '16px', color: '#111827', marginBottom: '8px' }}>5. Request Description</h3>
                            <p className={styles.body} style={{ fontSize: '14px' }}>
                                Provide additional context or requirements for the PCF request (Maximum 500 characters).
                                <br /><em>Example: "Need PCF for sustainability report"</em>
                            </p>
                            <div className={styles.imageContainer}>
                                <img src="/pcf-step1-desc.png" alt="Request Description Field" className={styles.articleImage} />
                            </div>
                        </div>

                        <div className={styles.calloutGreen} style={{ marginTop: '40px' }}>
                            <p className={styles.calloutText}>
                                ✅ After completing Step 1, click <strong>Save & Continue</strong> to proceed to Step 2.
                            </p>
                        </div>
                    </section>

                    {/* Re-linking Footer for now while waiting for remaining content */}
                    <div className={styles.articleFooterNav}>
                        <button className={styles.footerNavBtn} onClick={() => navigate('/article-add-product')}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Back to Add Product
                        </button>
                        <button className={styles.footerNavBtnNext} onClick={() => navigate('/manuals-pcf')}>
                            Next: Review Content
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
