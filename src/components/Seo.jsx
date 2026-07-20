import { useEffect } from 'react'

export const SITE_NAME = 'Prestij İnşaat'
export const SITE_URL = 'https://www.prestijinsaat.az'

function setMeta(name, content, attr = 'name') {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

function Seo({ title, description, path = '/' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Möhkəmlik. Dəqiqlik. Etibar.`
    document.title = fullTitle

    setMeta('description', description)
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:url', `${SITE_URL}${path}`, 'property')
    setMeta('og:site_name', SITE_NAME, 'property')
    setMeta('og:locale', 'az_AZ', 'property')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)

    setCanonical(`${SITE_URL}${path}`)
  }, [title, description, path])

  return null
}

export default Seo
