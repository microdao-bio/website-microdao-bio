'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [6815],
  {
    35624: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => t,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => r,
          metadata: () => a,
          toc: () => o,
        })
      const a = JSON.parse(
        '{"id":"use-grafana-data-source","title":"\u4f7f\u7528 Grafana Data Source \u63d2\u4ef6\u8fdb\u884c\u89c2\u6d4b","description":"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728\u672c\u5730 Grafana \u5b89\u88c5 Data Source \u63d2\u4ef6\uff0c\u5e76\u4f7f\u7528 Grafana Data Source \u8fdb\u884c\u89c2\u6d4b\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/use-grafana-data-source.md","sourceDirName":".","slug":"/use-grafana-data-source","permalink":"/zh/docs/next/use-grafana-data-source","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/current/use-grafana-data-source.md","tags":[],"version":"current","frontMatter":{"title":"\u4f7f\u7528 Grafana Data Source \u63d2\u4ef6\u8fdb\u884c\u89c2\u6d4b"},"sidebar":"docs","previous":{"title":"\u96c6\u6210 Chaos Mesh \u5230 GitHub Actions","permalink":"/zh/docs/next/integrate-chaos-mesh-into-github-actions"},"next":{"title":"Chaosctl","permalink":"/zh/docs/next/chaosctl-tool"}}'
      )
      var i = s(74848),
        c = s(28453)
      const r = { title: '\u4f7f\u7528 Grafana Data Source \u63d2\u4ef6\u8fdb\u884c\u89c2\u6d4b' },
        l = void 0,
        t = {},
        o = [
          {
            value: '\u4f7f\u7528 grafana-cli \u5b89\u88c5 Data Source \u63d2\u4ef6',
            id: '\u4f7f\u7528-grafana-cli-\u5b89\u88c5-data-source-\u63d2\u4ef6',
            level: 2,
          },
          {
            value: '\u624b\u52a8\u5b89\u88c5 Data Source \u63d2\u4ef6',
            id: '\u624b\u52a8\u5b89\u88c5-data-source-\u63d2\u4ef6',
            level: 2,
          },
          { value: '\u8bbe\u7f6e Data Source \u63d2\u4ef6', id: '\u8bbe\u7f6e-data-source-\u63d2\u4ef6', level: 2 },
          { value: 'Query', id: 'query', level: 2 },
          { value: 'Annotations', id: 'annotations', level: 2 },
          { value: 'Variables', id: 'variables', level: 2 },
          { value: '\u95ee\u9898\u53cd\u9988', id: '\u95ee\u9898\u53cd\u9988', level: 2 },
          { value: '\u63a2\u7d22\u66f4\u591a', id: '\u63a2\u7d22\u66f4\u591a', level: 2 },
        ]
      function d(e) {
        const n = {
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
          ul: 'ul',
          ...(0, c.R)(),
          ...e.components,
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n.p, {
              children:
                '\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728\u672c\u5730 Grafana \u5b89\u88c5 Data Source \u63d2\u4ef6\uff0c\u5e76\u4f7f\u7528 Grafana Data Source \u8fdb\u884c\u89c2\u6d4b\u3002',
            }),
            '\n',
            (0, i.jsx)(n.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, i.jsxs)(n.ul, {
                children: [
                  '\n',
                  (0, i.jsx)(n.li, { children: 'Grafana \u5e94\u4e3a v7.0.0 \u6216\u66f4\u9ad8\u7248\u672c\u3002' }),
                  '\n',
                  (0, i.jsx)(n.li, { children: 'Chaos Mesh \u5e94\u4e3a v2.1.0 \u6216\u66f4\u9ad8\u7248\u672c\u3002' }),
                  '\n',
                ],
              }),
            }),
            '\n',
            (0, i.jsx)(n.h2, {
              id: '\u4f7f\u7528-grafana-cli-\u5b89\u88c5-data-source-\u63d2\u4ef6',
              children: '\u4f7f\u7528 grafana-cli \u5b89\u88c5 Data Source \u63d2\u4ef6',
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-shell',
                children: 'grafana-cli plugins install chaosmeshorg-datasource\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.h2, {
              id: '\u624b\u52a8\u5b89\u88c5-data-source-\u63d2\u4ef6',
              children: '\u624b\u52a8\u5b89\u88c5 Data Source \u63d2\u4ef6',
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                '\u4f5c\u4e3a\u5907\u9009\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u5728\u672c\u5730 Grafana \u5b89\u88c5 Data Source \u63d2\u4ef6\uff1a',
            }),
            '\n',
            (0, i.jsxs)(n.ol, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        '\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u4e0b\u8f7d\u63d2\u4ef6 zip \u5305\uff0c\u6216\u524d\u5f80 ',
                        (0, i.jsx)(n.a, {
                          href: 'https://github.com/chaos-mesh/datasource/releases',
                          children: 'https://github.com/chaos-mesh/datasource/releases',
                        }),
                        ' \u4e0b\u8f7d\u8be5\u538b\u7f29\u5305\uff1a',
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, {
                        className: 'language-shell',
                        children:
                          'curl -LO https://github.com/chaos-mesh/datasource/releases/download/v2.2.3/chaosmeshorg-datasource-2.2.3.zip\n',
                      }),
                    }),
                    '\n',
                    (0, i.jsx)(n.p, {
                      children:
                        '\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u5c06\u63d2\u4ef6\u89e3\u538b\u81f3 Grafana \u63d2\u4ef6\u76ee\u5f55\uff1a',
                    }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, {
                        className: 'language-shell',
                        children: 'unzip chaosmeshorg-datasource-2.2.3.zip -d YOUR_PLUGIN_DIR\n',
                      }),
                    }),
                    '\n',
                    (0, i.jsx)(n.admonition, {
                      title: '\u5c0f\u8d34\u58eb',
                      type: 'tip',
                      children: (0, i.jsxs)(n.p, {
                        children: [
                          '\u5982\u9700\u67e5\u627e\u63d2\u4ef6\u76ee\u5f55\uff0c\u53ef\u53c2\u8003 ',
                          (0, i.jsx)(n.a, {
                            href: 'https://grafana.com/docs/grafana/latest/plugins/installation/#install-a-packaged-plugin%E3%80%82',
                            children:
                              'https://grafana.com/docs/grafana/latest/plugins/installation/#install-a-packaged-plugin\u3002',
                          }),
                        ],
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        '\u7136\u540e\u66f4\u65b0\u5e76\u4fdd\u5b58 Grafana \u7684\u914d\u7f6e\u6587\u4ef6 ',
                        (0, i.jsx)(n.code, { children: 'grafana.ini' }),
                        '\uff0c\u5c06\u63d2\u4ef6\u6dfb\u52a0\u81f3 ',
                        (0, i.jsx)(n.code, { children: 'allow_loading_unsigned_plugins' }),
                        ' \u4ee5\u4fdd\u8bc1 Grafana \u53ef\u4ee5\u52a0\u8f7d\u672a\u7b7e\u540d\u7684\u63d2\u4ef6\uff1a',
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, {
                        className: 'language-ini',
                        children: '[plugins]\n  allow_loading_unsigned_plugins = chaosmeshorg-datasource\n',
                      }),
                    }),
                    '\n',
                    (0, i.jsx)(n.admonition, {
                      title: '\u5c0f\u8d34\u58eb',
                      type: 'tip',
                      children: (0, i.jsxs)(n.p, {
                        children: [
                          '\u5982\u9700\u67e5\u627e\u914d\u7f6e\u6587\u4ef6\uff0c\u53ef\u53c2\u8003 ',
                          (0, i.jsx)(n.a, {
                            href: 'https://grafana.com/docs/grafana/latest/administration/configuration/#config-file-locations%E3%80%82',
                            children:
                              'https://grafana.com/docs/grafana/latest/administration/configuration/#config-file-locations\u3002',
                          }),
                        ],
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, {
                      children:
                        '\u5b8c\u6210\u4fee\u6539\u540e\uff0c\u91cd\u542f Grafana \u5373\u53ef\u52a0\u8f7d Data Source \u63d2\u4ef6\u3002',
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, {
              id: '\u8bbe\u7f6e-data-source-\u63d2\u4ef6',
              children: '\u8bbe\u7f6e Data Source \u63d2\u4ef6',
            }),
            '\n',
            (0, i.jsxs)(n.ol, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        '\u6210\u529f\u5728\u672c\u5730 Grafana \u5b89\u88c5 Data Source \u63d2\u4ef6\u540e\uff0c\u524d\u5f80 ',
                        (0, i.jsx)(n.strong, { children: 'Configuration -> Data sources' }),
                        '\uff0c\u5728\u6b64\u5904\u6dfb\u52a0 Chaos Mesh \u540e\uff0c\u8fdb\u5165\u5982\u4e0b\u914d\u7f6e\u9875\u9762\uff1a',
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(n.p, {
                      children: (0, i.jsx)(n.img, {
                        alt: '\u914d\u7f6e\u9875\u9762',
                        src: s(28210).A + '',
                        width: '1400',
                        height: '1330',
                      }),
                    }),
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        '\u5728\u672c\u9875\u9762\u4e2d\uff0c\u53ea\u6709 ',
                        (0, i.jsx)(n.code, { children: 'URL' }),
                        ' \u5b57\u6bb5\u9700\u8981\u586b\u5199\uff0c\u5176\u4ed6\u5b57\u6bb5\u53ef\u4ee5\u5ffd\u7565\u3002',
                      ],
                    }),
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        '\u5047\u8bbe\u4f60\u5df2\u7ecf\u5728\u672c\u5730\u5b89\u88c5\u4e86 Chaos Mesh\uff0cDashboard \u4f1a\u9ed8\u8ba4\u5728 ',
                        (0, i.jsx)(n.code, { children: '2333' }),
                        ' \u7aef\u53e3\u5bfc\u51fa API\u3002\u56e0\u6b64\uff0c\u5982\u679c\u4f60\u6ca1\u6709\u4fee\u6539\u4efb\u4f55\u4e1c\u897f\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728 ',
                        (0, i.jsx)(n.code, { children: 'URL' }),
                        ' \u4e2d\u586b\u5199 ',
                        (0, i.jsx)(n.code, { children: 'http://localhost:2333' }),
                        '\u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        '\u7136\u540e\u4f7f\u7528 ',
                        (0, i.jsx)(n.code, { children: 'port-forward' }),
                        ' \u547d\u4ee4\u8ba9 API \u53ef\u88ab\u5916\u90e8\u8bbf\u95ee:',
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, {
                        className: 'language-shell',
                        children: 'kubectl port-forward -n chaos-mesh svc/chaos-dashboard 2333:2333\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        '\u70b9\u51fb ',
                        (0, i.jsx)(n.strong, { children: 'Save & Test' }),
                        ' \u6765\u6d4b\u8bd5\u8fde\u63a5\u3002\u5982\u679c\u663e\u793a\u6210\u529f\u7684\u901a\u77e5\uff0c\u5219\u8bf4\u660e\u8bbe\u7f6e\u5df2\u7ecf\u5b8c\u6210\u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: 'query', children: 'Query' }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'Data Source \u63d2\u4ef6\u4f1a\u4ee5\u4e8b\u4ef6\u7684\u89c6\u89d2\u6765\u89c2\u6d4b Chaos Mesh\uff0c\u4ee5\u4e0b\u51e0\u4e2a\u9009\u9879\u8d1f\u8d23\u8fc7\u6ee4\u4e0d\u540c\u7684\u4e8b\u4ef6\uff1a',
            }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, { children: 'Object ID' }),
                    ': \u901a\u8fc7\u5bf9\u8c61\u7684 UUID \u8fdb\u884c\u8fc7\u6ee4',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, { children: 'Namespace' }),
                    ': \u901a\u8fc7\u4e0d\u540c\u7684\u547d\u540d\u7a7a\u95f4\u8fdb\u884c\u8fc7\u6ee4',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, { children: 'Name' }),
                    ': \u901a\u8fc7\u5bf9\u8c61\u540d\u8fdb\u884c\u8fc7\u6ee4',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, { children: 'Kind' }),
                    ': \u901a\u8fc7\u7c7b\u578b\uff08PodChaos, Schedule \u7b49\uff09\u8fdb\u884c\u8fc7\u6ee4',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [(0, i.jsx)(n.code, { children: 'Limit' }), ': \u9650\u5236\u4e8b\u4ef6\u7684\u6570\u91cf'],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                '\u5bf9\u8fd9\u4e9b\u9009\u9879\u7684\u8bbe\u7f6e\u4f1a\u4f5c\u4e3a\u53c2\u6570\u88ab\u4f20\u9012\u5230 ',
                (0, i.jsx)(n.code, { children: '/api/events' }),
                ' API \u4e2d\u3002',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: 'annotations', children: 'Annotations' }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                '\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e Annotations \u628a Chaos Mesh \u7684\u4e8b\u4ef6\u96c6\u6210\u5230\u9762\u677f\u4e0a\uff0c\u5177\u4f53\u521b\u5efa\u793a\u4f8b\u5982\u4e0b\uff1a',
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.img, { alt: 'Annotations', src: s(26319).A + '', width: '1280', height: '1300' }),
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                '\u5982\u9700\u4e86\u89e3\u5982\u4f55\u586b\u5199 Annotations \u4e2d\u7684\u5b57\u6bb5\uff0c\u8bf7\u53c2\u8003 ',
                (0, i.jsx)(n.a, { href: '#query', children: 'Query' }),
                '\u3002',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: 'variables', children: 'Variables' }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                '\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u4e0d\u540c\u7684\u53d8\u91cf\u6765\u52a8\u6001\u5730\u67e5\u8be2 Chaos Mesh \u7684\u4e8b\u4ef6\u3002',
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.img, { alt: 'Variables', src: s(1114).A + '', width: '1860', height: '1280' }),
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: '\u4ee5\u4e0b\u662f\u63d2\u4ef6\u63d0\u4f9b\u7684\u53d8\u91cf\u7c7b\u578b\uff1a',
            }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, { children: 'Namespace' }),
                    ': \u9009\u62e9\u540e\uff0c\u6240\u6709\u53ef\u7528\u7684\u547d\u540d\u7a7a\u95f4\u5c06\u76f4\u63a5\u663e\u793a\u5728\u9875\u9762\u4e0b\u65b9\u7684 ',
                    (0, i.jsx)(n.code, { children: 'Preview of values' }),
                    '\u3002',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, { children: 'Kind' }),
                    ': \u4e0e\u547d\u540d\u7a7a\u95f4\u76f8\u540c\u3002\u83b7\u53d6\u6240\u6709\u79cd\u7c7b\u3002',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, { children: 'Experiment' }),
                    ': \u4e0e\u547d\u540d\u7a7a\u95f4\u76f8\u540c\u3002\u83b7\u53d6\u6240\u6709\u5b9e\u9a8c\u7684\u540d\u79f0\u3002',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, { children: 'Schedule' }),
                    ': \u4e0e\u547d\u540d\u7a7a\u95f4\u76f8\u540c\u3002\u83b7\u53d6\u6240\u6709\u65f6\u95f4\u8868\u7684\u540d\u79f0\u3002',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: '\u95ee\u9898\u53cd\u9988', children: '\u95ee\u9898\u53cd\u9988' }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                '\u5982\u679c\u5728\u5b89\u88c5\u6216\u8bbe\u7f6e\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u4e86\u95ee\u9898\uff0c\u6b22\u8fce\u5728 ',
                (0, i.jsx)(n.a, {
                  href: 'https://cloud-native.slack.com/archives/C0193VAV272',
                  children: 'CNCF Slack',
                }),
                ' \u5411\u793e\u533a\u63d0\u95ee\uff0c\u6216\u8005\u76f4\u63a5\u5728 GitHub \u521b\u5efa\u4e00\u4e2a ',
                (0, i.jsx)(n.a, { href: 'https://github.com/chaos-mesh/datasource/issues', children: 'issue' }),
                ' \u5411 Chaos Mesh \u56e2\u961f\u53cd\u9988\u3002',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: '\u63a2\u7d22\u66f4\u591a', children: '\u63a2\u7d22\u66f4\u591a' }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                '\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u66f4\u591a\u5185\u5bb9\uff0c \u6b22\u8fce\u5728 ',
                (0, i.jsx)(n.a, {
                  href: 'https://github.com/chaos-mesh/datasource',
                  children: 'chaos-mesh/datasource',
                }),
                ' \u67e5\u770b\u63d2\u4ef6\u7684\u6e90\u4ee3\u7801\u3002',
              ],
            }),
          ],
        })
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, c.R)(), ...e.components }
        return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e)
      }
    },
    26319: (e, n, s) => {
      s.d(n, { A: () => a })
      const a = s.p + 'assets/images/annotations-b9e5e1fd76f38a49dd9886922307fc69.png'
    },
    28210: (e, n, s) => {
      s.d(n, { A: () => a })
      const a = s.p + 'assets/images/settings-665c0b7d82f112c4cfc6e7555ff5fecb.png'
    },
    1114: (e, n, s) => {
      s.d(n, { A: () => a })
      const a = s.p + 'assets/images/variables-a7c176c8c7d5421dc93e921d29d697a5.png'
    },
    28453: (e, n, s) => {
      s.d(n, { R: () => r, x: () => l })
      var a = s(96540)
      const i = {},
        c = a.createContext(i)
      function r(e) {
        const n = a.useContext(c)
        return a.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e }
          },
          [n, e]
        )
      }
      function l(e) {
        let n
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : r(e.components)),
          a.createElement(c.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
