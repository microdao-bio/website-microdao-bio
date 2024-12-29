'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [8067],
  {
    58945: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => i,
          contentTitle: () => r,
          default: () => u,
          frontMatter: () => d,
          metadata: () => n,
          toc: () => a,
        })
      const n = JSON.parse(
        '{"id":"extend-chaosd","title":"Extend Chaosd","description":"TODO","source":"@site/versioned_docs/version-2.6.2/extend-chaosd.md","sourceDirName":".","slug":"/extend-chaosd","permalink":"/docs/extend-chaosd","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.6.2/extend-chaosd.md","tags":[],"version":"2.6.2","frontMatter":{"title":"Extend Chaosd"},"sidebar":"docs","previous":{"title":"Extend Chaos Daemon Interface","permalink":"/docs/extend-chaos-daemon-interface"},"next":{"title":"FAQs","permalink":"/docs/faqs"}}'
      )
      var s = o(74848),
        c = o(28453)
      const d = { title: 'Extend Chaosd' },
        r = void 0,
        i = {},
        a = [{ value: 'TODO', id: 'todo', level: 2 }]
      function l(e) {
        const t = { h2: 'h2', ...(0, c.R)(), ...e.components }
        return (0, s.jsx)(t.h2, { id: 'todo', children: 'TODO' })
      }
      function u(e = {}) {
        const { wrapper: t } = { ...(0, c.R)(), ...e.components }
        return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(l, { ...e }) }) : l(e)
      }
    },
    28453: (e, t, o) => {
      o.d(t, { R: () => d, x: () => r })
      var n = o(96540)
      const s = {},
        c = n.createContext(s)
      function d(e) {
        const t = n.useContext(c)
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
            : d(e.components)),
          n.createElement(c.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
