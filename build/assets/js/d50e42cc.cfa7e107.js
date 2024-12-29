'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [1487],
  {
    9320: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => a,
          contentTitle: () => r,
          default: () => u,
          frontMatter: () => c,
          metadata: () => n,
          toc: () => d,
        })
      const n = JSON.parse(
        '{"id":"go-client","title":"Go","description":"TODO","source":"@site/versioned_docs/version-2.5.2/go-client.md","sourceDirName":".","slug":"/go-client","permalink":"/docs/2.5.2/go-client","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.5.2/go-client.md","tags":[],"version":"2.5.2","frontMatter":{"title":"Go"}}'
      )
      var s = o(74848),
        i = o(28453)
      const c = { title: 'Go' },
        r = void 0,
        a = {},
        d = [{ value: 'TODO', id: 'todo', level: 2 }]
      function l(e) {
        const t = { h2: 'h2', ...(0, i.R)(), ...e.components }
        return (0, s.jsx)(t.h2, { id: 'todo', children: 'TODO' })
      }
      function u(e = {}) {
        const { wrapper: t } = { ...(0, i.R)(), ...e.components }
        return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(l, { ...e }) }) : l(e)
      }
    },
    28453: (e, t, o) => {
      o.d(t, { R: () => c, x: () => r })
      var n = o(96540)
      const s = {},
        i = n.createContext(s)
      function c(e) {
        const t = n.useContext(i)
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e }
          },
          [t, e]
        )
      }
      function r(e) {
        let t
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : c(e.components)),
          n.createElement(i.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
