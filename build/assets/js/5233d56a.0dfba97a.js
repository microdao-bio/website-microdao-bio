'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [1290],
  {
    5817: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => a,
          contentTitle: () => r,
          default: () => u,
          frontMatter: () => c,
          metadata: () => o,
          toc: () => d,
        })
      const o = JSON.parse(
        '{"id":"java-client","title":"JAVA","description":"TODO","source":"@site/versioned_docs/version-2.5.2/java-client.md","sourceDirName":".","slug":"/java-client","permalink":"/docs/2.5.2/java-client","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.5.2/java-client.md","tags":[],"version":"2.5.2","frontMatter":{"title":"JAVA"}}'
      )
      var s = n(74848),
        i = n(28453)
      const c = { title: 'JAVA' },
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
    28453: (e, t, n) => {
      n.d(t, { R: () => c, x: () => r })
      var o = n(96540)
      const s = {},
        i = o.createContext(s)
      function c(e) {
        const t = o.useContext(i)
        return o.useMemo(
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
          o.createElement(i.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
