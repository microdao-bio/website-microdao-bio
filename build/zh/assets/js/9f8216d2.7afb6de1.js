'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [1875],
  {
    52032: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => r,
          contentTitle: () => c,
          default: () => t,
          frontMatter: () => o,
          metadata: () => d,
          toc: () => h,
        })
      const d = JSON.parse(
        '{"id":"simulate-pod-chaos-on-kubernetes","title":"\u6a21\u62df Pod \u6545\u969c","description":"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaos Mesh \u4e3a Kubernetes Pod \u6ce8\u5165\u6545\u969c\uff0c\u6a21\u62df Pod \u6216\u5bb9\u5668\u6545\u969c\uff0c\u5e76\u63d0\u4f9b Chaos Dashboard \u548c YAML \u6587\u4ef6\u4e24\u79cd\u65b9\u5f0f\u7528\u4e8e\u521b\u5efa PodChaos \u5b9e\u9a8c\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/simulate-pod-chaos-on-kubernetes.md","sourceDirName":".","slug":"/simulate-pod-chaos-on-kubernetes","permalink":"/zh/docs/next/simulate-pod-chaos-on-kubernetes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/current/simulate-pod-chaos-on-kubernetes.md","tags":[],"version":"current","frontMatter":{"title":"\u6a21\u62df Pod \u6545\u969c"},"sidebar":"docs","previous":{"title":"\u5728\u5de5\u4f5c\u6d41\u4e2d\u8fdb\u884c\u72b6\u6001\u68c0\u67e5","permalink":"/zh/docs/next/status-check-in-workflow"},"next":{"title":"\u6a21\u62df\u7f51\u7edc\u6545\u969c","permalink":"/zh/docs/next/simulate-network-chaos-on-kubernetes"}}'
      )
      var l = s(74848),
        i = s(28453)
      const o = { title: '\u6a21\u62df Pod \u6545\u969c' },
        c = void 0,
        r = {},
        h = [
          { value: 'PodChaos \u4ecb\u7ecd', id: 'podchaos-\u4ecb\u7ecd', level: 2 },
          { value: '\u4f7f\u7528\u9650\u5236', id: '\u4f7f\u7528\u9650\u5236', level: 2 },
          { value: '\u6ce8\u610f\u4e8b\u9879', id: '\u6ce8\u610f\u4e8b\u9879', level: 2 },
          {
            value: '\u4f7f\u7528 Chaos Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            id: '\u4f7f\u7528-chaos-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            level: 2,
          },
          {
            value: '\u4f7f\u7528 YAML \u914d\u7f6e\u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c',
            id: '\u4f7f\u7528-yaml-\u914d\u7f6e\u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c',
            level: 2,
          },
          { value: 'pod-failure \u793a\u4f8b', id: 'pod-failure-\u793a\u4f8b', level: 3 },
          { value: 'pod-kill \u793a\u4f8b', id: 'pod-kill-\u793a\u4f8b', level: 3 },
          { value: 'container-kill \u793a\u4f8b', id: 'container-kill-\u793a\u4f8b', level: 3 },
          { value: '\u5b57\u6bb5\u8bf4\u660e', id: '\u5b57\u6bb5\u8bf4\u660e', level: 3 },
          {
            value: '\u201cPod Failure\u201d \u6df7\u6c8c\u5b9e\u9a8c\u7684\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9879',
            id: 'pod-failure-\u6df7\u6c8c\u5b9e\u9a8c\u7684\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9879',
            level: 2,
          },
        ]
      function a(e) {
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
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(n.p, {
              children:
                '\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaos Mesh \u4e3a Kubernetes Pod \u6ce8\u5165\u6545\u969c\uff0c\u6a21\u62df Pod \u6216\u5bb9\u5668\u6545\u969c\uff0c\u5e76\u63d0\u4f9b Chaos Dashboard \u548c YAML \u6587\u4ef6\u4e24\u79cd\u65b9\u5f0f\u7528\u4e8e\u521b\u5efa PodChaos \u5b9e\u9a8c\u3002',
            }),
            '\n',
            (0, l.jsx)(n.h2, { id: 'podchaos-\u4ecb\u7ecd', children: 'PodChaos \u4ecb\u7ecd' }),
            '\n',
            (0, l.jsx)(n.p, {
              children:
                'PodChaos \u662f Chaos Mesh \u4e2d\u7684\u4e00\u79cd\u6545\u969c\u7c7b\u578b\uff0c\u901a\u8fc7\u521b\u5efa PodChaos \u7c7b\u578b\u7684\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4f60\u53ef\u4ee5\u6a21\u62df\u6307\u5b9a Pod \u6216\u8005\u5bb9\u5668\u53d1\u751f\u6545\u969c\u7684\u60c5\u666f\u3002\u76ee\u524d\uff0cPodChaos \u652f\u6301\u6a21\u62df\u4ee5\u4e0b\u6545\u969c\u7c7b\u578b\uff1a',
            }),
            '\n',
            (0, l.jsxs)(n.ul, {
              children: [
                '\n',
                (0, l.jsx)(n.li, {
                  children:
                    'Pod Failure\uff1a\u5411\u6307\u5b9a\u7684 Pod \u4e2d\u6ce8\u5165\u6545\u969c\uff0c\u4f7f\u5f97\u8be5 Pod \u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u5904\u4e8e\u4e0d\u53ef\u7528\u7684\u72b6\u6001\u3002',
                }),
                '\n',
                (0, l.jsx)(n.li, {
                  children:
                    'Pod Kill\uff1a\u6740\u6b7b\u6307\u5b9a\u7684 Pod \u3002\u4e3a\u4e86\u4fdd\u8bc1 Pod \u80fd\u591f\u6210\u529f\u91cd\u542f\uff0c\u9700\u8981\u914d\u7f6e ReplicaSet \u6216\u8005\u7c7b\u4f3c\u7684\u673a\u5236\u3002',
                }),
                '\n',
                (0, l.jsx)(n.li, {
                  children:
                    'Container Kill\uff1a\u6740\u6b7b\u4f4d\u4e8e\u76ee\u6807 Pod \u4e2d\u7684\u6307\u5b9a\u5bb9\u5668\u3002',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsx)(n.h2, { id: '\u4f7f\u7528\u9650\u5236', children: '\u4f7f\u7528\u9650\u5236' }),
            '\n',
            (0, l.jsx)(n.p, {
              children:
                'Chaos Mesh \u53ef\u4ee5\u5411\u4efb\u4e00 Pod \u6ce8\u5165 PodChaos\uff0c\u65e0\u8bba\u5176 Pod \u662f\u5426\u7ed1\u5b9a\u81f3 Deployment\uff0cStatefulSet\uff0cDaemonSet \u6216\u5176\u4ed6\u63a7\u5236\u5668\u3002\u7136\u800c\uff0c\u5f53\u5411\u72ec\u7acb\u7684 Pod \u6ce8\u5165 PodChaos \u65f6\uff0c\u53ef\u80fd\u4f1a\u5f15\u8d77\u4e0d\u540c\u7684\u60c5\u51b5\u3002\u6bd4\u5982\uff0c\u5411\u72ec\u7acb\u7684 Pod \u6ce8\u5165 "pod-kill" \u6df7\u6c8c\u65f6\uff0c\u65e0\u6cd5\u4fdd\u8bc1\u5e94\u7528\u7a0b\u5e8f\u5728\u6545\u969c\u53d1\u751f\u540e\u80fd\u591f\u6062\u590d\u6b63\u5e38\u3002',
            }),
            '\n',
            (0, l.jsx)(n.h2, { id: '\u6ce8\u610f\u4e8b\u9879', children: '\u6ce8\u610f\u4e8b\u9879' }),
            '\n',
            (0, l.jsx)(n.p, {
              children:
                '\u521b\u5efa PodChaos \u5b9e\u9a8c\u524d\uff0c\u8bf7\u786e\u4fdd\u4ee5\u4e0b\u4e8b\u9879\uff1a',
            }),
            '\n',
            (0, l.jsxs)(n.ul, {
              children: [
                '\n',
                (0, l.jsx)(n.li, {
                  children: '\u76ee\u6807 Pod \u4e0a\u6ca1\u6709\u8fd0\u884c Chaos Mesh \u7684 Control Manager\u3002',
                }),
                '\n',
                (0, l.jsx)(n.li, {
                  children:
                    '\u5982\u679c\u6545\u969c\u7c7b\u578b\u4e3a Pod Kill\uff0c\u914d\u7f6e\u4e86 ReplicaSet \u6216\u8005\u7c7b\u4f3c\u4fdd\u8bc1 Pod \u80fd\u591f\u81ea\u52a8\u91cd\u542f\u7684\u673a\u5236\u3002',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsx)(n.h2, {
              id: '\u4f7f\u7528-chaos-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
              children: '\u4f7f\u7528 Chaos Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            }),
            '\n',
            (0, l.jsxs)(n.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: [
                (0, l.jsx)(n.p, {
                  children: '\u5728\u4f7f\u7528 Chaos Dashboard \u521b\u5efa\u5b9e\u9a8c\u524d\uff1a',
                }),
                (0, l.jsxs)(n.ul, {
                  children: [
                    '\n',
                    (0, l.jsxs)(n.li, {
                      children: [
                        '\n',
                        (0, l.jsx)(n.p, {
                          children: '\u786e\u4fdd\u5df2\u7ecf\u5b89\u88c5\u4e86 Chaos Dashboard\u3002',
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
                            '\u5982\u679c\u5df2\u5b89\u88c5 Chaos Dashboard\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c ',
                            (0, l.jsx)(n.code, { children: 'kubectl port-forward' }),
                            ' \u547d\u4ee4\u7684\u65b9\u5f0f\u8bbf\u95ee Dashboard\uff1a',
                          ],
                        }),
                        '\n',
                        (0, l.jsx)(n.pre, {
                          children: (0, l.jsx)(n.code, {
                            className: 'language-bash',
                            children: 'kubectl port-forward -n chaos-mesh svc/chaos-dashboard 2333:2333\n',
                          }),
                        }),
                        '\n',
                        (0, l.jsxs)(n.p, {
                          children: [
                            '\u7136\u540e\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165 ',
                            (0, l.jsx)(n.a, {
                              href: 'http://localhost:2333',
                              children: (0, l.jsx)(n.code, { children: 'http://localhost:2333' }),
                            }),
                            ' \u8bbf\u95ee Chaos Dashboard\u3002',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
              ],
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
                        '\u5355\u51fb\u5b9e\u9a8c\u9875\u9762\u4e2d\u7684',
                        (0, l.jsx)(n.strong, { children: '\u65b0\u7684\u5b9e\u9a8c' }),
                        '\u6309\u94ae\u521b\u5efa\u5b9e\u9a8c\u3002',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(n.p, {
                      children: (0, l.jsx)(n.img, { alt: 'img', src: s(87219).A + '', width: '832', height: '438' }),
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
                        '\u5728',
                        (0, l.jsx)(n.strong, { children: '\u9009\u62e9\u76ee\u6807' }),
                        '\u5904\u9009\u62e9 ',
                        (0, l.jsx)(n.strong, { children: 'POD \u6545\u969c' }),
                        '\uff0c\u5e76\u9009\u62e9\u5177\u4f53\u884c\u4e3a\uff0c\u4f8b\u5982 ',
                        (0, l.jsx)(n.strong, { children: 'POD FAILURE' }),
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
                    (0, l.jsx)(n.p, {
                      children:
                        '\u586b\u5199\u5b9e\u9a8c\u4fe1\u606f\uff0c\u6307\u5b9a\u5b9e\u9a8c\u8303\u56f4\u4ee5\u53ca\u5b9e\u9a8c\u8ba1\u5212\u8fd0\u884c\u65f6\u95f4\u3002',
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, l.jsxs)(n.li, {
                  children: ['\n', (0, l.jsx)(n.p, { children: '\u63d0\u4ea4\u5b9e\u9a8c\u3002' }), '\n'],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsx)(n.h2, {
              id: '\u4f7f\u7528-yaml-\u914d\u7f6e\u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c',
              children: '\u4f7f\u7528 YAML \u914d\u7f6e\u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c',
            }),
            '\n',
            (0, l.jsx)(n.h3, { id: 'pod-failure-\u793a\u4f8b', children: 'pod-failure \u793a\u4f8b' }),
            '\n',
            (0, l.jsxs)(n.ol, {
              children: [
                '\n',
                (0, l.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, l.jsxs)(n.p, {
                      children: [
                        '\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6\u4e2d ',
                        (0, l.jsx)(n.code, { children: 'pod-failure.yaml' }),
                        '\uff0c\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(n.pre, {
                      children: (0, l.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: pod-failure-example\n  namespace: chaos-mesh\nspec:\n  action: pod-failure\n  mode: one\n  duration: '30s'\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n",
                      }),
                    }),
                    '\n',
                    (0, l.jsxs)(n.p, {
                      children: [
                        '\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411\u6307\u5b9a\u7684 Pod \u4e2d\u6ce8\u5165 ',
                        (0, l.jsx)(n.code, { children: 'pod-failure' }),
                        ' \u6545\u969c\uff0c\u5c06\u4f7f\u8be5 Pod \u5728 30 \u79d2\u5185\u5904\u4e8e\u4e0d\u53ef\u7528\u7684\u72b6\u6001\u3002',
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
                        (0, l.jsx)(n.code, { children: 'kubectl' }),
                        ' \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(n.pre, {
                      children: (0, l.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f ./pod-failure.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsx)(n.h3, { id: 'pod-kill-\u793a\u4f8b', children: 'pod-kill \u793a\u4f8b' }),
            '\n',
            (0, l.jsxs)(n.ol, {
              children: [
                '\n',
                (0, l.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, l.jsxs)(n.p, {
                      children: [
                        '\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6\u4e2d ',
                        (0, l.jsx)(n.code, { children: 'pod-kill.yaml' }),
                        '\uff0c\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(n.pre, {
                      children: (0, l.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: pod-kill-example\n  namespace: chaos-mesh\nspec:\n  action: pod-kill\n  mode: one\n  selector:\n    namespaces:\n      - tidb-cluster-demo\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n",
                      }),
                    }),
                    '\n',
                    (0, l.jsxs)(n.p, {
                      children: [
                        '\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411\u6307\u5b9a\u7684 Pod \u4e2d\u6ce8\u5165 ',
                        (0, l.jsx)(n.code, { children: 'pod-kill' }),
                        ' \u6545\u969c\uff0c\u5c06\u4f7f\u8be5 Pod \u88ab\u6740\u6b7b\u4e00\u6b21\u3002',
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
                        (0, l.jsx)(n.code, { children: 'kubectl' }),
                        ' \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(n.pre, {
                      children: (0, l.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f ./pod-kill.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsx)(n.h3, { id: 'container-kill-\u793a\u4f8b', children: 'container-kill \u793a\u4f8b' }),
            '\n',
            (0, l.jsxs)(n.ol, {
              children: [
                '\n',
                (0, l.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, l.jsxs)(n.p, {
                      children: [
                        '\u5c06\u5b9e\u9a8c\u914d\u7f6e\u5199\u5165\u5230\u6587\u4ef6\u4e2d ',
                        (0, l.jsx)(n.code, { children: 'container-kill.yaml' }),
                        '\uff0c\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\uff1a',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(n.pre, {
                      children: (0, l.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: container-kill-example\n  namespace: chaos-mesh\nspec:\n  action: container-kill\n  mode: one\n  containerNames: ['prometheus']\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'monitor'\n",
                      }),
                    }),
                    '\n',
                    (0, l.jsxs)(n.p, {
                      children: [
                        '\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411\u6307\u5b9a\u7684 Container \u4e2d\u6ce8\u5165 ',
                        (0, l.jsx)(n.code, { children: 'container-kill' }),
                        ' \u6545\u969c\uff0c\u5c06\u4f7f\u8be5 Container \u88ab\u6740\u6b7b\u4e00\u6b21\u3002',
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
                        (0, l.jsx)(n.code, { children: 'kubectl' }),
                        ' \u521b\u5efa\u5b9e\u9a8c\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(n.pre, {
                      children: (0, l.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f ./container-kill.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsx)(n.h3, { id: '\u5b57\u6bb5\u8bf4\u660e', children: '\u5b57\u6bb5\u8bf4\u660e' }),
            '\n',
            (0, l.jsx)(n.p, {
              children:
                '\u4e0b\u8868\u4ecb\u7ecd\u4ee5\u4e0a YAML \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u5b57\u6bb5\u3002',
            }),
            '\n',
            (0, l.jsxs)(n.table, {
              children: [
                (0, l.jsx)(n.thead, {
                  children: (0, l.jsxs)(n.tr, {
                    children: [
                      (0, l.jsx)(n.th, { children: '\u53c2\u6570' }),
                      (0, l.jsx)(n.th, { children: '\u7c7b\u578b' }),
                      (0, l.jsx)(n.th, { children: '\u8bf4\u660e' }),
                      (0, l.jsx)(n.th, { children: '\u9ed8\u8ba4\u503c' }),
                      (0, l.jsx)(n.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                      (0, l.jsx)(n.th, { children: '\u793a\u4f8b' }),
                    ],
                  }),
                }),
                (0, l.jsxs)(n.tbody, {
                  children: [
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: 'action' }),
                        (0, l.jsx)(n.td, { children: 'string' }),
                        (0, l.jsxs)(n.td, {
                          children: [
                            '\u6307\u5b9a\u8981\u6ce8\u5165\u7684\u6545\u969c\u7c7b\u578b\uff0c\u4ec5\u652f\u6301 ',
                            (0, l.jsx)(n.code, { children: 'pod-failure' }),
                            '\u3001',
                            (0, l.jsx)(n.code, { children: 'pod-kill' }),
                            '\u3001',
                            (0, l.jsx)(n.code, { children: 'container-kill' }),
                          ],
                        }),
                        (0, l.jsx)(n.td, { children: '\u65e0' }),
                        (0, l.jsx)(n.td, { children: '\u662f' }),
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: 'pod-kill' }) }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: 'mode' }),
                        (0, l.jsx)(n.td, { children: 'string' }),
                        (0, l.jsxs)(n.td, {
                          children: [
                            '\u6307\u5b9a\u5b9e\u9a8c\u7684\u8fd0\u884c\u65b9\u5f0f\uff0c\u53ef\u9009\u62e9\u7684\u65b9\u5f0f\u5305\u62ec\uff1a',
                            (0, l.jsx)(n.code, { children: 'one' }),
                            '\uff08\u8868\u793a\u968f\u673a\u9009\u51fa\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001',
                            (0, l.jsx)(n.code, { children: 'all' }),
                            '\uff08\u8868\u793a\u9009\u51fa\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001',
                            (0, l.jsx)(n.code, { children: 'fixed' }),
                            '\uff08\u8868\u793a\u9009\u51fa\u6307\u5b9a\u6570\u91cf\u4e14\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001',
                            (0, l.jsx)(n.code, { children: 'fixed-percent' }),
                            '\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09\u3001',
                            (0, l.jsx)(n.code, { children: 'random-max-percent' }),
                            '\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u4e0d\u8d85\u8fc7\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09',
                          ],
                        }),
                        (0, l.jsx)(n.td, { children: '\u65e0' }),
                        (0, l.jsx)(n.td, { children: '\u662f' }),
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: 'one' }) }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: 'value' }),
                        (0, l.jsx)(n.td, { children: 'string' }),
                        (0, l.jsxs)(n.td, {
                          children: [
                            '\u53d6\u51b3\u4e0e ',
                            (0, l.jsx)(n.code, { children: 'mode' }),
                            ' \u7684\u914d\u7f6e\uff0c\u4e3a ',
                            (0, l.jsx)(n.code, { children: 'mode' }),
                            ' \u63d0\u4f9b\u5bf9\u5e94\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u5f53\u4f60\u5c06 ',
                            (0, l.jsx)(n.code, { children: 'mode' }),
                            ' \u914d\u7f6e\u4e3a ',
                            (0, l.jsx)(n.code, { children: 'fixed-percent' }),
                            ' \u65f6\uff0c',
                            (0, l.jsx)(n.code, { children: 'value' }),
                            ' \u7528\u4e8e\u6307\u5b9a Pod \u7684\u767e\u5206\u6bd4\u3002',
                          ],
                        }),
                        (0, l.jsx)(n.td, { children: '\u65e0' }),
                        (0, l.jsx)(n.td, { children: '\u5426' }),
                        (0, l.jsx)(n.td, { children: '1' }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: 'selector' }),
                        (0, l.jsx)(n.td, { children: 'struct' }),
                        (0, l.jsxs)(n.td, {
                          children: [
                            '\u6307\u5b9a\u6ce8\u5165\u6545\u969c\u7684\u76ee\u6807 Pod\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003',
                            (0, l.jsx)(n.a, {
                              href: '/zh/docs/next/define-chaos-experiment-scope',
                              children: '\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4',
                            }),
                          ],
                        }),
                        (0, l.jsx)(n.td, { children: '\u65e0' }),
                        (0, l.jsx)(n.td, { children: '\u662f' }),
                        (0, l.jsx)(n.td, {}),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: 'containerNames' }),
                        (0, l.jsx)(n.td, { children: '[]string' }),
                        (0, l.jsxs)(n.td, {
                          children: [
                            '\u5f53\u4f60\u5c06 ',
                            (0, l.jsx)(n.code, { children: 'action' }),
                            ' \u914d\u7f6e\u4e3a ',
                            (0, l.jsx)(n.code, { children: 'container-kill' }),
                            ' \u65f6\uff0c\u6b64\u914d\u7f6e\u4e3a\u5fc5\u586b\uff0c\u7528\u4e8e\u6307\u5b9a\u6ce8\u5165\u6545\u969c\u7684\u76ee\u6807 container \u540d',
                          ],
                        }),
                        (0, l.jsx)(n.td, { children: '\u65e0' }),
                        (0, l.jsx)(n.td, { children: '\u5426' }),
                        (0, l.jsx)(n.td, { children: "['prometheus']" }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: 'gracePeriod' }),
                        (0, l.jsx)(n.td, { children: 'int64' }),
                        (0, l.jsxs)(n.td, {
                          children: [
                            '\u5f53\u4f60\u5c06 ',
                            (0, l.jsx)(n.code, { children: 'action' }),
                            ' \u914d\u7f6e\u4e3a ',
                            (0, l.jsx)(n.code, { children: 'pod-kill' }),
                            ' \u65f6\uff0c\u9700\u8981\u586b\u5199\u6b64\u9879\uff0c\u7528\u4e8e\u6307\u5b9a\u5220\u9664 Pod \u4e4b\u524d\u7684\u6301\u7eed\u65f6\u95f4',
                          ],
                        }),
                        (0, l.jsx)(n.td, { children: '0' }),
                        (0, l.jsx)(n.td, { children: '\u5426' }),
                        (0, l.jsx)(n.td, { children: '0' }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: 'duration' }),
                        (0, l.jsx)(n.td, { children: 'string' }),
                        (0, l.jsx)(n.td, { children: '\u6307\u5b9a\u5b9e\u9a8c\u7684\u6301\u7eed\u65f6\u95f4' }),
                        (0, l.jsx)(n.td, { children: '\u65e0' }),
                        (0, l.jsx)(n.td, { children: '\u662f' }),
                        (0, l.jsx)(n.td, { children: '30s' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsx)(n.h2, {
              id: 'pod-failure-\u6df7\u6c8c\u5b9e\u9a8c\u7684\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9879',
              children: '\u201cPod Failure\u201d \u6df7\u6c8c\u5b9e\u9a8c\u7684\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9879',
            }),
            '\n',
            (0, l.jsx)(n.p, {
              children:
                '\u7b80\u8a00\u4e4b\uff0c\u8fd9\u91cc\u6709\u51e0\u4e2a\u5173\u4e8e\u4f7f\u7528 "Pod Failure" \u6df7\u6c8c\u5b9e\u9a8c\u7684\u5efa\u8bae\uff1a',
            }),
            '\n',
            (0, l.jsxs)(n.ul, {
              children: [
                '\n',
                (0, l.jsx)(n.li, {
                  children:
                    '\u5982\u679c\u4f60\u6b63\u5728\u8fd0\u884c\u4e00\u4e2a\u6c14\u9699\u6216\u7f51\u7edc\u9694\u79bb\u7684 Kubernetes \u96c6\u7fa4\uff0c\u8bf7\u66f4\u6362\u4e00\u4e2a\u53ef\u7528\u7684 "pause image"\u3002',
                }),
                '\n',
                (0, l.jsxs)(n.li, {
                  children: [
                    '\u4e3a\u5bb9\u5668\u914d\u7f6e ',
                    (0, l.jsx)(n.code, { children: 'livenessProbe' }),
                    ' \u548c ',
                    (0, l.jsx)(n.code, { children: 'readinessProbe' }),
                    '\u3002',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsxs)(n.p, {
              children: [
                'Pod Failure \u6df7\u6c8c\u5b9e\u9a8c\u5c06\u4f1a\u6539\u53d8\u76ee\u6807 Pod \u4e2d\u6bcf\u4e2a\u5bb9\u5668\u7684 ',
                (0, l.jsx)(n.code, { children: 'image' }),
                ' \u4e3a "pause image"\uff0c\u8fd9\u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u955c\u50cf\uff0c\u4e0d\u4f1a\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\u3002\u6211\u4eec\u4f7f\u7528 ',
                (0, l.jsx)(n.code, { children: 'gcr.io/google-containers/pause:latest' }),
                ' \u4f5c\u4e3a\u9ed8\u8ba4\u7684 "pause image"\uff0c\u4f60\u53ef\u4ee5\u5728 helm values ',
                (0, l.jsx)(n.code, { children: 'controllerManager.podChaos.podFailure.pauseImage' }),
                ' \u4e2d\u66f4\u6539\u5b83\u3002',
              ],
            }),
            '\n',
            (0, l.jsx)(n.p, {
              children:
                '\u4e0b\u8f7d "pause image" \u5c06\u4f1a\u6d88\u8017\u65f6\u95f4\uff0c\u5e76\u4e14\u8fd9\u4e2a\u65f6\u95f4\u5c06\u4f1a\u88ab\u8ba1\u5165\u5b9e\u9a8c\u7684\u6301\u7eed\u65f6\u95f4\u4e2d\u3002\u6240\u4ee5\u4f60\u53ef\u80fd\u4f1a\u53d1\u73b0\uff0c"\u5b9e\u9645\u53d7\u5f71\u54cd\u7684\u65f6\u95f4" \u53ef\u80fd\u4f1a\u6bd4\u914d\u7f6e\u7684\u65f6\u95f4\u77ed\u3002\u8fd9\u662f\u63a8\u8350\u8bbe\u7f6e\u53ef\u7528\u7684 "pause image" \u7684\u53e6\u4e00\u4e2a\u539f\u56e0\u3002',
            }),
            '\n',
            (0, l.jsxs)(n.p, {
              children: [
                '\u53e6\u5916\u4e00\u4e2a\u8ff7\u60d1\u7684\u70b9\u662f\uff0c"pause image" \u53ef\u4ee5\u5728\u672a\u914d\u7f6e ',
                (0, l.jsx)(n.code, { children: 'command' }),
                ' \u7684\u5bb9\u5668\u4e2d\u6b63\u5e38\u5de5\u4f5c\u3002\u6240\u4ee5\uff0c\u5982\u679c\u5bb9\u5668\u672a\u914d\u7f6e ',
                (0, l.jsx)(n.code, { children: 'command' }),
                '\uff0c',
                (0, l.jsx)(n.code, { children: 'livenessProbe' }),
                ' \u548c ',
                (0, l.jsx)(n.code, { children: 'readinessProbe' }),
                '\uff0c\u5b83\u5c06\u4f1a\u88ab\u89c6\u4e3a ',
                (0, l.jsx)(n.code, { children: 'Running' }),
                ' \u548c ',
                (0, l.jsx)(n.code, { children: 'Ready' }),
                '\uff0c\u5373\u4f7f\u5b83\u5df2\u7ecf\u88ab\u6539\u53d8\u4e3a "pause image"\uff0c\u5e76\u4e14\u5b9e\u9645\u4e0a\u4e0d\u63d0\u4f9b\u6b63\u5e38\u529f\u80fd\uff0c \u6216\u8005\u88ab\u89c6\u4e3a\u4e0d\u53ef\u7528\u3002\u6240\u4ee5\u5efa\u8bae\u4e3a\u5bb9\u5668\u914d\u7f6e ',
                (0, l.jsx)(n.code, { children: 'livenessProbe' }),
                ' \u548c ',
                (0, l.jsx)(n.code, { children: 'readinessProbe' }),
                '\u3002',
              ],
            }),
          ],
        })
      }
      function t(e = {}) {
        const { wrapper: n } = { ...(0, i.R)(), ...e.components }
        return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(a, { ...e }) }) : a(e)
      }
    },
    87219: (e, n, s) => {
      s.d(n, { A: () => d })
      const d = s.p + 'assets/images/create-pod-chaos-on-dashboard-1_zh-8061597bd8deaadfedc8abf3a3685266.jpg'
    },
    28453: (e, n, s) => {
      s.d(n, { R: () => o, x: () => c })
      var d = s(96540)
      const l = {},
        i = d.createContext(l)
      function o(e) {
        const n = d.useContext(i)
        return d.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e }
          },
          [n, e]
        )
      }
      function c(e) {
        let n
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(l)
              : e.components || l
            : o(e.components)),
          d.createElement(i.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
