'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [8913],
  {
    90373: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => u,
          contentTitle: () => r,
          default: () => d,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => a,
        })
      const o = JSON.parse(
        '{"id":"python-client","title":"Python","description":"TODO","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.2/python-client.md","sourceDirName":".","slug":"/python-client","permalink":"/zh/docs/python-client","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.6.2/python-client.md","tags":[],"version":"2.6.2","frontMatter":{"title":"Python"}}'
      )
      var s = n(74848),
        c = n(28453)
      const i = { title: 'Python' },
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
