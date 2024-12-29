'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [1075],
  {
    44873: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => i,
          contentTitle: () => r,
          default: () => t,
          frontMatter: () => a,
          metadata: () => c,
          toc: () => h,
        })
      const c = JSON.parse(
        '{"id":"run-a-chaos-experiment","title":"\u8fd0\u884c\u5b9e\u9a8c","description":"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaos Mesh \u521b\u5efa\u5e76\u8fd0\u884c\u6df7\u6c8c\u5b9e\u9a8c\u3001\u67e5\u770b\u6df7\u6c8c\u5b9e\u9a8c\u8fd0\u884c\u60c5\u51b5\u3001\u6682\u505c\u6df7\u6c8c\u5b9e\u9a8c\u3001\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c\u4ee5\u53ca\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/run-a-chaos-experiment.md","sourceDirName":".","slug":"/run-a-chaos-experiment","permalink":"/zh/docs/2.4.3/run-a-chaos-experiment","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/run-a-chaos-experiment.md","tags":[],"version":"2.4.3","frontMatter":{"title":"\u8fd0\u884c\u5b9e\u9a8c"},"sidebar":"docs","previous":{"title":"\u5b9a\u4e49\u8c03\u5ea6\u89c4\u5219","permalink":"/zh/docs/2.4.3/define-scheduling-rules"},"next":{"title":"\u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c","permalink":"/zh/docs/2.4.3/inspect-chaos-experiments"}}'
      )
      var l = s(74848),
        d = s(28453)
      const a = { title: '\u8fd0\u884c\u5b9e\u9a8c' },
        r = void 0,
        i = {},
        h = [
          { value: '\u521b\u5efa\u6df7\u6c8c\u5b9e\u9a8c', id: '\u521b\u5efa\u6df7\u6c8c\u5b9e\u9a8c', level: 2 },
          {
            value: '\u4e00\u6b21\u6027\u6df7\u6c8c\u5b9e\u9a8c',
            id: '\u4e00\u6b21\u6027\u6df7\u6c8c\u5b9e\u9a8c',
            level: 3,
          },
          {
            value: '\u5b9a\u65f6\u6216\u5faa\u73af\u6df7\u6c8c\u5b9e\u9a8c',
            id: '\u5b9a\u65f6\u6216\u5faa\u73af\u6df7\u6c8c\u5b9e\u9a8c',
            level: 3,
          },
          { value: '\u6682\u505c\u6df7\u6c8c\u5b9e\u9a8c', id: '\u6682\u505c\u6df7\u6c8c\u5b9e\u9a8c', level: 2 },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u6682\u505c\u6216\u8005\u6062\u590d\u6df7\u6c8c\u5b9e\u9a8c',
            id: '\u4f7f\u7528\u547d\u4ee4\u6682\u505c\u6216\u8005\u6062\u590d\u6df7\u6c8c\u5b9e\u9a8c',
            level: 3,
          },
          {
            value: '\u4f7f\u7528 Dashboard \u6682\u505c\u6216\u8005\u6062\u590d\u6df7\u6c8c\u5b9e\u9a8c',
            id: '\u4f7f\u7528-dashboard-\u6682\u505c\u6216\u8005\u6062\u590d\u6df7\u6c8c\u5b9e\u9a8c',
            level: 3,
          },
          { value: '\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c', id: '\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c', level: 2 },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c',
            id: '\u4f7f\u7528\u547d\u4ee4\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c',
            level: 3,
          },
          {
            value: '\u4f7f\u7528 Dashboard \u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c',
            id: '\u4f7f\u7528-dashboard-\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c',
            level: 3,
          },
          { value: '\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c', id: '\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c', level: 2 },
          {
            value: '\u4f7f\u7528\u547d\u4ee4\u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c',
            id: '\u4f7f\u7528\u547d\u4ee4\u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c',
            level: 3,
          },
          {
            value: '\u4f7f\u7528 Dashboard \u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c',
            id: '\u4f7f\u7528-dashboard-\u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c',
            level: 3,
          },
        ]
      function o(e) {
        const n = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          img: 'img',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          ul: 'ul',
          ...(0, d.R)(),
          ...e.components,
        }
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(n.p, {
              children:
                '\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaos Mesh \u521b\u5efa\u5e76\u8fd0\u884c\u6df7\u6c8c\u5b9e\u9a8c\u3001\u67e5\u770b\u6df7\u6c8c\u5b9e\u9a8c\u8fd0\u884c\u60c5\u51b5\u3001\u6682\u505c\u6df7\u6c8c\u5b9e\u9a8c\u3001\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c\u4ee5\u53ca\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c\u3002',
            }),
            '\n',
            (0, l.jsx)(n.h2, {
              id: '\u521b\u5efa\u6df7\u6c8c\u5b9e\u9a8c',
              children: '\u521b\u5efa\u6df7\u6c8c\u5b9e\u9a8c',
            }),
            '\n',
            (0, l.jsx)(n.p, {
              children:
                '\u4f7f\u7528 Chaos Mesh\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u4ee5\u4e0b\u4e24\u7c7b\u6df7\u6c8c\u5b9e\u9a8c\uff1a',
            }),
            '\n',
            (0, l.jsxs)(n.ul, {
              children: [
                '\n',
                (0, l.jsxs)(n.li, {
                  children: [
                    '\u4e00\u6b21\u6027\u6df7\u6c8c\u5b9e\u9a8c\uff1a\u662f\u6700\u5c0f\u7c92\u5ea6\u7684\u6df7\u6c8c\u5b9e\u9a8c\u3002\u521b\u5efa\u540e\uff0c\u5b9e\u9a8c\u4f1a\u7acb\u523b\u5411\u6d4b\u8bd5\u76ee\u6807\u6ce8\u5165\u5df2\u914d\u7f6e\u7684\u6545\u969c\u3002\u5982\u679c\u914d\u7f6e\u4e86 ',
                    (0, l.jsx)(n.code, { children: 'duration' }),
                    ' \u53c2\u6570\uff0c\u6545\u969c\u5728 ',
                    (0, l.jsx)(n.code, { children: 'duration' }),
                    ' \u6307\u5b9a\u7684\u65f6\u95f4\u7ed3\u675f\u540e\u4f1a\u81ea\u52a8\u6062\u590d\u3002\u5f53\u6682\u505c\u6216\u8005\u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c\u65f6\uff0c\u6545\u969c\u4f1a\u7acb\u523b\u88ab\u6062\u590d\u3002',
                  ],
                }),
                '\n',
                (0, l.jsx)(n.li, {
                  children:
                    '\u5b9a\u65f6\u6216\u5faa\u73af\u6df7\u6c8c\u5b9e\u9a8c: \u662f\u53ef\u4ee5\u5b9a\u65f6\u8fd0\u884c\u6216\u5faa\u73af\u8fdb\u884c\u7684\u6df7\u6c8c\u5b9e\u9a8c\u3002\u521b\u5efa\u65f6\u9700\u8981\u5b9a\u4e49\u5b9e\u9a8c\u7684\u65f6\u95f4\u8c03\u5ea6\u89c4\u5219\u3002',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsx)(n.h3, {
              id: '\u4e00\u6b21\u6027\u6df7\u6c8c\u5b9e\u9a8c',
              children: '\u4e00\u6b21\u6027\u6df7\u6c8c\u5b9e\u9a8c',
            }),
            '\n',
            (0, l.jsx)(n.p, {
              children:
                '\u8981\u521b\u5efa\u4e00\u6b21\u6027\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4f60\u53ef\u4ee5\u91c7\u7528\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u4e4b\u4e00\uff1a',
            }),
            '\n',
            (0, l.jsxs)(n.ul, {
              children: [
                '\n',
                (0, l.jsxs)(n.li, {
                  children: [
                    '\u4f7f\u7528 Dashboard \u65b0\u5efa\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u7136\u540e\u70b9\u51fb',
                    (0, l.jsx)(n.strong, { children: '\u63d0\u4ea4' }),
                    '\u6309\u94ae\u8fd0\u884c\u5b9e\u9a8c\u3002\u66f4\u591a\u8be6\u7ec6\u6b65\u9aa4\uff0c\u8bf7\u53c2\u9605\u5177\u4f53\u7684\u6df7\u6c8c\u5b9e\u9a8c\u7c7b\u578b\u6587\u6863\u3002',
                  ],
                }),
                '\n',
                (0, l.jsxs)(n.li, {
                  children: [
                    '\u4f7f\u7528 YAML \u6587\u4ef6\u5b9a\u4e49\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u7136\u540e\u4f7f\u7528 ',
                    (0, l.jsx)(n.code, { children: 'kubectl' }),
                    ' \u547d\u4ee4\u521b\u5efa\u5e76\u8fd0\u884c\u5b9e\u9a8c\u3002',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsx)(n.p, {
              children:
                '\u8981\u4f7f\u7528 YAML \u6587\u4ef6\u65b9\u5f0f\u5b9a\u4e49\u6df7\u6c8c\u5b9e\u9a8c\u5e76\u8fd0\u884c\u5b9e\u9a8c\uff0c\u8bf7\u5b8c\u6210\u4ee5\u4e0b\u64cd\u4f5c\uff1a',
            }),
            '\n',
            (0, l.jsxs)(n.ol, {
              children: [
                '\n',
                (0, l.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, l.jsx)(n.p, {
                      children:
                        '\u65b0\u5efa\u4e00\u4e2a YAML \u6587\u4ef6\u7528\u4e8e\u5b9a\u4e49\u6df7\u6c8c\u5b9e\u9a8c\u3002\u5728\u6b64 YAML \u6587\u4ef6\u4e2d\uff0c\u4f9d\u636e\u6df7\u6c8c\u5b9e\u9a8c\u7c7b\u578b\uff0c\u6dfb\u52a0\u76f8\u5e94\u7684\u914d\u7f6e\u53c2\u6570\u3002',
                    }),
                    '\n',
                    (0, l.jsxs)(n.p, {
                      children: [
                        '\u4ee5\u6a21\u62df\u7f51\u7edc\u6545\u969c\u4e3a\u4f8b\uff0c\u65b0\u5efa\u4e00\u4e2a\u5305\u542b\u5982\u4e0b\u914d\u7f6e\u793a\u4f8b\u7684 ',
                        (0, l.jsx)(n.code, { children: 'network-delay.yaml' }),
                        ' \u6587\u4ef6\u3002',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(n.pre, {
                      children: (0, l.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: network-delay\nspec:\n  action: delay # the specific chaos action to inject\n  mode: one # the mode to run chaos action; supported modes are one/all/fixed/fixed-percent/random-max-percent\n  selector: # pods where to inject chaos actions\n    namespaces:\n      - default\n    labelSelectors:\n      'app': 'web-show' # the label of the pod for chaos injection\n  delay:\n    latency: '10ms'\n  duration: '12s'\n",
                      }),
                    }),
                    '\n',
                    (0, l.jsxs)(n.p, {
                      children: [
                        '\u793a\u4f8b YAML \u6587\u4ef6\u4e2d\u5b9a\u4e49\u4e86\u4e00\u4e2a\u6301\u7eed ',
                        (0, l.jsx)(n.code, { children: '12s' }),
                        ' \u7684\u7f51\u7edc\u5ef6\u8fdf\u6545\u969c\uff0c\u5b9e\u9a8c\u76ee\u6807\u662f ',
                        (0, l.jsx)(n.code, { children: 'default namespace' }),
                        ' \u4e0b\u5e26\u6709 ',
                        (0, l.jsx)(n.code, { children: '"app": "web-show"' }),
                        ' \u6807\u7b7e\u7684\u5e94\u7528\u3002\u5173\u4e8e\u7f51\u7edc\u6545\u969c\u7684\u66f4\u591a\u914d\u7f6e\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003',
                        (0, l.jsx)(n.a, {
                          href: '/zh/docs/2.4.3/simulate-network-chaos-on-kubernetes',
                          children: '\u6a21\u62df\u7f51\u7edc\u6545\u969c',
                        }),
                        '\u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, l.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, l.jsxs)(n.p, {
                      children: [
                        '\u4f7f\u7528 ',
                        (0, l.jsx)(n.code, { children: 'kubectl apply -f' }),
                        ' \u547d\u4ee4\u521b\u5efa\u5e76\u8fd0\u884c\u6b64\u6df7\u6c8c\u5b9e\u9a8c\uff1a',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(n.pre, {
                      children: (0, l.jsx)(n.code, {
                        className: 'language-yaml',
                        children: 'kubectl apply -f network-delay.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, l.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, l.jsxs)(n.p, {
                      children: [
                        '\u6df7\u6c8c\u5b9e\u9a8c\u5f00\u59cb\u540e\uff0c\u5982\u9700\u68c0\u67e5\u6df7\u6c8c\u5b9e\u9a8c\u7684\u8fd0\u884c\u60c5\u51b5\uff0c\u8bf7\u4f7f\u7528 ',
                        (0, l.jsx)(n.code, { children: 'kubectl describe' }),
                        ' \u547d\u4ee4\u67e5\u770b\u6b64\u6df7\u6c8c\u5b9e\u9a8c\u5bf9\u8c61\u7684 ',
                        (0, l.jsx)(n.code, { children: 'status' }),
                        ' \u6216\u8005 ',
                        (0, l.jsx)(n.code, { children: 'event' }),
                        '\u3002',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(n.pre, {
                      children: (0, l.jsx)(n.code, {
                        className: 'language-yaml',
                        children: 'kubectl describe networkchaos network-delay\n',
                      }),
                    }),
                    '\n',
                    (0, l.jsxs)(n.p, {
                      children: [
                        '\u8981\u4e86\u89e3\u8be6\u7ec6\u7684\u8fd0\u884c\u7ed3\u679c\u68c0\u67e5\u6b65\u9aa4\uff0c\u8bf7\u53c2\u8003',
                        (0, l.jsx)(n.a, {
                          href: '/zh/docs/2.4.3/inspect-chaos-experiments',
                          children: '\u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c',
                        }),
                        '\u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsx)(n.h3, {
              id: '\u5b9a\u65f6\u6216\u5faa\u73af\u6df7\u6c8c\u5b9e\u9a8c',
              children: '\u5b9a\u65f6\u6216\u5faa\u73af\u6df7\u6c8c\u5b9e\u9a8c',
            }),
            '\n',
            (0, l.jsxs)(n.p, {
              children: [
                'Chaos Mesh \u63d0\u4f9b ',
                (0, l.jsx)(n.code, { children: 'Schedule' }),
                ' \u5bf9\u8c61\uff0c\u5e2e\u52a9\u521b\u5efa\u5b9a\u65f6\u6df7\u6c8c\u5b9e\u9a8c\u548c\u5faa\u73af\u6df7\u6c8c\u5b9e\u9a8c\u3002',
              ],
            }),
            '\n',
            (0, l.jsx)(n.p, {
              children:
                '\u8981\u521b\u5efa\u5b9a\u65f6\u6216\u5faa\u73af\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u8bf7\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a',
            }),
            '\n',
            (0, l.jsxs)(n.ol, {
              children: [
                '\n',
                (0, l.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, l.jsxs)(n.p, {
                      children: [
                        '\u65b0\u5efa\u4e00\u4e2a YAML \u6587\u4ef6\u7528\u4e8e\u5b9a\u4e49\u6df7\u6c8c\u5b9e\u9a8c\u3002\u5728\u6b64 YAML \u6587\u4ef6\u4e2d\uff0c\u9700\u8981\u914d\u7f6e ',
                        (0, l.jsx)(n.code, { children: 'Schedule' }),
                        ' \u76f8\u5173\u53c2\u6570\u7528\u4e8e\u5b9a\u4e49\u5177\u4f53\u7684\u65f6\u95f4\u8c03\u5ea6\u89c4\u5219\uff0c\u7136\u540e\u4f9d\u636e\u6df7\u6c8c\u5b9e\u9a8c\u7c7b\u578b\u914d\u7f6e\u6545\u969c\u76f8\u5173\u53c2\u6570\u3002',
                      ],
                    }),
                    '\n',
                    (0, l.jsxs)(n.p, {
                      children: [
                        '\u4ee5\u6a21\u62df\u4e00\u4e2a\u5b9a\u65f6\u7684\u7f51\u7edc\u6545\u969c\u4e3a\u4f8b\uff0c\u65b0\u5efa\u4e00\u4e2a\u5305\u542b\u5982\u4e0b\u914d\u7f6e\u793a\u4f8b\u7684 ',
                        (0, l.jsx)(n.code, { children: 'schedule-delay-example.yaml' }),
                        ' \u6587\u4ef6\u3002',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(n.pre, {
                      children: (0, l.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: Schedule\nmetadata:\n  name: schedule-delay-example\nspec:\n  schedule: '5 * * * *'\n  historyLimit: 2\n  concurrencyPolicy: 'Allow'\n  type: 'NetworkChaos'\n  networkChaos:\n    action: delay\n    mode: one\n    selector:\n      namespaces:\n        - default\n      labelSelectors:\n        'app': 'web-show'\n    delay:\n      latency: '10ms'\n    duration: '12s'\n",
                      }),
                    }),
                    '\n',
                    (0, l.jsxs)(n.p, {
                      children: [
                        '\u793a\u4f8b YAML \u6587\u4ef6\u4e2d\u5b9a\u4e49\u4e86\u4e00\u4e2a\u53ef\u4ee5\u5728\u6bcf\u4e2a\u5c0f\u65f6\u7684\u7b2c 5 \u5206\u949f\u81ea\u52a8\u8fd0\u884c\u7684\u7f51\u7edc\u5ef6\u8fdf\u6545\u969c\u3002\u66f4\u8be6\u7ec6\u7684\u8c03\u5ea6\u89c4\u5219\u5b9a\u4e49\uff0c\u8bf7\u53c2\u8003',
                        (0, l.jsx)(n.a, {
                          href: '/zh/docs/2.4.3/define-scheduling-rules',
                          children: '\u5b9a\u4e49\u8c03\u5ea6\u89c4\u5219',
                        }),
                        '\u3002',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(n.admonition, {
                      title: '\u6ce8\u610f',
                      type: 'caution',
                      children: (0, l.jsxs)(n.p, {
                        children: [
                          '\u5982\u679c\u4e0d\u8bbe\u7f6e ',
                          (0, l.jsx)(n.code, { children: 'duration' }),
                          ' \u53c2\u6570\uff0c\u8868\u793a\u6545\u969c\u884c\u4e3a\u4f1a\u4e00\u76f4\u6301\u7eed\u4e0b\u53bb\uff0c\u76f4\u5230\u6682\u505c\u6216\u8005\u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c\u3002',
                        ],
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, l.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, l.jsxs)(n.p, {
                      children: [
                        '\u4f7f\u7528 ',
                        (0, l.jsx)(n.code, { children: 'kubectl apply -f' }),
                        ' \u547d\u4ee4\u521b\u5efa\u5e76\u8fd0\u884c\u6df7\u6c8c\u5b9e\u9a8c\u3002',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(n.pre, {
                      children: (0, l.jsx)(n.code, {
                        className: 'language-yaml',
                        children: 'kubectl apply -f schedule-delay-example.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, l.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, l.jsx)(n.p, {
                      children:
                        '\u6df7\u6c8c\u5b9e\u9a8c\u5f00\u59cb\u540e\uff0c\u5982\u9700\u68c0\u67e5\u6df7\u6c8c\u5b9e\u9a8c\u7684\u8fd0\u884c\u60c5\u51b5\uff0c\u8bf7\u4f7f\u7528 kubectl describe \u547d\u4ee4\u67e5\u770b\u6b64\u6df7\u6c8c\u5b9e\u9a8c\u5bf9\u8c61\u7684 status \u6216\u8005 event\u3002',
                    }),
                    '\n',
                    (0, l.jsx)(n.pre, {
                      children: (0, l.jsx)(n.code, {
                        className: 'language-yaml',
                        children: 'kubectl describe networkchaos schedule-delay-example\n',
                      }),
                    }),
                    '\n',
                    (0, l.jsxs)(n.p, {
                      children: [
                        '\u8981\u4e86\u89e3\u8be6\u7ec6\u7684\u8fd0\u884c\u7ed3\u679c\u68c0\u67e5\u6b65\u9aa4\uff0c\u8bf7\u53c2\u8003',
                        (0, l.jsx)(n.a, {
                          href: '/zh/docs/2.4.3/inspect-chaos-experiments',
                          children: '\u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c',
                        }),
                        '\u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsx)(n.h2, {
              id: '\u6682\u505c\u6df7\u6c8c\u5b9e\u9a8c',
              children: '\u6682\u505c\u6df7\u6c8c\u5b9e\u9a8c',
            }),
            '\n',
            (0, l.jsx)(n.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u6682\u505c\u6216\u8005\u6062\u590d\u6df7\u6c8c\u5b9e\u9a8c',
              children: '\u4f7f\u7528\u547d\u4ee4\u6682\u505c\u6216\u8005\u6062\u590d\u6df7\u6c8c\u5b9e\u9a8c',
            }),
            '\n',
            (0, l.jsx)(n.p, {
              children:
                '\u5728\u6df7\u6c8c\u5b9e\u9a8c\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u5982\u9700\u6682\u505c\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u8bbe\u7f6e\u6682\u505c\u6ce8\u89e3\u3002',
            }),
            '\n',
            (0, l.jsxs)(n.p, {
              children: [
                '\u4f8b\u5982\uff0c\u8981\u6682\u505c\u9ed8\u8ba4\u547d\u540d\u7a7a\u95f4\u4e2d\u4e00\u4e2a\u540d\u4e3a ',
                (0, l.jsx)(n.code, { children: 'network-delay' }),
                ' \u7684\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a',
              ],
            }),
            '\n',
            (0, l.jsx)(n.pre, {
              children: (0, l.jsx)(n.code, {
                className: 'language-yaml',
                children: 'kubectl annotate networkchaos network-delay experiment.chaos-mesh.org/pause=true\n',
              }),
            }),
            '\n',
            (0, l.jsx)(n.p, {
              children:
                '\u6267\u884c\u6b64\u547d\u4ee4\u540e\uff0c\u6ce8\u5165\u7684\u6545\u969c\u4f1a\u88ab\u7acb\u523b\u6062\u590d\u3002\u5982\u679c\u60f3\u5c06\u6b64\u6df7\u6c8c\u5b9e\u9a8c\u4ece\u6682\u505c\u72b6\u6001\u4e2d\u6062\u590d\u5230\u6b63\u5e38\u6267\u884c\u72b6\u6001\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\uff1a',
            }),
            '\n',
            (0, l.jsx)(n.pre, {
              children: (0, l.jsx)(n.code, {
                className: 'language-yaml',
                children: 'kubectl annotate networkchaos network-delay experiment.chaos-mesh.org/pause-\n',
              }),
            }),
            '\n',
            (0, l.jsx)(n.h3, {
              id: '\u4f7f\u7528-dashboard-\u6682\u505c\u6216\u8005\u6062\u590d\u6df7\u6c8c\u5b9e\u9a8c',
              children: '\u4f7f\u7528 Dashboard \u6682\u505c\u6216\u8005\u6062\u590d\u6df7\u6c8c\u5b9e\u9a8c',
            }),
            '\n',
            (0, l.jsxs)(n.p, {
              children: [
                '\u5982\u679c\u4f60\u60f3\u901a\u8fc7 Dashboard \u6682\u505c\u6216\u8005\u6062\u590d\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u627e\u5230\u5bf9\u5e94\u7684\u6df7\u6c8c\u5b9e\u9a8c\u70b9\u51fb',
                (0, l.jsx)(n.strong, { children: '\u6682\u505c' }),
                '\u6216\u8005',
                (0, l.jsx)(n.strong, { children: '\u542f\u52a8' }),
                '\u6309\u94ae\u5373\u53ef\u3002',
              ],
            }),
            '\n',
            (0, l.jsx)(n.p, {
              children: (0, l.jsx)(n.img, {
                alt: 'Pause experiment',
                src: s(74450).A + '',
                width: '810',
                height: '390',
              }),
            }),
            '\n',
            (0, l.jsx)(n.p, {
              children: (0, l.jsx)(n.img, {
                alt: 'Restart experiment',
                src: s(24263).A + '',
                width: '792',
                height: '384',
              }),
            }),
            '\n',
            (0, l.jsx)(n.h2, {
              id: '\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c',
              children: '\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c',
            }),
            '\n',
            (0, l.jsx)(n.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c',
              children: '\u4f7f\u7528\u547d\u4ee4\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c',
            }),
            '\n',
            (0, l.jsxs)(n.p, {
              children: [
                '\u76ee\u524d\u6df7\u6c8c\u5b9e\u9a8c\u7684 ',
                (0, l.jsx)(n.code, { children: 'Spec' }),
                ' \u5b57\u6bb5\u4e0d\u5141\u8bb8\u88ab\u66f4\u65b0\u3002',
              ],
            }),
            '\n',
            (0, l.jsxs)(n.p, {
              children: [
                '\u66f4\u591a\u7ec6\u8282\uff0c\u8bf7\u53c2\u89c1\u5bf9\u5e94\u7684 ',
                (0, l.jsx)(n.a, {
                  href: 'https://github.com/chaos-mesh/chaos-mesh/issues/2227',
                  children: 'GitHub issue',
                }),
                '\u3002',
              ],
            }),
            '\n',
            (0, l.jsx)(n.h3, {
              id: '\u4f7f\u7528-dashboard-\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c',
              children: '\u4f7f\u7528 Dashboard \u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c',
            }),
            '\n',
            (0, l.jsxs)(n.p, {
              children: [
                '\u7531\u4e8e\u76ee\u524d\u6df7\u6c8c\u5b9e\u9a8c\u7684 ',
                (0, l.jsx)(n.code, { children: 'Spec' }),
                ' \u5b57\u6bb5\u4e0d\u5141\u8bb8\u88ab\u66f4\u65b0\uff0c\u6240\u4ee5 Dashboard \u6682\u4e0d\u652f\u6301\u66f4\u65b0\u6df7\u6c8c\u5b9e\u9a8c\u3002',
              ],
            }),
            '\n',
            (0, l.jsx)(n.h2, {
              id: '\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c',
              children: '\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c',
            }),
            '\n',
            (0, l.jsx)(n.h3, {
              id: '\u4f7f\u7528\u547d\u4ee4\u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c',
              children: '\u4f7f\u7528\u547d\u4ee4\u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c',
            }),
            '\n',
            (0, l.jsxs)(n.p, {
              children: [
                '\u7ed3\u675f\u6df7\u6c8c\u5b9e\u9a8c\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 ',
                (0, l.jsx)(n.code, { children: 'kubectl delete' }),
                ' \u547d\u4ee4\u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c\u3002\u6df7\u6c8c\u5b9e\u9a8c\u5220\u9664\u540e\uff0c\u6ce8\u5165\u7684\u6545\u969c\u4f1a\u88ab\u7acb\u523b\u6062\u590d\uff1a',
              ],
            }),
            '\n',
            (0, l.jsx)(n.pre, {
              children: (0, l.jsx)(n.code, {
                className: 'language-yaml',
                children:
                  'kubectl delete -f network-delay.yaml\n# or delete the chaos object directly\nkubectl delete networkchaos network-delay\n',
              }),
            }),
            '\n',
            (0, l.jsxs)(n.p, {
              children: [
                '\u5982\u679c\u5220\u9664\u64cd\u4f5c\u88ab\u963b\u585e\uff0c\u8fd9\u610f\u5473\u7740\u6709\u4e00\u4e9b\u76ee\u6807\u5bf9\u8c61\u7684\u6545\u969c\u884c\u4e3a\u65e0\u6cd5\u6062\u590d\u3002\u4f60\u53ef\u4ee5\u67e5\u770b Chaos Mesh \u7684\u65e5\u5fd7\u8fdb\u884c\u6545\u969c\u6392\u67e5\uff0c\u6216\u8005\u76f4\u63a5\u5728 GitHub \u521b\u5efa\u4e00\u4e2a ',
                (0, l.jsx)(n.a, { href: 'https://github.com/pingcap/chaos-mesh/issues', children: 'issue' }),
                ' \u5411 Chaos Mesh \u56e2\u961f\u53cd\u9988\u95ee\u9898\u3002\u6b64\u5916\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5f3a\u5236\u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c\uff1a',
              ],
            }),
            '\n',
            (0, l.jsx)(n.pre, {
              children: (0, l.jsx)(n.code, {
                className: 'language-yaml',
                children:
                  'kubectl annotate networkchaos web-show-network-delay chaos-mesh.chaos-mesh.org/cleanFinalizer=forced\n',
              }),
            }),
            '\n',
            (0, l.jsx)(n.h3, {
              id: '\u4f7f\u7528-dashboard-\u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c',
              children: '\u4f7f\u7528 Dashboard \u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c',
            }),
            '\n',
            (0, l.jsxs)(n.p, {
              children: [
                '\u5982\u679c\u4f60\u60f3\u8981\u5728 Dashboard \u4e0a\u5220\u9664\u6df7\u6c8c\u5b9e\u9a8c\u5e76\u5f52\u6863\u5230\u5386\u53f2\u8bb0\u5f55\u6c47\u603b\uff0c\u53ef\u4ee5\u70b9\u51fb\u5bf9\u5e94\u6df7\u6c8c\u5b9e\u9a8c\u7684',
                (0, l.jsx)(n.strong, { children: '\u5f52\u6863' }),
                '\u6309\u94ae\u3002',
              ],
            }),
            '\n',
            (0, l.jsx)(n.p, {
              children: (0, l.jsx)(n.img, {
                alt: 'Archive experiment',
                src: s(17158).A + '',
                width: '778',
                height: '386',
              }),
            }),
          ],
        })
      }
      function t(e = {}) {
        const { wrapper: n } = { ...(0, d.R)(), ...e.components }
        return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(o, { ...e }) }) : o(e)
      }
    },
    17158: (e, n, s) => {
      s.d(n, { A: () => c })
      const c = s.p + 'assets/images/archive_zh-355d825f771f6fb4c38a7bb1e262bc50.png'
    },
    74450: (e, n, s) => {
      s.d(n, { A: () => c })
      const c = s.p + 'assets/images/pause_zh-6d7840c05c346be38ab2e496c4dc9024.png'
    },
    24263: (e, n, s) => {
      s.d(n, { A: () => c })
      const c = s.p + 'assets/images/restart_zh-8ea5c8beed2093a53b2d735799e4644b.png'
    },
    28453: (e, n, s) => {
      s.d(n, { R: () => a, x: () => r })
      var c = s(96540)
      const l = {},
        d = c.createContext(l)
      function a(e) {
        const n = c.useContext(d)
        return c.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e }
          },
          [n, e]
        )
      }
      function r(e) {
        let n
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(l)
              : e.components || l
            : a(e.components)),
          c.createElement(d.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
