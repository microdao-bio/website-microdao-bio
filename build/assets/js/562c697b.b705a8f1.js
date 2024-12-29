'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [2891],
  {
    86510: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => c,
          contentTitle: () => d,
          default: () => o,
          frontMatter: () => i,
          metadata: () => t,
          toc: () => a,
        })
      const t = JSON.parse(
        '{"id":"simulate-jvm-application-chaos","title":"Simulate JVM Application Faults","description":"Chaos Mesh simulates the faults of JVM application through Byteman. The supported fault types are as follows:","source":"@site/versioned_docs/version-2.4.3/simulate-jvm-application-chaos.md","sourceDirName":".","slug":"/simulate-jvm-application-chaos","permalink":"/docs/2.4.3/simulate-jvm-application-chaos","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.4.3/simulate-jvm-application-chaos.md","tags":[],"version":"2.4.3","frontMatter":{"title":"Simulate JVM Application Faults"},"sidebar":"docs","previous":{"title":"Simulate Time Faults","permalink":"/docs/2.4.3/simulate-time-chaos-on-kubernetes"},"next":{"title":"Simulate Linux Kernel Faults","permalink":"/docs/2.4.3/simulate-kernel-chaos-on-kubernetes"}}'
      )
      var r = s(74848),
        l = s(28453)
      const i = { title: 'Simulate JVM Application Faults' },
        d = void 0,
        c = {},
        a = [
          {
            value: 'Create experiments using Chaos Dashboard',
            id: 'create-experiments-using-chaos-dashboard',
            level: 2,
          },
          { value: 'Create experiments using YAML files', id: 'create-experiments-using-yaml-files', level: 2 },
          { value: 'Step 1. Create the target application', id: 'step-1-create-the-target-application', level: 3 },
          {
            value: 'Step 2. Observe application behaviors before injecting faults\u200b',
            id: 'step-2-observe-application-behaviors-before-injecting-faults',
            level: 3,
          },
          { value: 'Step 3. Inject JVMChaos and check', id: 'step-3-inject-jvmchaos-and-check', level: 3 },
          { value: 'Field description', id: 'field-description', level: 2 },
          { value: 'Parameters for <code>latency</code>', id: 'parameters-for-latency', level: 3 },
          { value: 'Parameters for <code>return</code>', id: 'parameters-for-return', level: 3 },
          { value: 'Parameters for <code>exception</code>', id: 'parameters-for-exception', level: 3 },
          { value: 'Parameters for <code>stress</code>', id: 'parameters-for-stress', level: 3 },
          { value: 'Parameters for <code>gc</code>', id: 'parameters-for-gc', level: 3 },
          { value: 'Parameters for <code>ruleData</code>', id: 'parameters-for-ruledata', level: 3 },
        ]
      function h(e) {
        const n = {
          a: 'a',
          admonition: 'admonition',
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
          ...(0, l.R)(),
          ...e.components,
        }
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(n.p, {
              children: [
                'Chaos Mesh simulates the faults of JVM application through ',
                (0, r.jsx)(n.a, { href: 'https://github.com/chaos-mesh/byteman', children: 'Byteman' }),
                '. The supported fault types are as follows:',
              ],
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, { children: 'Throw custom exceptions' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'Trigger garbage collection' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'Increase method latency' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'Modify return values of a method' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'Trigger faults by setting Byteman configuration files' }),
                '\n',
                (0, r.jsx)(n.li, { children: 'Increase JVM pressure' }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'This document describes how to use Chaos Mesh to create the above fault types of JVM experiments.',
            }),
            '\n',
            (0, r.jsx)(n.admonition, {
              type: 'note',
              children: (0, r.jsx)(n.p, { children: 'Your Linux kernel must be v4.1 or later.' }),
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
                        ' on the page to create a new experiment.',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(n.p, {
                      children: (0, r.jsx)(n.img, {
                        alt: 'create a new experiment',
                        src: s(69377).A + '',
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
                        (0, r.jsx)(n.strong, { children: 'JVM FAULT' }),
                        ', and select a specific behavior, such as ',
                        (0, r.jsx)(n.strong, { children: (0, r.jsx)(n.code, { children: 'RETURN' }) }),
                        '. Then, fill out the detailed configurations.',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(n.p, {
                      children: (0, r.jsx)(n.img, {
                        alt: 'JVMChaos experiments',
                        src: s(62491).A + '',
                        width: '2682',
                        height: '1484',
                      }),
                    }),
                    '\n',
                    (0, r.jsx)(n.p, {
                      children:
                        'For information about how to fill out the configurations, refer to [Field Description] (#field-description).',
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
                        alt: 'experiment information',
                        src: s(66952).A + '',
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
              id: 'create-experiments-using-yaml-files',
              children: 'Create experiments using YAML files',
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'The following example shows the usage and effects of JVMChaos. The example specifies the return values of a method. The YAML files referred to in the following steps can be found in ',
                (0, r.jsx)(n.a, {
                  href: 'https://github.com/chaos-mesh/chaos-mesh/tree/master/examples/jvm',
                  children: 'examples/jvm',
                }),
                '. The default work directory for the following steps is also ',
                (0, r.jsx)(n.code, { children: 'examples/jvm' }),
                '. The default namespace where Chaos Mesh is installed is ',
                (0, r.jsx)(n.code, { children: 'chaos-mesh' }),
                '.',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {
              id: 'step-1-create-the-target-application',
              children: 'Step 1. Create the target application',
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                (0, r.jsx)(n.a, {
                  href: 'https://github.com/WangXiangUSTC/byteman-example/tree/main/example.helloworld',
                  children: 'Helloworld',
                }),
                ' is a simple Java application. In this section, this application is used as the target application that is to be tested. The target application is defined in ',
                (0, r.jsx)(n.code, { children: 'example/jvm/app.yaml' }),
                ' as follows:',
              ],
            }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-yaml',
                children:
                  'apiVersion: v1\nkind: Pod\nmetadata:\n  name: helloworld\n  namespace: helloworld\nspec:\n  containers:\n    - name: helloworld\n      # source code: https://github.com/WangXiangUSTC/byteman-example/tree/main/example.helloworld\n      # this application will print log like this below:\n      # 0. Hello World\n      # 1. Hello World\n      # ...\n      image: xiang13225080/helloworld:v1.0\n      imagePullPolicy: IfNotPresent\n',
              }),
            }),
            '\n',
            (0, r.jsxs)(n.ol, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(n.p, { children: 'Create the namespace for the target application:' }),
                    '\n',
                    (0, r.jsx)(n.pre, {
                      children: (0, r.jsx)(n.code, {
                        className: 'language-shell',
                        children: 'kubectl create namespace helloworld\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(n.p, { children: 'Build the application Pod:' }),
                    '\n',
                    (0, r.jsx)(n.pre, {
                      children: (0, r.jsx)(n.code, {
                        className: 'language-shell',
                        children: 'kubectl apply -f app.yaml\n',
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
                        'Execute ',
                        (0, r.jsx)(n.code, { children: 'kubectl -n helloworld get pods' }),
                        ', and you are expected to find a pod named ',
                        (0, r.jsx)(n.code, { children: 'helloworld' }),
                        ' in the ',
                        (0, r.jsx)(n.code, { children: 'helloworld' }),
                        ' namespace.',
                      ],
                    }),
                    '\n',
                    (0, r.jsx)(n.pre, {
                      children: (0, r.jsx)(n.code, {
                        className: 'language-shell',
                        children: 'kubectl -n helloworld get pods\n',
                      }),
                    }),
                    '\n',
                    (0, r.jsx)(n.p, { children: 'The result is as follows:' }),
                    '\n',
                    (0, r.jsx)(n.pre, {
                      children: (0, r.jsx)(n.code, {
                        className: 'language-text',
                        children:
                          'kubectl get pods -n helloworld\nNAME         READY   STATUS    RESTARTS   AGE\nhelloworld   1/1     Running   0          2m\n',
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.p, {
                      children: [
                        'After the ',
                        (0, r.jsx)(n.code, { children: 'READY' }),
                        ' column turns to ',
                        (0, r.jsx)(n.code, { children: '1/1' }),
                        ', you can proceed to the next step.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {
              id: 'step-2-observe-application-behaviors-before-injecting-faults',
              children: 'Step 2. Observe application behaviors before injecting faults\u200b',
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'You can observe the behavior of ',
                (0, r.jsx)(n.code, { children: 'helloworld' }),
                ' application before injecting faults, for example:',
              ],
            }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-shell',
                children: 'kubectl -n helloworld logs -f helloworld\n',
              }),
            }),
            '\n',
            (0, r.jsx)(n.p, { children: 'The result is as follows:' }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-shell',
                children:
                  '0. Hello World\n1. Hello World\n2. Hello World\n3. Hello World\n4. Hello World\n5. Hello World\n',
              }),
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'You can see that ',
                (0, r.jsx)(n.code, { children: 'helloworld' }),
                ' outputs a line of ',
                (0, r.jsx)(n.code, { children: 'Hello World' }),
                ' every second, and the number of each line increases in turn.',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, { id: 'step-3-inject-jvmchaos-and-check', children: 'Step 3. Inject JVMChaos and check' }),
            '\n',
            (0, r.jsxs)(n.ol, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(n.p, { children: 'The JVMChaos with a specified return value is as follows:' }),
                    '\n',
                    (0, r.jsx)(n.pre, {
                      children: (0, r.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: JVMChaos\nmetadata:\n  name: return\n  namespace: helloworld\nspec:\n  action: return\n  class: Main\n  method: getnum\n  value: '9999'\n  mode: all\n  selector:\n    namespaces:\n      - helloworld\n",
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.p, {
                      children: [
                        'JVMChaos changes the return value of the ',
                        (0, r.jsx)(n.code, { children: 'getnum' }),
                        ' method to the number ',
                        (0, r.jsx)(n.code, { children: '9999' }),
                        ', which means that the number of each line in the ',
                        (0, r.jsx)(n.code, { children: 'helloworld' }),
                        ' output is set to ',
                        (0, r.jsx)(n.code, { children: '9999' }),
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
                    (0, r.jsx)(n.p, { children: 'Inject JVMChaos with a specified value:' }),
                    '\n',
                    (0, r.jsx)(n.pre, {
                      children: (0, r.jsx)(n.code, {
                        className: 'language-shell',
                        children: 'kubectl apply -f ./jvm-return-example.yaml\n',
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
                      children: ['Check the latest log of ', (0, r.jsx)(n.code, { children: 'helloworld' }), ':'],
                    }),
                    '\n',
                    (0, r.jsx)(n.pre, {
                      children: (0, r.jsx)(n.code, {
                        className: 'language-shell',
                        children: 'kubectl -n helloworld logs -f helloworld\n',
                      }),
                    }),
                    '\n',
                    (0, r.jsx)(n.p, { children: 'The log is as follows:' }),
                    '\n',
                    (0, r.jsx)(n.pre, {
                      children: (0, r.jsx)(n.code, {
                        className: 'language-shell',
                        children:
                          'Rule.execute called for return_0:0\nreturn execute\ncaught ReturnException\n9999. Hello World\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, { id: 'field-description', children: 'Field description' }),
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
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'action' }) }),
                        (0, r.jsx)(n.td, { children: 'string' }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            'Indicates the specific fault type. The available fault types include ',
                            (0, r.jsx)(n.code, { children: 'latency' }),
                            ', ',
                            (0, r.jsx)(n.code, { children: 'return' }),
                            ', ',
                            (0, r.jsx)(n.code, { children: 'exception' }),
                            ', ',
                            (0, r.jsx)(n.code, { children: 'stress' }),
                            ', ',
                            (0, r.jsx)(n.code, { children: 'gc' }),
                            ', and ',
                            (0, r.jsx)(n.code, { children: 'ruleData' }),
                            '.',
                          ],
                        }),
                        (0, r.jsx)(n.td, { children: 'None' }),
                        (0, r.jsx)(n.td, { children: 'Yes' }),
                        (0, r.jsx)(n.td, { children: 'return' }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'mode' }) }),
                        (0, r.jsx)(n.td, { children: 'string' }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            'Indicates how to select Pod. The supported modes include ',
                            (0, r.jsx)(n.code, { children: 'one' }),
                            ', ',
                            (0, r.jsx)(n.code, { children: 'all' }),
                            ', ',
                            (0, r.jsx)(n.code, { children: 'fixed' }),
                            ', ',
                            (0, r.jsx)(n.code, { children: 'fixed-percent' }),
                            ', and ',
                            (0, r.jsx)(n.code, { children: 'random-max-percent' }),
                            '.',
                          ],
                        }),
                        (0, r.jsx)(n.td, { children: 'None' }),
                        (0, r.jsx)(n.td, { children: 'Yes' }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'one' }) }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'The meanings of the different ',
                (0, r.jsx)(n.code, { children: 'action' }),
                ' values are as follows:',
              ],
            }),
            '\n',
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [(0, r.jsx)(n.th, { children: 'Value' }), (0, r.jsx)(n.th, { children: 'Meaning' })],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'latency' }) }),
                        (0, r.jsx)(n.td, { children: 'Increase method latency' }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'return' }) }),
                        (0, r.jsx)(n.td, { children: 'Modify return values of a method' }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'exception' }) }),
                        (0, r.jsx)(n.td, { children: 'Throw custom exceptions' }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'stress' }) }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Increase CPU usage of Java process, or cause memory overflow (support heap overflow and stack overflow)',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'gc' }) }),
                        (0, r.jsx)(n.td, { children: 'Trigger garbage collection' }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'ruleData' }) }),
                        (0, r.jsx)(n.td, { children: 'Trigger faults by setting Byteman configuration files' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'For different ',
                (0, r.jsx)(n.code, { children: 'action' }),
                ' values, there are different configuration items that can be filled in.',
              ],
            }),
            '\n',
            (0, r.jsxs)(n.h3, {
              id: 'parameters-for-latency',
              children: ['Parameters for ', (0, r.jsx)(n.code, { children: 'latency' })],
            }),
            '\n',
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.th, { children: 'Parameter' }),
                      (0, r.jsx)(n.th, { children: 'Type' }),
                      (0, r.jsx)(n.th, { children: 'Description' }),
                      (0, r.jsx)(n.th, { children: 'Required' }),
                    ],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'class' }) }),
                        (0, r.jsx)(n.td, { children: 'string' }),
                        (0, r.jsx)(n.td, { children: 'The name of the Java class' }),
                        (0, r.jsx)(n.td, { children: 'Yes' }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'method' }) }),
                        (0, r.jsx)(n.td, { children: 'string' }),
                        (0, r.jsx)(n.td, { children: 'The name of the method' }),
                        (0, r.jsx)(n.td, { children: 'Yes' }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'latency' }) }),
                        (0, r.jsx)(n.td, { children: 'int' }),
                        (0, r.jsx)(n.td, {
                          children: 'The duration of increasing method latency. The unit is milisecond.',
                        }),
                        (0, r.jsx)(n.td, { children: 'Yes' }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'port' }) }),
                        (0, r.jsx)(n.td, { children: 'int' }),
                        (0, r.jsx)(n.td, {
                          children:
                            'The port ID attached to the Java process agent. The faults are injected into the Java process through this ID.',
                        }),
                        (0, r.jsx)(n.td, { children: 'No' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsxs)(n.h3, {
              id: 'parameters-for-return',
              children: ['Parameters for ', (0, r.jsx)(n.code, { children: 'return' })],
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                '| Parameter | Type | Description | Required |\n| --- | --- | --- | --- | --- |\n| ',
                (0, r.jsx)(n.code, { children: 'class' }),
                ' | string | The name of the Java class | Yes |\n| ',
                (0, r.jsx)(n.code, { children: 'method' }),
                ' | string | The name of the method | Yes |\n| ',
                (0, r.jsx)(n.code, { children: 'value' }),
                ' | string | Specifies the return value of the method | string type, required. Currently, the item can be numeric and string types. If the item (return value) is string, double quotes are required, like "chaos". | Yes |\n| ',
                (0, r.jsx)(n.code, { children: 'port' }),
                ' | int | The port ID attached to the Java process agent. The faults are injected into the Java process through this ID. | No |',
              ],
            }),
            '\n',
            (0, r.jsxs)(n.h3, {
              id: 'parameters-for-exception',
              children: ['Parameters for ', (0, r.jsx)(n.code, { children: 'exception' })],
            }),
            '\n',
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.th, { children: 'Parameter' }),
                      (0, r.jsx)(n.th, { children: 'Type' }),
                      (0, r.jsx)(n.th, { children: 'Description' }),
                      (0, r.jsx)(n.th, { children: 'Required' }),
                    ],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'class' }) }),
                        (0, r.jsx)(n.td, { children: 'string' }),
                        (0, r.jsx)(n.td, { children: 'The name of the Java class' }),
                        (0, r.jsx)(n.td, { children: 'Yes' }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'method' }) }),
                        (0, r.jsx)(n.td, { children: 'string' }),
                        (0, r.jsx)(n.td, { children: 'The name of the method' }),
                        (0, r.jsx)(n.td, { children: 'Yes' }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'exception' }) }),
                        (0, r.jsx)(n.td, { children: 'string' }),
                        (0, r.jsx)(n.td, {
                          children: 'The thrown custom exception, such as \'java.io.IOException("BOOM")\'.',
                        }),
                        (0, r.jsx)(n.td, { children: 'Yes' }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'port' }) }),
                        (0, r.jsx)(n.td, { children: 'int' }),
                        (0, r.jsx)(n.td, {
                          children:
                            'The port ID attached to the Java process agent. The faults are injected into the Java process through this ID.',
                        }),
                        (0, r.jsx)(n.td, { children: 'No' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsxs)(n.h3, {
              id: 'parameters-for-stress',
              children: ['Parameters for ', (0, r.jsx)(n.code, { children: 'stress' })],
            }),
            '\n',
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.th, { children: 'Parameter' }),
                      (0, r.jsx)(n.th, { children: 'Type' }),
                      (0, r.jsx)(n.th, { children: 'Description' }),
                      (0, r.jsx)(n.th, { children: 'Required' }),
                    ],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'cpuCount' }) }),
                        (0, r.jsx)(n.td, { children: 'int' }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            'The number of CPU cores used for increasing CPU stress. You must configure one item between ',
                            (0, r.jsx)(n.code, { children: 'cpu-count' }),
                            ' and ',
                            (0, r.jsx)(n.code, { children: 'mem-type' }),
                            '.',
                          ],
                        }),
                        (0, r.jsx)(n.td, { children: 'No' }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'memType' }) }),
                        (0, r.jsx)(n.td, { children: 'string' }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            "The type of OOM. Currently, both 'stack' and 'heap' OOM types are supported. You must configure one item between ",
                            (0, r.jsx)(n.code, { children: 'cpu-count' }),
                            ' and ',
                            (0, r.jsx)(n.code, { children: 'mem-type' }),
                            '.',
                          ],
                        }),
                        (0, r.jsx)(n.td, { children: 'No' }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'port' }) }),
                        (0, r.jsx)(n.td, { children: 'int' }),
                        (0, r.jsx)(n.td, {
                          children:
                            'The port ID attached to the Java process agent. The faults are injected into the Java process through this ID.',
                        }),
                        (0, r.jsx)(n.td, { children: 'No' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsxs)(n.h3, {
              id: 'parameters-for-gc',
              children: ['Parameters for ', (0, r.jsx)(n.code, { children: 'gc' })],
            }),
            '\n',
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.th, { children: 'Parameter' }),
                      (0, r.jsx)(n.th, { children: 'Type' }),
                      (0, r.jsx)(n.th, { children: 'Description' }),
                      (0, r.jsx)(n.th, { children: 'Required' }),
                    ],
                  }),
                }),
                (0, r.jsx)(n.tbody, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'port' }) }),
                      (0, r.jsx)(n.td, { children: 'int' }),
                      (0, r.jsx)(n.td, {
                        children:
                          'The port ID attached to the Java process agent. The faults are injected into the Java process through this ID.',
                      }),
                      (0, r.jsx)(n.td, { children: 'No' }),
                    ],
                  }),
                }),
              ],
            }),
            '\n',
            (0, r.jsxs)(n.h3, {
              id: 'parameters-for-ruledata',
              children: ['Parameters for ', (0, r.jsx)(n.code, { children: 'ruleData' })],
            }),
            '\n',
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.th, { children: 'Parameter' }),
                      (0, r.jsx)(n.th, { children: 'Type' }),
                      (0, r.jsx)(n.th, { children: 'Description' }),
                      (0, r.jsx)(n.th, { children: 'Required' }),
                    ],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'ruleData' }) }),
                        (0, r.jsx)(n.td, { children: 'srting' }),
                        (0, r.jsx)(n.td, { children: 'Specifies the Byteman configuration data' }),
                        (0, r.jsx)(n.td, { children: 'Yes' }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: 'port' }) }),
                        (0, r.jsx)(n.td, { children: 'int' }),
                        (0, r.jsx)(n.td, {
                          children:
                            'The port ID attached to the Java process agent. The faults are injected into the Java process through this ID.',
                        }),
                        (0, r.jsx)(n.td, { children: 'No' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'When you write the rule configuration file, take into account the specific Java program and the ',
                (0, r.jsx)(n.a, {
                  href: 'https://downloads.jboss.org/byteman/4.0.16/byteman-programmers-guide.html#the-byteman-rule-language',
                  children: 'byteman-rule-language',
                }),
                '. For example:',
              ],
            }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-txt',
                children:
                  'RULE modify return value\nCLASS Main\nMETHOD getnum\nAT ENTRY\nIF true\nDO\n    return 9999\nENDRULE\n',
              }),
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'You need to escape the line breaks in the configuration file to the newline character "\\n", and use the escaped text as the value of "rule-data" as follows:',
            }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-txt',
                children:
                  '\\nRULE modify return value\\nCLASS Main\\nMETHOD getnum\\nAT ENTRY\\nIF true\\nDO return 9999\\nENDRULE\\n"\n',
              }),
            }),
          ],
        })
      }
      function o(e = {}) {
        const { wrapper: n } = { ...(0, l.R)(), ...e.components }
        return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(h, { ...e }) }) : h(e)
      }
    },
    69377: (e, n, s) => {
      s.d(n, { A: () => t })
      const t = s.p + 'assets/images/create-new-exp-1c53e87b7cbd0e5935aec8529fbbaea4.png'
    },
    66952: (e, n, s) => {
      s.d(n, { A: () => t })
      const t = s.p + 'assets/images/exp-info-8b402b174aa7d3cd9f8cfde8b492e876.png'
    },
    62491: (e, n, s) => {
      s.d(n, { A: () => t })
      const t = s.p + 'assets/images/jvmchaos-exp-fd327cba6c3f8efc68f6f672e8c60ac4.png'
    },
    28453: (e, n, s) => {
      s.d(n, { R: () => i, x: () => d })
      var t = s(96540)
      const r = {},
        l = t.createContext(r)
      function i(e) {
        const n = t.useContext(l)
        return t.useMemo(
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
              ? e.components(r)
              : e.components || r
            : i(e.components)),
          t.createElement(l.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
