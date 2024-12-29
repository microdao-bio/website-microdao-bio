'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [3749],
  {
    50235: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => a,
          contentTitle: () => i,
          default: () => d,
          frontMatter: () => r,
          metadata: () => o,
          toc: () => u,
        })
      const o = JSON.parse(
        '{"id":"java-client","title":"JAVA","description":"TODO","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/java-client.md","sourceDirName":".","slug":"/java-client","permalink":"/zh/docs/next/java-client","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/current/java-client.md","tags":[],"version":"current","frontMatter":{"title":"JAVA"}}'
      )
      var c = n(74848),
        s = n(28453)
      const r = { title: 'JAVA' },
        i = void 0,
        a = {},
        u = [{ value: 'TODO', id: 'todo', level: 2 }]
      function l(t) {
        const e = { h2: 'h2', ...(0, s.R)(), ...t.components }
        return (0, c.jsx)(e.h2, { id: 'todo', children: 'TODO' })
      }
      function d(t = {}) {
        const { wrapper: e } = { ...(0, s.R)(), ...t.components }
        return e ? (0, c.jsx)(e, { ...t, children: (0, c.jsx)(l, { ...t }) }) : l(t)
      }
    },
    28453: (t, e, n) => {
      n.d(e, { R: () => r, x: () => i })
      var o = n(96540)
      const c = {},
        s = o.createContext(c)
      function r(t) {
        const e = o.useContext(s)
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
            : r(t.components)),
          o.createElement(s.Provider, { value: e }, t.children)
        )
      }
    },
  },
])
