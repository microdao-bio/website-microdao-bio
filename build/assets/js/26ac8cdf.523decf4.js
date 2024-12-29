'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [3698],
  {
    41930: (e, n, o) => {
      o.r(n),
        o.d(n, {
          assets: () => c,
          contentTitle: () => a,
          default: () => h,
          frontMatter: () => i,
          metadata: () => t,
          toc: () => l,
        })
      const t = JSON.parse(
        '{"id":"developer-guide-overview","title":"Developer Guide Overview","description":"The developer manual section may be out of date. If you find any problems or have any questions, please create an issue and let us know. Thank you for your contribution!","source":"@site/docs/developer-guide-overview.md","sourceDirName":".","slug":"/developer-guide-overview","permalink":"/docs/next/developer-guide-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/docs/developer-guide-overview.md","tags":[],"version":"current","frontMatter":{"title":"Developer Guide Overview"},"sidebar":"docs","previous":{"title":"Chaosctl","permalink":"/docs/next/chaosctl-tool"},"next":{"title":"Configure the Development Environment","permalink":"/docs/next/configure-development-environment"}}'
      )
      var s = o(74848),
        r = o(28453)
      const i = { title: 'Developer Guide Overview' },
        a = void 0,
        c = {},
        l = []
      function d(e) {
        const n = { a: 'a', admonition: 'admonition', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components }
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(n.admonition, {
              type: 'caution',
              children: (0, s.jsxs)(n.p, {
                children: [
                  'The developer manual section may be out of date. If you find any problems or have any questions, please ',
                  (0, s.jsx)(n.a, {
                    href: 'https://github.com/chaos-mesh/chaos-mesh/issues/new/choose',
                    children: 'create an issue',
                  }),
                  ' and let us know. Thank you for your contribution!',
                ],
              }),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'This document describes how to develop Chaos Mesh. Before you start, it is recommended that you read the following documents first:',
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.a, {
                    href: 'https://github.com/chaos-mesh/chaos-mesh/blob/master/README.md',
                    children: 'Chaos Mesh README',
                  }),
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.a, {
                    href: 'https://github.com/chaos-mesh/chaos-mesh/blob/master/ui/README.md',
                    children: 'Chaos Mesh Dashboard README',
                  }),
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'Before starting to develop Chaos Mesh, you need to prepare the development environment. Please refer to ',
                (0, s.jsx)(n.a, {
                  href: '/docs/next/configure-development-environment',
                  children: 'Configure the development environment',
                }),
                ' for details.',
              ],
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: 'Then you can start to develop Chaos Mesh. The following documents will help you:',
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.a, {
                    href: '/docs/next/add-new-chaos-experiment-type',
                    children: 'Add a New Chaos Experiment Type',
                  }),
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.a, {
                    href: '/docs/next/extend-chaos-daemon-interface',
                    children: 'Extend Chaos Daemon Interface',
                  }),
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.p, { children: 'For coding conventions, please refer to the following RFCs:' }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.a, {
                    href: 'https://github.com/chaos-mesh/rfcs/blob/main/text/2021-09-27-refine-error-handling.md',
                    children: 'Error Handling',
                  }),
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.a, {
                    href: 'https://github.com/chaos-mesh/rfcs/blob/main/text/2021-12-09-logging.md',
                    children: 'Logging',
                  }),
                }),
                '\n',
              ],
            }),
          ],
        })
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, r.R)(), ...e.components }
        return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e)
      }
    },
    28453: (e, n, o) => {
      o.d(n, { R: () => i, x: () => a })
      var t = o(96540)
      const s = {},
        r = t.createContext(s)
      function i(e) {
        const n = t.useContext(r)
        return t.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e }
          },
          [n, e]
        )
      }
      function a(e) {
        let n
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : i(e.components)),
          t.createElement(r.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
