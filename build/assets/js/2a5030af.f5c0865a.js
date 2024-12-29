'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [5319],
  {
    27232: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => l,
          contentTitle: () => c,
          default: () => h,
          frontMatter: () => o,
          metadata: () => i,
          toc: () => r,
        })
      const i = JSON.parse(
        '{"id":"define-scheduling-rules","title":"Define Scheduling Rules","description":"Schedule overview","source":"@site/docs/define-scheduling-rules.md","sourceDirName":".","slug":"/define-scheduling-rules","permalink":"/docs/next/define-scheduling-rules","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/docs/define-scheduling-rules.md","tags":[],"version":"current","frontMatter":{"title":"Define Scheduling Rules"},"sidebar":"docs","previous":{"title":"Define the Scope of Chaos Experiments","permalink":"/docs/next/define-chaos-experiment-scope"},"next":{"title":"Run a Chaos Experiment","permalink":"/docs/next/run-a-chaos-experiment"}}'
      )
      var t = s(74848),
        d = s(28453)
      const o = { title: 'Define Scheduling Rules' },
        c = void 0,
        l = {},
        r = [
          { value: 'Schedule overview', id: 'schedule-overview', level: 2 },
          {
            value: 'Create scheduling rules with <code>kubectl</code> using YAML files',
            id: 'create-scheduling-rules-with-kubectl-using-yaml-files',
            level: 2,
          },
          { value: '<code>schedule</code> field', id: 'schedule-field', level: 3 },
          { value: 'Predefined schedules', id: 'predefined-schedules', level: 4 },
          { value: 'Intervals', id: 'intervals', level: 4 },
          { value: '<code>historyLimit</code> field', id: 'historylimit-field', level: 3 },
          { value: '<code>concurrencyPolicy</code> field', id: 'concurrencypolicy-field', level: 3 },
          { value: '<code>startingDeadlineSeconds</code> field', id: 'startingdeadlineseconds-field', level: 3 },
          { value: 'Define experiments', id: 'define-experiments', level: 3 },
          {
            value: 'Create Scheduling rules using Chaos Dashboard',
            id: 'create-scheduling-rules-using-chaos-dashboard',
            level: 2,
          },
          { value: 'Pause the scheduled task', id: 'pause-the-scheduled-task', level: 3 },
        ]
      function a(e) {
        const n = {
          a: 'a',
          admonition: 'admonition',
          blockquote: 'blockquote',
          code: 'code',
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
          ...(0, d.R)(),
          ...e.components,
        }
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.h2, { id: 'schedule-overview', children: 'Schedule overview' }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'This document describes how to use Chaos Mesh to create a scheduled task, which can automatically create Chaos experiments at a fixed time (or at a fixed time interval).',
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'In Kubernetes, Chaos Mesh uses ',
                (0, t.jsx)(n.code, { children: 'Schedule' }),
                ' to describe scheduled tasks.',
              ],
            }),
            '\n',
            (0, t.jsx)(n.admonition, {
              type: 'note',
              children: (0, t.jsxs)(n.p, {
                children: [
                  'The name of a ',
                  (0, t.jsx)(n.code, { children: 'Schedule' }),
                  ' object should not exceed 57 characters because the created Chaos experiment will add 6 additional random characters to the end of the name.The name of the ',
                  (0, t.jsx)(n.code, { children: 'Schedule' }),
                  ' object with ',
                  (0, t.jsx)(n.code, { children: 'Workflow' }),
                  ' should not exceed 51 characters because Workflow will add 6 additional random characters to the end of the name.',
                ],
              }),
            }),
            '\n',
            (0, t.jsxs)(n.h2, {
              id: 'create-scheduling-rules-with-kubectl-using-yaml-files',
              children: [
                'Create scheduling rules with ',
                (0, t.jsx)(n.code, { children: 'kubectl' }),
                ' using YAML files',
              ],
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'For example, to apply a 100 millisecond delay for 12 seconds in the fifth minute of each hour, configure the YAML file as follows:',
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-yaml',
                children:
                  "apiVersion: chaos-mesh.org/v1alpha1\nkind: Schedule\nmetadata:\n  name: schedule-delay-example\nspec:\n  schedule: '5 * * * *'\n  historyLimit: 2\n  concurrencyPolicy: 'Allow'\n  type: 'NetworkChaos'\n  networkChaos:\n    action: delay\n    mode: one\n    selector:\n      namespaces:\n        - default\n      labelSelectors:\n        'app': 'web-show'\n    delay:\n      latency: '10ms'\n      correlation: '100'\n      jitter: '0ms'\n    duration: '12s'\n",
              }),
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'Save this YAML file as ',
                (0, t.jsx)(n.code, { children: 'schedule-networkchaos.yaml' }),
                ', and then run ',
                (0, t.jsx)(n.code, { children: 'kubectl apply -f ./schedule-networkchaos.yaml' }),
                '.',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'Based on this configuration, Chaos Mesh will create the following ',
                (0, t.jsx)(n.code, { children: 'NetworkChaos' }),
                ' object in the fifth minute of each hour (such as ',
                (0, t.jsx)(n.code, { children: '0:05' }),
                ', ',
                (0, t.jsx)(n.code, { children: '1:05' }),
                '...):',
              ],
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-yaml',
                children:
                  "apiVersion: chaos-mesh.org/v1alpha1\nkind: NetworkChaos\nmetadata:\n  name: schedule-delay-example-xxxxx\nspec:\n  action: delay\n  mode: one\n  selector:\n    namespaces:\n      - default\n    labelSelectors:\n      'app': 'web-show'\n  delay:\n    latency: '10ms'\n    correlation: '100'\n    jitter: '0ms'\n  duration: '12s'\n",
              }),
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'The fields in ',
                (0, t.jsx)(n.code, { children: 'Schedule' }),
                ' are described below, mostly similar to fields in Kubernetes ',
                (0, t.jsx)(n.code, { children: 'CronJob' }),
                '. You can refer to the ',
                (0, t.jsx)(n.a, {
                  href: 'https://kubernetes.io/zh/docs/concepts/workloads/controllers/cron-jobs/',
                  children: 'documentation of Kubernetes CronJob',
                }),
                ' for more information.',
              ],
            }),
            '\n',
            (0, t.jsx)(n.admonition, {
              type: 'note',
              children: (0, t.jsxs)(n.p, {
                children: [
                  'The timezone in the ',
                  (0, t.jsx)(n.code, { children: 'schedule' }),
                  ' field subjects to the timezone of ',
                  (0, t.jsx)(n.code, { children: 'chaos-controller-manager' }),
                  '.',
                ],
              }),
            }),
            '\n',
            (0, t.jsxs)(n.h3, {
              id: 'schedule-field',
              children: [(0, t.jsx)(n.code, { children: 'schedule' }), ' field'],
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'The ',
                (0, t.jsx)(n.code, { children: 'schedule' }),
                ' field is used to specify the time when an experiment is to be run. In other words, the alias for a schedule is a cron job:',
              ],
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-txt',
                children:
                  '# \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 minute (0 - 59)\n# \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 hour (0 - 23)\n# \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 day of the month (1 - 31)\n# \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 month (1 - 12)\n# \u2502 \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 day of the week (0 - 6) (Sunday to Saturday; 7 is also Sunday on some systems)\n# \u2502 \u2502 \u2502 \u2502 \u2502\n# \u2502 \u2502 \u2502 \u2502 \u2502\n# \u2502 \u2502 \u2502 \u2502 \u2502\n# * * * * * <command to execute>\n',
              }),
            }),
            '\n',
            (0, t.jsxs)(n.blockquote, {
              children: [
                '\n',
                (0, t.jsxs)(n.p, {
                  children: [
                    'This diagram is taken from ',
                    (0, t.jsx)(n.a, {
                      href: 'https://en.wikipedia.org/wiki/Cron',
                      children: 'https://en.wikipedia.org/wiki/Cron',
                    }),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'Chaos Mesh uses ',
                (0, t.jsx)(n.a, { href: 'https://pkg.go.dev/github.com/robfig/cron/v3', children: 'robfig/cron/v3' }),
                ' to transform the ',
                (0, t.jsx)(n.code, { children: 'schedule' }),
                ' field into a cron expression internally.',
              ],
            }),
            '\n',
            (0, t.jsx)(n.admonition, {
              type: 'tip',
              children: (0, t.jsxs)(n.p, {
                children: [
                  'If you need to generate a schedule, you can use some web tools such as ',
                  (0, t.jsx)(n.a, { href: 'https://crontab.guru', children: 'crontab.guru' }),
                  '.',
                ],
              }),
            }),
            '\n',
            (0, t.jsx)(n.h4, { id: 'predefined-schedules', children: 'Predefined schedules' }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'In addition to regular syntax, it also has several pre-defined schedules. You may use one of several pre-defined schedules in place of a cron expression:',
            }),
            '\n',
            (0, t.jsxs)(n.table, {
              children: [
                (0, t.jsx)(n.thead, {
                  children: (0, t.jsxs)(n.tr, {
                    children: [
                      (0, t.jsx)(n.th, { children: 'Entry' }),
                      (0, t.jsx)(n.th, { children: 'Description' }),
                      (0, t.jsx)(n.th, { children: 'Equivalent To' }),
                    ],
                  }),
                }),
                (0, t.jsxs)(n.tbody, {
                  children: [
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, { children: '@yearly (or @annually)' }),
                        (0, t.jsx)(n.td, { children: 'Run once a year, midnight, Jan. 1st' }),
                        (0, t.jsx)(n.td, { children: '0 0 1 1 *' }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, { children: '@monthly' }),
                        (0, t.jsx)(n.td, { children: 'Run once a month, midnight, first of month' }),
                        (0, t.jsx)(n.td, { children: '0 0 1 * *' }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, { children: '@weekly' }),
                        (0, t.jsx)(n.td, { children: 'Run once a week, midnight between Sat/Sun' }),
                        (0, t.jsx)(n.td, { children: '0 0 * * 0' }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, { children: '@daily (or @midnight)' }),
                        (0, t.jsx)(n.td, { children: 'Run once a day, midnight' }),
                        (0, t.jsx)(n.td, { children: '0 0 * * *' }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, { children: '@hourly' }),
                        (0, t.jsx)(n.td, { children: 'Run once an hour, beginning of hour' }),
                        (0, t.jsx)(n.td, { children: '0 * * * *' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, t.jsxs)(n.blockquote, {
              children: [
                '\n',
                (0, t.jsxs)(n.p, {
                  children: [
                    'This table is taken from ',
                    (0, t.jsx)(n.a, {
                      href: 'https://pkg.go.dev/github.com/robfig/cron/v3#hdr-Predefined_schedules',
                      children: 'https://pkg.go.dev/github.com/robfig/cron/v3#hdr-Predefined_schedules',
                    }),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h4, { id: 'intervals', children: 'Intervals' }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                "You may also schedule a job to execute at fixed intervals, starting at the time it's added or cron is run. This is supported by formatting the cron spec like this:",
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, { className: 'language-txt', children: '@every <duration>\n' }),
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'For example, ',
                (0, t.jsx)(n.code, { children: '@every 1h30m10s' }),
                ' would indicate a schedule that activates after 1 hour, 30 minutes, 10 seconds, and then every interval after that.',
              ],
            }),
            '\n',
            (0, t.jsx)(n.admonition, {
              type: 'info',
              children: (0, t.jsxs)(n.p, {
                children: [
                  'The content of ',
                  (0, t.jsx)(n.code, { children: 'Intervals' }),
                  ' is taken from ',
                  (0, t.jsx)(n.a, {
                    href: 'https://pkg.go.dev/github.com/robfig/cron/v3#hdr-Intervals',
                    children: 'https://pkg.go.dev/github.com/robfig/cron/v3#hdr-Intervals',
                  }),
                  '. You can refer to the official documentation for more information.',
                ],
              }),
            }),
            '\n',
            (0, t.jsxs)(n.h3, {
              id: 'historylimit-field',
              children: [(0, t.jsx)(n.code, { children: 'historyLimit' }), ' field'],
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'After an experiment ends, the corresponding history will not be deleted so you can retrieve and observe the results easily in case of any errors. The number set in ',
                (0, t.jsx)(n.code, { children: 'historyLimit' }),
                ' is the number of reserved tasks. This number includes tasks in progress. Chaos Mesh does not delete running tasks.',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'When there are more than ',
                (0, t.jsx)(n.code, { children: 'historyLimit' }),
                ' tasks, Chaos Mesh will delete the earliest created tasks sequentially. If those tasks continue to run, they will be skipped and not deleted.',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.h3, {
              id: 'concurrencypolicy-field',
              children: [(0, t.jsx)(n.code, { children: 'concurrencyPolicy' }), ' field'],
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'The values available for this field are ',
                (0, t.jsx)(n.code, { children: '"Forbid"' }),
                ', ',
                (0, t.jsx)(n.code, { children: '"Allow"' }),
                ', and ',
                (0, t.jsx)(n.code, { children: '""' }),
                '.',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'This field is used to specify whether to allow this ',
                (0, t.jsx)(n.code, { children: 'Schedule' }),
                ' object to create multiple concurrent experiments. For example, with the ',
                (0, t.jsx)(n.code, { children: 'schedule: * * * * *' }),
                ' configuration, one experiment will be created every minute. If the ',
                (0, t.jsx)(n.code, { children: 'duration' }),
                ' of the experiment is configured to be 70 seconds, multiple experiments will be created simtaneously.',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'By default, the ',
                (0, t.jsx)(n.code, { children: 'concurrencyPolicy' }),
                ' field is set to ',
                (0, t.jsx)(n.code, { children: 'Forbid' }),
                ', which means multiple experiments are not allowed to be created simultaneously. If you set the value of the ',
                (0, t.jsx)(n.code, { children: 'concurrencyPolicy' }),
                ' field to ',
                (0, t.jsx)(n.code, { children: 'Allow' }),
                ', multiple experiments are allowed to be created simultaneously.',
              ],
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children: 'The following configuration still takes the delay experiment as an example:',
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-yaml',
                children:
                  "spec:\n  schedule: '* * * * *'\n  type: 'NetworkChaos'\n  networkChaos:\n    action: delay\n    mode: one\n    selector:\n      namespaces:\n        - default\n      labelSelectors:\n        'app': 'web-show'\n    delay:\n      latency: '10ms'\n    duration: '70s'\n",
              }),
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'Based on this configuration, if you set ',
                (0, t.jsx)(n.code, { children: 'concurrencyPolicy: "Allow"' }),
                ', there will be a delay of 20 milliseconds in 10 seconds every minute. And for the other 50 seconds, there will be a delay of 10 milliseconds. If you set ',
                (0, t.jsx)(n.code, { children: 'concurrencyPolicy: "Forbid"' }),
                ', there will always be a delay of 10 milliseconds.',
              ],
            }),
            '\n',
            (0, t.jsx)(n.admonition, {
              type: 'note',
              children: (0, t.jsx)(n.p, {
                children:
                  'Not all experiment types support multiple experiments on the same Pod. For details, refer to the documents of the specific experiment types.',
              }),
            }),
            '\n',
            (0, t.jsxs)(n.h3, {
              id: 'startingdeadlineseconds-field',
              children: [(0, t.jsx)(n.code, { children: 'startingDeadlineSeconds' }), ' field'],
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'The default value of ',
                (0, t.jsx)(n.code, { children: 'startingDeadlineSeconds' }),
                ' is ',
                (0, t.jsx)(n.code, { children: 'nil' }),
                '.',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'When ',
                (0, t.jsx)(n.code, { children: 'startingDeadlineSeconds' }),
                ' is set to ',
                (0, t.jsx)(n.code, { children: 'nil' }),
                ', Chaos Mesh will check if any experiments are missed from the last time of the scheduling to now (this might happen when you close Chaos Mesh, suspend Schedule for a long time, or set ',
                (0, t.jsx)(n.code, { children: 'concertencyPolicy' }),
                ' to ',
                (0, t.jsx)(n.code, { children: 'Forbid' }),
                ').',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'When ',
                (0, t.jsx)(n.code, { children: 'startingDeadlineSeconds' }),
                ' is set and larger than ',
                (0, t.jsx)(n.code, { children: '0' }),
                ', Chaos Mesh will check if any experiments are missed for the past ',
                (0, t.jsx)(n.code, { children: 'startingDeadlineSeconds' }),
                ' seconds since the current time. If the value of ',
                (0, t.jsx)(n.code, { children: 'startingDeadlineSeconds' }),
                ' is too small, some experiments might be missed. For example:',
              ],
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-yaml',
                children:
                  "spec:\n  schedule: '* * * * *'\n  type: 'NetworkChaos'\n  networkChaos:\n    action: delay\n    mode: one\n    selector:\n      namespaces:\n        - default\n      labelSelectors:\n        'app': 'web-show'\n    startingDeadlineSeconds: 5\n    delay:\n      latency: '10ms'\n    duration: '70s'\n",
              }),
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'In the above example, due to ',
                (0, t.jsx)(n.code, { children: 'concurrencyPolicy' }),
                ' is set to ',
                (0, t.jsx)(n.code, { children: 'Forbid' }),
                ', creating new tasks is forbidden at the beginning of the minute. And in the tenth second of this minute, the last created Chaos experiment has finished running. But due to the limits of ',
                (0, t.jsx)(n.code, { children: 'startingDeadlineSeconds' }),
                ' and the set of ',
                (0, t.jsx)(n.code, { children: 'concurrencyPolicy' }),
                ', the missing events will not be retrieved and no Chaos experiments will be created. New Chaos experiment will only be created at the beginning of the next minute.',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'If ',
                (0, t.jsx)(n.code, { children: 'startingDeadlineSeconds' }),
                ' is not set (or is set to ',
                (0, t.jsx)(n.code, { children: 'nil' }),
                '), there will always be a delay of 10 milliseconds. This is because after the running task is done, Chaos Mesh finds a previous missing task (due to ',
                (0, t.jsx)(n.code, { children: 'concurrencyPolicy' }),
                ' is set to ',
                (0, t.jsx)(n.code, { children: 'Forbid' }),
                '), and immediately creates a new task.',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'To learn more examples and similar explanations of this field, see ',
                (0, t.jsx)(n.a, {
                  href: 'https://kubernetes.io/zh/docs/concepts/workloads/controllers/cron-jobs/#cron-job-limitations',
                  children: 'Kubernetes CronJob documents',
                }),
                '.',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, { id: 'define-experiments', children: 'Define experiments' }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'To define the specific content of the experiment, you need to specify two fields in ',
                (0, t.jsx)(n.code, { children: 'Schedule' }),
                ': ',
                (0, t.jsx)(n.code, { children: 'type' }),
                ' and ',
                (0, t.jsx)(n.code, { children: '*Chaos' }),
                '. ',
                (0, t.jsx)(n.code, { children: 'type' }),
                ' field is used to specify the type of an experiment, and ',
                (0, t.jsx)(n.code, { children: '*Chaos' }),
                ' field is used to describe the content of the experiment. Normally, the content in the ',
                (0, t.jsx)(n.code, { children: 'type' }),
                ' field uses upper camel case, for example: ',
                (0, t.jsx)(n.code, { children: 'NetworkChaos' }),
                ', ',
                (0, t.jsx)(n.code, { children: 'PodChaos' }),
                ', ',
                (0, t.jsx)(n.code, { children: 'IOChaos' }),
                '. While the key of ',
                (0, t.jsx)(n.code, { children: '*Chaos' }),
                ' uses lower camel case like ',
                (0, t.jsx)(n.code, { children: 'networkChaos' }),
                ', ',
                (0, t.jsx)(n.code, { children: 'podChaos' }),
                ', and ',
                (0, t.jsx)(n.code, { children: 'ioChaos' }),
                '. The key of ',
                (0, t.jsx)(n.code, { children: '*Chaos' }),
                ' is the ',
                (0, t.jsx)(n.code, { children: 'spec' }),
                ' of the corresponding type of experiment. For details, refer to the documents of the specific experiment types.',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: 'create-scheduling-rules-using-chaos-dashboard',
              children: 'Create Scheduling rules using Chaos Dashboard',
            }),
            '\n',
            (0, t.jsxs)(n.ol, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'Open Chaos Dashboard, and click ',
                        (0, t.jsx)(n.strong, { children: 'NEW EXPERIMENT' }),
                        ' on the page to create a new experiment.',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(n.p, {
                      children: (0, t.jsx)(n.img, {
                        alt: 'Create plans',
                        src: s(10764).A + '',
                        width: '1242',
                        height: '504',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(n.p, { children: 'Select and fill in the specific details of the experiment.' }),
                    '\n',
                    (0, t.jsx)(n.p, {
                      children: (0, t.jsx)(n.img, {
                        alt: 'Select and fill in the content',
                        src: s(74474).A + '',
                        width: '1224',
                        height: '854',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(n.p, {
                      children: 'Fill out information including the planning cycle and concurrency strategy.',
                    }),
                    '\n',
                    (0, t.jsx)(n.p, {
                      children: (0, t.jsx)(n.img, {
                        alt: 'Fill out planning rules',
                        src: s(75034).A + '',
                        width: '1536',
                        height: '1526',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: ['\n', (0, t.jsx)(n.p, { children: 'Submit the experiment information.' }), '\n'],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, { id: 'pause-the-scheduled-task', children: 'Pause the scheduled task' }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'Unlike ',
                (0, t.jsx)(n.code, { children: 'CronJob' }),
                ', pausing ',
                (0, t.jsx)(n.code, { children: 'Schedule' }),
                ' not only prevents it from creating a new experiment, but also pauses an already created experiment.',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'If you do not want to create a Chaos experiment as a scheduled task for now, you need to add the ',
                (0, t.jsx)(n.code, { children: 'experiment.chaos-mesh.org/pause=true' }),
                ' annotation to the ',
                (0, t.jsx)(n.code, { children: 'Schedule' }),
                ' object. You can add the annotation using the ',
                (0, t.jsx)(n.code, { children: 'kubectl' }),
                ' command:',
              ],
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-bash',
                children: 'kubectl annotate -n $NAMESPACE schedule $NAME experiment.chaos-mesh.org/pause=true\n',
              }),
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'In the command, ',
                (0, t.jsx)(n.code, { children: '$NAMESPACE' }),
                ' is a namespace, and ',
                (0, t.jsx)(n.code, { children: '$NAME' }),
                ' is the name of ',
                (0, t.jsx)(n.code, { children: 'Schedule' }),
                '. The successful result is returned as follows:',
              ],
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, { className: 'language-bash', children: 'schedule/$NAME annotated\n' }),
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children: 'If you want to unpause the task, you can use the following command to remove the annotation:',
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-bash',
                children: 'kubectl annotate -n $NAMESPACE schedule $NAME experiment.chaos-mesh.org/pause-\n',
              }),
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'In the command, ',
                (0, t.jsx)(n.code, { children: '$NAMESPACE' }),
                ' is the namespace, and ',
                (0, t.jsx)(n.code, { children: '$NAME' }),
                ' is the name of ',
                (0, t.jsx)(n.code, { children: 'Schedule' }),
                '.The successful result is returned as follows:',
              ],
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, { className: 'language-bash', children: 'schedule/$NAME annotated\n' }),
            }),
          ],
        })
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, d.R)(), ...e.components }
        return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e)
      }
    },
    10764: (e, n, s) => {
      s.d(n, { A: () => i })
      const i = s.p + 'assets/images/create-new-schedule-e82ccedf7ffe3c4d7c5801bb122f23ee.png'
    },
    74474: (e, n, s) => {
      s.d(n, { A: () => i })
      const i = s.p + 'assets/images/define-schedule-inner-resource-89388e7af1d18dfbb43233addb35055d.png'
    },
    75034: (e, n, s) => {
      s.d(n, { A: () => i })
      const i = s.p + 'assets/images/define-schedule-spec-7a8d2b0b0fec3b65c7577cbf87ae686a.png'
    },
    28453: (e, n, s) => {
      s.d(n, { R: () => o, x: () => c })
      var i = s(96540)
      const t = {},
        d = i.createContext(t)
      function o(e) {
        const n = i.useContext(d)
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e }
          },
          [n, e]
        )
      }
      function c(e) {
        let n
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(t)
              : e.components || t
            : o(e.components)),
          i.createElement(d.Provider, { value: n }, e.children)
        )
      }
    },
  },
])
