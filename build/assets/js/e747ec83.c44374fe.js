'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [7051],
  {
    93583: (t, e, o) => {
      o.r(e),
        o.d(e, {
          assets: () => a,
          contentTitle: () => i,
          default: () => d,
          frontMatter: () => c,
          metadata: () => s,
          toc: () => l,
        })
      const s = JSON.parse(
        '{"id":"glossary","title":"\u672f\u8bed\u8868","description":"TODO","source":"@site/docs/glossary.md","sourceDirName":".","slug":"/glossary","permalink":"/docs/next/glossary","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/docs/glossary.md","tags":[],"version":"current","frontMatter":{"title":"\u672f\u8bed\u8868"}}'
      )
      var n = o(74848),
        r = o(28453)
      const c = { title: '\u672f\u8bed\u8868' },
        i = void 0,
        a = {},
        l = [{ value: 'TODO', id: 'todo', level: 2 }]
      function u(t) {
        const e = { h2: 'h2', ...(0, r.R)(), ...t.components }
        return (0, n.jsx)(e.h2, { id: 'todo', children: 'TODO' })
      }
      function d(t = {}) {
        const { wrapper: e } = { ...(0, r.R)(), ...t.components }
        return e ? (0, n.jsx)(e, { ...t, children: (0, n.jsx)(u, { ...t }) }) : u(t)
      }
    },
    28453: (t, e, o) => {
      o.d(e, { R: () => c, x: () => i })
      var s = o(96540)
      const n = {},
        r = s.createContext(n)
      function c(t) {
        const e = s.useContext(r)
        return s.useMemo(
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
              ? t.components(n)
              : t.components || n
            : c(t.components)),
          s.createElement(r.Provider, { value: e }, t.children)
        )
      }
    },
  },
])
