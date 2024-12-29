'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [503],
  {
    77737: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => i,
          contentTitle: () => a,
          default: () => h,
          frontMatter: () => c,
          metadata: () => s,
          toc: () => u,
        })
      const s = JSON.parse(
        '{"id":"use-argo-to-orchestrate-chaos-experiments","title":"\u4f7f\u7528 Argo \u7f16\u6392\u6df7\u6c8c\u5b9e\u9a8c","description":"TODO","source":"@site/docs/use-argo-to-orchestrate-chaos-experiments.md","sourceDirName":".","slug":"/use-argo-to-orchestrate-chaos-experiments","permalink":"/docs/next/use-argo-to-orchestrate-chaos-experiments","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/docs/use-argo-to-orchestrate-chaos-experiments.md","tags":[],"version":"current","frontMatter":{"title":"\u4f7f\u7528 Argo \u7f16\u6392\u6df7\u6c8c\u5b9e\u9a8c"}}'
      )
      var r = o(74848),
        n = o(28453)
      const c = { title: '\u4f7f\u7528 Argo \u7f16\u6392\u6df7\u6c8c\u5b9e\u9a8c' },
        a = void 0,
        i = {},
        u = [{ value: 'TODO', id: 'todo', level: 2 }]
      function d(e) {
        const t = { h2: 'h2', ...(0, n.R)(), ...e.components }
        return (0, r.jsx)(t.h2, { id: 'todo', children: 'TODO' })
      }
      function h(e = {}) {
        const { wrapper: t } = { ...(0, n.R)(), ...e.components }
        return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(d, { ...e }) }) : d(e)
      }
    },
    28453: (e, t, o) => {
      o.d(t, { R: () => c, x: () => a })
      var s = o(96540)
      const r = {},
        n = s.createContext(r)
      function c(e) {
        const t = s.useContext(n)
        return s.useMemo(
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
              ? e.components(r)
              : e.components || r
            : c(e.components)),
          s.createElement(n.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
