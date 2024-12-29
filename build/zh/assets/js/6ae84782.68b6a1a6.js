'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [8486],
  {
    14324: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => t,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => r,
          metadata: () => c,
          toc: () => o,
        })
      const c = JSON.parse(
        '{"id":"inspect-chaos-experiments","title":"\u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c","description":"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaos Mesh \u68c0\u67e5\u6df7\u6c8c\u5b9e\u9a8c\u7684\u8fd0\u884c\u72b6\u6001\u548c\u7ed3\u679c\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/inspect-chaos-experiments.md","sourceDirName":".","slug":"/inspect-chaos-experiments","permalink":"/zh/docs/2.4.3/inspect-chaos-experiments","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/inspect-chaos-experiments.md","tags":[],"version":"2.4.3","frontMatter":{"title":"\u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c"},"sidebar":"docs","previous":{"title":"\u8fd0\u884c\u5b9e\u9a8c","permalink":"/zh/docs/2.4.3/run-a-chaos-experiment"},"next":{"title":"\u521b\u5efa Chaos Mesh \u5de5\u4f5c\u6d41","permalink":"/zh/docs/2.4.3/create-chaos-mesh-workflow"}}'
      )
      var d = n(74848),
        i = n(28453)
      const r = { title: '\u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c' },
        l = void 0,
        t = {},
        o = [
          { value: '\u5b9e\u9a8c\u9636\u6bb5\u4ecb\u7ecd', id: '\u5b9e\u9a8c\u9636\u6bb5\u4ecb\u7ecd', level: 2 },
          {
            value: '\u901a\u8fc7 Chaos Dashboard \u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c',
            id: '\u901a\u8fc7-chaos-dashboard-\u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c',
            level: 2,
          },
          {
            value: '\u901a\u8fc7 <code>kubectl</code> \u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c',
            id: '\u901a\u8fc7-kubectl-\u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c',
            level: 2,
          },
        ]
      function a(e) {
        const s = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          img: 'img',
          li: 'li',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          ul: 'ul',
          ...(0, i.R)(),
          ...e.components,
        }
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)(s.p, {
              children:
                '\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaos Mesh \u68c0\u67e5\u6df7\u6c8c\u5b9e\u9a8c\u7684\u8fd0\u884c\u72b6\u6001\u548c\u7ed3\u679c\u3002',
            }),
            '\n',
            (0, d.jsx)(s.h2, {
              id: '\u5b9e\u9a8c\u9636\u6bb5\u4ecb\u7ecd',
              children: '\u5b9e\u9a8c\u9636\u6bb5\u4ecb\u7ecd',
            }),
            '\n',
            (0, d.jsx)(s.p, {
              children:
                '\u5728 Chaos Mesh \u4e2d\uff0c\u6839\u636e\u5b9e\u9a8c\u7684\u6267\u884c\u6d41\u7a0b\uff0c\u4e00\u4e2a\u6df7\u6c8c\u5b9e\u9a8c\u7684\u751f\u547d\u5468\u671f\u4e3b\u8981\u5206\u4e3a\u4ee5\u4e0b\u56db\u4e2a\u9636\u6bb5\uff1a',
            }),
            '\n',
            (0, d.jsxs)(s.ul, {
              children: [
                '\n',
                (0, d.jsx)(s.li, {
                  children:
                    '\u6ce8\u5165\u9636\u6bb5\uff1a\u6df7\u6c8c\u5b9e\u9a8c\u6b63\u5728\u8fdb\u884c\u6ce8\u5165\u6545\u969c\u64cd\u4f5c\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6b64\u9636\u6bb5\u6301\u7eed\u7684\u65f6\u95f4\u5f88\u77ed\u3002\u5982\u679c\u6b64\u9636\u6bb5\u6301\u7eed\u7684\u65f6\u95f4\u5f88\u957f\uff0c\u53ef\u80fd\u662f\u7531\u4e8e\u6df7\u6c8c\u5b9e\u9a8c\u51fa\u73b0\u4e86\u5f02\u5e38\uff0c\u6b64\u65f6\u53ef\u4ee5\u67e5\u770b\u4e8b\u4ef6\u4fe1\u606f\u786e\u5b9a\u5f02\u5e38\u539f\u56e0\u3002',
                }),
                '\n',
                (0, d.jsx)(s.li, {
                  children:
                    '\u8fd0\u884c\u9636\u6bb5\uff1a\u5f53\u6240\u6709\u6d4b\u8bd5\u76ee\u6807\u90fd\u5df2\u7ecf\u88ab\u6210\u529f\u6ce8\u5165\u6545\u969c\u540e\uff0c\u6df7\u6c8c\u5b9e\u9a8c\u8fdb\u5165\u8fd0\u884c\u9636\u6bb5\u3002',
                }),
                '\n',
                (0, d.jsxs)(s.li, {
                  children: [
                    '\u6682\u505c\u9636\u6bb5\uff1a\u5f53\u5bf9\u6df7\u6c8c\u5b9e\u9a8c\u8fdb\u884c',
                    (0, d.jsx)(s.a, {
                      href: '/zh/docs/2.4.3/run-a-chaos-experiment#%E6%9A%82%E5%81%9C%E6%B7%B7%E6%B2%8C%E5%AE%9E%E9%AA%8C',
                      children: '\u6682\u505c',
                    }),
                    '\u64cd\u4f5c\u65f6\uff0cChaos Mesh \u4f1a\u6062\u590d\u6240\u6709\u6d4b\u8bd5\u76ee\u6807\uff0c\u6b64\u65f6\u5b9e\u9a8c\u8fdb\u5165\u6682\u505c\u9636\u6bb5\u3002',
                  ],
                }),
                '\n',
                (0, d.jsx)(s.li, {
                  children:
                    '\u7ed3\u675f\u9636\u6bb5\uff1a\u5982\u679c\u914d\u7f6e\u4e86\u5b9e\u9a8c\u6301\u7eed\u65f6\u95f4\uff0c\u5f53\u5b9e\u9a8c\u8fd0\u884c\u65f6\u95f4\u8fbe\u5230\u4e86\u6301\u7eed\u65f6\u95f4\u540e\uff0cChaos Mesh \u4f1a\u6062\u590d\u6240\u6709\u6d4b\u8bd5\u76ee\u6807\uff0c\u8868\u793a\u5b9e\u9a8c\u5df2\u7ecf\u7ed3\u675f\u3002',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, d.jsx)(s.h2, {
              id: '\u901a\u8fc7-chaos-dashboard-\u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c',
              children: '\u901a\u8fc7 Chaos Dashboard \u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c',
            }),
            '\n',
            (0, d.jsx)(s.p, {
              children:
                '\u5728 Chaos Dashboard \u4e2d\uff0c\u4f60\u53ef\u4ee5\u5728\u4ee5\u4e0b\u4efb\u4e00\u9875\u9762\u67e5\u770b\u5b9e\u9a8c\u7684\u8fd0\u884c\u9636\u6bb5\uff1a',
            }),
            '\n',
            (0, d.jsxs)(s.ul, {
              children: [
                '\n',
                (0, d.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, d.jsx)(s.p, { children: '\u6df7\u6c8c\u5b9e\u9a8c\u5217\u8868\u9875\u9762\uff1a' }),
                    '\n',
                    (0, d.jsx)(s.p, {
                      children: (0, d.jsx)(s.img, {
                        alt: '\u5b9e\u9a8c\u72b6\u6001',
                        src: n(35622).A + '',
                        width: '2092',
                        height: '866',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, d.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, d.jsx)(s.p, { children: '\u6df7\u6c8c\u5b9e\u9a8c\u8be6\u60c5\u9875\u9762\uff1a' }),
                    '\n',
                    (0, d.jsx)(s.p, {
                      children: (0, d.jsx)(s.img, {
                        alt: '\u5b9e\u9a8c\u72b6\u6001',
                        src: n(69375).A + '',
                        width: '1936',
                        height: '776',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, d.jsx)(s.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, d.jsxs)(s.ul, {
                children: [
                  '\n',
                  (0, d.jsxs)(s.li, {
                    children: [
                      '\u5982\u679c\u4e00\u4e2a\u6df7\u6c8c\u5b9e\u9a8c\u957f\u65f6\u95f4\u5904\u4e8e',
                      (0, d.jsx)(s.strong, { children: '\u6ce8\u5165' }),
                      '\u9636\u6bb5\uff0c\u53ef\u80fd\u662f\u7531\u4e8e\u6b64\u5b9e\u9a8c\u51fa\u73b0\u4e86\u5f02\u5e38\uff08\u4f8b\u5982\uff0c\u914d\u7f6e\u7684 Selectors \u672a\u9009\u51fa\u5f85\u6d4b\u76ee\u6807\uff09\u3002\u6b64\u65f6\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b',
                      (0, d.jsx)(s.strong, { children: '\u4e8b\u4ef6\u4fe1\u606f' }),
                      '\u786e\u5b9a\u5f02\u5e38\u539f\u56e0\uff0c\u5e76\u68c0\u67e5\u6df7\u6c8c\u5b9e\u9a8c\u7684\u914d\u7f6e\u4fe1\u606f\u3002',
                    ],
                  }),
                  '\n',
                  (0, d.jsxs)(s.li, {
                    children: [
                      'Chaos Dashboard \u4e2d\u4ec5\u5c55\u793a\u4e86',
                      (0, d.jsx)(s.a, {
                        href: '#%E5%AE%9E%E9%AA%8C%E9%98%B6%E6%AE%B5%E4%BB%8B%E7%BB%8D',
                        children: '\u4e3b\u8981\u5b9e\u9a8c\u9636\u6bb5',
                      }),
                      '\uff0c\u5982\u9700\u67e5\u770b\u66f4\u8be6\u7ec6\u7684\u5b9e\u9a8c\u72b6\u6001\uff0c\u8bf7\u901a\u8fc7 ',
                      (0, d.jsx)(s.code, { children: 'kubectl' }),
                      ' \u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c\u3002',
                    ],
                  }),
                  '\n',
                ],
              }),
            }),
            '\n',
            (0, d.jsxs)(s.h2, {
              id: '\u901a\u8fc7-kubectl-\u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c',
              children: [
                '\u901a\u8fc7 ',
                (0, d.jsx)(s.code, { children: 'kubectl' }),
                ' \u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c',
              ],
            }),
            '\n',
            (0, d.jsxs)(s.p, {
              children: [
                '\u53ef\u4ee5\u4f7f\u7528 ',
                (0, d.jsx)(s.code, { children: 'kubectl describe' }),
                ' \u547d\u4ee4\u67e5\u770b\u6b64\u6df7\u6c8c\u5b9e\u9a8c\u5bf9\u8c61\u7684 ',
                (0, d.jsx)(s.code, { children: 'Status' }),
                ' \u548c ',
                (0, d.jsx)(s.code, { children: 'Events' }),
                '\uff0c\u4ece\u800c\u786e\u5b9a\u5b9e\u9a8c\u7ed3\u679c\u3002',
              ],
            }),
            '\n',
            (0, d.jsx)(s.pre, {
              children: (0, d.jsx)(s.code, {
                className: 'language-shell',
                children: 'kubectl describe podchaos pod-failure-tikv -n tidb-cluster\n',
              }),
            }),
            '\n',
            (0, d.jsx)(s.p, {
              children: '\u6267\u884c\u4e0a\u8ff0\u547d\u4ee4\u540e\uff0c\u9884\u671f\u8f93\u51fa\u5982\u4e0b\uff1a',
            }),
            '\n',
            (0, d.jsx)(s.pre, {
              children: (0, d.jsx)(s.code, {
                className: 'language-shell',
                children:
                  '...\nStatus:\n  Conditions:\n    Reason:\n    Status:  False\n    Type:    Paused\n    Reason:\n    Status:  True\n    Type:    Selected\n    Reason:\n    Status:  True\n    Type:    AllInjected\n    Reason:\n    Status:  False\n    Type:    AllRecovered\n  Experiment:\n    Container Records:\n      Id:            tidb-cluster/basic-tikv-0\n      Phase:         Injected\n      Selector Key:  .\n    Desired Phase:   Run\nEvents:\n  Type    Reason           Age   From          Message\n  ----    ------           ----  ----          -------\n  Normal  FinalizerInited  39s   finalizer     Finalizer has been inited\n  Normal  Paused           39s   desiredphase  Experiment has been paused\n  Normal  Updated          39s   finalizer     Successfully update finalizer of resource\n  Normal  Updated          39s   records       Successfully update records of resource\n  Normal  Updated          39s   desiredphase  Successfully update desiredPhase of resource\n  Normal  Started          17s   desiredphase  Experiment has started\n  Normal  Updated          17s   desiredphase  Successfully update desiredPhase of resource\n  Normal  Applied          17s   records       Successfully apply chaos for tidb-cluster/basic-tikv-0\n  Normal  Updated          17s   records       Successfully update records of resource\n',
              }),
            }),
            '\n',
            (0, d.jsx)(s.p, {
              children: '\u4e0a\u8ff0\u8f93\u51fa\u4e2d\uff0c\u4e3b\u8981\u5305\u542b\u4e24\u90e8\u5206\uff1a',
            }),
            '\n',
            (0, d.jsxs)(s.ul, {
              children: [
                '\n',
                (0, d.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, d.jsx)(s.p, { children: (0, d.jsx)(s.code, { children: 'Status' }) }),
                    '\n',
                    (0, d.jsxs)(s.p, {
                      children: [
                        '\u4f9d\u636e\u6df7\u6c8c\u5b9e\u9a8c\u7684\u6267\u884c\u6d41\u7a0b\uff0c',
                        (0, d.jsx)(s.code, { children: 'Status' }),
                        ' \u63d0\u4f9b\u4e86\u4ee5\u4e0b\u56db\u7c7b\u72b6\u6001\u8bb0\u5f55\uff1a',
                      ],
                    }),
                    '\n',
                    (0, d.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, d.jsxs)(s.li, {
                          children: [
                            (0, d.jsx)(s.code, { children: 'Paused' }),
                            '\uff1a \u4ee3\u8868\u6df7\u6c8c\u5b9e\u9a8c\u6b63\u5904\u4e8e\u6682\u505c\u9636\u6bb5\u3002',
                          ],
                        }),
                        '\n',
                        (0, d.jsxs)(s.li, {
                          children: [
                            (0, d.jsx)(s.code, { children: 'Selected' }),
                            '\uff1a \u4ee3\u8868\u6df7\u6c8c\u5b9e\u9a8c\u5df2\u7ecf\u6b63\u786e\u9009\u62e9\u51fa\u5f85\u6d4b\u8bd5\u76ee\u6807\u3002',
                          ],
                        }),
                        '\n',
                        (0, d.jsxs)(s.li, {
                          children: [
                            (0, d.jsx)(s.code, { children: 'AllInjected' }),
                            '\uff1a\u4ee3\u8868\u6240\u6709\u6d4b\u8bd5\u76ee\u6807\u90fd\u5df2\u7ecf\u88ab\u6210\u529f\u6ce8\u5165\u6545\u969c\u3002',
                          ],
                        }),
                        '\n',
                        (0, d.jsxs)(s.li, {
                          children: [
                            (0, d.jsx)(s.code, { children: 'AllRecoverd' }),
                            '\uff1a\u4ee3\u8868\u6240\u6709\u6d4b\u8bd5\u76ee\u6807\u7684\u6545\u969c\u90fd\u5df2\u7ecf\u88ab\u6210\u529f\u6062\u590d\u3002',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                    (0, d.jsx)(s.p, {
                      children:
                        '\u53ef\u4ee5\u901a\u8fc7\u8fd9\u56db\u7c7b\u72b6\u6001\u8bb0\u5f55\u63a8\u65ad\u51fa\u5f53\u524d\u6df7\u6c8c\u5b9e\u9a8c\u7684\u771f\u5b9e\u8fd0\u884c\u60c5\u51b5\u3002\u4f8b\u5982\uff1a',
                    }),
                    '\n',
                    (0, d.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, d.jsxs)(s.li, {
                          children: [
                            '\u5f53 ',
                            (0, d.jsx)(s.code, { children: 'Paused' }),
                            '\u3001',
                            (0, d.jsx)(s.code, { children: 'Selected' }),
                            '\u3001',
                            (0, d.jsx)(s.code, { children: 'AllRecoverd' }),
                            ' \u7684\u72b6\u6001\u662f ',
                            (0, d.jsx)(s.code, { children: 'True' }),
                            ' \u4e14 ',
                            (0, d.jsx)(s.code, { children: 'AllInjected' }),
                            ' \u7684\u72b6\u6001\u662f ',
                            (0, d.jsx)(s.code, { children: 'False' }),
                            '\u65f6\uff0c\u8bf4\u660e\u5f53\u524d\u5b9e\u9a8c\u5904\u5728\u6682\u505c\u72b6\u6001\u3002',
                          ],
                        }),
                        '\n',
                        (0, d.jsxs)(s.li, {
                          children: [
                            '\u5f53 ',
                            (0, d.jsx)(s.code, { children: 'Paused' }),
                            ' \u4e3a ',
                            (0, d.jsx)(s.code, { children: 'True' }),
                            ' \u7684\u65f6\uff0c\u8bf4\u660e\u5f53\u524d\u5b9e\u9a8c\u5904\u5728\u6682\u505c\u72b6\u6001\uff0c\u4f46\u662f\u5982\u679c\u6b64\u65f6\u7684 ',
                            (0, d.jsx)(s.code, { children: 'Selected' }),
                            ' \u503c\u4e3a ',
                            (0, d.jsx)(s.code, { children: 'False' }),
                            '\uff0c\u90a3\u4e48\u53ef\u4ee5\u8fdb\u4e00\u6b65\u5f97\u51fa\u6b64\u6df7\u6c8c\u5b9e\u9a8c\u65e0\u6cd5\u9009\u51fa\u5f85\u6d4b\u8bd5\u76ee\u6807\u3002',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                    (0, d.jsx)(s.admonition, {
                      title: '\u6ce8\u610f',
                      type: 'note',
                      children: (0, d.jsxs)(s.p, {
                        children: [
                          '\u4f60\u53ef\u4ee5\u4ece\u4e0a\u8ff0\u7684\u56db\u7c7b\u5b9e\u9a8c\u8bb0\u5f55\u7ec4\u5408\u4e2d\u53ef\u4ee5\u63a8\u5bfc\u51fa\u66f4\u591a\u7684\u4fe1\u606f\uff0c\u4f8b\u5982\u5f53 ',
                          (0, d.jsx)(s.code, { children: 'Paused' }),
                          ' \u4e3a ',
                          (0, d.jsx)(s.code, { children: 'True' }),
                          ' \u7684\u65f6\u5019\uff0c\u8bf4\u660e\u6df7\u6c8c\u5b9e\u9a8c\u5904\u5728\u6682\u505c\u72b6\u6001\uff0c\u4f46\u662f\u5982\u679c\u6b64\u65f6\u7684 ',
                          (0, d.jsx)(s.code, { children: 'Selected' }),
                          ' \u503c\u4e3a ',
                          (0, d.jsx)(s.code, { children: 'False' }),
                          '\uff0c\u90a3\u4e48\u53ef\u4ee5\u8fdb\u4e00\u6b65\u5f97\u51fa\u6b64\u6df7\u6c8c\u5b9e\u9a8c\u65e0\u6cd5\u9009\u51fa\u5f85\u6d4b\u8bd5\u76ee\u6807\u3002',
                        ],
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, d.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, d.jsx)(s.p, { children: (0, d.jsx)(s.code, { children: 'Events' }) }),
                    '\n',
                    (0, d.jsx)(s.p, {
                      children:
                        '\u4e8b\u4ef6\u5217\u8868\u4e2d\u5305\u542b\u6df7\u6c8c\u5b9e\u9a8c\u6574\u4e2a\u751f\u547d\u5468\u671f\u4e2d\u7684\u64cd\u4f5c\u8bb0\u5f55\uff0c\u53ef\u4ee5\u5e2e\u52a9\u786e\u5b9a\u6df7\u6c8c\u5b9e\u9a8c\u72b6\u6001\u5e76\u6392\u9664\u95ee\u9898\u3002',
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
          ],
        })
      }
      function h(e = {}) {
        const { wrapper: s } = { ...(0, i.R)(), ...e.components }
        return s ? (0, d.jsx)(s, { ...e, children: (0, d.jsx)(a, { ...e }) }) : a(e)
      }
    },
    69375: (e, s, n) => {
      n.d(s, { A: () => c })
      const c = n.p + 'assets/images/chaos_detail_status_zh-9e8ca4fe40029d3b702a940e2cf60e88.png'
    },
    35622: (e, s, n) => {
      n.d(s, { A: () => c })
      const c = n.p + 'assets/images/list_chaos_status_zh-a3a4ed11e2decd039c25847064bce0cc.png'
    },
    28453: (e, s, n) => {
      n.d(s, { R: () => r, x: () => l })
      var c = n(96540)
      const d = {},
        i = c.createContext(d)
      function r(e) {
        const s = c.useContext(i)
        return c.useMemo(
          function () {
            return 'function' == typeof e ? e(s) : { ...s, ...e }
          },
          [s, e]
        )
      }
      function l(e) {
        let s
        return (
          (s = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(d)
              : e.components || d
            : r(e.components)),
          c.createElement(i.Provider, { value: s }, e.children)
        )
      }
    },
  },
])
