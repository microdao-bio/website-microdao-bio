'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [222],
  {
    89597: (t, e, o) => {
      o.r(e),
        o.d(e, {
          assets: () => a,
          contentTitle: () => i,
          default: () => d,
          frontMatter: () => c,
          metadata: () => n,
          toc: () => u,
        })
      const n = JSON.parse(
        '{"id":"glossary","title":"\u672f\u8bed\u8868","description":"TODO","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/glossary.md","sourceDirName":".","slug":"/glossary","permalink":"/zh/docs/2.4.3/glossary","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/glossary.md","tags":[],"version":"2.4.3","frontMatter":{"title":"\u672f\u8bed\u8868"}}'
      )
      var s = o(74848),
        r = o(28453)
      const c = { title: '\u672f\u8bed\u8868' },
        i = void 0,
        a = {},
        u = [{ value: 'TODO', id: 'todo', level: 2 }]
      function l(t) {
        const e = { h2: 'h2', ...(0, r.R)(), ...t.components }
        return (0, s.jsx)(e.h2, { id: 'todo', children: 'TODO' })
      }
      function d(t = {}) {
        const { wrapper: e } = { ...(0, r.R)(), ...t.components }
        return e ? (0, s.jsx)(e, { ...t, children: (0, s.jsx)(l, { ...t }) }) : l(t)
      }
    },
    28453: (t, e, o) => {
      o.d(e, { R: () => c, x: () => i })
      var n = o(96540)
      const s = {},
        r = n.createContext(s)
      function c(t) {
        const e = n.useContext(r)
        return n.useMemo(
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
              ? t.components(s)
              : t.components || s
            : c(t.components)),
          n.createElement(r.Provider, { value: e }, t.children)
        )
      }
    },
  },
])
