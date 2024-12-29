'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [2839],
  {
    78666: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => a,
          contentTitle: () => i,
          default: () => l,
          frontMatter: () => c,
          metadata: () => o,
          toc: () => u,
        })
      const o = JSON.parse(
        '{"id":"clean-up-chaos-experiments","title":"Clean up Chaos Experiments","description":"TODO","source":"@site/versioned_docs/version-2.4.3/clean-up-chaos-experiments.md","sourceDirName":".","slug":"/clean-up-chaos-experiments","permalink":"/zh/docs/2.4.3/clean-up-chaos-experiments","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.4.3/clean-up-chaos-experiments.md","tags":[],"version":"2.4.3","frontMatter":{"title":"Clean up Chaos Experiments"}}'
      )
      var s = n(74848),
        r = n(28453)
      const c = { title: 'Clean up Chaos Experiments' },
        i = void 0,
        a = {},
        u = [{ value: 'TODO', id: 'todo', level: 2 }]
      function p(e) {
        const t = { h2: 'h2', ...(0, r.R)(), ...e.components }
        return (0, s.jsx)(t.h2, { id: 'todo', children: 'TODO' })
      }
      function l(e = {}) {
        const { wrapper: t } = { ...(0, r.R)(), ...e.components }
        return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e)
      }
    },
    28453: (e, t, n) => {
      n.d(t, { R: () => c, x: () => i })
      var o = n(96540)
      const s = {},
        r = o.createContext(s)
      function c(e) {
        const t = o.useContext(r)
        return o.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e }
          },
          [t, e]
        )
      }
      function i(e) {
        let t
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : c(e.components)),
          o.createElement(r.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
