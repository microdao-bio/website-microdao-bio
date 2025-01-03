'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [8653],
  {
    43057: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => l,
          contentTitle: () => i,
          default: () => d,
          frontMatter: () => r,
          metadata: () => a,
          toc: () => c,
        })
      const a = JSON.parse(
        '{"id":"common/quick-run","title":"quick-run","description":"After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh.","source":"@site/versioned_docs/version-2.6.2/common/quick-run.md","sourceDirName":"common","slug":"/common/quick-run","permalink":"/docs/common/quick-run","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.6.2/common/quick-run.md","tags":[],"version":"2.6.2","frontMatter":{}}'
      )
      var t = n(74848),
        o = n(28453)
      const r = {},
        i = void 0,
        l = {},
        c = []
      function h(e) {
        const s = { a: 'a', p: 'p', ...(0, o.R)(), ...e.components }
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(s.p, {
              children:
                'After verifying that the installation is complete, you can run a Chaos experiment to experience the features of Chaos Mesh.',
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'For the method to run the experiment, it is recommended to refer to ',
                (0, t.jsx)(s.a, { href: '/docs/run-a-chaos-experiment', children: 'Run a Chaos experiment' }),
                '. After successfully creating the experiment, you can observe the running status of the experiment on the Chaos Dashboard.',
              ],
            }),
          ],
        })
      }
      function d(e = {}) {
        const { wrapper: s } = { ...(0, o.R)(), ...e.components }
        return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e)
      }
    },
    78465: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => l,
          contentTitle: () => i,
          default: () => d,
          frontMatter: () => r,
          metadata: () => a,
          toc: () => c,
        })
      const a = JSON.parse(
        '{"id":"common/verify-installation","title":"verify-installation","description":"To check the running status of Chaos Mesh, execute the following command:","source":"@site/versioned_docs/version-2.6.2/common/verify-installation.md","sourceDirName":"common","slug":"/common/verify-installation","permalink":"/docs/common/verify-installation","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.6.2/common/verify-installation.md","tags":[],"version":"2.6.2","frontMatter":{}}'
      )
      var t = n(74848),
        o = n(28453)
      const r = {},
        i = void 0,
        l = {},
        c = []
      function h(e) {
        const s = { admonition: 'admonition', code: 'code', p: 'p', pre: 'pre', ...(0, o.R)(), ...e.components }
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(s.p, { children: 'To check the running status of Chaos Mesh, execute the following command:' }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, { className: 'language-sh', children: 'kubectl get po -n chaos-mesh\n' }),
            }),
            '\n',
            (0, t.jsx)(s.p, { children: 'The expected output is as follows:' }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-sh',
                children:
                  'NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   3/3     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n',
              }),
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'If your actual output is similar to the expected output with ',
                (0, t.jsx)(s.code, { children: 'NAME' }),
                ', ',
                (0, t.jsx)(s.code, { children: 'READY' }),
                ', ',
                (0, t.jsx)(s.code, { children: 'STATUS' }),
                ', ',
                (0, t.jsx)(s.code, { children: 'RESTARTS' }),
                ', and ',
                (0, t.jsx)(s.code, { children: 'AGE' }),
                ', it means that Helm is installed successfully.',
              ],
            }),
            '\n',
            (0, t.jsxs)(s.admonition, {
              type: 'note',
              children: [
                (0, t.jsxs)(s.p, {
                  children: [
                    'If the ',
                    (0, t.jsx)(s.code, { children: 'STATUS' }),
                    ' of your actual output is not ',
                    (0, t.jsx)(s.code, { children: 'Running' }),
                    ', then execute the following command to check the Pod details, and troubleshoot issues according to the error information.',
                  ],
                }),
                (0, t.jsx)(s.pre, {
                  children: (0, t.jsx)(s.code, {
                    className: 'language-sh',
                    children:
                      '# Take the chaos-controller as an example\nkubectl describe po -n chaos-mesh chaos-controller-manager-69fd5c46c8-xlqpc\n',
                  }),
                }),
              ],
            }),
            '\n',
            (0, t.jsxs)(s.admonition, {
              type: 'note',
              children: [
                (0, t.jsxs)(s.p, {
                  children: [
                    'If ',
                    (0, t.jsx)(s.code, { children: 'leader-election' }),
                    ' feature is turned off manually, ',
                    (0, t.jsx)(s.code, { children: 'chaos-controller-manager' }),
                    ' should only have 1 replication.',
                  ],
                }),
                (0, t.jsx)(s.pre, {
                  children: (0, t.jsx)(s.code, {
                    className: 'language-sh',
                    children:
                      'NAME                                        READY   STATUS    RESTARTS   AGE\nchaos-controller-manager-69fd5c46c8-xlqpc   1/1     Running   0          2d5h\nchaos-daemon-jb8xh                          1/1     Running   0          2d5h\nchaos-dashboard-98c4c5f97-tx5ds             1/1     Running   0          2d5h\n',
                  }),
                }),
              ],
            }),
          ],
        })
      }
      function d(e = {}) {
        const { wrapper: s } = { ...(0, o.R)(), ...e.components }
        return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e)
      }
    },
    35452: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => p,
          contentTitle: () => m,
          default: () => v,
          frontMatter: () => u,
          metadata: () => a,
          toc: () => f,
        })
      const a = JSON.parse(
        '{"id":"production-installation-using-helm","title":"Install Chaos Mesh using Helm","description":"This document describes how to install Chaos Mesh in the production environment.","source":"@site/versioned_docs/version-2.6.2/production-installation-using-helm.md","sourceDirName":".","slug":"/production-installation-using-helm","permalink":"/docs/production-installation-using-helm","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.6.2/production-installation-using-helm.md","tags":[],"version":"2.6.2","frontMatter":{"title":"Install Chaos Mesh using Helm"},"sidebar":"docs","previous":{"title":"Quick Start","permalink":"/docs/quick-start"},"next":{"title":"Install Chaos Mesh Offline","permalink":"/docs/offline-installation"}}'
      )
      var t = n(74848),
        o = n(28453),
        r = n(11470),
        i = n(19365),
        l = n(34661),
        c = n(13137),
        h = n(78465),
        d = n(43057)
      const u = { title: 'Install Chaos Mesh using Helm' },
        m = void 0,
        p = {},
        f = [
          { value: 'Prerequisites', id: 'prerequisites', level: 2 },
          { value: 'Install Chaos Mesh using Helm', id: 'install-chaos-mesh-using-helm', level: 2 },
          { value: 'Step 1: Add Chaos Mesh repository', id: 'step-1-add-chaos-mesh-repository', level: 3 },
          {
            value: 'Step 2: View the installable versions of Chaos Mesh',
            id: 'step-2-view-the-installable-versions-of-chaos-mesh',
            level: 3,
          },
          {
            value: 'Step 3: Create the namespace to install Chaos Mesh',
            id: 'step-3-create-the-namespace-to-install-chaos-mesh',
            level: 3,
          },
          {
            value: 'Step 4: Install Chaos Mesh in different environments',
            id: 'step-4-install-chaos-mesh-in-different-environments',
            level: 3,
          },
          { value: 'Verify the installation', id: 'verify-the-installation', level: 2 },
          ...h.toc,
          { value: 'Run Chaos experiments', id: 'run-chaos-experiments', level: 2 },
          ...d.toc,
          { value: 'Upgrade Chaos Mesh', id: 'upgrade-chaos-mesh', level: 2 },
          { value: 'Uninstall Chaos Mesh', id: 'uninstall-chaos-mesh', level: 2 },
          { value: 'FAQs', id: 'faqs', level: 2 },
          {
            value: 'How can I install the latest version of Chaos Mesh?',
            id: 'how-can-i-install-the-latest-version-of-chaos-mesh',
            level: 3,
          },
          { value: 'How can I disable the safe mode?', id: 'how-can-i-disable-the-safe-mode', level: 3 },
          { value: 'How can I persist Chaos Dashboard data', id: 'how-can-i-persist-chaos-dashboard-data', level: 3 },
        ]
      function x(e) {
        const s = {
          a: 'a',
          admonition: 'admonition',
          blockquote: 'blockquote',
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          ...(0, o.R)(),
          ...e.components,
        }
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(s.p, {
              children: 'This document describes how to install Chaos Mesh in the production environment.',
            }),
            '\n',
            (0, t.jsx)(s.h2, { id: 'prerequisites', children: 'Prerequisites' }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'Before installing Chaos Mesh, make sure that you have installed ',
                (0, t.jsx)(s.a, { href: 'https://helm.sh/docs/intro/install/', children: 'Helm' }),
                ' in your environment.',
              ],
            }),
            '\n',
            (0, t.jsx)(s.p, { children: 'To check whether Helm is installed or not, execute the following command:' }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, { className: 'language-bash', children: 'helm version\n' }),
            }),
            '\n',
            (0, t.jsx)(s.p, { children: 'The expected output is as follows:' }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'version.BuildInfo{Version:"v3.5.4", GitCommit:"1b5edb69df3d3a08df77c9902dc17af864ff05d1", GitTreeState:"dirty", GoVersion: "go1.16.3"}\n',
              }),
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'If your actual output is similar to the expected output with ',
                (0, t.jsx)(s.code, { children: 'Version' }),
                ', ',
                (0, t.jsx)(s.code, { children: 'GitCommit' }),
                ', ',
                (0, t.jsx)(s.code, { children: 'GitTreeState' }),
                ', and ',
                (0, t.jsx)(s.code, { children: 'GoVersion' }),
                ', it means that Helm is installed successfully.',
              ],
            }),
            '\n',
            (0, t.jsx)(s.admonition, {
              type: 'note',
              children: (0, t.jsxs)(s.p, {
                children: [
                  'In this document, Helm v3 is used in commands to make operations on Chaos Mesh. If Helm v2 is used in your environment, refer to ',
                  (0, t.jsx)(s.a, {
                    href: 'https://helm.sh/docs/topics/v2_v3_migration/',
                    children: 'Migrate Helm v2 to v3',
                  }),
                  ' or modify the Helm version to the v2 format.',
                ],
              }),
            }),
            '\n',
            (0, t.jsx)(s.h2, { id: 'install-chaos-mesh-using-helm', children: 'Install Chaos Mesh using Helm' }),
            '\n',
            (0, t.jsx)(s.h3, { id: 'step-1-add-chaos-mesh-repository', children: 'Step 1: Add Chaos Mesh repository' }),
            '\n',
            (0, t.jsx)(s.p, { children: 'Add the Chaos Mesh repository to the Helm repository:' }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-bash',
                children: 'helm repo add chaos-mesh https://charts.chaos-mesh.org\n',
              }),
            }),
            '\n',
            (0, t.jsx)(s.h3, {
              id: 'step-2-view-the-installable-versions-of-chaos-mesh',
              children: 'Step 2: View the installable versions of Chaos Mesh',
            }),
            '\n',
            (0, t.jsx)(s.p, { children: 'To see charts that can be installed, execute the following command:' }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, { className: 'language-bash', children: 'helm search repo chaos-mesh\n' }),
            }),
            '\n',
            (0, t.jsxs)(s.admonition, {
              type: 'note',
              children: [
                (0, t.jsx)(s.p, {
                  children:
                    'The above command will output the latest release of chart. If you want to install a historical version, execute the following command to view all released versions:',
                }),
                (0, t.jsx)(s.pre, {
                  children: (0, t.jsx)(s.code, {
                    className: 'language-bash',
                    children: 'helm search repo chaos-mesh -l\n',
                  }),
                }),
              ],
            }),
            '\n',
            (0, t.jsx)(s.p, { children: 'After the above command is completed, you can start installing Chaos Mesh.' }),
            '\n',
            (0, t.jsx)(s.h3, {
              id: 'step-3-create-the-namespace-to-install-chaos-mesh',
              children: 'Step 3: Create the namespace to install Chaos Mesh',
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'It is recommended to install Chaos Mesh under the ',
                (0, t.jsx)(s.code, { children: 'chaos-mesh' }),
                ' namespace, or you can specify any namespace to install Chaos Mesh:',
              ],
            }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, { className: 'language-bash', children: 'kubectl create ns chaos-mesh\n' }),
            }),
            '\n',
            (0, t.jsx)(s.h3, {
              id: 'step-4-install-chaos-mesh-in-different-environments',
              children: 'Step 4: Install Chaos Mesh in different environments',
            }),
            '\n',
            (0, t.jsx)(s.admonition, {
              type: 'note',
              children: (0, t.jsxs)(s.p, {
                children: [
                  'When installing Chaos Mesh on Kubernetes v1.15(or an earlier version), you need to manually install CRD. For more information, see ',
                  (0, t.jsx)(s.a, {
                    href: '/docs/faqs#failed-to-install-chaos-mesh-with-the-message-no-matches-for-kind-customresourcedefinition-in-version-apiextensionsk8siov1',
                    children: 'FAQ',
                  }),
                  '.',
                ],
              }),
            }),
            '\n',
            (0, t.jsx)(s.p, {
              children:
                'As the daemons of different container runtimes listen on different socket paths, you need to set the appropriate values during installation. You can run the following installation commands according to different environments.',
            }),
            '\n',
            (0, t.jsxs)(r.A, {
              defaultValue: 'docker',
              values: [
                { label: 'Docker', value: 'docker' },
                { label: 'Containerd', value: 'containerd' },
                { label: 'K3s', value: 'k3s' },
                { label: 'MicroK8s', value: 'microk8s' },
                { label: 'CRI-O', value: 'cri-o' },
              ],
              children: [
                (0, t.jsx)(i.A, {
                  value: 'docker',
                  children: (0, t.jsx)(c.A, {
                    children:
                      '# Default to /var/run/docker.sock\nhelm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --version latest',
                  }),
                }),
                (0, t.jsx)(i.A, {
                  value: 'containerd',
                  children: (0, t.jsx)(c.A, {
                    children:
                      'helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock --version latest',
                  }),
                }),
                (0, t.jsx)(i.A, {
                  value: 'k3s',
                  children: (0, t.jsx)(c.A, {
                    children:
                      'helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/k3s/containerd/containerd.sock --version latest',
                  }),
                }),
                (0, t.jsx)(i.A, {
                  value: 'microk8s',
                  children: (0, t.jsx)(c.A, {
                    children:
                      'helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/var/snap/microk8s/common/run/containerd.sock --version latest',
                  }),
                }),
                (0, t.jsx)(i.A, {
                  value: 'cri-o',
                  children: (0, t.jsx)(c.A, {
                    children:
                      'helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --set chaosDaemon.runtime=crio --set chaosDaemon.socketPath=/var/run/crio/crio.sock --version latest',
                  }),
                }),
              ],
            }),
            '\n',
            (0, t.jsx)(s.admonition, {
              type: 'info',
              children: (0, t.jsxs)(s.p, {
                children: [
                  'To install a specific version of Chaos Mesh, add the ',
                  (0, t.jsx)(s.code, { children: '--version x.y.z' }),
                  ' parameter after ',
                  (0, t.jsx)(s.code, { children: 'helm install' }),
                  '. For example, ',
                  (0, t.jsx)(s.code, {
                    children: 'helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --version 2.1.0',
                  }),
                  '.',
                ],
              }),
            }),
            '\n',
            (0, t.jsxs)(s.admonition, {
              type: 'tip',
              children: [
                (0, t.jsxs)(s.p, {
                  children: [
                    'To ensure high availability, Chaos Mesh turns on ',
                    (0, t.jsx)(s.code, { children: 'leader-election' }),
                    ' feature by default. If you do not need to use this feature, you can disable it manually with ',
                    (0, t.jsx)(s.code, { children: '--set controllerManager.leaderElection.enabled=false' }),
                    '.',
                  ],
                }),
                (0, t.jsxs)(s.blockquote, {
                  children: [
                    '\n',
                    (0, t.jsxs)(s.p, {
                      children: [
                        'If version ',
                        (0, t.jsx)(s.code, { children: '<2.6.1' }),
                        ', you still need to set ',
                        (0, t.jsx)(s.code, { children: '--set controllerManager.replicaCount=1' }),
                        ' to reduce the controller manager to one replica.',
                      ],
                    }),
                    '\n',
                  ],
                }),
              ],
            }),
            '\n',
            (0, t.jsx)(s.h2, { id: 'verify-the-installation', children: 'Verify the installation' }),
            '\n',
            (0, t.jsx)(h.default, {}),
            '\n',
            (0, t.jsx)(s.h2, { id: 'run-chaos-experiments', children: 'Run Chaos experiments' }),
            '\n',
            (0, t.jsx)(d.default, {}),
            '\n',
            (0, t.jsx)(s.h2, { id: 'upgrade-chaos-mesh', children: 'Upgrade Chaos Mesh' }),
            '\n',
            (0, t.jsx)(s.p, { children: 'To upgrade Chaos Mesh, execute the following command:' }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-bash',
                children: 'helm upgrade chaos-mesh chaos-mesh/chaos-mesh\n',
              }),
            }),
            '\n',
            (0, t.jsx)(s.admonition, {
              type: 'info',
              children: (0, t.jsxs)(s.p, {
                children: [
                  'To upgrade to a specific version of Chaos Mesh, add the ',
                  (0, t.jsx)(s.code, { children: '--version x.y.z' }),
                  ' parameter after ',
                  (0, t.jsx)(s.code, { children: 'helm upgrade' }),
                  '. For example, ',
                  (0, t.jsx)(s.code, {
                    children: 'helm upgrade chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --version 2.1.0',
                  }),
                  '.',
                ],
              }),
            }),
            '\n',
            (0, t.jsx)(s.admonition, {
              type: 'note',
              children: (0, t.jsxs)(s.p, {
                children: [
                  'If you have upgraded Chaos Mesh in a non-Docker environment, you will need to add the appropriate parameters as described in ',
                  (0, t.jsx)(s.a, {
                    href: '#step-4-install-chaos-mesh-in-different-environments',
                    children: 'Step 4: Install Chaos Mesh in different environments',
                  }),
                  '.',
                ],
              }),
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'To modify the configuration, set different values according to your need. For example, execute the following command to upgrade and uninstall ',
                (0, t.jsx)(s.code, { children: 'chaos-dashboard' }),
                ':',
              ],
            }),
            '\n',
            (0, t.jsx)(c.A, {
              children:
                'helm upgrade chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --version latest --set dashboard.create=false',
            }),
            '\n',
            (0, t.jsx)(s.admonition, {
              type: 'note',
              children: (0, t.jsxs)(s.p, {
                children: [
                  'For more values and their usages, refer to ',
                  (0, t.jsx)(s.a, {
                    href: 'https://github.com/chaos-mesh/chaos-mesh/blob/master/helm/chaos-mesh/values.yaml',
                    children: 'all values',
                  }),
                  '.',
                ],
              }),
            }),
            '\n',
            (0, t.jsxs)(s.admonition, {
              type: 'caution',
              children: [
                (0, t.jsx)(s.p, {
                  children:
                    'Currently, the latest CustomResourceDefinition (CRD) is not applied during the Helm upgrading, which might cause errors. To avoid this situation, you can apply the latest CRD manually:',
                }),
                (0, t.jsx)(l.A, {
                  children: 'curl -sSL https://mirrors.chaos-mesh.org/latest/crd.yaml | kubectl create -f -',
                }),
              ],
            }),
            '\n',
            (0, t.jsx)(s.h2, { id: 'uninstall-chaos-mesh', children: 'Uninstall Chaos Mesh' }),
            '\n',
            (0, t.jsx)(s.p, { children: 'To uninstall Chaos Mesh, execute the following command:' }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-bash',
                children: 'helm uninstall chaos-mesh -n chaos-mesh\n',
              }),
            }),
            '\n',
            (0, t.jsx)(s.h2, { id: 'faqs', children: 'FAQs' }),
            '\n',
            (0, t.jsx)(s.h3, {
              id: 'how-can-i-install-the-latest-version-of-chaos-mesh',
              children: 'How can I install the latest version of Chaos Mesh?',
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'The ',
                (0, t.jsx)(s.code, { children: 'helm/chaos-mesh/values.yaml' }),
                ' file defines the image of the latest version (the master branch). To install the latest version of Chaos Mesh, execute the following command:',
              ],
            }),
            '\n',
            (0, t.jsx)(s.pre, {
              children: (0, t.jsx)(s.code, {
                className: 'language-bash',
                children:
                  '# Clone repository\ngit clone https://github.com/chaos-mesh/chaos-mesh.git\ncd chaos-mesh\n\nhelm install chaos-mesh helm/chaos-mesh -n=chaos-mesh\n',
              }),
            }),
            '\n',
            (0, t.jsx)(s.h3, { id: 'how-can-i-disable-the-safe-mode', children: 'How can I disable the safe mode?' }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'Safe mode allows you to disable authentication to the Chaos Mesh dashboard, and should only be used for non-production deployments. Safe mode is ',
                (0, t.jsx)(s.strong, { children: 'enabled' }),
                ' by default. To disable the safe mode, specify ',
                (0, t.jsx)(s.code, { children: 'dashboard.securityMode' }),
                ' as ',
                (0, t.jsx)(s.code, { children: 'false' }),
                ' during the installation or upgrade:',
              ],
            }),
            '\n',
            (0, t.jsx)(c.A, {
              children:
                'helm install chaos-mesh chaos-mesh/chaos-mesh -n=chaos-mesh --set dashboard.securityMode=false --version latest',
            }),
            '\n',
            (0, t.jsx)(s.h3, {
              id: 'how-can-i-persist-chaos-dashboard-data',
              children: 'How can I persist Chaos Dashboard data',
            }),
            '\n',
            (0, t.jsxs)(s.p, {
              children: [
                'Chaos Dashboard uses ',
                (0, t.jsx)(s.code, { children: 'SQLite' }),
                ' as the default database engine. If ',
                (0, t.jsx)(s.a, {
                  href: 'https://kubernetes.io/docs/concepts/storage/persistent-volumes/',
                  children: 'PV (Persistent Volumes)',
                }),
                ' is disabled, the data of Chaos Dashboard will be lost after a reboot occurs. To avoid data loss, you can refer to the ',
                (0, t.jsx)(s.a, {
                  href: '/docs/persistence-dashboard',
                  children: 'Persistence of Chaos Dashboard Data',
                }),
                ' document to enable PV for Chaos Dashboard or set ',
                (0, t.jsx)(s.code, { children: 'MySQL' }),
                ' and ',
                (0, t.jsx)(s.code, { children: 'PostgreSQL' }),
                ' as the database engine.',
              ],
            }),
          ],
        })
      }
      function v(e = {}) {
        const { wrapper: s } = { ...(0, o.R)(), ...e.components }
        return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(x, { ...e }) }) : x(e)
      }
    },
    19365: (e, s, n) => {
      n.d(s, { A: () => r })
      n(96540)
      var a = n(34164)
      const t = { tabItem: 'tabItem_Ymn6' }
      var o = n(74848)
      function r(e) {
        let { children: s, hidden: n, className: r } = e
        return (0, o.jsx)('div', { role: 'tabpanel', className: (0, a.A)(t.tabItem, r), hidden: n, children: s })
      }
    },
    11470: (e, s, n) => {
      n.d(s, { A: () => C })
      var a = n(96540),
        t = n(34164),
        o = n(23104),
        r = n(56347),
        i = n(205),
        l = n(57485),
        c = n(31682),
        h = n(70679)
      function d(e) {
        return (
          a.Children.toArray(e)
            .filter((e) => '\n' !== e)
            .map((e) => {
              if (
                !e ||
                ((0, a.isValidElement)(e) &&
                  (function (e) {
                    const { props: s } = e
                    return !!s && 'object' == typeof s && 'value' in s
                  })(e))
              )
                return e
              throw new Error(
                `Docusaurus error: Bad <Tabs> child <${
                  'string' == typeof e.type ? e.type : e.type.name
                }>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`
              )
            })
            ?.filter(Boolean) ?? []
        )
      }
      function u(e) {
        const { values: s, children: n } = e
        return (0, a.useMemo)(() => {
          const e =
            s ??
            (function (e) {
              return d(e).map((e) => {
                let {
                  props: { value: s, label: n, attributes: a, default: t },
                } = e
                return { value: s, label: n, attributes: a, default: t }
              })
            })(n)
          return (
            (function (e) {
              const s = (0, c.XI)(e, (e, s) => e.value === s.value)
              if (s.length > 0)
                throw new Error(
                  `Docusaurus error: Duplicate values "${s
                    .map((e) => e.value)
                    .join(', ')}" found in <Tabs>. Every value needs to be unique.`
                )
            })(e),
            e
          )
        }, [s, n])
      }
      function m(e) {
        let { value: s, tabValues: n } = e
        return n.some((e) => e.value === s)
      }
      function p(e) {
        let { queryString: s = !1, groupId: n } = e
        const t = (0, r.W6)(),
          o = (function (e) {
            let { queryString: s = !1, groupId: n } = e
            if ('string' == typeof s) return s
            if (!1 === s) return null
            if (!0 === s && !n)
              throw new Error(
                'Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".'
              )
            return n ?? null
          })({ queryString: s, groupId: n })
        return [
          (0, l.aZ)(o),
          (0, a.useCallback)(
            (e) => {
              if (!o) return
              const s = new URLSearchParams(t.location.search)
              s.set(o, e), t.replace({ ...t.location, search: s.toString() })
            },
            [o, t]
          ),
        ]
      }
      function f(e) {
        const { defaultValue: s, queryString: n = !1, groupId: t } = e,
          o = u(e),
          [r, l] = (0, a.useState)(() =>
            (function (e) {
              let { defaultValue: s, tabValues: n } = e
              if (0 === n.length)
                throw new Error(
                  'Docusaurus error: the <Tabs> component requires at least one <TabItem> children component'
                )
              if (s) {
                if (!m({ value: s, tabValues: n }))
                  throw new Error(
                    `Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n
                      .map((e) => e.value)
                      .join(', ')}. If you intend to show no default tab, use defaultValue={null} instead.`
                  )
                return s
              }
              const a = n.find((e) => e.default) ?? n[0]
              if (!a) throw new Error('Unexpected error: 0 tabValues')
              return a.value
            })({ defaultValue: s, tabValues: o })
          ),
          [c, d] = p({ queryString: n, groupId: t }),
          [f, x] = (function (e) {
            let { groupId: s } = e
            const n = (function (e) {
                return e ? `docusaurus.tab.${e}` : null
              })(s),
              [t, o] = (0, h.Dv)(n)
            return [
              t,
              (0, a.useCallback)(
                (e) => {
                  n && o.set(e)
                },
                [n, o]
              ),
            ]
          })({ groupId: t }),
          v = (() => {
            const e = c ?? f
            return m({ value: e, tabValues: o }) ? e : null
          })()
        ;(0, i.A)(() => {
          v && l(v)
        }, [v])
        return {
          selectedValue: r,
          selectValue: (0, a.useCallback)(
            (e) => {
              if (!m({ value: e, tabValues: o })) throw new Error(`Can't select invalid tab value=${e}`)
              l(e), d(e), x(e)
            },
            [d, x, o]
          ),
          tabValues: o,
        }
      }
      var x = n(92303)
      const v = { tabList: 'tabList__CuJ', tabItem: 'tabItem_LNqP' }
      var g = n(74848)
      function j(e) {
        let { className: s, block: n, selectedValue: a, selectValue: r, tabValues: i } = e
        const l = [],
          { blockElementScrollPositionUntilNextRender: c } = (0, o.a_)(),
          h = (e) => {
            const s = e.currentTarget,
              n = l.indexOf(s),
              t = i[n].value
            t !== a && (c(s), r(t))
          },
          d = (e) => {
            let s = null
            switch (e.key) {
              case 'Enter':
                h(e)
                break
              case 'ArrowRight': {
                const n = l.indexOf(e.currentTarget) + 1
                s = l[n] ?? l[0]
                break
              }
              case 'ArrowLeft': {
                const n = l.indexOf(e.currentTarget) - 1
                s = l[n] ?? l[l.length - 1]
                break
              }
            }
            s?.focus()
          }
        return (0, g.jsx)('ul', {
          role: 'tablist',
          'aria-orientation': 'horizontal',
          className: (0, t.A)('tabs', { 'tabs--block': n }, s),
          children: i.map((e) => {
            let { value: s, label: n, attributes: o } = e
            return (0, g.jsx)(
              'li',
              {
                role: 'tab',
                tabIndex: a === s ? 0 : -1,
                'aria-selected': a === s,
                ref: (e) => l.push(e),
                onKeyDown: d,
                onClick: h,
                ...o,
                className: (0, t.A)('tabs__item', v.tabItem, o?.className, { 'tabs__item--active': a === s }),
                children: n ?? s,
              },
              s
            )
          }),
        })
      }
      function b(e) {
        let { lazy: s, children: n, selectedValue: o } = e
        const r = (Array.isArray(n) ? n : [n]).filter(Boolean)
        if (s) {
          const e = r.find((e) => e.props.value === o)
          return e ? (0, a.cloneElement)(e, { className: (0, t.A)('margin-top--md', e.props.className) }) : null
        }
        return (0, g.jsx)('div', {
          className: 'margin-top--md',
          children: r.map((e, s) => (0, a.cloneElement)(e, { key: s, hidden: e.props.value !== o })),
        })
      }
      function y(e) {
        const s = f(e)
        return (0, g.jsxs)('div', {
          className: (0, t.A)('tabs-container', v.tabList),
          children: [(0, g.jsx)(j, { ...s, ...e }), (0, g.jsx)(b, { ...s, ...e })],
        })
      }
      function C(e) {
        const s = (0, x.A)()
        return (0, g.jsx)(y, { ...e, children: d(e.children) }, String(s))
      }
    },
    13137: (e, s, n) => {
      n.d(s, { A: () => d })
      var a = n(78478),
        t = n(44586),
        o = n(66588),
        r = n(21432),
        i = n(99589),
        l = n.n(i),
        c = n(34661),
        h = n(74848)
      const d = (e) => {
        let { children: s, className: n = 'language-bash' } = e
        const { siteConfig: i } = (0, t.A)(),
          { versions: d } = (0, o.P_)('docusaurus-plugin-content-docs')
        return (0, h.jsx)(a.A, {
          children: () => {
            const e = (0, c.t)(i, d),
              a =
                'latest' === e
                  ? ''
                  : `--version ${((e) => {
                      if (l().satisfies(e, '>=2.0.3')) return e
                      const s = e.slice(0, 3)
                      return 'v' + (parseFloat(s) - 0.7).toFixed(1) + e.slice(3)
                    })(e)}`
            return (0, h.jsx)(r.A, { className: n, children: s.replace('--version latest', a).trim() })
          },
        })
      }
    },
    34661: (e, s, n) => {
      n.d(s, { A: () => c, t: () => l })
      var a = n(78478),
        t = n(44586),
        o = n(66588),
        r = n(21432),
        i = n(74848)
      const l = (e, s) => {
        const n = window.location.pathname
        let a = window.localStorage.getItem('docs-preferred-version-default')
        if (n === e.baseUrl && a) return 'current' === a ? 'latest' : a
        if (n.includes('/docs/next')) return 'latest'
        const t = s.find((e) => e.isLast),
          o = s.find((e) => n.includes(e.name))
        return o ? o.name : t.name
      }
      const c = (e) => {
        let { children: s, replaced: n = 'latest', isArchive: c = !1, className: h = 'language-bash' } = e
        const { siteConfig: d } = (0, t.A)(),
          { versions: u } = (0, o.P_)('docusaurus-plugin-content-docs')
        return (0, i.jsx)(a.A, {
          children: () => {
            const e = l(d, u),
              a = c
                ? s.replace(
                    n,
                    (function (e) {
                      return 'latest' === e ? 'refs/heads/master' : `refs/tags/v${e}`
                    })(e)
                  )
                : 'latest' === e
                ? s
                : s.replace(n, 'v' + e)
            return (0, i.jsx)(r.A, { className: h, children: a })
          },
        })
      }
    },
  },
])
