'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [3214],
  {
    86938: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => a,
          contentTitle: () => l,
          default: () => d,
          frontMatter: () => c,
          metadata: () => o,
          toc: () => r,
        })
      const o = JSON.parse(
        '{"id":"integrate-chaos-mesh-into-github-actions","title":"\u96c6\u6210 Chaos Mesh \u5230 GitHub Actions","description":"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 chaos-mesh-action \u5c06 Chaos Mesh \u96c6\u6210\u5230 CI \u4e2d\uff0c\u5e2e\u52a9\u4f60\u5728\u4ea7\u54c1\u53d1\u5e03\u524d\u53d1\u73b0\u5728\u7cfb\u7edf\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u5f15\u5165\u7684\u95ee\u9898\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/integrate-chaos-mesh-into-github-actions.md","sourceDirName":".","slug":"/integrate-chaos-mesh-into-github-actions","permalink":"/zh/docs/2.4.3/integrate-chaos-mesh-into-github-actions","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/integrate-chaos-mesh-into-github-actions.md","tags":[],"version":"2.4.3","frontMatter":{"title":"\u96c6\u6210 Chaos Mesh \u5230 GitHub Actions"},"sidebar":"docs","previous":{"title":"GCP \u8eab\u4efd\u9a8c\u8bc1\u63a5\u5165","permalink":"/zh/docs/2.4.3/gcp-authentication"},"next":{"title":"\u4f7f\u7528 Grafana Data Source \u63d2\u4ef6\u8fdb\u884c\u89c2\u6d4b","permalink":"/zh/docs/2.4.3/use-grafana-data-source"}}'
      )
      var i = s(74848),
        t = s(28453)
      const c = { title: '\u96c6\u6210 Chaos Mesh \u5230 GitHub Actions' },
        l = void 0,
        a = {},
        r = [
          { value: 'chaos-mesh-action \u7684\u8bbe\u8ba1', id: 'chaos-mesh-action-\u7684\u8bbe\u8ba1', level: 2 },
          {
            value: '\u5728 GitHub workflow \u4e2d\u4f7f\u7528 chaos-mesh-action',
            id: '\u5728-github-workflow-\u4e2d\u4f7f\u7528-chaos-mesh-action',
            level: 2,
          },
          { value: '\u7b2c 1 \u6b65\uff1a\u8bbe\u8ba1 workflow', id: '\u7b2c-1-\u6b65\u8bbe\u8ba1-workflow', level: 3 },
          { value: '\u7b2c 2 \u6b65\uff1a\u521b\u5efa workflow', id: '\u7b2c-2-\u6b65\u521b\u5efa-workflow', level: 3 },
          { value: '\u7b2c 3 \u6b65\uff1a\u8fd0\u884c workflow', id: '\u7b2c-3-\u6b65\u8fd0\u884c-workflow', level: 3 },
          { value: '\u63a2\u7d22\u66f4\u591a', id: '\u63a2\u7d22\u66f4\u591a', level: 2 },
        ]
      function h(e) {
        const n = {
          a: 'a',
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          img: 'img',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
          ul: 'ul',
          ...(0, t.R)(),
          ...e.components,
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n.p, {
              children:
                '\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 chaos-mesh-action \u5c06 Chaos Mesh \u96c6\u6210\u5230 CI \u4e2d\uff0c\u5e2e\u52a9\u4f60\u5728\u4ea7\u54c1\u53d1\u5e03\u524d\u53d1\u73b0\u5728\u7cfb\u7edf\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u5f15\u5165\u7684\u95ee\u9898\u3002',
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'chaos-mesh-action \u662f\u4e00\u4e2a GitHub action\uff0c\u5df2\u7ecf\u5728 ',
                (0, i.jsx)(n.a, {
                  href: 'https://github.com/marketplace/actions/chaos-mesh',
                  children: 'GitHub \u5e02\u573a',
                }),
                '\u4e0a\u53d1\u5e03\uff0c\u6e90\u4ee3\u7801\u4e5f\u5728 ',
                (0, i.jsx)(n.a, { href: 'https://github.com/chaos-mesh/chaos-mesh-action', children: 'GitHub' }),
                ' \u4e0a\u3002',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, {
              id: 'chaos-mesh-action-\u7684\u8bbe\u8ba1',
              children: 'chaos-mesh-action \u7684\u8bbe\u8ba1',
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                (0, i.jsx)(n.a, { href: 'https://docs.github.com/en/actions', children: 'GitHub Action' }),
                ' \u662f GitHub \u539f\u751f\u652f\u6301\u7684 CI/CD \u529f\u80fd\uff0c\u901a\u8fc7\u5b83\u4f60\u53ef\u4ee5\u8f7b\u677e\u5730\u5728 GitHub \u4ed3\u5e93\u4e2d\u6784\u5efa\u81ea\u52a8\u5316\u548c\u81ea\u5b9a\u4e49\u7684\u8f6f\u4ef6\u5f00\u53d1\u5de5\u4f5c\u6d41 (workflow)\u3002',
              ],
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                '\u7ed3\u5408 GitHub Action\uff0cChaos Mesh \u53ef\u4ee5\u66f4\u5bb9\u6613\u5730\u878d\u5165\u5230\u7cfb\u7edf\u7684\u65e5\u5e38\u5f00\u53d1\u548c\u6d4b\u8bd5\u4e2d\uff0c\u4ece\u800c\u4fdd\u8bc1\u6bcf\u6b21\u5728 GitHub \u4e0a\u63d0\u4ea4\u7684\u4ee3\u7801\u6ca1\u6709 bug\uff08\u81f3\u5c11\u53ef\u4ee5\u901a\u8fc7\u6d4b\u8bd5\uff09\uff0c\u4e0d\u4f1a\u7834\u574f\u73b0\u6709\u7684\u903b\u8f91\u3002 \u4e0b\u56fe\u663e\u793a\u4e86\u96c6\u6210\u5230 CI workflow \u4e2d\u7684 chaos-mesh-action\uff1a',
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.img, {
                alt: 'chaos-mesh-action-integrate-in-the-ci-workflow',
                src: s(60587).A + '',
                width: '698',
                height: '400',
              }),
            }),
            '\n',
            (0, i.jsx)(n.h2, {
              id: '\u5728-github-workflow-\u4e2d\u4f7f\u7528-chaos-mesh-action',
              children: '\u5728 GitHub workflow \u4e2d\u4f7f\u7528 chaos-mesh-action',
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'chaos-mesh-action \u7528\u4e8e Github workflow\u3002 GitHub workflow \u662f\u4e00\u4e2a\u53ef\u914d\u7f6e\u7684\u81ea\u52a8\u5316\u6d41\u7a0b\uff0c\u4f60\u53ef\u4ee5\u5728\u4f60\u7684\u4ed3\u5e93\u4e2d\u8bbe\u7f6e\u5b83\uff0c\u4ee5\u6784\u5efa\u3001\u6d4b\u8bd5\u3001\u6253\u5305\u3001\u53d1\u5e03\u6216\u90e8\u7f72\u4efb\u4f55 GitHub \u9879\u76ee\u3002 \u8981\u5c06 Chaos Mesh \u96c6\u6210\u5230\u4f60\u7684 CI \u4e2d\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a',
            }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsx)(n.li, { children: '\u7b2c 1 \u6b65\uff1a\u8bbe\u8ba1 workflow' }),
                '\n',
                (0, i.jsx)(n.li, { children: '\u7b2c 2 \u6b65\uff1a\u521b\u5efa workflow' }),
                '\n',
                (0, i.jsx)(n.li, { children: '\u7b2c 3 \u6b65\uff1a\u8fd0\u884c workflow' }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, {
              id: '\u7b2c-1-\u6b65\u8bbe\u8ba1-workflow',
              children: '\u7b2c 1 \u6b65\uff1a\u8bbe\u8ba1 workflow',
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                '\u5728\u8bbe\u8ba1 workflow \u4e4b\u524d\uff0c\u4f60\u5fc5\u987b\u8003\u8651\u4ee5\u4e0b\u95ee\u9898\uff1a',
            }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsx)(n.li, {
                  children: '\u8981\u5728\u6b64 workflow \u4e2d\u6d4b\u8bd5\u54ea\u4e9b\u529f\u80fd\uff1f',
                }),
                '\n',
                (0, i.jsx)(n.li, { children: '\u8981\u6ce8\u5165\u54ea\u4e9b\u7c7b\u578b\u7684\u6545\u969c\uff1f' }),
                '\n',
                (0, i.jsx)(n.li, { children: '\u5982\u4f55\u9a8c\u8bc1\u7cfb\u7edf\u7684\u6b63\u786e\u6027\uff1f' }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                '\u4f8b\u5982\uff0c\u8ba9\u6211\u4eec\u8bbe\u8ba1\u4e00\u4e2a\u7b80\u5355\u7684\u6d4b\u8bd5 workflow\uff0c\u5305\u62ec\u4ee5\u4e0b\u6b65\u9aa4\uff1a',
            }),
            '\n',
            (0, i.jsxs)(n.ol, {
              children: [
                '\n',
                (0, i.jsx)(n.li, {
                  children: '\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u521b\u5efa\u4e24\u4e2a Pod\u3002',
                }),
                '\n',
                (0, i.jsx)(n.li, { children: '\u4ece\u4e00\u4e2a Pod ping \u53e6\u4e00\u4e2a Pod\u3002' }),
                '\n',
                (0, i.jsx)(n.li, {
                  children:
                    '\u4f7f\u7528 Chaos Mesh \u6ce8\u5165\u7f51\u7edc\u5ef6\u8fdf\u6545\u969c\uff0c\u6d4b\u8bd5 ping \u547d\u4ee4\u662f\u5426\u6536\u5230\u5f71\u54cd\u3002',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, {
              id: '\u7b2c-2-\u6b65\u521b\u5efa-workflow',
              children: '\u7b2c 2 \u6b65\uff1a\u521b\u5efa workflow',
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                '\u5728\u8bbe\u8ba1\u597d workflow \u4e4b\u540e\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u521b\u5efa workflow\u3002',
            }),
            '\n',
            (0, i.jsxs)(n.ol, {
              children: [
                '\n',
                (0, i.jsx)(n.li, {
                  children: '\u5bfc\u822a\u5230\u8981\u6d4b\u8bd5\u8f6f\u4ef6\u7684 GitHub \u4ed3\u5e93\u3002',
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\u5f00\u59cb\u521b\u5efa workflow\uff0c\u70b9\u51fb ',
                    (0, i.jsx)(n.code, { children: 'Actions' }),
                    '\uff0c\u7136\u540e\u70b9\u51fb ',
                    (0, i.jsx)(n.code, { children: 'New workflow' }),
                    '\u3002',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.img, {
                alt: 'creating-a-workflow',
                src: s(23166).A + '',
                width: '1600',
                height: '396',
              }),
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'workflow \u672c\u8d28\u4e0a\u662f\u6309\u987a\u5e8f\u81ea\u52a8\u8fdb\u884c\u7684\u4f5c\u4e1a\u914d\u7f6e\u3002 \u8bf7\u6ce8\u610f\uff0c\u4ee5\u4e0b\u7684\u4f5c\u4e1a\uff08job\uff09\u662f\u5728\u5355\u4e2a\u6587\u4ef6\u4e2d\u914d\u7f6e\u7684\u3002 \u4e3a\u4e86\u66f4\u597d\u5730\u8bf4\u660e\uff0c\u672c\u6587\u5c06\u811a\u672c\u62c6\u5206\u4e3a\u4e0d\u540c\u7684\u4f5c\u4e1a\u7ec4\uff0c\u5982\u4e0b\u6240\u793a\uff1a',
            }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, { children: '\u8bbe\u7f6e workflow \u540d\u79f0\u548c\u89e6\u53d1\u89c4\u5219' }),
                    '\n',
                    (0, i.jsx)(n.p, {
                      children:
                        '\u5c06 workflow \u547d\u540d\u4e3a \u201cChaos\u201d\u3002 \u5f53\u4ee3\u7801\u63a8\u9001\u5230 master \u5206\u652f\u6216\u5411 master \u5206\u652f\u63d0\u4ea4 pull request \u65f6\uff0c\u4f1a\u89e6\u53d1\u6b64 workflow\u3002',
                    }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          'name: Chaos\n\non:\n  push:\n    branches:\n      - master\n  pull_request:\n    branches:\n      - master\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, { children: '\u5b89\u88c5 CI \u76f8\u5173\u7684\u73af\u5883' }),
                    '\n',
                    (0, i.jsx)(n.p, {
                      children:
                        '\u6b64\u914d\u7f6e\u6307\u5b9a\u64cd\u4f5c\u7cfb\u7edf (Ubuntu)\uff0c\u5e76\u4f7f\u7528 helm/kind-action \u521b\u5efa Kind \u96c6\u7fa4\u3002 \u7136\u540e\uff0c\u5b83\u8f93\u51fa\u96c6\u7fa4\u7684\u76f8\u5173\u4fe1\u606f\u3002\u6700\u540e\uff0c\u5b83\u4f1a\u68c0\u51fa\u8be5 workflow \u8981\u8bbf\u95ee\u7684 GitHub \u4ed3\u5e93\u3002',
                    }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          'jobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Creating kind cluster\n        uses: helm/kind-action@v1.0.0-rc.1\n\n      - name: Print cluster information\n        run: |\n          kubectl config view\n          kubectl cluster-info\n          kubectl get nodes\n          kubectl get pods -n kube-system\n          helm version\n          kubectl version\n\n      - uses: actions/checkout@v2\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, { children: '\u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f' }),
                    '\n',
                    (0, i.jsx)(n.p, {
                      children:
                        '\u5728\u4ee5\u4e0b\u793a\u4f8b\u4e2d\uff0c\u6b64 job \u90e8\u7f72\u4e86\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\uff0c\u5b83\u4f1a\u521b\u5efa\u4e24\u4e2a Kubernetes Pod\u3002',
                    }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          '- name: Deploy an application\n     run: |\n       kubectl apply -f https://raw.githubusercontent.com/chaos-mesh/apps/master/ping/busybox-statefulset.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, { children: '\u7528 Chaos Mesh \u6ce8\u5165\u6545\u969c' }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          '- name: Run chaos mesh action\n    uses: chaos-mesh/chaos-mesh-action@v0.5\n    env:\n      CHAOS_MESH_VERSION: v1.0.0\n      CFG_BASE64: YXBpVmVyc2lvbjogY2hhb3MtbWVzaC5vcmcvdjFhbHBoYTEKa2luZDogTmV0d29ya0NoYW9zCm1ldGFkYXRhOgogIG5hbWU6IG5ldHdvcmstZGVsYXkKICBuYW1lc3BhY2U6IGJ1c3lib3gKc3BlYzoKICBhY3Rpb246IGRlbGF5ICMgdGhlIHNwZWNpZmljIGNoYW9zIGFjdGlvbiB0byBpbmplY3QKICBtb2RlOiBhbGwKICBzZWxlY3RvcjoKICAgIHBvZHM6CiAgICAgIGJ1c3lib3g6CiAgICAgICAgLSBidXN5Ym94LTAKICBkZWxheToKICAgIGxhdGVuY3k6ICIxMG1zIgogIGR1cmF0aW9uOiAiNXMiCiAgc2NoZWR1bGVyOgogICAgY3JvbjogIkBldmVyeSAxMHMiCiAgZGlyZWN0aW9uOiB0bwogIHRhcmdldDoKICAgIHNlbGVjdG9yOgogICAgICBwb2RzOgogICAgICAgIGJ1c3lib3g6CiAgICAgICAgICAtIGJ1c3lib3gtMQogICAgbW9kZTogYWxsCg==\n',
                      }),
                    }),
                    '\n',
                    (0, i.jsx)(n.p, {
                      children:
                        '\u901a\u8fc7 chaos-mesh-action\uff0cChaos Mesh \u7684\u5b89\u88c5\u548c\u6545\u969c\u7684\u6ce8\u5165\u4f1a\u81ea\u52a8\u5b8c\u6210\u3002\u4f60\u53ea\u9700\u8981\u51c6\u5907\u597d\u6df7\u6c8c\u5b9e\u9a8c\u7684\u914d\u7f6e\uff0c\u5e76\u83b7\u53d6\u5b83\u7684 Base64 \u503c\u3002\u5982\u679c\u60f3\u7ed9 Pod \u6ce8\u5165\u7f51\u7edc\u5ef6\u8fdf\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u793a\u4f8b\u914d\u7f6e\uff1a',
                    }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: network-delay\n  namespace: busybox\nspec:\n  action: delay # the specific chaos action to inject\n  mode: all\n  selector:\n    pods:\n      busybox:\n        - busybox-0\n  delay:\n    latency: '10ms'\n  duration: '5s'\n  scheduler:\n    cron: '@every 10s'\n  direction: to\n  target:\n    selector:\n      pods:\n        busybox:\n          - busybox-1\n    mode: all\n",
                      }),
                    }),
                    '\n',
                    (0, i.jsx)(n.p, {
                      children:
                        '\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u83b7\u53d6\u4e0a\u8ff0\u6df7\u6c8c\u5b9e\u9a8c\u914d\u7f6e\u6587\u4ef6\u7684 Base64 \u503c\uff1a',
                    }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, { className: 'language-bash', children: 'base64 chaos.yaml\n' }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, { children: '\u9a8c\u8bc1\u7cfb\u7edf\u6b63\u786e\u6027' }),
                    '\n',
                    (0, i.jsx)(n.p, {
                      children:
                        '\u5728\u6b64 job \u4e2d\uff0cworkflow \u4ece\u4e00\u4e2a Pod \u4e2d ping \u53e6\u4e00\u4e2a Pod\u3002\u8bf7\u89c2\u5bdf\u7f51\u7edc\u5ef6\u8fdf\u7684\u53d8\u5316\u3002',
                    }),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          '- name: Verify\n     run: |\n       echo "do some verification"\n       kubectl exec busybox-0 -it -n busybox -- ping -c 30 busybox-1.busybox.busybox.svc\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, {
              id: '\u7b2c-3-\u6b65\u8fd0\u884c-workflow',
              children: '\u7b2c 3 \u6b65\uff1a\u8fd0\u884c workflow',
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                '\u521b\u5efa\u597d workflow \u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u5411 master \u5206\u652f\u63d0\u4ea4 pull request \u6765\u89e6\u53d1\u5b83\u3002workflow \u8fd0\u884c\u5b8c\u6210\u540e\uff0c\u9a8c\u8bc1 job \u4e2d\u8f93\u51fa\u7684\u7ed3\u679c\u7c7b\u4f3c\u4e8e\u4ee5\u4e0b\u5185\u5bb9\uff1a',
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-log',
                children:
                  'do some verification\nUnable to use a TTY - input is not a terminal or the right kind of file\nPING busybox-1.busybox.busybox.svc (10.244.0.6): 56 data bytes\n64 bytes from 10.244.0.6: seq=0 ttl=63 time=0.069 ms\n64 bytes from 10.244.0.6: seq=1 ttl=63 time=10.136 ms\n64 bytes from 10.244.0.6: seq=2 ttl=63 time=10.192 ms\n64 bytes from 10.244.0.6: seq=3 ttl=63 time=10.129 ms\n64 bytes from 10.244.0.6: seq=4 ttl=63 time=10.120 ms\n64 bytes from 10.244.0.6: seq=5 ttl=63 time=0.070 ms\n64 bytes from 10.244.0.6: seq=6 ttl=63 time=0.073 ms\n64 bytes from 10.244.0.6: seq=7 ttl=63 time=0.111 ms\n64 bytes from 10.244.0.6: seq=8 ttl=63 time=0.070 ms\n64 bytes from 10.244.0.6: seq=9 ttl=63 time=0.077 ms\n\u2026\u2026\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                '\u8f93\u51fa\u663e\u793a\u4e86\u4e00\u8fde\u4e32\u7684 10 \u6beb\u79d2\u5ef6\u8fdf\uff0c\u6bcf\u6b21\u5ef6\u8fdf\u5927\u7ea6 5 \u79d2\uff08\u4e5f\u5c31\u662f 5 \u6b21\uff09\u3002 \u8fd9\u4e0e\u6211\u4eec\u4f7f\u7528 chaos-mesh-action \u6ce8\u5165\u7684\u7684\u6df7\u6c8c\u5b9e\u9a8c\u914d\u7f6e\u4e00\u81f4\u3002',
            }),
            '\n',
            (0, i.jsx)(n.h2, { id: '\u63a2\u7d22\u66f4\u591a', children: '\u63a2\u7d22\u66f4\u591a' }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                '\u76ee\u524d chaos-mesh-action \u5df2\u7ecf\u5e94\u7528\u4e8e ',
                (0, i.jsx)(n.a, { href: 'https://github.com/pingcap/tidb-operator', children: 'TiDB Operator' }),
                ' \u9879\u76ee\uff0c\u53ef\u4ee5\u5728 workflow \u4e2d\u6ce8\u5165 Pod \u6545\u969c\u7528\u4e8e\u9a8c\u8bc1 Operator \u5b9e\u4f8b\u7684\u91cd\u542f\u529f\u80fd\u3002 \u76ee\u7684\u662f\u4e3a\u4e86\u4fdd\u8bc1\u5728\u6ce8\u5165\u7684\u6545\u969c\u968f\u673a\u5220\u9664 Operator \u7684 Pod \u65f6\uff0cTiDB Operator \u80fd\u591f\u6b63\u5e38\u5de5\u4f5c\u3002 \u66f4\u591a\u8be6\u60c5\u53ef\u4ee5\u67e5\u770b ',
                (0, i.jsx)(n.a, {
                  href: 'https://github.com/pingcap/tidb-operator/actions?query=workflow%3Achaos',
                  children: 'TiDB Operator \u9875\u9762',
                }),
                '\u3002',
              ],
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                '\u672a\u6765\uff0cchaos-mesh-action \u5c06\u88ab\u5e94\u7528\u5230 TiDB \u66f4\u591a\u7684\u6d4b\u8bd5\u4e2d\uff0c\u4ee5\u4fdd\u8bc1 TiDB \u53ca\u76f8\u5173\u7ec4\u4ef6\u7684\u7a33\u5b9a\u6027\u3002 \u6b22\u8fce\u4f7f\u7528 chaos-mesh-action \u521b\u5efa\u81ea\u5df1\u7684 workflow\u3002',
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                '\u5982\u679c\u4f60\u53d1\u73b0\u9519\u8bef\uff0c\u6216\u8005\u8ba4\u4e3a\u7f3a\u5c11\u67d0\u4e9b\u5185\u5bb9\uff0c\u8bf7\u968f\u65f6\u63d0\u4ea4 ',
                (0, i.jsx)(n.a, { href: 'https://github.com/pingcap/chaos-mesh/issues', children: 'issue' }),
                '\u3001',
                (0, i.jsx)(n.a, {
                  href: 'https://github.com/chaos-mesh/chaos-mesh/pulls',
                  children: 'pull request(PR)',
                }),
                '\uff0c\u6216\u52a0\u5165\u6211\u4eec\u7684 ',
                (0, i.jsx)(n.a, { href: 'https://www.cncf.io/', children: 'CNCF' }),
                ' slack \u5de5\u4f5c\u533a\u4e2d\u7684 ',
                (0, i.jsx)(n.a, { href: 'https://slack.cncf.io/', children: '#project-chaos-mesh' }),
                ' \u9891\u9053\u3002',
              ],
            }),
          ],
        })
      }
      function d(e = {}) {
        const { wrapper: n } = { ...(0, t.R)(), ...e.components }
        return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e)
      }
    },
    60587: (e, n, s) => {
      s.d(n, { A: () => o })
      const o =
        s.p + 'assets/images/chaos-mesh-action-integrate-in-the-ci-workflow-c4fc76db3f8293ea144832cc24f3c232.png'
    },
    23166: (e, n, s) => {
      s.d(n, { A: () => o })
      const o = s.p + 'assets/images/creating-a-workflow-17c7622de0400b1cf0d0bd091a1c0561.png'
    },
    28453: (e, n, s) => {
      s.d(n, { R: () => c, x: () => l })
      var o = s(96540)
      const i = {},
        t = o.createContext(i)
      function c(e) {
        const n = o.useContext(t)
        return o.useMemo(
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
            : c(e.components)),
          o.createElement(t.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
