'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [9914],
  {
    85677: (t, e, o) => {
      o.r(e),
        o.d(e, {
          assets: () => a,
          contentTitle: () => r,
          default: () => d,
          frontMatter: () => i,
          metadata: () => n,
          toc: () => l,
        })
      const n = JSON.parse(
        '{"id":"go-client","title":"Go","description":"TODO","source":"@site/docs/go-client.md","sourceDirName":".","slug":"/go-client","permalink":"/docs/next/go-client","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/docs/go-client.md","tags":[],"version":"current","frontMatter":{"title":"Go"}}'
      )
      var s = o(74848),
        c = o(28453)
      const i = { title: 'Go' },
        r = void 0,
        a = {},
        l = [{ value: 'TODO', id: 'todo', level: 2 }]
      function u(t) {
        const e = { h2: 'h2', ...(0, c.R)(), ...t.components }
        return (0, s.jsx)(e.h2, { id: 'todo', children: 'TODO' })
      }
      function d(t = {}) {
        const { wrapper: e } = { ...(0, c.R)(), ...t.components }
        return e ? (0, s.jsx)(e, { ...t, children: (0, s.jsx)(u, { ...t }) }) : u(t)
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
