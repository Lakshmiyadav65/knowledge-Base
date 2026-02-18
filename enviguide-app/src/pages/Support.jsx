import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Support.module.css'

const CATEGORIES = [
    { value: '', label: 'Select a category' },
    { value: 'technical', label: 'Technical Issue' },
    { value: 'billing', label: 'Billing & Subscription' },
    { value: 'data', label: 'Data & Reporting' },
]

export default function Support() {
    const navigate = useNavigate()
    const [form, setForm] = useState({ name: '', email: '', category: '', description: '' })
    const [errors, setErrors] = useState({})
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)

    const validate = () => {
        const e = {}
        if (!form.name.trim()) e.name = 'Please enter your name.'
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.'
        if (!form.category) e.category = 'Please select a category.'
        if (!form.description.trim()) e.description = 'Please describe your issue.'
        return e
    }

    const handleChange = (field, value) => {
        setForm(f => ({ ...f, [field]: value }))
        if (errors[field]) setErrors(e => ({ ...e, [field]: undefined }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errs = validate()
        if (Object.keys(errs).length) { setErrors(errs); return }
        setSending(true)
        setTimeout(() => { setSending(false); setSent(true) }, 1200)
    }

    return (
        <div className={styles.page}>
            {/* Top Nav */}
            <nav className={styles.nav}>
                <button className={styles.brand} onClick={() => navigate('/')}>
                    <div className={styles.brandIcon}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className={styles.brandName}>EnviGuide</span>
                </button>

                <ul className={styles.navLinks}>
                    <li><button className={styles.navLink} onClick={() => navigate('/')}>Home</button></li>
                    <li><button className={styles.navLink}>Explore</button></li>
                    <li><button className={styles.navLink}>Community</button></li>
                    <li><button className={`${styles.navLink} ${styles.navLinkActive}`}>Contact</button></li>
                </ul>

                <div className={styles.navActions}>
                    <button className={styles.iconBtn} title="Notifications">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className={styles.iconBtn} title="Profile">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Page Body */}
            <div className={styles.wrapper}>

                {/* Hero */}
                <div className={styles.hero}>
                    <h1 className={styles.heroTitle}>Get in Touch</h1>
                    <p className={styles.heroSub}>
                        Have a question or feedback? We're here to help you navigate your environmental
                        journey. Our team usually responds within 24 hours.
                    </p>
                </div>

                {/* Content Grid */}
                <div className={styles.grid}>

                    {/* Left Column */}
                    <div className={styles.leftCol}>

                        {/* Direct Support */}
                        <div className={styles.infoCard}>
                            <div className={styles.cardHeader}>
                                <span className={styles.cardIcon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className={styles.cardTitle}>Direct Support</span>
                            </div>
                            <p className={styles.cardText}>Prefer email? Reach out directly to our support team at:</p>
                            <a href="mailto:help@enviguide.com" className={styles.emailLink}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22 6l-10 7L2 6" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                help@enviguide.com
                            </a>
                        </div>

                        {/* Quick Links */}
                        <div className={styles.infoCard}>
                            <div className={styles.cardHeader}>
                                <span className={styles.cardIcon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className={styles.cardTitle}>Quick Links</span>
                            </div>
                            <ul className={styles.linksList}>
                                {[
                                    { icon: 'info', label: 'Frequently Asked Questions' },
                                    { icon: 'users', label: 'Community Guidelines' },
                                    { icon: 'shield', label: 'Privacy Policy' },
                                ].map(({ icon, label }) => (
                                    <li key={label}>
                                        <a href="#" className={styles.quickLink}>
                                            <QuickIcon type={icon} />
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Forest Card */}
                        <div className={styles.forestCard}>
                            <div className={styles.forestBg} />
                            <div className={styles.forestLabel}>Located in: San Francisco, CA</div>
                        </div>

                    </div>

                    {/* Right Column — Form / Success */}
                    <div className={styles.formCard}>
                        {!sent ? (
                            <form onSubmit={handleSubmit} noValidate>

                                {/* Name + Email */}
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label} htmlFor="sup-name">
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            User Name
                                        </label>
                                        <input
                                            id="sup-name"
                                            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                                            placeholder="Enter your full name"
                                            value={form.name}
                                            onChange={e => handleChange('name', e.target.value)}
                                        />
                                        {errors.name && <span className={styles.fieldError}>{errors.name}</span>}
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.label} htmlFor="sup-email">
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                                                <circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2" />
                                                <path d="M12 8v4M12 16h.01" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                            E-mail ID
                                        </label>
                                        <input
                                            id="sup-email"
                                            type="email"
                                            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                                            placeholder="example@domain.com"
                                            value={form.email}
                                            onChange={e => handleChange('email', e.target.value)}
                                        />
                                        {errors.email && <span className={styles.fieldError}>{errors.email}</span>}
                                    </div>
                                </div>

                                {/* Category */}
                                <div className={styles.formGroup} style={{ marginBottom: '20px' }}>
                                    <label className={styles.label} htmlFor="sup-category">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22 4L12 14.01l-3-3" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        What the issue is
                                    </label>
                                    <div className={styles.selectWrap}>
                                        <select
                                            id="sup-category"
                                            className={`${styles.select} ${errors.category ? styles.inputError : ''}`}
                                            value={form.category}
                                            onChange={e => handleChange('category', e.target.value)}
                                        >
                                            {CATEGORIES.map(c => (
                                                <option key={c.value} value={c.value}>{c.label}</option>
                                            ))}
                                        </select>
                                        <svg className={styles.selectArrow} width="14" height="14" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 9l6 6 6-6" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    {errors.category && <span className={styles.fieldError}>{errors.category}</span>}
                                </div>

                                {/* Description */}
                                <div className={styles.formGroup} style={{ marginBottom: '20px' }}>
                                    <div className={styles.descHeader}>
                                        <label className={styles.label} htmlFor="sup-desc">
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                            Description
                                        </label>
                                        <span className={styles.charCount} style={{ color: form.description.length > 450 ? '#ef4444' : '#9ca3af' }}>
                                            {form.description.length > 0 ? `${form.description.length} / 500 characters` : 'Max 500 characters'}
                                        </span>
                                    </div>
                                    <textarea
                                        id="sup-desc"
                                        className={`${styles.textarea} ${errors.description ? styles.inputError : ''}`}
                                        placeholder="Tell us more about your request..."
                                        maxLength={500}
                                        value={form.description}
                                        onChange={e => handleChange('description', e.target.value)}
                                    />
                                    {errors.description && <span className={styles.fieldError}>{errors.description}</span>}
                                </div>

                                {/* Submit */}
                                <button type="submit" className={styles.sendBtn} disabled={sending}>
                                    {sending ? (
                                        <>
                                            <span className={styles.spinner} />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                                                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                                <p className={styles.disclaimer}>By clicking "Send Message", you agree to our terms and privacy policy.</p>
                            </form>
                        ) : (
                            <div className={styles.successState}>
                                <div className={styles.successIcon}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                        <path d="M20 6L9 17l-5-5" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h2 className={styles.successTitle}>Message Sent Successfully!</h2>
                                <p className={styles.successDesc}>
                                    Thank you for reaching out. Our team has received your message and will get back to you within 24 hours.
                                </p>
                                <button className={styles.backBtn} onClick={() => navigate('/')}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
                                        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
                                        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
                                        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                    Back to Dashboard
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </div>

            {/* Footer */}
            <footer className={styles.footer}>
                <span>© 2024 EnviGuide. All rights reserved.</span>
                <span className={styles.footerDot}>•</span>
                <div className={styles.footerLinks}>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Instagram</a>
                </div>
            </footer>
        </div>
    )
}

function QuickIcon({ type }) {
    if (type === 'info') return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    )
    if (type === 'users') return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
