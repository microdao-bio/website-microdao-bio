'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [569],
  {
    52051: (e, s, t) => {
      t.r(s),
        t.d(s, {
          assets: () => c,
          contentTitle: () => o,
          default: () => d,
          frontMatter: () => r,
          metadata: () => n,
          toc: () => a,
        })
      const n = JSON.parse(
        '{"id":"define-chaos-experiment-scope","title":"Define the Scope of Chaos Experiments","description":"This document describes how to define the scope of a single Chaos experiment, which helps you accurately control the fault\'s explosion radius.","source":"@site/docs/define-chaos-experiment-scope.md","sourceDirName":".","slug":"/define-chaos-experiment-scope","permalink":"/docs/next/define-chaos-experiment-scope","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/docs/define-chaos-experiment-scope.md","tags":[],"version":"current","frontMatter":{"title":"Define the Scope of Chaos Experiments"},"sidebar":"docs","previous":{"title":"Remote Cluster Management","permalink":"/docs/next/remote-cluster-management"},"next":{"title":"Define Scheduling Rules","permalink":"/docs/next/define-scheduling-rules"}}'
      )
      var i = t(74848),
        l = t(28453)
      const r = { title: 'Define the Scope of Chaos Experiments' },
        o = void 0,
        c = {},
        a = [
          { value: 'An overview of experiment scopes', id: 'an-overview-of-experiment-scopes', level: 2 },
          {
            value: 'Define the experiment scope in a YAML configuration file',
            id: 'define-the-experiment-scope-in-a-yaml-configuration-file',
            level: 2,
          },
          { value: 'Namespace selectors', id: 'namespace-selectors', level: 3 },
          { value: 'Label selectors', id: 'label-selectors', level: 3 },
          { value: 'Expression selectors', id: 'expression-selectors', level: 3 },
          { value: 'Annotation selectors', id: 'annotation-selectors', level: 3 },
          { value: 'Field selectors', id: 'field-selectors', level: 3 },
          { value: 'PodPhase selectors', id: 'podphase-selectors', level: 3 },
          { value: 'Node selectors', id: 'node-selectors', level: 3 },
          { value: 'Node list selector', id: 'node-list-selector', level: 3 },
          { value: 'Pod list selector', id: 'pod-list-selector', level: 3 },
          { value: 'Physical machine list selector', id: 'physical-machine-list-selector', level: 3 },
          {
            value: 'Define the experiment scope on Chaos Dashboard',
            id: 'define-the-experiment-scope-on-chaos-dashboard',
            level: 2,
          },
          { value: 'Compatibility matrix', id: 'compatibility-matrix', level: 2 },
        ]
      function h(e) {
        const s = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          img: 'img',
          li: 'li',
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
          ...(0, l.R)(),
          ...e.components,
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(s.p, {
              children:
                "This document describes how to define the scope of a single Chaos experiment, which helps you accurately control the fault's explosion radius.",
            }),
            '\n',
            (0, i.jsx)(s.h2, { id: 'an-overview-of-experiment-scopes', children: 'An overview of experiment scopes' }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'In Chaos Mesh, you can define the scope of a single Chaos experiment by specifying a selector.',
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'Different types of selectors correspond to different filtering rules. You can specify one or more selectors in a Chaos experiment to define the scope of your experiment. If multiple selectors are specified at the same time, the current experiment target must meet the rules of all specified selectors at the same time.',
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'When you create a Chaos experiment, Chaos Mesh supports the following ways to define the scope of an experiment. You can choose any one of the following ways as needed:',
            }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsx)(s.li, { children: 'Define the experiment scope in a YAML configuration file' }),
                '\n',
                (0, i.jsx)(s.li, { children: 'Define the experiment scope on the Chaos Dashboard' }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.h2, {
              id: 'define-the-experiment-scope-in-a-yaml-configuration-file',
              children: 'Define the experiment scope in a YAML configuration file',
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'This section introduces the meanings of different selector types and their the usages, and provides the configuration examples in the YAML file. When defining the experiment scope in the YAML file, you can specify one or more selectors according to your need of scope filtering.',
            }),
            '\n',
            (0, i.jsx)(s.h3, { id: 'namespace-selectors', children: 'Namespace selectors' }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsx)(s.li, { children: "Specifies the namespace of the experiment's target Pod." }),
                '\n',
                (0, i.jsx)(s.li, { children: 'Data type: string array type.' }),
                '\n',
                (0, i.jsx)(s.li, {
                  children:
                    'If this selector is empty or is not specified, Chaos Mesh will set it to the namespace of the current Chaos experiment.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'When creating the experiment using the YAML file, you need to configure selectors. For example:',
            }),
            '\n',
            (0, i.jsx)(s.pre, {
              children: (0, i.jsx)(s.code, {
                className: 'language-yaml',
                children: "spec:\n  selector:\n    namespaces:\n      - 'app-ns'\n",
              }),
            }),
            '\n',
            (0, i.jsx)(s.h3, { id: 'label-selectors', children: 'Label selectors' }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    'Specifies the ',
                    (0, i.jsx)(s.a, {
                      href: 'https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/',
                      children: 'labels',
                    }),
                    " that the experiment's target Pod must have.",
                  ],
                }),
                '\n',
                (0, i.jsx)(s.li, { children: 'Data type: key-value pairs.' }),
                '\n',
                (0, i.jsx)(s.li, {
                  children:
                    'If multiple labels are specified, the experiment target must have all the labels specified by this selector.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'When creating the experiment using the YAML file, you need to configure selectors. For example:',
            }),
            '\n',
            (0, i.jsx)(s.pre, {
              children: (0, i.jsx)(s.code, {
                className: 'language-yaml',
                children: "spec:\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n",
              }),
            }),
            '\n',
            (0, i.jsx)(s.h3, { id: 'expression-selectors', children: 'Expression selectors' }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    'Specifies a set of ',
                    (0, i.jsx)(s.a, {
                      href: 'https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#resources-that-support-set-based-requirements',
                      children: 'expressions',
                    }),
                    " that define the label's rules to specifiy the experiment's target Pod.",
                  ],
                }),
                '\n',
                (0, i.jsx)(s.li, {
                  children:
                    "You can use this selector to set up the experiment's target Pod that does not meet some labels.",
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'When creating the experiment using the YAML file, you need to configure selectors. For example:',
            }),
            '\n',
            (0, i.jsx)(s.pre, {
              children: (0, i.jsx)(s.code, {
                className: 'language-yaml',
                children:
                  'spec:\n  selector:\n    expressionSelectors:\n      - { key: tier, operator: In, values: [cache] }\n      - { key: environment, operator: NotIn, values: [dev] }\n',
              }),
            }),
            '\n',
            (0, i.jsx)(s.h3, { id: 'annotation-selectors', children: 'Annotation selectors' }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    'Specifies the ',
                    (0, i.jsx)(s.a, {
                      href: 'https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/',
                      children: 'annotations',
                    }),
                    " that the experiment's target Pod must have.",
                  ],
                }),
                '\n',
                (0, i.jsx)(s.li, { children: 'Data type: key-value pairs.' }),
                '\n',
                (0, i.jsx)(s.li, {
                  children:
                    'If multiple annotations are specified, the experiment target must have all annotations specified by this selector.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'When creating the experiment using the YAML file, you need to configure selectors. For example:',
            }),
            '\n',
            (0, i.jsx)(s.pre, {
              children: (0, i.jsx)(s.code, {
                className: 'language-yaml',
                children: "spec:\n  selector:\n    annotationSelectors:\n      'example-annotation': 'group-a'\n",
              }),
            }),
            '\n',
            (0, i.jsx)(s.h3, { id: 'field-selectors', children: 'Field selectors' }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    'Specifies the ',
                    (0, i.jsx)(s.a, {
                      href: 'https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors/',
                      children: 'fields',
                    }),
                    " of the experiment's target Pod.",
                  ],
                }),
                '\n',
                (0, i.jsx)(s.li, { children: 'Data type: key-value pairs.' }),
                '\n',
                (0, i.jsx)(s.li, {
                  children:
                    'If multiple fields are specified, the experiment target must have all fields set by this selector.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'When creating the experiment using the YAML file, you need to configure selectors. For example:',
            }),
            '\n',
            (0, i.jsx)(s.pre, {
              children: (0, i.jsx)(s.code, {
                className: 'language-yaml',
                children: "spec:\n  selector:\n    fieldSelectors:\n      'metadata.name': 'my-pod'\n",
              }),
            }),
            '\n',
            (0, i.jsx)(s.h3, { id: 'podphase-selectors', children: 'PodPhase selectors' }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsx)(s.li, { children: "Specifies the phase of the experiment's target Pod." }),
                '\n',
                (0, i.jsx)(s.li, { children: 'Data type: string array type.' }),
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    'Supported phases: ',
                    (0, i.jsx)(s.code, { children: 'Pending' }),
                    ', ',
                    (0, i.jsx)(s.code, { children: 'Running' }),
                    ', ',
                    (0, i.jsx)(s.code, { children: 'Succeeded' }),
                    ', ',
                    (0, i.jsx)(s.code, { children: 'Failed' }),
                    ', ',
                    (0, i.jsx)(s.code, { children: 'Unknown' }),
                    '.',
                  ],
                }),
                '\n',
                (0, i.jsx)(s.li, {
                  children: "This option is empty by default, which means that the target Pod's phase is not limited.",
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'When creating the experiment using the YAML file, you need to configure selectors. For example:',
            }),
            '\n',
            (0, i.jsx)(s.pre, {
              children: (0, i.jsx)(s.code, {
                className: 'language-yaml',
                children: "spec:\n  selector:\n    podPhaseSelectors:\n      - 'Running'\n",
              }),
            }),
            '\n',
            (0, i.jsx)(s.h3, { id: 'node-selectors', children: 'Node selectors' }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    'Specifies the ',
                    (0, i.jsx)(s.a, {
                      href: 'https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes/',
                      children: 'node label',
                    }),
                    " to which the experiment's target Pod belongs.",
                  ],
                }),
                '\n',
                (0, i.jsx)(s.li, { children: 'Data type: key-value pairs.' }),
                '\n',
                (0, i.jsx)(s.li, {
                  children:
                    "If multiple node labels are specified, the node to which the experiment's target Pod belongs must have all labels specified by this selector.",
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'When creating the experiment using the YAML file, you need to configure selectors. For example:',
            }),
            '\n',
            (0, i.jsx)(s.pre, {
              children: (0, i.jsx)(s.code, {
                className: 'language-yaml',
                children: "spec:\n  selector:\n    nodeSelectors:\n      'node-label': 'label-one'\n",
              }),
            }),
            '\n',
            (0, i.jsx)(s.h3, { id: 'node-list-selector', children: 'Node list selector' }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsx)(s.li, { children: "Specifies the node to which the experiment's target Pod belongs." }),
                '\n',
                (0, i.jsx)(s.li, { children: 'Data type: string array type.' }),
                '\n',
                (0, i.jsx)(s.li, {
                  children: 'The target Pod can only belong to one node in the configured node list.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'When creating the experiment using the YAML file, you need to configure selectors. For example:',
            }),
            '\n',
            (0, i.jsx)(s.pre, {
              children: (0, i.jsx)(s.code, {
                className: 'language-yaml',
                children: 'spec:\n  selector:\n    nodes:\n      - node1\n      - node2\n',
              }),
            }),
            '\n',
            (0, i.jsx)(s.h3, { id: 'pod-list-selector', children: 'Pod list selector' }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    "Specifies the namespaces and list of the experiment's target ",
                    (0, i.jsx)(s.code, { children: 'Pods' }),
                    '.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    'Type of data: key-value pairs. The "keys" are the namespaces of the target ',
                    (0, i.jsx)(s.code, { children: 'Pod' }),
                    ' and the "values" are the target ',
                    (0, i.jsx)(s.code, { children: 'Pod' }),
                    ' list.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    'If you have specified this selector, Chaos Mesh ',
                    (0, i.jsx)(s.strong, { children: 'ignores' }),
                    ' other configured selectors.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'When creating the experiment using the YAML file, you need to configure selectors. For example:',
            }),
            '\n',
            (0, i.jsx)(s.pre, {
              children: (0, i.jsx)(s.code, {
                className: 'language-yaml',
                children:
                  'spec:\n  selector:\n    pods:\n      tidb-cluster: # namespace of the target pods\n        - basic-tidb-0\n        - basic-pd-0\n        - basic-tikv-0\n        - basic-tikv-1\n',
              }),
            }),
            '\n',
            (0, i.jsx)(s.h3, { id: 'physical-machine-list-selector', children: 'Physical machine list selector' }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    "Specifies the namespaces and list of the experiment's target ",
                    (0, i.jsx)(s.code, { children: 'PhysicalMachines' }),
                    '.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    'Type of data: key-value pairs. The "keys" are the namespaces of the target ',
                    (0, i.jsx)(s.code, { children: 'PhysicalMachine' }),
                    ', and the "values" are the target ',
                    (0, i.jsx)(s.code, { children: 'PhysicalMachine' }),
                    ' list.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    'If you have specified this selector, Chaos Mesh ',
                    (0, i.jsx)(s.strong, { children: 'ignores' }),
                    ' other configured selectors.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.admonition, {
              type: 'note',
              children: (0, i.jsxs)(s.p, {
                children: [
                  (0, i.jsx)(s.code, { children: 'PhysicalMachine' }),
                  ' is a CRD (CustomResourcesDefinition) that represents a physical machine. To create ',
                  (0, i.jsx)(s.code, { children: 'PhysicalMachine' }),
                  ', Chaos Mesh uses ',
                  (0, i.jsx)(s.a, {
                    href: '/docs/next/chaosctl-tool#generate-tls-certificates-for-chaosd',
                    children: 'Chaosctl',
                  }),
                  '.',
                ],
              }),
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'When creating the experiment using the YAML file, you need to configure selectors. For example:',
            }),
            '\n',
            (0, i.jsx)(s.pre, {
              children: (0, i.jsx)(s.code, {
                className: 'language-yaml',
                children:
                  'spec:\n  selector:\n    physicalMachines:\n      default: # namespace of the target PhysicalMachines\n        - physcial-machine-a\n        - physcial-machine-b\n',
              }),
            }),
            '\n',
            (0, i.jsx)(s.h2, {
              id: 'define-the-experiment-scope-on-chaos-dashboard',
              children: 'Define the experiment scope on Chaos Dashboard',
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'If you use Chaos Dashboard to create a Chaos experiment, you can configure the Chaos experiment scope when filling out the experiment information.',
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'The following selectors are currently available on Chaos Dashboard. You can specify one or more selectors according to the filtering requirements of the experiment scope:',
            }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsx)(s.li, { children: 'Namespace selectors' }),
                '\n',
                (0, i.jsx)(s.li, { children: 'Label selectors' }),
                '\n',
                (0, i.jsx)(s.li, { children: 'Annotation selectors' }),
                '\n',
                (0, i.jsx)(s.li, { children: 'Phase selectors' }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'While setting selectors, you can also view the actual scope of the experiment target in the Dashboard in real time and can directly modify the target Pod scope filtered by the selectors.',
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children: (0, i.jsx)(s.img, {
                alt: 'Dashboard Selectors',
                src: t(72642).A + '',
                width: '815',
                height: '647',
              }),
            }),
            '\n',
            (0, i.jsx)(s.h2, { id: 'compatibility-matrix', children: 'Compatibility matrix' }),
            '\n',
            (0, i.jsxs)(s.table, {
              children: [
                (0, i.jsx)(s.thead, {
                  children: (0, i.jsxs)(s.tr, {
                    children: [
                      (0, i.jsx)(s.th, { style: { textAlign: 'left' }, children: 'Type' }),
                      (0, i.jsx)(s.th, { style: { textAlign: 'left' }, children: 'Support Kubernetes' }),
                      (0, i.jsx)(s.th, { style: { textAlign: 'left' }, children: 'Support physical machine' }),
                    ],
                  }),
                }),
                (0, i.jsxs)(s.tbody, {
                  children: [
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'Namespace Selectors' }),
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'Yes' }),
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'Yes' }),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'Label Selectors' }),
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'Yes' }),
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'Yes' }),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'Expression Selectors' }),
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'Yes' }),
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'Yes' }),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'Annotation Selectors' }),
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'Yes' }),
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'Yes' }),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'Field Selectors' }),
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'Yes' }),
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'Yes' }),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'PodPhase Selectors' }),
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'Yes' }),
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'No' }),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'Node Selectors' }),
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'Yes' }),
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'No' }),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'Node List Selectors' }),
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'Yes' }),
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'No' }),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'Pod List Selectors' }),
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'Yes' }),
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'No' }),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'PhysicalMachine List Selectors' }),
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'No' }),
                        (0, i.jsx)(s.td, { style: { textAlign: 'left' }, children: 'Yes' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
      function d(e = {}) {
        const { wrapper: s } = { ...(0, l.R)(), ...e.components }
        return s ? (0, i.jsx)(s, { ...e, children: (0, i.jsx)(h, { ...e }) }) : h(e)
      }
    },
    72642: (e, s, t) => {
      t.d(s, { A: () => n })
      const n = t.p + 'assets/images/dashboard_selectors_en-6eb46f8883de4818cbbc4f91e664fc47.png'
    },
    28453: (e, s, t) => {
      t.d(s, { R: () => r, x: () => o })
      var n = t(96540)
      const i = {},
        l = n.createContext(i)
      function r(e) {
        const s = n.useContext(l)
        return n.useMemo(
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
              ? e.components(i)
              : e.components || i
            : r(e.components)),
          n.createElement(l.Provider, { value: s }, e.children)
        )
      }
    },
  },
])
