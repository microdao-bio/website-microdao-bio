import BrowserOnly from '@docusaurus/BrowserOnly'
import Head from '@docusaurus/Head'
import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import { clsx } from 'clsx'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'

import IconGithub from '../../static/img/icons/github.svg'
import IconHelp from '../../static/img/icons/help.svg'
import IconLibrary from '../../static/img/icons/library.svg'
import IconOctocat from '../../static/img/icons/octocat.svg'
import Card from '../components/Card'
import ChaosdFeatures from '../components/ChaosdFeatures'
import CodeGrid from '../components/CodeGrid'
import Features from '../components/Features'
import Mesh from '../components/Mesh'
import PickVersion from '../components/PickVersion'
import whoIsUsing from '../data/whoIsUsing'
import styles from './index.module.css'

gsap.registerPlugin(ScrollTrigger)

const description = ''

function Home() {
  const { siteConfig } = useDocusaurusContext()

  useEffect(() => {
    document.querySelector('.navbar__inner').classList.add('tw-container', 'tw-mx-auto')

    gsap.from('.scroll-to-display', {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.25,
      scrollTrigger: {
        trigger: '.scroll-to-display',
        toggleActions: 'restart none none none',
      },
    })

    gsap.from('.scroll-to-display-x', {
      duration: 1,
      opacity: 0,
      x: 0,
      y: 100,
      stagger: 0.25,
      scrollTrigger: {
        trigger: '.scroll-to-display-x',
        toggleActions: 'restart none none none',
      },
    })
  }, [])

  return (
    <Layout description={description}>
      <Head>
        <title>MicroDAO: {siteConfig.tagline}</title>
      </Head>
      <main>
        <div className="hero tw-relative tw-h-[768px] tw-pt-0 tw-overflow-hidden">
          <BrowserOnly>{() => <Mesh />}</BrowserOnly>
          <div className="tw-container tw-mx-auto tw-z-10">
            <div className="tw-flex tw-flex-col lg:tw-flex-row lg:tw-justify-between lg:tw-items-center">
              <div className="tw-flex-[.8] 2xl:tw-flex-[.6] tw-p-6 lg:tw-p-3">
                <h1
                  className={clsx(
                    'tw-inline-block tw-text-5xl xl:tw-text-6xl tw-text-left tw-rounded-2xl tw-backdrop-blur-sm lg:tw-backdrop-blur',
                    styles.heroTitle
                  )}
                >
                  <span>Funding the</span>
                  <br />
                  Next Generation of
                  <br />
                  <span>AMR Solutions (Antimicrobials, Vaccines & Diagnostics)</span>
                </h1>
                <p className="lg:tw-text-lg tw-font-medium tw-rounded-2xl tw-backdrop-blur-sm lg:tw-backdrop-blur">
                  {/* TODO: add translation. */}
                  <Translate id="home.description">{description}</Translate>
                </p>
                <div className="tw-flex tw-gap-3">
                  <Link
                    to="https://whitepaper.microdao.bio"
                    className="tw-btn tw-btn-primary hover:tw-text-white hover:-tw-translate-y-[3px]"
                  >
                    Read White Paper
                  </Link>
                  <Link
                    //    to="https://github.com/chaos-mesh/chaos-mesh"
                    className="tw-btn tw-btn-neutral tw-gap-0 dark:tw-glass hover:tw-text-white hover:-tw-translate-y-[3px]"
                  >
                    <a
                      href="mailto:varun@microdao.bio?&subject=Work With%20MicroDAO&body=Hi, I am interested in working with the team %20at%20microDAO%20My background is____%20a%and I would like to help with %20running events/tokenomics%20/build tools/operations"
                      target="_top"
                    >
                      {' '}
                      <span style={{ textDecoration: 'none', color: 'white' }}>Join Us</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home
