'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [1414],
  {
    7232: (e, s, t) => {
      t.r(s),
        t.d(s, {
          assets: () => l,
          contentTitle: () => r,
          default: () => a,
          frontMatter: () => d,
          metadata: () => n,
          toc: () => h,
        })
      const n = JSON.parse(
        '{"id":"create-chaos-mesh-workflow","title":"Create Chaos Mesh Workflow","description":"Introduction to Chaos Mesh Workflow","source":"@site/versioned_docs/version-2.4.3/create-chaos-mesh-workflow.md","sourceDirName":".","slug":"/create-chaos-mesh-workflow","permalink":"/docs/2.4.3/create-chaos-mesh-workflow","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.4.3/create-chaos-mesh-workflow.md","tags":[],"version":"2.4.3","frontMatter":{"title":"Create Chaos Mesh Workflow"},"sidebar":"docs","previous":{"title":"Inspect Results of Chaos Experiments","permalink":"/docs/2.4.3/inspect-chaos-experiments"},"next":{"title":"Serial and Parallel Experiments","permalink":"/docs/2.4.3/run-serial-or-parallel-experiments"}}'
      )
      var i = t(74848),
        o = t(28453)
      const d = { title: 'Create Chaos Mesh Workflow' },
        r = void 0,
        l = {},
        h = [
          { value: 'Introduction to Chaos Mesh Workflow', id: 'introduction-to-chaos-mesh-workflow', level: 2 },
          { value: 'Create a workflow using Chaos Dashboard', id: 'create-a-workflow-using-chaos-dashboard', level: 2 },
          { value: 'Step 1. Open Chaos Dashboard', id: 'step-1-open-chaos-dashboard', level: 3 },
          {
            value: 'Step 2. Setup basic information of the workflow',
            id: 'step-2-setup-basic-information-of-the-workflow',
            level: 3,
          },
          {
            value: 'Step 3. Configure the nodes of the workflow',
            id: 'step-3-configure-the-nodes-of-the-workflow',
            level: 3,
          },
          { value: 'Step 4. Submit the workflow', id: 'step-4-submit-the-workflow', level: 3 },
          {
            value: 'Create a workflow using a YAML file and <code>kubectl</code>',
            id: 'create-a-workflow-using-a-yaml-file-and-kubectl',
            level: 2,
          },
          { value: 'Field description', id: 'field-description', level: 2 },
          { value: 'Workflow field description', id: 'workflow-field-description', level: 3 },
          { value: 'Template field description', id: 'template-field-description', level: 3 },
          { value: 'Task field description', id: 'task-field-description', level: 3 },
          { value: 'ConditionalBranch field description', id: 'conditionalbranch-field-description', level: 3 },
          { value: 'Container field description', id: 'container-field-description', level: 3 },
        ]
      function c(e) {
        const s = {
          a: 'a',
          admonition: 'admonition',
          blockquote: 'blockquote',
          code: 'code',
          h2: 'h2',
          h3: 'h3',
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
          ...(0, o.R)(),
          ...e.components,
        }
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(s.h2, {
              id: 'introduction-to-chaos-mesh-workflow',
              children: 'Introduction to Chaos Mesh Workflow',
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'When you use Chaos Mesh to simulate real system faults, continuous validation is always a need. You might want to build a series of faults on the Chaos Mesh platform, instead of performing individual Chaos injections.',
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'To meet this need, Chaos Mesh provided Chaos Mesh Workflow, a built-in workflow engine. Using this engine, you can run different Chaos experiments in serial or parallel to simulate production-level errors.',
            }),
            '\n',
            (0, i.jsx)(s.p, { children: 'Currently, Chaos Mesh Workflow supports the following features:' }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsx)(s.li, { children: 'Serial Orchestration' }),
                '\n',
                (0, i.jsx)(s.li, { children: 'Parallel Orchestration' }),
                '\n',
                (0, i.jsx)(s.li, { children: 'Customized tasks' }),
                '\n',
                (0, i.jsx)(s.li, { children: 'Conditional branch' }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.p, { children: 'Typical user scenarios:' }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsx)(s.li, {
                  children:
                    'Use parallel orchestration to inject multiple NetworkChaos faults to simulate complex web environments.',
                }),
                '\n',
                (0, i.jsx)(s.li, {
                  children:
                    'Use serial orchestration to perform health checks and use the conditional branch to determine whether to perform the remaining steps.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'The design of Chaos Mesh Workflow is, to some extent, inspired by Argo Workflows. If you are familiar with Argo Workflows, you can also quickly get started with Chaos Mesh Workflow.',
            }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                'More workflow examples are available in the ',
                (0, i.jsx)(s.a, {
                  href: 'https://github.com/chaos-mesh/chaos-mesh/tree/master/examples/workflow',
                  children: 'Chaos Mesh GitHub repository',
                }),
                '.',
              ],
            }),
            '\n',
            (0, i.jsx)(s.h2, {
              id: 'create-a-workflow-using-chaos-dashboard',
              children: 'Create a workflow using Chaos Dashboard',
            }),
            '\n',
            (0, i.jsx)(s.h3, { id: 'step-1-open-chaos-dashboard', children: 'Step 1. Open Chaos Dashboard' }),
            '\n',
            (0, i.jsxs)(s.p, { children: ['Click ', (0, i.jsx)(s.strong, { children: 'NEW WORKFLOW' }), '.'] }),
            '\n',
            (0, i.jsx)(s.p, {
              children: (0, i.jsx)(s.img, { alt: 'New Workflow', src: t(46086).A + '', width: '800', height: '404' }),
            }),
            '\n',
            (0, i.jsx)(s.h3, {
              id: 'step-2-setup-basic-information-of-the-workflow',
              children: 'Step 2. Setup basic information of the workflow',
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children: (0, i.jsx)(s.img, { alt: 'Workflow Info', src: t(11560).A + '', width: '572', height: '422' }),
            }),
            '\n',
            (0, i.jsx)(s.h3, {
              id: 'step-3-configure-the-nodes-of-the-workflow',
              children: 'Step 3. Configure the nodes of the workflow',
            }),
            '\n',
            (0, i.jsxs)(s.ol, {
              children: [
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(s.p, {
                      children: [
                        'Select an option under ',
                        (0, i.jsx)(s.strong, { children: 'Choose task type' }),
                        ' according to your needs.',
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(s.p, {
                      children: 'In this example, the "Single\u201d type is selected as the task type.',
                    }),
                    '\n',
                    (0, i.jsx)(s.admonition, {
                      type: 'note',
                      children: (0, i.jsx)(s.p, {
                        children:
                          'Chaos Dashboard automatically creates a serial node named "entry" as the entry point for this workflow.',
                      }),
                    }),
                    '\n',
                    (0, i.jsx)(s.p, {
                      children: (0, i.jsx)(s.img, {
                        alt: 'Choose Task Type',
                        src: t(43242).A + '',
                        width: '399',
                        height: '449',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(s.p, { children: 'Fill out the experiment information.' }),
                    '\n',
                    (0, i.jsxs)(s.p, {
                      children: [
                        'The configuration method is the same as creating a normal chaos experiment. For example, you can set up a "POD KILL" type of "PodChaos" named ',
                        (0, i.jsx)(s.code, { children: 'kill-nginx' }),
                        '.',
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(s.p, {
                      children: (0, i.jsx)(s.img, {
                        alt: 'Create podkill in Workflow',
                        src: t(76646).A + '',
                        width: '1209',
                        height: '1586',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.h3, { id: 'step-4-submit-the-workflow', children: 'Step 4. Submit the workflow' }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                'You can check workflow definition through ',
                (0, i.jsx)(s.strong, { children: 'Preview' }),
                ', and then click the ',
                (0, i.jsx)(s.strong, { children: 'SUBMIT WORKFLOW' }),
                ' to create the workflow.',
              ],
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children: (0, i.jsx)(s.img, {
                alt: 'Submit Workflow',
                src: t(17702).A + '',
                width: '624',
                height: '1038',
              }),
            }),
            '\n',
            (0, i.jsxs)(s.h2, {
              id: 'create-a-workflow-using-a-yaml-file-and-kubectl',
              children: ['Create a workflow using a YAML file and ', (0, i.jsx)(s.code, { children: 'kubectl' })],
            }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                'Similar to various types of Chaos objects, workflows also exist in a Kubernetes cluster as a CRD. You can create a Chaos Mesh workflow using ',
                (0, i.jsx)(s.code, { children: 'kubectl create -f <workflow.yaml>' }),
                '. The following command is an example of creating a workflow. Create a workflow using a local YAML file:',
              ],
            }),
            '\n',
            (0, i.jsx)(s.pre, {
              children: (0, i.jsx)(s.code, {
                className: 'language-shell',
                children: 'kubectl create -f <workflow.yaml>\n',
              }),
            }),
            '\n',
            (0, i.jsx)(s.p, { children: 'Create a workflow using a YAML file from the network:' }),
            '\n',
            (0, i.jsx)(s.pre, {
              children: (0, i.jsx)(s.code, {
                className: 'language-shell',
                children:
                  'kubectl create -f https://raw.githubusercontent.com/chaos-mesh/chaos-mesh/master/examples/workflow/serial.yaml\n',
              }),
            }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                'A simple workflow YAML file is defined as follows. In this workflow, ',
                (0, i.jsx)(s.code, { children: 'StressChaos' }),
                ', ',
                (0, i.jsx)(s.code, { children: 'NetworkChaos' }),
                ', and ',
                (0, i.jsx)(s.code, { children: 'PodChaos' }),
                ' are injected:',
              ],
            }),
            '\n',
            (0, i.jsx)(s.pre, {
              children: (0, i.jsx)(s.code, {
                className: 'language-yaml',
                children:
                  "apiVersion: chaos-mesh.org/v1alpha1\nkind: Workflow\nmetadata:\n  name: try-workflow-parallel\nspec:\n  entry: the-entry\n  templates:\n    - name: the-entry\n      templateType: Parallel\n      deadline: 240s\n      children:\n        - workflow-stress-chaos\n        - workflow-network-chaos\n        - workflow-pod-chaos-schedule\n    - name: workflow-network-chaos\n      templateType: NetworkChaos\n      deadline: 20s\n      networkChaos:\n        direction: to\n        action: delay\n        mode: all\n        selector:\n          labelSelectors:\n            'app': 'hello-kubernetes'\n        delay:\n          latency: '90ms'\n          correlation: '25'\n          jitter: '90ms'\n    - name: workflow-pod-chaos-schedule\n      templateType: Schedule\n      deadline: 40s\n      schedule:\n        schedule: '@every 2s'\n        type: 'PodChaos'\n        podChaos:\n          action: pod-kill\n          mode: one\n          selector:\n            labelSelectors:\n              'app': 'hello-kubernetes'\n    - name: workflow-stress-chaos\n      templateType: StressChaos\n      deadline: 20s\n      stressChaos:\n        mode: one\n        selector:\n          labelSelectors:\n            'app': 'hello-kubernetes'\n        stressors:\n          cpu:\n            workers: 1\n            load: 20\n            options: ['--cpu 1', '--timeout 600']\n",
              }),
            }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                'In the above YAML template, the ',
                (0, i.jsx)(s.code, { children: 'templates' }),
                ' fields define the steps of the experiment. The ',
                (0, i.jsx)(s.code, { children: 'entry' }),
                ' field defines the entry of the workflow when the workflow is being executed.',
              ],
            }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                'Each element in ',
                (0, i.jsx)(s.code, { children: 'templates' }),
                ' represents a workflow step. For example:',
              ],
            }),
            '\n',
            (0, i.jsx)(s.pre, {
              children: (0, i.jsx)(s.code, {
                className: 'language-yaml',
                children:
                  'name: the-entry\ntemplateType: Parallel\ndeadline: 240s\nchildren:\n  - workflow-stress-chaos\n  - workflow-network-chaos\n  - workflow-pod-chaos\n',
              }),
            }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                (0, i.jsx)(s.code, { children: 'templateType: Parallel' }),
                ' means that the node type is parallel. ',
                (0, i.jsx)(s.code, { children: 'deadline: 240s' }),
                ' means that all parallel experiments on this node are expected to be performed in 240 seconds; otherwise, the experiments time out. ',
                (0, i.jsx)(s.code, { children: 'children' }),
                ' means the other template names to be executed in parallel.',
              ],
            }),
            '\n',
            (0, i.jsx)(s.p, { children: 'For example:' }),
            '\n',
            (0, i.jsx)(s.pre, {
              children: (0, i.jsx)(s.code, {
                className: 'language-yaml',
                children:
                  "name: workflow-pod-chaos\ntemplateType: PodChaos\ndeadline: 40s\npodChaos:\n  action: pod-kill\n  mode: one\n  selector:\n    labelSelectors:\n      'app': 'hello-kubernetes'\n",
              }),
            }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                (0, i.jsx)(s.code, { children: 'templateType: PodChaos' }),
                ' means that the node type is PodChaos experiments. ',
                (0, i.jsx)(s.code, { children: 'deadline: 40s' }),
                ' means that the current Chaos experiment lasts for 40 seconds. ',
                (0, i.jsx)(s.code, { children: 'podChaos' }),
                ' is the definition of the PodChaos experiment.',
              ],
            }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                'It is flexible to create a workflow using a YAML file and ',
                (0, i.jsx)(s.code, { children: 'kubectl' }),
                '. You can nest parallel or serial orchestrations to declare complex orchestrations, and even combine the orchestration with conditional branches to achieve a circular effect.',
              ],
            }),
            '\n',
            (0, i.jsx)(s.h2, { id: 'field-description', children: 'Field description' }),
            '\n',
            (0, i.jsx)(s.h3, { id: 'workflow-field-description', children: 'Workflow field description' }),
            '\n',
            (0, i.jsxs)(s.table, {
              children: [
                (0, i.jsx)(s.thead, {
                  children: (0, i.jsxs)(s.tr, {
                    children: [
                      (0, i.jsx)(s.th, { children: 'Parameter' }),
                      (0, i.jsx)(s.th, { children: 'Type' }),
                      (0, i.jsx)(s.th, { children: 'Description' }),
                      (0, i.jsx)(s.th, { children: 'Default value' }),
                      (0, i.jsx)(s.th, { children: 'Required' }),
                      (0, i.jsx)(s.th, { children: 'Example' }),
                    ],
                  }),
                }),
                (0, i.jsxs)(s.tbody, {
                  children: [
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'entry' }),
                        (0, i.jsx)(s.td, { children: 'string' }),
                        (0, i.jsx)(s.td, {
                          children: 'Declares the entry of the workflow. Its value is a name of a template.',
                        }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'Yes' }),
                        (0, i.jsx)(s.td, {}),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'templates' }),
                        (0, i.jsx)(s.td, { children: '[]Template' }),
                        (0, i.jsxs)(s.td, {
                          children: [
                            'Declares the behavior of each step executable in the workflow. See ',
                            (0, i.jsx)(s.a, {
                              href: '#template-field-description',
                              children: 'Template field description',
                            }),
                            ' for details.',
                          ],
                        }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'Yes' }),
                        (0, i.jsx)(s.td, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(s.h3, { id: 'template-field-description', children: 'Template field description' }),
            '\n',
            (0, i.jsxs)(s.table, {
              children: [
                (0, i.jsx)(s.thead, {
                  children: (0, i.jsxs)(s.tr, {
                    children: [
                      (0, i.jsx)(s.th, { children: 'Parameter' }),
                      (0, i.jsx)(s.th, { children: 'Type' }),
                      (0, i.jsx)(s.th, { children: 'Description' }),
                      (0, i.jsx)(s.th, { children: 'Default value' }),
                      (0, i.jsx)(s.th, { children: 'Required' }),
                      (0, i.jsx)(s.th, { children: 'Example' }),
                    ],
                  }),
                }),
                (0, i.jsxs)(s.tbody, {
                  children: [
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'name' }),
                        (0, i.jsx)(s.td, { children: 'string' }),
                        (0, i.jsx)(s.td, {
                          children: 'The name of the template, which needs to meet the DNS-1123 requirements.',
                        }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'Yes' }),
                        (0, i.jsx)(s.td, { children: 'any-name' }),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'type' }),
                        (0, i.jsx)(s.td, { children: 'string' }),
                        (0, i.jsx)(s.td, {
                          children:
                            'Type of template. Value options are Task, Serial, Parallel, Suspend, Schedule, AWSChaos, DNSChaos, GCPChaos, HTTPChaos, IOChaos, JVMChaos, KernelChaos, NetworkChaos, PodChaos, StressChaos, and TimeChaos, StatusCheck.',
                        }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'Yes' }),
                        (0, i.jsx)(s.td, { children: 'PodChaos' }),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'deadline' }),
                        (0, i.jsx)(s.td, { children: 'string' }),
                        (0, i.jsx)(s.td, { children: 'The duration of the template.' }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'No' }),
                        (0, i.jsx)(s.td, { children: "'5m30s'" }),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'children' }),
                        (0, i.jsx)(s.td, { children: '[]string' }),
                        (0, i.jsxs)(s.td, {
                          children: [
                            'Declares the subtasks under this template. You need to configure this field when the type is ',
                            (0, i.jsx)(s.code, { children: 'Serial' }),
                            ' or ',
                            (0, i.jsx)(s.code, { children: 'Parallel' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'No' }),
                        (0, i.jsx)(s.td, { children: '["any-chaos-1", "another-serial-2", "any-shcedue"]' }),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'task' }),
                        (0, i.jsx)(s.td, { children: 'Task' }),
                        (0, i.jsxs)(s.td, {
                          children: [
                            'Configures the customized task. You need to configure this field when the type is ',
                            (0, i.jsx)(s.code, { children: 'Task' }),
                            '. See the ',
                            (0, i.jsx)(s.a, { href: '#task-field-description', children: 'Task field description' }),
                            ' for details.',
                          ],
                        }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'No' }),
                        (0, i.jsx)(s.td, {}),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'conditionalBranches' }),
                        (0, i.jsx)(s.td, { children: '[]ConditionalBranch' }),
                        (0, i.jsxs)(s.td, {
                          children: [
                            'Configures the conditional branch which executes after customized task. You need to configure this field when the type is ',
                            (0, i.jsx)(s.code, { children: 'Task' }),
                            '. See the ',
                            (0, i.jsx)(s.a, {
                              href: '#conditionalbranch-field-description',
                              children: 'Conditional branch field description',
                            }),
                            ' for details.',
                          ],
                        }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'No' }),
                        (0, i.jsx)(s.td, {}),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'awsChaos' }),
                        (0, i.jsx)(s.td, { children: 'object' }),
                        (0, i.jsxs)(s.td, {
                          children: [
                            'Configures AWSChaos. You need to configure this field when the type is ',
                            (0, i.jsx)(s.code, { children: 'AWSChaos' }),
                            '. See the ',
                            (0, i.jsx)(s.a, {
                              href: '/docs/2.4.3/simulate-aws-chaos',
                              children: 'Simulate AWS Faults',
                            }),
                            ' document for details.',
                          ],
                        }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'No' }),
                        (0, i.jsx)(s.td, {}),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'dnsChaos' }),
                        (0, i.jsx)(s.td, { children: 'object' }),
                        (0, i.jsxs)(s.td, {
                          children: [
                            'Configures DNSChaos. You need to configure this field when the type is ',
                            (0, i.jsx)(s.code, { children: 'DNSChaos' }),
                            '. See the ',
                            (0, i.jsx)(s.a, {
                              href: '/docs/2.4.3/simulate-dns-chaos-on-kubernetes',
                              children: 'Simulate DNS Faults',
                            }),
                            ' document for details.',
                          ],
                        }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'No' }),
                        (0, i.jsx)(s.td, {}),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'gcpChaos' }),
                        (0, i.jsx)(s.td, { children: 'object' }),
                        (0, i.jsxs)(s.td, {
                          children: [
                            'Configures GCPChaos. You need to configure this field when the type is ',
                            (0, i.jsx)(s.code, { children: 'GCPChaos' }),
                            '.See the ',
                            (0, i.jsx)(s.a, {
                              href: '/docs/2.4.3/simulate-gcp-chaos',
                              children: 'Simulation GCP Faults',
                            }),
                            ' document for details.',
                          ],
                        }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'No' }),
                        (0, i.jsx)(s.td, {}),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'httpChaos' }),
                        (0, i.jsx)(s.td, { children: 'object' }),
                        (0, i.jsxs)(s.td, {
                          children: [
                            'Configures HTTPChaos. You need to configure this field when the type is ',
                            (0, i.jsx)(s.code, { children: 'HTTPChaos' }),
                            '. See the ',
                            (0, i.jsx)(s.a, {
                              href: '/docs/2.4.3/simulate-http-chaos-on-kubernetes',
                              children: 'Simulate HTTP Faults',
                            }),
                            ' document for details.',
                          ],
                        }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'No' }),
                        (0, i.jsx)(s.td, {}),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'ioChaos' }),
                        (0, i.jsx)(s.td, { children: 'object' }),
                        (0, i.jsxs)(s.td, {
                          children: [
                            'Configure IOChaos. You need to configure this field when the type is ',
                            (0, i.jsx)(s.code, { children: 'IOChaos' }),
                            '. See the ',
                            (0, i.jsx)(s.a, {
                              href: '/docs/2.4.3/simulate-io-chaos-on-kubernetes',
                              children: 'Simulate File I/O Faults',
                            }),
                            ' document for details.',
                          ],
                        }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'No' }),
                        (0, i.jsx)(s.td, {}),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'jvmChaos' }),
                        (0, i.jsx)(s.td, { children: 'object' }),
                        (0, i.jsxs)(s.td, {
                          children: [
                            'Configures JVMChaos. You need to configure this field when the type is ',
                            (0, i.jsx)(s.code, { children: 'JVMChaos' }),
                            '. See the ',
                            (0, i.jsx)(s.a, {
                              href: '/docs/2.4.3/simulate-jvm-application-chaos',
                              children: 'Simulate JVM Application Faults',
                            }),
                            ' document for details.',
                          ],
                        }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'No' }),
                        (0, i.jsx)(s.td, {}),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'kernelChaos' }),
                        (0, i.jsx)(s.td, { children: 'object' }),
                        (0, i.jsxs)(s.td, {
                          children: [
                            'Configure KernelChaos. You need to configure this field when the type is ',
                            (0, i.jsx)(s.code, { children: 'KernelChaos' }),
                            '. See the ',
                            (0, i.jsx)(s.a, {
                              href: '/docs/2.4.3/simulate-kernel-chaos-on-kubernetes',
                              children: 'Simulate Kernel Faults',
                            }),
                            ' document for details.',
                          ],
                        }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'No' }),
                        (0, i.jsx)(s.td, {}),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'networkChaos' }),
                        (0, i.jsx)(s.td, { children: 'object' }),
                        (0, i.jsxs)(s.td, {
                          children: [
                            'Configures NetworkChaos. You need to configure this field when the type is ',
                            (0, i.jsx)(s.code, { children: 'NetworkChaos' }),
                            '. See the ',
                            (0, i.jsx)(s.a, {
                              href: '/docs/2.4.3/simulate-network-chaos-on-kubernetes',
                              children: 'Simulate Network Faults',
                            }),
                            ' document for details.',
                          ],
                        }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'No' }),
                        (0, i.jsx)(s.td, {}),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'podChaos' }),
                        (0, i.jsx)(s.td, { children: 'object' }),
                        (0, i.jsxs)(s.td, {
                          children: [
                            'Configures PodChaos. You need to configure this field when the type is ',
                            (0, i.jsx)(s.code, { children: 'PodChaos' }),
                            '. See the ',
                            (0, i.jsx)(s.a, {
                              href: '/docs/2.4.3/simulate-pod-chaos-on-kubernetes',
                              children: 'Simulate Pod Faults',
                            }),
                            ' document for details.',
                          ],
                        }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'No' }),
                        (0, i.jsx)(s.td, {}),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'stressChaos' }),
                        (0, i.jsx)(s.td, { children: 'object' }),
                        (0, i.jsxs)(s.td, {
                          children: [
                            'Configures StressChaos. You need to configure this field when the type is ',
                            (0, i.jsx)(s.code, { children: 'StressChaos' }),
                            '. See the ',
                            (0, i.jsx)(s.a, {
                              href: '/docs/2.4.3/simulate-heavy-stress-on-kubernetes',
                              children: 'Simulate Heavy Stress on Kubernetes',
                            }),
                            ' document for details.',
                          ],
                        }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'No' }),
                        (0, i.jsx)(s.td, {}),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'timeChaos' }),
                        (0, i.jsx)(s.td, { children: 'object' }),
                        (0, i.jsxs)(s.td, {
                          children: [
                            'Configures TimeChaos. You need to configure this field when the type is ',
                            (0, i.jsx)(s.code, { children: 'TimeChaos' }),
                            '. See the ',
                            (0, i.jsx)(s.a, {
                              href: '/docs/2.4.3/simulate-time-chaos-on-kubernetes',
                              children: 'SImulate Time Faults',
                            }),
                            ' document for details.',
                          ],
                        }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'No' }),
                        (0, i.jsx)(s.td, {}),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'schedule' }),
                        (0, i.jsx)(s.td, { children: 'object' }),
                        (0, i.jsxs)(s.td, {
                          children: [
                            'Configures Schedule. You need to configure this field when the type is ',
                            (0, i.jsx)(s.code, { children: 'Schedule' }),
                            '. See the ',
                            (0, i.jsx)(s.a, {
                              href: '/docs/2.4.3/define-scheduling-rules',
                              children: 'Define Scheduling Rules',
                            }),
                            ' document for details.',
                          ],
                        }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'No' }),
                        (0, i.jsx)(s.td, {}),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'statusCheck' }),
                        (0, i.jsx)(s.td, { children: 'object' }),
                        (0, i.jsxs)(s.td, {
                          children: [
                            'Configures StatusCheck. You need to configure this field when the type is ',
                            (0, i.jsx)(s.code, { children: 'StatusCheck' }),
                            '. See the ',
                            (0, i.jsx)(s.a, {
                              href: '/docs/2.4.3/status-check-in-workflow',
                              children: 'StatusCheck in Workflow',
                            }),
                            ' document for details.',
                          ],
                        }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'No' }),
                        (0, i.jsx)(s.td, {}),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'abortWithStatusCheck' }),
                        (0, i.jsx)(s.td, { children: 'bool' }),
                        (0, i.jsxs)(s.td, {
                          children: [
                            'Configures whether abort the Workflow when StatusCheck is failed. You can configure this field when the type is ',
                            (0, i.jsx)(s.code, { children: 'StatusCheck' }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(s.td, { children: (0, i.jsx)(s.code, { children: 'false' }) }),
                        (0, i.jsx)(s.td, { children: 'No' }),
                        (0, i.jsx)(s.td, { children: (0, i.jsx)(s.code, { children: 'true' }) }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(s.admonition, {
              type: 'note',
              children: (0, i.jsxs)(s.p, {
                children: [
                  'When creating a Chaos with a duration in the workflow, you need to fill the duration in the outer ',
                  (0, i.jsx)(s.code, { children: 'deadline' }),
                  ' field instead of using the ',
                  (0, i.jsx)(s.code, { children: 'duration' }),
                  ' field in Chaos.',
                ],
              }),
            }),
            '\n',
            (0, i.jsx)(s.h3, { id: 'task-field-description', children: 'Task field description' }),
            '\n',
            (0, i.jsxs)(s.table, {
              children: [
                (0, i.jsx)(s.thead, {
                  children: (0, i.jsxs)(s.tr, {
                    children: [
                      (0, i.jsx)(s.th, { children: 'Parameter' }),
                      (0, i.jsx)(s.th, { children: 'Type' }),
                      (0, i.jsx)(s.th, { children: 'Description' }),
                      (0, i.jsx)(s.th, { children: 'Default value' }),
                      (0, i.jsx)(s.th, { children: 'Required' }),
                      (0, i.jsx)(s.th, { children: 'Example' }),
                    ],
                  }),
                }),
                (0, i.jsxs)(s.tbody, {
                  children: [
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'container' }),
                        (0, i.jsx)(s.td, { children: 'object' }),
                        (0, i.jsxs)(s.td, {
                          children: [
                            'Defines a customized task container. See ',
                            (0, i.jsx)(s.a, {
                              href: '#container-field-description',
                              children: 'Container field description',
                            }),
                            ' for details.',
                          ],
                        }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'No' }),
                        (0, i.jsx)(s.td, {}),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'volumes' }),
                        (0, i.jsx)(s.td, { children: 'array' }),
                        (0, i.jsxs)(s.td, {
                          children: [
                            'If you need to mount a volume in a customized task container, you need to declare the volume in this field. For the detailed definition of a volume, see the ',
                            (0, i.jsx)(s.a, {
                              href: 'https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.23/#volume-v1-core',
                              children: 'Kubernetes documentation - corev1.Volume',
                            }),
                            '.',
                          ],
                        }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'No' }),
                        (0, i.jsx)(s.td, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(s.h3, {
              id: 'conditionalbranch-field-description',
              children: 'ConditionalBranch field description',
            }),
            '\n',
            (0, i.jsxs)(s.table, {
              children: [
                (0, i.jsx)(s.thead, {
                  children: (0, i.jsxs)(s.tr, {
                    children: [
                      (0, i.jsx)(s.th, { children: 'Parameter' }),
                      (0, i.jsx)(s.th, { children: 'Type' }),
                      (0, i.jsx)(s.th, { children: 'Description' }),
                      (0, i.jsx)(s.th, { children: 'Default value' }),
                      (0, i.jsx)(s.th, { children: 'Required' }),
                      (0, i.jsx)(s.th, { children: 'Example' }),
                    ],
                  }),
                }),
                (0, i.jsxs)(s.tbody, {
                  children: [
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'target' }),
                        (0, i.jsx)(s.td, { children: 'string' }),
                        (0, i.jsx)(s.td, {
                          children: 'The name of the template to be executed by the current conditional branch.',
                        }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'Yes' }),
                        (0, i.jsx)(s.td, { children: 'another-chaos' }),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'expression' }),
                        (0, i.jsx)(s.td, { children: 'string' }),
                        (0, i.jsx)(s.td, {
                          children:
                            'The type is a boolean expression. When a customized task is completed and the expression value is true, the current condition branch is executed. When this value is not set, the conditional branch will be executed directly after the customized task is completed.',
                        }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'No' }),
                        (0, i.jsx)(s.td, { children: 'exitCode == 0' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                'Currently, two context variables are provided in ',
                (0, i.jsx)(s.code, { children: 'expression' }),
                ':',
              ],
            }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    (0, i.jsx)(s.code, { children: 'exitCode' }),
                    ' means the exit code for a customized task.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    (0, i.jsx)(s.code, { children: 'stdout' }),
                    ' indicates the standard output for a customized task.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsxs)(s.blockquote, {
              children: [
                '\n',
                (0, i.jsx)(s.p, { children: 'More context variables will be added in later releases.' }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                'Refer to ',
                (0, i.jsx)(s.a, {
                  href: 'https://github.com/antonmedv/expr/blob/master/docs/Language-Definition.md',
                  children: 'this document',
                }),
                ' write ',
                (0, i.jsx)(s.code, { children: 'expression' }),
                ' expressions.',
              ],
            }),
            '\n',
            (0, i.jsx)(s.h3, { id: 'container-field-description', children: 'Container field description' }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                'The following table only lists the commonly used fields. For the definitions of more fields, see ',
                (0, i.jsx)(s.a, {
                  href: 'https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.23/#container-v1-core',
                  children: 'Kubernetes documentation - core1.Container',
                }),
                '.',
              ],
            }),
            '\n',
            (0, i.jsxs)(s.table, {
              children: [
                (0, i.jsx)(s.thead, {
                  children: (0, i.jsxs)(s.tr, {
                    children: [
                      (0, i.jsx)(s.th, { children: 'Parameter' }),
                      (0, i.jsx)(s.th, { children: 'Type' }),
                      (0, i.jsx)(s.th, { children: 'Description' }),
                      (0, i.jsx)(s.th, { children: 'Default value' }),
                      (0, i.jsx)(s.th, { children: 'Required' }),
                      (0, i.jsx)(s.th, { children: 'Example' }),
                    ],
                  }),
                }),
                (0, i.jsxs)(s.tbody, {
                  children: [
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'name' }),
                        (0, i.jsx)(s.td, { children: 'string' }),
                        (0, i.jsx)(s.td, { children: 'Container name' }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'Yes' }),
                        (0, i.jsx)(s.td, { children: 'task' }),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'image' }),
                        (0, i.jsx)(s.td, { children: 'string' }),
                        (0, i.jsx)(s.td, { children: 'Image name' }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'Yes' }),
                        (0, i.jsxs)(s.td, { children: ['busybox', ':latest'] }),
                      ],
                    }),
                    (0, i.jsxs)(s.tr, {
                      children: [
                        (0, i.jsx)(s.td, { children: 'command' }),
                        (0, i.jsx)(s.td, { children: '[]string' }),
                        (0, i.jsx)(s.td, { children: 'Container commands' }),
                        (0, i.jsx)(s.td, { children: 'None' }),
                        (0, i.jsx)(s.td, { children: 'No' }),
                        (0, i.jsx)(s.td, {
                          children: (0, i.jsx)(s.code, { children: '["wget", "-q", "http://httpbin.org/status/201"]' }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
      function a(e = {}) {
        const { wrapper: s } = { ...(0, o.R)(), ...e.components }
        return s ? (0, i.jsx)(s, { ...e, children: (0, i.jsx)(c, { ...e }) }) : c(e)
      }
    },
    43242: (e, s, t) => {
      t.d(s, { A: () => n })
      const n = t.p + 'assets/images/choose-task-type-9e837dfb0ebdae12f31db47644b2f2ca.png'
    },
    76646: (e, s, t) => {
      t.d(s, { A: () => n })
      const n = t.p + 'assets/images/create-podkill-in-workflow-b4d42c8e74343b4834a29a169d1509f9.png'
    },
    46086: (e, s, t) => {
      t.d(s, { A: () => n })
      const n = t.p + 'assets/images/new-workflow-bd489be0ff01773ff0d68fd1dcb11ac2.png'
    },
    17702: (e, s, t) => {
      t.d(s, { A: () => n })
      const n = t.p + 'assets/images/submit-workflow-d76f6cfbdf16faf0264ee97237548a07.png'
    },
    11560: (e, s, t) => {
      t.d(s, { A: () => n })
      const n = t.p + 'assets/images/workflow-info-ac4f6acd29d9803a3473bc4a65c261c8.png'
    },
    28453: (e, s, t) => {
      t.d(s, { R: () => d, x: () => r })
      var n = t(96540)
      const i = {},
        o = n.createContext(i)
      function d(e) {
        const s = n.useContext(o)
        return n.useMemo(
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
              ? e.components(i)
              : e.components || i
            : d(e.components)),
          n.createElement(o.Provider, { value: s }, e.children)
        )
      }
    },
  },
])
