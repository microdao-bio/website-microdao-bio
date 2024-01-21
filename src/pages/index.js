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
                  <span>Making</span>
                  <br />
                  Antimicrobial
                  <br />
                  <span>Stewardship Sustainable.</span>
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
                    White Paper →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero">
          <div className="tw-container tw-mx-auto max-lg:tw-px-4">
            <div className="tw-max-w-[800px] tw-mb-12 tw-mx-auto tw-text-center">
              {/* TODO: add translation. */}
              <h2 className="tw-text-4xl xl:tw-text-5xl">
                Let's work <span className={styles.heroTitle}>Together</span>.
              </h2>
              <p className="lg:tw-text-lg tw-font-medium">
                <Translate id="home.buildcommunity.1">
                  Join the community and talk to all the key stakeholders involved in implementing Good antimicrobial
                  stewardship and be part of the change
                </Translate>
              </p>
            </div>
            <div className="tw-grid lg:tw-grid-cols-3 tw-gap-8 tw-mb-12 lg:tw-w-[80%] lg:tw-mx-auto">
              <Card>
                <IconGithub className="tw-w-12 tw-h-12 dark:tw-fill-white" />
                <p>Join our tool developers to build tools for antimicrobial stewardship.</p>
                <Link
                  to="https://github.com/chaos-mesh/chaos-mesh"
                  className="tw-btn tw-bg-[#f2f2f2] tw-text-[#1f2937] dark:tw-text-[#a6adba] hover:!tw-bg-[#e6e6e6] tw-normal-case dark:tw-glass dark:hover:!tw-bg-transparent dark:hover:tw-text-white"
                >
                  Star on GitHub
                </Link>
              </Card>
              <Card>
                <IconHelp className="tw-w-12 tw-h-12 dark:tw-fill-white" />
                <p>Experiencing any issues? Don't hesitate to reach out to us for assistance.</p>
                <div className="tw-flex tw-gap-3">
                  <Link
                    to="https://github.com/chaos-mesh/chaos-mesh/issues"
                    className="tw-btn tw-bg-[#f2f2f2] tw-text-[#1f2937] dark:tw-text-[#a6adba] hover:!tw-bg-[#e6e6e6] tw-normal-case dark:tw-glass dark:hover:!tw-bg-transparent dark:hover:tw-text-white"
                  >
                    Issues
                  </Link>
                  <Link
                    to="https://github.com/chaos-mesh/chaos-mesh/discussions"
                    className="tw-btn tw-bg-[#f2f2f2] tw-text-[#1f2937] dark:tw-text-[#a6adba] hover:!tw-bg-[#e6e6e6] tw-normal-case dark:tw-glass dark:hover:!tw-bg-transparent dark:hover:tw-text-white"
                  >
                    Discussions
                  </Link>
                </div>
              </Card>
              <Card>
                <img className="tw-w-12 tw-h-12 tw-scale-150" src="/img/icons/slack.svg" alt="Slack" />
                <p>Connect with other users on our Slack channel (#project-chaos-mesh).</p>
                <Link
                  to="https://slack.cncf.io"
                  className="tw-btn tw-bg-[#f2f2f2] tw-text-[#1f2937] dark:tw-text-[#a6adba] hover:!tw-bg-[#e6e6e6] tw-normal-case dark:tw-glass dark:hover:!tw-bg-transparent dark:hover:tw-text-white"
                >
                  Join Slack channel
                </Link>
              </Card>
            </div>
            <p className="tw-font-medium tw-text-center">
              Chaos Mesh is a{' '}
              <Link className="tw-underline dark:tw-no-underline" to="https://cncf.io/">
                Cloud Native Computing Foundation
              </Link>{' '}
              incubating project.
            </p>
            <div className="cncf-logo tw-h-16" />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home
