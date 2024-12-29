'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [5693],
  {
    62894: (e, o, n) => {
      n.r(o),
        n.d(o, {
          assets: () => d,
          contentTitle: () => c,
          default: () => a,
          frontMatter: () => i,
          metadata: () => t,
          toc: () => l,
        })
      const t = JSON.parse(
        '{"id":"developer-guide-overview","title":"Developer Guide Overview","description":"This document describes how to develop Chaos Mesh. Before you start, it is recommended to first read the following documents:","source":"@site/versioned_docs/version-2.4.3/developer-guide-overview.md","sourceDirName":".","slug":"/developer-guide-overview","permalink":"/docs/2.4.3/developer-guide-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.4.3/developer-guide-overview.md","tags":[],"version":"2.4.3","frontMatter":{"title":"Developer Guide Overview"},"sidebar":"docs","previous":{"title":"Chaosctl","permalink":"/docs/2.4.3/chaosctl-tool"},"next":{"title":"Configure the Development Environment","permalink":"/docs/2.4.3/configure-development-environment"}}'
      )
      var s = n(74848),
        r = n(28453)
      const i = { title: 'Developer Guide Overview' },
        c = void 0,
        d = {},
        l = []
      function h(e) {
        const o = { a: 'a', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components }
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(o.p, {
              children:
                'This document describes how to develop Chaos Mesh. Before you start, it is recommended to first read the following documents:',
            }),
            '\n',
            (0, s.jsxs)(o.ul, {
              children: [
                '\n',
                (0, s.jsx)(o.li, {
                  children: (0, s.jsx)(o.a, {
                    href: 'https://github.com/chaos-mesh/chaos-mesh/blob/master/README.md',
                    children: 'Chaos Mesh README',
                  }),
                }),
                '\n',
                (0, s.jsx)(o.li, {
                  children: (0, s.jsx)(o.a, {
                    href: 'https://github.com/chaos-mesh/chaos-mesh/blob/master/ui/README.md',
                    children: 'Chaos Mesh Dashboard README',
                  }),
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsxs)(o.p, {
              children: [
                'Then, you can start from ',
                (0, s.jsx)(o.a, {
                  href: '/docs/2.4.3/configure-development-environment',
                  children: 'Configure Development Environment',
                }),
                '. After that, try to:',
              ],
            }),
            '\n',
            (0, s.jsxs)(o.ul, {
              children: [
                '\n',
                (0, s.jsx)(o.li, {
                  children: (0, s.jsx)(o.a, {
                    href: '/docs/2.4.3/add-new-chaos-experiment-type',
                    children: 'Add New Chaos Experiment Type',
                  }),
                }),
                '\n',
                (0, s.jsx)(o.li, {
                  children: (0, s.jsx)(o.a, {
                    href: '/docs/2.4.3/extend-chaos-daemon-interface',
                    children: 'Extend Chaos Daemon interface',
                  }),
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(o.p, { children: 'For coding conventions, refer to the following documents:' }),
            '\n',
            (0, s.jsxs)(o.ul, {
              children: [
                '\n',
                (0, s.jsx)(o.li, {
                  children: (0, s.jsx)(o.a, {
                    href: 'https://github.com/chaos-mesh/rfcs/blob/main/text/2021-09-27-refine-error-handling.md',
                    children: 'Error Handling',
                  }),
                }),
                '\n',
                (0, s.jsx)(o.li, {
                  children: (0, s.jsx)(o.a, {
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
      function a(e = {}) {
        const { wrapper: o } = { ...(0, r.R)(), ...e.components }
        return o ? (0, s.jsx)(o, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e)
      }
    },
    28453: (e, o, n) => {
      n.d(o, { R: () => i, x: () => c })
      var t = n(96540)
      const s = {},
        r = t.createContext(s)
      function i(e) {
        const o = t.useContext(r)
        return t.useMemo(
          function () {
            return 'function' == typeof e ? e(o) : { ...o, ...e }
          },
          [o, e]
        )
      }
      function c(e) {
        let o
        return (
          (o = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : i(e.components)),
          t.createElement(r.Provider, { value: o }, e.children)
        )
      }
    },
  },
])
