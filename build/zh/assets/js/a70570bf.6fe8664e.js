'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [7459],
  {
    21483: (t, e, o) => {
      o.r(e),
        o.d(e, {
          assets: () => u,
          contentTitle: () => r,
          default: () => d,
          frontMatter: () => i,
          metadata: () => n,
          toc: () => a,
        })
      const n = JSON.parse(
        '{"id":"go-client","title":"Go","description":"TODO","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.2/go-client.md","sourceDirName":".","slug":"/go-client","permalink":"/zh/docs/go-client","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.6.2/go-client.md","tags":[],"version":"2.6.2","frontMatter":{"title":"Go"}}'
      )
      var s = o(74848),
        c = o(28453)
      const i = { title: 'Go' },
        r = void 0,
        u = {},
        a = [{ value: 'TODO', id: 'todo', level: 2 }]
      function l(t) {
        const e = { h2: 'h2', ...(0, c.R)(), ...t.components }
        return (0, s.jsx)(e.h2, { id: 'todo', children: 'TODO' })
      }
      function d(t = {}) {
        const { wrapper: e } = { ...(0, c.R)(), ...t.components }
        return e ? (0, s.jsx)(e, { ...t, children: (0, s.jsx)(l, { ...t }) }) : l(t)
      }
    },
    28453: (t, e, o) => {
      o.d(e, { R: () => i, x: () => r })
      var n = o(96540)
      const s = {},
        c = n.createContext(s)
      function i(t) {
        const e = n.useContext(c)
        return n.useMemo(
          function () {
            return 'function' == typeof t ? t(e) : { ...e, ...t }
          },
          [e, t]
        )
      }
      function r(t) {
        let e
        return (
          (e = t.disableParentContext
            ? 'function' == typeof t.components
              ? t.components(s)
              : t.components || s
            : i(t.components)),
          n.createElement(c.Provider, { value: e }, t.children)
        )
      }
    },
  },
])
