'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [9741],
  {
    88985: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => a,
          contentTitle: () => i,
          default: () => h,
          frontMatter: () => c,
          metadata: () => s,
          toc: () => u,
        })
      const s = JSON.parse(
        '{"id":"use-argo-to-orchestrate-chaos-experiments","title":"\u4f7f\u7528 Argo \u7f16\u6392\u6df7\u6c8c\u5b9e\u9a8c","description":"TODO","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/use-argo-to-orchestrate-chaos-experiments.md","sourceDirName":".","slug":"/use-argo-to-orchestrate-chaos-experiments","permalink":"/zh/docs/2.4.3/use-argo-to-orchestrate-chaos-experiments","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/use-argo-to-orchestrate-chaos-experiments.md","tags":[],"version":"2.4.3","frontMatter":{"title":"\u4f7f\u7528 Argo \u7f16\u6392\u6df7\u6c8c\u5b9e\u9a8c"}}'
      )
      var n = o(74848),
        r = o(28453)
      const c = { title: '\u4f7f\u7528 Argo \u7f16\u6392\u6df7\u6c8c\u5b9e\u9a8c' },
        i = void 0,
        a = {},
        u = [{ value: 'TODO', id: 'todo', level: 2 }]
      function d(e) {
        const t = { h2: 'h2', ...(0, r.R)(), ...e.components }
        return (0, n.jsx)(t.h2, { id: 'todo', children: 'TODO' })
      }
      function h(e = {}) {
        const { wrapper: t } = { ...(0, r.R)(), ...e.components }
        return t ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(d, { ...e }) }) : d(e)
      }
    },
    28453: (e, t, o) => {
      o.d(t, { R: () => c, x: () => i })
      var s = o(96540)
      const n = {},
        r = s.createContext(n)
      function c(e) {
        const t = s.useContext(r)
        return s.useMemo(
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
              ? e.components(n)
              : e.components || n
            : c(e.components)),
          s.createElement(r.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
