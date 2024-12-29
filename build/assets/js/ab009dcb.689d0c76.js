'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [7630],
  {
    29568: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => a,
          contentTitle: () => c,
          default: () => u,
          frontMatter: () => i,
          metadata: () => s,
          toc: () => d,
        })
      const s = JSON.parse(
        '{"id":"glossary","title":"\u672f\u8bed\u8868","description":"TODO","source":"@site/versioned_docs/version-2.6.2/glossary.md","sourceDirName":".","slug":"/glossary","permalink":"/docs/glossary","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.6.2/glossary.md","tags":[],"version":"2.6.2","frontMatter":{"title":"\u672f\u8bed\u8868"}}'
      )
      var n = o(74848),
        r = o(28453)
      const i = { title: '\u672f\u8bed\u8868' },
        c = void 0,
        a = {},
        d = [{ value: 'TODO', id: 'todo', level: 2 }]
      function l(e) {
        const t = { h2: 'h2', ...(0, r.R)(), ...e.components }
        return (0, n.jsx)(t.h2, { id: 'todo', children: 'TODO' })
      }
      function u(e = {}) {
        const { wrapper: t } = { ...(0, r.R)(), ...e.components }
        return t ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(l, { ...e }) }) : l(e)
      }
    },
    28453: (e, t, o) => {
      o.d(t, { R: () => i, x: () => c })
      var s = o(96540)
      const n = {},
        r = s.createContext(n)
      function i(e) {
        const t = s.useContext(r)
        return s.useMemo(
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
              ? e.components(n)
              : e.components || n
            : i(e.components)),
          s.createElement(r.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
