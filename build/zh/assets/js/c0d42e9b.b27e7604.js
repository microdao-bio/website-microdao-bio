'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [9940],
  {
    837: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => i,
          contentTitle: () => a,
          default: () => h,
          frontMatter: () => r,
          metadata: () => o,
          toc: () => d,
        })
      const o = JSON.parse(
        '{"id":"extend-chaosd","title":"\u62d3\u5c55 Chaosd \u7ec4\u4ef6","description":"TODO","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/extend-chaosd.md","sourceDirName":".","slug":"/extend-chaosd","permalink":"/zh/docs/next/extend-chaosd","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/current/extend-chaosd.md","tags":[],"version":"current","frontMatter":{"title":"\u62d3\u5c55 Chaosd \u7ec4\u4ef6"},"sidebar":"docs","previous":{"title":"\u62d3\u5c55 Chaos Daemon \u63a5\u53e3","permalink":"/zh/docs/next/extend-chaos-daemon-interface"},"next":{"title":"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54 (FAQ)","permalink":"/zh/docs/next/faqs"}}'
      )
      var s = n(74848),
        c = n(28453)
      const r = { title: '\u62d3\u5c55 Chaosd \u7ec4\u4ef6' },
        a = void 0,
        i = {},
        d = [{ value: 'TODO', id: 'todo', level: 2 }]
      function u(e) {
        const t = { h2: 'h2', ...(0, c.R)(), ...e.components }
        return (0, s.jsx)(t.h2, { id: 'todo', children: 'TODO' })
      }
      function h(e = {}) {
        const { wrapper: t } = { ...(0, c.R)(), ...e.components }
        return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(u, { ...e }) }) : u(e)
      }
    },
    28453: (e, t, n) => {
      n.d(t, { R: () => r, x: () => a })
      var o = n(96540)
      const s = {},
        c = o.createContext(s)
      function r(e) {
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
            : r(e.components)),
          o.createElement(c.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
