'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [8801],
  {
    22707: (n, e, o) => {
      o.r(e),
        o.d(e, {
          assets: () => i,
          contentTitle: () => a,
          default: () => h,
          frontMatter: () => r,
          metadata: () => c,
          toc: () => l,
        })
      const c = JSON.parse(
        '{"id":"common/verify-installation","title":"verify-installation","description":"\u8981\u67e5\u770b Chaos Mesh \u7684\u8fd0\u884c\u60c5\u51b5\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/common/verify-installation.md","sourceDirName":"common","slug":"/common/verify-installation","permalink":"/zh/docs/next/common/verify-installation","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/current/common/verify-installation.md","tags":[],"version":"current","frontMatter":{}}'
      )
      var s = o(74848),
        t = o(28453)
      const r = {},
        a = void 0,
        i = {},
        l = []
      function d(n) {
        const e = { admonition: 'admonition', code: 'code', p: 'p', pre: 'pre', ...(0, t.R)(), ...n.components }
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(e.p, {
              children:
                '\u8981\u67e5\u770b Chaos Mesh \u7684\u8fd0\u884c\u60c5\u51b5\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a',
            }),
            '\n',
            (0, s.jsx)(e.pre, {
              children: (0, s.jsx)(e.code, { className: 'language-bash', children: 'kubectl get po -n chaos-mesh\n' }),
            }),
            '\n',
            (0, s.jsx)(e.p, { children: '\u4ee5\u4e0b\u662f\u9884\u671f\u8f93\u51fa\uff1a' }),
            '\n',
            (0, s.jsx)(e.pre, {
              children: (0, s.jsx)(e.code, {
                className: 'language-bash',
                children:
                  'NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   3/3     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n',
              }),
            }),
            '\n',
            (0, s.jsx)(e.p, {
              children:
                '\u5982\u679c\u4f60\u7684\u5b9e\u9645\u8f93\u51fa\u4e0e\u9884\u671f\u8f93\u51fa\u76f8\u7b26\uff0c\u8868\u793a Chaos Mesh \u5df2\u7ecf\u6210\u529f\u5b89\u88c5\u3002',
            }),
            '\n',
            (0, s.jsxs)(e.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: [
                (0, s.jsxs)(e.p, {
                  children: [
                    '\u5982\u679c\u5b9e\u9645\u8f93\u51fa\u7684 ',
                    (0, s.jsx)(e.code, { children: 'STATUS' }),
                    ' \u72b6\u6001\u4e0d\u662f ',
                    (0, s.jsx)(e.code, { children: 'Running' }),
                    '\uff0c\u5219\u9700\u8981\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b Pod \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u7136\u540e\u4f9d\u636e\u9519\u8bef\u63d0\u793a\u6392\u67e5\u5e76\u89e3\u51b3\u95ee\u9898\u3002',
                  ],
                }),
                (0, s.jsx)(e.pre, {
                  children: (0, s.jsx)(e.code, {
                    className: 'language-bash',
                    children:
                      '# \u4ee5 chaos-controller \u4e3a\u4f8b\nkubectl describe po -n chaos-mesh chaos-controller-manager-69fd5c46c8-xlqpc\n',
                  }),
                }),
              ],
            }),
            '\n',
            (0, s.jsxs)(e.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: [
                (0, s.jsxs)(e.p, {
                  children: [
                    '\u5982\u679c\u624b\u52a8\u5173\u95ed\u4e86 ',
                    (0, s.jsx)(e.code, { children: 'leader-election' }),
                    '\uff0c',
                    (0, s.jsx)(e.code, { children: 'chaos-controller-manager' }),
                    ' \u5e94\u8be5\u53ea\u6709 1 \u4e2a\u5b9e\u4f8b\u3002',
                  ],
                }),
                (0, s.jsx)(e.pre, {
                  children: (0, s.jsx)(e.code, {
                    className: 'language-sh',
                    children:
                      'NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n',
                  }),
                }),
              ],
            }),
          ],
        })
      }
      function h(n = {}) {
        const { wrapper: e } = { ...(0, t.R)(), ...n.components }
        return e ? (0, s.jsx)(e, { ...n, children: (0, s.jsx)(d, { ...n }) }) : d(n)
      }
    },
    28453: (n, e, o) => {
      o.d(e, { R: () => r, x: () => a })
      var c = o(96540)
      const s = {},
        t = c.createContext(s)
      function r(n) {
        const e = c.useContext(t)
        return c.useMemo(
          function () {
            return 'function' == typeof n ? n(e) : { ...e, ...n }
          },
          [e, n]
        )
      }
      function a(n) {
        let e
        return (
          (e = n.disableParentContext
            ? 'function' == typeof n.components
              ? n.components(s)
              : n.components || s
            : r(n.components)),
          c.createElement(t.Provider, { value: e }, n.children)
        )
      }
    },
  },
])
