import { useNavigate } from 'react-router-dom'
import styles from './ManualsPCF.module.css'

const MANUALS = [
    { id: 1, title: 'Managing User Access and Roles', path: '#' },
    { id: 2, title: 'Configuring Emission Factors & Databases', path: '#' },
    { id: 3, title: 'Reviewing and Approving PCF Requests', path: '#' },
    { id: 4, title: 'Platform Health Monitoring & Reporting', path: '#' },
]

export default function AdminManuals() {
    const navigate = useNavigate()

    return (
        <div className={styles.page}>
            <header className={styles.topBar}>
                <button className={styles.backBtn} onClick={() => navigate('/manuals-pcf')}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M5 12l7 7M5 12l7-7" />
                    </svg>
                    Back to Manuals
                </button>
            </header>

            <main className={styles.container}>
                <section className={styles.hero}>
                    <div className={styles.badge} style={{ background: '#eff6ff', color: '#1d4ed8', borderColor: '#dbeafe' }}>
                        Admin Documentation
                    </div>
                    <h1 className={styles.title}>Admin <span>User Manuals</span></h1>
                    <p className={styles.subtitle}>
                        Internal guides for platform administrators to manage users, data integrity, and system configurations.
                    </p>
                </section>

                <div className={styles.grid}>
                    {MANUALS.map(manual => (
                        <div key={manual.id} className={styles.card} onClick={() => manual.path !== '#' && navigate(manual.path)}>
                            <div className={styles.iconBox} style={{ background: '#eff6ff', color: '#3b82f6' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    <path d="M12 8v4M12 16h.01" />
                                </svg>
                            </div>
                            <h2 className={styles.cardHeadline}>{manual.title}</h2>
                            <div className={styles.footer}>
                                <span className={styles.number}>DOCUMENT #0{manual.id}</span>
                                <div className={styles.arrow} style={{ background: manual.path === '#' ? '#f1f5f9' : '#3b82f6', color: manual.path === '#' ? '#94a3b8' : '#fff' }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </main >
        </div >
    )
}
