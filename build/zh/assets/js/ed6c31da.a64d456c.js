'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [1320],
  {
    3842: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => a,
          contentTitle: () => r,
          default: () => d,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => u,
        })
      const o = JSON.parse(
        '{"id":"java-client","title":"JAVA","description":"TODO","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/java-client.md","sourceDirName":".","slug":"/java-client","permalink":"/zh/docs/2.5.2/java-client","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/java-client.md","tags":[],"version":"2.5.2","frontMatter":{"title":"JAVA"}}'
      )
      var s = n(74848),
        c = n(28453)
      const i = { title: 'JAVA' },
        r = void 0,
        a = {},
        u = [{ value: 'TODO', id: 'todo', level: 2 }]
      function l(t) {
        const e = { h2: 'h2', ...(0, c.R)(), ...t.components }
        return (0, s.jsx)(e.h2, { id: 'todo', children: 'TODO' })
      }
      function d(t = {}) {
        const { wrapper: e } = { ...(0, c.R)(), ...t.components }
        return e ? (0, s.jsx)(e, { ...t, children: (0, s.jsx)(l, { ...t }) }) : l(t)
      }
    },
    28453: (t, e, n) => {
      n.d(e, { R: () => i, x: () => r })
      var o = n(96540)
      const s = {},
        c = o.createContext(s)
      function i(t) {
        const e = o.useContext(c)
        return o.useMemo(
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
          o.createElement(c.Provider, { value: e }, t.children)
        )
      }
    },
  },
])
