'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [1734],
  {
    55517: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => i,
          contentTitle: () => a,
          default: () => l,
          frontMatter: () => r,
          metadata: () => o,
          toc: () => u,
        })
      const o = JSON.parse(
        '{"id":"clean-up-chaos-experiments","title":"Clean up Chaos Experiments","description":"TODO","source":"@site/docs/clean-up-chaos-experiments.md","sourceDirName":".","slug":"/clean-up-chaos-experiments","permalink":"/zh/docs/next/clean-up-chaos-experiments","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/docs/clean-up-chaos-experiments.md","tags":[],"version":"current","frontMatter":{"title":"Clean up Chaos Experiments"}}'
      )
      var s = n(74848),
        c = n(28453)
      const r = { title: 'Clean up Chaos Experiments' },
        a = void 0,
        i = {},
        u = [{ value: 'TODO', id: 'todo', level: 2 }]
      function p(e) {
        const t = { h2: 'h2', ...(0, c.R)(), ...e.components }
        return (0, s.jsx)(t.h2, { id: 'todo', children: 'TODO' })
      }
      function l(e = {}) {
        const { wrapper: t } = { ...(0, c.R)(), ...e.components }
        return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e)
      }
    },
    28453: (e, t, n) => {
      n.d(t, { R: () => r, x: () => a })
      var o = n(96540)
      const s = {},
        c = o.createContext(s)
      function r(e) {
        const t = o.useContext(c)
        return o.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e }
          },
          [t, e]
        )
      }
      function a(e) {
        let t
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : r(e.components)),
          o.createElement(c.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
