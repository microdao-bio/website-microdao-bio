'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [3287],
  {
    26024: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => o,
          contentTitle: () => a,
          default: () => d,
          frontMatter: () => c,
          metadata: () => h,
          toc: () => l,
        })
      const h = JSON.parse(
        '{"id":"upgrade-to-2.0","title":"\u5347\u7ea7\u81f3 Chaos Mesh 2.0","description":"\u672c\u6587\u4ecb\u7ecd\u4ece Chaos Mesh 1.x \u5347\u7ea7\u81f3 2.0 \u7684\u8be6\u7ec6\u6b65\u9aa4\u3002Chaos Mesh 2.0 \u5f15\u5165\u4e86\u4e00\u4e9b\u65b0\u529f\u80fd\uff0c\u5e76\u4fee\u590d\u4e86\u8bb8\u591a\u95ee\u9898\u3002Chaos Mesh 2.0 \u91cd\u6784\u4e86\u4e00\u90e8\u5206\u4ee3\u7801\uff0c\u56e0\u6b64\u9700\u8981\u505a\u4e00\u4e9b\u989d\u5916\u7684\u64cd\u4f5c\u4ece Chaos Mesh 1.x \u5347\u7ea7\u5230 2.0\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.2/upgrade-to-2.0.md","sourceDirName":".","slug":"/upgrade-to-2.0","permalink":"/zh/docs/upgrade-to-2.0","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.6.2/upgrade-to-2.0.md","tags":[],"version":"2.6.2","frontMatter":{"title":"\u5347\u7ea7\u81f3 Chaos Mesh 2.0"},"sidebar":"docs","previous":{"title":"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54 (FAQ)","permalink":"/zh/docs/faqs"},"next":{"title":"\u4ece 2.1 \u5347\u7ea7\u5230 2.2","permalink":"/zh/docs/upgrade-from-2.1-to-2.2"}}'
      )
      var i = n(74848),
        r = n(28453)
      const c = { title: '\u5347\u7ea7\u81f3 Chaos Mesh 2.0' },
        a = void 0,
        o = {},
        l = [
          { value: '\u5347\u7ea7\u5de5\u5177', id: '\u5347\u7ea7\u5de5\u5177', level: 2 },
          {
            value: '\u7b2c 1 \u6b65\uff1a\u5bfc\u51fa\u5e76\u5347\u7ea7\u5b9e\u9a8c',
            id: '\u7b2c-1-\u6b65\u5bfc\u51fa\u5e76\u5347\u7ea7\u5b9e\u9a8c',
            level: 2,
          },
          { value: '\u7b2c 2 \u6b65\uff1a\u5347\u7ea7 CRD', id: '\u7b2c-2-\u6b65\u5347\u7ea7-crd', level: 2 },
          {
            value: '\u7b2c 3 \u6b65\uff1a\u5347\u7ea7 Chaos Mesh',
            id: '\u7b2c-3-\u6b65\u5347\u7ea7-chaos-mesh',
            level: 2,
          },
          {
            value: '\u7b2c 4 \u6b65\uff1a\u5bfc\u5165\u5b9e\u9a8c',
            id: '\u7b2c-4-\u6b65\u5bfc\u5165\u5b9e\u9a8c',
            level: 2,
          },
          { value: '\u95ee\u9898\u53cd\u9988', id: '\u95ee\u9898\u53cd\u9988', level: 2 },
        ]
      function t(e) {
        const s = {
          a: 'a',
          code: 'code',
          h2: 'h2',
          li: 'li',
          p: 'p',
          pre: 'pre',
          ul: 'ul',
          ...(0, r.R)(),
          ...e.components,
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(s.p, {
              children:
                '\u672c\u6587\u4ecb\u7ecd\u4ece Chaos Mesh 1.x \u5347\u7ea7\u81f3 2.0 \u7684\u8be6\u7ec6\u6b65\u9aa4\u3002Chaos Mesh 2.0 \u5f15\u5165\u4e86\u4e00\u4e9b\u65b0\u529f\u80fd\uff0c\u5e76\u4fee\u590d\u4e86\u8bb8\u591a\u95ee\u9898\u3002Chaos Mesh 2.0 \u91cd\u6784\u4e86\u4e00\u90e8\u5206\u4ee3\u7801\uff0c\u56e0\u6b64\u9700\u8981\u505a\u4e00\u4e9b\u989d\u5916\u7684\u64cd\u4f5c\u4ece Chaos Mesh 1.x \u5347\u7ea7\u5230 2.0\u3002',
            }),
            '\n',
            (0, i.jsx)(s.h2, { id: '\u5347\u7ea7\u5de5\u5177', children: '\u5347\u7ea7\u5de5\u5177' }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'CRD \u5728 Chaos Mesh 2.0 \u4e2d\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u65e7\u7248\u672c\u5b9e\u9a8c\u7684 YAML \u6587\u4ef6\u65e0\u6cd5\u5728 Chaos Mesh 2.0 \u4e0a\u8fd0\u884c\u3002\u5982\u679c\u5e0c\u671b\u7ee7\u7eed\u4f7f\u7528\u65e7\u7248\u672c\u5b9e\u9a8c\u7684 YAML \u6587\u4ef6\uff0c\u5219\u9700\u8981\u5bfc\u51fa\u5e76\u5347\u7ea7\u8fd9\u4e9b\u6587\u4ef6\uff0c\u5e76\u5728 Chaos Mesh \u5347\u7ea7\u540e\u91cd\u65b0\u5bfc\u5165\u3002',
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                '\u4e3a\u4e86\u7b80\u5316\u5347\u7ea7\u8fc7\u7a0b\uff0cChaos Mesh 2.0 \u63d0\u4f9b\u4e86\u4ee5\u4e0b\u5347\u7ea7\u5de5\u5177\uff1a',
            }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    (0, i.jsx)(s.code, { children: 'migrate.sh' }),
                    '\uff1a\u7528\u4e8e\u81ea\u52a8\u5bfc\u51fa\u5e76\u5347\u7ea7\u5b9e\u9a8c YAML \u6587\u4ef6\u3001\u5347\u7ea7 CRD\u3001\u5bfc\u5165\u5347\u7ea7\u540e\u7684 YAML \u6587\u4ef6\u3002',
                  ],
                }),
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    (0, i.jsx)(s.code, { children: 'schedule-migration' }),
                    '\uff1a\u7528\u4e8e\u5c06\u6307\u5b9a\u7684\u65e7\u7248 YAML \u6587\u4ef6\u66f4\u65b0\u4e3a\u65b0\u7248 YAML \u6587\u4ef6\u3002',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                '\u8981\u83b7\u53d6\u5347\u7ea7\u5de5\u5177\uff0c\u5efa\u8bae\u5c06 Chaos Mesh \u9879\u76ee\u514b\u9686\u81f3\u672c\u5730\u6267\u884c ',
                (0, i.jsx)(s.code, { children: 'make schedule-migration.tar.gz' }),
                '\uff0c\u6216\u662f\u4ece ',
                (0, i.jsx)(s.a, {
                  href: 'https://mirrors.chaos-mesh.org/v2.0.0/schedule-migration.tar.gz',
                  children: 'https://mirrors.chaos-mesh.org/v2.0.0/schedule-migration.tar.gz',
                }),
                ' \u4e0b\u8f7d\u3002\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5c06\u5176\u89e3\u538b\uff0c\u5373\u53ef\u5f97\u5230\u4e0a\u8ff0\u4e24\u4e2a\u5de5\u5177\uff1a',
              ],
            }),
            '\n',
            (0, i.jsx)(s.pre, {
              children: (0, i.jsx)(s.code, {
                className: 'language-bash',
                children: 'tar xvf ./schedule-migration.tar.gz\n',
              }),
            }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                '\u8be5\u538b\u7f29\u5305\u6253\u5305\u7684 ',
                (0, i.jsx)(s.code, { children: 'schedule-migration' }),
                ' \u5de5\u5177\u4ec5\u9002\u7528\u4e8e Linux x86_64 \u5e73\u53f0\uff0c\u5176\u4ed6\u64cd\u4f5c\u7cfb\u7edf / \u67b6\u6784\u7684\u7528\u6237\u9700\u8981\u81ea\u884c\u7f16\u8bd1\u3002',
              ],
            }),
            '\n',
            (0, i.jsx)(s.h2, {
              id: '\u7b2c-1-\u6b65\u5bfc\u51fa\u5e76\u5347\u7ea7\u5b9e\u9a8c',
              children: '\u7b2c 1 \u6b65\uff1a\u5bfc\u51fa\u5e76\u5347\u7ea7\u5b9e\u9a8c',
            }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                '\u4f60\u53ef\u4ee5\u4f7f\u7528\u5347\u7ea7\u5de5\u5177 ',
                (0, i.jsx)(s.code, { children: 'migrate.sh' }),
                ' \u81ea\u52a8\u5bfc\u51fa\u5e76\u5347\u7ea7\u5b9e\u9a8c\u3002\u5728\u8fd0\u884c\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u5f53\u524d\u7528\u6237\u6709\u8db3\u591f\u7684\u6743\u9650\u8bbf\u95ee\u96c6\u7fa4\u3002',
              ],
            }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                '\u5047\u8bbe ',
                (0, i.jsx)(s.code, { children: 'migrate.sh' }),
                ' \u4f4d\u4e8e\u5f53\u524d\u76ee\u5f55\u4e0b\uff0c\u5e76\u4e14 ',
                (0, i.jsx)(s.code, { children: 'schedule-migration' }),
                ' \u5de5\u5177\u4e5f\u7f6e\u4e8e\u8be5\u76ee\u5f55\u4e0b\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5bfc\u51fa\u5e76\u5347\u7ea7\u5b9e\u9a8c\uff1a',
              ],
            }),
            '\n',
            (0, i.jsx)(s.pre, {
              children: (0, i.jsx)(s.code, { className: 'language-bash', children: 'bash migrate.sh -e\n' }),
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                '\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u751f\u6210\u4e86\u8bb8\u591a YAML \u6587\u4ef6\uff0c\u8fd9\u4e9b\u5c31\u662f\u88ab\u5bfc\u51fa\u7684\u5b9e\u9a8c\u6587\u4ef6\u3002\u5bfc\u51fa\u7684\u5b9e\u9a8c\u6587\u4ef6\u5df2\u7ecf\u88ab\u81ea\u52a8\u5347\u7ea7\u3002',
            }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                '\u6b64\u5916\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ',
                (0, i.jsx)(s.code, { children: 'schedule-migration' }),
                ' \u5de5\u5177\u53ea\u5347\u7ea7\u6307\u5b9a\u7684\u65e7\u7248 YAML \u6587\u4ef6\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a',
              ],
            }),
            '\n',
            (0, i.jsx)(s.pre, {
              children: (0, i.jsx)(s.code, {
                className: 'language-bash',
                children: './schedule-migration <path-to-old-yaml> <path-to-new-yaml>\n',
              }),
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                '\u5728\u4f60\u6307\u5b9a\u7684 YAML \u6587\u4ef6\u8def\u5f84\uff0c\u5c31\u53ef\u4ee5\u83b7\u53d6\u5347\u7ea7\u540e\u7684\u65b0\u7248 YAML \u6587\u4ef6\u3002\u5728\u5220\u9664\u65e7\u8d44\u6e90\u540e\u91cd\u65b0\u5e94\u7528\u65b0 YAML \u6587\u4ef6\u5373\u53ef\u5b8c\u6210\u66f4\u65b0\u3002',
            }),
            '\n',
            (0, i.jsx)(s.h2, {
              id: '\u7b2c-2-\u6b65\u5347\u7ea7-crd',
              children: '\u7b2c 2 \u6b65\uff1a\u5347\u7ea7 CRD',
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                '\u5f53\u4f7f\u7528 Helm \u5347\u7ea7 Chaos Mesh \u524d\uff0c\u4e3a\u4e86\u80fd\u6700\u5927\u7a0b\u5ea6\u4fdd\u8bc1\u5347\u7ea7\u6210\u529f\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u624b\u52a8\u5347\u7ea7 CRD\uff1a',
            }),
            '\n',
            (0, i.jsx)(s.pre, {
              children: (0, i.jsx)(s.code, { className: 'language-bash', children: 'bash migrate.sh -c\n' }),
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children: '\u5373\u53ef\u770b\u5230 CRD \u88ab\u5220\u9664\u540e\u91cd\u65b0\u6dfb\u52a0\u3002',
            }),
            '\n',
            (0, i.jsx)(s.h2, {
              id: '\u7b2c-3-\u6b65\u5347\u7ea7-chaos-mesh',
              children: '\u7b2c 3 \u6b65\uff1a\u5347\u7ea7 Chaos Mesh',
            }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                '\u7531\u4e8e 2.0 \u7684\u6539\u52a8\u8f83\u5927\uff0c\u63a8\u8350\u5728\u5378\u8f7d 1.x \u540e\u91cd\u65b0\u8fdb\u884c\u5b89\u88c5\u3002\u5177\u4f53\u5b89\u88c5\u6b65\u9aa4\uff0c\u8bf7\u53c2\u8003',
                (0, i.jsx)(s.a, {
                  href: '/zh/docs/production-installation-using-helm',
                  children: '\u4f7f\u7528 Helm \u5b89\u88c5\uff08\u751f\u4ea7\u63a8\u8350\uff09',
                }),
                '\u3002',
              ],
            }),
            '\n',
            (0, i.jsx)(s.h2, {
              id: '\u7b2c-4-\u6b65\u5bfc\u5165\u5b9e\u9a8c',
              children: '\u7b2c 4 \u6b65\uff1a\u5bfc\u5165\u5b9e\u9a8c',
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'Chaos Mesh 2.0 \u5bf9\u5b9e\u9a8c\u5b9a\u4e49\u8fdb\u884c\u4e86\u4e00\u4e9b\u4fee\u6539\uff0c\u9700\u8981\u5347\u7ea7\u65e7\u7248\u5b9e\u9a8c\u6587\u4ef6\u540e\u624d\u80fd\u7ee7\u7eed\u4f7f\u7528\u3002',
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                '\u5728\u5bfc\u51fa\u7684\u5b9e\u9a8c\u6587\u4ef6\u7684\u540c\u4e00\u76ee\u5f55\u4e0b\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5bfc\u5165\u5b9e\u9a8c\uff1a',
            }),
            '\n',
            (0, i.jsx)(s.pre, {
              children: (0, i.jsx)(s.code, { className: 'language-bash', children: 'bash migrate.sh -i\n' }),
            }),
            '\n',
            (0, i.jsx)(s.h2, { id: '\u95ee\u9898\u53cd\u9988', children: '\u95ee\u9898\u53cd\u9988' }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                '\u5982\u679c\u5728\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u9047\u5230\u4efb\u4f55\u95ee\u9898\uff0c\u8bf7\u5c06\u547d\u4ee4\u884c\u8f93\u51fa\u63d0\u4ea4\u81f3 ',
                (0, i.jsx)(s.a, { href: 'https://cloud-native.slack.com/archives/C0193VAV272', children: 'slack' }),
                ' \u6216\u5728 Github \u4e0a\u65b0\u5efa\u4e00\u4e2a ',
                (0, i.jsx)(s.a, { href: 'https://github.com/pingcap/chaos-mesh/issues', children: 'issue' }),
                '\u3002\u611f\u8c22\u4f60\u7684\u53cd\u9988\uff0cChaos Mesh \u56e2\u961f\u5f88\u4e50\u610f\u5e2e\u52a9\u89e3\u51b3\u3002',
              ],
            }),
          ],
        })
      }
      function d(e = {}) {
        const { wrapper: s } = { ...(0, r.R)(), ...e.components }
        return s ? (0, i.jsx)(s, { ...e, children: (0, i.jsx)(t, { ...e }) }) : t(e)
      }
    },
    28453: (e, s, n) => {
      n.d(s, { R: () => c, x: () => a })
      var h = n(96540)
      const i = {},
        r = h.createContext(i)
      function c(e) {
        const s = h.useContext(r)
        return h.useMemo(
          function () {
            return 'function' == typeof e ? e(s) : { ...s, ...e }
          },
          [s, e]
        )
      }
      function a(e) {
        let s
        return (
          (s = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : c(e.components)),
          h.createElement(r.Provider, { value: s }, e.children)
        )
      }
    },
  },
])