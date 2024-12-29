'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [232],
  {
    56747: (e, s, o) => {
      o.r(s),
        o.d(s, {
          assets: () => l,
          contentTitle: () => c,
          default: () => u,
          frontMatter: () => a,
          metadata: () => n,
          toc: () => d,
        })
      const n = JSON.parse(
        '{"id":"faqs","title":"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54 (FAQ)","description":"If I do not have deployed Kubernetes clusters, can I use Chaos Mesh to create chaos experiments?","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.2/faqs.md","sourceDirName":".","slug":"/faqs","permalink":"/zh/docs/faqs","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.6.2/faqs.md","tags":[],"version":"2.6.2","frontMatter":{"title":"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54 (FAQ)"},"sidebar":"docs","previous":{"title":"\u62d3\u5c55 Chaosd \u7ec4\u4ef6","permalink":"/zh/docs/extend-chaosd"},"next":{"title":"\u5347\u7ea7\u81f3 Chaos Mesh 2.0","permalink":"/zh/docs/upgrade-to-2.0"}}'
      )
      var t = o(74848),
        i = o(28453),
        r = o(13137)
      const a = { title: '\u5e38\u89c1\u95ee\u9898\u89e3\u7b54 (FAQ)' },
        c = void 0,
        l = {},
        d = [
          {
            value: 'If I do not have deployed Kubernetes clusters, can I use Chaos Mesh to create chaos experiments?',
            id: 'if-i-do-not-have-deployed-kubernetes-clusters-can-i-use-chaos-mesh-to-create-chaos-experiments',
            level: 3,
          },
          {
            value:
              'I have deployed Chaos Mesh and created PodChaos experiments successfully, but I still failed in creating NetworkChaos/TimeChaos Experiment. The log is shown as below:',
            id: 'i-have-deployed-chaos-mesh-and-created-podchaos-experiments-successfully-but-i-still-failed-in-creating-networkchaostimechaos-experiment-the-log-is-shown-as-below',
            level: 3,
          },
          {
            value:
              'The default administrator Google Cloud user account is forbidden to create chaos experiments. How to fix it?',
            id: 'the-default-administrator-google-cloud-user-account-is-forbidden-to-create-chaos-experiments-how-to-fix-it',
            level: 3,
          },
          {
            value:
              'Daemon throws an error similar to <code>version 1.41 is too new. The maximum supported API version is 1.39</code>',
            id: 'daemon-throws-an-error-similar-to-version-141-is-too-new-the-maximum-supported-api-version-is-139',
            level: 3,
          },
          { value: 'DNSChaos', id: 'dnschaos', level: 2 },
          {
            value:
              'While trying to run DNSChaos in OpenShift, the problems regarding authorization blocked the process',
            id: 'while-trying-to-run-dnschaos-in-openshift-the-problems-regarding-authorization-blocked-the-process',
            level: 3,
          },
          { value: '\u5b89\u88c5', id: '\u5b89\u88c5', level: 2 },
          {
            value:
              'While trying to install Chaos Mesh in OpenShift, the problems regarding authorization blocked the installation process',
            id: 'while-trying-to-install-chaos-mesh-in-openshift-the-problems-regarding-authorization-blocked-the-installation-process',
            level: 3,
          },
          {
            value:
              'Failed to install Chaos Mesh with the message: no matches for kind &quot;CustomResourceDefinition&quot; in version &quot;apiextensions.k8s.io/v1&quot;',
            id: 'failed-to-install-chaos-mesh-with-the-message-no-matches-for-kind-customresourcedefinition-in-version-apiextensionsk8siov1',
            level: 3,
          },
        ]
      function h(e) {
        const s = {
          a: 'a',
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
          ...(0, i.R)(),
          ...e.components,
        }
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(s.h3, {
              id: 'if-i-do-not-have-deployed-kubernetes-clusters-can-i-use-chaos-mesh-to-create-chaos-experiments',
              children:
                'If I do not have deployed Kubernetes clusters, can I use Chaos Mesh to create chaos experiments?',
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'No. Instead, you could use ',
                (0, t.jsx)(s.a, {
                  href: 'https://github.com/chaos-mesh/chaosd/',
                  children: (0, t.jsx)(s.code, { children: 'chaosd' }),
                }),
                ' to inject failures without kubernetes.',
              ],
            }),
            '\n',
            (0, t.jsx)(s.h3, {
              id: 'i-have-deployed-chaos-mesh-and-created-podchaos-experiments-successfully-but-i-still-failed-in-creating-networkchaostimechaos-experiment-the-log-is-shown-as-below',
              children:
                'I have deployed Chaos Mesh and created PodChaos experiments successfully, but I still failed in creating NetworkChaos/TimeChaos Experiment. The log is shown as below:',
            }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-console',
                children:
                  '2020-06-18T02:49:15.160Z ERROR controllers.TimeChaos failed to apply chaos on all pods {"reconciler": "timechaos", "error": "rpc error: code = Unavailable desc = connection error: desc = \\"transport: Error while dialing dial tcp xx.xx.xx.xx:xxxx: connect: connection refused\\""}\n',
              }),
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'The reason is that ',
                (0, t.jsx)(s.code, { children: 'chaos-controller-manager' }),
                ' failed to connect to ',
                (0, t.jsx)(s.code, { children: 'chaos-daemon' }),
                '. You need to first check the Pod network and its ',
                (0, t.jsx)(s.a, {
                  href: 'https://kubernetes.io/docs/concepts/services-networking/network-policies/',
                  children: 'policies',
                }),
                '.',
              ],
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'If everything is in order, maybe you can use the ',
                (0, t.jsx)(s.code, { children: 'hostNetwork' }),
                ' parameter to fix this problem as follows:',
              ],
            }),
            '\n',
            (0, t.jsx)(r.A, {
              children:
                'helm upgrade chaos-mesh chaos-mesh/chaos-mesh -n chaos-mesh --version latest --set chaosDaemon.hostNetwork=true',
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'Reference: ',
                (0, t.jsx)(s.a, {
                  href: 'https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/troubleshooting-kubeadm/#hostport-services-do-not-work',
                  children:
                    'https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/troubleshooting-kubeadm/#hostport-services-do-not-work',
                }),
              ],
            }),
            '\n',
            (0, t.jsx)(s.h3, {
              id: 'the-default-administrator-google-cloud-user-account-is-forbidden-to-create-chaos-experiments-how-to-fix-it',
              children:
                'The default administrator Google Cloud user account is forbidden to create chaos experiments. How to fix it?',
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'The default administrator Google Cloud user cannot be checked by ',
                (0, t.jsx)(s.code, { children: 'AdmissionReview' }),
                '. You need to create an administrator role and assign the role to your account to grant the privilege of creating chaos experiments to it. For example:',
              ],
            }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-yaml',
                children:
                  "kind: ClusterRole\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: role-cluster-manager-pdmas\nrules:\n  - apiGroups: ['']\n    resources: ['pods', 'namespaces']\n    verbs: ['get', 'watch', 'list']\n  - apiGroups:\n      - chaos-mesh.org\n    resources: ['*']\n    verbs: ['get', 'list', 'watch', 'create', 'delete', 'patch', 'update']\n---\nkind: ClusterRoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: cluster-manager-binding\n  namespace: chaos-mesh\nsubjects:\n  # Google Cloud user account\n  - kind: User\n    name: USER_ACCOUNT\nroleRef:\n  kind: ClusterRole\n  name: role-cluster-manager-pdmas\n  apiGroup: rbac.authorization.k8s.io\n",
              }),
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'The ',
                (0, t.jsx)(s.code, { children: 'USER_ACCOUNT' }),
                ' above should be your Google Cloud user email.',
              ],
            }),
            '\n',
            (0, t.jsxs)(s.h3, {
              id: 'daemon-throws-an-error-similar-to-version-141-is-too-new-the-maximum-supported-api-version-is-139',
              children: [
                'Daemon throws an error similar to ',
                (0, t.jsx)(s.code, { children: 'version 1.41 is too new. The maximum supported API version is 1.39' }),
              ],
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'This indicates that the maximum API version that the Docker daemon can accept is ',
                (0, t.jsx)(s.code, { children: '1.39' }),
                ', but the client in ',
                (0, t.jsx)(s.code, { children: 'chaos-daemon' }),
                ' uses ',
                (0, t.jsx)(s.code, { children: '1.41' }),
                ' by default. You can choose the following options to solve this problem:',
              ],
            }),
            '\n',
            (0, t.jsxs)(s.ol, {
              children: [
                '\n',
                (0, t.jsx)(s.li, { children: 'Upgrade your Docker to a newer version.' }),
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [
                    'Helm install/upgrade with ',
                    (0, t.jsx)(s.code, { children: '--set chaosDaemon.env.DOCKER_API_VERSION=1.39' }),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(s.h2, { id: 'dnschaos', children: 'DNSChaos' }),
            '\n',
            (0, t.jsx)(s.h3, {
              id: 'while-trying-to-run-dnschaos-in-openshift-the-problems-regarding-authorization-blocked-the-process',
              children:
                'While trying to run DNSChaos in OpenShift, the problems regarding authorization blocked the process',
            }),
            '\n',
            (0, t.jsx)(s.p, { children: 'If the error message is similar to the following:' }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'Error creating: pods "chaos-dns-server-123aa56123-" is forbidden: unable to validate against any security context constraint: [spec.containers[0].securityContext.capabilities.add: Invalid value: "NET_BIND_SERVICE": capability may not be added]\n',
              }),
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'You need to add the privileged Security Context Constraints (SCC) to the ',
                (0, t.jsx)(s.code, { children: 'chaos-dns-server' }),
                '.',
              ],
            }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-bash',
                children: 'oc adm policy add-scc-to-user privileged -n chaos-mesh -z chaos-dns-server\n',
              }),
            }),
            '\n',
            (0, t.jsx)(s.h2, { id: '\u5b89\u88c5', children: '\u5b89\u88c5' }),
            '\n',
            (0, t.jsx)(s.h3, {
              id: 'while-trying-to-install-chaos-mesh-in-openshift-the-problems-regarding-authorization-blocked-the-installation-process',
              children:
                'While trying to install Chaos Mesh in OpenShift, the problems regarding authorization blocked the installation process',
            }),
            '\n',
            (0, t.jsx)(s.p, { children: 'If the error message is similar to the following:' }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'Error creating: pods "chaos-daemon-" is forbidden: unable\n to validate against any security context constraint: [spec.securityContext.hostNetwork:\n Invalid value: true: Host network is not allowed to be used spec.securityContext.hostPID:\n Invalid value: true: Host PID is not allowed to be used spec.securityContext.hostIPC:\n Invalid value: true: Host IPC is not allowed to be used securityContext.runAsUser:\n Invalid value: "hostPath": hostPath volumes are not allowed to be used spec.containers[0].securityContext.volumes[1]:\n Invalid value: true: Host network is not allowed to be used spec.containers[0].securityContext.containers[0].hostPort:\n Invalid value: 31767: Host ports are not allowed to be used spec.containers[0].securityContext.hostPID:\n Invalid value: true: Host PID is not allowed to be used spec.containers[0].securityContext.hostIPC:\n......]\n',
              }),
            }),
            '\n',
            (0, t.jsx)(s.p, { children: 'You need to add privileged scc to default.' }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-bash',
                children: 'oc adm policy add-scc-to-user privileged -n chaos-mesh -z chaos-daemon\n',
              }),
            }),
            '\n',
            (0, t.jsx)(s.h3, {
              id: 'failed-to-install-chaos-mesh-with-the-message-no-matches-for-kind-customresourcedefinition-in-version-apiextensionsk8siov1',
              children:
                'Failed to install Chaos Mesh with the message: no matches for kind "CustomResourceDefinition" in version "apiextensions.k8s.io/v1"',
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'This issue occurs when you install Chaos Mesh on Kubernetes v1.15 or an earlier version. We use ',
                (0, t.jsx)(s.code, { children: 'apiextensions.k8s.io/v1' }),
                ' by default, but it was introduced in Kubernetes v1.16 on 2019-09-19.',
              ],
            }),
            '\n',
            (0, t.jsx)(s.p, {
              children:
                'When you install Chaos Mesh on Kubernetes lower than v1.16, you need to follow the below process:',
            }),
            '\n',
            (0, t.jsxs)(s.ol, {
              children: [
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [
                    'Manually create CRD through ',
                    (0, t.jsx)(s.code, {
                      children: 'https://mirrors.chaos-mesh.org/<chaos-mesh-version>/crd-v1beta1.yaml',
                    }),
                    '.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [
                    'Add ',
                    (0, t.jsx)(s.code, { children: '--validate=false' }),
                    '. If the configuration is not added, compatibility issues with breaking changes with CRD might occur. For example, ',
                    (0, t.jsx)(s.code, {
                      children:
                        'kubectl create -f https://mirrors.chaos-mesh.org/v2.1.0/crd-v1beta1.yaml --validate=false',
                    }),
                    '.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(s.li, {
                  children: [
                    'Use Helm to finish the rest process of installation, and append ',
                    (0, t.jsx)(s.code, { children: '--skip-crds' }),
                    ' with ',
                    (0, t.jsx)(s.code, { children: 'helm install' }),
                    ' command.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'We suggest upgrading your Kubernetes cluster by referencing Kubernetes ',
                (0, t.jsx)(s.a, {
                  href: 'https://kubernetes.io/releases/version-skew-policy/',
                  children: 'Version Skew Policy',
                }),
                '.',
              ],
            }),
          ],
        })
      }
      function u(e = {}) {
        const { wrapper: s } = { ...(0, i.R)(), ...e.components }
        return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e)
      }
    },
    13137: (e, s, o) => {
      o.d(s, { A: () => h })
      var n = o(78478),
        t = o(44586),
        i = o(66588),
        r = o(21432),
        a = o(99589),
        c = o.n(a),
        l = o(34661),
        d = o(74848)
      const h = (e) => {
        let { children: s, className: o = 'language-bash' } = e
        const { siteConfig: a } = (0, t.A)(),
          { versions: h } = (0, i.P_)('docusaurus-plugin-content-docs')
        return (0, d.jsx)(n.A, {
          children: () => {
            const e = (0, l.t)(a, h),
              n =
                'latest' === e
                  ? ''
                  : `--version ${((e) => {
                      if (c().satisfies(e, '>=2.0.3')) return e
                      const s = e.slice(0, 3)
                      return 'v' + (parseFloat(s) - 0.7).toFixed(1) + e.slice(3)
                    })(e)}`
            return (0, d.jsx)(r.A, { className: o, children: s.replace('--version latest', n).trim() })
          },
        })
      }
    },
    34661: (e, s, o) => {
      o.d(s, { A: () => l, t: () => c })
      var n = o(78478),
        t = o(44586),
        i = o(66588),
        r = o(21432),
        a = o(74848)
      const c = (e, s) => {
        const o = window.location.pathname
        let n = window.localStorage.getItem('docs-preferred-version-default')
        if (o === e.baseUrl && n) return 'current' === n ? 'latest' : n
        if (o.includes('/docs/next')) return 'latest'
        const t = s.find((e) => e.isLast),
          i = s.find((e) => o.includes(e.name))
        return i ? i.name : t.name
      }
      const l = (e) => {
        let { children: s, replaced: o = 'latest', isArchive: l = !1, className: d = 'language-bash' } = e
        const { siteConfig: h } = (0, t.A)(),
          { versions: u } = (0, i.P_)('docusaurus-plugin-content-docs')
        return (0, a.jsx)(n.A, {
          children: () => {
            const e = c(h, u),
              n = l
                ? s.replace(
                    o,
                    (function (e) {
                      return 'latest' === e ? 'refs/heads/master' : `refs/tags/v${e}`
                    })(e)
                  )
                : 'latest' === e
                ? s
                : s.replace(o, 'v' + e)
            return (0, a.jsx)(r.A, { className: d, children: n })
          },
        })
      }
    },
  },
])
