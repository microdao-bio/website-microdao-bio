'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [4057],
  {
    82709: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => u,
          contentTitle: () => i,
          default: () => d,
          frontMatter: () => c,
          metadata: () => o,
          toc: () => a,
        })
      const o = JSON.parse(
        '{"id":"glossary","title":"\u672f\u8bed\u8868","description":"TODO","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/glossary.md","sourceDirName":".","slug":"/glossary","permalink":"/zh/docs/next/glossary","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/current/glossary.md","tags":[],"version":"current","frontMatter":{"title":"\u672f\u8bed\u8868"}}'
      )
      var s = n(74848),
        r = n(28453)
      const c = { title: '\u672f\u8bed\u8868' },
        i = void 0,
        u = {},
        a = [{ value: 'TODO', id: 'todo', level: 2 }]
      function l(t) {
        const e = { h2: 'h2', ...(0, r.R)(), ...t.components }
        return (0, s.jsx)(e.h2, { id: 'todo', children: 'TODO' })
      }
      function d(t = {}) {
        const { wrapper: e } = { ...(0, r.R)(), ...t.components }
        return e ? (0, s.jsx)(e, { ...t, children: (0, s.jsx)(l, { ...t }) }) : l(t)
      }
    },
    28453: (t, e, n) => {
      n.d(e, { R: () => c, x: () => i })
      var o = n(96540)
      const s = {},
        r = o.createContext(s)
      function c(t) {
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
              ? t.components(s)
              : t.components || s
            : c(t.components)),
          o.createElement(r.Provider, { value: e }, t.children)
        )
      }
    },
  },
])
