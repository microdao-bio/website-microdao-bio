'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [3627],
  {
    92271: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => a,
          contentTitle: () => d,
          default: () => h,
          frontMatter: () => r,
          metadata: () => i,
          toc: () => c,
        })
      const i = JSON.parse(
        '{"id":"simulate-jvm-application-chaos-in-physical-nodes","title":"Simulate JVM Application Faults","description":"Chaosd simulates the faults of JVM application through Byteman. The supported fault types are as follows:","source":"@site/versioned_docs/version-2.5.2/simulate-jvm-application-chaos-in-physical-nodes.md","sourceDirName":".","slug":"/simulate-jvm-application-chaos-in-physical-nodes","permalink":"/docs/2.5.2/simulate-jvm-application-chaos-in-physical-nodes","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.5.2/simulate-jvm-application-chaos-in-physical-nodes.md","tags":[],"version":"2.5.2","frontMatter":{"title":"Simulate JVM Application Faults"},"sidebar":"docs","previous":{"title":"Simulate Disk Faults","permalink":"/docs/2.5.2/simulate-disk-pressure-in-physical-nodes"},"next":{"title":"Simulate Time Faults","permalink":"/docs/2.5.2/simulate-time-chaos-on-physical-nodes"}}'
      )
      var s = n(74848),
        l = n(28453)
      const r = { title: 'Simulate JVM Application Faults' },
        d = void 0,
        a = {},
        c = [
          {
            value: 'Create experiments using the command-line mode',
            id: 'create-experiments-using-the-command-line-mode',
            level: 2,
          },
          {
            value: 'Throw custom exceptions using the command-line mode',
            id: 'throw-custom-exceptions-using-the-command-line-mode',
            level: 3,
          },
          { value: 'Commands for throwing custom exceptions', id: 'commands-for-throwing-custom-exceptions', level: 4 },
          {
            value: 'Configuration description for throwing custom exceptions',
            id: 'configuration-description-for-throwing-custom-exceptions',
            level: 4,
          },
          { value: 'Example for throwing custom exceptions', id: 'example-for-throwing-custom-exceptions', level: 4 },
          {
            value: 'Trigger garbage collection using the command-line mode',
            id: 'trigger-garbage-collection-using-the-command-line-mode',
            level: 3,
          },
          {
            value: 'Commands for triggering garbage collection',
            id: 'commands-for-triggering-garbage-collection',
            level: 4,
          },
          {
            value: 'Configuration description for triggering garbage collection',
            id: 'configuration-description-for-triggering-garbage-collection',
            level: 4,
          },
          {
            value: 'Example for triggering garbage collection',
            id: 'example-for-triggering-garbage-collection',
            level: 4,
          },
          {
            value: 'Increase method latency using the command-line mode',
            id: 'increase-method-latency-using-the-command-line-mode',
            level: 3,
          },
          { value: 'Commands for increasing method latency', id: 'commands-for-increasing-method-latency', level: 4 },
          {
            value: 'Configuration description for increasing method latency',
            id: 'configuration-description-for-increasing-method-latency',
            level: 4,
          },
          { value: 'Example for increasing method latency', id: 'example-for-increasing-method-latency', level: 4 },
          {
            value: 'Modify return values of a method using the command-line mode',
            id: 'modify-return-values-of-a-method-using-the-command-line-mode',
            level: 3,
          },
          {
            value: 'Commands for modifying return values of a method',
            id: 'commands-for-modifying-return-values-of-a-method',
            level: 4,
          },
          {
            value: 'Configuration description for modifying return values of a method',
            id: 'configuration-description-for-modifying-return-values-of-a-method',
            level: 4,
          },
          {
            value: 'Example for simulating the scenario of modifying return values of a method',
            id: 'example-for-simulating-the-scenario-of-modifying-return-values-of-a-method',
            level: 4,
          },
          {
            value: 'Trigger faults by setting Byteman configuration files using the command-line mode',
            id: 'trigger-faults-by-setting-byteman-configuration-files-using-the-command-line-mode',
            level: 3,
          },
          {
            value: 'Commands for triggering faults by setting Byteman configuration files',
            id: 'commands-for-triggering-faults-by-setting-byteman-configuration-files',
            level: 4,
          },
          {
            value: 'Configuration description for triggering faults by setting Byteman configuration files',
            id: 'configuration-description-for-triggering-faults-by-setting-byteman-configuration-files',
            level: 4,
          },
          {
            value: 'Example for triggering faults by setting Byteman configuration files',
            id: 'example-for-triggering-faults-by-setting-byteman-configuration-files',
            level: 4,
          },
          {
            value: 'Increase JVM stress using the command-line mode',
            id: 'increase-jvm-stress-using-the-command-line-mode',
            level: 3,
          },
          { value: 'Commands for increasing JVM stress', id: 'commands-for-increasing-jvm-stress', level: 4 },
          {
            value: 'Configuration description for increasing JVM stress',
            id: 'configuration-description-for-increasing-jvm-stress',
            level: 4,
          },
          { value: 'Example for increasing JVM stress', id: 'example-for-increasing-jvm-stress', level: 4 },
          {
            value: 'Create experiments using the service mode',
            id: 'create-experiments-using-the-service-mode',
            level: 2,
          },
          {
            value: 'Throw custom exceptions using the service mode',
            id: 'throw-custom-exceptions-using-the-service-mode',
            level: 3,
          },
          {
            value: 'Parameters for throwing custom exceptions',
            id: 'parameters-for-throwing-custom-exceptions',
            level: 4,
          },
          {
            value: 'Example for throwing custom exceptions using the service mode',
            id: 'example-for-throwing-custom-exceptions-using-the-service-mode',
            level: 4,
          },
          {
            value: 'Trigger garbage collection using service mode',
            id: 'trigger-garbage-collection-using-service-mode',
            level: 3,
          },
          {
            value: 'Parameters for triggering garbage collection',
            id: 'parameters-for-triggering-garbage-collection',
            level: 4,
          },
          {
            value: 'Example for triggering garbage collection using the service mode',
            id: 'example-for-triggering-garbage-collection-using-the-service-mode',
            level: 4,
          },
          {
            value: 'Increase method latency using service mode',
            id: 'increase-method-latency-using-service-mode',
            level: 3,
          },
          {
            value: 'Parameters for increasing method latency',
            id: 'parameters-for-increasing-method-latency',
            level: 4,
          },
          {
            value: 'Example for increasing method latency using the service mode',
            id: 'example-for-increasing-method-latency-using-the-service-mode',
            level: 4,
          },
          {
            value: 'Modify return values of a method using service mode',
            id: 'modify-return-values-of-a-method-using-service-mode',
            level: 3,
          },
          {
            value: 'Parameters for modifying return values of a method',
            id: 'parameters-for-modifying-return-values-of-a-method',
            level: 4,
          },
          {
            value: 'Example for modifying return values of a method using the service mode',
            id: 'example-for-modifying-return-values-of-a-method-using-the-service-mode',
            level: 4,
          },
          {
            value: 'Trigger faults by setting Byteman configuration files using service mode',
            id: 'trigger-faults-by-setting-byteman-configuration-files-using-service-mode',
            level: 3,
          },
          {
            value: 'Parameters for triggering faults by setting Byteman configuration files',
            id: 'parameters-for-triggering-faults-by-setting-byteman-configuration-files',
            level: 4,
          },
          {
            value: 'Example for triggering faults by setting Byteman configuration files using the service mode',
            id: 'example-for-triggering-faults-by-setting-byteman-configuration-files-using-the-service-mode',
            level: 4,
          },
          {
            value: 'Increase JVM stress using the service mode',
            id: 'increase-jvm-stress-using-the-service-mode',
            level: 3,
          },
          { value: 'Parameters for increasing JVM stress', id: 'parameters-for-increasing-jvm-stress', level: 4 },
          {
            value: 'Example for increasing JVM stress using the service mode',
            id: 'example-for-increasing-jvm-stress-using-the-service-mode',
            level: 4,
          },
        ]
      function o(e) {
        const t = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
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
          ul: 'ul',
          ...(0, l.R)(),
          ...e.components,
        }
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(t.p, {
              children: [
                'Chaosd simulates the faults of JVM application through ',
                (0, s.jsx)(t.a, { href: 'https://github.com/chaos-mesh/byteman', children: 'Byteman' }),
                '. The supported fault types are as follows:',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsx)(t.li, { children: 'Throw custom exceptions' }),
                '\n',
                (0, s.jsx)(t.li, { children: 'Trigger garbage collection' }),
                '\n',
                (0, s.jsx)(t.li, { children: 'Increase method latency' }),
                '\n',
                (0, s.jsx)(t.li, { children: 'Modify return values of a method' }),
                '\n',
                (0, s.jsx)(t.li, { children: 'Trigger faults by setting Byteman configuration files' }),
                '\n',
                (0, s.jsx)(t.li, { children: 'Increase JVM pressure' }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children: 'This document describes how to use Chaosd to create the above fault types of JVM experiments.',
            }),
            '\n',
            (0, s.jsx)(t.h2, {
              id: 'create-experiments-using-the-command-line-mode',
              children: 'Create experiments using the command-line mode',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'This section introduces how to create the experiments of JVM application faults using the command-line mode.',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Before creating the experiment, you can run the following command line to see the types of JVM application faults supported by Chaosd:',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, { className: 'language-bash', children: 'chaosd attack jvm -h\n' }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "JVM attack related commands\n\nUsage:\n  chaosd attack jvm [command]\n\nAvailable Commands:\n  exception   throw specified exception for specified method\n  gc          trigger GC for JVM\n  latency     inject latency to specified method\n  return      return specified value for specified method\n  rule-file   inject fault with configured byteman rule file\n  stress      inject stress to JVM\n\nFlags:\n  -h, --help       help for jvm\n      --pid int    the pid of Java process which needs to attach\n      --port int   the port of agent server (default 9288)\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --uid string         the experiment ID\n\nUse \"chaosd attack jvm [command] --help\" for more information about a command.\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'throw-custom-exceptions-using-the-command-line-mode',
              children: 'Throw custom exceptions using the command-line mode',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'commands-for-throwing-custom-exceptions',
              children: 'Commands for throwing custom exceptions',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'To see the usage and configuration items of the command that throws custom exceptions, run the following command:',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack jvm exception --help\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "throw specified exception for specified method\n\nUsage:\n  chaosd attack jvm exception [options] [flags]\n\nFlags:\n  -c, --class string       Java class name\n      --exception string   the exception which needs to throw for action 'exception'\n  -h, --help               help for exception\n  -m, --method string      the method name in Java class\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --pid int            the pid of Java process which needs to attach\n      --port int           the port of agent server (default 9288)\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'configuration-description-for-throwing-custom-exceptions',
              children: 'Configuration description for throwing custom exceptions',
            }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'class' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'c' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The name of the Java class' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string type, required' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'exception' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The thrown custom exception' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string type, required' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'method' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'm' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The name of the method' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string type, required to be configured',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'pid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The Java process ID where the fault is to be injected',
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'int type, required' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'port' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'The port number attached to the Java process agent. The fault is injected into the Java process through this port number.',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['int type. The default value is ', (0, s.jsx)(t.code, { children: '9288' }), '.'],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The experiment ID' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string type. This item is not required to be configured, because Chaosd randomly creates one.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'example-for-throwing-custom-exceptions',
              children: 'Example for throwing custom exceptions',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'chaosd attack jvm exception -c Main -m sayhello --exception \'java.io.IOException("BOOM")\' --pid 30045\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '[2021/08/05 02:39:39.106 +00:00] [INFO] [jvm.go:208] ["byteman rule"] [rule="\\nRULE Main-sayhello-exception-q6nd0\\nCLASS Main\\nMETHOD sayhello\\nAT ENTRY\\nIF true\\nDO \\n\\tthrow new java.io.IOException(\\"BOOM\\");\\nENDRULE\\n"] [file=/tmp/rule.btm296930759]\nAttack jvm successfully, uid: 26a45ae2-d395-46f5-a126-2b2c6c85ae9d\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'trigger-garbage-collection-using-the-command-line-mode',
              children: 'Trigger garbage collection using the command-line mode',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'commands-for-triggering-garbage-collection',
              children: 'Commands for triggering garbage collection',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'To see the usage and configuration items of the command that triggers garbage collection, run the following command:',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, { className: 'language-bash', children: 'chaosd attack jvm gc --help\n' }),
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "trigger GC for JVM\n\nUsage:\n  chaosd attack jvm gc [flags]\n\nFlags:\n  -h, --help   help for gc\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --pid int            the pid of Java process which needs to attach\n      --port int           the port of agent server (default 9288)\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'configuration-description-for-triggering-garbage-collection',
              children: 'Configuration description for triggering garbage collection',
            }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'pid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The Java process ID where the fault is to be injected',
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'int type, required' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'port' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'The port number attached to the Java process agent. The fault is injected into the Java process through this port number.',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['int type. The default value is ', (0, s.jsx)(t.code, { children: '9288' }), '.'],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The experiment ID' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string type. This item is not required to be configured, because Chaosd randomly creates one.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'example-for-triggering-garbage-collection',
              children: 'Example for triggering garbage collection',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack jvm gc --pid 89345\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '[2021/08/05 02:49:47.850 +00:00] [INFO] [jvm.go:208] ["byteman rule"] [rule="\\nRULE --gc-u0mlf\\nGC\\nENDRULE\\n"] [file=/tmp/rule.btm012481052]\nAttack jvm successfully, uid: f360e70a-5359-49b6-8526-d7e0a3c6f696\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Triggering garbage collection is a one-time operation, and the experiment does not require recovery.',
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'increase-method-latency-using-the-command-line-mode',
              children: 'Increase method latency using the command-line mode',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'commands-for-increasing-method-latency',
              children: 'Commands for increasing method latency',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'To see the usage and configuration items of the command that increases method latency, run the following command:',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack jvm latency --help\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "inject latency to specified method\n\nUsage:\n  chaosd attack jvm latency [options] [flags]\n\nFlags:\n  -c, --class string    Java class name\n  -h, --help            help for latency\n      --latency int     the latency duration, unit ms\n  -m, --method string   the method name in Java class\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --pid int            the pid of Java process which needs to attach\n      --port int           the port of agent server (default 9288)\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'configuration-description-for-increasing-method-latency',
              children: 'Configuration description for increasing method latency',
            }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'class' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'c' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The name of the Java class' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string type, required' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'latency' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The duration of increasing method latency',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'int type, required. The unit is milisecond.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'method' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'm' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The name of the method' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string type, required' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'pid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The Java process ID where the fault is to be injected',
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'int type, required' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'port' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'The port number attached to the Java process agent. The fault is injected into the Java process through this port number.',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['int type. The default value is ', (0, s.jsx)(t.code, { children: '9288' }), '.'],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The experiment ID' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string type. This item is not required to be configured, because Chaosd randomly creates one.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'example-for-increasing-method-latency',
              children: 'Example for increasing method latency',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack jvm latency --class Main --method sayhello --latency 5000 --pid 100840\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '[2021/08/05 03:08:50.716 +00:00] [INFO] [jvm.go:208] ["byteman rule"] [rule="\\nRULE Main-sayhello-latency-hlib2\\nCLASS Main\\nMETHOD sayhello\\nAT ENTRY\\nIF true\\nDO \\n\\tThread.sleep(5000);\\nENDRULE\\n"] [file=/tmp/rule.btm359997255]\n[2021/08/05 03:08:51.155 +00:00] [INFO] [jvm.go:94] ["submit rules"] [output="install rule Main-sayhello-latency-hlib2\\n\\n"]\nAttack jvm successfully, uid: bbe00c57-ac9d-4113-bf0c-2a6f184be261\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'modify-return-values-of-a-method-using-the-command-line-mode',
              children: 'Modify return values of a method using the command-line mode',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'commands-for-modifying-return-values-of-a-method',
              children: 'Commands for modifying return values of a method',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'To see the usage and configuration items of the command that modifies return values of a method, run the following command:',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack jvm return --help\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "return specified value for specified method\n\nUsage:\n  chaosd attack jvm return [options] [flags]\n\nFlags:\n  -c, --class string    Java class name\n  -h, --help            help for return\n  -m, --method string   the method name in Java class\n      --value string    the return value for action 'return'. Only supports number and string types.\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --pid int            the pid of Java process which needs to attach\n      --port int           the port of agent server (default 9288)\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'configuration-description-for-modifying-return-values-of-a-method',
              children: 'Configuration description for modifying return values of a method',
            }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'class' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'c' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The name of the Java class' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string type, required to be configured',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'method' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'm' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The name of the method' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'string type, required to be configured',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'value' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'Specifies the return value of the method',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string type, required to be configured. Currently, the item can be numeric and string types. If the item (return value) is string, double quotes are required, like "chaos".',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'pid' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The Java process ID where the fault is needed to be injected',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'int type, required to be configured',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'port' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'The port number attached to the Java process agent. The faults is injected into the Java process through this port number.',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['int type. The default value is ', (0, s.jsx)(t.code, { children: '9288' }), '.'],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The experiment ID' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string type. This item is not required to be configured, because Chaosd randomly creates one.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'example-for-simulating-the-scenario-of-modifying-return-values-of-a-method',
              children: 'Example for simulating the scenario of modifying return values of a method',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack jvm return --class Main --method getnum --value 999 --pid 112694\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '[2021/08/05 03:35:10.603 +00:00] [INFO] [jvm.go:208] ["byteman rule"] [rule="\\nRULE Main-getnum-return-i6gb7\\nCLASS Main\\nMETHOD getnum\\nAT ENTRY\\nIF true\\nDO \\n\\treturn 999;\\nENDRULE\\n"] [file=/tmp/rule.btm051982059]\n[2021/08/05 03:35:10.820 +00:00] [INFO] [jvm.go:94] ["submit rules"] [output="install rule Main-getnum-return-i6gb7\\n\\n"]\nAttack jvm successfully, uid: e2f204f6-4bed-4d92-aade-2b4a47b02e5d\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'trigger-faults-by-setting-byteman-configuration-files-using-the-command-line-mode',
              children: 'Trigger faults by setting Byteman configuration files using the command-line mode',
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'You can set the fault rules in the Byteman rule configuration file, and then inject the faults by specifying the path of the configuration file using Chaosd. Regarding the Byteman rule configuration, refer to ',
                (0, s.jsx)(t.a, {
                  href: 'https://downloads.jboss.org/byteman/4.0.16/byteman-programmers-guide.html#the-byteman-rule-language',
                  children: 'byteman-rule-language',
                }),
                '.',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'commands-for-triggering-faults-by-setting-byteman-configuration-files',
              children: 'Commands for triggering faults by setting Byteman configuration files',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'To see the usage and configuration items of the command that triggers faults by setting Byteman configuration files, run the following command:',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack jvm rule-file --help\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "inject fault with configured byteman rule file\n\nUsage:\n  chaosd attack jvm rule-file [options] [flags]\n\nFlags:\n  -h, --help          help for rule-file\n  -p, --path string   the path of configured byteman rule file\n\nGlobal Flags:\n      --log-level string   the log level of chaosd, the value can be 'debug', 'info', 'warn' and 'error'\n      --pid int            the pid of Java process which needs to attach\n      --port int           the port of agent server (default 9288)\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'configuration-description-for-triggering-faults-by-setting-byteman-configuration-files',
              children: 'Configuration description for triggering faults by setting Byteman configuration files',
            }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'path' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'Specifies the path of the Byteman configuration file',
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string type, required' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'pid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The Java process ID where the fault is to be injected',
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'int type, required' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'port' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'The port number attached to the Java process agent. The fault is injected into the Java process through this port number.',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['int type. The default value is ', (0, s.jsx)(t.code, { children: '9288' }), '.'],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The experiment ID' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string type. This item is not required to be configured, because Chaosd randomly creates one.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'example-for-triggering-faults-by-setting-byteman-configuration-files',
              children: 'Example for triggering faults by setting Byteman configuration files',
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'First, based on the specific Java program and referring to ',
                (0, s.jsx)(t.a, {
                  href: 'https://downloads.jboss.org/byteman/4.0.16/byteman-programmers-guide.html#the-byteman-rule-language',
                  children: 'the Byteman rule language',
                }),
                ', write a rule configuration file. For example:',
              ],
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-txt',
                children:
                  'RULE modify return value\nCLASS Main\nMETHOD getnum\nAT ENTRY\nIF true\nDO\n    return 9999\nENDRULE\n',
              }),
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'Then, save the configuration file to the ',
                (0, s.jsx)(t.code, { children: 'return.btm' }),
                ' file. After that, run the following command to inject faults.',
              ],
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack jvm rule-file -p ./return.btm --pid 112694\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '[2021/08/05 03:45:40.757 +00:00] [INFO] [jvm.go:152] ["rule file data:RULE modify return value\\nCLASS Main\\nMETHOD getnum\\nAT ENTRY\\nIF true\\nDO\\n    return 9999\\nENDRULE\\n"]\n[2021/08/05 03:45:41.011 +00:00] [INFO] [jvm.go:94] ["submit rules"] [output="install rule modify return value\\n\\n"]\nAttack jvm successfully, uid: 5ca2e06d-a7c6-421d-bb67-0c9908bac17a\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'increase-jvm-stress-using-the-command-line-mode',
              children: 'Increase JVM stress using the command-line mode',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'commands-for-increasing-jvm-stress',
              children: 'Commands for increasing JVM stress',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'To see the usage and configuration items of the command that increases JVM stress, run the following command:',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack jvm stress --help\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  "inject stress to JVM\n\nUsage:\n  chaosd attack jvm stress [options] [flags]\n\nFlags:\n      --cpu-count int   the CPU core number\n  -h, --help            help for stress\n      --mem-type int    the memory type to be allocated. The value can be 'stack' or 'heap'.\n\nGlobal Flags:\n      --log-level string   the log level of chaosd. The value can be 'debug', 'info', 'warn' and 'error'\n      --pid int            the pid of Java process which needs to attach\n      --port int           the port of agent server (default 9288)\n      --uid string         the experiment ID\n",
              }),
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'configuration-description-for-increasing-jvm-stress',
              children: 'Configuration description for increasing JVM stress',
            }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Configuration item' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Abbreviation' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'cpu-count' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The number of CPU cores used for increasing JVM stress',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            'int type. You must configure one item between ',
                            (0, s.jsx)(t.code, { children: 'cpu-count' }),
                            ' and ',
                            (0, s.jsx)(t.code, { children: 'mem-type' }),
                            '.',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'mem-type' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The type of OOM' }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: [
                            "string type. Currently, both 'stack' and 'heap' OOM types are supported. You must configure one item between ",
                            (0, s.jsx)(t.code, { children: 'cpu-count' }),
                            ' and ',
                            (0, s.jsx)(t.code, { children: 'mem-type' }),
                            '.',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'pid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The Java process ID where the fault is to be injected',
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'int type, required' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'port' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'The port number attached to the Java process agent. The fault is injected into the Java process through this port number.',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['int type. The default value is ', (0, s.jsx)(t.code, { children: '9288' }), '.'],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'None' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The experiment ID' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string type. This item is not required to be configured, because Chaosd randomly creates one.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'example-for-increasing-jvm-stress',
              children: 'Example for increasing JVM stress',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children: 'chaosd attack jvm stress --cpu-count 2 --pid 123546\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '[2021/08/05 03:59:51.256 +00:00] [INFO] [jvm.go:208] ["byteman rule"] [rule="\\nRULE --stress-jfeiu\\nSTRESS CPU\\nCPUCOUNT 2\\nENDRULE\\n"] [file=/tmp/rule.btm773062009]\n[2021/08/05 03:59:51.613 +00:00] [INFO] [jvm.go:94] ["submit rules"] [output="install rule --stress-jfeiu\\n\\n"]\nAttack jvm successfully, uid: b9b997b5-0a0d-4f1f-9081-d52a32318b84\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h2, {
              id: 'create-experiments-using-the-service-mode',
              children: 'Create experiments using the service mode',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children: 'You can follow the instructions below to create experiments using the service mode.',
            }),
            '\n',
            (0, s.jsxs)(t.ol, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(t.p, { children: 'Execute Chaosd in service mode:' }),
                    '\n',
                    (0, s.jsx)(t.pre, {
                      children: (0, s.jsx)(t.code, {
                        className: 'language-bash',
                        children: 'chaosd server --port 31767\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(t.p, {
                      children: [
                        'Send HTTP POST request to the ',
                        (0, s.jsx)(t.code, { children: '/api/attack/{uid}' }),
                        ' path of Chaosd service.',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(t.pre, {
                      children: (0, s.jsx)(t.code, {
                        className: 'language-bash',
                        children:
                          'curl -X POST 172.16.112.130:31767/api/attack/jvm -H "Content-Type:application/json" -d \'{fault-configuration}\'\n',
                      }),
                    }),
                    '\n',
                    (0, s.jsxs)(t.p, {
                      children: [
                        'For the ',
                        (0, s.jsx)(t.code, { children: 'fault-configuration' }),
                        ' part in the above command, you need to configure it according to the fault types. For the corresponding parameters, refer to the parameters and examples of each fault type in the following sections.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.admonition, {
              type: 'note',
              children: (0, s.jsxs)(t.p, {
                children: [
                  'When running an experiment, remember to save the UID information of the experiment. When you want to end the experiment corresponding to the UID, you need to send an HTTP DELETE request to the ',
                  (0, s.jsx)(t.code, { children: '/api/attack/{uid}' }),
                  ' path of Chaosd service.',
                ],
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'throw-custom-exceptions-using-the-service-mode',
              children: 'Throw custom exceptions using the service mode',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'parameters-for-throwing-custom-exceptions',
              children: 'Parameters for throwing custom exceptions',
            }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Parameter' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'action' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The action of the experiment' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Set to "exception"' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'class' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The name of the Java class' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string type, required' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'exception' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The thrown custom exception' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string type, required' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'method' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The name of the method' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string type, required' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'pid' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The Java process ID where the fault is to be injected',
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'int type, required' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'port' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'The port number attached to the Java process agent. The faults is injected into the Java process through this port number.',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['int type. The default value is ', (0, s.jsx)(t.code, { children: '9288' }), '.'],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The experiment ID' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string type. This item is not required to be configured, because Chaosd randomly creates one.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'example-for-throwing-custom-exceptions-using-the-service-mode',
              children: 'Example for throwing custom exceptions using the service mode',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/jvm -H "Content-Type:application/json" -d \'{"action":"exception","class":"Main","method":"sayhello","exception":"java.io.IOException(\\"BOOM\\")","pid":1828622}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '{"status":200,"message":"attack successfully","uid":"c3c519bf-819a-4a7b-97fb-e3d0814481fa"}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'trigger-garbage-collection-using-service-mode',
              children: 'Trigger garbage collection using service mode',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'parameters-for-triggering-garbage-collection',
              children: 'Parameters for triggering garbage collection',
            }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Parameter' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'action' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The action of the experiment' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Set to "gc"' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'pid' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The Java process ID where the fault is to be injected',
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'int type, required' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'port' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'The port number attached to the Java process agent. The fault is injected into the Java process through this port number.',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['int type. The default value is ', (0, s.jsx)(t.code, { children: '9288' }), '.'],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The experiment ID' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string type. This item is not required to be configured, because Chaosd randomly creates one.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'example-for-triggering-garbage-collection-using-the-service-mode',
              children: 'Example for triggering garbage collection using the service mode',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/jvm -H "Content-Type:application/json" -d \'{"action":"gc","pid":1828622}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '{"status":200,"message":"attack successfully","uid":"c3c519bf-819a-4a7b-97fb-e3d0814481fa"}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Triggering garbage collection is a one-time operation. The experiment does not require recovery.',
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'increase-method-latency-using-service-mode',
              children: 'Increase method latency using service mode',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'parameters-for-increasing-method-latency',
              children: 'Parameters for increasing method latency',
            }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Parameter' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'action' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The action of the experiment' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Set to "latency"' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'class' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The name of the Java class' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string type, required' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'latency' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The duration of increasing method latency',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'int type, required. The unit is milisecond.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'method' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The name of the method' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string type, required' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'pid' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The Java process ID where the fault is to be injected',
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'int type, required' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'port' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The Java process ID where the fault is needed to be injected',
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'int type, required' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The experiment ID' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string type. This item is not required to be configured, because Chaosd randomly creates one.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'example-for-increasing-method-latency-using-the-service-mode',
              children: 'Example for increasing method latency using the service mode',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/jvm -H "Content-Type:application/json" -d \'{"action":"latency","class":"Main","method":"sayhello","latency":5000,"pid":1828622}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '{"status":200,"message":"attack successfully","uid":"a551206c-960d-4ac5-9056-518e512d4d0d"}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'modify-return-values-of-a-method-using-service-mode',
              children: 'Modify return values of a method using service mode',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'parameters-for-modifying-return-values-of-a-method',
              children: 'Parameters for modifying return values of a method',
            }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Parameter' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'action' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The action of the experiment' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Set to "return"' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'class' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The name of the Java class' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string type, required' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'method' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The name of the method' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string type, required' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'value' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'Specifies the return value of the method',
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string type, required. Currently, the item can be numeric and string types. If the item (return value) is string, double quotes are required, like "chaos".',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'pid' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The Java process ID where the fault is to be injected',
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'int type, required' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'port' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'The port number attached to the Java process agent. The fault is injected into the Java process through this port number.',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['int type. The default value is ', (0, s.jsx)(t.code, { children: '9288' }), '.'],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The experiment ID' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string type. This item is not required to be configured, because Chaosd randomly creates one.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'example-for-modifying-return-values-of-a-method-using-the-service-mode',
              children: 'Example for modifying return values of a method using the service mode',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/jvm -H "Content-Type:application/json" -d \'{"action":"return","class":"Main","method":"getnum","value":"999","pid":1828622}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '{"status":200,"message":"attack successfully","uid":"a551206c-960d-4ac5-9056-518e512d4d0d"}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'trigger-faults-by-setting-byteman-configuration-files-using-service-mode',
              children: 'Trigger faults by setting Byteman configuration files using service mode',
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'You can set the fault rules according to the Byteman rule configuration. Regarding to the Byteman rule configuration, refer to ',
                (0, s.jsx)(t.a, {
                  href: 'https://downloads.jboss.org/byteman/4.0.16/byteman-programmers-guide.html#the-byteman-rule-language',
                  children: 'byteman-rule-language',
                }),
                '.',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'parameters-for-triggering-faults-by-setting-byteman-configuration-files',
              children: 'Parameters for triggering faults by setting Byteman configuration files',
            }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Parameter' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Description' }),
                      (0, s.jsx)(t.th, { style: { textAlign: 'left' }, children: 'Value' }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'action' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The action of the experiment' }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'Set to "rule-data"' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'rule-data' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'Specifies the Byteman configuration data',
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'string type, required' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'pid' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: 'The Java process ID where the fault is to be injected',
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'int type, required' }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'port' }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'The port number attached to the Java process agent. The fault is injected into the Java process through this port number.',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: { textAlign: 'left' },
                          children: ['int type. The default value is ', (0, s.jsx)(t.code, { children: '9288' }), '.'],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children: (0, s.jsx)(t.code, { children: 'uid' }),
                        }),
                        (0, s.jsx)(t.td, { style: { textAlign: 'left' }, children: 'The experiment ID' }),
                        (0, s.jsx)(t.td, {
                          style: { textAlign: 'left' },
                          children:
                            'string type. This item is not required to be configured, because Chaosd randomly creates one.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'example-for-triggering-faults-by-setting-byteman-configuration-files-using-the-service-mode',
              children: 'Example for triggering faults by setting Byteman configuration files using the service mode',
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'First, based on the specific Java program and referring to ',
                (0, s.jsx)(t.a, {
                  href: 'https://downloads.jboss.org/byteman/4.0.16/byteman-programmers-guide.html#the-byteman-rule-language',
                  children: 'the Byteman rule language',
                }),
                ', write a rule configuration file. For example:',
              ],
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-txt',
                children:
                  'RULE modify return value\nCLASS Main\nMETHOD getnum\nAT ENTRY\nIF true\nDO\n    return 9999\nENDRULE\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Then, escape the line breaks in the configuration file to the newline character "\\n", and use the escaped text as the value of "rule-data". Run the following command:',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 127.0.0.1:31767/api/attack/jvm -H "Content-Type:application/json" -d \'{"action":"rule-data","pid":30045,"rule-data":"\\nRULE modify return value\\nCLASS Main\\nMETHOD getnum\\nAT ENTRY\\nIF true\\nDO return 9999\\nENDRULE\\n"}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '{"status":200,"message":"attack successfully","uid":"a551206c-960d-4ac5-9056-518e512d4d0d"}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'increase-jvm-stress-using-the-service-mode',
              children: 'Increase JVM stress using the service mode',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'parameters-for-increasing-jvm-stress',
              children: 'Parameters for increasing JVM stress',
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                '| Parameter | Description | Value |\n| :-- | :-- | :-- | --- |\n| ',
                (0, s.jsx)(t.code, { children: 'action' }),
                ' | The action of the experiment | Set to "stress" |\n| ',
                (0, s.jsx)(t.code, { children: 'cpu-count' }),
                ' | The number of CPU cores used for increasing CPU stress | int type. You must configure one item between ',
                (0, s.jsx)(t.code, { children: 'cpu-count' }),
                ' and ',
                (0, s.jsx)(t.code, { children: 'mem-type' }),
                '. |\n| ',
                (0, s.jsx)(t.code, { children: 'mem-type' }),
                " | The type of OOM | string type. Currently, both 'stack' and 'heap' OOM types are supported. You must configure one item between ",
                (0, s.jsx)(t.code, { children: 'cpu-count' }),
                ' and ',
                (0, s.jsx)(t.code, { children: 'mem-type' }),
                '. |\n| ',
                (0, s.jsx)(t.code, { children: 'pid' }),
                ' | None | The Java process ID where the fault is to be injected | int type, required |\n| ',
                (0, s.jsx)(t.code, { children: 'port' }),
                ' | None | The port number attached to the Java process agent. The fault is injected into the Java process through this port number. | int type. The default value is ',
                (0, s.jsx)(t.code, { children: '9288' }),
                '. |\n| ',
                (0, s.jsx)(t.code, { children: 'uid' }),
                ' | None | The experiment ID | string type. This item is not required to be configured, because Chaosd randomly creates one. |',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'example-for-increasing-jvm-stress-using-the-service-mode',
              children: 'Example for increasing JVM stress using the service mode',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  'curl -X POST 172.16.112.130:31767/api/attack/jvm -H "Content-Type:application/json" -d \'{"action":"stress","cpu-count":1,"pid":1828622}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, { children: 'The result is as follows:' }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-bash',
                children:
                  '{"status":200,"message":"attack successfully","uid":"a551206c-960d-4ac5-9056-518e512d4d0d"}\n',
              }),
            }),
          ],
        })
      }
      function h(e = {}) {
        const { wrapper: t } = { ...(0, l.R)(), ...e.components }
        return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(o, { ...e }) }) : o(e)
      }
    },
    28453: (e, t, n) => {
      n.d(t, { R: () => r, x: () => d })
      var i = n(96540)
      const s = {},
        l = i.createContext(s)
      function r(e) {
        const t = i.useContext(l)
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e }
          },
          [t, e]
        )
      }
      function d(e) {
        let t
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : r(e.components)),
          i.createElement(l.Provider, { value: t }, e.children)
        )
      }
    },
  },
])
