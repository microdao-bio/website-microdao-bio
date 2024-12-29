'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [9605],
  {
    65796: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => i,
          contentTitle: () => a,
          default: () => h,
          frontMatter: () => c,
          metadata: () => n,
          toc: () => u,
        })
      const n = JSON.parse(
        '{"id":"use-argo-to-orchestrate-chaos-experiments","title":"\u4f7f\u7528 Argo \u7f16\u6392\u6df7\u6c8c\u5b9e\u9a8c","description":"TODO","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/use-argo-to-orchestrate-chaos-experiments.md","sourceDirName":".","slug":"/use-argo-to-orchestrate-chaos-experiments","permalink":"/zh/docs/next/use-argo-to-orchestrate-chaos-experiments","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/current/use-argo-to-orchestrate-chaos-experiments.md","tags":[],"version":"current","frontMatter":{"title":"\u4f7f\u7528 Argo \u7f16\u6392\u6df7\u6c8c\u5b9e\u9a8c"}}'
      )
      var s = o(74848),
        r = o(28453)
      const c = { title: '\u4f7f\u7528 Argo \u7f16\u6392\u6df7\u6c8c\u5b9e\u9a8c' },
        a = void 0,
        i = {},
        u = [{ value: 'TODO', id: 'todo', level: 2 }]
      function d(e) {
        const t = { h2: 'h2', ...(0, r.R)(), ...e.components }
        return (0, s.jsx)(t.h2, { id: 'todo', children: 'TODO' })
      }
      function h(e = {}) {
        const { wrapper: t } = { ...(0, r.R)(), ...e.components }
        return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e)
      }
    },
    28453: (e, t, o) => {
      o.d(t, { R: () => c, x: () => a })
      var n = o(96540)
      const s = {},
        r = n.createContext(s)
      function c(e) {
        const t = n.useContext(r)
        return n.useMemo(
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
            : c(e.components)),
          n.createElement(r.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
