'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [5687],
  {
    76602: (e, t, s) => {
      s.r(t),
        s.d(t, {
          assets: () => h,
          contentTitle: () => d,
          default: () => x,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => c,
        })
      const l = JSON.parse(
        '{"type":"mdx","permalink":"/supported-releases","source":"@site/src/pages/supported-releases.md","title":"Supported Releases","description":"This page lists the status, timeline and policies for currently supported releases.","frontMatter":{},"unlisted":false}'
      )
      var n = s(74848),
        i = s(28453)
      const r = {},
        d = 'Supported Releases',
        h = {},
        c = [
          { value: 'TL;DR', id: 'tldr', level: 2 },
          { value: 'Naming Scheme', id: 'naming-scheme', level: 2 },
          { value: 'Support Status of Chaos Mesh', id: 'support-status-of-chaos-mesh', level: 2 },
          { value: 'Upcoming Releases', id: 'upcoming-releases', level: 2 },
          { value: 'Support Policies', id: 'support-policies', level: 2 },
          { value: 'Community technical support', id: 'community-technical-support', level: 3 },
          { value: 'Security and bug fixes', id: 'security-and-bug-fixes', level: 3 },
          {
            value: 'How we determine supported Kubernetes versions',
            id: 'how-we-determine-supported-kubernetes-versions',
            level: 2,
          },
        ]
      function o(e) {
        const t = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          header: 'header',
          li: 'li',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ul: 'ul',
          ...(0, i.R)(),
          ...e.components,
        }
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.header, {
              children: (0, n.jsx)(t.h1, { id: 'supported-releases', children: 'Supported Releases' }),
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children: 'This page lists the status, timeline and policies for currently supported releases.',
            }),
            '\n',
            (0, n.jsxs)(t.admonition, {
              type: 'info',
              children: [
                (0, n.jsx)(t.h2, { id: 'tldr', children: 'TL;DR' }),
                (0, n.jsxs)(t.p, {
                  children: [
                    'Each release is supported for a period of ',
                    (0, n.jsx)(t.strong, { children: 'six months' }),
                    ', and we create a new release ',
                    (0, n.jsx)(t.strong, { children: 'every three months' }),
                    '.',
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, { id: 'naming-scheme', children: 'Naming Scheme' }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'Our naming scheme mostly follows ',
                (0, n.jsx)(t.a, { href: 'https://semver.org/', children: 'Semantic Versioning 2.0.0' }),
                ' with ',
                (0, n.jsx)(t.code, { children: 'v' }),
                ' prepended to git tags and docker images:',
              ],
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, { className: 'language-plain', children: 'v<major>.<minor>.<patch>\n' }),
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'where ',
                (0, n.jsx)(t.code, { children: '<minor>' }),
                ' is increased for each release, and ',
                (0, n.jsx)(t.code, { children: '<patch>' }),
                ' counts the number of patches for the current ',
                (0, n.jsx)(t.code, { children: '<minor>' }),
                ' release. A patch is usually a small change relative to the ',
                (0, n.jsx)(t.code, { children: '<minor>' }),
                ' release.',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, { id: 'support-status-of-chaos-mesh', children: 'Support Status of Chaos Mesh' }),
            '\n',
            (0, n.jsx)(t.admonition, {
              type: 'note',
              children: (0, n.jsxs)(t.p, {
                children: [
                  'Support for kubernetes ',
                  (0, n.jsx)(t.code, { children: '1.22' }),
                  ' is available starting with version ',
                  (0, n.jsx)(t.code, { children: '2.0.4' }),
                  '.',
                ],
              }),
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Version' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Currently Supported' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Release Date' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'End of Life' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Supported Kubernetes versions' }),
                    ],
                  }),
                }),
                (0, n.jsxs)(t.tbody, {
                  children: [
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'master' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'No, development only' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '-' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '-' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '1.20, 1.21, 1.22, 1.23, 1.24, 1.25',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '2.6 \xa0 \xa0' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            (0, n.jsx)(t.code, { children: 'Yes' }),
                            ' \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0',
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'May 31, 2023' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '- \xa0 \xa0 \xa0 \xa0 \xa0' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '1.20, 1.21, 1.22, 1.23, 1.24, 1.25',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '2.5 \xa0 \xa0' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            (0, n.jsx)(t.code, { children: 'Yes' }),
                            ' \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0',
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Nov 22, 2022' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '- \xa0 \xa0 \xa0 \xa0 \xa0' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '1.20, 1.21, 1.22, 1.23, 1.24, 1.25',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '2.4 \xa0 \xa0' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'No \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0',
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Sep 23, 2022' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'May 31, 2023' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '1.20, 1.21, 1.22, 1.23, 1.24, 1.25',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '2.3' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'No' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Jul 29, 2022' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Nov 22, 2022' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '2.2' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'No' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Apr 29, 2022' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Sep 23, 2022' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '2.1' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'No' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Nov 30, 2021' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Jul 29, 2022' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '2.0' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'No' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Jul 23, 2021' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Apr 29, 2022' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '1.2' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'No' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Apr 23, 2021' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Nov 30, 2021' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '1.12, 1.13, 1.14, 1.15' }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '1.1' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'No' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Jan 08, 2021' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Jul 23, 2021' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '1.12, 1.13, 1.14, 1.15' }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '1.0' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'No' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Sep 25, 2020' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Apr 23, 2021' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '1.12, 1.13, 1.14, 1.15' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, { id: 'upcoming-releases', children: 'Upcoming Releases' }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'You could track the upcoming release on ',
                (0, n.jsx)(t.a, {
                  href: 'https://github.com/chaos-mesh/chaos-mesh/milestones',
                  children: 'GitHub milestones',
                }),
                '.',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, { id: 'support-policies', children: 'Support Policies' }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'Our support window is ',
                (0, n.jsx)(t.strong, { children: 'six months' }),
                ' for each release branch. The support window corresponds to the ',
                (0, n.jsx)(t.strong, { children: 'two latest releases' }),
                ', given that we produce a new final release ',
                (0, n.jsx)(t.strong, { children: 'every three months' }),
                '.',
              ],
            }),
            '\n',
            (0, n.jsx)(t.p, { children: 'For this we offer two type of supports:' }),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsx)(t.li, {
                  children: (0, n.jsx)(t.a, {
                    href: '#community-technical-support',
                    children: 'Community technical support',
                  }),
                }),
                '\n',
                (0, n.jsx)(t.li, {
                  children: (0, n.jsx)(t.a, { href: '#security-and-bug-fixes', children: 'Security and bug fixes' }),
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h3, { id: 'community-technical-support', children: 'Community technical support' }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'You can request support from the community on CNCF Slack (in the ',
                (0, n.jsx)(t.a, {
                  href: 'https://cloud-native.slack.com/archives/C0193VAV272',
                  children: '#project-chaos-mesh',
                }),
                ' channel), or using the ',
                (0, n.jsx)(t.a, {
                  href: 'https://github.com/chaos-mesh/chaos-mesh/discussions',
                  children: 'GitHub Discussions',
                }),
                '.',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h3, { id: 'security-and-bug-fixes', children: 'Security and bug fixes' }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'Security issues are fixed as soon as possible. They get back-ported to the last two releases, and a new patch release is immediately created for them.',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children: 'For enhancements or bugfixes, we would make a new patch release as required.',
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'how-we-determine-supported-kubernetes-versions',
              children: 'How we determine supported Kubernetes versions',
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'After testing the compatibility of various versions of Kubernetes clusters through E2E testing, the Chaos Mesh team determines ',
                (0, n.jsx)(t.a, { href: '#support-status-of-chaos-mesh', children: 'Supported Status of Chaos Mesh' }),
                ' based on its test results.',
              ],
            }),
            '\n',
            (0, n.jsx)(t.p, { children: 'Below are Kubernetes versions covered by each version of the E2E tests:' }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Version' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Tested kubernetes Versions' }),
                    ],
                  }),
                }),
                (0, n.jsxs)(t.tbody, {
                  children: [
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'master' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '1.20, 1.23, 1.25' }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '2.6' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '1.20, 1.23, 1.25' }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '2.5' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '1.20, 1.23, 1.25' }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '2.4' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '1.20, 1.23, 1.25' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
      function x(e = {}) {
        const { wrapper: t } = { ...(0, i.R)(), ...e.components }
        return t ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(o, { ...e }) }) : o(e)
      }
    },
    28453: (e, t, s) => {
      s.d(t, { R: () => r, x: () => d })
      var l = s(96540)
      const n = {},
        i = l.createContext(n)
      function r(e) {
        const t = l.useContext(i)
        return l.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e }
          },
          [t, e]
        )
      }
      function d(e) {
        let t
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(n)
              : e.components || n
            : r(e.components)),
          l.createElement(i.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
