'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [8958],
  {
    72026: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => a,
          contentTitle: () => r,
          default: () => u,
          frontMatter: () => c,
          metadata: () => o,
          toc: () => d,
        })
      const o = JSON.parse(
        '{"id":"python-client","title":"Python","description":"TODO","source":"@site/versioned_docs/version-2.5.2/python-client.md","sourceDirName":".","slug":"/python-client","permalink":"/docs/2.5.2/python-client","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.5.2/python-client.md","tags":[],"version":"2.5.2","frontMatter":{"title":"Python"}}'
      )
      var s = n(74848),
        i = n(28453)
      const c = { title: 'Python' },
        r = void 0,
        a = {},
        d = [{ value: 'TODO', id: 'todo', level: 2 }]
      function l(t) {
        const e = { h2: 'h2', ...(0, i.R)(), ...t.components }
        return (0, s.jsx)(e.h2, { id: 'todo', children: 'TODO' })
      }
      function u(t = {}) {
        const { wrapper: e } = { ...(0, i.R)(), ...t.components }
        return e ? (0, s.jsx)(e, { ...t, children: (0, s.jsx)(l, { ...t }) }) : l(t)
      }
    },
    28453: (t, e, n) => {
      n.d(e, { R: () => c, x: () => r })
      var o = n(96540)
      const s = {},
        i = o.createContext(s)
      function c(t) {
        const e = o.useContext(i)
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
            : c(t.components)),
          o.createElement(i.Provider, { value: e }, t.children)
        )
      }
    },
  },
])
