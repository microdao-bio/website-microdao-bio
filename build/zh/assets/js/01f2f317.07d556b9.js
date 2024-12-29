'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [843],
  {
    15774: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => i,
          contentTitle: () => t,
          default: () => h,
          frontMatter: () => r,
          metadata: () => a,
          toc: () => o,
        })
      const a = JSON.parse(
        '{"id":"configure-enabled-namespace","title":"\u914d\u7f6e\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4","description":"\u672c\u7bc7\u6587\u7ae0\u63cf\u8ff0\u5982\u4f55\u914d\u7f6e\u6df7\u6c8c\u5b9e\u9a8c\u53ea\u5728\u6307\u5b9a\u7684\u547d\u540d\u7a7a\u95f4\u5185\u751f\u6548\uff0c\u5176\u4ed6\u672a\u914d\u7f6e\u7684\u547d\u4ee4\u7a7a\u95f4\u5219\u4f1a\u53d7\u5230\u4fdd\u62a4\u4e0d\u4f1a\u88ab\u6545\u969c\u6ce8\u5165\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/configure-enabled-namespace.md","sourceDirName":".","slug":"/configure-enabled-namespace","permalink":"/zh/docs/next/configure-enabled-namespace","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/current/configure-enabled-namespace.md","tags":[],"version":"current","frontMatter":{"title":"\u914d\u7f6e\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4"},"sidebar":"docs","previous":{"title":"\u7ba1\u7406\u7528\u6237\u6743\u9650","permalink":"/zh/docs/next/manage-user-permissions"},"next":{"title":"\u8fdc\u7a0b\u96c6\u7fa4\u7ba1\u7406","permalink":"/zh/docs/next/remote-cluster-management"}}'
      )
      var c = s(74848),
        l = s(28453)
      const r = { title: '\u914d\u7f6e\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4' },
        t = void 0,
        i = {},
        o = [
          {
            value: '\u63a7\u5236\u6df7\u6c8c\u5b9e\u9a8c\u751f\u6548\u7684\u8303\u56f4',
            id: '\u63a7\u5236\u6df7\u6c8c\u5b9e\u9a8c\u751f\u6548\u7684\u8303\u56f4',
            level: 2,
          },
          {
            value: '\u5f00\u542f FilterNamespace \u529f\u80fd',
            id: '\u5f00\u542f-filternamespace-\u529f\u80fd',
            level: 2,
          },
          {
            value: '\u4e3a\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4\u6dfb\u52a0\u6ce8\u89e3',
            id: '\u4e3a\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4\u6dfb\u52a0\u6ce8\u89e3',
            level: 2,
          },
          {
            value: '\u67e5\u770b\u6240\u6709\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4',
            id: '\u67e5\u770b\u6240\u6709\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4',
            level: 2,
          },
        ]
      function d(e) {
        const n = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          li: 'li',
          p: 'p',
          pre: 'pre',
          ul: 'ul',
          ...(0, l.R)(),
          ...e.components,
        }
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(n.p, {
              children:
                '\u672c\u7bc7\u6587\u7ae0\u63cf\u8ff0\u5982\u4f55\u914d\u7f6e\u6df7\u6c8c\u5b9e\u9a8c\u53ea\u5728\u6307\u5b9a\u7684\u547d\u540d\u7a7a\u95f4\u5185\u751f\u6548\uff0c\u5176\u4ed6\u672a\u914d\u7f6e\u7684\u547d\u4ee4\u7a7a\u95f4\u5219\u4f1a\u53d7\u5230\u4fdd\u62a4\u4e0d\u4f1a\u88ab\u6545\u969c\u6ce8\u5165\u3002',
            }),
            '\n',
            (0, c.jsx)(n.h2, {
              id: '\u63a7\u5236\u6df7\u6c8c\u5b9e\u9a8c\u751f\u6548\u7684\u8303\u56f4',
              children: '\u63a7\u5236\u6df7\u6c8c\u5b9e\u9a8c\u751f\u6548\u7684\u8303\u56f4',
            }),
            '\n',
            (0, c.jsx)(n.p, {
              children:
                'Chaos Mesh \u63d0\u4f9b\u4e86\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u7528\u4e8e\u63a7\u5236\u6df7\u6c8c\u5b9e\u9a8c\u751f\u6548\u7684\u8303\u56f4\uff1a',
            }),
            '\n',
            (0, c.jsxs)(n.ul, {
              children: [
                '\n',
                (0, c.jsx)(n.li, {
                  children:
                    '\u8981\u914d\u7f6e\u6df7\u6c8c\u5b9e\u9a8c\u53ea\u5728\u6307\u5b9a\u7684\u547d\u540d\u7a7a\u95f4\u5185\u751f\u6548\uff0c\u4f60\u9700\u8981\u5f00\u542f FilterNamespace \u529f\u80fd\uff08\u9ed8\u8ba4\u5173\u95ed\uff09\uff0c\u6b64\u529f\u80fd\u5c06\u5728\u5168\u5c40\u8303\u56f4\u5185\u751f\u6548\u3002\u5f00\u542f\u6b64\u529f\u80fd\u540e\uff0c\u4f60\u53ef\u4ee5\u4e3a\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4\u6dfb\u52a0\u6ce8\u89e3\uff0c\u5176\u4ed6\u672a\u6dfb\u52a0\u6ce8\u89e3\u7684\u547d\u540d\u7a7a\u95f4\u5219\u4f1a\u53d7\u5230\u4fdd\u62a4\u4e0d\u4f1a\u88ab\u6ce8\u5165\u6545\u969c\u3002',
                }),
                '\n',
                (0, c.jsxs)(n.li, {
                  children: [
                    '\u8981\u4e3a\u5355\u4e2a\u6df7\u6c8c\u5b9e\u9a8c\u6307\u5b9a\u5b9e\u9a8c\u751f\u6548\u7684\u8303\u56f4\uff0c\u8bf7\u53c2\u8003',
                    (0, c.jsx)(n.a, {
                      href: '/zh/docs/next/define-chaos-experiment-scope',
                      children: '\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4',
                    }),
                    '\u3002',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, c.jsx)(n.h2, {
              id: '\u5f00\u542f-filternamespace-\u529f\u80fd',
              children: '\u5f00\u542f FilterNamespace \u529f\u80fd',
            }),
            '\n',
            (0, c.jsxs)(n.p, {
              children: [
                '\u5982\u679c\u4f60\u5c1a\u672a\u5b89\u88c5 Chaos Mesh\uff0c\u5728\u4f7f\u7528 Helm \u8fdb\u884c\u5b89\u88c5\u65f6\uff0c\u53ef\u4ee5\u5728\u5b89\u88c5\u547d\u4ee4\u4e2d\u6dfb\u52a0 ',
                (0, c.jsx)(n.code, { children: '--set controllerManager.enableFilterNamespace=true' }),
                ' \u6765\u5f00\u542f\u8fd9\u9879\u529f\u80fd\u3002Docker \u5bb9\u5668\u7684\u547d\u4ee4\u793a\u4f8b\u5982\u4e0b\uff1a',
              ],
            }),
            '\n',
            (0, c.jsx)(n.pre, {
              children: (0, c.jsx)(n.code, {
                className: 'language-bash',
                children:
                  'helm install chaos-mesh chaos-mesh/chaos-mesh -n chaos-mesh --set controllerManager.enableFilterNamespace=true\n',
              }),
            }),
            '\n',
            (0, c.jsx)(n.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, c.jsxs)(n.p, {
                children: [
                  '\u5f53\u4f7f\u7528 Helm \u8fdb\u884c\u5b89\u88c5\u65f6\uff0c\u4e0d\u540c\u5bb9\u5668\u8fd0\u884c\u65f6\u7684\u547d\u4ee4\u548c\u53c2\u6570\u6709\u6240\u533a\u522b\uff0c\u8be6\u60c5\u8bf7\u53c2\u9605',
                  (0, c.jsx)(n.a, {
                    href: '/zh/docs/next/production-installation-using-helm',
                    children: '\u4f7f\u7528 Helm \u5b89\u88c5',
                  }),
                  '\u3002',
                ],
              }),
            }),
            '\n',
            (0, c.jsxs)(n.p, {
              children: [
                '\u5982\u679c\u5df2\u7ecf\u901a\u8fc7 Helm \u5b89\u88c5\u4e86 Chaos Mesh \uff0c\u53ef\u4ee5\u901a\u8fc7 ',
                (0, c.jsx)(n.code, { children: 'helm upgrade' }),
                ' \u547d\u4ee4\u6765\u66f4\u65b0\u914d\u7f6e\u3002\u793a\u4f8b\u5982\u4e0b\uff1a',
              ],
            }),
            '\n',
            (0, c.jsx)(n.pre, {
              children: (0, c.jsx)(n.code, {
                className: 'language-bash',
                children:
                  'helm upgrade chaos-mesh chaos-mesh/chaos-mesh -n chaos-mesh --set controllerManager.enableFilterNamespace=true\n',
              }),
            }),
            '\n',
            (0, c.jsxs)(n.p, {
              children: [
                (0, c.jsx)(n.code, { children: 'helm upgrade' }),
                ' \u4e2d\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u591a\u4e2a ',
                (0, c.jsx)(n.code, { children: '--set' }),
                ' \u53c2\u6570\u6765\u8bbe\u7f6e\u591a\u4e2a\u53c2\u6570\uff0c\u8986\u76d6\u89c4\u5219\u662f\u540e\u8bbe\u7f6e\u7684\u8986\u76d6\u524d\u8bbe\u7f6e\u7684\u3002\u6bd4\u5982 ',
                (0, c.jsx)(n.code, {
                  children:
                    '--set controllerManager.enableFilterNamespace=false --set controllerManager.enableFilterNamespace=true',
                }),
                ' \u4ecd\u5c06\u5f00\u542f\u8fd9\u9879\u529f\u80fd\u3002',
              ],
            }),
            '\n',
            (0, c.jsxs)(n.p, {
              children: [
                '\u4e5f\u53ef\u4ee5\u901a\u8fc7 ',
                (0, c.jsx)(n.code, { children: '-f' }),
                ' \u53c2\u6570\u6765\u6307\u5b9a\u4e00\u4e2a YAML \u6587\u4ef6\u7528\u4e8e\u63cf\u8ff0\u914d\u7f6e\uff0c\u8be6\u7ec6\u8bf7\u53c2\u8003 ',
                (0, c.jsx)(n.a, {
                  href: 'https://helm.sh/zh/docs/helm/helm_upgrade/#%E7%AE%80%E4%BB%8B',
                  children: 'Helm \u5347\u7ea7\u6587\u6863',
                }),
                '\u3002',
              ],
            }),
            '\n',
            (0, c.jsx)(n.h2, {
              id: '\u4e3a\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4\u6dfb\u52a0\u6ce8\u89e3',
              children:
                '\u4e3a\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4\u6dfb\u52a0\u6ce8\u89e3',
            }),
            '\n',
            (0, c.jsxs)(n.p, {
              children: [
                '\u5728\u5f00\u542f FilterNamespace \u529f\u80fd\u540e\uff0cChaos Mesh \u5c06\u53ea\u4f1a\u5411\u5305\u542b\u6709 ',
                (0, c.jsx)(n.code, { children: 'chaos-mesh.org/inject=enabled' }),
                ' \u6ce8\u89e3\u7684\u547d\u540d\u7a7a\u95f4\u6ce8\u5165\u6545\u969c\u3002\u56e0\u6b64\uff0c\u5728\u8fdb\u884c\u6df7\u6c8c\u5b9e\u9a8c\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u4e3a\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4\u6dfb\u52a0\u8be5\u6ce8\u89e3\uff0c\u5176\u4ed6\u547d\u540d\u7a7a\u95f4\u5219\u53d7\u5230\u4fdd\u62a4\u4e0d\u4f1a\u88ab\u6ce8\u5165\u6545\u969c\u3002',
              ],
            }),
            '\n',
            (0, c.jsxs)(n.p, {
              children: [
                '\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b ',
                (0, c.jsx)(n.code, { children: 'kubectl' }),
                ' \u547d\u4ee4\u4e3a\u4e00\u4e2a ',
                (0, c.jsx)(n.code, { children: 'namespace' }),
                ' \u6dfb\u52a0\u6ce8\u89e3\uff1a',
              ],
            }),
            '\n',
            (0, c.jsx)(n.pre, {
              children: (0, c.jsx)(n.code, {
                className: 'language-bash',
                children: 'kubectl annotate ns $NAMESPACE chaos-mesh.org/inject=enabled\n',
              }),
            }),
            '\n',
            (0, c.jsxs)(n.p, {
              children: [
                '\u5176\u4e2d ',
                (0, c.jsx)(n.code, { children: '$NAMESPACE' }),
                ' \u4e3a\u547d\u540d\u7a7a\u95f4\u7684\u540d\u5b57\uff0c\u6bd4\u5982 ',
                (0, c.jsx)(n.code, { children: 'default' }),
                '\u3002\u5982\u679c\u6210\u529f\uff0c\u5f97\u5230\u8f93\u51fa\u5982\u4e0b\uff1a',
              ],
            }),
            '\n',
            (0, c.jsx)(n.pre, {
              children: (0, c.jsx)(n.code, {
                className: 'language-bash',
                children: 'namespace/$NAMESPACE annotated\n',
              }),
            }),
            '\n',
            (0, c.jsx)(n.p, {
              children:
                '\u5982\u679c\u5e0c\u671b\u5220\u9664\u8fd9\u4e00\u6ce8\u89e3\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\uff1a',
            }),
            '\n',
            (0, c.jsx)(n.pre, {
              children: (0, c.jsx)(n.code, {
                className: 'language-bash',
                children: 'kubectl annotate ns $NAMESPACE chaos-mesh.org/inject-\n',
              }),
            }),
            '\n',
            (0, c.jsx)(n.p, { children: '\u5982\u679c\u6210\u529f\uff0c\u5f97\u5230\u8f93\u51fa\u5982\u4e0b\uff1a' }),
            '\n',
            (0, c.jsx)(n.pre, {
              children: (0, c.jsx)(n.code, {
                className: 'language-bash',
                children: 'namespace/$NAMESPACE annotated\n',
              }),
            }),
            '\n',
            (0, c.jsx)(n.h2, {
              id: '\u67e5\u770b\u6240\u6709\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4',
              children: '\u67e5\u770b\u6240\u6709\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4',
            }),
            '\n',
            (0, c.jsx)(n.p, {
              children:
                '\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5217\u51fa\u6240\u6709\u5141\u8bb8\u6df7\u6c8c\u5b9e\u9a8c\u7684\u547d\u540d\u7a7a\u95f4\uff1a',
            }),
            '\n',
            (0, c.jsx)(n.pre, {
              children: (0, c.jsx)(n.code, {
                className: 'language-bash',
                children:
                  'kubectl get ns -o jsonpath=\'{.items[?(@.metadata.annotations.chaos-mesh\\.org/inject=="enabled")].metadata.name}\'\n',
              }),
            }),
            '\n',
            (0, c.jsxs)(n.p, {
              children: [
                '\u6b64\u547d\u4ee4\u5c06\u4f1a\u8f93\u51fa\u6240\u6709\u5305\u542b ',
                (0, c.jsx)(n.code, { children: 'chaos-mesh.org/inject=enabled' }),
                ' \u6ce8\u89e3\u7684\u547d\u540d\u7a7a\u95f4\u3002\u793a\u4f8b\u8f93\u51fa\u5982\u4e0b\uff1a',
              ],
            }),
            '\n',
            (0, c.jsx)(n.pre, { children: (0, c.jsx)(n.code, { className: 'language-bash', children: 'default\n' }) }),
          ],
        })
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, l.R)(), ...e.components }
        return n ? (0, c.jsx)(n, { ...e, children: (0, c.jsx)(d, { ...e }) }) : d(e)
      }
    },
    28453: (e, n, s) => {
      s.d(n, { R: () => r, x: () => t })
      var a = s(96540)
      const c = {},
        l = a.createContext(c)
      function r(e) {
        const n = a.useContext(l)
        return a.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e }
          },
          [n, e]
        )
      }
      function t(e) {
        let n
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(c)
              : e.components || c
            : r(e.components)),
          a.createElement(l.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
