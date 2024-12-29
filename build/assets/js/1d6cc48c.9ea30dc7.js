'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [6399],
  {
    70082: (e, o, n) => {
      n.r(o),
        n.d(o, {
          assets: () => c,
          contentTitle: () => a,
          default: () => h,
          frontMatter: () => i,
          metadata: () => s,
          toc: () => d,
        })
      const s = JSON.parse(
        '{"id":"developer-guide-overview","title":"Developer Guide Overview","description":"The developer manual section may be out of date. If you find any problems or have any questions, please create an issue and let us know. Thank you for your contribution!","source":"@site/versioned_docs/version-2.6.2/developer-guide-overview.md","sourceDirName":".","slug":"/developer-guide-overview","permalink":"/docs/developer-guide-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.6.2/developer-guide-overview.md","tags":[],"version":"2.6.2","frontMatter":{"title":"Developer Guide Overview"},"sidebar":"docs","previous":{"title":"Chaosctl","permalink":"/docs/chaosctl-tool"},"next":{"title":"Configure the Development Environment","permalink":"/docs/configure-development-environment"}}'
      )
      var t = n(74848),
        r = n(28453)
      const i = { title: 'Developer Guide Overview' },
        a = void 0,
        c = {},
        d = []
      function l(e) {
        const o = { a: 'a', admonition: 'admonition', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components }
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(o.admonition, {
              type: 'caution',
              children: (0, t.jsxs)(o.p, {
                children: [
                  'The developer manual section may be out of date. If you find any problems or have any questions, please ',
                  (0, t.jsx)(o.a, {
                    href: 'https://github.com/chaos-mesh/chaos-mesh/issues/new/choose',
                    children: 'create an issue',
                  }),
                  ' and let us know. Thank you for your contribution!',
                ],
              }),
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'This document describes how to develop Chaos Mesh. Before you start, it is recommended that you read the following documents first:',
            }),
            '\n',
            (0, t.jsxs)(o.ul, {
              children: [
                '\n',
                (0, t.jsx)(o.li, {
                  children: (0, t.jsx)(o.a, {
                    href: 'https://github.com/chaos-mesh/chaos-mesh/blob/master/README.md',
                    children: 'Chaos Mesh README',
                  }),
                }),
                '\n',
                (0, t.jsx)(o.li, {
                  children: (0, t.jsx)(o.a, {
                    href: 'https://github.com/chaos-mesh/chaos-mesh/blob/master/ui/README.md',
                    children: 'Chaos Mesh Dashboard README',
                  }),
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsxs)(o.p, {
              children: [
                'Before starting to develop Chaos Mesh, you need to prepare the development environment. Please refer to ',
                (0, t.jsx)(o.a, {
                  href: '/docs/configure-development-environment',
                  children: 'Configure the development environment',
                }),
                ' for details.',
              ],
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children: 'Then you can start to develop Chaos Mesh. The following documents will help you:',
            }),
            '\n',
            (0, t.jsxs)(o.ul, {
              children: [
                '\n',
                (0, t.jsx)(o.li, {
                  children: (0, t.jsx)(o.a, {
                    href: '/docs/add-new-chaos-experiment-type',
                    children: 'Add a New Chaos Experiment Type',
                  }),
                }),
                '\n',
                (0, t.jsx)(o.li, {
                  children: (0, t.jsx)(o.a, {
                    href: '/docs/extend-chaos-daemon-interface',
                    children: 'Extend Chaos Daemon Interface',
                  }),
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(o.p, { children: 'For coding conventions, please refer to the following RFCs:' }),
            '\n',
            (0, t.jsxs)(o.ul, {
              children: [
                '\n',
                (0, t.jsx)(o.li, {
                  children: (0, t.jsx)(o.a, {
                    href: 'https://github.com/chaos-mesh/rfcs/blob/main/text/2021-09-27-refine-error-handling.md',
                    children: 'Error Handling',
                  }),
                }),
                '\n',
                (0, t.jsx)(o.li, {
                  children: (0, t.jsx)(o.a, {
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
        const { wrapper: o } = { ...(0, r.R)(), ...e.components }
        return o ? (0, t.jsx)(o, { ...e, children: (0, t.jsx)(l, { ...e }) }) : l(e)
      }
    },
    28453: (e, o, n) => {
      n.d(o, { R: () => i, x: () => a })
      var s = n(96540)
      const t = {},
        r = s.createContext(t)
      function i(e) {
        const o = s.useContext(r)
        return s.useMemo(
          function () {
            return 'function' == typeof e ? e(o) : { ...o, ...e }
          },
          [o, e]
        )
      }
      function a(e) {
        let o
        return (
          (o = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(t)
              : e.components || t
            : i(e.components)),
          s.createElement(r.Provider, { value: o }, e.children)
        )
      }
    },
  },
])
