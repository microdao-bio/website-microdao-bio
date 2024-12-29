'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [5560],
  {
    51830: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => a,
          contentTitle: () => i,
          default: () => d,
          frontMatter: () => c,
          metadata: () => o,
          toc: () => u,
        })
      const o = JSON.parse(
        '{"id":"release-1.0.0","title":"1.0.0 release notes","description":"TODO","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/release-1.0.0.md","sourceDirName":".","slug":"/release-1.0.0","permalink":"/zh/docs/2.5.2/release-1.0.0","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/release-1.0.0.md","tags":[],"version":"2.5.2","frontMatter":{"title":"1.0.0 release notes"}}'
      )
      var s = n(74848),
        r = n(28453)
      const c = { title: '1.0.0 release notes' },
        i = void 0,
        a = {},
        u = [{ value: 'TODO', id: 'todo', level: 2 }]
      function l(e) {
        const t = { h2: 'h2', ...(0, r.R)(), ...e.components }
        return (0, s.jsx)(t.h2, { id: 'todo', children: 'TODO' })
      }
      function d(e = {}) {
        const { wrapper: t } = { ...(0, r.R)(), ...e.components }
        return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(l, { ...e }) }) : l(e)
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
