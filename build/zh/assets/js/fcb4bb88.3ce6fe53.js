'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [7156],
  {
    14497: (t, e, o) => {
      o.r(e),
        o.d(e, {
          assets: () => u,
          contentTitle: () => c,
          default: () => l,
          frontMatter: () => r,
          metadata: () => n,
          toc: () => d,
        })
      const n = JSON.parse(
        '{"id":"troubleshooting-guide","title":"\u6545\u969c\u6392\u67e5","description":"TODO","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/troubleshooting-guide.md","sourceDirName":".","slug":"/troubleshooting-guide","permalink":"/zh/docs/2.5.2/troubleshooting-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/troubleshooting-guide.md","tags":[],"version":"2.5.2","frontMatter":{"title":"\u6545\u969c\u6392\u67e5"}}'
      )
      var s = o(74848),
        i = o(28453)
      const r = { title: '\u6545\u969c\u6392\u67e5' },
        c = void 0,
        u = {},
        d = [{ value: 'TODO', id: 'todo', level: 2 }]
      function a(t) {
        const e = { h2: 'h2', ...(0, i.R)(), ...t.components }
        return (0, s.jsx)(e.h2, { id: 'todo', children: 'TODO' })
      }
      function l(t = {}) {
        const { wrapper: e } = { ...(0, i.R)(), ...t.components }
        return e ? (0, s.jsx)(e, { ...t, children: (0, s.jsx)(a, { ...t }) }) : a(t)
      }
    },
    28453: (t, e, o) => {
      o.d(e, { R: () => r, x: () => c })
      var n = o(96540)
      const s = {},
        i = n.createContext(s)
      function r(t) {
        const e = n.useContext(i)
        return n.useMemo(
          function () {
            return 'function' == typeof t ? t(e) : { ...e, ...t }
          },
          [e, t]
        )
      }
      function c(t) {
        let e
        return (
          (e = t.disableParentContext
            ? 'function' == typeof t.components
              ? t.components(s)
              : t.components || s
            : r(t.components)),
          n.createElement(i.Provider, { value: e }, t.children)
        )
      }
    },
  },
])
