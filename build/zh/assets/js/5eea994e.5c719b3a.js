'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [647],
  {
    25381: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => a,
          contentTitle: () => o,
          default: () => t,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => i,
        })
      const l = JSON.parse(
        '{"id":"uninstallation","title":"\u5378\u8f7d Chaos Mesh","description":"\u8fd9\u7bc7\u6587\u6863\u4ecb\u7ecd\u4e86\u5982\u4f55\u5378\u8f7d Chaos Mesh\uff0c\u5305\u62ec\u4f7f\u7528 Helm \u5378\u8f7d Chaos Mesh \u548c\u624b\u52a8\u5378\u8f7d Chaos Mesh\u3002\u5982\u679c\u4f60\u9700\u8981\u4ece Kubernetes \u96c6\u7fa4\u4e2d\u624b\u52a8\u6e05\u9664 Chaos Mesh\uff0c\u8fd9\u7bc7\u6587\u6863\u4e5f\u662f\u975e\u5e38\u6709\u7528\u7684\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/uninstallation.md","sourceDirName":".","slug":"/uninstallation","permalink":"/zh/docs/next/uninstallation","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/current/uninstallation.md","tags":[],"version":"current","frontMatter":{"title":"\u5378\u8f7d Chaos Mesh"},"sidebar":"docs","previous":{"title":"\u6301\u4e45\u5316 Chaos Dashboard \u6570\u636e","permalink":"/zh/docs/next/persistence-dashboard"},"next":{"title":"\u7ba1\u7406\u7528\u6237\u6743\u9650","permalink":"/zh/docs/next/manage-user-permissions"}}'
      )
      var h = n(74848),
        c = n(28453)
      const r = { title: '\u5378\u8f7d Chaos Mesh' },
        o = void 0,
        a = {},
        i = [
          {
            value: '\u901a\u8fc7 Helm \u5378\u8f7d Chaos Mesh',
            id: '\u901a\u8fc7-helm-\u5378\u8f7d-chaos-mesh',
            level: 2,
          },
          {
            value: '\u7b2c 1 \u6b65\uff1a\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c',
            id: '\u7b2c-1-\u6b65\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c',
            level: 3,
          },
          {
            value: '\u7b2c 2 \u6b65\uff1a\u67e5\u770b Helm Release',
            id: '\u7b2c-2-\u6b65\u67e5\u770b-helm-release',
            level: 3,
          },
          {
            value: '\u7b2c 3 \u6b65\uff1a\u5220\u9664 Helm Release',
            id: '\u7b2c-3-\u6b65\u5220\u9664-helm-release',
            level: 3,
          },
          { value: '\u7b2c 4 \u6b65\uff1a\u5220\u9664 CRDs', id: '\u7b2c-4-\u6b65\u5220\u9664-crds', level: 3 },
          { value: '\u624b\u52a8\u5378\u8f7d Chaos Mesh', id: '\u624b\u52a8\u5378\u8f7d-chaos-mesh', level: 2 },
          {
            value: '\u7b2c 1 \u6b65\uff1a\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c',
            id: '\u7b2c-1-\u6b65\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c-1',
            level: 3,
          },
          {
            value: '\u7b2c 2 \u6b65\uff1a\u5220\u9664 Chaos Mesh \u5de5\u4f5c\u8d1f\u8f7d',
            id: '\u7b2c-2-\u6b65\u5220\u9664-chaos-mesh-\u5de5\u4f5c\u8d1f\u8f7d',
            level: 3,
          },
          {
            value: '\u7b2c 3 \u6b65\uff1a\u5220\u9664 Chaos Mesh RBAC \u5bf9\u8c61',
            id: '\u7b2c-3-\u6b65\u5220\u9664-chaos-mesh-rbac-\u5bf9\u8c61',
            level: 3,
          },
          {
            value: '\u7b2c 4 \u6b65\uff1a\u5220\u9664 ConfigMaps \u548c Secrets',
            id: '\u7b2c-4-\u6b65\u5220\u9664-configmaps-\u548c-secrets',
            level: 3,
          },
          { value: '\u7b2c 5 \u6b65\uff1a\u5220\u9664 Webhook', id: '\u7b2c-5-\u6b65\u5220\u9664-webhook', level: 3 },
          { value: 'Step 6: \u5220\u9664 CRDs', id: 'step-6-\u5220\u9664-crds', level: 3 },
        ]
      function d(e) {
        const s = {
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          p: 'p',
          pre: 'pre',
          ul: 'ul',
          ...(0, c.R)(),
          ...e.components,
        }
        return (0, h.jsxs)(h.Fragment, {
          children: [
            (0, h.jsx)(s.p, {
              children:
                '\u8fd9\u7bc7\u6587\u6863\u4ecb\u7ecd\u4e86\u5982\u4f55\u5378\u8f7d Chaos Mesh\uff0c\u5305\u62ec\u4f7f\u7528 Helm \u5378\u8f7d Chaos Mesh \u548c\u624b\u52a8\u5378\u8f7d Chaos Mesh\u3002\u5982\u679c\u4f60\u9700\u8981\u4ece Kubernetes \u96c6\u7fa4\u4e2d\u624b\u52a8\u6e05\u9664 Chaos Mesh\uff0c\u8fd9\u7bc7\u6587\u6863\u4e5f\u662f\u975e\u5e38\u6709\u7528\u7684\u3002',
            }),
            '\n',
            (0, h.jsx)(s.h2, {
              id: '\u901a\u8fc7-helm-\u5378\u8f7d-chaos-mesh',
              children: '\u901a\u8fc7 Helm \u5378\u8f7d Chaos Mesh',
            }),
            '\n',
            (0, h.jsx)(s.h3, {
              id: '\u7b2c-1-\u6b65\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c',
              children: '\u7b2c 1 \u6b65\uff1a\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c',
            }),
            '\n',
            (0, h.jsx)(s.p, {
              children:
                '\u5728\u5378\u8f7d Chaos Mesh \u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u6240\u6709\u7684\u6df7\u6c8c\u5b9e\u9a8c\u90fd\u5df2\u88ab\u5220\u9664\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u67e5\u770b\u6df7\u6c8c\u5b9e\u9a8c\u76f8\u5173\u7684\u5bf9\u8c61\uff1a',
            }),
            '\n',
            (0, h.jsx)(s.pre, {
              children: (0, h.jsx)(s.code, {
                className: 'language-shell',
                children:
                  "for i in $(kubectl api-resources | grep chaos-mesh | awk '{print $1}'); do kubectl get $i -A; done\n",
              }),
            }),
            '\n',
            (0, h.jsx)(s.p, {
              children:
                '\u4e00\u65e6\u786e\u4fdd\u6240\u6709\u7684\u6df7\u6c8c\u5b9e\u9a8c\u90fd\u5df2\u88ab\u5220\u9664\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5378\u8f7d Chaos Mesh\uff1a',
            }),
            '\n',
            (0, h.jsx)(s.h3, {
              id: '\u7b2c-2-\u6b65\u67e5\u770b-helm-release',
              children: '\u7b2c 2 \u6b65\uff1a\u67e5\u770b Helm Release',
            }),
            '\n',
            (0, h.jsx)(s.p, {
              children:
                '\u4f60\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u67e5\u770b\u5df2\u5b89\u88c5\u7684 Helm Release\uff1a',
            }),
            '\n',
            (0, h.jsx)(s.pre, {
              children: (0, h.jsx)(s.code, { className: 'language-shell', children: 'helm list -A\n' }),
            }),
            '\n',
            (0, h.jsx)(s.p, { children: '\u8f93\u51fa\u5e94\u8be5\u50cf\u4e0b\u9762\u8fd9\u6837\uff1a' }),
            '\n',
            (0, h.jsx)(s.pre, {
              children: (0, h.jsx)(s.code, {
                className: 'language-text',
                children:
                  'NAME                    NAMESPACE       REVISION        UPDATED                                 STATUS          CHART                   APP VERSION\nchaos-mesh-playground   chaos-mesh      1               2021-12-01 22:58:18.037052401 +0800 CST deployed        chaos-mesh-2.1.0        2.1.0\n',
              }),
            }),
            '\n',
            (0, h.jsxs)(s.p, {
              children: [
                '\u8fd9\u8868\u793a\u4e00\u4e2a\u540d\u4e3a ',
                (0, h.jsx)(s.code, { children: 'chaos-mesh-playground' }),
                ' \u7684 Helm Release \u5df2\u7ecf\u5b89\u88c5\u5728\u547d\u540d\u7a7a\u95f4 ',
                (0, h.jsx)(s.code, { children: 'chaos-mesh' }),
                ' \u4e2d\uff0c\u6240\u4ee5\u8fd9\u91cc\u662f\u5c06\u8981\u5378\u8f7d\u7684 Helm Release\u3002',
              ],
            }),
            '\n',
            (0, h.jsx)(s.h3, {
              id: '\u7b2c-3-\u6b65\u5220\u9664-helm-release',
              children: '\u7b2c 3 \u6b65\uff1a\u5220\u9664 Helm Release',
            }),
            '\n',
            (0, h.jsx)(s.p, {
              children:
                '\u5728\u786e\u8ba4\u76ee\u6807 Helm Release \u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5220\u9664 Helm Release\uff1a',
            }),
            '\n',
            (0, h.jsx)(s.pre, {
              children: (0, h.jsx)(s.code, {
                className: 'language-shell',
                children: 'helm uninstall chaos-mesh-playground -n chaos-mesh\n',
              }),
            }),
            '\n',
            (0, h.jsx)(s.h3, {
              id: '\u7b2c-4-\u6b65\u5220\u9664-crds',
              children: '\u7b2c 4 \u6b65\uff1a\u5220\u9664 CRDs',
            }),
            '\n',
            (0, h.jsxs)(s.p, {
              children: [
                (0, h.jsx)(s.code, { children: 'helm uninstall' }),
                ' \u4e0d\u4f1a\u5220\u9664 CRDs\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u624b\u52a8\u5220\u9664\u5b83\u4eec\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a',
              ],
            }),
            '\n',
            (0, h.jsx)(s.pre, {
              children: (0, h.jsx)(s.code, {
                className: 'language-shell',
                children: "kubectl delete crd $(kubectl get crd | grep 'chaos-mesh.org' | awk '{print $1}')\n",
              }),
            }),
            '\n',
            (0, h.jsx)(s.h2, {
              id: '\u624b\u52a8\u5378\u8f7d-chaos-mesh',
              children: '\u624b\u52a8\u5378\u8f7d Chaos Mesh',
            }),
            '\n',
            (0, h.jsxs)(s.p, {
              children: [
                '\u5982\u679c\u4f60\u901a\u8fc7\u811a\u672c ',
                (0, h.jsx)(s.code, { children: 'install.sh' }),
                ' \u5b89\u88c5\u4e86 Chaos Mesh\uff0c\u6216\u8005\u4f60\u4fee\u6539\u4e86 Chaos Mesh \u7684\u914d\u7f6e\u548c\u7ec4\u4ef6\uff0c\u6216\u8005\u4f60\u9047\u5230\u4e86\u5378\u8f7d Chaos Mesh \u65f6\u7684\u95ee\u9898\uff0c\u8fd9\u91cc\u662f\u4e00\u4e9b\u624b\u52a8\u5378\u8f7d Chaos Mesh \u7684\u65b9\u6cd5\u3002',
              ],
            }),
            '\n',
            (0, h.jsx)(s.h3, {
              id: '\u7b2c-1-\u6b65\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c-1',
              children: '\u7b2c 1 \u6b65\uff1a\u6e05\u7406\u6df7\u6c8c\u5b9e\u9a8c',
            }),
            '\n',
            (0, h.jsx)(s.p, {
              children:
                '\u5728\u5378\u8f7d Chaos Mesh \u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u6240\u6709\u7684\u6df7\u6c8c\u5b9e\u9a8c\u90fd\u5df2\u88ab\u5220\u9664\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u67e5\u770b\u6df7\u6c8c\u5b9e\u9a8c\u76f8\u5173\u7684\u5bf9\u8c61\uff1a',
            }),
            '\n',
            (0, h.jsx)(s.pre, {
              children: (0, h.jsx)(s.code, {
                className: 'language-shell',
                children:
                  "for i in $(kubectl api-resources | grep chaos-mesh | awk '{print $1}'); do kubectl get $i -A; done\n",
              }),
            }),
            '\n',
            (0, h.jsx)(s.p, {
              children:
                '\u4e00\u65e6\u786e\u4fdd\u6240\u6709\u7684\u6df7\u6c8c\u5b9e\u9a8c\u90fd\u5df2\u88ab\u5220\u9664\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5378\u8f7d Chaos Mesh\uff1a',
            }),
            '\n',
            (0, h.jsx)(s.h3, {
              id: '\u7b2c-2-\u6b65\u5220\u9664-chaos-mesh-\u5de5\u4f5c\u8d1f\u8f7d',
              children: '\u7b2c 2 \u6b65\uff1a\u5220\u9664 Chaos Mesh \u5de5\u4f5c\u8d1f\u8f7d',
            }),
            '\n',
            (0, h.jsx)(s.p, {
              children: '\u901a\u5e38 Chaos Mesh \u4f1a\u5b89\u88c5\u591a\u79cd\u7c7b\u578b\u7684\u7ec4\u4ef6\uff1a',
            }),
            '\n',
            (0, h.jsxs)(s.ul, {
              children: [
                '\n',
                (0, h.jsxs)(s.li, {
                  children: [
                    '\u4e00\u4e2a\u540d\u4e3a ',
                    (0, h.jsx)(s.code, { children: 'chaos-controller-manager' }),
                    ' \u7684 ',
                    (0, h.jsx)(s.code, { children: 'Deployment' }),
                    '\uff0c\u5b83\u662f Chaos Mesh \u7684\u63a7\u5236\u5668/\u8c03\u8282\u5668\u3002',
                  ],
                }),
                '\n',
                (0, h.jsxs)(s.li, {
                  children: [
                    '\u4e00\u4e2a\u540d\u4e3a ',
                    (0, h.jsx)(s.code, { children: 'chaos-daemon' }),
                    ' \u7684 ',
                    (0, h.jsx)(s.code, { children: 'DaemonSet' }),
                    '\uff0c\u5b83\u662f\u6bcf\u4e2a Kubernetes \u5de5\u4f5c\u8282\u70b9\u4e0a\u7684 Chaos Mesh \u7684\u4ee3\u7406\u3002',
                  ],
                }),
                '\n',
                (0, h.jsxs)(s.li, {
                  children: [
                    '\u4e00\u4e2a\u540d\u4e3a ',
                    (0, h.jsx)(s.code, { children: 'chaos-dashboard' }),
                    ' \u7684 ',
                    (0, h.jsx)(s.code, { children: 'Deployment' }),
                    '\uff0c\u5b83\u662f Chaos Mesh \u7684 WebUI\u3002',
                  ],
                }),
                '\n',
                (0, h.jsxs)(s.li, {
                  children: [
                    '\u4e00\u4e2a\u540d\u4e3a ',
                    (0, h.jsx)(s.code, { children: 'chaos-dns-server' }),
                    ' \u7684 ',
                    (0, h.jsx)(s.code, { children: 'Deployment' }),
                    '\uff0c\u5b83\u662f DNS \u4ee3\u7406\u670d\u52a1\u5668\uff0c\u53ea\u6709\u5f53\u4f60\u542f\u7528\u4e86 DNSChaos \u7279\u6027\u65f6\u624d\u4f1a\u51fa\u73b0\u3002',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, h.jsx)(s.p, {
              children: '\u4f60\u5e94\u8be5\u5220\u9664\u8fd9\u4e9b\u5de5\u4f5c\u8d1f\u8f7d\u5bf9\u8c61\u3002',
            }),
            '\n',
            (0, h.jsxs)(s.p, {
              children: [
                '\u7136\u540e\u5220\u9664\u5b83\u4eec\u7684\u5bf9\u5e94\u7684 ',
                (0, h.jsx)(s.code, { children: 'Service' }),
                '\uff1a',
              ],
            }),
            '\n',
            (0, h.jsxs)(s.ul, {
              children: [
                '\n',
                (0, h.jsx)(s.li, { children: 'chaos-daemon' }),
                '\n',
                (0, h.jsx)(s.li, { children: 'chaos-dashboard' }),
                '\n',
                (0, h.jsx)(s.li, { children: 'chaos-mesh-controller-manager' }),
                '\n',
                (0, h.jsx)(s.li, { children: 'chaos-mesh-dns-server' }),
                '\n',
              ],
            }),
            '\n',
            (0, h.jsx)(s.h3, {
              id: '\u7b2c-3-\u6b65\u5220\u9664-chaos-mesh-rbac-\u5bf9\u8c61',
              children: '\u7b2c 3 \u6b65\uff1a\u5220\u9664 Chaos Mesh RBAC \u5bf9\u8c61',
            }),
            '\n',
            (0, h.jsx)(s.p, { children: 'Chaos Mesh \u4f1a\u5b89\u88c5\u591a\u4e2a RBAC \u5bf9\u8c61\uff1a' }),
            '\n',
            (0, h.jsxs)(s.ul, {
              children: [
                '\n',
                (0, h.jsxs)(s.li, {
                  children: [
                    'ClusterRoleBinding',
                    '\n',
                    (0, h.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, h.jsx)(s.li, { children: 'chaos-mesh-playground-chaos-controller-manager-cluster-level' }),
                        '\n',
                        (0, h.jsx)(s.li, {
                          children: 'chaos-mesh-playground-chaos-controller-manager-target-namespace',
                        }),
                        '\n',
                        (0, h.jsx)(s.li, { children: 'chaos-mesh-playground-chaos-dns-server-cluster-level' }),
                        '\n',
                        (0, h.jsx)(s.li, { children: 'chaos-mesh-playground-chaos-dns-server-target-namespace' }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, h.jsxs)(s.li, {
                  children: [
                    'ClusterRole',
                    '\n',
                    (0, h.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, h.jsx)(s.li, { children: 'chaos-mesh-playground-chaos-controller-manager-cluster-level' }),
                        '\n',
                        (0, h.jsx)(s.li, {
                          children: 'chaos-mesh-playground-chaos-controller-manager-target-namespace',
                        }),
                        '\n',
                        (0, h.jsx)(s.li, { children: 'chaos-mesh-playground-chaos-dns-server' }),
                        '\n',
                        (0, h.jsx)(s.li, { children: 'chaos-mesh-playground-chaos-dns-server-cluster-level' }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, h.jsxs)(s.li, {
                  children: [
                    'RoleBinding',
                    '\n',
                    (0, h.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, h.jsx)(s.li, { children: 'chaos-mesh-playground-chaos-controller-manager-control-plane' }),
                        '\n',
                        (0, h.jsx)(s.li, { children: 'chaos-mesh-playground-chaos-dns-server-control-plane' }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, h.jsxs)(s.li, {
                  children: [
                    'Role',
                    '\n',
                    (0, h.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, h.jsx)(s.li, { children: 'chaos-mesh-playground-chaos-controller-manager-control-plane' }),
                        '\n',
                        (0, h.jsx)(s.li, { children: 'chaos-mesh-playground-chaos-dns-server-control-plane' }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, h.jsxs)(s.li, {
                  children: [
                    'ServiceAccount',
                    '\n',
                    (0, h.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, h.jsx)(s.li, { children: 'chaos-controller-manager' }),
                        '\n',
                        (0, h.jsx)(s.li, { children: 'chaos-daemon' }),
                        '\n',
                        (0, h.jsx)(s.li, { children: 'chaos-dns-server' }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, h.jsx)(s.p, { children: '\u4f60\u5e94\u8be5\u5220\u9664\u8fd9\u4e9b RBAC \u5bf9\u8c61\u3002' }),
            '\n',
            (0, h.jsx)(s.h3, {
              id: '\u7b2c-4-\u6b65\u5220\u9664-configmaps-\u548c-secrets',
              children: '\u7b2c 4 \u6b65\uff1a\u5220\u9664 ConfigMaps \u548c Secrets',
            }),
            '\n',
            (0, h.jsx)(s.p, { children: 'Chaos Mesh \u4f1a\u5b89\u88c5\u591a\u4e2a ConfigMaps \u548c Secrets\uff1a' }),
            '\n',
            (0, h.jsxs)(s.ul, {
              children: [
                '\n',
                (0, h.jsxs)(s.li, {
                  children: [
                    'ConfigMap',
                    '\n',
                    (0, h.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, h.jsx)(s.li, { children: 'chaos-mesh' }),
                        '\n',
                        (0, h.jsx)(s.li, { children: 'dns-server-config' }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, h.jsxs)(s.li, {
                  children: [
                    'Secret',
                    '\n',
                    (0, h.jsxs)(s.ul, {
                      children: ['\n', (0, h.jsx)(s.li, { children: 'chaos-mesh-webhook-certs' }), '\n'],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, h.jsx)(s.p, {
              children: '\u4f60\u5e94\u8be5\u5220\u9664\u8fd9\u4e9b ConfigMaps \u548c Secrets \u5bf9\u8c61\u3002',
            }),
            '\n',
            (0, h.jsx)(s.h3, {
              id: '\u7b2c-5-\u6b65\u5220\u9664-webhook',
              children: '\u7b2c 5 \u6b65\uff1a\u5220\u9664 Webhook',
            }),
            '\n',
            (0, h.jsx)(s.p, { children: 'Chaos Mesh \u4f1a\u5b89\u88c5\u591a\u4e2a Webhook\uff1a' }),
            '\n',
            (0, h.jsxs)(s.ul, {
              children: [
                '\n',
                (0, h.jsxs)(s.li, {
                  children: [
                    'ValidatingWebhookConfigurations',
                    '\n',
                    (0, h.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, h.jsx)(s.li, { children: 'chaos-mesh-validation' }),
                        '\n',
                        (0, h.jsx)(s.li, { children: 'chaos-mesh-validate-auth' }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, h.jsxs)(s.li, {
                  children: [
                    'MutatingWebhookConfigurations',
                    '\n',
                    (0, h.jsxs)(s.ul, {
                      children: ['\n', (0, h.jsx)(s.li, { children: 'chaos-mesh-mutation' }), '\n'],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, h.jsx)(s.p, { children: '\u4f60\u5e94\u8be5\u5220\u9664\u8fd9\u4e9b Webhooks\u3002' }),
            '\n',
            (0, h.jsx)(s.h3, { id: 'step-6-\u5220\u9664-crds', children: 'Step 6: \u5220\u9664 CRDs' }),
            '\n',
            (0, h.jsx)(s.p, {
              children:
                '\u6700\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5220\u9664 CRDs\uff1a',
            }),
            '\n',
            (0, h.jsx)(s.pre, {
              children: (0, h.jsx)(s.code, {
                className: 'language-shell',
                children: "kubectl delete crd $(kubectl get crd | grep 'chaos-mesh.org' | awk '{print $1}')\n",
              }),
            }),
          ],
        })
      }
      function t(e = {}) {
        const { wrapper: s } = { ...(0, c.R)(), ...e.components }
        return s ? (0, h.jsx)(s, { ...e, children: (0, h.jsx)(d, { ...e }) }) : d(e)
      }
    },
    28453: (e, s, n) => {
      n.d(s, { R: () => r, x: () => o })
      var l = n(96540)
      const h = {},
        c = l.createContext(h)
      function r(e) {
        const s = l.useContext(c)
        return l.useMemo(
          function () {
            return 'function' == typeof e ? e(s) : { ...s, ...e }
          },
          [s, e]
        )
      }
      function o(e) {
        let s
        return (
          (s = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(h)
              : e.components || h
            : r(e.components)),
          l.createElement(c.Provider, { value: s }, e.children)
        )
      }
    },
  },
])
