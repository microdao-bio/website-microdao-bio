'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [8626],
  {
    7833: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => a,
          contentTitle: () => c,
          default: () => h,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => u,
        })
      const o = JSON.parse(
        '{"id":"common/quick-run","title":"quick-run","description":"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh.","source":"@site/versioned_docs/version-2.4.3/common/quick-run.md","sourceDirName":"common","slug":"/common/quick-run","permalink":"/docs/2.4.3/common/quick-run","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.4.3/common/quick-run.md","tags":[],"version":"2.4.3","frontMatter":{}}'
      )
      var r = n(74848),
        s = n(28453)
      const i = {},
        c = void 0,
        a = {},
        u = []
      function m(e) {
        const t = { a: 'a', p: 'p', ...(0, s.R)(), ...e.components }
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(t.p, {
              children:
                'After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh.',
            }),
            '\n',
            (0, r.jsxs)(t.p, {
              children: [
                'For the method to run the experiment, it is recommended to refer to ',
                (0, r.jsx)(t.a, { href: '/docs/2.4.3/run-a-chaos-experiment', children: 'Run a Chaos experiment' }),
                '. After successfully creating the experiment, you can observe the running status of the experiment on the Chaos Dashboard.',
              ],
            }),
          ],
        })
      }
      function h(e = {}) {
        const { wrapper: t } = { ...(0, s.R)(), ...e.components }
        return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(m, { ...e }) }) : m(e)
      }
    },
    28453: (e, t, n) => {
      n.d(t, { R: () => i, x: () => c })
      var o = n(96540)
      const r = {},
        s = o.createContext(r)
      function i(e) {
        const t = o.useContext(s)
        return o.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e }
          },
          [t, e]
        )
      }
      function c(e) {
        let t
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(r)
              : e.components || r
            : i(e.components)),
          o.createElement(s.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
