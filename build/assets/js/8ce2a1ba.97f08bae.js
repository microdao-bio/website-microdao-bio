'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [4028],
  {
    26169: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => r,
          contentTitle: () => a,
          default: () => l,
          frontMatter: () => d,
          metadata: () => o,
          toc: () => i,
        })
      const o = JSON.parse(
        '{"id":"extend-chaosd","title":"Extend Chaosd","description":"TODO","source":"@site/docs/extend-chaosd.md","sourceDirName":".","slug":"/extend-chaosd","permalink":"/docs/next/extend-chaosd","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/docs/extend-chaosd.md","tags":[],"version":"current","frontMatter":{"title":"Extend Chaosd"},"sidebar":"docs","previous":{"title":"Extend Chaos Daemon Interface","permalink":"/docs/next/extend-chaos-daemon-interface"},"next":{"title":"FAQs","permalink":"/docs/next/faqs"}}'
      )
      var s = n(74848),
        c = n(28453)
      const d = { title: 'Extend Chaosd' },
        a = void 0,
        r = {},
        i = [{ value: 'TODO', id: 'todo', level: 2 }]
      function u(e) {
        const t = { h2: 'h2', ...(0, c.R)(), ...e.components }
        return (0, s.jsx)(t.h2, { id: 'todo', children: 'TODO' })
      }
      function l(e = {}) {
        const { wrapper: t } = { ...(0, c.R)(), ...e.components }
        return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e)
      }
    },
    28453: (e, t, n) => {
      n.d(t, { R: () => d, x: () => a })
      var o = n(96540)
      const s = {},
        c = o.createContext(s)
      function d(e) {
        const t = o.useContext(c)
        return o.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e }
          },
          [t, e]
        )
      }
      function a(e) {
        let t
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : d(e.components)),
          o.createElement(c.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
