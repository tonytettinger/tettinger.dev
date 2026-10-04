export const CONSENT_KEY = 'tettinger-analytics-consent-v1'
const MEASUREMENT_ID = 'G-N7VFFQ6ENG'
const CONSENT_LIFETIME = 180 * 24 * 60 * 60 * 1000

export type Consent = 'granted' | 'denied'
type AnalyticsWindow = Window & {
    dataLayer?: unknown[]
    gtag?: (...parameters: unknown[]) => void
    'ga-disable-G-N7VFFQ6ENG'?: boolean
}

export const readConsent = (): Consent | null => {
    try {
        const stored = JSON.parse(localStorage.getItem(CONSENT_KEY) || 'null')
        if (
            stored &&
            (stored.choice === 'granted' || stored.choice === 'denied') &&
            typeof stored.expiresAt === 'number' &&
            stored.expiresAt > Date.now()
        ) {
            return stored.choice
        }
    } catch {
        // Unavailable or malformed browser storage never enables analytics.
    }
    return null
}

export const saveConsent = (choice: Consent): boolean => {
    try {
        localStorage.setItem(
            CONSENT_KEY,
            JSON.stringify({ choice, expiresAt: Date.now() + CONSENT_LIFETIME })
        )
        return true
    } catch {
        return false
    }
}

export const disableAnalytics = () => {
    const analyticsWindow = window as AnalyticsWindow
    analyticsWindow['ga-disable-G-N7VFFQ6ENG'] = true

    // Delete host-only cookies and cookies set on a parent domain by the old tag.
    const labels = location.hostname.split('.')
    const domains = ['', ...labels.map((_, index) => labels.slice(index).join('.'))]
    for (const cookie of document.cookie.split(';')) {
        const name = cookie.trim().split('=')[0]
        if (
            name !== '_ga' &&
            !name.startsWith('_ga_') &&
            name !== '_gid' &&
            !name.startsWith('_gat')
        )
            continue
        for (const domain of domains) {
            document.cookie = `${name}=; Max-Age=0; Path=/;${domain ? ` Domain=${domain};` : ''}`
        }
    }
}

export const trackPage = () => {
    const analyticsWindow = window as AnalyticsWindow
    if (!analyticsWindow.gtag) {
        analyticsWindow['ga-disable-G-N7VFFQ6ENG'] = false
        const dataLayer = analyticsWindow.dataLayer || []
        analyticsWindow.dataLayer = dataLayer
        analyticsWindow.gtag = function () {
            // Google's command parser requires Arguments, not a rest-parameter array.
            // eslint-disable-next-line prefer-rest-params
            dataLayer.push(arguments)
        }
        analyticsWindow.gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
        })
        analyticsWindow.gtag('consent', 'update', { analytics_storage: 'granted' })
        analyticsWindow.gtag('js', new Date())
        analyticsWindow.gtag('config', MEASUREMENT_ID, {
            send_page_view: false,
            allow_google_signals: false,
            allow_ad_personalization_signals: false,
            cookie_expires: CONSENT_LIFETIME / 1000,
            cookie_update: false,
            page_location: `${location.origin}${location.pathname}`,
            page_referrer: document.referrer.split(/[?#]/)[0],
        })
        const script = document.createElement('script')
        script.id = 'consented-google-analytics'
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
        document.head.appendChild(script)
    }
    analyticsWindow.gtag('event', 'page_view', {
        page_location: `${location.origin}${location.pathname}`,
        page_title: document.title,
    })
}
