'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [1077],
  {
    6813: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => u,
          contentTitle: () => c,
          default: () => l,
          frontMatter: () => r,
          metadata: () => n,
          toc: () => d,
        })
      const n = JSON.parse(
        '{"id":"troubleshooting-guide","title":"\u6545\u969c\u6392\u67e5","description":"TODO","source":"@site/versioned_docs/version-2.6.2/troubleshooting-guide.md","sourceDirName":".","slug":"/troubleshooting-guide","permalink":"/docs/troubleshooting-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.6.2/troubleshooting-guide.md","tags":[],"version":"2.6.2","frontMatter":{"title":"\u6545\u969c\u6392\u67e5"}}'
      )
      var s = o(74848),
        i = o(28453)
      const r = { title: '\u6545\u969c\u6392\u67e5' },
        c = void 0,
        u = {},
        d = [{ value: 'TODO', id: 'todo', level: 2 }]
      function a(e) {
        const t = { h2: 'h2', ...(0, i.R)(), ...e.components }
        return (0, s.jsx)(t.h2, { id: 'todo', children: 'TODO' })
      }
      function l(e = {}) {
        const { wrapper: t } = { ...(0, i.R)(), ...e.components }
        return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a(e)
      }
    },
    28453: (e, t, o) => {
      o.d(t, { R: () => r, x: () => c })
      var n = o(96540)
      const s = {},
        i = n.createContext(s)
      function r(e) {
        const t = n.useContext(i)
        return n.useMemo(
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
              ? e.components(s)
              : e.components || s
            : r(e.components)),
          n.createElement(i.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
