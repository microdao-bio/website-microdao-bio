'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [5284],
  {
    96669: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => c,
          contentTitle: () => d,
          default: () => h,
          frontMatter: () => t,
          metadata: () => i,
          toc: () => r,
        })
      const i = JSON.parse(
        '{"id":"simulate-block-chaos-on-kubernetes","title":"Simulate Block Device Latency","description":"BlockChaos Introduction","source":"@site/versioned_docs/version-2.4.3/simulate-block-chaos-on-kubernetes.md","sourceDirName":".","slug":"/simulate-block-chaos-on-kubernetes","permalink":"/zh/docs/2.4.3/simulate-block-chaos-on-kubernetes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.4.3/simulate-block-chaos-on-kubernetes.md","tags":[],"version":"2.4.3","frontMatter":{"title":"Simulate Block Device Latency"},"sidebar":"docs","previous":{"title":"\u6a21\u62df HTTP \u6545\u969c","permalink":"/zh/docs/2.4.3/simulate-http-chaos-on-kubernetes"},"next":{"title":"Chaosd \u7ec4\u4ef6\u7b80\u4ecb","permalink":"/zh/docs/2.4.3/chaosd-overview"}}'
      )
      var l = s(74848),
        o = s(28453)
      const t = { title: 'Simulate Block Device Latency' },
        d = void 0,
        c = {},
        r = [
          { value: 'BlockChaos Introduction', id: 'blockchaos-introduction', level: 2 },
          { value: 'Install kernel module', id: 'install-kernel-module', level: 2 },
          { value: 'Create experiments using the YAML file', id: 'create-experiments-using-the-yaml-file', level: 2 },
        ]
      function a(e) {
        const n = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ...(0, o.R)(),
          ...e.components,
        }
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(n.h2, { id: 'blockchaos-introduction', children: 'BlockChaos Introduction' }),
            '\n',
            (0, l.jsx)(n.p, {
              children:
                'Chaos Mesh provides the BlockChaos experiment type. You can use this experiment type to simulate a block device latency scenario. This document describes how to install the dependencies of a BlockChaos experiment, and create a BlockChaos.',
            }),
            '\n',
            (0, l.jsx)(n.admonition, {
              type: 'note',
              children: (0, l.jsxs)(n.p, {
                children: [
                  'BlockChaos is in an early stage. The installation and configuration experience of it will continue to improve. If you find any issues, please open an issue in ',
                  (0, l.jsx)(n.a, {
                    href: 'https://github.com/chaos-mesh/chaos-mesh',
                    children: 'chaos-mesh/chaos-mesh',
                  }),
                  ' to report.',
                ],
              }),
            }),
            '\n',
            (0, l.jsx)(n.h2, { id: 'install-kernel-module', children: 'Install kernel module' }),
            '\n',
            (0, l.jsxs)(n.p, {
              children: [
                'BlockChaos depends on the ',
                (0, l.jsx)(n.a, { href: 'https://github.com/chaos-mesh/chaos-driver', children: 'chaos-driver' }),
                ' kernel module. It can only be injected on a machine with this module installed. Currently, you have to compile and install the module manually.',
              ],
            }),
            '\n',
            (0, l.jsxs)(n.ol, {
              children: [
                '\n',
                (0, l.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, l.jsx)(n.p, {
                      children: 'Download the source code of this module using the following command:',
                    }),
                    '\n',
                    (0, l.jsx)(n.pre, {
                      children: (0, l.jsx)(n.code, {
                        className: 'language-bash',
                        children:
                          'curl -fsSL -o chaos-driver-v0.2.1.tar.gz https://github.com/chaos-mesh/chaos-driver/archive/refs/tags/v0.2.1.tar.gz\n',
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
                        'Uncompress the ',
                        (0, l.jsx)(n.code, { children: 'chaos-driver-v0.2.1.tar.gz' }),
                        ' file:',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(n.pre, {
                      children: (0, l.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'tar xvf chaos-driver-v0.2.1.tar.gz\n',
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
                        'Prepare the headers of your current kernel. If you are using CentOS/Fedora, you can install the kernel headers with ',
                        (0, l.jsx)(n.code, { children: 'yum' }),
                        ':',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(n.pre, {
                      children: (0, l.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'yum install kernel-devel-$(uname -r)\n',
                      }),
                    }),
                    '\n',
                    (0, l.jsxs)(n.p, {
                      children: [
                        'If you are using Ubuntu/Debian, you can install the kernel headers with ',
                        (0, l.jsx)(n.code, { children: 'apt' }),
                        ':',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(n.pre, {
                      children: (0, l.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'apt install linux-headers-$(uname -r)\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, l.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, l.jsx)(n.p, { children: 'Compile the module:' }),
                    '\n',
                    (0, l.jsx)(n.pre, {
                      children: (0, l.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'cd chaos-driver-v0.2.1\nmake driver/chaos_driver.ko\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, l.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, l.jsx)(n.p, { children: 'Install the kernel module:' }),
                    '\n',
                    (0, l.jsx)(n.pre, {
                      children: (0, l.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'insmod ./driver/chaos_driver.ko\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsxs)(n.p, {
              children: [
                'The ',
                (0, l.jsx)(n.code, { children: 'chaos_driver' }),
                ' module has to be installed every time after rebooting. To load the module automatically, you can copy the module to a subdirectory in ',
                (0, l.jsx)(n.code, { children: '/lib/modules/$(uname -r)/kernel/drivers' }),
                ', run ',
                (0, l.jsx)(n.code, { children: 'depmod -a' }),
                ', and then add ',
                (0, l.jsx)(n.code, { children: 'chaos_driver' }),
                ' to the ',
                (0, l.jsx)(n.code, { children: '/etc/modules' }),
                '.',
              ],
            }),
            '\n',
            (0, l.jsx)(n.p, { children: 'If you have upgraded the kernel, the module should be recompiled.' }),
            '\n',
            (0, l.jsx)(n.admonition, {
              type: 'note',
              children: (0, l.jsx)(n.p, {
                children:
                  'It is recommended to use DKMS or akmod for automatic kernel module compiling or loading. If you want to help us improve the installation experience, creating a DKMS or akmod package and submitting it to different distribution repositories is very welcome.',
              }),
            }),
            '\n',
            (0, l.jsx)(n.h2, {
              id: 'create-experiments-using-the-yaml-file',
              children: 'Create experiments using the YAML file',
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
                        'Write the experiment configuration to the YAML configuration file. The following uses the ',
                        (0, l.jsx)(n.code, { children: 'block-latency.yaml' }),
                        ' file as an example.',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(n.pre, {
                      children: (0, l.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          'apiVersion: chaos-mesh.org/v1alpha1\nkind: BlockChaos\nmetadata:\n  name: hostpath-example-delay\nspec:\n  selector:\n    labelSelectors:\n      app: hostpath-example\n  mode: all\n  volumeName: hostpath-example\n  action: delay\n  delay:\n    latency: 1s\n',
                      }),
                    }),
                    '\n',
                    (0, l.jsx)(n.admonition, {
                      type: 'note',
                      children: (0, l.jsx)(n.p, { children: 'Only hostpath or localvolume is supported.' }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, l.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, l.jsxs)(n.p, {
                      children: ['Use ', (0, l.jsx)(n.code, { children: 'kubectl' }), ' to create an experiment:'],
                    }),
                    '\n',
                    (0, l.jsx)(n.pre, {
                      children: (0, l.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f block-latency.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsx)(n.p, { children: 'You can find the following magic happened:' }),
            '\n',
            (0, l.jsxs)(n.ol, {
              children: [
                '\n',
                (0, l.jsxs)(n.li, {
                  children: [
                    'The elevator of the volume is changed to ',
                    (0, l.jsx)(n.code, { children: 'ioem' }),
                    ' or ',
                    (0, l.jsx)(n.code, { children: 'ioem-mq' }),
                    '. You can check it through ',
                    (0, l.jsx)(n.code, { children: 'cat /sys/block/<device>/queue/scheduler' }),
                    '.',
                  ],
                }),
                '\n',
                (0, l.jsxs)(n.li, {
                  children: [
                    'The ',
                    (0, l.jsx)(n.code, { children: 'ioem' }),
                    ' or ',
                    (0, l.jsx)(n.code, { children: 'ioem-mq' }),
                    ' scheduler will receive the latency request and delay the request for the specified time.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsx)(n.p, {
              children: 'The fields in the YAML configuration file are described in the following table:',
            }),
            '\n',
            (0, l.jsxs)(n.table, {
              children: [
                (0, l.jsx)(n.thead, {
                  children: (0, l.jsxs)(n.tr, {
                    children: [
                      (0, l.jsx)(n.th, { children: 'Parameter' }),
                      (0, l.jsx)(n.th, { children: 'Type' }),
                      (0, l.jsx)(n.th, { children: 'Note' }),
                      (0, l.jsx)(n.th, { children: 'Default value' }),
                      (0, l.jsx)(n.th, { children: 'Required' }),
                      (0, l.jsx)(n.th, { children: 'Example' }),
                    ],
                  }),
                }),
                (0, l.jsxs)(n.tbody, {
                  children: [
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: 'mode' }) }),
                        (0, l.jsx)(n.td, { children: 'string' }),
                        (0, l.jsxs)(n.td, {
                          children: [
                            'Specifies the mode of the experiment. The mode options include ',
                            (0, l.jsx)(n.code, { children: 'one' }),
                            ' (selecting a random Pod), ',
                            (0, l.jsx)(n.code, { children: 'all' }),
                            ' (selecting all eligible Pods), ',
                            (0, l.jsx)(n.code, { children: 'fixed' }),
                            ' (selecting a specified number of eligible Pods), ',
                            (0, l.jsx)(n.code, { children: 'fixed-percent' }),
                            ' (selecting a specified percentage of Pods from the eligible Pods), and ',
                            (0, l.jsx)(n.code, { children: 'random-max-percent' }),
                            ' (selecting the maximum percentage of Pods from the eligible Pods).',
                          ],
                        }),
                        (0, l.jsx)(n.td, { children: 'None' }),
                        (0, l.jsx)(n.td, { children: 'Yes' }),
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: 'one' }) }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: 'value' }) }),
                        (0, l.jsx)(n.td, { children: 'string' }),
                        (0, l.jsxs)(n.td, {
                          children: [
                            'Provides parameters for the ',
                            (0, l.jsx)(n.code, { children: 'mode' }),
                            ' configuration, depending on ',
                            (0, l.jsx)(n.code, { children: 'mode' }),
                            '. For example, when ',
                            (0, l.jsx)(n.code, { children: 'mode' }),
                            ' is set to ',
                            (0, l.jsx)(n.code, { children: 'fixed-percent' }),
                            ', ',
                            (0, l.jsx)(n.code, { children: 'value' }),
                            ' specifies the percentage of Pods.',
                          ],
                        }),
                        (0, l.jsx)(n.td, { children: 'None' }),
                        (0, l.jsx)(n.td, { children: 'No' }),
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: '1' }) }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: 'selector' }) }),
                        (0, l.jsx)(n.td, { children: 'struct' }),
                        (0, l.jsxs)(n.td, {
                          children: [
                            'Specifies the target Pod. For details, refer to ',
                            (0, l.jsx)(n.a, {
                              href: './define-chaos-experiment-scope.md',
                              children: 'Define the experiment scope',
                            }),
                            '.',
                          ],
                        }),
                        (0, l.jsx)(n.td, { children: 'None' }),
                        (0, l.jsx)(n.td, { children: 'Yes' }),
                        (0, l.jsx)(n.td, {}),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: 'volumeName' }) }),
                        (0, l.jsx)(n.td, { children: 'string' }),
                        (0, l.jsxs)(n.td, {
                          children: [
                            "Specifies the volume to inject in the target pods. There should be a corresponding entry in the pods' ",
                            (0, l.jsx)(n.code, { children: '.spec.volumes' }),
                            '.',
                          ],
                        }),
                        (0, l.jsx)(n.td, { children: 'None' }),
                        (0, l.jsx)(n.td, { children: 'Yes' }),
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: 'hostpath-example' }) }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: 'delay.latency' }),
                        (0, l.jsx)(n.td, { children: 'string' }),
                        (0, l.jsx)(n.td, { children: 'Specifies the latency of the block device.' }),
                        (0, l.jsx)(n.td, { children: 'None' }),
                        (0, l.jsx)(n.td, { children: 'Yes' }),
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: '500ms' }) }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, o.R)(), ...e.components }
        return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(a, { ...e }) }) : a(e)
      }
    },
    28453: (e, n, s) => {
      s.d(n, { R: () => t, x: () => d })
      var i = s(96540)
      const l = {},
        o = i.createContext(l)
      function t(e) {
        const n = i.useContext(o)
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e }
          },
          [n, e]
        )
      }
      function d(e) {
        let n
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(l)
              : e.components || l
            : t(e.components)),
          i.createElement(o.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
