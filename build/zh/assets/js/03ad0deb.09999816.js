'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [8930],
  {
    86329: (s, e, d) => {
      d.r(e),
        d.d(e, {
          assets: () => c,
          contentTitle: () => i,
          default: () => o,
          frontMatter: () => h,
          metadata: () => r,
          toc: () => l,
        })
      const r = JSON.parse(
        '{"id":"simulate-heavy-stress-on-kubernetes","title":"\u6a21\u62df\u538b\u529b\u573a\u666f","description":"StressChaos \u4ecb\u7ecd","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/simulate-heavy-stress-on-kubernetes.md","sourceDirName":".","slug":"/simulate-heavy-stress-on-kubernetes","permalink":"/zh/docs/2.5.2/simulate-heavy-stress-on-kubernetes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.5.2/simulate-heavy-stress-on-kubernetes.md","tags":[],"version":"2.5.2","frontMatter":{"title":"\u6a21\u62df\u538b\u529b\u573a\u666f"},"sidebar":"docs","previous":{"title":"\u6a21\u62df\u7f51\u7edc\u6545\u969c","permalink":"/zh/docs/2.5.2/simulate-network-chaos-on-kubernetes"},"next":{"title":"\u6a21\u62df\u6587\u4ef6 I/O \u6545\u969c","permalink":"/zh/docs/2.5.2/simulate-io-chaos-on-kubernetes"}}'
      )
      var n = d(74848),
        t = d(28453)
      const h = { title: '\u6a21\u62df\u538b\u529b\u573a\u666f' },
        i = void 0,
        c = {},
        l = [
          { value: 'StressChaos \u4ecb\u7ecd', id: 'stresschaos-\u4ecb\u7ecd', level: 2 },
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
          { value: '\u5b57\u6bb5\u8bf4\u660e', id: '\u5b57\u6bb5\u8bf4\u660e', level: 3 },
          { value: 'Stressors', id: 'stressors', level: 4 },
          { value: 'MemoryStressor', id: 'memorystressor', level: 5 },
          { value: 'CPUStressor', id: 'cpustressor', level: 5 },
        ]
      function x(s) {
        const e = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
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
          ...s.components,
        }
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(e.h2, { id: 'stresschaos-\u4ecb\u7ecd', children: 'StressChaos \u4ecb\u7ecd' }),
            '\n',
            (0, n.jsx)(e.p, {
              children:
                'Chaos Mesh \u63d0\u4f9b\u7684 StressChaos \u5b9e\u9a8c\u7c7b\u578b\u53ef\u7528\u4e8e\u6a21\u62df\u5bb9\u5668\u5185\u538b\u529b\u7684\u573a\u666f\u3002\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u521b\u5efa StressChaos \u5b9e\u9a8c\u4ee5\u53ca\u76f8\u5173\u7684\u914d\u7f6e\u6587\u4ef6\u8bf4\u660e\u3002',
            }),
            '\n',
            (0, n.jsx)(e.p, {
              children:
                '\u4f60\u53ef\u4ee5\u5728 Chaos Dashboard \u4e2d\u521b\u5efa\u5b9e\u9a8c\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 YAML \u914d\u7f6e\u6587\u4ef6\u7684\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c\u3002',
            }),
            '\n',
            (0, n.jsx)(e.h2, {
              id: '\u4f7f\u7528-chaos-dashboard-\u521b\u5efa\u5b9e\u9a8c',
              children: '\u4f7f\u7528 Chaos Dashboard \u521b\u5efa\u5b9e\u9a8c',
            }),
            '\n',
            (0, n.jsxs)(e.ol, {
              children: [
                '\n',
                (0, n.jsxs)(e.li, {
                  children: [
                    '\n',
                    (0, n.jsxs)(e.p, {
                      children: [
                        '\u6253\u5f00 Chaos Dashboard \u9762\u677f\uff0c\u5355\u51fb\u5b9e\u9a8c\u9875\u9762\u4e2d\u201c',
                        (0, n.jsx)(e.strong, { children: '\u65b0\u7684\u5b9e\u9a8c' }),
                        '\u201d\u6309\u94ae\u521b\u5efa\u5b9e\u9a8c\uff1a',
                      ],
                    }),
                    '\n',
                    (0, n.jsx)(e.p, {
                      children: (0, n.jsx)(e.img, {
                        alt: '\u521b\u5efa\u5b9e\u9a8c',
                        src: d(35498).A + '',
                        width: '982',
                        height: '648',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(e.li, {
                  children: [
                    '\n',
                    (0, n.jsxs)(e.p, {
                      children: [
                        '\u5728\u201c',
                        (0, n.jsx)(e.strong, { children: '\u9009\u62e9\u76ee\u6807' }),
                        '\u201d\u533a\u57df\u9009\u62e9\u201c',
                        (0, n.jsx)(e.strong, { children: '\u538b\u529b\u6d4b\u8bd5' }),
                        '\u201d\uff0c\u7136\u540e\u586b\u5199\u5b9e\u9a8c\u5185\u5bb9\uff0c\u914d\u7f6e\u5b57\u6bb5\u8be6\u89c1',
                        (0, n.jsx)(e.a, {
                          href: '#%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E',
                          children: '\u914d\u7f6e\u8bf4\u660e',
                        }),
                        '\u4e2d\u7684\u4ecb\u7ecd\u3002',
                      ],
                    }),
                    '\n',
                    (0, n.jsx)(e.p, {
                      children: (0, n.jsx)(e.img, {
                        alt: 'StressChaos \u5b9e\u9a8c',
                        src: d(46027).A + '',
                        width: '1486',
                        height: '1110',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(e.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(e.p, {
                      children:
                        '\u586b\u5199\u5b9e\u9a8c\u4fe1\u606f\uff0c\u6307\u5b9a\u5b9e\u9a8c\u8303\u56f4\u4ee5\u53ca\u8ba1\u5212\u7684\u5b9e\u9a8c\u8fd0\u884c\u65f6\u95f4\uff1a',
                    }),
                    '\n',
                    (0, n.jsx)(e.p, {
                      children: (0, n.jsx)(e.img, {
                        alt: '\u5b9e\u9a8c\u4fe1\u606f',
                        src: d(63179).A + '',
                        width: '1838',
                        height: '1328',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(e.li, {
                  children: ['\n', (0, n.jsx)(e.p, { children: '\u63d0\u4ea4\u5b9e\u9a8c\u3002' }), '\n'],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(e.h2, {
              id: '\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
              children: '\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            }),
            '\n',
            (0, n.jsxs)(e.ol, {
              children: [
                '\n',
                (0, n.jsxs)(e.li, {
                  children: [
                    '\n',
                    (0, n.jsxs)(e.p, {
                      children: [
                        '\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230 YAML \u914d\u7f6e\u6587\u4ef6\u4e2d\u3002\u672c\u6587\u6863\u4ee5 ',
                        (0, n.jsx)(e.code, { children: 'memory-stress.yaml' }),
                        ' \u6587\u4ef6\u4e3a\u4f8b\uff0c\u5185\u5bb9\u5982\u4e0b\u6240\u793a\uff1a',
                      ],
                    }),
                    '\n',
                    (0, n.jsx)(e.pre, {
                      children: (0, n.jsx)(e.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: StressChaos\nmetadata:\n  name: memory-stress-example\n  namespace: chaos-mesh\nspec:\n  mode: one\n  selector:\n    labelSelectors:\n      'app': 'app1'\n  stressors:\n    memory:\n      workers: 4\n      size: '256MB'\n",
                      }),
                    }),
                    '\n',
                    (0, n.jsx)(e.p, {
                      children:
                        '\u8be5\u5b9e\u9a8c\u914d\u7f6e\u4f1a\u5728\u9009\u4e2d\u5bb9\u5668\u4e2d\u521b\u5efa\u8fdb\u7a0b\uff0c\u4e0d\u65ad\u5206\u914d\u548c\u5728\u5185\u5b58\u4e2d\u8fdb\u884c\u8bfb\u5199\uff0c\u6700\u591a\u5360\u7528 256MB \u5185\u5b58\u3002',
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(e.li, {
                  children: [
                    '\n',
                    (0, n.jsxs)(e.p, {
                      children: [
                        '\u51c6\u5907\u597d\u914d\u7f6e\u6587\u4ef6\u540e\uff0c\u4f7f\u7528 ',
                        (0, n.jsx)(e.code, { children: 'kubectl' }),
                        ' \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a',
                      ],
                    }),
                    '\n',
                    (0, n.jsx)(e.pre, {
                      children: (0, n.jsx)(e.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f memory-stress.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(e.h3, { id: '\u5b57\u6bb5\u8bf4\u660e', children: '\u5b57\u6bb5\u8bf4\u660e' }),
            '\n',
            (0, n.jsx)(e.p, {
              children:
                '\u4ee5\u4e0a YAML \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u5b57\u6bb5\u8bf4\u660e\u5982\u4e0b\uff1a',
            }),
            '\n',
            (0, n.jsxs)(e.table, {
              children: [
                (0, n.jsx)(e.thead, {
                  children: (0, n.jsxs)(e.tr, {
                    children: [
                      (0, n.jsx)(e.th, { children: '\u53c2\u6570' }),
                      (0, n.jsx)(e.th, { children: '\u7c7b\u578b' }),
                      (0, n.jsx)(e.th, { children: '\u8bf4\u660e' }),
                      (0, n.jsx)(e.th, { children: '\u9ed8\u8ba4\u503c' }),
                      (0, n.jsx)(e.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                      (0, n.jsx)(e.th, { children: '\u793a\u4f8b' }),
                    ],
                  }),
                }),
                (0, n.jsxs)(e.tbody, {
                  children: [
                    (0, n.jsxs)(e.tr, {
                      children: [
                        (0, n.jsx)(e.td, { children: 'duration' }),
                        (0, n.jsx)(e.td, { children: 'string' }),
                        (0, n.jsx)(e.td, {
                          children: '\u6307\u5b9a\u5177\u4f53\u5b9e\u9a8c\u7684\u6301\u7eed\u65f6\u95f4',
                        }),
                        (0, n.jsx)(e.td, { children: '\u65e0' }),
                        (0, n.jsx)(e.td, { children: '\u662f' }),
                        (0, n.jsx)(e.td, { children: (0, n.jsx)(e.code, { children: '30s' }) }),
                      ],
                    }),
                    (0, n.jsxs)(e.tr, {
                      children: [
                        (0, n.jsx)(e.td, { children: 'stressors' }),
                        (0, n.jsx)(e.td, { children: (0, n.jsx)(e.a, { href: '#stressors', children: 'Stressors' }) }),
                        (0, n.jsx)(e.td, {
                          children: '\u6307\u5b9a CPU \u6216\u5185\u5b58\u538b\u529b\u7684\u53c2\u6570',
                        }),
                        (0, n.jsx)(e.td, { children: '\u65e0' }),
                        (0, n.jsx)(e.td, { children: '\u5426' }),
                        (0, n.jsx)(e.td, {}),
                      ],
                    }),
                    (0, n.jsxs)(e.tr, {
                      children: [
                        (0, n.jsx)(e.td, { children: 'stressngStressors' }),
                        (0, n.jsx)(e.td, { children: 'string' }),
                        (0, n.jsx)(e.td, {
                          children:
                            '\u6307\u5b9a stress-ng \u7684\u53c2\u6570\u6765\u8fbe\u5230\u66f4\u4e30\u5bcc\u7684\u538b\u529b\u6ce8\u5165',
                        }),
                        (0, n.jsx)(e.td, { children: '\u65e0' }),
                        (0, n.jsx)(e.td, { children: '\u5426' }),
                        (0, n.jsx)(e.td, { children: (0, n.jsx)(e.code, { children: '--clone 2' }) }),
                      ],
                    }),
                    (0, n.jsxs)(e.tr, {
                      children: [
                        (0, n.jsx)(e.td, { children: 'mode' }),
                        (0, n.jsx)(e.td, { children: 'string' }),
                        (0, n.jsxs)(e.td, {
                          children: [
                            '\u6307\u5b9a\u5b9e\u9a8c\u7684\u8fd0\u884c\u65b9\u5f0f\uff0c\u53ef\u9009\u62e9\u7684\u65b9\u5f0f\u5305\u62ec\uff1a',
                            (0, n.jsx)(e.code, { children: 'one' }),
                            '\uff08\u8868\u793a\u968f\u673a\u9009\u51fa\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001',
                            (0, n.jsx)(e.code, { children: 'all' }),
                            '\uff08\u8868\u793a\u9009\u51fa\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001',
                            (0, n.jsx)(e.code, { children: 'fixed' }),
                            '\uff08\u8868\u793a\u9009\u51fa\u6307\u5b9a\u6570\u91cf\u4e14\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001',
                            (0, n.jsx)(e.code, { children: 'fixed-percent' }),
                            '\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09\u3001',
                            (0, n.jsx)(e.code, { children: 'random-max-percent' }),
                            '\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u4e0d\u8d85\u8fc7\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09',
                          ],
                        }),
                        (0, n.jsx)(e.td, { children: '\u65e0' }),
                        (0, n.jsx)(e.td, { children: '\u662f' }),
                        (0, n.jsx)(e.td, { children: (0, n.jsx)(e.code, { children: 'one' }) }),
                      ],
                    }),
                    (0, n.jsxs)(e.tr, {
                      children: [
                        (0, n.jsx)(e.td, { children: 'value' }),
                        (0, n.jsx)(e.td, { children: 'string' }),
                        (0, n.jsxs)(e.td, {
                          children: [
                            '\u53d6\u51b3\u4e8e ',
                            (0, n.jsx)(e.code, { children: 'mode' }),
                            ' \u7684\u914d\u7f6e\uff0c\u4e3a ',
                            (0, n.jsx)(e.code, { children: 'mode' }),
                            ' \u63d0\u4f9b\u5bf9\u5e94\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u5f53\u4f60\u5c06 ',
                            (0, n.jsx)(e.code, { children: 'mode' }),
                            ' \u914d\u7f6e\u4e3a ',
                            (0, n.jsx)(e.code, { children: 'fixed-percent' }),
                            ' \u65f6\uff0c',
                            (0, n.jsx)(e.code, { children: 'value' }),
                            ' \u7528\u4e8e\u6307\u5b9a Pod \u7684\u767e\u5206\u6bd4',
                          ],
                        }),
                        (0, n.jsx)(e.td, { children: '\u65e0' }),
                        (0, n.jsx)(e.td, { children: '\u5426' }),
                        (0, n.jsx)(e.td, { children: '1' }),
                      ],
                    }),
                    (0, n.jsxs)(e.tr, {
                      children: [
                        (0, n.jsx)(e.td, { children: 'containerNames' }),
                        (0, n.jsx)(e.td, { children: '[]string' }),
                        (0, n.jsx)(e.td, { children: '\u6307\u5b9a\u6ce8\u5165\u7684\u5bb9\u5668\u540d\u79f0' }),
                        (0, n.jsx)(e.td, { children: '\u65e0' }),
                        (0, n.jsx)(e.td, { children: '\u5426' }),
                        (0, n.jsx)(e.td, { children: (0, n.jsx)(e.code, { children: '["nginx"]' }) }),
                      ],
                    }),
                    (0, n.jsxs)(e.tr, {
                      children: [
                        (0, n.jsx)(e.td, { children: 'selector' }),
                        (0, n.jsx)(e.td, { children: 'struct' }),
                        (0, n.jsxs)(e.td, {
                          children: [
                            '\u6307\u5b9a\u6ce8\u5165\u6545\u969c\u7684\u76ee\u6807 Pod\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003',
                            (0, n.jsx)(e.a, {
                              href: '/zh/docs/2.5.2/define-chaos-experiment-scope',
                              children: '\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4',
                            }),
                          ],
                        }),
                        (0, n.jsx)(e.td, { children: '\u65e0' }),
                        (0, n.jsx)(e.td, { children: '\u662f' }),
                        (0, n.jsx)(e.td, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(e.h4, { id: 'stressors', children: 'Stressors' }),
            '\n',
            (0, n.jsxs)(e.table, {
              children: [
                (0, n.jsx)(e.thead, {
                  children: (0, n.jsxs)(e.tr, {
                    children: [
                      (0, n.jsx)(e.th, { children: '\u53c2\u6570' }),
                      (0, n.jsx)(e.th, { children: '\u7c7b\u578b' }),
                      (0, n.jsx)(e.th, { children: '\u8bf4\u660e' }),
                      (0, n.jsx)(e.th, { children: '\u9ed8\u8ba4\u503c' }),
                      (0, n.jsx)(e.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                      (0, n.jsx)(e.th, { children: '\u793a\u4f8b' }),
                    ],
                  }),
                }),
                (0, n.jsxs)(e.tbody, {
                  children: [
                    (0, n.jsxs)(e.tr, {
                      children: [
                        (0, n.jsx)(e.td, { children: 'memory' }),
                        (0, n.jsx)(e.td, {
                          children: (0, n.jsx)(e.a, { href: '#memorystressor', children: 'MemoryStressor' }),
                        }),
                        (0, n.jsx)(e.td, { children: '\u6307\u5b9a\u5185\u5b58\u538b\u529b\u7684\u53c2\u6570' }),
                        (0, n.jsx)(e.td, { children: '\u65e0' }),
                        (0, n.jsx)(e.td, { children: '\u5426' }),
                        (0, n.jsx)(e.td, {}),
                      ],
                    }),
                    (0, n.jsxs)(e.tr, {
                      children: [
                        (0, n.jsx)(e.td, { children: 'cpu' }),
                        (0, n.jsx)(e.td, {
                          children: (0, n.jsx)(e.a, { href: '#cpustressor', children: 'CPUStressor' }),
                        }),
                        (0, n.jsx)(e.td, { children: '\u6307\u5b9a CPU \u538b\u529b\u7684\u53c2\u6570' }),
                        (0, n.jsx)(e.td, { children: '\u65e0' }),
                        (0, n.jsx)(e.td, { children: '\u5426' }),
                        (0, n.jsx)(e.td, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(e.h5, { id: 'memorystressor', children: 'MemoryStressor' }),
            '\n',
            (0, n.jsxs)(e.table, {
              children: [
                (0, n.jsx)(e.thead, {
                  children: (0, n.jsxs)(e.tr, {
                    children: [
                      (0, n.jsx)(e.th, { children: '\u53c2\u6570' }),
                      (0, n.jsx)(e.th, { children: '\u7c7b\u578b' }),
                      (0, n.jsx)(e.th, { children: '\u8bf4\u660e' }),
                      (0, n.jsx)(e.th, { children: '\u9ed8\u8ba4\u503c' }),
                      (0, n.jsx)(e.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                      (0, n.jsx)(e.th, { children: '\u793a\u4f8b' }),
                    ],
                  }),
                }),
                (0, n.jsxs)(e.tbody, {
                  children: [
                    (0, n.jsxs)(e.tr, {
                      children: [
                        (0, n.jsx)(e.td, { children: 'workers' }),
                        (0, n.jsx)(e.td, { children: 'int' }),
                        (0, n.jsx)(e.td, {
                          children: '\u6307\u5b9a\u65bd\u52a0\u5185\u5b58\u538b\u529b\u7684\u7ebf\u7a0b\u4e2a\u6570',
                        }),
                        (0, n.jsx)(e.td, {}),
                        (0, n.jsx)(e.td, { children: '\u5426' }),
                        (0, n.jsx)(e.td, { children: (0, n.jsx)(e.code, { children: '1' }) }),
                      ],
                    }),
                    (0, n.jsxs)(e.tr, {
                      children: [
                        (0, n.jsx)(e.td, { children: 'size' }),
                        (0, n.jsx)(e.td, { children: 'string' }),
                        (0, n.jsxs)(e.td, {
                          children: [
                            '\u6307\u5b9a\u5206\u914d\u5185\u5b58\u7684\u5927\u5c0f\u6216\u662f\u5360\u603b\u5185\u5b58\u7684\u767e\u5206\u6bd4\uff0c\u5206\u914d\u5185\u5b58\u7684\u603b\u548c\u4e3a ',
                            (0, n.jsx)(e.code, { children: 'size' }),
                          ],
                        }),
                        (0, n.jsx)(e.td, {}),
                        (0, n.jsx)(e.td, { children: '\u5426' }),
                        (0, n.jsxs)(e.td, {
                          children: [
                            (0, n.jsx)(e.code, { children: '256MB' }),
                            '/',
                            (0, n.jsx)(e.code, { children: '25%' }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(e.tr, {
                      children: [
                        (0, n.jsx)(e.td, { children: 'time' }),
                        (0, n.jsx)(e.td, { children: 'string' }),
                        (0, n.jsx)(e.td, {
                          children:
                            '\u6307\u5b9a\u8fbe\u5230\u5206\u914d\u5185\u5b58\u5927\u5c0f\u7684\u65f6\u95f4\uff0c\u589e\u957f\u6a21\u578b\u4e3a\u7ebf\u6027\u6a21\u578b',
                        }),
                        (0, n.jsx)(e.td, {}),
                        (0, n.jsx)(e.td, { children: '\u5426' }),
                        (0, n.jsx)(e.td, { children: (0, n.jsx)(e.code, { children: '10min' }) }),
                      ],
                    }),
                    (0, n.jsxs)(e.tr, {
                      children: [
                        (0, n.jsx)(e.td, { children: 'oomScoreAdj' }),
                        (0, n.jsx)(e.td, { children: 'int' }),
                        (0, n.jsxs)(e.td, {
                          children: [
                            '\u6307\u5b9a\u5360\u7528\u5185\u5b58\u538b\u529b\u8fdb\u7a0b\u7684 ',
                            (0, n.jsx)(e.a, {
                              href: 'https://man7.org/linux/man-pages/man5/proc.5.html',
                              children: 'oom_score_adj',
                            }),
                          ],
                        }),
                        (0, n.jsx)(e.td, {}),
                        (0, n.jsx)(e.td, { children: '\u5426' }),
                        (0, n.jsx)(e.td, { children: (0, n.jsx)(e.code, { children: '-1000' }) }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(e.admonition, {
              type: 'note',
              children: (0, n.jsxs)(e.p, {
                children: [
                  '\u4e3a\u907f\u514d\u56e0 ',
                  (0, n.jsx)(e.code, { children: 'stress-ng' }),
                  ' \u65bd\u52a0\u8bfb\u5199\u538b\u529b\u800c\u9020\u6210\u7684\u9ad8 CPU \u8d1f\u8f7d\uff0cChaos Mesh \u4f7f\u7528 ',
                  (0, n.jsx)(e.a, { href: 'https://github.com/chaos-mesh/memStress', children: 'memStress' }),
                  ' \u6a21\u62df\u5185\u5b58\u538b\u529b\u7684\u65b9\u6cd5\u3002\u8fd9\u662f\u56e0\u4e3a memStress \u6a21\u62df\u5185\u5b58\u538b\u529b\u7684\u65b9\u6cd5\u4f1a\u5360\u7528\u5b9e\u9645\u5185\u5b58\uff0c\u800c\u4e0d\u662f\u5bf9\u5185\u5b58\u65bd\u52a0\u8bfb\u5199\u538b\u529b\u3002',
                ],
              }),
            }),
            '\n',
            (0, n.jsx)(e.h5, { id: 'cpustressor', children: 'CPUStressor' }),
            '\n',
            (0, n.jsxs)(e.table, {
              children: [
                (0, n.jsx)(e.thead, {
                  children: (0, n.jsxs)(e.tr, {
                    children: [
                      (0, n.jsx)(e.th, { children: '\u53c2\u6570' }),
                      (0, n.jsx)(e.th, { children: '\u7c7b\u578b' }),
                      (0, n.jsx)(e.th, { children: '\u8bf4\u660e' }),
                      (0, n.jsx)(e.th, { children: '\u9ed8\u8ba4\u503c' }),
                      (0, n.jsx)(e.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                      (0, n.jsx)(e.th, { children: '\u793a\u4f8b' }),
                    ],
                  }),
                }),
                (0, n.jsxs)(e.tbody, {
                  children: [
                    (0, n.jsxs)(e.tr, {
                      children: [
                        (0, n.jsx)(e.td, { children: 'workers' }),
                        (0, n.jsx)(e.td, { children: 'int' }),
                        (0, n.jsx)(e.td, {
                          children: '\u6307\u5b9a\u65bd\u52a0 CPU \u538b\u529b\u7684\u7ebf\u7a0b\u4e2a\u6570',
                        }),
                        (0, n.jsx)(e.td, {}),
                        (0, n.jsx)(e.td, { children: '\u662f' }),
                        (0, n.jsx)(e.td, { children: (0, n.jsx)(e.code, { children: '1' }) }),
                      ],
                    }),
                    (0, n.jsxs)(e.tr, {
                      children: [
                        (0, n.jsx)(e.td, { children: 'load' }),
                        (0, n.jsx)(e.td, { children: 'int' }),
                        (0, n.jsxs)(e.td, {
                          children: [
                            '\u6307\u5b9a\u5360\u636e CPU \u7684\u767e\u5206\u6bd4\u3002',
                            (0, n.jsx)(e.code, { children: '0' }),
                            ' \u610f\u5473\u7740\u6ca1\u6709\u589e\u52a0\u989d\u5916\u7684\u8d1f\u8f7d\uff0c',
                            (0, n.jsx)(e.code, { children: '100' }),
                            ' \u610f\u5473\u7740\u6ee1\u8d1f\u8f7d\u3002\u603b\u7684\u8d1f\u8f7d\u4e3a ',
                            (0, n.jsx)(e.code, { children: 'workers * load' }),
                            '\u3002',
                          ],
                        }),
                        (0, n.jsx)(e.td, {}),
                        (0, n.jsx)(e.td, { children: '\u5426' }),
                        (0, n.jsx)(e.td, { children: (0, n.jsx)(e.code, { children: '50' }) }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
      function o(s = {}) {
        const { wrapper: e } = { ...(0, t.R)(), ...s.components }
        return e ? (0, n.jsx)(e, { ...s, children: (0, n.jsx)(x, { ...s }) }) : x(s)
      }
    },
    35498: (s, e, d) => {
      d.d(e, { A: () => r })
      const r = d.p + 'assets/images/create-new-exp-4754c4846da07a385e3dd612b828aeae.png'
    },
    63179: (s, e, d) => {
      d.d(e, { A: () => r })
      const r = d.p + 'assets/images/exp-info-a276a95f6e75f6d8346b661d07fe6b44.png'
    },
    46027: (s, e, d) => {
      d.d(e, { A: () => r })
      const r = d.p + 'assets/images/stresschaos-exp-935cd4e385b90abd7f04ed6e7b0c2b35.png'
    },
    28453: (s, e, d) => {
      d.d(e, { R: () => h, x: () => i })
      var r = d(96540)
      const n = {},
        t = r.createContext(n)
      function h(s) {
        const e = r.useContext(t)
        return r.useMemo(
          function () {
            return 'function' == typeof s ? s(e) : { ...e, ...s }
          },
          [e, s]
        )
      }
      function i(s) {
        let e
        return (
          (e = s.disableParentContext
            ? 'function' == typeof s.components
              ? s.components(n)
              : s.components || n
            : h(s.components)),
          r.createElement(t.Provider, { value: e }, s.children)
        )
      }
    },
  },
])
