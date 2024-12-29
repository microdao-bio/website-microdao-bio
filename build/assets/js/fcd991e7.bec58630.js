'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [6913],
  {
    87307: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => c,
          contentTitle: () => l,
          default: () => o,
          frontMatter: () => d,
          metadata: () => i,
          toc: () => h,
        })
      const i = JSON.parse(
        '{"id":"simulate-io-chaos-on-kubernetes","title":"Simulate File I/O Faults","description":"This document describes how to create IOChaos experiments in Chaos Mesh.","source":"@site/docs/simulate-io-chaos-on-kubernetes.md","sourceDirName":".","slug":"/simulate-io-chaos-on-kubernetes","permalink":"/docs/next/simulate-io-chaos-on-kubernetes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/docs/simulate-io-chaos-on-kubernetes.md","tags":[],"version":"current","frontMatter":{"title":"Simulate File I/O Faults"},"sidebar":"docs","previous":{"title":"Simulate Stress Scenarios","permalink":"/docs/next/simulate-heavy-stress-on-kubernetes"},"next":{"title":"Simulate DNS Faults","permalink":"/docs/next/simulate-dns-chaos-on-kubernetes"}}'
      )
      var r = s(74848),
        t = s(28453)
      const d = { title: 'Simulate File I/O Faults' },
        l = void 0,
        c = {},
        h = [
          { value: 'IOChaos introduction', id: 'iochaos-introduction', level: 2 },
          { value: 'Notes', id: 'notes', level: 2 },
          {
            value: 'Create experiments using Chaos Dashboard',
            id: 'create-experiments-using-chaos-dashboard',
            level: 2,
          },
          { value: 'Create experiments using the YAML files', id: 'create-experiments-using-the-yaml-files', level: 2 },
          { value: 'Latency example', id: 'latency-example', level: 3 },
          { value: 'Fault example', id: 'fault-example', level: 3 },
          { value: 'attrOverride example', id: 'attroverride-example', level: 3 },
          { value: 'Mistake example', id: 'mistake-example', level: 3 },
          { value: 'Field description', id: 'field-description', level: 3 },
          { value: 'General fields', id: 'general-fields', level: 4 },
          { value: 'Fields related to action', id: 'fields-related-to-action', level: 4 },
          { value: 'Local debugging', id: 'local-debugging', level: 2 },
          { value: 'Appendix A: methods type', id: 'appendix-a-methods-type', level: 2 },
          { value: 'Appendix B: Common Error Numbers', id: 'appendix-b-common-error-numbers', level: 2 },
        ]
      function a(e) {
        const n = {
          a: 'a',
          code: 'code',
          em: 'em',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
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
          ...(0, t.R)(),
          ...e.components,
        }
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(n.p, { children: 'This document describes how to create IOChaos experiments in Chaos Mesh.' }),
            '\n',
            (0, r.jsx)(n.h2, { id: 'iochaos-introduction', children: 'IOChaos introduction' }),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'IOChaos is a type of fault in Chaos Mesh. By creating an IOChaos experiment, you can simulate a scenario of file system fault. Currently, IOChaos supports the following fault types:',
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [(0, r.jsx)(n.code, { children: 'latency' }), ': delays file system calls'],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [(0, r.jsx)(n.code, { children: 'fault' }), ': returns an error for filesystem calls'],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [(0, r.jsx)(n.code, { children: 'attrOverride' }), ': modifies file properties'],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.code, { children: 'mistake' }),
                    ': makes the file read or write a wrong value',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'For specific features, refer to ',
                (0, r.jsx)(n.a, {
                  href: '#create-experiments-using-the-yaml-files',
                  children: 'Create experiments using the YAML files',
                }),
                '.',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, { id: 'notes', children: 'Notes' }),
            '\n',
            (0, r.jsxs)(n.ol, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(n.p, {
                      children:
                        'Before creating an IOChaos experiment, make sure there is no Control Manager of Chaos Mesh running on the target Pod.',
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(n.p, {
                      children: [
                        'IOChaos may damage your data. Use IOChaos ',
                        (0, r.jsx)(n.strong, { children: 'with caution' }),
                        ' in the production environment.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'create-experiments-using-chaos-dashboard',
              children: 'Create experiments using Chaos Dashboard',
            }),
            '\n',
            (0, r.jsxs)(n.ol, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(n.p, {
                      children: [
                        'Open Chaos Dashboard, and click ',
                        (0, r.jsx)(n.strong, { children: 'NEW EXPERIMENT' }),
                        ' on the page to create a new experiment:',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(n.p, {
                      children: (0, r.jsx)(n.img, {
                        alt: 'Create a New Experiment',
                        src: s(7278).A + '',
                        width: '959',
                        height: '519',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(n.p, {
                      children: [
                        'In the ',
                        (0, r.jsx)(n.strong, { children: 'Choose a Target' }),
                        ' area, choose ',
                        (0, r.jsx)(n.strong, { children: 'FILE SYSTEM INJECTION' }),
                        ' and select a specific fault type, such as ',
                        (0, r.jsx)(n.strong, { children: 'LATENCY' }),
                        '.',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(n.p, {
                      children: (0, r.jsx)(n.img, {
                        alt: 'ioChaos Experiments',
                        src: s(891).A + '',
                        width: '1974',
                        height: '1364',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(n.p, {
                      children:
                        'Fill out the experiment information, and specify the experiment scope and the scheduled experiment duration.',
                    }),
                    '\n',
                    (0, r.jsx)(n.p, {
                      children: (0, r.jsx)(n.img, {
                        alt: 'Experiment Information',
                        src: s(19263).A + '',
                        width: '973',
                        height: '442',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: ['\n', (0, r.jsx)(n.p, { children: 'Submit the experiment information.' }), '\n'],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'create-experiments-using-the-yaml-files',
              children: 'Create experiments using the YAML files',
            }),
            '\n',
            (0, r.jsx)(n.h3, { id: 'latency-example', children: 'Latency example' }),
            '\n',
            (0, r.jsxs)(n.ol, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(n.p, {
                      children: [
                        'Write the experiment configuration to the ',
                        (0, r.jsx)(n.code, { children: 'io-latency.yaml' }),
                        ' file, as shown below:',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(n.pre, {
                      children: (0, r.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: IOChaos\nmetadata:\n  name: io-latency-example\n  namespace: chaos-mesh\nspec:\n  action: latency\n  mode: one\n  selector:\n    labelSelectors:\n      app: etcd\n  volumePath: /var/run/etcd\n  path: '/var/run/etcd/**/*'\n  delay: '100ms'\n  percent: 50\n  duration: '400s'\n",
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.p, {
                      children: [
                        'In this configuration example, Chaos Mesh injects a delay into the directory ',
                        (0, r.jsx)(n.code, { children: '/var/run/etcd' }),
                        ' and causes latency of 100 milliseconds to all file system operations (including read, writing, list contents, and so on) in this directory.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(n.p, {
                      children: [
                        'After the configuration file is prepared, use ',
                        (0, r.jsx)(n.code, { children: 'kubectl' }),
                        ' to create an experiment:',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(n.pre, {
                      children: (0, r.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f ./io-latency.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, { id: 'fault-example', children: 'Fault example' }),
            '\n',
            (0, r.jsxs)(n.ol, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(n.p, {
                      children: [
                        'Write the experiment configuration to the ',
                        (0, r.jsx)(n.code, { children: 'io-fault.yaml' }),
                        ' file, as shown below:',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(n.pre, {
                      children: (0, r.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: IOChaos\nmetadata:\n  name: io-fault-example\n  namespace: chaos-mesh\nspec:\n  action: fault\n  mode: one\n  selector:\n    labelSelectors:\n      app: etcd\n  volumePath: /var/run/etcd\n  path: /var/run/etcd/**/*\n  errno: 5\n  percent: 50\n  duration: '400s'\n",
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.p, {
                      children: [
                        'In this example, Chaos Mesh injects a file fault into the directory ',
                        (0, r.jsx)(n.code, { children: '/var/run/etcd' }),
                        ', which gives a 50% probability of failure in all file system operations under this directory and returns error code 5 (Input/output error).',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(n.p, {
                      children: [
                        'After the configuration file is prepared, use ',
                        (0, r.jsx)(n.code, { children: 'kubectl' }),
                        ' to create an experiment:',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(n.pre, {
                      children: (0, r.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f ./io-fault.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, { id: 'attroverride-example', children: 'attrOverride example' }),
            '\n',
            (0, r.jsxs)(n.ol, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(n.p, {
                      children: [
                        'Write the experiment configuration to the ',
                        (0, r.jsx)(n.code, { children: 'io-attr.yaml' }),
                        ' file:',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(n.pre, {
                      children: (0, r.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: IOChaos\nmetadata:\n  name: io-attr-example\n  namespace: chaos-mesh\nspec:\n  action: attrOverride\n  mode: one\n  selector:\n    labelSelectors:\n      app: etcd\n  volumePath: /var/run/etcd\n  path: /var/run/etcd/**/*\n  attr:\n    perm: 72\n  percent: 10\n  duration: '400s'\n",
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.p, {
                      children: [
                        'In this configuration example, Chaos Mesh injects ',
                        (0, r.jsx)(n.code, { children: '/var/run/etcd' }),
                        ' directories ',
                        (0, r.jsx)(n.code, { children: 'attrOverride' }),
                        ' fault, giving a 10% probability that all file system operations in this directory will change the target file permissions to 72 (110 in octal), which will allow files to be executed only by the owner and their group and not authorized to perform other actions.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(n.p, {
                      children: [
                        'After the configuration file is prepared, use ',
                        (0, r.jsx)(n.code, { children: 'kubectl' }),
                        ' to create an experiment:',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(n.pre, {
                      children: (0, r.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f ./io-attr.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, { id: 'mistake-example', children: 'Mistake example' }),
            '\n',
            (0, r.jsxs)(n.ol, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(n.p, {
                      children: [
                        'Write the experiment configuration to the ',
                        (0, r.jsx)(n.code, { children: 'io-mistake.yaml' }),
                        ' file:',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(n.pre, {
                      children: (0, r.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: IOChaos\nmetadata:\n  name: io-mistake-example\n  namespace: chaos-mesh\nspec:\n  action: mistake\n  mode: one\n  selector:\n    labelSelectors:\n      app: etcd\n  volumePath: /var/run/etcd\n  path: /var/run/etcd/**/*\n  mistake:\n    filling: zero\n    maxOccurrences: 1\n    maxLength: 10\n  methods:\n    - READ\n    - WRITE\n  percent: 10\n  duration: '400s'\n",
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.p, {
                      children: [
                        'In this configuration example, Chaos Mesh injects read and write faults into the directory ',
                        (0, r.jsx)(n.code, { children: '/var/run/etcd' }),
                        ', which gives a 10% probability of failure in the read and write operations under this directory. During this process, one random position with a maximum length of 10 bytes will be replaced with 0 bytes.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(n.p, {
                      children: [
                        'After the configuration file is prepared, use ',
                        (0, r.jsx)(n.code, { children: 'kubectl' }),
                        ' to create an experiment:',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(n.pre, {
                      children: (0, r.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f ./io-mistake.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, { id: 'field-description', children: 'Field description' }),
            '\n',
            (0, r.jsx)(n.h4, { id: 'general-fields', children: 'General fields' }),
            '\n',
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.th, { children: 'Parameter' }),
                      (0, r.jsx)(n.th, { children: 'Type' }),
                      (0, r.jsx)(n.th, { children: 'Description' }),
                      (0, r.jsx)(n.th, { children: 'Default value' }),
                      (0, r.jsx)(n.th, { children: 'Required' }),
                      (0, r.jsx)(n.th, { children: 'Example' }),
                    ],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: 'action' }),
                        (0, r.jsx)(n.td, { children: 'string' }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Indicates the specific type of faults. Only latency, fault, attrOverride, and mistake are supported.',
                        }),
                        (0, r.jsx)(n.td, {}),
                        (0, r.jsx)(n.td, { children: 'Yes' }),
                        (0, r.jsx)(n.td, { children: 'latency' }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: 'mode' }),
                        (0, r.jsx)(n.td, { children: 'string' }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            'Specifies the mode of the experiment. The mode options include ',
                            (0, r.jsx)(n.code, { children: 'one' }),
                            ' (selecting a Pod at random), ',
                            (0, r.jsx)(n.code, { children: 'all' }),
                            ' (selecting all eligible Pods), ',
                            (0, r.jsx)(n.code, { children: 'fixed' }),
                            ' (selecting a specified number of eligible Pods), ',
                            (0, r.jsx)(n.code, { children: 'fixed-percent' }),
                            ' (selecting a specified percentage of the eligible Pods), and ',
                            (0, r.jsx)(n.code, { children: 'random-max-percent' }),
                            ' (selecting the maximum percentage of the eligible Pods).',
                          ],
                        }),
                        (0, r.jsx)(n.td, { children: 'None' }),
                        (0, r.jsx)(n.td, { children: 'Yes' }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'one' }) }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: 'selector' }),
                        (0, r.jsx)(n.td, { children: 'struct' }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            'Specifies the target Pod. For details, refer to ',
                            (0, r.jsx)(n.a, {
                              href: '/docs/next/define-chaos-experiment-scope',
                              children: 'Define the experiment scope',
                            }),
                            '.',
                          ],
                        }),
                        (0, r.jsx)(n.td, { children: 'None' }),
                        (0, r.jsx)(n.td, { children: 'Yes' }),
                        (0, r.jsx)(n.td, {}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: 'value' }),
                        (0, r.jsx)(n.td, { children: 'string' }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            'Provides parameters for the ',
                            (0, r.jsx)(n.code, { children: 'mode' }),
                            ' configuration, depending on ',
                            (0, r.jsx)(n.code, { children: 'mode' }),
                            '. For example, when ',
                            (0, r.jsx)(n.code, { children: 'mode' }),
                            ' is set to ',
                            (0, r.jsx)(n.code, { children: 'fixed-percent' }),
                            ', ',
                            (0, r.jsx)(n.code, { children: 'value' }),
                            ' specifies the percentage of Pods.',
                          ],
                        }),
                        (0, r.jsx)(n.td, {}),
                        (0, r.jsx)(n.td, { children: 'No' }),
                        (0, r.jsx)(n.td, { children: '1' }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: 'volumePath' }),
                        (0, r.jsx)(n.td, { children: 'string' }),
                        (0, r.jsx)(n.td, {
                          children:
                            'The mount point of volume in the target container. Must be the root directory of the mount.',
                        }),
                        (0, r.jsx)(n.td, {}),
                        (0, r.jsx)(n.td, { children: 'Yes' }),
                        (0, r.jsx)(n.td, { children: '/var/run/etcd' }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: 'path' }),
                        (0, r.jsx)(n.td, { children: 'string' }),
                        (0, r.jsx)(n.td, {
                          children: 'The valid range of fault injections, either a wildcard or a single file.',
                        }),
                        (0, r.jsx)(n.td, { children: 'Valid for all files by default' }),
                        (0, r.jsx)(n.td, { children: 'No' }),
                        (0, r.jsxs)(n.td, { children: ['/var/run/etcd/*', (0, r.jsx)(n.em, { children: '/' })] }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: 'methods' }),
                        (0, r.jsx)(n.td, { children: '[]string' }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Type of the file system call that requires injecting fault. For more information about supported types, refer to [Appendix A](#appendix-a: methods-type).',
                        }),
                        (0, r.jsx)(n.td, { children: 'All Types' }),
                        (0, r.jsx)(n.td, { children: 'No' }),
                        (0, r.jsx)(n.td, { children: 'READ' }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: 'percent' }),
                        (0, r.jsx)(n.td, { children: 'int' }),
                        (0, r.jsx)(n.td, { children: 'Probability of failure per operation, in %.' }),
                        (0, r.jsx)(n.td, { children: '100' }),
                        (0, r.jsx)(n.td, { children: 'No' }),
                        (0, r.jsx)(n.td, { children: '100' }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: 'containerNames' }),
                        (0, r.jsx)(n.td, { children: '[]string' }),
                        (0, r.jsx)(n.td, {
                          children: 'Specifies the name of the container into which the fault is injected.',
                        }),
                        (0, r.jsx)(n.td, {}),
                        (0, r.jsx)(n.td, { children: 'No' }),
                        (0, r.jsx)(n.td, {}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: 'duration' }),
                        (0, r.jsx)(n.td, { children: 'string' }),
                        (0, r.jsx)(n.td, { children: 'Specifies the duration of the experiment.' }),
                        (0, r.jsx)(n.td, {}),
                        (0, r.jsx)(n.td, { children: 'Yes' }),
                        (0, r.jsx)(n.td, { children: '30s' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(n.h4, { id: 'fields-related-to-action', children: 'Fields related to action' }),
            '\n',
            (0, r.jsx)(n.p, {
              children: 'The following are specific information about fields corresponding to action:',
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(n.p, { children: 'latency' }),
                    '\n',
                    (0, r.jsxs)(n.table, {
                      children: [
                        (0, r.jsx)(n.thead, {
                          children: (0, r.jsxs)(n.tr, {
                            children: [
                              (0, r.jsx)(n.th, { children: 'Parameter' }),
                              (0, r.jsx)(n.th, { children: 'Type' }),
                              (0, r.jsx)(n.th, { children: 'Description' }),
                              (0, r.jsx)(n.th, { children: 'Default value' }),
                              (0, r.jsx)(n.th, { children: 'Required' }),
                              (0, r.jsx)(n.th, { children: 'Example' }),
                            ],
                          }),
                        }),
                        (0, r.jsx)(n.tbody, {
                          children: (0, r.jsxs)(n.tr, {
                            children: [
                              (0, r.jsx)(n.td, { children: 'delay' }),
                              (0, r.jsx)(n.td, { children: 'string' }),
                              (0, r.jsx)(n.td, { children: 'Specific delay time' }),
                              (0, r.jsx)(n.td, {}),
                              (0, r.jsx)(n.td, { children: 'Yes' }),
                              (0, r.jsx)(n.td, { children: '100 ms' }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(n.p, { children: 'fault' }),
                    '\n',
                    (0, r.jsxs)(n.table, {
                      children: [
                        (0, r.jsx)(n.thead, {
                          children: (0, r.jsxs)(n.tr, {
                            children: [
                              (0, r.jsx)(n.th, { children: 'Parameter' }),
                              (0, r.jsx)(n.th, { children: 'Type' }),
                              (0, r.jsx)(n.th, { children: 'Description' }),
                              (0, r.jsx)(n.th, { children: 'Default value' }),
                              (0, r.jsx)(n.th, { children: 'Required' }),
                              (0, r.jsx)(n.th, { children: 'Example' }),
                            ],
                          }),
                        }),
                        (0, r.jsx)(n.tbody, {
                          children: (0, r.jsxs)(n.tr, {
                            children: [
                              (0, r.jsx)(n.td, { children: 'errno' }),
                              (0, r.jsx)(n.td, { children: 'int' }),
                              (0, r.jsx)(n.td, { children: 'returned error number' }),
                              (0, r.jsx)(n.td, {}),
                              (0, r.jsx)(n.td, { children: 'Yes' }),
                              (0, r.jsx)(n.td, { children: '22' }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    '\n',
                    (0, r.jsxs)(n.p, {
                      children: [
                        'For common error numbers, see ',
                        (0, r.jsx)(n.a, { href: '#appendix-b:common-error-numbers', children: 'Appendix B' }),
                        '.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(n.p, { children: 'attrOverride' }),
                    '\n',
                    (0, r.jsxs)(n.table, {
                      children: [
                        (0, r.jsx)(n.thead, {
                          children: (0, r.jsxs)(n.tr, {
                            children: [
                              (0, r.jsx)(n.th, { children: 'Parameter' }),
                              (0, r.jsx)(n.th, { children: 'Type' }),
                              (0, r.jsx)(n.th, { children: 'Description' }),
                              (0, r.jsx)(n.th, { children: 'Default value' }),
                              (0, r.jsx)(n.th, { children: 'Required' }),
                              (0, r.jsx)(n.th, { children: 'Example' }),
                            ],
                          }),
                        }),
                        (0, r.jsx)(n.tbody, {
                          children: (0, r.jsxs)(n.tr, {
                            children: [
                              (0, r.jsx)(n.td, { children: 'attr' }),
                              (0, r.jsx)(n.td, { children: 'AttrOverrideSpec' }),
                              (0, r.jsx)(n.td, { children: 'Specific property override rules' }),
                              (0, r.jsx)(n.td, {}),
                              (0, r.jsx)(n.td, { children: 'Yes' }),
                              (0, r.jsx)(n.td, { children: 'As follows' }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(n.p, { children: 'AttrOverrideSpec is defined as follows:' }),
                    '\n',
                    (0, r.jsxs)(n.table, {
                      children: [
                        (0, r.jsx)(n.thead, {
                          children: (0, r.jsxs)(n.tr, {
                            children: [
                              (0, r.jsx)(n.th, { children: 'Parameter' }),
                              (0, r.jsx)(n.th, { children: 'Type' }),
                              (0, r.jsx)(n.th, { children: 'Description' }),
                              (0, r.jsx)(n.th, { children: 'Default value' }),
                              (0, r.jsx)(n.th, { children: 'Required' }),
                              (0, r.jsx)(n.th, { children: 'Example' }),
                            ],
                          }),
                        }),
                        (0, r.jsxs)(n.tbody, {
                          children: [
                            (0, r.jsxs)(n.tr, {
                              children: [
                                (0, r.jsx)(n.td, { children: 'ino' }),
                                (0, r.jsx)(n.td, { children: 'int' }),
                                (0, r.jsx)(n.td, { children: 'ino number' }),
                                (0, r.jsx)(n.td, {}),
                                (0, r.jsx)(n.td, { children: 'No' }),
                                (0, r.jsx)(n.td, {}),
                              ],
                            }),
                            (0, r.jsxs)(n.tr, {
                              children: [
                                (0, r.jsx)(n.td, { children: 'size' }),
                                (0, r.jsx)(n.td, { children: 'int' }),
                                (0, r.jsx)(n.td, { children: 'File size' }),
                                (0, r.jsx)(n.td, {}),
                                (0, r.jsx)(n.td, { children: 'No' }),
                                (0, r.jsx)(n.td, {}),
                              ],
                            }),
                            (0, r.jsxs)(n.tr, {
                              children: [
                                (0, r.jsx)(n.td, { children: 'blocks' }),
                                (0, r.jsx)(n.td, { children: 'int' }),
                                (0, r.jsx)(n.td, { children: 'Number of blocks that the file uses' }),
                                (0, r.jsx)(n.td, {}),
                                (0, r.jsx)(n.td, { children: 'No' }),
                                (0, r.jsx)(n.td, {}),
                              ],
                            }),
                            (0, r.jsxs)(n.tr, {
                              children: [
                                (0, r.jsx)(n.td, { children: 'atime' }),
                                (0, r.jsx)(n.td, { children: 'TimeSpec' }),
                                (0, r.jsx)(n.td, { children: 'Last access time' }),
                                (0, r.jsx)(n.td, {}),
                                (0, r.jsx)(n.td, { children: 'No' }),
                                (0, r.jsx)(n.td, {}),
                              ],
                            }),
                            (0, r.jsxs)(n.tr, {
                              children: [
                                (0, r.jsx)(n.td, { children: 'mtime' }),
                                (0, r.jsx)(n.td, { children: 'TimeSpec' }),
                                (0, r.jsx)(n.td, { children: 'Last modified time' }),
                                (0, r.jsx)(n.td, {}),
                                (0, r.jsx)(n.td, { children: 'No' }),
                                (0, r.jsx)(n.td, {}),
                              ],
                            }),
                            (0, r.jsxs)(n.tr, {
                              children: [
                                (0, r.jsx)(n.td, { children: 'ctime' }),
                                (0, r.jsx)(n.td, { children: 'TimeSpec' }),
                                (0, r.jsx)(n.td, { children: 'Last status change time' }),
                                (0, r.jsx)(n.td, {}),
                                (0, r.jsx)(n.td, { children: 'No' }),
                                (0, r.jsx)(n.td, {}),
                              ],
                            }),
                            (0, r.jsxs)(n.tr, {
                              children: [
                                (0, r.jsx)(n.td, { children: 'kind' }),
                                (0, r.jsx)(n.td, { children: 'string' }),
                                (0, r.jsxs)(n.td, {
                                  children: [
                                    'File type, see ',
                                    (0, r.jsx)(n.a, {
                                      href: 'https://docs.rs/fuser/0.7.0/fuser/enum.FileType.html',
                                      children: 'fuser::FileType',
                                    }),
                                  ],
                                }),
                                (0, r.jsx)(n.td, {}),
                                (0, r.jsx)(n.td, { children: 'No' }),
                                (0, r.jsx)(n.td, {}),
                              ],
                            }),
                            (0, r.jsxs)(n.tr, {
                              children: [
                                (0, r.jsx)(n.td, { children: 'perm' }),
                                (0, r.jsx)(n.td, { children: 'int' }),
                                (0, r.jsx)(n.td, { children: 'File permissions in decimal' }),
                                (0, r.jsx)(n.td, {}),
                                (0, r.jsx)(n.td, { children: 'No' }),
                                (0, r.jsx)(n.td, { children: '72 (110 in octal)' }),
                              ],
                            }),
                            (0, r.jsxs)(n.tr, {
                              children: [
                                (0, r.jsx)(n.td, { children: 'nlink' }),
                                (0, r.jsx)(n.td, { children: 'int' }),
                                (0, r.jsx)(n.td, { children: 'Number of hard links' }),
                                (0, r.jsx)(n.td, {}),
                                (0, r.jsx)(n.td, { children: 'No' }),
                                (0, r.jsx)(n.td, {}),
                              ],
                            }),
                            (0, r.jsxs)(n.tr, {
                              children: [
                                (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'uid' }) }),
                                (0, r.jsx)(n.td, { children: 'int' }),
                                (0, r.jsx)(n.td, { children: 'User ID of the owner' }),
                                (0, r.jsx)(n.td, {}),
                                (0, r.jsx)(n.td, { children: 'No' }),
                                (0, r.jsx)(n.td, {}),
                              ],
                            }),
                            (0, r.jsxs)(n.tr, {
                              children: [
                                (0, r.jsx)(n.td, { children: 'gid' }),
                                (0, r.jsx)(n.td, { children: 'int' }),
                                (0, r.jsx)(n.td, { children: 'Group ID of the owner' }),
                                (0, r.jsx)(n.td, {}),
                                (0, r.jsx)(n.td, { children: 'No' }),
                                (0, r.jsx)(n.td, {}),
                              ],
                            }),
                            (0, r.jsxs)(n.tr, {
                              children: [
                                (0, r.jsx)(n.td, { children: 'rdev' }),
                                (0, r.jsx)(n.td, { children: 'int' }),
                                (0, r.jsx)(n.td, { children: 'Device ID' }),
                                (0, r.jsx)(n.td, {}),
                                (0, r.jsx)(n.td, { children: 'No' }),
                                (0, r.jsx)(n.td, {}),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(n.p, { children: 'TimeSpec is defined as follows:' }),
                    '\n',
                    (0, r.jsxs)(n.table, {
                      children: [
                        (0, r.jsx)(n.thead, {
                          children: (0, r.jsxs)(n.tr, {
                            children: [
                              (0, r.jsx)(n.th, { children: 'Parameter' }),
                              (0, r.jsx)(n.th, { children: 'Type' }),
                              (0, r.jsx)(n.th, { children: 'Description' }),
                              (0, r.jsx)(n.th, { children: 'Default value' }),
                              (0, r.jsx)(n.th, { children: 'Required' }),
                              (0, r.jsx)(n.th, { children: 'Example' }),
                            ],
                          }),
                        }),
                        (0, r.jsxs)(n.tbody, {
                          children: [
                            (0, r.jsxs)(n.tr, {
                              children: [
                                (0, r.jsx)(n.td, { children: 'sec' }),
                                (0, r.jsx)(n.td, { children: 'int' }),
                                (0, r.jsx)(n.td, { children: 'timestamp in seconds' }),
                                (0, r.jsx)(n.td, {}),
                                (0, r.jsx)(n.td, { children: 'No' }),
                                (0, r.jsx)(n.td, {}),
                              ],
                            }),
                            (0, r.jsxs)(n.tr, {
                              children: [
                                (0, r.jsx)(n.td, { children: 'nsec' }),
                                (0, r.jsx)(n.td, { children: 'int' }),
                                (0, r.jsx)(n.td, { children: 'Timestamp in nanoseconds' }),
                                (0, r.jsx)(n.td, {}),
                                (0, r.jsx)(n.td, { children: 'No' }),
                                (0, r.jsx)(n.td, {}),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    '\n',
                    (0, r.jsxs)(n.p, {
                      children: [
                        'For the specific meaning of parameters, you can refer to ',
                        (0, r.jsx)(n.a, {
                          href: 'https://man7.org/linux/man-pages/man2/lstat.2.html',
                          children: 'man stat',
                        }),
                        '.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(n.p, { children: 'mistake' }),
                    '\n',
                    (0, r.jsxs)(n.table, {
                      children: [
                        (0, r.jsx)(n.thead, {
                          children: (0, r.jsxs)(n.tr, {
                            children: [
                              (0, r.jsx)(n.th, { children: 'Parameter' }),
                              (0, r.jsx)(n.th, { children: 'Type' }),
                              (0, r.jsx)(n.th, { children: 'Description' }),
                              (0, r.jsx)(n.th, { children: 'Default value' }),
                              (0, r.jsx)(n.th, { children: 'Required' }),
                              (0, r.jsx)(n.th, { children: 'Example' }),
                            ],
                          }),
                        }),
                        (0, r.jsx)(n.tbody, {
                          children: (0, r.jsxs)(n.tr, {
                            children: [
                              (0, r.jsx)(n.td, { children: 'mistake' }),
                              (0, r.jsx)(n.td, { children: 'MistakeSpec' }),
                              (0, r.jsx)(n.td, { children: 'Specific error rules' }),
                              (0, r.jsx)(n.td, {}),
                              (0, r.jsx)(n.td, { children: 'Yes' }),
                              (0, r.jsx)(n.td, {}),
                            ],
                          }),
                        }),
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(n.p, { children: 'MistakeSpec is defined as follows:' }),
                    '\n',
                    (0, r.jsxs)(n.table, {
                      children: [
                        (0, r.jsx)(n.thead, {
                          children: (0, r.jsxs)(n.tr, {
                            children: [
                              (0, r.jsx)(n.th, { children: 'Parameter' }),
                              (0, r.jsx)(n.th, { children: 'Type' }),
                              (0, r.jsx)(n.th, { children: 'Description' }),
                              (0, r.jsx)(n.th, { children: 'Default value' }),
                              (0, r.jsx)(n.th, { children: 'Required' }),
                              (0, r.jsx)(n.th, { children: 'Example' }),
                            ],
                          }),
                        }),
                        (0, r.jsxs)(n.tbody, {
                          children: [
                            (0, r.jsxs)(n.tr, {
                              children: [
                                (0, r.jsx)(n.td, { children: 'filling' }),
                                (0, r.jsx)(n.td, { children: 'string' }),
                                (0, r.jsx)(n.td, {
                                  children:
                                    'The wrong data to be filled. Only zero (fill 0) or random (fill random bytes) are supported.',
                                }),
                                (0, r.jsx)(n.td, {}),
                                (0, r.jsx)(n.td, { children: 'Yes' }),
                                (0, r.jsx)(n.td, {}),
                              ],
                            }),
                            (0, r.jsxs)(n.tr, {
                              children: [
                                (0, r.jsx)(n.td, { children: 'maxOccurrences' }),
                                (0, r.jsx)(n.td, { children: 'int' }),
                                (0, r.jsx)(n.td, { children: 'Maximum number of errors in each operation.' }),
                                (0, r.jsx)(n.td, {}),
                                (0, r.jsx)(n.td, { children: 'Yes' }),
                                (0, r.jsx)(n.td, { children: '1' }),
                              ],
                            }),
                            (0, r.jsxs)(n.tr, {
                              children: [
                                (0, r.jsx)(n.td, { children: 'maxLength' }),
                                (0, r.jsx)(n.td, { children: 'int' }),
                                (0, r.jsx)(n.td, { children: 'Maximum length of each error (in bytes).' }),
                                (0, r.jsx)(n.td, {}),
                                (0, r.jsx)(n.td, { children: 'Yes' }),
                                (0, r.jsx)(n.td, { children: '1' }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                '::warning It is suggested that you only use mistake on READ and WRITE file system calls. Using mistake on other file system calls may lead to unexpected consequences, including but not limited to file system damage and program crashes. :::',
            }),
            '\n',
            (0, r.jsx)(n.h2, { id: 'local-debugging', children: 'Local debugging' }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'If you are not sure about the effect of a certain Chaos, you can use ',
                (0, r.jsx)(n.a, { href: 'https://github.com/chaos-mesh/toda', children: 'toda' }),
                ' to test the feature locally. Chaos Mesh also uses toda to implement IOChaos.',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, { id: 'appendix-a-methods-type', children: 'Appendix A: methods type' }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, { children: 'lookup' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'forget' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'getattr' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'setattr' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'readlink' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'mknod' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'mkdir' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'unlink' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'rmdir' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'symlink' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'rename' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'link' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'open' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'read' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'write' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'flush' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'release' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'fsync' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'opendir' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'readdir' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'releasedir' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'fsyncdir' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'statfs' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'setxattr' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'getxattr' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'listxattr' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'removexatr' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'access' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'create' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'getlk' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'setlk' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'bmap' }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'For more information, refer to ',
                (0, r.jsx)(n.a, {
                  href: 'https://docs.rs/fuser/0.7.0/fuser/trait.Filesystem.html',
                  children: 'fuser::Filesystem',
                }),
                '.',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, { id: 'appendix-b-common-error-numbers', children: 'Appendix B: Common Error Numbers' }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, { children: '1: Operation not permitted' }),
                '\n',
                (0, r.jsx)(n.li, { children: '2: No such file or directory' }),
                '\n',
                (0, r.jsx)(n.li, { children: '5: I/O error' }),
                '\n',
                (0, r.jsx)(n.li, { children: '6: No such device or address' }),
                '\n',
                (0, r.jsx)(n.li, { children: '12: Out of memory' }),
                '\n',
                (0, r.jsx)(n.li, { children: '16: Device or resource busy' }),
                '\n',
                (0, r.jsx)(n.li, { children: '17: File exists' }),
                '\n',
                (0, r.jsx)(n.li, { children: '20: Not a directory' }),
                '\n',
                (0, r.jsx)(n.li, { children: '22: Invalid argument' }),
                '\n',
                (0, r.jsx)(n.li, { children: '24: Too many open files' }),
                '\n',
                (0, r.jsx)(n.li, { children: '28: No space left on device' }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'For more information, refer to ',
                (0, r.jsx)(n.a, {
                  href: 'https://raw.githubusercontent.com/torvalds/linux/master/include/uapi/asm-generic/errno-base.h',
                  children: 'Linux source code',
                }),
                '.',
              ],
            }),
          ],
        })
      }
      function o(e = {}) {
        const { wrapper: n } = { ...(0, t.R)(), ...e.components }
        return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e)
      }
    },
    7278: (e, n, s) => {
      s.d(n, { A: () => i })
      const i = s.p + 'assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png'
    },
    19263: (e, n, s) => {
      s.d(n, { A: () => i })
      const i = s.p + 'assets/images/exp-info-8b402b174aa7d3cd9f8cfde8b492e876.png'
    },
    891: (e, n, s) => {
      s.d(n, { A: () => i })
      const i = s.p + 'assets/images/iochaos-exp-f5c4d602a5bc4060bbe7f84932010500.png'
    },
    28453: (e, n, s) => {
      s.d(n, { R: () => d, x: () => l })
      var i = s(96540)
      const r = {},
        t = i.createContext(r)
      function d(e) {
        const n = i.useContext(t)
        return i.useMemo(
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
              ? e.components(r)
              : e.components || r
            : d(e.components)),
          i.createElement(t.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
