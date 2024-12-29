'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [6199],
  {
    86835: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => i,
          contentTitle: () => r,
          default: () => d,
          frontMatter: () => h,
          metadata: () => l,
          toc: () => t,
        })
      const l = JSON.parse(
        '{"id":"uninstallation","title":"Uninstall Chaos Mesh","description":"This document introduces how to uninstall Chaos Mesh, including uninstall Chaos Mesh with Helm and uninstall Chaos Mesh manually. It\'s also very helpful to manually purge Chaos Mesh installation from Kubernetes cluster if you have to do.","source":"@site/versioned_docs/version-2.6.2/uninstallation.md","sourceDirName":".","slug":"/uninstallation","permalink":"/docs/uninstallation","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.6.2/uninstallation.md","tags":[],"version":"2.6.2","frontMatter":{"title":"Uninstall Chaos Mesh"},"sidebar":"docs","previous":{"title":"Persistence Chaos Dashboard","permalink":"/docs/persistence-dashboard"},"next":{"title":"Manage User Permissions","permalink":"/docs/manage-user-permissions"}}'
      )
      var o = n(74848),
        a = n(28453)
      const h = { title: 'Uninstall Chaos Mesh' },
        r = void 0,
        i = {},
        t = [
          { value: 'Uninstall Chaos Mesh with Helm', id: 'uninstall-chaos-mesh-with-helm', level: 2 },
          { value: 'Step 1: Clean Up Chaos Experiments', id: 'step-1-clean-up-chaos-experiments', level: 3 },
          { value: 'Step 2: List Helm Releases', id: 'step-2-list-helm-releases', level: 3 },
          { value: 'Step 3: Delete Helm Releases', id: 'step-3-delete-helm-releases', level: 3 },
          { value: 'Step 4: Remove CRDs', id: 'step-4-remove-crds', level: 3 },
          { value: 'Uninstall Chaos Mesh Manually', id: 'uninstall-chaos-mesh-manually', level: 2 },
          { value: 'Step 1: Clean Up Chaos Experiments', id: 'step-1-clean-up-chaos-experiments-1', level: 3 },
          { value: 'Step 2: Remove Chaos Mesh Workloads', id: 'step-2-remove-chaos-mesh-workloads', level: 3 },
          { value: 'Step 3: Remove Chaos Mesh RBAC Objects', id: 'step-3-remove-chaos-mesh-rbac-objects', level: 3 },
          { value: 'Step 4: Remove ConfigMaps And Secrets', id: 'step-4-remove-configmaps-and-secrets', level: 3 },
          { value: 'Step 5: Remove Webhook', id: 'step-5-remove-webhook', level: 3 },
          { value: 'Step 6: Remove CRDs', id: 'step-6-remove-crds', level: 3 },
        ]
      function c(e) {
        const s = {
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          p: 'p',
          pre: 'pre',
          ul: 'ul',
          ...(0, a.R)(),
          ...e.components,
        }
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(s.p, {
              children:
                "This document introduces how to uninstall Chaos Mesh, including uninstall Chaos Mesh with Helm and uninstall Chaos Mesh manually. It's also very helpful to manually purge Chaos Mesh installation from Kubernetes cluster if you have to do.",
            }),
            '\n',
            (0, o.jsx)(s.h2, { id: 'uninstall-chaos-mesh-with-helm', children: 'Uninstall Chaos Mesh with Helm' }),
            '\n',
            (0, o.jsx)(s.h3, {
              id: 'step-1-clean-up-chaos-experiments',
              children: 'Step 1: Clean Up Chaos Experiments',
            }),
            '\n',
            (0, o.jsx)(s.p, {
              children:
                'Before uninstall Chaos Mesh, please make sure that all the chaos experiments are deleted. You could list chaos related objects by executing:',
            }),
            '\n',
            (0, o.jsx)(s.pre, {
              children: (0, o.jsx)(s.code, {
                className: 'language-shell',
                children:
                  "for i in $(kubectl api-resources | grep chaos-mesh | awk '{print $1}'); do kubectl get $i -A; done\n",
              }),
            }),
            '\n',
            (0, o.jsx)(s.p, {
              children: 'Once you make sure that all the chaos experiments are deleted, you can uninstall Chaos Mesh.',
            }),
            '\n',
            (0, o.jsx)(s.h3, { id: 'step-2-list-helm-releases', children: 'Step 2: List Helm Releases' }),
            '\n',
            (0, o.jsx)(s.p, { children: 'You could list the installed helm release by executing:' }),
            '\n',
            (0, o.jsx)(s.pre, {
              children: (0, o.jsx)(s.code, { className: 'language-shell', children: 'helm list -A\n' }),
            }),
            '\n',
            (0, o.jsx)(s.p, { children: 'The output should look like:' }),
            '\n',
            (0, o.jsx)(s.pre, {
              children: (0, o.jsx)(s.code, {
                className: 'language-text',
                children:
                  'NAME                    NAMESPACE       REVISION        UPDATED                                 STATUS          CHART                   APP VERSION\nchaos-mesh-playground   chaos-mesh      1               2021-12-01 22:58:18.037052401 +0800 CST deployed        chaos-mesh-2.1.0        2.1.0\n',
              }),
            }),
            '\n',
            (0, o.jsxs)(s.p, {
              children: [
                'It means that Chaos Mesh has been installed as a helm release named ',
                (0, o.jsx)(s.code, { children: 'chaos-mesh-playground' }),
                ' in namespace ',
                (0, o.jsx)(s.code, { children: 'chaos-mesh' }),
                '. So here is the target release to uninstall.',
              ],
            }),
            '\n',
            (0, o.jsx)(s.h3, { id: 'step-3-delete-helm-releases', children: 'Step 3: Delete Helm Releases' }),
            '\n',
            (0, o.jsx)(s.p, {
              children: 'After determine the target Helm Release, you could delete the Helm Release by executing:',
            }),
            '\n',
            (0, o.jsx)(s.pre, {
              children: (0, o.jsx)(s.code, {
                className: 'language-shell',
                children: 'helm uninstall chaos-mesh-playground -n chaos-mesh\n',
              }),
            }),
            '\n',
            (0, o.jsx)(s.h3, { id: 'step-4-remove-crds', children: 'Step 4: Remove CRDs' }),
            '\n',
            (0, o.jsxs)(s.p, {
              children: [
                (0, o.jsx)(s.code, { children: 'helm uninstall' }),
                ' would not remove the CRDs, so you could remove them manually by executing:',
              ],
            }),
            '\n',
            (0, o.jsx)(s.pre, {
              children: (0, o.jsx)(s.code, {
                className: 'language-shell',
                children: "kubectl delete crd $(kubectl get crd | grep 'chaos-mesh.org' | awk '{print $1}')\n",
              }),
            }),
            '\n',
            (0, o.jsx)(s.h2, { id: 'uninstall-chaos-mesh-manually', children: 'Uninstall Chaos Mesh Manually' }),
            '\n',
            (0, o.jsxs)(s.p, {
              children: [
                'If you installed Chaos Mesh by script ',
                (0, o.jsx)(s.code, { children: 'install.sh' }),
                ', or you modified some configurations and components after Chaos Mesh installed, or you meet some troubles when uninstalling Chaos Mesh, here are some steps could help you to uninstall Chaos Mesh manually.',
              ],
            }),
            '\n',
            (0, o.jsx)(s.h3, {
              id: 'step-1-clean-up-chaos-experiments-1',
              children: 'Step 1: Clean Up Chaos Experiments',
            }),
            '\n',
            (0, o.jsx)(s.p, {
              children:
                'Before uninstall Chaos Mesh, please make sure that all the chaos experiments are deleted. You could list chaos related objects by executing:',
            }),
            '\n',
            (0, o.jsx)(s.pre, {
              children: (0, o.jsx)(s.code, {
                className: 'language-shell',
                children:
                  "for i in $(kubectl api-resources | grep chaos-mesh | awk '{print $1}'); do kubectl get $i -A; done\n",
              }),
            }),
            '\n',
            (0, o.jsx)(s.p, {
              children: 'Once you make sure that all the chaos experiments are deleted, you can uninstall Chaos Mesh.',
            }),
            '\n',
            (0, o.jsx)(s.h3, {
              id: 'step-2-remove-chaos-mesh-workloads',
              children: 'Step 2: Remove Chaos Mesh Workloads',
            }),
            '\n',
            (0, o.jsx)(s.p, { children: 'There are usually several kind of components as Chaos Mesh installed:' }),
            '\n',
            (0, o.jsxs)(s.ul, {
              children: [
                '\n',
                (0, o.jsxs)(s.li, {
                  children: [
                    'A ',
                    (0, o.jsx)(s.code, { children: 'Deployment' }),
                    ' called ',
                    (0, o.jsx)(s.code, { children: 'chaos-controller-manager' }),
                    ', it is the controller/reconciler for Chaos Mesh.',
                  ],
                }),
                '\n',
                (0, o.jsxs)(s.li, {
                  children: [
                    'A ',
                    (0, o.jsx)(s.code, { children: 'DaemonSet' }),
                    ' called ',
                    (0, o.jsx)(s.code, { children: 'chaos-daemon' }),
                    ', it is the agent for Chaos Mesh on each Kubernetes worker node.',
                  ],
                }),
                '\n',
                (0, o.jsxs)(s.li, {
                  children: [
                    'A ',
                    (0, o.jsx)(s.code, { children: 'Deployment' }),
                    ' called ',
                    (0, o.jsx)(s.code, { children: 'chaos-dashboard' }),
                    ', the WebUI for Chaos Mesh.',
                  ],
                }),
                '\n',
                (0, o.jsxs)(s.li, {
                  children: [
                    'A ',
                    (0, o.jsx)(s.code, { children: 'Deployment' }),
                    ' called ',
                    (0, o.jsx)(s.code, { children: 'chaos-dns-server' }),
                    ', it is the DNS proxy server, only occurs with you enable the DNSChaos feature.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, o.jsx)(s.p, { children: 'You should remove these workload objects.' }),
            '\n',
            (0, o.jsxs)(s.p, {
              children: ['Then delete their corresponding ', (0, o.jsx)(s.code, { children: 'Service' }), 's:'],
            }),
            '\n',
            (0, o.jsxs)(s.ul, {
              children: [
                '\n',
                (0, o.jsx)(s.li, { children: 'chaos-daemon' }),
                '\n',
                (0, o.jsx)(s.li, { children: 'chaos-dashboard' }),
                '\n',
                (0, o.jsx)(s.li, { children: 'chaos-mesh-controller-manager' }),
                '\n',
                (0, o.jsx)(s.li, { children: 'chaos-mesh-dns-server' }),
                '\n',
              ],
            }),
            '\n',
            (0, o.jsx)(s.h3, {
              id: 'step-3-remove-chaos-mesh-rbac-objects',
              children: 'Step 3: Remove Chaos Mesh RBAC Objects',
            }),
            '\n',
            (0, o.jsx)(s.p, { children: 'There are several RBAC objects as Chaos Mesh installed:' }),
            '\n',
            (0, o.jsxs)(s.ul, {
              children: [
                '\n',
                (0, o.jsxs)(s.li, {
                  children: [
                    'ClusterRoleBinding',
                    '\n',
                    (0, o.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, o.jsx)(s.li, { children: 'chaos-mesh-playground-chaos-controller-manager-cluster-level' }),
                        '\n',
                        (0, o.jsx)(s.li, {
                          children: 'chaos-mesh-playground-chaos-controller-manager-target-namespace',
                        }),
                        '\n',
                        (0, o.jsx)(s.li, { children: 'chaos-mesh-playground-chaos-dns-server-cluster-level' }),
                        '\n',
                        (0, o.jsx)(s.li, { children: 'chaos-mesh-playground-chaos-dns-server-target-namespace' }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, o.jsxs)(s.li, {
                  children: [
                    'ClusterRole',
                    '\n',
                    (0, o.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, o.jsx)(s.li, { children: 'chaos-mesh-playground-chaos-controller-manager-cluster-level' }),
                        '\n',
                        (0, o.jsx)(s.li, {
                          children: 'chaos-mesh-playground-chaos-controller-manager-target-namespace',
                        }),
                        '\n',
                        (0, o.jsx)(s.li, { children: 'chaos-mesh-playground-chaos-dns-server' }),
                        '\n',
                        (0, o.jsx)(s.li, { children: 'chaos-mesh-playground-chaos-dns-server-cluster-level' }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, o.jsxs)(s.li, {
                  children: [
                    'RoleBinding',
                    '\n',
                    (0, o.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, o.jsx)(s.li, { children: 'chaos-mesh-playground-chaos-controller-manager-control-plane' }),
                        '\n',
                        (0, o.jsx)(s.li, { children: 'chaos-mesh-playground-chaos-dns-server-control-plane' }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, o.jsxs)(s.li, {
                  children: [
                    'Role',
                    '\n',
                    (0, o.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, o.jsx)(s.li, { children: 'chaos-mesh-playground-chaos-controller-manager-control-plane' }),
                        '\n',
                        (0, o.jsx)(s.li, { children: 'chaos-mesh-playground-chaos-dns-server-control-plane' }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, o.jsxs)(s.li, {
                  children: [
                    'ServiceAccount',
                    '\n',
                    (0, o.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, o.jsx)(s.li, { children: 'chaos-controller-manager' }),
                        '\n',
                        (0, o.jsx)(s.li, { children: 'chaos-daemon' }),
                        '\n',
                        (0, o.jsx)(s.li, { children: 'chaos-dns-server' }),
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
            (0, o.jsx)(s.p, { children: 'You should remove these RBAC objects.' }),
            '\n',
            (0, o.jsx)(s.h3, {
              id: 'step-4-remove-configmaps-and-secrets',
              children: 'Step 4: Remove ConfigMaps And Secrets',
            }),
            '\n',
            (0, o.jsx)(s.p, { children: 'There are several ConfigMaps and Secrets as Chaos Mesh installed:' }),
            '\n',
            (0, o.jsxs)(s.ul, {
              children: [
                '\n',
                (0, o.jsxs)(s.li, {
                  children: [
                    'ConfigMap',
                    '\n',
                    (0, o.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, o.jsx)(s.li, { children: 'chaos-mesh' }),
                        '\n',
                        (0, o.jsx)(s.li, { children: 'dns-server-config' }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, o.jsxs)(s.li, {
                  children: [
                    'Secret',
                    '\n',
                    (0, o.jsxs)(s.ul, {
                      children: ['\n', (0, o.jsx)(s.li, { children: 'chaos-mesh-webhook-certs' }), '\n'],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, o.jsx)(s.p, { children: 'You should remove these ConfigMaps And Secrets objects.' }),
            '\n',
            (0, o.jsx)(s.h3, { id: 'step-5-remove-webhook', children: 'Step 5: Remove Webhook' }),
            '\n',
            (0, o.jsx)(s.p, { children: 'There are several Webhooks as Chaos Mesh installed:' }),
            '\n',
            (0, o.jsxs)(s.ul, {
              children: [
                '\n',
                (0, o.jsxs)(s.li, {
                  children: [
                    'ValidatingWebhookConfigurations',
                    '\n',
                    (0, o.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, o.jsx)(s.li, { children: 'chaos-mesh-validation' }),
                        '\n',
                        (0, o.jsx)(s.li, { children: 'chaos-mesh-validate-auth' }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, o.jsxs)(s.li, {
                  children: [
                    'MutatingWebhookConfigurations',
                    '\n',
                    (0, o.jsxs)(s.ul, {
                      children: ['\n', (0, o.jsx)(s.li, { children: 'chaos-mesh-mutation' }), '\n'],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, o.jsx)(s.p, { children: 'You should remove these webhooks.' }),
            '\n',
            (0, o.jsx)(s.h3, { id: 'step-6-remove-crds', children: 'Step 6: Remove CRDs' }),
            '\n',
            (0, o.jsx)(s.p, { children: 'At last, you could remove CRds by executing:' }),
            '\n',
            (0, o.jsx)(s.pre, {
              children: (0, o.jsx)(s.code, {
                className: 'language-shell',
                children: "kubectl delete crd $(kubectl get crd | grep 'chaos-mesh.org' | awk '{print $1}')\n",
              }),
            }),
          ],
        })
      }
      function d(e = {}) {
        const { wrapper: s } = { ...(0, a.R)(), ...e.components }
        return s ? (0, o.jsx)(s, { ...e, children: (0, o.jsx)(c, { ...e }) }) : c(e)
      }
    },
    28453: (e, s, n) => {
      n.d(s, { R: () => h, x: () => r })
      var l = n(96540)
      const o = {},
        a = l.createContext(o)
      function h(e) {
        const s = l.useContext(a)
        return l.useMemo(
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
              ? e.components(o)
              : e.components || o
            : h(e.components)),
          l.createElement(a.Provider, { value: s }, e.children)
        )
      }
    },
  },
])