'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [2386],
  {
    72461: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => a,
          contentTitle: () => i,
          default: () => l,
          frontMatter: () => s,
          metadata: () => o,
          toc: () => u,
        })
      const o = JSON.parse(
        '{"id":"multi-data-center-scenario","title":"\u591a\u6570\u636e\u4e2d\u5fc3\u573a\u666f","description":"TODO","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/multi-data-center-scenario.md","sourceDirName":".","slug":"/multi-data-center-scenario","permalink":"/zh/docs/next/multi-data-center-scenario","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/current/multi-data-center-scenario.md","tags":[],"version":"current","frontMatter":{"title":"\u591a\u6570\u636e\u4e2d\u5fc3\u573a\u666f"}}'
      )
      var c = n(74848),
        r = n(28453)
      const s = { title: '\u591a\u6570\u636e\u4e2d\u5fc3\u573a\u666f' },
        i = void 0,
        a = {},
        u = [{ value: 'TODO', id: 'todo', level: 2 }]
      function d(t) {
        const e = { h2: 'h2', ...(0, r.R)(), ...t.components }
        return (0, c.jsx)(e.h2, { id: 'todo', children: 'TODO' })
      }
      function l(t = {}) {
        const { wrapper: e } = { ...(0, r.R)(), ...t.components }
        return e ? (0, c.jsx)(e, { ...t, children: (0, c.jsx)(d, { ...t }) }) : d(t)
      }
    },
    28453: (t, e, n) => {
      n.d(e, { R: () => s, x: () => i })
      var o = n(96540)
      const c = {},
        r = o.createContext(c)
      function s(t) {
        const e = o.useContext(r)
        return o.useMemo(
          function () {
            return 'function' == typeof t ? t(e) : { ...e, ...t }
          },
          [e, t]
        )
      }
      function i(t) {
        let e
        return (
          (e = t.disableParentContext
            ? 'function' == typeof t.components
              ? t.components(c)
              : t.components || c
            : s(t.components)),
          o.createElement(r.Provider, { value: e }, t.children)
        )
      }
    },
  },
])
