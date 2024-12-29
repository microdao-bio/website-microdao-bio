'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [1297],
  {
    69819: (e, n, a) => {
      a.r(n),
        a.d(n, {
          assets: () => l,
          contentTitle: () => r,
          default: () => m,
          frontMatter: () => c,
          metadata: () => s,
          toc: () => h,
        })
      const s = JSON.parse(
        '{"id":"configure-enabled-namespace","title":"Configure namespace for Chaos experiments","description":"This chapter walks you through how to configure Chaos experiments to only take effect in the specified namespace, and protect other unspecified namespaces against fault injection.","source":"@site/versioned_docs/version-2.4.3/configure-enabled-namespace.md","sourceDirName":".","slug":"/configure-enabled-namespace","permalink":"/docs/2.4.3/configure-enabled-namespace","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.4.3/configure-enabled-namespace.md","tags":[],"version":"2.4.3","frontMatter":{"title":"Configure namespace for Chaos experiments"},"sidebar":"docs","previous":{"title":"Manage User Permissions","permalink":"/docs/2.4.3/manage-user-permissions"},"next":{"title":"Define the Scope of Chaos Experiments","permalink":"/docs/2.4.3/define-chaos-experiment-scope"}}'
      )
      var t = a(74848),
        o = a(28453),
        i = a(13137)
      const c = { title: 'Configure namespace for Chaos experiments' },
        r = void 0,
        l = {},
        h = [
          {
            value: 'Control the scope where the Chaos experiment takes effect',
            id: 'control-the-scope-where-the-chaos-experiment-takes-effect',
            level: 2,
          },
          { value: 'Enable FilterNamespace', id: 'enable-filternamespace', level: 2 },
          {
            value: 'Add annotations to namespaces for Chaos experiments',
            id: 'add-annotations-to-namespaces-for-chaos-experiments',
            level: 2,
          },
          {
            value: 'Check all namespaces where Chaos experiments take effect',
            id: 'check-all-namespaces-where-chaos-experiments-take-effect',
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
          ...(0, o.R)(),
          ...e.components,
        }
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.p, {
              children:
                'This chapter walks you through how to configure Chaos experiments to only take effect in the specified namespace, and protect other unspecified namespaces against fault injection.',
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: 'control-the-scope-where-the-chaos-experiment-takes-effect',
              children: 'Control the scope where the Chaos experiment takes effect',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children: 'Chaos Mesh offers two ways to control the scope of the Chaos experiment to take effect:',
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsx)(n.li, {
                  children:
                    'To configure Chaos experiments to only take effect in the specified namespace, you need to enable the FilterNamespace feature (which is off by default). This feature takes effect on a global scope. After this feature is enabled, you can add annotations to the namespace in which Chaos experiments are allowed to take effect. Other namespaces without annotations are protected against fault injection.',
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    'To specify the scope for a single Chaos experiment to take effect, refer to ',
                    (0, t.jsx)(n.a, {
                      href: '/docs/2.4.3/define-chaos-experiment-scope',
                      children: 'Define the scope of a Chaos experiment',
                    }),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: 'enable-filternamespace', children: 'Enable FilterNamespace' }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'If you have not installed Chaos Mesh yet, you can enable this feature during installation by adding ',
                (0, t.jsx)(n.code, { children: '--set controllerManager.enableFilterNamespace=true' }),
                ' to the command when installing using Helm. The following is a command example in the Docker container:',
              ],
            }),
            '\n',
            (0, t.jsx)(i.A, {
              children:
                'helm install chaos-mesh chaos-mesh/chaos-mesh -n chaos-mesh --set controllerManager.enableFilterNamespace=true --version latest',
            }),
            '\n',
            (0, t.jsx)(n.admonition, {
              type: 'note',
              children: (0, t.jsxs)(n.p, {
                children: [
                  'When you use Helm for installation, commands and parameters differ for different containers. Refer to ',
                  (0, t.jsx)(n.a, {
                    href: '/docs/2.4.3/production-installation-using-helm',
                    children: 'Install Chaos Mesh using Helm',
                  }),
                  ' for more information.',
                ],
              }),
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'If you have installed Chaos Mesh using Helm, you can enable this feature by upgrading the configuration with the ',
                (0, t.jsx)(n.code, { children: 'helm upgrade' }),
                ' command. For example:',
              ],
            }),
            '\n',
            (0, t.jsx)(i.A, {
              children:
                'helm upgrade chaos-mesh chaos-mesh/chaos-mesh -n chaos-mesh --version latest --set controllerManager.enableFilterNamespace=true',
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'For ',
                (0, t.jsx)(n.code, { children: 'helm upgrade' }),
                ', you can set multiple parameters by adding multiple ',
                (0, t.jsx)(n.code, { children: '--set' }),
                ' in the command. Later settings override previous settings. For example, if you add ',
                (0, t.jsx)(n.code, {
                  children:
                    '--set controllerManager.enableFilterNamespace=false -set controllerManager.enableFilterNamespace=true',
                }),
                ' in the command, it still enables this feature.',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'You can also specify a YAML file using the ',
                (0, t.jsx)(n.code, { children: '-f' }),
                ' parameter to describe the configuration. Refer to ',
                (0, t.jsx)(n.a, {
                  href: 'https://helm.sh/zh/docs/helm/helm_upgrade/#%E7%AE%80%E4%BB%8B',
                  children: 'Helm upgrade',
                }),
                ' for more information.',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: 'add-annotations-to-namespaces-for-chaos-experiments',
              children: 'Add annotations to namespaces for Chaos experiments',
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'When FilterNamespace is enabled, Chaos Mesh only injects faults to namespaces containing the annotation ',
                (0, t.jsx)(n.code, { children: 'chaos-mesh.org/inject=enabled' }),
                '. Therefore, before starting Chaos experiments, you need to add this annotation to the namespace in which Chaos experiments can take effect, while other namespaces are protected against fault injection.',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'You can add the annotation for a ',
                (0, t.jsx)(n.code, { children: 'namespace' }),
                ' using the following ',
                (0, t.jsx)(n.code, { children: 'kubectl' }),
                ' command:',
              ],
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-bash',
                children: 'kubectl annotate ns $NAMESPACE chaos-mesh.org/inject=enabled\n',
              }),
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'In the above command, ',
                (0, t.jsx)(n.code, { children: '$NAMESPACE' }),
                ' refers to the name of the namespace, for example, ',
                (0, t.jsx)(n.code, { children: 'default' }),
                '. If the annotation is successfully added, the output is as follows:',
              ],
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-bash',
                children: 'namespace/$NAMESPACE annotated\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.p, { children: 'If you want to delete this annotation, you can use the following command:' }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-bash',
                children: 'kubectl annotate ns $NAMESPACE chaos-mesh.org/inject-\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.p, { children: 'If the annotation is successfully deleted, the output is as follows:' }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-bash',
                children: 'namespace/$NAMESPACE annotated\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: 'check-all-namespaces-where-chaos-experiments-take-effect',
              children: 'Check all namespaces where Chaos experiments take effect',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children: 'You can list all the namespaces that allows Chaos experiments using the following command:',
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-bash',
                children:
                  'kubectl get ns -o jsonpath=\'{.items[?(@.metadata.annotations.chaos-mesh\\.org/inject=="enabled")].metadata.name}\'\n',
              }),
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'This command outputs all the namespaces with the ',
                (0, t.jsx)(n.code, { children: 'chaos-mesh.org/inject=enabled' }),
                ' annotation. For example:',
              ],
            }),
            '\n',
            (0, t.jsx)(n.pre, { children: (0, t.jsx)(n.code, { className: 'language-bash', children: 'default\n' }) }),
          ],
        })
      }
      function m(e = {}) {
        const { wrapper: n } = { ...(0, o.R)(), ...e.components }
        return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e)
      }
    },
    13137: (e, n, a) => {
      a.d(n, { A: () => d })
      var s = a(78478),
        t = a(44586),
        o = a(66588),
        i = a(21432),
        c = a(99589),
        r = a.n(c),
        l = a(34661),
        h = a(74848)
      const d = (e) => {
        let { children: n, className: a = 'language-bash' } = e
        const { siteConfig: c } = (0, t.A)(),
          { versions: d } = (0, o.P_)('docusaurus-plugin-content-docs')
        return (0, h.jsx)(s.A, {
          children: () => {
            const e = (0, l.t)(c, d),
              s =
                'latest' === e
                  ? ''
                  : `--version ${((e) => {
                      if (r().satisfies(e, '>=2.0.3')) return e
                      const n = e.slice(0, 3)
                      return 'v' + (parseFloat(n) - 0.7).toFixed(1) + e.slice(3)
                    })(e)}`
            return (0, h.jsx)(i.A, { className: a, children: n.replace('--version latest', s).trim() })
          },
        })
      }
    },
    34661: (e, n, a) => {
      a.d(n, { A: () => l, t: () => r })
      var s = a(78478),
        t = a(44586),
        o = a(66588),
        i = a(21432),
        c = a(74848)
      const r = (e, n) => {
        const a = window.location.pathname
        let s = window.localStorage.getItem('docs-preferred-version-default')
        if (a === e.baseUrl && s) return 'current' === s ? 'latest' : s
        if (a.includes('/docs/next')) return 'latest'
        const t = n.find((e) => e.isLast),
          o = n.find((e) => a.includes(e.name))
        return o ? o.name : t.name
      }
      const l = (e) => {
        let { children: n, replaced: a = 'latest', isArchive: l = !1, className: h = 'language-bash' } = e
        const { siteConfig: d } = (0, t.A)(),
          { versions: m } = (0, o.P_)('docusaurus-plugin-content-docs')
        return (0, c.jsx)(s.A, {
          children: () => {
            const e = r(d, m),
              s = l
                ? n.replace(
                    a,
                    (function (e) {
                      return 'latest' === e ? 'refs/heads/master' : `refs/tags/v${e}`
                    })(e)
                  )
                : 'latest' === e
                ? n
                : n.replace(a, 'v' + e)
            return (0, c.jsx)(i.A, { className: h, children: s })
          },
        })
      }
    },
  },
])
