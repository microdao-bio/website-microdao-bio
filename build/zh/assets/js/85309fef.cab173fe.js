'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [351],
  {
    81852: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => l,
          contentTitle: () => r,
          default: () => a,
          frontMatter: () => c,
          metadata: () => d,
          toc: () => h,
        })
      const d = JSON.parse(
        '{"id":"simulate-time-chaos-on-kubernetes","title":"\u6a21\u62df\u65f6\u95f4\u6545\u969c","description":"TimeChaos \u4ecb\u7ecd","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.2/simulate-time-chaos-on-kubernetes.md","sourceDirName":".","slug":"/simulate-time-chaos-on-kubernetes","permalink":"/zh/docs/simulate-time-chaos-on-kubernetes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.6.2/simulate-time-chaos-on-kubernetes.md","tags":[],"version":"2.6.2","frontMatter":{"title":"\u6a21\u62df\u65f6\u95f4\u6545\u969c"},"sidebar":"docs","previous":{"title":"\u6a21\u62df DNS \u6545\u969c","permalink":"/zh/docs/simulate-dns-chaos-on-kubernetes"},"next":{"title":"\u6a21\u62df JVM \u5e94\u7528\u6545\u969c","permalink":"/zh/docs/simulate-jvm-application-chaos"}}'
      )
      var i = n(74848),
        t = n(28453)
      const c = { title: '\u6a21\u62df\u65f6\u95f4\u6545\u969c' },
        r = void 0,
        l = {},
        h = [
          { value: 'TimeChaos \u4ecb\u7ecd', id: 'timechaos-\u4ecb\u7ecd', level: 2 },
          {
            value: '\u4f7f\u7528 Chaos Dashboard \u521b\u5efa\u5b9e\u9a8c',
            id: '\u4f7f\u7528-chaos-dashboard-\u521b\u5efa\u5b9e\u9a8c',
            level: 2,
          },
          {
            value: '\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            id: '\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            level: 2,
          },
        ]
      function o(e) {
        const s = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          img: 'img',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ...(0, t.R)(),
          ...e.components,
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(s.h2, { id: 'timechaos-\u4ecb\u7ecd', children: 'TimeChaos \u4ecb\u7ecd' }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'Chaos Mesh \u63d0\u4f9b\u7684 TimeChaos \u5b9e\u9a8c\u7c7b\u578b\u53ef\u7528\u4e8e\u6a21\u62df\u65f6\u95f4\u504f\u79fb\u7684\u573a\u666f\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u521b\u5efa TimeChaos \u5b9e\u9a8c\u4ee5\u53ca\u76f8\u5173\u7684\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e\u3002',
            }),
            '\n',
            (0, i.jsx)(s.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, i.jsxs)(s.p, {
                children: [
                  'TimeChaos \u53ea\u5f71\u54cd\u5bb9\u5668\u4e2d PID \u547d\u540d\u7a7a\u95f4\u7684 PID ',
                  (0, i.jsx)(s.code, { children: '1' }),
                  ' \u8fdb\u7a0b\uff0c\u4ee5\u53ca PID ',
                  (0, i.jsx)(s.code, { children: '1' }),
                  ' \u7684\u5b50\u8fdb\u7a0b\u3002\u4f8b\u5982\uff0c\u901a\u8fc7',
                  (0, i.jsx)(s.code, { children: 'kubectl exec' }),
                  ' \u542f\u52a8\u7684\u8fdb\u7a0b\u4e0d\u4f1a\u88ab\u5f71\u54cd\u3002',
                ],
              }),
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                '\u4f60\u53ef\u4ee5\u5728 Chaos Dashboard \u4e2d\u521b\u5efa\u5b9e\u9a8c\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 YAML \u914d\u7f6e\u6587\u4ef6\u7684\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c\u3002',
            }),
            '\n',
            (0, i.jsx)(s.h2, {
              id: '\u4f7f\u7528-chaos-dashboard-\u521b\u5efa\u5b9e\u9a8c',
              children: '\u4f7f\u7528 Chaos Dashboard \u521b\u5efa\u5b9e\u9a8c',
            }),
            '\n',
            (0, i.jsxs)(s.ol, {
              children: [
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(s.p, {
                      children: [
                        '\u6253\u5f00 Chaos Dashboard \u9762\u677f\uff0c\u5355\u51fb\u5b9e\u9a8c\u9875\u9762\u4e2d\u201c',
                        (0, i.jsx)(s.strong, { children: '\u65b0\u7684\u5b9e\u9a8c' }),
                        '\u201d\u6309\u94ae\u521b\u5efa\u5b9e\u9a8c\uff1a',
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(s.p, {
                      children: (0, i.jsx)(s.img, {
                        alt: '\u521b\u5efa\u5b9e\u9a8c',
                        src: n(58043).A + '',
                        width: '982',
                        height: '648',
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
                        '\u5728\u201c',
                        (0, i.jsx)(s.strong, { children: '\u9009\u62e9\u76ee\u6807' }),
                        '\u201d\u533a\u57df\u9009\u62e9\u201c',
                        (0, i.jsx)(s.strong, { children: '\u65f6\u949f\u504f\u79fb' }),
                        '\u201d\uff0c\u7136\u540e\u586b\u5199\u9009\u5b9a\u7684\u65f6\u949f\u548c\u504f\u79fb\u91cf\u3002',
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(s.p, {
                      children: (0, i.jsx)(s.img, {
                        alt: 'TimeChaos \u5b9e\u9a8c',
                        src: n(67377).A + '',
                        width: '1478',
                        height: '696',
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
                        '\u586b\u5199\u5b9e\u9a8c\u4fe1\u606f\uff0c\u6307\u5b9a\u5b9e\u9a8c\u8303\u56f4\u4ee5\u53ca\u8ba1\u5212\u7684\u5b9e\u9a8c\u8fd0\u884c\u65f6\u95f4\uff1a',
                    }),
                    '\n',
                    (0, i.jsx)(s.p, {
                      children: (0, i.jsx)(s.img, {
                        alt: '\u5b9e\u9a8c\u4fe1\u606f',
                        src: n(20142).A + '',
                        width: '1838',
                        height: '1328',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(s.li, {
                  children: ['\n', (0, i.jsx)(s.p, { children: '\u63d0\u4ea4\u5b9e\u9a8c\u3002' }), '\n'],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.h2, {
              id: '\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
              children: '\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            }),
            '\n',
            (0, i.jsxs)(s.ol, {
              children: [
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(s.p, {
                      children: [
                        '\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230 YAML \u914d\u7f6e\u6587\u4ef6\u4e2d\u3002\u672c\u6587\u6863\u4ee5 ',
                        (0, i.jsx)(s.code, { children: 'time-shift.yaml' }),
                        ' \u6587\u4ef6\u4e3a\u4f8b\uff0c\u5185\u5bb9\u5982\u4e0b\u6240\u793a\uff1a',
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(s.pre, {
                      children: (0, i.jsx)(s.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: TimeChaos\nmetadata:\n  name: time-shift-example\n  namespace: chaos-mesh\nspec:\n  mode: one\n  selector:\n    labelSelectors:\n      'app': 'app1'\n  timeOffset: '-10m100ns'\n",
                      }),
                    }),
                    '\n',
                    (0, i.jsx)(s.p, {
                      children:
                        '\u8be5\u5b9e\u9a8c\u914d\u7f6e\u4f1a\u4f7f\u6307\u5b9a Pod \u4e2d\u8fdb\u7a0b\u7684\u65f6\u95f4\u5411\u524d\u504f\u79fb 10 \u5206\u949f 100 \u7eb3\u79d2\u3002',
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
                        '\u51c6\u5907\u597d\u914d\u7f6e\u6587\u4ef6\u540e\uff0c\u4f7f\u7528 ',
                        (0, i.jsx)(s.code, { children: 'kubectl' }),
                        ' \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a',
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(s.pre, {
                      children: (0, i.jsx)(s.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f time-shift.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                '\u4ee5\u4e0a YAML \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u5b57\u6bb5\u8bf4\u660e\u5982\u4e0b\uff1a',
            }),
            '\n',
            (0, i.jsxs)(s.table, {
              children: [
                (0, i.jsx)(s.thead, {
                  children: (0, i.jsxs)(s.tr, {
                    children: [
                      (0, i.jsx)(s.th, { children: '\u53c2\u6570' }),
                      (0, i.jsx)(s.th, { children: '\u7c7b\u578b' }),
                      (0, i.jsx)(s.th, { children: '\u8bf4\u660e' }),
                      (0, i.jsx)(s.th, { children: '\u9ed8\u8ba4\u503c' }),
                      (0, i.jsx)(s.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                      (0, i.jsx)(s.th, { children: '\u793a\u4f8b' }),
                    ],
                  }),
                }),
                (0, i.jsxs)(s.tbody, {
                  children: [
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'timeOffset' }),
                        (0, i.jsx)(s.td, { children: 'string' }),
                        (0, i.jsx)(s.td, { children: '\u6307\u5b9a\u65f6\u95f4\u504f\u79fb\u7684\u957f\u5ea6' }),
                        (0, i.jsx)(s.td, { children: '\u65e0' }),
                        (0, i.jsx)(s.td, { children: '\u662f' }),
                        (0, i.jsx)(s.td, { children: (0, i.jsx)(s.code, { children: '-5m' }) }),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'clockIds' }),
                        (0, i.jsx)(s.td, { children: '[]string' }),
                        (0, i.jsxs)(s.td, {
                          children: [
                            '\u6307\u5b9a\u65f6\u95f4\u504f\u79fb\u4f5c\u7528\u7684\u65f6\u949f\uff0c\u8be6\u89c1 ',
                            (0, i.jsxs)(s.a, {
                              href: 'https://man7.org/linux/man-pages/man2/clock_gettime.2.html',
                              children: [(0, i.jsx)(s.code, { children: 'clock_gettime' }), ' \u6587\u6863'],
                            }),
                          ],
                        }),
                        (0, i.jsx)(s.td, { children: (0, i.jsx)(s.code, { children: '["CLOCK_REALTIME"]' }) }),
                        (0, i.jsx)(s.td, { children: '\u5426' }),
                        (0, i.jsx)(s.td, {
                          children: (0, i.jsx)(s.code, { children: '["CLOCK_REALTIME","CLOCK_MONOTONIC"]' }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'mode' }),
                        (0, i.jsx)(s.td, { children: 'string' }),
                        (0, i.jsxs)(s.td, {
                          children: [
                            '\u6307\u5b9a\u5b9e\u9a8c\u7684\u8fd0\u884c\u65b9\u5f0f\uff0c\u53ef\u9009\u62e9\u7684\u65b9\u5f0f\u5305\u62ec\uff1a',
                            (0, i.jsx)(s.code, { children: 'one' }),
                            '\uff08\u8868\u793a\u968f\u673a\u9009\u51fa\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001',
                            (0, i.jsx)(s.code, { children: 'all' }),
                            '\uff08\u8868\u793a\u9009\u51fa\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001',
                            (0, i.jsx)(s.code, { children: 'fixed' }),
                            '\uff08\u8868\u793a\u9009\u51fa\u6307\u5b9a\u6570\u91cf\u4e14\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001',
                            (0, i.jsx)(s.code, { children: 'fixed-percent' }),
                            '\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09\u3001',
                            (0, i.jsx)(s.code, { children: 'random-max-percent' }),
                            '\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u4e0d\u8d85\u8fc7\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09',
                          ],
                        }),
                        (0, i.jsx)(s.td, { children: '\u65e0' }),
                        (0, i.jsx)(s.td, { children: '\u662f' }),
                        (0, i.jsx)(s.td, { children: (0, i.jsx)(s.code, { children: 'one' }) }),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'value' }),
                        (0, i.jsx)(s.td, { children: 'string' }),
                        (0, i.jsxs)(s.td, {
                          children: [
                            '\u53d6\u51b3\u4e8e ',
                            (0, i.jsx)(s.code, { children: 'mode' }),
                            ' \u7684\u914d\u7f6e\uff0c\u4e3a ',
                            (0, i.jsx)(s.code, { children: 'mode' }),
                            ' \u63d0\u4f9b\u5bf9\u5e94\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u5f53\u4f60\u5c06 ',
                            (0, i.jsx)(s.code, { children: 'mode' }),
                            ' \u914d\u7f6e\u4e3a ',
                            (0, i.jsx)(s.code, { children: 'fixed-percent' }),
                            ' \u65f6\uff0c',
                            (0, i.jsx)(s.code, { children: 'value' }),
                            ' \u7528\u4e8e\u6307\u5b9a Pod \u7684\u767e\u5206\u6bd4',
                          ],
                        }),
                        (0, i.jsx)(s.td, { children: '\u65e0' }),
                        (0, i.jsx)(s.td, { children: '\u5426' }),
                        (0, i.jsx)(s.td, { children: '1' }),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'containerNames' }),
                        (0, i.jsx)(s.td, { children: '[]string' }),
                        (0, i.jsx)(s.td, { children: '\u6307\u5b9a\u6ce8\u5165\u7684\u5bb9\u5668\u540d\u79f0' }),
                        (0, i.jsx)(s.td, { children: '\u65e0' }),
                        (0, i.jsx)(s.td, { children: '\u5426' }),
                        (0, i.jsx)(s.td, { children: (0, i.jsx)(s.code, { children: '["nginx"]' }) }),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'selector' }),
                        (0, i.jsx)(s.td, { children: 'struct' }),
                        (0, i.jsxs)(s.td, {
                          children: [
                            '\u6307\u5b9a\u6ce8\u5165\u6545\u969c\u7684\u76ee\u6807 Pod\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003',
                            (0, i.jsx)(s.a, {
                              href: '/zh/docs/define-chaos-experiment-scope',
                              children: '\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4',
                            }),
                          ],
                        }),
                        (0, i.jsx)(s.td, { children: '\u65e0' }),
                        (0, i.jsx)(s.td, { children: '\u662f' }),
                        (0, i.jsx)(s.td, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
      function a(e = {}) {
        const { wrapper: s } = { ...(0, t.R)(), ...e.components }
        return s ? (0, i.jsx)(s, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e)
      }
    },
    58043: (e, s, n) => {
      n.d(s, { A: () => d })
      const d = n.p + 'assets/images/create-new-exp-4754c4846da07a385e3dd612b828aeae.png'
    },
    20142: (e, s, n) => {
      n.d(s, { A: () => d })
      const d = n.p + 'assets/images/exp-info-a276a95f6e75f6d8346b661d07fe6b44.png'
    },
    67377: (e, s, n) => {
      n.d(s, { A: () => d })
      const d = n.p + 'assets/images/timechaos-exp-a6beb918302a9a9eded1c085db18d534.png'
    },
    28453: (e, s, n) => {
      n.d(s, { R: () => c, x: () => r })
      var d = n(96540)
      const i = {},
        t = d.createContext(i)
      function c(e) {
        const s = d.useContext(t)
        return d.useMemo(
          function () {
            return 'function' == typeof e ? e(s) : { ...s, ...e }
          },
          [s, e]
        )
      }
      function r(e) {
        let s
        return (
          (s = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : c(e.components)),
          d.createElement(t.Provider, { value: s }, e.children)
        )
      }
    },
  },
])
