'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [7976],
  {
    57368: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => l,
          contentTitle: () => i,
          default: () => d,
          frontMatter: () => a,
          metadata: () => t,
          toc: () => h,
        })
      const t = JSON.parse(
        '{"id":"simulate-host-console-in-physical-nodes","title":"\u6a21\u62df\u4e3b\u673a\u6545\u969c","description":"\u6a21\u62df\u4e3b\u673a\u6545\u969c","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/simulate-host-console-in-physical-nodes.md","sourceDirName":".","slug":"/simulate-host-console-in-physical-nodes","permalink":"/zh/docs/2.4.3/simulate-host-console-in-physical-nodes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/simulate-host-console-in-physical-nodes.md","tags":[],"version":"2.4.3","frontMatter":{"title":"\u6a21\u62df\u4e3b\u673a\u6545\u969c"},"sidebar":"docs","previous":{"title":"\u6a21\u62df\u7f51\u7edc\u6545\u969c","permalink":"/zh/docs/2.4.3/simulate-network-chaos-in-physical-nodes"},"next":{"title":"\u6a21\u62df\u538b\u529b\u573a\u666f","permalink":"/zh/docs/2.4.3/simulate-heavy-stress-in-physical-nodes"}}'
      )
      var o = n(74848),
        c = n(28453)
      const a = { title: '\u6a21\u62df\u4e3b\u673a\u6545\u969c' },
        i = void 0,
        l = {},
        h = [
          { value: '\u6a21\u62df\u4e3b\u673a\u6545\u969c', id: '\u6a21\u62df\u4e3b\u673a\u6545\u969c', level: 2 },
          { value: '\u521b\u5efa\u5b9e\u9a8c', id: '\u521b\u5efa\u5b9e\u9a8c', level: 3 },
        ]
      function r(e) {
        const s = { code: 'code', h2: 'h2', h3: 'h3', p: 'p', pre: 'pre', ...(0, c.R)(), ...e.components }
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(s.h2, {
              id: '\u6a21\u62df\u4e3b\u673a\u6545\u969c',
              children: '\u6a21\u62df\u4e3b\u673a\u6545\u969c',
            }),
            '\n',
            (0, o.jsx)(s.p, {
              children:
                'Chaosd \u652f\u6301\u6a21\u62df\u4e3b\u673a\u5173\u673a\u6545\u969c\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u547d\u4ee4\u884c\u6a21\u62df\u4e3b\u673a\u5173\u673a\u6545\u969c\u3002',
            }),
            '\n',
            (0, o.jsx)(s.h3, { id: '\u521b\u5efa\u5b9e\u9a8c', children: '\u521b\u5efa\u5b9e\u9a8c' }),
            '\n',
            (0, o.jsx)(s.p, {
              children:
                '\u8981\u521b\u5efa\u5b9e\u9a8c\u6a21\u62df\u4e3b\u673a\u5173\u673a\u6545\u969c\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a',
            }),
            '\n',
            (0, o.jsx)(s.pre, {
              children: (0, o.jsx)(s.code, { className: 'language-bash', children: 'chaosd attack host shutdown\n' }),
            }),
            '\n',
            (0, o.jsx)(s.p, { children: '\u8f93\u51fa\u793a\u4f8b\u5982\u4e0b\uff1a' }),
            '\n',
            (0, o.jsx)(s.pre, {
              children: (0, o.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'chaosd attack host shutdown\nShutdown successfully, uid: 4bc9b74a-5fe2-4038-b4f3-09ae95b57694\n',
              }),
            }),
            '\n',
            (0, o.jsx)(s.p, {
              children:
                '\u6267\u884c\u8be5\u547d\u4ee4\u540e\uff0c\u4f60\u7684\u4e3b\u673a\u4f1a\u5728\u6240\u6709\u8fdb\u7a0b\u5173\u95ed\u540e\u5173\u673a\u3002',
            }),
            '\n',
            (0, o.jsx)(s.p, {
              children:
                '\u8981\u67e5\u770b Chaosd \u652f\u6301\u54ea\u4e9b\u7c7b\u578b\u7684\u4e3b\u673a\u5173\u673a\u5b9e\u9a8c\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a',
            }),
            '\n',
            (0, o.jsx)(s.pre, {
              children: (0, o.jsx)(s.code, {
                className: 'language-bash',
                children: 'chaosd attack host shutdown -h\n',
              }),
            }),
            '\n',
            (0, o.jsx)(s.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, o.jsx)(s.pre, {
              children: (0, o.jsx)(s.code, {
                className: 'language-bash',
                children:
                  "shutdowns system, this action will trigger shutdown of the host machine\n\nUsage:\n  chaosd attack host shutdown [flags]\n\nFlags:\n  -h, --help   help for shutdown\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n",
              }),
            }),
          ],
        })
      }
      function d(e = {}) {
        const { wrapper: s } = { ...(0, c.R)(), ...e.components }
        return s ? (0, o.jsx)(s, { ...e, children: (0, o.jsx)(r, { ...e }) }) : r(e)
      }
    },
    28453: (e, s, n) => {
      n.d(s, { R: () => a, x: () => i })
      var t = n(96540)
      const o = {},
        c = t.createContext(o)
      function a(e) {
        const s = t.useContext(c)
        return t.useMemo(
          function () {
            return 'function' == typeof e ? e(s) : { ...s, ...e }
          },
          [s, e]
        )
      }
      function i(e) {
        let s
        return (
          (s = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(o)
              : e.components || o
            : a(e.components)),
          t.createElement(c.Provider, { value: s }, e.children)
        )
      }
    },
  },
])
