'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [2411],
  {
    88551: (e, t, l) => {
      l.r(t),
        l.d(t, {
          assets: () => h,
          contentTitle: () => r,
          default: () => j,
          frontMatter: () => d,
          metadata: () => s,
          toc: () => x,
        })
      const s = JSON.parse(
        '{"type":"mdx","permalink":"/zh/supported-releases","source":"@site/i18n/zh/docusaurus-plugin-content-pages/supported-releases.md","title":"\u652f\u6301\u7684\u7248\u672c","description":"\u6b64\u9875\u9762\u5217\u51fa\u4e86\u5f53\u524d\u652f\u6301\u7684\u7248\u672c\u7684\u72b6\u6001\u3001\u65f6\u95f4\u8868\u548c\u7b56\u7565\u3002","frontMatter":{},"unlisted":false}'
      )
      var n = l(74848),
        i = l(28453)
      const d = {},
        r = '\u652f\u6301\u7684\u7248\u672c',
        h = {},
        x = [
          { value: 'TL;DR', id: 'tldr', level: 2 },
          { value: '\u547d\u540d\u65b9\u6848', id: '\u547d\u540d\u65b9\u6848', level: 2 },
          {
            value: 'Chaos Mesh \u7684\u652f\u6301\u72b6\u51b5',
            id: 'chaos-mesh-\u7684\u652f\u6301\u72b6\u51b5',
            level: 2,
          },
          { value: '\u672a\u6765\u7248\u672c', id: '\u672a\u6765\u7248\u672c', level: 2 },
          { value: '\u652f\u6301\u7b56\u7565', id: '\u652f\u6301\u7b56\u7565', level: 2 },
          { value: '\u793e\u533a\u6280\u672f\u652f\u6301', id: '\u793e\u533a\u6280\u672f\u652f\u6301', level: 3 },
          {
            value: '\u5b89\u5168\u548c\u9519\u8bef\u4fee\u590d',
            id: '\u5b89\u5168\u548c\u9519\u8bef\u4fee\u590d',
            level: 3,
          },
          {
            value: '\u6211\u4eec\u5982\u4f55\u786e\u5b9a\u652f\u6301\u7684 Kubernetes \u7248\u672c',
            id: '\u6211\u4eec\u5982\u4f55\u786e\u5b9a\u652f\u6301\u7684-kubernetes-\u7248\u672c',
            level: 2,
          },
        ]
      function c(e) {
        const t = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          header: 'header',
          li: 'li',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ul: 'ul',
          ...(0, i.R)(),
          ...e.components,
        }
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.header, {
              children: (0, n.jsx)(t.h1, {
                id: '\u652f\u6301\u7684\u7248\u672c',
                children: '\u652f\u6301\u7684\u7248\u672c',
              }),
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                '\u6b64\u9875\u9762\u5217\u51fa\u4e86\u5f53\u524d\u652f\u6301\u7684\u7248\u672c\u7684\u72b6\u6001\u3001\u65f6\u95f4\u8868\u548c\u7b56\u7565\u3002',
            }),
            '\n',
            (0, n.jsxs)(t.admonition, {
              type: 'info',
              children: [
                (0, n.jsx)(t.h2, { id: 'tldr', children: 'TL;DR' }),
                (0, n.jsxs)(t.p, {
                  children: [
                    '\u6bcf\u4e2a\u7248\u672c\u7684\u652f\u6301\u671f\u9650\u4e3a',
                    (0, n.jsx)(t.strong, { children: '\u516d\u4e2a\u6708' }),
                    '\uff0c\u6211\u4eec',
                    (0, n.jsx)(t.strong, { children: '\u6bcf\u4e09\u4e2a\u6708' }),
                    '\u53d1\u5e03\u4e00\u4e2a\u65b0\u7248\u672c\u3002',
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, { id: '\u547d\u540d\u65b9\u6848', children: '\u547d\u540d\u65b9\u6848' }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                '\u6211\u4eec\u7684\u547d\u540d\u65b9\u6848\u9075\u5faa ',
                (0, n.jsx)(t.a, {
                  href: 'https://semver.org/lang/zh-CN/',
                  children: '\u8bed\u4e49\u5316\u7248\u672c 2.0.0',
                }),
                ', \u5e76\u5728 git \u6807\u7b7e\u548c docker \u955c\u50cf\u4e2d\u52a0\u5165 ',
                (0, n.jsx)(t.code, { children: 'v' }),
                ' \u524d\u7f00:',
              ],
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, { className: 'language-plain', children: 'v<major>.<minor>.<patch>\n' }),
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                '\u5176\u4e2d ',
                (0, n.jsx)(t.code, { children: '<minor>' }),
                ' \u5728\u6bcf\u4e2a\u7248\u672c\u4e2d\u90fd\u4f1a\u589e\u52a0\uff0c ',
                (0, n.jsx)(t.code, { children: '<patch>' }),
                ' \u7edf\u8ba1\u5f53\u524d ',
                (0, n.jsx)(t.code, { children: '<minor>' }),
                ' \u7248\u672c\u7684\u8865\u4e01\u6570\u91cf\u3002\u4e00\u4e2a\u8865\u4e01\u901a\u5e38\u662f\u76f8\u5bf9\u4e8e ',
                (0, n.jsx)(t.code, { children: '<minor>' }),
                ' \u7248\u672c\u7684\u4e00\u4e2a\u5c0f\u6539\u52a8\u3002',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'chaos-mesh-\u7684\u652f\u6301\u72b6\u51b5',
              children: 'Chaos Mesh \u7684\u652f\u6301\u72b6\u51b5',
            }),
            '\n',
            (0, n.jsx)(t.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, n.jsxs)(t.p, {
                children: [
                  '\u5bf9 Kubernetes ',
                  (0, n.jsx)(t.code, { children: '1.22' }),
                  ' \u7684\u652f\u6301\u4ece ',
                  (0, n.jsx)(t.code, { children: '2.0.4' }),
                  ' \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\u3002',
                ],
              }),
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u7248\u672c' }),
                      (0, n.jsx)(t.th, {
                        style: { textAlign: 'left' },
                        children: '\u5f53\u524d\u652f\u6301\u60c5\u51b5',
                      }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u53d1\u5e03\u65e5\u671f' }),
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u7ec8\u6b62\u65e5\u671f' }),
                      (0, n.jsx)(t.th, {
                        style: { textAlign: 'left' },
                        children: '\u652f\u6301\u7684 Kubernetes \u7248\u672c',
                      }),
                    ],
                  }),
                }),
                (0, n.jsxs)(t.tbody, {
                  children: [
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'master' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'No, development only' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '-' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '-' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '1.20, 1.21, 1.22, 1.23, 1.24, 1.25',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '2.5 \xa0 \xa0' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            (0, n.jsx)(t.code, { children: 'Yes' }),
                            ' \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0',
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Nov 22, 2022' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '- \xa0 \xa0 \xa0 \xa0 \xa0' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '1.20, 1.21, 1.22, 1.23, 1.24, 1.25',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '2.4 \xa0 \xa0' }),
                        (0, n.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            (0, n.jsx)(t.code, { children: 'Yes' }),
                            ' \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0',
                          ],
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Sep 23, 2022' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '- \xa0 \xa0 \xa0 \xa0 \xa0' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '1.20, 1.21, 1.22, 1.23, 1.24, 1.25',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '2.3' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, n.jsx)(t.code, { children: 'Yes' }),
                        }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Jul 29, 2022' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '-' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '2.2' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'No' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Apr 29, 2022' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Sep 23, 2022' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '2.1' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'No' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Nov 30, 2021' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Jul 29, 2022' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '2.0' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'No' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Jul 23, 2021' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Apr 29, 2022' }),
                        (0, n.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: '1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '1.2' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'No' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Apr 23, 2021' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Nov 30, 2021' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '1.12, 1.13, 1.14, 1.15' }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '1.1' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'No' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Jan 08, 2021' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Jul 23, 2021' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '1.12, 1.13, 1.14, 1.15' }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '1.0' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'No' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Sep 25, 2020' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Apr 23, 2021' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '1.12, 1.13, 1.14, 1.15' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, { id: '\u672a\u6765\u7248\u672c', children: '\u672a\u6765\u7248\u672c' }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                '\u4f60\u53ef\u4ee5\u5728 ',
                (0, n.jsx)(t.a, {
                  href: 'https://github.com/chaos-mesh/chaos-mesh/milestones',
                  children: 'GitHub Milestones',
                }),
                ' \u4e0a\u67e5\u770b\u5373\u5c06\u53d1\u5e03\u7684 Chaos Mesh \u65b0\u7248\u672c\u3002',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, { id: '\u652f\u6301\u7b56\u7565', children: '\u652f\u6301\u7b56\u7565' }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                '\u6211\u4eec\u5bf9\u6bcf\u4e2a\u53d1\u5e03\u5206\u652f\u7684\u652f\u6301\u7a97\u53e3\u662f',
                (0, n.jsx)(t.strong, { children: '\u516d\u4e2a\u6708' }),
                '\u3002\u9274\u4e8e\u6211\u4eec',
                (0, n.jsx)(t.strong, { children: '\u6bcf\u4e09\u4e2a\u6708' }),
                '\u5c31\u4f1a\u53d1\u5e03\u4e00\u4e2a\u65b0\u7684\u7248\u672c\uff0c\u8be5\u652f\u6301\u7a97\u53e3\u4e0e',
                (0, n.jsx)(t.strong, { children: '\u6700\u65b0\u7684\u4e24\u4e2a\u7248\u672c' }),
                '\u76f8\u5bf9\u5e94\u3002',
              ],
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                '\u76ee\u524d\uff0cChaos Mesh \u56e2\u961f\u63d0\u4f9b\u4ee5\u4e0b\u4e24\u79cd\u7c7b\u578b\u7684\u652f\u6301\uff1a',
            }),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsx)(t.li, {
                  children: (0, n.jsx)(t.a, {
                    href: '#%E7%A4%BE%E5%8C%BA%E6%8A%80%E6%9C%AF%E6%94%AF%E6%8C%81',
                    children: '\u793e\u533a\u6280\u672f\u652f\u6301',
                  }),
                }),
                '\n',
                (0, n.jsx)(t.li, {
                  children: (0, n.jsx)(t.a, {
                    href: '#%E5%AE%89%E5%85%A8%E5%92%8C%E9%94%99%E8%AF%AF%E4%BF%AE%E5%A4%8D',
                    children: '\u5b89\u5168\u548c\u9519\u8bef\u4fee\u590d',
                  }),
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: '\u793e\u533a\u6280\u672f\u652f\u6301',
              children: '\u793e\u533a\u6280\u672f\u652f\u6301',
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                '\u5982\u679c\u5728\u4f7f\u7528 Chaos Mesh \u4e2d\u9047\u5230\u4e86\u95ee\u9898\uff0c\u6b22\u8fce\u5728 CNCF Slack\uff08\u9891\u9053 ',
                (0, n.jsx)(t.a, {
                  href: 'https://cloud-native.slack.com/archives/C0193VAV272',
                  children: '#project-chaos-mesh',
                }),
                '\uff09\u5411\u793e\u533a\u63d0\u95ee\uff0c\u6216\u5728 ',
                (0, n.jsx)(t.a, {
                  href: 'https://github.com/chaos-mesh/chaos-mesh/discussions',
                  children: 'GitHub Discussions',
                }),
                ' \u5f00\u542f\u4e00\u4e2a\u8ba8\u8bba\u3002',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: '\u5b89\u5168\u548c\u9519\u8bef\u4fee\u590d',
              children: '\u5b89\u5168\u548c\u9519\u8bef\u4fee\u590d',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                '\u5b89\u5168\u95ee\u9898\u4f1a\u5c3d\u5feb\u4fee\u590d\u3002\u5b83\u4eec\u4f1a\u88ab\u4fee\u590d\u5230\u6700\u540e\u4e24\u4e2a\u7248\u672c\uff0c\u5e76\u4f1a\u7acb\u5373\u4e3a\u5b83\u4eec\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8865\u4e01\u7248\u672c\u3002',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                '\u5bf9\u4e8e\u589e\u5f3a\u529f\u80fd\u6216\u9519\u8bef\u4fee\u590d\uff0c\u6211\u4eec\u4f1a\u6839\u636e\u9700\u8981\u5236\u4f5c\u65b0\u7684\u8865\u4e01\u7248\u672c\u3002',
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: '\u6211\u4eec\u5982\u4f55\u786e\u5b9a\u652f\u6301\u7684-kubernetes-\u7248\u672c',
              children: '\u6211\u4eec\u5982\u4f55\u786e\u5b9a\u652f\u6301\u7684 Kubernetes \u7248\u672c',
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'Chaos Mesh \u56e2\u961f\u4f1a\u901a\u8fc7 E2E \u6d4b\u8bd5\u5bf9\u4e0d\u540c\u7248\u672c\u7684 Kubernetes \u96c6\u7fa4\u7684\u517c\u5bb9\u6027\u8fdb\u884c\u6d4b\u8bd5\uff0c\u6700\u540e\u6839\u636e\u6d4b\u8bd5\u7ed3\u679c\u6765\u786e\u5b9a ',
                (0, n.jsx)(t.a, {
                  href: '#chaos-mesh-%E7%9A%84%E6%94%AF%E6%8C%81%E7%8A%B6%E5%86%B5',
                  children: 'Chaos Mesh \u7684\u652f\u6301\u72b6\u51b5',
                }),
                '\u3002',
              ],
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                '\u4ee5\u4e0b\u662f\u5404\u7248\u672c E2E \u6d4b\u8bd5\u6240\u6db5\u76d6\u7684 Kubernetes \u7248\u672c\uff1a',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { style: { textAlign: 'left' }, children: '\u7248\u672c' }),
                      (0, n.jsx)(t.th, {
                        style: { textAlign: 'left' },
                        children: '\u6d4b\u8bd5\u7684 Kubernetes \u7248\u672c',
                      }),
                    ],
                  }),
                }),
                (0, n.jsxs)(t.tbody, {
                  children: [
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: 'master' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '1.20, 1.23, 1.25' }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '2.5' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '1.20, 1.23, 1.25' }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '2.4' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '1.20, 1.23, 1.25' }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '2.3' }),
                        (0, n.jsx)(t.td, { style: { textAlign: 'left' }, children: '1.15, 1.20, 1.23' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
      function j(e = {}) {
        const { wrapper: t } = { ...(0, i.R)(), ...e.components }
        return t ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(c, { ...e }) }) : c(e)
      }
    },
    28453: (e, t, l) => {
      l.d(t, { R: () => d, x: () => r })
      var s = l(96540)
      const n = {},
        i = s.createContext(n)
      function d(e) {
        const t = s.useContext(i)
        return s.useMemo(
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
              ? e.components(n)
              : e.components || n
            : d(e.components)),
          s.createElement(i.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
