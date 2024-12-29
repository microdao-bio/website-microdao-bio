'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [6748],
  {
    33025: (e, s, d) => {
      d.r(s),
        d.d(s, {
          assets: () => c,
          contentTitle: () => l,
          default: () => a,
          frontMatter: () => r,
          metadata: () => n,
          toc: () => i,
        })
      const n = JSON.parse(
        '{"id":"create-chaos-mesh-workflow","title":"\u521b\u5efa Chaos Mesh \u5de5\u4f5c\u6d41","description":"Chaos Mesh \u5de5\u4f5c\u6d41\u7b80\u4ecb","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.2/create-chaos-mesh-workflow.md","sourceDirName":".","slug":"/create-chaos-mesh-workflow","permalink":"/zh/docs/create-chaos-mesh-workflow","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.6.2/create-chaos-mesh-workflow.md","tags":[],"version":"2.6.2","frontMatter":{"title":"\u521b\u5efa Chaos Mesh \u5de5\u4f5c\u6d41"},"sidebar":"docs","previous":{"title":"\u68c0\u67e5\u5b9e\u9a8c\u7ed3\u679c","permalink":"/zh/docs/inspect-chaos-experiments"},"next":{"title":"\u4e32\u884c\u6216\u5e76\u884c\u8fd0\u884c\u5b9e\u9a8c","permalink":"/zh/docs/run-serial-or-parallel-experiments"}}'
      )
      var h = d(74848),
        t = d(28453)
      const r = { title: '\u521b\u5efa Chaos Mesh \u5de5\u4f5c\u6d41' },
        l = void 0,
        c = {},
        i = [
          {
            value: 'Chaos Mesh \u5de5\u4f5c\u6d41\u7b80\u4ecb',
            id: 'chaos-mesh-\u5de5\u4f5c\u6d41\u7b80\u4ecb',
            level: 2,
          },
          {
            value: '\u901a\u8fc7 Chaos Dashboard \u521b\u5efa\u5de5\u4f5c\u6d41',
            id: '\u901a\u8fc7-chaos-dashboard-\u521b\u5efa\u5de5\u4f5c\u6d41',
            level: 2,
          },
          {
            value: '\u7b2c 1 \u6b65\uff1a\u6253\u5f00 Chaos Dashboard',
            id: '\u7b2c-1-\u6b65\u6253\u5f00-chaos-dashboard',
            level: 3,
          },
          {
            value: '\u7b2c 2 \u6b65\uff1a\u8bbe\u7f6e\u5de5\u4f5c\u6d41\u57fa\u672c\u4fe1\u606f',
            id: '\u7b2c-2-\u6b65\u8bbe\u7f6e\u5de5\u4f5c\u6d41\u57fa\u672c\u4fe1\u606f',
            level: 3,
          },
          {
            value: '\u7b2c 3 \u6b65\uff1a\u914d\u7f6e\u5de5\u4f5c\u6d41\u8282\u70b9',
            id: '\u7b2c-3-\u6b65\u914d\u7f6e\u5de5\u4f5c\u6d41\u8282\u70b9',
            level: 3,
          },
          {
            value: '\u7b2c 4 \u6b65\uff1a\u63d0\u4ea4\u5de5\u4f5c\u6d41',
            id: '\u7b2c-4-\u6b65\u63d0\u4ea4\u5de5\u4f5c\u6d41',
            level: 3,
          },
          {
            value: '\u4f7f\u7528 YAML \u6587\u4ef6\u4e0e <code>kubectl</code> \u521b\u5efa\u5de5\u4f5c\u6d41',
            id: '\u4f7f\u7528-yaml-\u6587\u4ef6\u4e0e-kubectl-\u521b\u5efa\u5de5\u4f5c\u6d41',
            level: 2,
          },
          { value: '\u5b57\u6bb5\u8bf4\u660e', id: '\u5b57\u6bb5\u8bf4\u660e', level: 2 },
          { value: 'Workflow \u5b57\u6bb5\u8bf4\u660e', id: 'workflow-\u5b57\u6bb5\u8bf4\u660e', level: 3 },
          { value: 'Template \u5b57\u6bb5\u8bf4\u660e', id: 'template-\u5b57\u6bb5\u8bf4\u660e', level: 3 },
          { value: 'Task \u5b57\u6bb5\u8bf4\u660e', id: 'task-\u5b57\u6bb5\u8bf4\u660e', level: 3 },
          {
            value: 'ConditionalBranch \u5b57\u6bb5\u8bf4\u660e',
            id: 'conditionalbranch-\u5b57\u6bb5\u8bf4\u660e',
            level: 3,
          },
          { value: 'Container \u5b57\u6bb5\u8bf4\u660e', id: 'container-\u5b57\u6bb5\u8bf4\u660e', level: 3 },
        ]
      function o(e) {
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
          ...(0, t.R)(),
          ...e.components,
        }
        return (0, h.jsxs)(h.Fragment, {
          children: [
            (0, h.jsx)(s.h2, {
              id: 'chaos-mesh-\u5de5\u4f5c\u6d41\u7b80\u4ecb',
              children: 'Chaos Mesh \u5de5\u4f5c\u6d41\u7b80\u4ecb',
            }),
            '\n',
            (0, h.jsx)(s.p, {
              children:
                '\u5728 Chaos Mesh \u4e2d\u6a21\u62df\u771f\u5b9e\u7684\u7cfb\u7edf\u6545\u969c\u65f6\uff0c\u901a\u5e38\u4f34\u968f\u7740\u6301\u7eed\u9a8c\u8bc1\u3002\u4f60\u53ef\u80fd\u5e0c\u671b\u5728 Chaos Mesh \u5e73\u53f0\u4e0a\u6784\u5efa\u4e00\u7cfb\u5217\u6545\u969c\uff0c\u800c\u4e0d\u662f\u6267\u884c\u5355\u4e2a\u72ec\u7acb\u7684\u6df7\u6c8c\u6545\u969c\u6ce8\u5165\u64cd\u4f5c\u3002',
            }),
            '\n',
            (0, h.jsx)(s.p, {
              children:
                '\u4e3a\u6ee1\u8db3\u8be5\u9700\u6c42\uff0cChaos Mesh \u63d0\u4f9b\u4e86 Chaos Mesh \u5de5\u4f5c\u6d41\uff0c\u4e00\u4e2a\u5185\u7f6e\u7684\u5de5\u4f5c\u6d41\u5f15\u64ce\u3002\u4f7f\u7528\u8be5\u5f15\u64ce\uff0c\u4f60\u53ef\u4ee5\u4e32\u884c\u6216\u5e76\u884c\u5730\u6267\u884c\u591a\u79cd\u4e0d\u540c\u7684 Chaos \u5b9e\u9a8c\uff0c \u7528\u4e8e\u6a21\u62df\u751f\u4ea7\u7ea7\u522b\u7684\u9519\u8bef\u3002',
            }),
            '\n',
            (0, h.jsx)(s.p, {
              children: '\u76ee\u524d\uff0c Chaos Mesh \u5de5\u4f5c\u6d41\u652f\u6301\u4ee5\u4e0b\u529f\u80fd\uff1a',
            }),
            '\n',
            (0, h.jsxs)(s.ul, {
              children: [
                '\n',
                (0, h.jsx)(s.li, { children: '\u4e32\u884c\u7f16\u6392' }),
                '\n',
                (0, h.jsx)(s.li, { children: '\u5e76\u884c\u7f16\u6392' }),
                '\n',
                (0, h.jsx)(s.li, { children: '\u81ea\u5b9a\u4e49\u4efb\u52a1' }),
                '\n',
                (0, h.jsx)(s.li, { children: '\u6761\u4ef6\u5206\u652f' }),
                '\n',
              ],
            }),
            '\n',
            (0, h.jsx)(s.p, { children: '\u4f7f\u7528\u573a\u666f\u4e3e\u4f8b\uff1a' }),
            '\n',
            (0, h.jsxs)(s.ul, {
              children: [
                '\n',
                (0, h.jsx)(s.li, {
                  children:
                    '\u4f7f\u7528\u5e76\u884c\u7f16\u6392\u540c\u65f6\u6ce8\u5165\u591a\u4e2a NetworkChaos \u6a21\u62df\u590d\u6742\u7684\u7f51\u7edc\u73af\u5883',
                }),
                '\n',
                (0, h.jsx)(s.li, {
                  children:
                    '\u5728\u4e32\u884c\u7f16\u6392\u4e2d\u8fdb\u884c\u5065\u5eb7\u68c0\u67e5\uff0c\u4f7f\u7528\u6761\u4ef6\u5206\u652f\u51b3\u5b9a\u662f\u5426\u6267\u884c\u5269\u4e0b\u7684\u6b65\u9aa4',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, h.jsx)(s.p, {
              children:
                'Chaos Mesh \u5de5\u4f5c\u6d41 \u5728\u8bbe\u8ba1\u65f6\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u53c2\u8003\u4e86 Argo \u5de5\u4f5c\u6d41\u3002\u5982\u679c\u60a8\u719f\u6089 Argo \u5de5\u4f5c\u6d41\uff0c\u60a8\u4e5f\u80fd\u5f88\u5feb\u5730\u4e0a\u624b Chaos Mesh \u5de5\u4f5c\u6d41\u3002',
            }),
            '\n',
            (0, h.jsxs)(s.p, {
              children: [
                'Github \u4ed3\u5e93\u4e2d\u542b\u6709\u5176\u4ed6\u5de5\u4f5c\u6d41\u7684',
                (0, h.jsx)(s.a, {
                  href: 'https://github.com/chaos-mesh/chaos-mesh/tree/master/examples/workflow',
                  children: '\u793a\u4f8b',
                }),
                '.',
              ],
            }),
            '\n',
            (0, h.jsx)(s.h2, {
              id: '\u901a\u8fc7-chaos-dashboard-\u521b\u5efa\u5de5\u4f5c\u6d41',
              children: '\u901a\u8fc7 Chaos Dashboard \u521b\u5efa\u5de5\u4f5c\u6d41',
            }),
            '\n',
            (0, h.jsx)(s.h3, {
              id: '\u7b2c-1-\u6b65\u6253\u5f00-chaos-dashboard',
              children: '\u7b2c 1 \u6b65\uff1a\u6253\u5f00 Chaos Dashboard',
            }),
            '\n',
            (0, h.jsxs)(s.p, {
              children: [
                '\u70b9\u51fb',
                (0, h.jsx)(s.strong, { children: '\u65b0\u7684\u5de5\u4f5c\u6d41' }),
                '\u3002',
              ],
            }),
            '\n',
            (0, h.jsx)(s.p, {
              children: (0, h.jsx)(s.img, { alt: 'New Workflow', src: d(89932).A + '', width: '770', height: '443' }),
            }),
            '\n',
            (0, h.jsx)(s.h3, {
              id: '\u7b2c-2-\u6b65\u8bbe\u7f6e\u5de5\u4f5c\u6d41\u57fa\u672c\u4fe1\u606f',
              children: '\u7b2c 2 \u6b65\uff1a\u8bbe\u7f6e\u5de5\u4f5c\u6d41\u57fa\u672c\u4fe1\u606f',
            }),
            '\n',
            (0, h.jsx)(s.p, {
              children: (0, h.jsx)(s.img, { alt: 'Workflow Info', src: d(18478).A + '', width: '651', height: '449' }),
            }),
            '\n',
            (0, h.jsx)(s.h3, {
              id: '\u7b2c-3-\u6b65\u914d\u7f6e\u5de5\u4f5c\u6d41\u8282\u70b9',
              children: '\u7b2c 3 \u6b65\uff1a\u914d\u7f6e\u5de5\u4f5c\u6d41\u8282\u70b9',
            }),
            '\n',
            (0, h.jsxs)(s.ol, {
              children: [
                '\n',
                (0, h.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, h.jsxs)(s.p, {
                      children: [
                        '\u6839\u636e\u9700\u6c42\u9009\u62e9',
                        (0, h.jsx)(s.strong, { children: '\u9009\u62e9\u4efb\u52a1\u7c7b\u578b' }),
                      ],
                    }),
                    '\n',
                    (0, h.jsx)(s.p, {
                      children:
                        '\u5728\u672c\u793a\u4f8b\u4e2d\u9009\u62e9\u7684\u4efb\u52a1\u7c7b\u578b\u4e3a\u201d\u5355\u4e00\u201c\u3002',
                    }),
                    '\n',
                    (0, h.jsx)(s.admonition, {
                      title: '\u6ce8\u610f',
                      type: 'note',
                      children: (0, h.jsx)(s.p, {
                        children:
                          'Chaos Dashboard \u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u547d\u540d\u4e3a "entry" \u7684\u4e32\u884c\u8282\u70b9\uff0c\u4f5c\u5176\u7528\u4e3a\u8be5\u5de5\u4f5c\u6d41\u7684\u5165\u53e3\u3002',
                      }),
                    }),
                    '\n',
                    (0, h.jsx)(s.p, {
                      children: (0, h.jsx)(s.img, {
                        alt: 'Choose Task Type',
                        src: d(96492).A + '',
                        width: '387',
                        height: '456',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, h.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, h.jsx)(s.p, { children: '\u586b\u5199\u5b9e\u9a8c\u4fe1\u606f' }),
                    '\n',
                    (0, h.jsx)(s.p, {
                      children:
                        '\u914d\u7f6e\u65b9\u6cd5\u4e0e\u521b\u5efa\u666e\u901a\u7684\u6df7\u6c8c\u5b9e\u9a8c\u76f8\u540c\u3002\u6bd4\u5982\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a POD KILL \u7c7b\u578b\u7684 PodChaos \u6545\u969c\uff0c\u5e76\u5c06\u5176\u547d\u540d\u4e3a \u201ckill-nginx\u201d\u3002',
                    }),
                    '\n',
                    (0, h.jsx)(s.p, {
                      children: (0, h.jsx)(s.img, {
                        alt: 'Create podkill in Workflow',
                        src: d(64568).A + '',
                        width: '1239',
                        height: '1592',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, h.jsx)(s.h3, {
              id: '\u7b2c-4-\u6b65\u63d0\u4ea4\u5de5\u4f5c\u6d41',
              children: '\u7b2c 4 \u6b65\uff1a\u63d0\u4ea4\u5de5\u4f5c\u6d41',
            }),
            '\n',
            (0, h.jsxs)(s.p, {
              children: [
                '\u4f60\u53ef\u4ee5\u5148\u5728',
                (0, h.jsx)(s.strong, { children: '\u9884\u89c8' }),
                '\u67e5\u770b\u5de5\u4f5c\u6d41\u5b9a\u4e49\u3002\u786e\u8ba4\u65e0\u8bef\u540e\uff0c\u70b9\u51fb',
                (0, h.jsx)(s.strong, { children: '\u63d0\u4ea4\u5de5\u4f5c\u6d41' }),
                '\u6309\u94ae\u521b\u5efa\u5de5\u4f5c\u6d41\u3002',
              ],
            }),
            '\n',
            (0, h.jsx)(s.p, {
              children: (0, h.jsx)(s.img, {
                alt: 'Submit Workflow',
                src: d(98400).A + '',
                width: '603',
                height: '1037',
              }),
            }),
            '\n',
            (0, h.jsxs)(s.h2, {
              id: '\u4f7f\u7528-yaml-\u6587\u4ef6\u4e0e-kubectl-\u521b\u5efa\u5de5\u4f5c\u6d41',
              children: [
                '\u4f7f\u7528 YAML \u6587\u4ef6\u4e0e ',
                (0, h.jsx)(s.code, { children: 'kubectl' }),
                ' \u521b\u5efa\u5de5\u4f5c\u6d41',
              ],
            }),
            '\n',
            (0, h.jsxs)(s.p, {
              children: [
                '\u5de5\u4f5c\u6d41 \u7c7b\u4f3c\u4e8e\u5404\u79cd\u7c7b\u578b\u7684 Chaos \u5bf9\u8c61\uff0c\u540c\u6837\u4f5c\u4e3a CRD \u5b58\u5728\u4e8e kubernetes \u96c6\u7fa4\u4e2d\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 ',
                (0, h.jsx)(s.code, { children: 'kubectl create -f <workflow.yaml>' }),
                ' \u521b\u5efa Chaos Mesh \u5de5\u4f5c\u6d41\u3002\u4ee5\u4e0b\u4e3a\u521b\u5efa\u7684\u5177\u4f53\u793a\u4f8b\u3002\u4f7f\u7528\u672c\u5730 YAML \u6587\u4ef6\u521b\u5efa\u5de5\u4f5c\u6d41\uff1a',
              ],
            }),
            '\n',
            (0, h.jsx)(s.pre, {
              children: (0, h.jsx)(s.code, {
                className: 'language-shell',
                children: 'kubectl create -f <workflow.yaml>\n',
              }),
            }),
            '\n',
            (0, h.jsx)(s.p, {
              children: '\u4f7f\u7528\u7f51\u7edc\u4e0a\u7684 YAML \u6587\u4ef6\u521b\u5efa\u5de5\u4f5c\u6d41\uff1a',
            }),
            '\n',
            (0, h.jsx)(s.pre, {
              children: (0, h.jsx)(s.code, {
                className: 'language-shell',
                children:
                  'kubectl create -f https://raw.githubusercontent.com/chaos-mesh/chaos-mesh/master/examples/workflow/serial.yaml\n',
              }),
            }),
            '\n',
            (0, h.jsxs)(s.p, {
              children: [
                '\u4e00\u4e2a\u7b80\u5355\u7684\u5de5\u4f5c\u6d41 YAML \u6587\u4ef6\u5b9a\u4e49\u5982\u4e0b\u6240\u793a\uff0c\u8fd9\u4e2a\u5de5\u4f5c\u6d41\u5c06\u4f1a\u540c\u65f6\u6ce8\u5165 ',
                (0, h.jsx)(s.code, { children: 'StressChaos' }),
                '\u3001',
                (0, h.jsx)(s.code, { children: 'NetworkChaos' }),
                ' \u4e0e ',
                (0, h.jsx)(s.code, { children: 'PodChaos' }),
                '\uff1a',
              ],
            }),
            '\n',
            (0, h.jsx)(s.pre, {
              children: (0, h.jsx)(s.code, {
                className: 'language-yaml',
                children:
                  "apiVersion: chaos-mesh.org/v1alpha1\nkind: Workflow\nmetadata:\n  name: try-workflow-parallel\nspec:\n  entry: the-entry\n  templates:\n    - name: the-entry\n      templateType: Parallel\n      deadline: 240s\n      children:\n        - workflow-stress-chaos\n        - workflow-network-chaos\n        - workflow-pod-chaos-schedule\n    - name: workflow-network-chaos\n      templateType: NetworkChaos\n      deadline: 20s\n      networkChaos:\n        direction: to\n        action: delay\n        mode: all\n        selector:\n          labelSelectors:\n            'app': 'hello-kubernetes'\n        delay:\n          latency: '90ms'\n          correlation: '25'\n          jitter: '90ms'\n    - name: workflow-pod-chaos-schedule\n      templateType: Schedule\n      deadline: 40s\n      schedule:\n        schedule: '@every 2s'\n        type: 'PodChaos'\n        podChaos:\n          action: pod-kill\n          mode: one\n          selector:\n            labelSelectors:\n              'app': 'hello-kubernetes'\n    - name: workflow-stress-chaos\n      templateType: StressChaos\n      deadline: 20s\n      stressChaos:\n        mode: one\n        selector:\n          labelSelectors:\n            'app': 'hello-kubernetes'\n        stressors:\n          cpu:\n            workers: 1\n            load: 20\n            options: ['--cpu 1', '--timeout 600']\n",
              }),
            }),
            '\n',
            (0, h.jsxs)(s.p, {
              children: [
                '\u5176\u4e2d ',
                (0, h.jsx)(s.code, { children: 'templates' }),
                ' \u5b9a\u4e49\u4e86\u5b9e\u9a8c\u4e2d\u7684\u5404\u4e2a\u6b65\u9aa4\uff0c',
                (0, h.jsx)(s.code, { children: 'entry' }),
                ' \u5b9a\u4e49\u4e86\u5de5\u4f5c\u6d41\u6267\u884c\u65f6\u7684\u5165\u53e3\u3002',
              ],
            }),
            '\n',
            (0, h.jsxs)(s.p, {
              children: [
                (0, h.jsx)(s.code, { children: 'templates' }),
                ' \u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u90fd\u4ee3\u8868\u4e86\u4e00\u4e2a\u5de5\u4f5c\u6d41\u7684\u6b65\u9aa4\uff0c\u4f8b\u5982:',
              ],
            }),
            '\n',
            (0, h.jsx)(s.pre, {
              children: (0, h.jsx)(s.code, {
                className: 'language-yaml',
                children:
                  'name: the-entry\ntemplateType: Parallel\ndeadline: 240s\nchildren:\n  - workflow-stress-chaos\n  - workflow-network-chaos\n  - workflow-pod-chaos\n',
              }),
            }),
            '\n',
            (0, h.jsxs)(s.p, {
              children: [
                (0, h.jsx)(s.code, { children: 'templateType: Parallel' }),
                ' \u4ee3\u8868\u8282\u70b9\u7684\u7c7b\u578b\u4e3a\u5e76\u884c\uff1b',
                (0, h.jsx)(s.code, { children: 'deadline: 240s' }),
                ' \u4ee3\u8868\u8fd9\u4e2a\u8282\u70b9\u4e0b\u7684\u6240\u6709\u5e76\u884c\u5b9e\u9a8c\u9884\u671f\u5728 240 \u79d2\u5185\u6267\u884c\u5b8c\u6210\uff0c\u5426\u5219\u5c06\u8d85\u65f6\uff1b',
                (0, h.jsx)(s.code, { children: 'children' }),
                ' \u4ee3\u8868\u5c06\u8981\u5e76\u884c\u6267\u884c\u7684\u5176\u4ed6 template \u540d\u79f0\u3002',
              ],
            }),
            '\n',
            (0, h.jsx)(s.p, { children: '\u518d\u4f8b\u5982\uff1a' }),
            '\n',
            (0, h.jsx)(s.pre, {
              children: (0, h.jsx)(s.code, {
                className: 'language-yaml',
                children:
                  "name: workflow-pod-chaos\ntemplateType: PodChaos\ndeadline: 40s\npodChaos:\n  action: pod-kill\n  mode: one\n  selector:\n    labelSelectors:\n      'app': 'hello-kubernetes'\n",
              }),
            }),
            '\n',
            (0, h.jsxs)(s.p, {
              children: [
                (0, h.jsx)(s.code, { children: 'templateType: PodChaos' }),
                ' \u4ee3\u8868\u8282\u70b9\u7684\u7c7b\u578b\u4e3a PodChaos \u5b9e\u9a8c\uff1b',
                (0, h.jsx)(s.code, { children: 'deadline: 40s' }),
                ' \u4ee3\u8868\u5f53\u524d Chaos \u5b9e\u9a8c\u5c06\u6301\u7eed 40 \u79d2\uff1b',
                (0, h.jsx)(s.code, { children: 'podChaos' }),
                ' \u5b57\u6bb5\u662f PodChaos \u5b9e\u9a8c\u7684\u5b9a\u4e49\u3002',
              ],
            }),
            '\n',
            (0, h.jsxs)(s.p, {
              children: [
                '\u901a\u8fc7 YAML \u6587\u4ef6\u4e0e ',
                (0, h.jsx)(s.code, { children: 'kubectl' }),
                ' \u521b\u5efa\u5de5\u4f5c\u6d41\u8f83\u4e3a\u7075\u6d3b\uff0c\u4f60\u53ef\u4ee5\u5bf9\u4e32\u884c\u6d3b\u5e76\u884c\u7f16\u6392\u8fdb\u884c\u5d4c\u5957\uff0c\u58f0\u660e\u590d\u6742\u7684\u7f16\u6392\uff0c\u751a\u81f3\u53ef\u4ee5\u4e0e\u6761\u4ef6\u5206\u652f\u7ec4\u5408\u8fbe\u5230\u5faa\u73af\u7684\u6548\u679c\u3002',
              ],
            }),
            '\n',
            (0, h.jsx)(s.h2, { id: '\u5b57\u6bb5\u8bf4\u660e', children: '\u5b57\u6bb5\u8bf4\u660e' }),
            '\n',
            (0, h.jsx)(s.h3, {
              id: 'workflow-\u5b57\u6bb5\u8bf4\u660e',
              children: 'Workflow \u5b57\u6bb5\u8bf4\u660e',
            }),
            '\n',
            (0, h.jsxs)(s.table, {
              children: [
                (0, h.jsx)(s.thead, {
                  children: (0, h.jsxs)(s.tr, {
                    children: [
                      (0, h.jsx)(s.th, { children: '\u53c2\u6570' }),
                      (0, h.jsx)(s.th, { children: '\u7c7b\u578b' }),
                      (0, h.jsx)(s.th, { children: '\u8bf4\u660e' }),
                      (0, h.jsx)(s.th, { children: '\u9ed8\u8ba4\u503c' }),
                      (0, h.jsx)(s.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                      (0, h.jsx)(s.th, { children: '\u793a\u4f8b' }),
                    ],
                  }),
                }),
                (0, h.jsxs)(s.tbody, {
                  children: [
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'entry' }),
                        (0, h.jsx)(s.td, { children: 'string' }),
                        (0, h.jsx)(s.td, {
                          children:
                            '\u58f0\u660e\u5de5\u4f5c\u6d41\u7684\u5165\u53e3\uff0c\u503c\u4e3a templates \u4e2d\u67d0\u4e00 template \u7684\u540d\u79f0\u3002',
                        }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u662f' }),
                        (0, h.jsx)(s.td, {}),
                      ],
                    }),
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'templates' }),
                        (0, h.jsx)(s.td, { children: '[]Template' }),
                        (0, h.jsxs)(s.td, {
                          children: [
                            '\u58f0\u660e\u5de5\u4f5c\u6d41\u4e2d\u53ef\u6267\u884c\u7684\u5404\u4e2a\u6b65\u9aa4\u7684\u884c\u4e3a\uff0c\u8be6\u89c1 ',
                            (0, h.jsx)(s.a, {
                              href: '#template-%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E',
                              children: 'Template \u5b57\u6bb5\u8bf4\u660e',
                            }),
                          ],
                        }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u662f' }),
                        (0, h.jsx)(s.td, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, h.jsx)(s.h3, {
              id: 'template-\u5b57\u6bb5\u8bf4\u660e',
              children: 'Template \u5b57\u6bb5\u8bf4\u660e',
            }),
            '\n',
            (0, h.jsxs)(s.table, {
              children: [
                (0, h.jsx)(s.thead, {
                  children: (0, h.jsxs)(s.tr, {
                    children: [
                      (0, h.jsx)(s.th, { children: '\u53c2\u6570' }),
                      (0, h.jsx)(s.th, { children: '\u7c7b\u578b' }),
                      (0, h.jsx)(s.th, { children: '\u8bf4\u660e' }),
                      (0, h.jsx)(s.th, { children: '\u9ed8\u8ba4\u503c' }),
                      (0, h.jsx)(s.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                      (0, h.jsx)(s.th, { children: '\u793a\u4f8b' }),
                    ],
                  }),
                }),
                (0, h.jsxs)(s.tbody, {
                  children: [
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'name' }),
                        (0, h.jsx)(s.td, { children: 'string' }),
                        (0, h.jsx)(s.td, {
                          children:
                            'template \u7684\u540d\u79f0\uff0c\u9700\u8981\u7b26\u5408 DNS-1123 \u547d\u540d\u89c4\u8303\u3002',
                        }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u662f' }),
                        (0, h.jsx)(s.td, { children: 'any-name' }),
                      ],
                    }),
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'type' }),
                        (0, h.jsx)(s.td, { children: 'string' }),
                        (0, h.jsx)(s.td, {
                          children:
                            'template \u7684\u7c7b\u578b\u3002\u53ef\u9009\u503c\u6709: Task\u3001Serial\u3001Parallel\u3001Suspend\u3001Schedule\u3001AWSChaos\u3001DNSChaos\u3001GCPChaos\u3001HTTPChaos\u3001IOChaos\u3001JVMChaos\u3001KernelChaos\u3001NetworkChaos\u3001PodChaos\u3001StressChaos\u3001TimeChaos\u3001StatusCheck',
                        }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u662f' }),
                        (0, h.jsx)(s.td, { children: 'PodChaos' }),
                      ],
                    }),
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'deadline' }),
                        (0, h.jsx)(s.td, { children: 'string' }),
                        (0, h.jsx)(s.td, { children: 'template \u6301\u7eed\u7684\u65f6\u95f4\u3002' }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u5426' }),
                        (0, h.jsx)(s.td, { children: "'5m30s'" }),
                      ],
                    }),
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'children' }),
                        (0, h.jsx)(s.td, { children: '[]string' }),
                        (0, h.jsx)(s.td, {
                          children:
                            '\u58f0\u660e\u8be5 template \u4e0b\u7684\u5b50\u4efb\u52a1\uff0c\u5f53 type \u4e3a Serial \u6216 Parallel \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002',
                        }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u5426' }),
                        (0, h.jsx)(s.td, { children: '["any-chaos-1", "another-serial-2", "any-shcedule"]' }),
                      ],
                    }),
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'task' }),
                        (0, h.jsx)(s.td, { children: 'Task' }),
                        (0, h.jsxs)(s.td, {
                          children: [
                            '\u914d\u7f6e\u81ea\u5b9a\u4e49\u4efb\u52a1\uff0c\u5f53 type \u4e3a Task \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ',
                            (0, h.jsx)(s.a, {
                              href: '#task-%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E',
                              children: 'Task \u5b57\u6bb5\u8bf4\u660e',
                            }),
                          ],
                        }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u5426' }),
                        (0, h.jsx)(s.td, {}),
                      ],
                    }),
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'conditionalBranches' }),
                        (0, h.jsx)(s.td, { children: '[]ConditionalBranch' }),
                        (0, h.jsxs)(s.td, {
                          children: [
                            '\u914d\u7f6e\u81ea\u5b9a\u4efb\u52a1\u540e\u7684\u6761\u4ef6\u5206\u652f\uff0c\u5f53 type \u4e3a Task \u65f6\u53ef\u9009\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ',
                            (0, h.jsx)(s.a, {
                              href: '#conditionalbranch-%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E',
                              children: 'ConditionalBranch \u5b57\u6bb5\u8bf4\u660e',
                            }),
                          ],
                        }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u5426' }),
                        (0, h.jsx)(s.td, {}),
                      ],
                    }),
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'awsChaos' }),
                        (0, h.jsx)(s.td, { children: 'object' }),
                        (0, h.jsxs)(s.td, {
                          children: [
                            '\u914d\u7f6e AWSChaos\uff0c\u5f53 type \u4e3a AWSChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ',
                            (0, h.jsx)(s.a, {
                              href: '/zh/docs/simulate-aws-chaos',
                              children: '\u6a21\u62df AWS \u6545\u969c',
                            }),
                          ],
                        }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u5426' }),
                        (0, h.jsx)(s.td, {}),
                      ],
                    }),
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'dnsChaos' }),
                        (0, h.jsx)(s.td, { children: 'object' }),
                        (0, h.jsxs)(s.td, {
                          children: [
                            '\u914d\u7f6e DNSChaos\uff0c\u5f53 type \u4e3a DNSChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ',
                            (0, h.jsx)(s.a, {
                              href: '/zh/docs/simulate-dns-chaos-on-kubernetes',
                              children: '\u6a21\u62df DNS \u6545\u969c',
                            }),
                          ],
                        }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u5426' }),
                        (0, h.jsx)(s.td, {}),
                      ],
                    }),
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'gcpChaos' }),
                        (0, h.jsx)(s.td, { children: 'object' }),
                        (0, h.jsxs)(s.td, {
                          children: [
                            '\u914d\u7f6e GCPChaos\uff0c\u5f53 type \u4e3a GCPChaos\uff0c\u5f53 \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ',
                            (0, h.jsx)(s.a, {
                              href: '/zh/docs/simulate-gcp-chaos',
                              children: '\u6a21\u62df GCP \u6545\u969c',
                            }),
                          ],
                        }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u5426' }),
                        (0, h.jsx)(s.td, {}),
                      ],
                    }),
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'httpChaos' }),
                        (0, h.jsx)(s.td, { children: 'object' }),
                        (0, h.jsxs)(s.td, {
                          children: [
                            '\u914d\u7f6e HTTPChaos\uff0c\u5f53 type \u4e3a HTTPChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ',
                            (0, h.jsx)(s.a, {
                              href: '/zh/docs/simulate-http-chaos-on-kubernetes',
                              children: '\u6a21\u62df HTTP \u6545\u969c',
                            }),
                          ],
                        }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u5426' }),
                        (0, h.jsx)(s.td, {}),
                      ],
                    }),
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'ioChaos' }),
                        (0, h.jsx)(s.td, { children: 'object' }),
                        (0, h.jsxs)(s.td, {
                          children: [
                            '\u914d\u7f6e IOChaos\uff0c\u5f53 type \u4e3a IOChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ',
                            (0, h.jsx)(s.a, {
                              href: '/zh/docs/simulate-io-chaos-on-kubernetes',
                              children: '\u6a21\u62df\u6587\u4ef6 I/O \u6545\u969c',
                            }),
                          ],
                        }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u5426' }),
                        (0, h.jsx)(s.td, {}),
                      ],
                    }),
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'jvmChaos' }),
                        (0, h.jsx)(s.td, { children: 'object' }),
                        (0, h.jsxs)(s.td, {
                          children: [
                            '\u914d\u7f6e JVMChaos\uff0c\u5f53 type \u4e3a JVMChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ',
                            (0, h.jsx)(s.a, {
                              href: '/zh/docs/simulate-jvm-application-chaos',
                              children: '\u6a21\u62df JVM \u5e94\u7528\u6545\u969c',
                            }),
                          ],
                        }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u5426' }),
                        (0, h.jsx)(s.td, {}),
                      ],
                    }),
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'kernelChaos' }),
                        (0, h.jsx)(s.td, { children: 'object' }),
                        (0, h.jsxs)(s.td, {
                          children: [
                            '\u914d\u7f6e KernelChaos\uff0c\u5f53 type \u4e3a KernelChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ',
                            (0, h.jsx)(s.a, {
                              href: '/zh/docs/simulate-kernel-chaos-on-kubernetes',
                              children: '\u6a21\u62df\u5185\u6838\u6545\u969c',
                            }),
                          ],
                        }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u5426' }),
                        (0, h.jsx)(s.td, {}),
                      ],
                    }),
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'networkChaos' }),
                        (0, h.jsx)(s.td, { children: 'object' }),
                        (0, h.jsxs)(s.td, {
                          children: [
                            '\u914d\u7f6e NetworkChaos\uff0c\u5f53 type \u4e3a NetworkChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ',
                            (0, h.jsx)(s.a, {
                              href: '/zh/docs/simulate-network-chaos-on-kubernetes',
                              children: '\u6a21\u62df\u7f51\u7edc\u6545\u969c',
                            }),
                          ],
                        }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u5426' }),
                        (0, h.jsx)(s.td, {}),
                      ],
                    }),
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'podChaos' }),
                        (0, h.jsx)(s.td, { children: 'object' }),
                        (0, h.jsxs)(s.td, {
                          children: [
                            '\u914d\u7f6e PodChaos \uff0c\u5f53 type \u4e3a PodChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ',
                            (0, h.jsx)(s.a, {
                              href: '/zh/docs/simulate-pod-chaos-on-kubernetes',
                              children: '\u6a21\u62df Pod \u6545\u969c',
                            }),
                          ],
                        }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u5426' }),
                        (0, h.jsx)(s.td, {}),
                      ],
                    }),
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'stressChaos' }),
                        (0, h.jsx)(s.td, { children: 'object' }),
                        (0, h.jsxs)(s.td, {
                          children: [
                            '\u914d\u7f6e StressChaos\uff0c\u5f53 type \u4e3a StressChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ',
                            (0, h.jsx)(s.a, {
                              href: '/zh/docs/simulate-heavy-stress-on-kubernetes',
                              children: '\u6a21\u62df\u538b\u529b\u573a\u666f',
                            }),
                          ],
                        }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u5426' }),
                        (0, h.jsx)(s.td, {}),
                      ],
                    }),
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'timeChaos' }),
                        (0, h.jsx)(s.td, { children: 'object' }),
                        (0, h.jsxs)(s.td, {
                          children: [
                            '\u914d\u7f6e TimeChaos\uff0c\u5f53 type \u4e3a TimeChaos \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ',
                            (0, h.jsx)(s.a, {
                              href: '/zh/docs/simulate-time-chaos-on-kubernetes',
                              children: '\u6a21\u62df\u65f6\u95f4\u6545\u969c',
                            }),
                          ],
                        }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u5426' }),
                        (0, h.jsx)(s.td, {}),
                      ],
                    }),
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'schedule' }),
                        (0, h.jsx)(s.td, { children: 'object' }),
                        (0, h.jsxs)(s.td, {
                          children: [
                            '\u914d\u7f6e Schedule \uff0c\u5f53 type \u4e3a Schedule \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ',
                            (0, h.jsx)(s.a, {
                              href: '/zh/docs/define-scheduling-rules',
                              children: '\u5b9a\u4e49\u8c03\u5ea6\u89c4\u5219',
                            }),
                          ],
                        }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u5426' }),
                        (0, h.jsx)(s.td, {}),
                      ],
                    }),
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'statusCheck' }),
                        (0, h.jsx)(s.td, { children: 'object' }),
                        (0, h.jsxs)(s.td, {
                          children: [
                            '\u914d\u7f6e StatusCheck\uff0c\u5f53 type \u4e3a StatusCheck \u65f6\u9700\u8981\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002\u8be6\u89c1 ',
                            (0, h.jsx)(s.a, {
                              href: '/zh/docs/status-check-in-workflow',
                              children: '\u5728\u5de5\u4f5c\u6d41\u4e2d\u8fdb\u884c\u72b6\u6001\u68c0\u67e5',
                            }),
                          ],
                        }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u5426' }),
                        (0, h.jsx)(s.td, {}),
                      ],
                    }),
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'abortWithStatusCheck' }),
                        (0, h.jsx)(s.td, { children: 'bool' }),
                        (0, h.jsx)(s.td, {
                          children:
                            '\u914d\u7f6e\u5f53 StatusCheck \u5931\u8d25\u65f6\u662f\u5426\u7ec8\u6b62\u5de5\u4f5c\u6d41\uff0c\u5f53 type \u4e3a StatusCheck \u65f6\u53ef\u9009\u914d\u7f6e\u8be5\u5b57\u6bb5\u3002',
                        }),
                        (0, h.jsx)(s.td, { children: (0, h.jsx)(s.code, { children: 'false' }) }),
                        (0, h.jsx)(s.td, { children: '\u5426' }),
                        (0, h.jsx)(s.td, { children: (0, h.jsx)(s.code, { children: 'true' }) }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, h.jsx)(s.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, h.jsxs)(s.p, {
                children: [
                  '\u5f53\u5728\u5de5\u4f5c\u6d41\u4e2d\u5efa\u7acb\u6709\u6301\u7eed\u65f6\u95f4\u7684 Chaos \u65f6\uff0c\u9700\u8981\u5c06\u6301\u7eed\u65f6\u95f4\u586b\u5199\u5230\u5916\u5c42\u7684 ',
                  (0, h.jsx)(s.code, { children: 'deadline' }),
                  ' \u5b57\u6bb5\u4e2d\uff0c\u800c\u4e0d\u662f\u4f7f\u7528 Chaos \u4e2d\u7684 ',
                  (0, h.jsx)(s.code, { children: 'duration' }),
                  ' \u5b57\u6bb5\u3002',
                ],
              }),
            }),
            '\n',
            (0, h.jsx)(s.h3, { id: 'task-\u5b57\u6bb5\u8bf4\u660e', children: 'Task \u5b57\u6bb5\u8bf4\u660e' }),
            '\n',
            (0, h.jsxs)(s.table, {
              children: [
                (0, h.jsx)(s.thead, {
                  children: (0, h.jsxs)(s.tr, {
                    children: [
                      (0, h.jsx)(s.th, { children: '\u53c2\u6570' }),
                      (0, h.jsx)(s.th, { children: '\u7c7b\u578b' }),
                      (0, h.jsx)(s.th, { children: '\u8bf4\u660e' }),
                      (0, h.jsx)(s.th, { children: '\u9ed8\u8ba4\u503c' }),
                      (0, h.jsx)(s.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                      (0, h.jsx)(s.th, { children: '\u793a\u4f8b' }),
                    ],
                  }),
                }),
                (0, h.jsxs)(s.tbody, {
                  children: [
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'container' }),
                        (0, h.jsx)(s.td, { children: 'object' }),
                        (0, h.jsxs)(s.td, {
                          children: [
                            '\u5b9a\u4e49\u81ea\u5b9a\u4e49\u4efb\u52a1\u5bb9\u5668\uff0c\u53ef\u53c2\u8003 ',
                            (0, h.jsx)(s.a, {
                              href: '#container-%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E',
                              children: 'Container \u5b57\u6bb5\u8bf4\u660e',
                            }),
                          ],
                        }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u5426' }),
                        (0, h.jsx)(s.td, {}),
                      ],
                    }),
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'volumes' }),
                        (0, h.jsx)(s.td, { children: 'array' }),
                        (0, h.jsxs)(s.td, {
                          children: [
                            '\u82e5\u9700\u8981\u5728\u81ea\u5b9a\u4e49\u4efb\u52a1\u5bb9\u5668\u4e2d\u6302\u8f7d\u5377\uff0c\u5219\u9700\u8981\u5728\u8be5\u5b57\u6bb5\u58f0\u660e\u5377\u3002\u5173\u4e8e\u5b8c\u6574\u5b9a\u4e49\u53ef\u53c2\u8003 ',
                            (0, h.jsx)(s.a, {
                              href: 'https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.23/#volume-v1-core',
                              children: 'corev1.Volume',
                            }),
                          ],
                        }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u5426' }),
                        (0, h.jsx)(s.td, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, h.jsx)(s.h3, {
              id: 'conditionalbranch-\u5b57\u6bb5\u8bf4\u660e',
              children: 'ConditionalBranch \u5b57\u6bb5\u8bf4\u660e',
            }),
            '\n',
            (0, h.jsxs)(s.table, {
              children: [
                (0, h.jsx)(s.thead, {
                  children: (0, h.jsxs)(s.tr, {
                    children: [
                      (0, h.jsx)(s.th, { children: '\u53c2\u6570' }),
                      (0, h.jsx)(s.th, { children: '\u7c7b\u578b' }),
                      (0, h.jsx)(s.th, { children: '\u8bf4\u660e' }),
                      (0, h.jsx)(s.th, { children: '\u9ed8\u8ba4\u503c' }),
                      (0, h.jsx)(s.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                      (0, h.jsx)(s.th, { children: '\u793a\u4f8b' }),
                    ],
                  }),
                }),
                (0, h.jsxs)(s.tbody, {
                  children: [
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'target' }),
                        (0, h.jsx)(s.td, { children: 'string' }),
                        (0, h.jsx)(s.td, {
                          children:
                            '\u5f53\u524d\u6761\u4ef6\u5206\u652f\u60f3\u8981\u6267\u884c\u7684 template \u540d\u79f0',
                        }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u662f' }),
                        (0, h.jsx)(s.td, { children: 'another-chaos' }),
                      ],
                    }),
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'expression' }),
                        (0, h.jsx)(s.td, { children: 'string' }),
                        (0, h.jsx)(s.td, {
                          children:
                            '\u7c7b\u578b\u4e3a\u5e03\u5c14\u7684\u8868\u8fbe\u5f0f\uff0c\u5728\u81ea\u5b9a\u4e49\u4efb\u52a1\u5b8c\u6210\u540e\uff0c\u5f53\u8868\u8fbe\u5f0f\u503c\u4e3a\u771f\u65f6\uff0c\u5f53\u524d\u6761\u4ef6\u5206\u652f\u5c06\u4f1a\u88ab\u6267\u884c\u3002\u672a\u8bbe\u7f6e\u8be5\u503c\u65f6\uff0c\u6761\u4ef6\u5206\u652f\u5c06\u4f1a\u5728\u81ea\u5b9a\u4e49\u4efb\u52a1\u5b8c\u6210\u540e\u76f4\u63a5\u6267\u884c\u3002',
                        }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u5426' }),
                        (0, h.jsx)(s.td, { children: 'exitCode == 0' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, h.jsxs)(s.p, {
              children: [
                '\u76ee\u524d\u5728 ',
                (0, h.jsx)(s.code, { children: 'expression' }),
                ' \u4e2d\u63d0\u4f9b\u4e86\u4e24\u4e2a\u4e0a\u4e0b\u6587\u53d8\u91cf\uff1a',
              ],
            }),
            '\n',
            (0, h.jsxs)(s.ul, {
              children: [
                '\n',
                (0, h.jsxs)(s.li, {
                  children: [
                    (0, h.jsx)(s.code, { children: 'exitCode' }),
                    ' \u8868\u793a\u81ea\u5b9a\u4e49\u4efb\u52a1\u7684\u9000\u51fa\u7801\u3002',
                  ],
                }),
                '\n',
                (0, h.jsxs)(s.li, {
                  children: [
                    (0, h.jsx)(s.code, { children: 'stdout' }),
                    ' \u8868\u793a\u81ea\u5b9a\u4e49\u4efb\u52a1\u7684\u6807\u51c6\u8f93\u51fa\u3002',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, h.jsxs)(s.blockquote, {
              children: [
                '\n',
                (0, h.jsx)(s.p, {
                  children:
                    '\u66f4\u591a\u7684\u4e0a\u4e0b\u6587\u53d8\u91cf\u5c06\u5728\u540e\u7eed\u8865\u5145\u3002',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, h.jsxs)(s.p, {
              children: [
                '\u53ef\u53c2\u8003',
                (0, h.jsx)(s.a, {
                  href: 'https://github.com/antonmedv/expr/blob/master/docs/Language-Definition.md',
                  children: '\u8be5\u6587\u6863',
                }),
                '\u7f16\u5199 ',
                (0, h.jsx)(s.code, { children: 'expression' }),
                ' \u8868\u8fbe\u5f0f\u3002',
              ],
            }),
            '\n',
            (0, h.jsx)(s.h3, {
              id: 'container-\u5b57\u6bb5\u8bf4\u660e',
              children: 'Container \u5b57\u6bb5\u8bf4\u660e',
            }),
            '\n',
            (0, h.jsxs)(s.p, {
              children: [
                '\u8fd9\u91cc\u53ea\u5217\u4e3e\u4e86\u5e38\u7528\u5b57\u6bb5\uff0c\u5173\u4e8e\u5b8c\u6574\u5b9a\u4e49\u53ef\u53c2\u8003 ',
                (0, h.jsx)(s.a, {
                  href: 'https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.23/#container-v1-core',
                  children: 'corev1.Container',
                }),
              ],
            }),
            '\n',
            (0, h.jsxs)(s.table, {
              children: [
                (0, h.jsx)(s.thead, {
                  children: (0, h.jsxs)(s.tr, {
                    children: [
                      (0, h.jsx)(s.th, { children: '\u53c2\u6570' }),
                      (0, h.jsx)(s.th, { children: '\u7c7b\u578b' }),
                      (0, h.jsx)(s.th, { children: '\u8bf4\u660e' }),
                      (0, h.jsx)(s.th, { children: '\u9ed8\u8ba4\u503c' }),
                      (0, h.jsx)(s.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                      (0, h.jsx)(s.th, { children: '\u793a\u4f8b' }),
                    ],
                  }),
                }),
                (0, h.jsxs)(s.tbody, {
                  children: [
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'name' }),
                        (0, h.jsx)(s.td, { children: 'string' }),
                        (0, h.jsx)(s.td, { children: '\u5bb9\u5668\u540d\u79f0' }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u662f' }),
                        (0, h.jsx)(s.td, { children: 'task' }),
                      ],
                    }),
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'image' }),
                        (0, h.jsx)(s.td, { children: 'string' }),
                        (0, h.jsx)(s.td, { children: '\u955c\u50cf\u540d\u79f0' }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u662f' }),
                        (0, h.jsxs)(s.td, { children: ['busybox', ':latest'] }),
                      ],
                    }),
                    (0, h.jsxs)(s.tr, {
                      children: [
                        (0, h.jsx)(s.td, { children: 'command' }),
                        (0, h.jsx)(s.td, { children: '[]string' }),
                        (0, h.jsx)(s.td, { children: '\u5bb9\u5668\u6267\u884c\u7684\u547d\u4ee4' }),
                        (0, h.jsx)(s.td, { children: '\u65e0' }),
                        (0, h.jsx)(s.td, { children: '\u5426' }),
                        (0, h.jsx)(s.td, {
                          children: (0, h.jsx)(s.code, { children: '["wget", "-q", "http://httpbin.org/status/201"]' }),
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
        const { wrapper: s } = { ...(0, t.R)(), ...e.components }
        return s ? (0, h.jsx)(s, { ...e, children: (0, h.jsx)(o, { ...e }) }) : o(e)
      }
    },
    96492: (e, s, d) => {
      d.d(s, { A: () => n })
      const n = d.p + 'assets/images/choose-task-type-b5234da563fdd6d24768a5d4a09fd4b3.png'
    },
    64568: (e, s, d) => {
      d.d(s, { A: () => n })
      const n = d.p + 'assets/images/create-podkill-in-workflow-0e94dafa7e77839b9c72750ae328632b.png'
    },
    89932: (e, s, d) => {
      d.d(s, { A: () => n })
      const n = d.p + 'assets/images/new-workflow-5ed1b1dc5cfc3e9eb000f6b64db768cc.png'
    },
    98400: (e, s, d) => {
      d.d(s, { A: () => n })
      const n = d.p + 'assets/images/submit-workflow-e441f2bc16d077b5479b45e835869ffe.png'
    },
    18478: (e, s, d) => {
      d.d(s, { A: () => n })
      const n = d.p + 'assets/images/workflow-info-13a1d29e9d2676d9cfa769efeac4d672.png'
    },
    28453: (e, s, d) => {
      d.d(s, { R: () => r, x: () => l })
      var n = d(96540)
      const h = {},
        t = n.createContext(h)
      function r(e) {
        const s = n.useContext(t)
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(s) : { ...s, ...e }
          },
          [s, e]
        )
      }
      function l(e) {
        let s
        return (
          (s = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(h)
              : e.components || h
            : r(e.components)),
          n.createElement(t.Provider, { value: s }, e.children)
        )
      }
    },
  },
])
