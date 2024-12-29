'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [6569],
  {
    37758: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => o,
          contentTitle: () => h,
          default: () => t,
          frontMatter: () => d,
          metadata: () => l,
          toc: () => r,
        })
      const l = JSON.parse(
        '{"id":"chaosd-overview","title":"Chaosd \u7ec4\u4ef6\u7b80\u4ecb","description":"Chaosd \u7ec4\u4ef6\u7b80\u4ecb","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.2/chaosd-overview.md","sourceDirName":".","slug":"/chaosd-overview","permalink":"/zh/docs/chaosd-overview","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.6.2/chaosd-overview.md","tags":[],"version":"2.6.2","frontMatter":{"title":"Chaosd \u7ec4\u4ef6\u7b80\u4ecb"},"sidebar":"docs","previous":{"title":"Simulate Block Device Incidents","permalink":"/zh/docs/simulate-block-chaos-on-kubernetes"},"next":{"title":"\u4f7f\u7528 Chaos Mesh \u521b\u5efa\u7269\u7406\u673a\u6545\u969c","permalink":"/zh/docs/simulate-physical-machine-chaos"}}'
      )
      var i = n(74848),
        c = n(28453)
      const d = { title: 'Chaosd \u7ec4\u4ef6\u7b80\u4ecb' },
        h = void 0,
        o = {},
        r = [
          { value: 'Chaosd \u7ec4\u4ef6\u7b80\u4ecb', id: 'chaosd-\u7ec4\u4ef6\u7b80\u4ecb', level: 2 },
          { value: '\u652f\u6301\u6545\u969c\u7c7b\u578b', id: '\u652f\u6301\u6545\u969c\u7c7b\u578b', level: 3 },
          { value: '\u8fd0\u884c\u73af\u5883', id: '\u8fd0\u884c\u73af\u5883', level: 3 },
          { value: '\u4e0b\u8f7d\u548c\u90e8\u7f72', id: '\u4e0b\u8f7d\u548c\u90e8\u7f72', level: 3 },
          { value: '\u8fd0\u884c\u6a21\u5f0f', id: '\u8fd0\u884c\u6a21\u5f0f', level: 3 },
        ]
      function a(e) {
        const s = {
          a: 'a',
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
          ul: 'ul',
          ...(0, c.R)(),
          ...e.components,
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(s.h2, { id: 'chaosd-\u7ec4\u4ef6\u7b80\u4ecb', children: 'Chaosd \u7ec4\u4ef6\u7b80\u4ecb' }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                (0, i.jsx)(s.a, { href: 'https://github.com/chaos-mesh/chaosd', children: 'Chaosd' }),
                ' \u662f Chaos Mesh \u63d0\u4f9b\u7684\u4e00\u6b3e\u6df7\u6c8c\u5de5\u7a0b\u6d4b\u8bd5\u5de5\u5177\uff08\u9700\u8981\u5355\u72ec',
                (0, i.jsx)(s.a, {
                  href: '#%E4%B8%8B%E8%BD%BD%E5%92%8C%E9%83%A8%E7%BD%B2',
                  children: '\u4e0b\u8f7d\u548c\u90e8\u7f72',
                }),
                '\uff09\uff0c\u7528\u4e8e\u5728\u7269\u7406\u673a\u73af\u5883\u4e0a\u6ce8\u5165\u6545\u969c\uff0c\u5e76\u63d0\u4f9b\u6545\u969c\u6062\u590d\u529f\u80fd\u3002',
              ],
            }),
            '\n',
            (0, i.jsx)(s.p, { children: 'Chaosd \u5177\u6709\u4ee5\u4e0b\u6838\u5fc3\u4f18\u52bf\uff1a' }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsx)(s.li, {
                  children:
                    '\u6613\u7528\u6027\u5f3a\uff1a\u8f93\u5165\u7b80\u5355\u7684 Chaosd \u547d\u4ee4\u5373\u53ef\u521b\u5efa\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u5e76\u5bf9\u5b9e\u9a8c\u8fdb\u884c\u7ba1\u7406\u3002',
                }),
                '\n',
                (0, i.jsx)(s.li, {
                  children:
                    '\u6545\u969c\u7c7b\u578b\u4e30\u5bcc\uff1a\u5728\u7269\u7406\u673a\u7684\u4e0d\u540c\u5c42\u6b21\u3001\u4e0d\u540c\u7c7b\u578b\u4e0a\u90fd\u63d0\u4f9b\u4e86\u6545\u969c\u6ce8\u5165\u7684\u529f\u80fd\uff0c\u5305\u62ec\u8fdb\u7a0b\u3001\u7f51\u7edc\u3001\u538b\u529b\u3001\u78c1\u76d8\u3001\u4e3b\u673a\u7b49\uff0c\u4e14\u66f4\u591a\u7684\u529f\u80fd\u5728\u4e0d\u65ad\u6269\u5c55\u4e2d\u3002',
                }),
                '\n',
                (0, i.jsx)(s.li, {
                  children:
                    '\u652f\u6301\u591a\u79cd\u6a21\u5f0f\uff1aChaosd \u65e2\u53ef\u4f5c\u4e3a\u547d\u4ee4\u884c\u5de5\u5177\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u670d\u52a1\u4f7f\u7528\uff0c\u6ee1\u8db3\u4e0d\u540c\u573a\u666f\u7684\u4f7f\u7528\u9700\u6c42\u3002',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.h3, {
              id: '\u652f\u6301\u6545\u969c\u7c7b\u578b',
              children: '\u652f\u6301\u6545\u969c\u7c7b\u578b',
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children: '\u4f60\u53ef\u4ee5\u4f7f\u7528 Chaosd \u6a21\u62df\u4ee5\u4e0b\u6545\u969c\u7c7b\u578b\uff1a',
            }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsx)(s.li, {
                  children:
                    '\u8fdb\u7a0b\uff1a\u5bf9\u8fdb\u7a0b\u8fdb\u884c\u6545\u969c\u6ce8\u5165\uff0c\u652f\u6301\u8fdb\u7a0b\u7684 kill\u3001stop \u7b49\u64cd\u4f5c\u3002',
                }),
                '\n',
                (0, i.jsx)(s.li, {
                  children:
                    '\u7f51\u7edc\uff1a\u5bf9\u7269\u7406\u673a\u7684\u7f51\u7edc\u8fdb\u884c\u6545\u969c\u6ce8\u5165\uff0c\u652f\u6301\u589e\u52a0\u7f51\u7edc\u5ef6\u8fdf\u3001\u4e22\u5305\u3001\u635f\u574f\u5305\u7b49\u64cd\u4f5c\u3002',
                }),
                '\n',
                (0, i.jsx)(s.li, {
                  children:
                    '\u538b\u529b\uff1a\u5bf9\u7269\u7406\u673a\u7684 CPU \u6216\u5185\u5b58\u6ce8\u5165\u538b\u529b\u3002',
                }),
                '\n',
                (0, i.jsx)(s.li, {
                  children:
                    '\u78c1\u76d8\uff1a\u5bf9\u7269\u7406\u673a\u7684\u78c1\u76d8\u8fdb\u884c\u6545\u969c\u6ce8\u5165\uff0c\u652f\u6301\u589e\u52a0\u8bfb\u5199\u78c1\u76d8\u8d1f\u8f7d\u3001\u586b\u5145\u78c1\u76d8\u7b49\u64cd\u4f5c\u3002',
                }),
                '\n',
                (0, i.jsx)(s.li, {
                  children:
                    '\u4e3b\u673a\uff1a\u5bf9\u7269\u7406\u673a\u672c\u8eab\u8fdb\u884c\u6545\u969c\u6ce8\u5165\uff0c\u652f\u6301\u5173\u673a\u7b49\u64cd\u4f5c\u3002',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                '\u5bf9\u4e8e\u6bcf\u79cd\u6545\u969c\u7c7b\u578b\u7684\u8be6\u7ec6\u4ecb\u7ecd\u548c\u4f7f\u7528\u65b9\u5f0f\uff0c\u8bf7\u53c2\u8003\u5bf9\u5e94\u7684\u8bf4\u660e\u6587\u6863\u3002',
            }),
            '\n',
            (0, i.jsx)(s.h3, { id: '\u8fd0\u884c\u73af\u5883', children: '\u8fd0\u884c\u73af\u5883' }),
            '\n',
            (0, i.jsx)(s.p, { children: 'glibc \u5fc5\u987b\u4e3a 2.17 \u53ca\u4ee5\u4e0a\u7248\u672c\u3002' }),
            '\n',
            (0, i.jsx)(s.h3, { id: '\u4e0b\u8f7d\u548c\u90e8\u7f72', children: '\u4e0b\u8f7d\u548c\u90e8\u7f72' }),
            '\n',
            (0, i.jsxs)(s.ol, {
              children: [
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(s.p, {
                      children:
                        '\u5c06\u8981\u4e0b\u8f7d\u7684 Chaosd \u7248\u672c\u8bbe\u7f6e\u4e3a\u73af\u5883\u53d8\u91cf\uff0c\u4f8b\u5982 v1.0.0\uff1a',
                    }),
                    '\n',
                    (0, i.jsx)(s.pre, {
                      children: (0, i.jsx)(s.code, {
                        className: 'language-bash',
                        children: 'export CHAOSD_VERSION=v1.0.0\n',
                      }),
                    }),
                    '\n',
                    (0, i.jsxs)(s.p, {
                      children: [
                        '\u5982\u679c\u8981\u67e5\u770b\u6240\u6709\u5df2\u53d1\u5e03\u7684 Chaosd \u7248\u672c\uff0c\u8bf7\u53c2\u9605 ',
                        (0, i.jsx)(s.a, {
                          href: 'https://github.com/chaos-mesh/chaosd/releases',
                          children: 'releases',
                        }),
                        ' \u3002',
                      ],
                    }),
                    '\n',
                    (0, i.jsxs)(s.p, {
                      children: [
                        '\u5982\u679c\u8981\u4e0b\u8f7d\u6700\u65b0\u7684\u975e\u7a33\u5b9a\u7248\u672c\uff0c\u5219\u4f7f\u7528 ',
                        (0, i.jsx)(s.code, { children: 'latest' }),
                        '\uff1a',
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(s.pre, {
                      children: (0, i.jsx)(s.code, {
                        className: 'language-bash',
                        children: 'export CHAOSD_VERSION=latest\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(s.p, { children: '\u4e0b\u8f7d Chaosd\uff1a' }),
                    '\n',
                    (0, i.jsx)(s.pre, {
                      children: (0, i.jsx)(s.code, {
                        className: 'language-bash',
                        children:
                          'curl -fsSLO https://mirrors.chaos-mesh.org/chaosd-$CHAOSD_VERSION-linux-amd64.tar.gz\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(s.p, {
                      children:
                        '\u89e3\u538b Chaosd \u6587\u4ef6\u5e76\u8f6c\u79fb\u5230 /usr/local \u76ee\u5f55\u4e0b\uff1a',
                    }),
                    '\n',
                    (0, i.jsx)(s.pre, {
                      children: (0, i.jsx)(s.code, {
                        className: 'language-bash',
                        children:
                          'tar zxvf chaosd-$CHAOSD_VERSION-linux-amd64.tar.gz && sudo mv chaosd-$CHAOSD_VERSION-linux-amd64 /usr/local/\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(s.p, {
                      children: [
                        '\u5c06 Chaosd \u76ee\u5f55\u52a0\u5230\u73af\u5883\u53d8\u91cf ',
                        (0, i.jsx)(s.code, { children: 'PATH' }),
                        ' \u4e2d\uff1a',
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(s.pre, {
                      children: (0, i.jsx)(s.code, {
                        className: 'language-bash',
                        children: 'export PATH=/usr/local/chaosd-$CHAOSD_VERSION-linux-amd64:$PATH\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.h3, { id: '\u8fd0\u884c\u6a21\u5f0f', children: '\u8fd0\u884c\u6a21\u5f0f' }),
            '\n',
            (0, i.jsx)(s.p, {
              children: '\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6a21\u5f0f\u4f7f\u7528 Chaosd\uff1a',
            }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsx)(s.li, {
                  children:
                    '\u547d\u4ee4\u884c\u6a21\u5f0f\uff1a\u5c06 Chaosd \u4f5c\u4e3a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u76f4\u63a5\u8fd0\u884c\u5373\u53ef\u6ce8\u5165\u6545\u969c\u3001\u6062\u590d\u6545\u969c\u3002',
                }),
                '\n',
                (0, i.jsx)(s.li, {
                  children:
                    '\u670d\u52a1\u6a21\u5f0f\uff1a\u5c06 Chaosd \u4f5c\u4e3a\u670d\u52a1\u8fd0\u884c\u5728\u540e\u53f0\uff0c\u901a\u8fc7\u53d1\u9001 HTTP \u8bf7\u6c42\u6765\u6ce8\u5165\u6545\u969c\u3001\u6062\u590d\u6545\u969c\u3002',
                }),
                '\n',
              ],
            }),
          ],
        })
      }
      function t(e = {}) {
        const { wrapper: s } = { ...(0, c.R)(), ...e.components }
        return s ? (0, i.jsx)(s, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e)
      }
    },
    28453: (e, s, n) => {
      n.d(s, { R: () => d, x: () => h })
      var l = n(96540)
      const i = {},
        c = l.createContext(i)
      function d(e) {
        const s = l.useContext(c)
        return l.useMemo(
          function () {
            return 'function' == typeof e ? e(s) : { ...s, ...e }
          },
          [s, e]
        )
      }
      function h(e) {
        let s
        return (
          (s = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : d(e.components)),
          l.createElement(c.Provider, { value: s }, e.children)
        )
      }
    },
  },
])