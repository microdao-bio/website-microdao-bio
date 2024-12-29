'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [2795],
  {
    61142: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => h,
          contentTitle: () => c,
          default: () => a,
          frontMatter: () => i,
          metadata: () => s,
          toc: () => d,
        })
      const s = JSON.parse(
        '{"id":"developer-guide-overview","title":"\u5f00\u53d1\u6307\u5357\u6982\u89c8","description":"\u4e2d\u6587\u7248\u5f00\u53d1\u6307\u5357\u7684\u5185\u5bb9\u5df2\u7ecf\u8fc7\u65f6\uff0c\u8bf7\u53c2\u8003 \u82f1\u6587\u7248\u5f00\u53d1\u6307\u5357\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/developer-guide-overview.md","sourceDirName":".","slug":"/developer-guide-overview","permalink":"/zh/docs/next/developer-guide-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/current/developer-guide-overview.md","tags":[],"version":"current","frontMatter":{"title":"\u5f00\u53d1\u6307\u5357\u6982\u89c8"},"sidebar":"docs","previous":{"title":"Chaosctl","permalink":"/zh/docs/next/chaosctl-tool"},"next":{"title":"\u914d\u7f6e\u5f00\u53d1\u73af\u5883","permalink":"/zh/docs/next/configure-development-environment"}}'
      )
      var o = t(74848),
        r = t(28453)
      const i = { title: '\u5f00\u53d1\u6307\u5357\u6982\u89c8' },
        c = void 0,
        h = {},
        d = []
      function l(e) {
        const n = { a: 'a', admonition: 'admonition', li: 'li', p: 'p', ul: 'ul', ...(0, r.R)(), ...e.components }
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(n.admonition, {
              type: 'danger',
              children: (0, o.jsxs)(n.p, {
                children: [
                  '\u4e2d\u6587\u7248\u5f00\u53d1\u6307\u5357\u7684\u5185\u5bb9\u5df2\u7ecf\u8fc7\u65f6\uff0c\u8bf7\u53c2\u8003 ',
                  (0, o.jsx)(n.a, {
                    href: 'https://chaos-mesh.org/docs/developer-guide-overview',
                    children: '\u82f1\u6587\u7248\u5f00\u53d1\u6307\u5357',
                  }),
                  '\u3002',
                ],
              }),
            }),
            '\n',
            (0, o.jsx)(n.p, {
              children:
                '\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5f00\u53d1 Chaos Mesh\u3002\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u63a8\u8350\u9605\u8bfb\u4ee5\u4e0b\u6750\u6599\u4ee5\u719f\u6089\u6574\u4e2a\u9879\u76ee\uff1a',
            }),
            '\n',
            (0, o.jsxs)(n.ul, {
              children: [
                '\n',
                (0, o.jsx)(n.li, {
                  children: (0, o.jsx)(n.a, {
                    href: 'https://github.com/chaos-mesh/chaos-mesh/blob/master/README.md',
                    children: 'Chaos Mesh README',
                  }),
                }),
                '\n',
                (0, o.jsx)(n.li, {
                  children: (0, o.jsx)(n.a, {
                    href: 'https://github.com/chaos-mesh/chaos-mesh/blob/master/ui/README.md',
                    children: 'Chaos Mesh Dashboard README',
                  }),
                }),
                '\n',
              ],
            }),
            '\n',
            (0, o.jsxs)(n.p, {
              children: [
                '\u5148\u4ece ',
                (0, o.jsx)(n.a, {
                  href: '/zh/docs/next/configure-development-environment',
                  children: '\u914d\u7f6e\u5f00\u53d1\u73af\u5883',
                }),
                ' \u5f00\u59cb\uff0c\u4e4b\u540e\u4f60\u53ef\u4ee5\u4f9d\u6b21\u5c1d\u8bd5:',
              ],
            }),
            '\n',
            (0, o.jsxs)(n.ul, {
              children: [
                '\n',
                (0, o.jsx)(n.li, {
                  children: (0, o.jsx)(n.a, {
                    href: '/zh/docs/next/add-new-chaos-experiment-type',
                    children: '\u65b0\u589e\u6df7\u6c8c\u5b9e\u9a8c\u7c7b\u578b',
                  }),
                }),
                '\n',
                (0, o.jsx)(n.li, {
                  children: (0, o.jsx)(n.a, {
                    href: '/zh/docs/next/extend-chaos-daemon-interface',
                    children: '\u62d3\u5c55 Chaos Daemon \u63a5\u53e3',
                  }),
                }),
                '\n',
              ],
            }),
            '\n',
            (0, o.jsx)(n.p, { children: '\u5f00\u53d1\u89c4\u8303\u76f8\u5173\u5185\u5bb9\u5982\u4e0b\uff1a' }),
            '\n',
            (0, o.jsxs)(n.ul, {
              children: [
                '\n',
                (0, o.jsx)(n.li, {
                  children: (0, o.jsx)(n.a, {
                    href: 'https://github.com/chaos-mesh/rfcs/blob/main/text/2021-09-27-refine-error-handling.md',
                    children: '\u9519\u8bef\u5904\u7406',
                  }),
                }),
                '\n',
                (0, o.jsx)(n.li, {
                  children: (0, o.jsx)(n.a, {
                    href: 'https://github.com/chaos-mesh/rfcs/blob/main/text/2021-12-09-logging.md',
                    children: '\u65e5\u5fd7\u6253\u5370',
                  }),
                }),
                '\n',
              ],
            }),
          ],
        })
      }
      function a(e = {}) {
        const { wrapper: n } = { ...(0, r.R)(), ...e.components }
        return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(l, { ...e }) }) : l(e)
      }
    },
    28453: (e, n, t) => {
      t.d(n, { R: () => i, x: () => c })
      var s = t(96540)
      const o = {},
        r = s.createContext(o)
      function i(e) {
        const n = s.useContext(r)
        return s.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e }
          },
          [n, e]
        )
      }
      function c(e) {
        let n
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(o)
              : e.components || o
            : i(e.components)),
          s.createElement(r.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
