'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [9982],
  {
    51872: (e, s, d) => {
      d.r(s),
        d.d(s, {
          assets: () => r,
          contentTitle: () => i,
          default: () => j,
          frontMatter: () => h,
          metadata: () => n,
          toc: () => l,
        })
      const n = JSON.parse(
        '{"id":"status-check-in-workflow","title":"\u5728\u5de5\u4f5c\u6d41\u4e2d\u8fdb\u884c\u72b6\u6001\u68c0\u67e5","description":"\u5728\u5de5\u4f5c\u6d41\u4e2d\uff0c\u72b6\u6001\u68c0\u67e5\u53ef\u5bf9\u5916\u90e8\u7cfb\u7edf\uff08\u6bd4\u5982\u4e1a\u52a1\u5e94\u7528\u7cfb\u7edf\u3001\u76d1\u63a7\u7cfb\u7edf\uff09\u6267\u884c\u6307\u5b9a\u7684\u64cd\u4f5c\u6765\u83b7\u5f97\u7cfb\u7edf\u7684\u72b6\u6001\uff0c\u5e76\u5f53\u68c0\u67e5\u5230\u7cfb\u7edf\u4e0d\u5065\u5eb7\u65f6\u53ef\u4ee5\u81ea\u52a8\u5730\u7ec8\u6b62\u5de5\u4f5c\u6d41\uff0c\u5176\u6982\u5ff5\u7c7b\u4f3c\u4e8e Kubernetes \u4e2d\u7684 Container Probes\u3002\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 YAML \u7684\u65b9\u5f0f\u5728\u5de5\u4f5c\u6d41\u4e2d\u8fdb\u884c\u72b6\u6001\u68c0\u67e5\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.2/status-check-in-workflow.md","sourceDirName":".","slug":"/status-check-in-workflow","permalink":"/zh/docs/status-check-in-workflow","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.6.2/status-check-in-workflow.md","tags":[],"version":"2.6.2","frontMatter":{"title":"\u5728\u5de5\u4f5c\u6d41\u4e2d\u8fdb\u884c\u72b6\u6001\u68c0\u67e5"},"sidebar":"docs","previous":{"title":"\u68c0\u67e5\u5de5\u4f5c\u6d41\u72b6\u6001","permalink":"/zh/docs/check-workflow-status"},"next":{"title":"\u6a21\u62df Pod \u6545\u969c","permalink":"/zh/docs/simulate-pod-chaos-on-kubernetes"}}'
      )
      var c = d(74848),
        t = d(28453)
      const h = { title: '\u5728\u5de5\u4f5c\u6d41\u4e2d\u8fdb\u884c\u72b6\u6001\u68c0\u67e5' },
        i = void 0,
        r = {},
        l = [
          { value: '\u72b6\u6001\u68c0\u67e5\u7c7b\u578b', id: '\u72b6\u6001\u68c0\u67e5\u7c7b\u578b', level: 2 },
          {
            value:
              '\u5b9a\u4e49\u4e00\u4e2a <code>HTTP</code> \u7c7b\u578b\u7684 <code>StatusCheck</code> \u8282\u70b9',
            id: '\u5b9a\u4e49\u4e00\u4e2a-http-\u7c7b\u578b\u7684-statuscheck-\u8282\u70b9',
            level: 3,
          },
          { value: '\u68c0\u67e5\u7ed3\u679c', id: '\u68c0\u67e5\u7ed3\u679c', level: 2 },
          {
            value: '\u5f53\u72b6\u6001\u68c0\u67e5\u4e0d\u6210\u529f\u65f6\uff0c\u7ec8\u6b62\u5de5\u4f5c\u6d41',
            id: '\u5f53\u72b6\u6001\u68c0\u67e5\u4e0d\u6210\u529f\u65f6\u7ec8\u6b62\u5de5\u4f5c\u6d41',
            level: 3,
          },
          { value: '\u6267\u884c\u6a21\u5f0f', id: '\u6267\u884c\u6a21\u5f0f', level: 2 },
          {
            value: '\u6301\u7eed\u6027\u7684\u72b6\u6001\u68c0\u67e5',
            id: '\u6301\u7eed\u6027\u7684\u72b6\u6001\u68c0\u67e5',
            level: 3,
          },
          {
            value: '\u4e00\u6b21\u6027\u7684\u72b6\u6001\u68c0\u67e5',
            id: '\u4e00\u6b21\u6027\u7684\u72b6\u6001\u68c0\u67e5',
            level: 3,
          },
          { value: 'Status Check vs HTTP Request Task', id: 'status-check-vs-http-request-task', level: 2 },
          { value: '\u5b57\u6bb5\u8bf4\u660e', id: '\u5b57\u6bb5\u8bf4\u660e', level: 2 },
          { value: 'StatusCheck \u5b57\u6bb5\u8bf4\u660e', id: 'statuscheck-\u5b57\u6bb5\u8bf4\u660e', level: 3 },
          {
            value: 'HTTPStatusCheck \u5b57\u6bb5\u8bf4\u660e',
            id: 'httpstatuscheck-\u5b57\u6bb5\u8bf4\u660e',
            level: 3,
          },
          { value: 'HTTPCriteria \u5b57\u6bb5\u8bf4\u660e', id: 'httpcriteria-\u5b57\u6bb5\u8bf4\u660e', level: 3 },
        ]
      function x(e) {
        const s = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          p: 'p',
          pre: 'pre',
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
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsxs)(s.p, {
              children: [
                '\u5728\u5de5\u4f5c\u6d41\u4e2d\uff0c\u72b6\u6001\u68c0\u67e5\u53ef\u5bf9\u5916\u90e8\u7cfb\u7edf\uff08\u6bd4\u5982\u4e1a\u52a1\u5e94\u7528\u7cfb\u7edf\u3001\u76d1\u63a7\u7cfb\u7edf\uff09\u6267\u884c\u6307\u5b9a\u7684\u64cd\u4f5c\u6765\u83b7\u5f97\u7cfb\u7edf\u7684\u72b6\u6001\uff0c\u5e76\u5f53\u68c0\u67e5\u5230\u7cfb\u7edf\u4e0d\u5065\u5eb7\u65f6\u53ef\u4ee5\u81ea\u52a8\u5730\u7ec8\u6b62\u5de5\u4f5c\u6d41\uff0c\u5176\u6982\u5ff5\u7c7b\u4f3c\u4e8e Kubernetes \u4e2d\u7684 ',
                (0, c.jsx)(s.code, { children: 'Container Probes' }),
                '\u3002\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 YAML \u7684\u65b9\u5f0f\u5728\u5de5\u4f5c\u6d41\u4e2d\u8fdb\u884c\u72b6\u6001\u68c0\u67e5\u3002',
              ],
            }),
            '\n',
            (0, c.jsx)(s.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, c.jsxs)(s.p, {
                children: [
                  '\u5f53\u524d ',
                  (0, c.jsx)(s.code, { children: 'StatusCheck' }),
                  ' \u8282\u70b9\u8fd8\u4e0d\u652f\u6301\u5728 Dashboard \u4e0a\u521b\u5efa\uff0c\u53ea\u80fd\u901a\u8fc7 YAML \u65b9\u5f0f\u8fdb\u884c\u521b\u5efa\u3002',
                ],
              }),
            }),
            '\n',
            (0, c.jsx)(s.h2, {
              id: '\u72b6\u6001\u68c0\u67e5\u7c7b\u578b',
              children: '\u72b6\u6001\u68c0\u67e5\u7c7b\u578b',
            }),
            '\n',
            (0, c.jsxs)(s.p, {
              children: [
                '\u76ee\u524d\uff0c\u53ea\u652f\u6301 ',
                (0, c.jsx)(s.code, { children: 'HTTP' }),
                ' \u4e00\u79cd\u65b9\u6cd5\u6765\u8fdb\u884c\u72b6\u6001\u68c0\u67e5\u3002',
              ],
            }),
            '\n',
            (0, c.jsxs)(s.h3, {
              id: '\u5b9a\u4e49\u4e00\u4e2a-http-\u7c7b\u578b\u7684-statuscheck-\u8282\u70b9',
              children: [
                '\u5b9a\u4e49\u4e00\u4e2a ',
                (0, c.jsx)(s.code, { children: 'HTTP' }),
                ' \u7c7b\u578b\u7684 ',
                (0, c.jsx)(s.code, { children: 'StatusCheck' }),
                ' \u8282\u70b9',
              ],
            }),
            '\n',
            (0, c.jsxs)(s.p, {
              children: [
                (0, c.jsx)(s.code, { children: 'StatusCheck' }),
                ' \u8282\u70b9\u652f\u6301\u5bf9\u6307\u5b9a\u7684 URL \u6267\u884c HTTP ',
                (0, c.jsx)(s.code, { children: 'GET' }),
                ' \u6216 ',
                (0, c.jsx)(s.code, { children: 'POST' }),
                ' \u8bf7\u6c42\uff0c\u53ef\u643a\u5e26\u81ea\u5b9a\u4e49\u7684 HTTP headers \u548c body\uff0c\u5e76\u901a\u8fc7 ',
                (0, c.jsx)(s.code, { children: 'criteria' }),
                ' \u4e2d\u7684\u6761\u4ef6\u6765\u5224\u65ad\u8bf7\u6c42\u662f\u5426\u6210\u529f\u3002',
              ],
            }),
            '\n',
            (0, c.jsx)(s.pre, {
              children: (0, c.jsx)(s.code, {
                className: 'language-yaml',
                children:
                  "- name: workflow-status-check\n  templateType: StatusCheck\n  deadline: 20s\n  statusCheck:\n    mode: Continuous\n    type: HTTP\n    intervalSeconds: 1\n    timeoutSeconds: 1\n    http:\n      url: http://123.123.123.123\n      method: GET\n      criteria:\n        statusCode: '200'\n",
              }),
            }),
            '\n',
            (0, c.jsxs)(s.p, {
              children: [
                '\u5728\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230\u5b9a\u4e49\u4e86\u4e00\u4e2a ',
                (0, c.jsx)(s.code, { children: 'HTTP' }),
                ' \u7c7b\u578b\u7684 ',
                (0, c.jsx)(s.code, { children: 'StatusCheck' }),
                ' \u8282\u70b9\u3002',
                (0, c.jsx)(s.code, { children: 'deadline' }),
                ' \u5b57\u6bb5\u6307\u5b9a\u4e86\u8be5\u8282\u70b9\u6700\u591a\u6267\u884c 20 \u79d2\u3002',
                (0, c.jsx)(s.code, { children: 'mode' }),
                ' \u5b57\u6bb5\u6307\u5b9a\u4e86\u8be5 ',
                (0, c.jsx)(s.code, { children: 'StatusCheck' }),
                ' \u8282\u70b9\u4f1a\u6301\u7eed\u6027\u7684\u6267\u884c\u72b6\u6001\u68c0\u67e5\u3002',
                (0, c.jsx)(s.code, { children: 'intervalSeconds' }),
                ' \u5b57\u6bb5\u6307\u5b9a\u4e86\u91cd\u590d\u95f4\u9694\u4e3a 1 \u79d2\u3002',
                (0, c.jsx)(s.code, { children: 'timeoutSeconds' }),
                ' \u5b57\u6bb5\u6307\u5b9a\u4e86\u6bcf\u6b21\u6267\u884c\u7684\u8d85\u65f6\u65f6\u95f4\u3002',
              ],
            }),
            '\n',
            (0, c.jsxs)(s.p, {
              children: [
                '\u5f53\u5de5\u4f5c\u6d41\u8fd0\u884c\u5230\u8fd9\u4e2a\u8282\u70b9\u65f6\uff0c\u6bcf\u9694 1 \u79d2\u4f1a\u6267\u884c\u4e00\u6b21\u6307\u5b9a\u7684\u72b6\u6001\u68c0\u67e5\u884c\u4e3a\uff1a\u4f7f\u7528 ',
                (0, c.jsx)(s.code, { children: 'GET' }),
                ' \u65b9\u6cd5\u5411 ',
                (0, c.jsx)(s.code, { children: 'http://123.123.123.123' }),
                ' \u8fd9\u4e2a URL \u8fdb\u884c HTTP \u8bf7\u6c42\uff0c\u5982\u679c\u8be5\u8bf7\u6c42\u5728 1 \u79d2\u5185\u54cd\u5e94\uff0c\u4e14\u72b6\u6001\u7801\u4e3a ',
                (0, c.jsx)(s.code, { children: '200' }),
                '\uff0c\u5219\u6b64\u6b21\u6267\u884c\u6210\u529f\uff0c\u53cd\u4e4b\u5931\u8d25\u3002',
              ],
            }),
            '\n',
            (0, c.jsx)(s.h2, { id: '\u68c0\u67e5\u7ed3\u679c', children: '\u68c0\u67e5\u7ed3\u679c' }),
            '\n',
            (0, c.jsx)(s.p, {
              children:
                '\u6bcf\u6b21\u6267\u884c\u72b6\u6001\u68c0\u67e5\u90fd\u5c06\u83b7\u5f97\u4e00\u4e2a\u201c\u6267\u884c\u7ed3\u679c\u201d\uff0cSuccess\uff08\u6210\u529f\uff09\u6216 Failure\uff08\u5931\u8d25\uff09\u3002\u56e0\u4e3a\u5355\u6b21\u201c\u6267\u884c\u7ed3\u679c\u201d\u53ef\u80fd\u4f1a\u56e0\u4e3a\u67d0\u4e9b\u6761\u4ef6\u7684\u6ce2\u52a8\uff0c\u5e76\u4e0d\u80fd\u53cd\u6620\u7cfb\u7edf\u7684\u771f\u5b9e\u60c5\u51b5\uff0c\u6240\u4ee5\u6700\u7ec8\u7684\u201c\u72b6\u6001\u68c0\u67e5\u7ed3\u679c\u201d\u5e76\u4e0d\u6839\u636e\u5355\u6b21\u7684\u201c\u6267\u884c\u7ed3\u679c\u201d\u6765\u51b3\u5b9a\u3002',
            }),
            '\n',
            (0, c.jsxs)(s.p, {
              children: [
                (0, c.jsx)(s.code, { children: 'StatusCheck' }),
                ' \u8282\u70b9\u4e2d\u6709 ',
                (0, c.jsx)(s.code, { children: 'failureThreshold' }),
                '\uff08\u5931\u8d25\u9608\u503c\uff09 \u548c ',
                (0, c.jsx)(s.code, { children: 'successThreshold' }),
                '\uff08\u6210\u529f\u9608\u503c\uff09 \u4e24\u4e2a\u5b57\u6bb5\uff1a',
              ],
            }),
            '\n',
            (0, c.jsxs)(s.ul, {
              children: [
                '\n',
                (0, c.jsxs)(s.li, {
                  children: [
                    '\u5f53\u51fa\u73b0\u8fde\u7eed\u7684\u5931\u8d25\u201c\u6267\u884c\u7ed3\u679c\u201d\u6b21\u6570\u8d85\u8fc7\u5931\u8d25\u9608\u503c\u65f6\uff0c\u5219\u8ba4\u4e3a\u201c\u72b6\u6001\u68c0\u67e5\u7ed3\u679c\u201d\u4e3a\u5931\u8d25\u3002\u5f53\u201c\u72b6\u6001\u68c0\u67e5\u7ed3\u679c\u201d\u4e3a\u5931\u8d25\u65f6\uff0c\u4f1a\u76f4\u63a5\u7ed3\u675f\u5f53\u524d ',
                    (0, c.jsx)(s.code, { children: 'StatusCheck' }),
                    ' \u8282\u70b9\u7684\u6267\u884c\u3002',
                  ],
                }),
                '\n',
                (0, c.jsx)(s.li, {
                  children:
                    '\u5f53\u51fa\u73b0\u8fde\u7eed\u7684\u6210\u529f\u201c\u6267\u884c\u7ed3\u679c\u201d\u6b21\u6570\u8d85\u8fc7\u6210\u529f\u9608\u503c\u65f6\uff0c\u5219\u8ba4\u4e3a\u201c\u72b6\u6001\u68c0\u67e5\u7ed3\u679c\u201d\u4e3a\u6210\u529f\u3002',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, c.jsx)(s.pre, {
              children: (0, c.jsx)(s.code, {
                className: 'language-yaml',
                children:
                  "- name: workflow-status-check\n  templateType: StatusCheck\n  deadline: 20s\n  statusCheck:\n    mode: Continuous\n    type: HTTP\n    successThreshold: 1\n    failureThreshold: 3\n    http:\n      url: http://123.123.123.123\n      method: GET\n      criteria:\n        statusCode: '200'\n",
              }),
            }),
            '\n',
            (0, c.jsxs)(s.p, {
              children: [
                '\u5728\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c',
                (0, c.jsx)(s.code, { children: 'StatusCheck' }),
                ' \u8282\u70b9\u4f1a\u6301\u7eed\u6027\u5730\u6267\u884c\u72b6\u6001\u68c0\u67e5\uff1a',
              ],
            }),
            '\n',
            (0, c.jsxs)(s.ul, {
              children: [
                '\n',
                (0, c.jsx)(s.li, {
                  children:
                    '\u5f53\u51fa\u73b0\u8fde\u7eed 1 \u6b21\u53ca\u4ee5\u4e0a\u201c\u6267\u884c\u7ed3\u679c\u201d\u4e3a\u201c\u6210\u529f\u201d\u65f6\uff0c\u8ba4\u4e3a\u201c\u72b6\u6001\u68c0\u67e5\u7ed3\u679c\u201d\u4e3a\u6210\u529f',
                }),
                '\n',
                (0, c.jsx)(s.li, {
                  children:
                    '\u5f53\u51fa\u73b0\u8fde\u7eed 3 \u6b21\u53ca\u4ee5\u4e0a\u201c\u6267\u884c\u7ed3\u679c\u201d\u4e3a\u201c\u5931\u8d25\u201d\u65f6\uff0c\u8ba4\u4e3a\u201c\u72b6\u6001\u68c0\u67e5\u7ed3\u679c\u201d\u4e3a\u5931\u8d25',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, c.jsx)(s.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, c.jsx)(s.p, {
                children:
                  '\u4e0b\u6587\u4e2d\uff0c\u5f53\u63d0\u5230\u201c\u72b6\u6001\u68c0\u67e5\u5931\u8d25\u201d\u65f6\uff0c\u90fd\u6307\u7684\u662f\u201c\u72b6\u6001\u68c0\u67e5\u7ed3\u679c\u201d\u4e3a\u5931\u8d25\uff0c\u800c\u4e0d\u662f\u5355\u6b21\u7684\u201c\u6267\u884c\u7ed3\u679c\u201d\u4e3a\u5931\u8d25\u3002',
              }),
            }),
            '\n',
            (0, c.jsx)(s.h3, {
              id: '\u5f53\u72b6\u6001\u68c0\u67e5\u4e0d\u6210\u529f\u65f6\u7ec8\u6b62\u5de5\u4f5c\u6d41',
              children: '\u5f53\u72b6\u6001\u68c0\u67e5\u4e0d\u6210\u529f\u65f6\uff0c\u7ec8\u6b62\u5de5\u4f5c\u6d41',
            }),
            '\n',
            (0, c.jsx)(s.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, c.jsxs)(s.p, {
                children: [
                  '\u76ee\u524d\uff0c',
                  (0, c.jsx)(s.code, { children: 'StatusCheck' }),
                  ' \u8282\u70b9\u53ea\u652f\u6301\u5f53\u72b6\u6001\u68c0\u67e5\u5931\u8d25\u65f6\uff0c\u81ea\u52a8\u7ec8\u6b62\u5de5\u4f5c\u6d41\u3002\u4e0d\u652f\u6301\u6682\u505c\u5de5\u4f5c\u6d41\u548c\u6062\u590d\u5de5\u4f5c\u6d41\u7684\u529f\u80fd\u3002',
                ],
              }),
            }),
            '\n',
            (0, c.jsxs)(s.p, {
              children: [
                '\u5f53\u6267\u884c\u6df7\u6c8c\u5b9e\u9a8c\u65f6\uff0c\u5e94\u7528\u7cfb\u7edf\u53ef\u80fd\u4f1a\u53d8\u5f97\u201c\u4e0d\u5065\u5eb7\u201d\uff0c\u5982\u679c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u60f3\u901a\u8fc7\u5feb\u901f\u7ed3\u675f\u6df7\u6c8c\u5b9e\u9a8c\u6765\u6062\u590d\u5e94\u7528\u7cfb\u7edf\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u529f\u80fd\u3002\u5728 ',
                (0, c.jsx)(s.code, { children: 'StatusCheck' }),
                ' \u8282\u70b9\u4e0a\u5c06 ',
                (0, c.jsx)(s.code, { children: 'abortWithStatusCheck' }),
                ' \u5b57\u6bb5\u8bbe\u7f6e\u4e3a ',
                (0, c.jsx)(s.code, { children: 'true' }),
                '\uff0c\u90a3\u4e48\u5f53\u72b6\u6001\u68c0\u67e5\u5931\u8d25\u65f6\uff0c\u5c31\u4f1a\u81ea\u52a8\u7684\u7ec8\u6b62\u5de5\u4f5c\u6d41\u3002',
              ],
            }),
            '\n',
            (0, c.jsx)(s.pre, {
              children: (0, c.jsx)(s.code, {
                className: 'language-yaml',
                children:
                  "- name: workflow-status-check\n  templateType: StatusCheck\n  deadline: 20s\n  abortWithStatusCheck: true\n  statusCheck:\n    mode: Continuous\n    type: HTTP\n    http:\n      url: http://123.123.123.123\n      method: GET\n      criteria:\n        statusCode: '200'\n",
              }),
            }),
            '\n',
            (0, c.jsx)(s.p, {
              children:
                '\u5f53\u7b26\u5408\u4ee5\u4e0b\u4efb\u610f\u6761\u4ef6\u65f6\uff0c\u5c31\u8ba4\u4e3a\u662f\u72b6\u6001\u68c0\u67e5\u4e0d\u6210\u529f\uff1a',
            }),
            '\n',
            (0, c.jsxs)(s.ul, {
              children: [
                '\n',
                (0, c.jsx)(s.li, { children: '\u72b6\u6001\u68c0\u67e5\u5931\u8d25' }),
                '\n',
                (0, c.jsxs)(s.li, {
                  children: [
                    '\u5f53\u8fbe\u5230 ',
                    (0, c.jsx)(s.code, { children: 'StatusCheck' }),
                    '\u8282\u70b9\u8d85\u65f6\u65f6\u95f4\u65f6\uff0c\u72b6\u6001\u68c0\u67e5\u7ed3\u679c\u4e0d\u662f\u201c\u6210\u529f\u201d\u3002\u6bd4\u5982 ',
                    (0, c.jsx)(s.code, { children: 'successThreshold' }),
                    ' \u4e3a 1\uff0c',
                    (0, c.jsx)(s.code, { children: 'failureThreshold' }),
                    ' \u4e3a 3\uff0c\u800c\u5f53\u8fbe\u5230\u8d85\u65f6\u65f6\u95f4\u65f6\uff0c\u5f53\u524d\u8fde\u7eed\u51fa\u73b0 2 \u6b21\u5931\u8d25\uff0c0 \u6b21\u6210\u529f\uff0c\u867d\u7136\u4e0d\u7b26\u5408\u72b6\u6001\u68c0\u67e5\u5931\u8d25\u7684\u6761\u4ef6\uff0c\u4f46\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u4e5f\u88ab\u8ba4\u4e3a\u72b6\u6001\u68c0\u67e5\u4e0d\u6210\u529f\u3002',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, c.jsx)(s.h2, { id: '\u6267\u884c\u6a21\u5f0f', children: '\u6267\u884c\u6a21\u5f0f' }),
            '\n',
            (0, c.jsx)(s.h3, {
              id: '\u6301\u7eed\u6027\u7684\u72b6\u6001\u68c0\u67e5',
              children: '\u6301\u7eed\u6027\u7684\u72b6\u6001\u68c0\u67e5',
            }),
            '\n',
            (0, c.jsxs)(s.p, {
              children: [
                '\u5f53 ',
                (0, c.jsx)(s.code, { children: 'mode' }),
                ' \u5b57\u6bb5\u4e3a ',
                (0, c.jsx)(s.code, { children: 'Continuous' }),
                ' \u65f6\uff0c\u4ee3\u8868\u8fd9\u4e2a ',
                (0, c.jsx)(s.code, { children: 'StatusCheck' }),
                ' \u8282\u70b9\u4f1a\u6301\u7eed\u6027\u5730\u6267\u884c\u72b6\u6001\u68c0\u67e5\uff0c\u76f4\u5230\u8282\u70b9\u8d85\u65f6\u9000\u51fa\u6216\u8005\u72b6\u6001\u68c0\u67e5\u5931\u8d25\u3002',
              ],
            }),
            '\n',
            (0, c.jsx)(s.pre, {
              children: (0, c.jsx)(s.code, {
                className: 'language-yaml',
                children:
                  "- name: workflow-status-check\n  templateType: StatusCheck\n  deadline: 20s\n  statusCheck:\n    mode: Continuous\n    type: HTTP\n    intervalSeconds: 1\n    successThreshold: 1\n    failureThreshold: 3\n    http:\n      url: http://123.123.123.123\n      method: GET\n      criteria:\n        statusCode: '200'\n",
              }),
            }),
            '\n',
            (0, c.jsxs)(s.p, {
              children: [
                '\u5728\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c',
                (0, c.jsx)(s.code, { children: 'StatusCheck' }),
                ' \u8282\u70b9\u6bcf\u9694 1 \u79d2\u4f1a\u6267\u884c\u4e00\u6b21\u72b6\u6001\u68c0\u67e5\uff0c\u5f53\u7b26\u5408\u4ee5\u4e0b\u4efb\u610f\u6761\u4ef6\u65f6\u9000\u51fa\uff1a',
              ],
            }),
            '\n',
            (0, c.jsxs)(s.ul, {
              children: [
                '\n',
                (0, c.jsx)(s.li, {
                  children:
                    '\u72b6\u6001\u68c0\u67e5\u5931\u8d25\uff0c\u5373\u51fa\u73b0\u8fde\u7eed 3 \u6b21\u53ca\u4ee5\u4e0a\u5931\u8d25\u7684\u201c\u6267\u884c\u7ed3\u679c\u201d',
                }),
                '\n',
                (0, c.jsx)(s.li, { children: '20 \u79d2\u540e\u89e6\u53d1\u8282\u70b9\u8d85\u65f6' }),
                '\n',
              ],
            }),
            '\n',
            (0, c.jsx)(s.h3, {
              id: '\u4e00\u6b21\u6027\u7684\u72b6\u6001\u68c0\u67e5',
              children: '\u4e00\u6b21\u6027\u7684\u72b6\u6001\u68c0\u67e5',
            }),
            '\n',
            (0, c.jsxs)(s.p, {
              children: [
                '\u5f53 ',
                (0, c.jsx)(s.code, { children: 'mode' }),
                ' \u5b57\u6bb5\u4e3a ',
                (0, c.jsx)(s.code, { children: 'Synchronous' }),
                ' \u65f6\uff0c\u4ee3\u8868\u8fd9\u4e2a ',
                (0, c.jsx)(s.code, { children: 'StatusCheck' }),
                ' \u8282\u70b9\u4f1a\u5728\u660e\u786e\u72b6\u6001\u68c0\u67e5\u7ed3\u679c\u65f6\u7acb\u5373\u9000\u51fa\uff0c\u6216\u5f53\u8282\u70b9\u8d85\u65f6\u65f6\u9000\u51fa\u3002',
              ],
            }),
            '\n',
            (0, c.jsx)(s.pre, {
              children: (0, c.jsx)(s.code, {
                className: 'language-yaml',
                children:
                  "- name: workflow-status-check\n  templateType: StatusCheck\n  deadline: 20s\n  statusCheck:\n    mode: Synchronous\n    type: HTTP\n    intervalSeconds: 1\n    successThreshold: 1\n    failureThreshold: 3\n    http:\n      url: http://123.123.123.123\n      method: GET\n      criteria:\n        statusCode: '200'\n",
              }),
            }),
            '\n',
            (0, c.jsxs)(s.p, {
              children: [
                '\u5728\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c',
                (0, c.jsx)(s.code, { children: 'StatusCheck' }),
                ' \u8282\u70b9\u6bcf\u9694 1 \u79d2\u4f1a\u6267\u884c\u4e00\u6b21\u72b6\u6001\u68c0\u67e5\uff0c\u5f53\u7b26\u5408\u4ee5\u4e0b\u4efb\u610f\u6761\u4ef6\u65f6\u9000\u51fa\uff1a',
              ],
            }),
            '\n',
            (0, c.jsxs)(s.ul, {
              children: [
                '\n',
                (0, c.jsx)(s.li, {
                  children:
                    '\u72b6\u6001\u68c0\u67e5\u6210\u529f\uff0c\u5373\u51fa\u73b0\u8fde\u7eed 1 \u6b21\u53ca\u4ee5\u4e0a\u6210\u529f\u7684\u201c\u6267\u884c\u7ed3\u679c\u201d',
                }),
                '\n',
                (0, c.jsx)(s.li, {
                  children:
                    '\u72b6\u6001\u68c0\u67e5\u5931\u8d25\uff0c\u5373\u51fa\u73b0\u8fde\u7eed 3 \u6b21\u53ca\u4ee5\u4e0a\u5931\u8d25\u7684\u201c\u6267\u884c\u7ed3\u679c\u201d',
                }),
                '\n',
                (0, c.jsx)(s.li, { children: '20 \u79d2\u540e\u89e6\u53d1\u8282\u70b9\u8d85\u65f6' }),
                '\n',
              ],
            }),
            '\n',
            (0, c.jsx)(s.h2, {
              id: 'status-check-vs-http-request-task',
              children: 'Status Check vs HTTP Request Task',
            }),
            '\n',
            (0, c.jsx)(s.p, { children: '\u76f8\u540c\u70b9\uff1a' }),
            '\n',
            (0, c.jsxs)(s.ul, {
              children: [
                '\n',
                (0, c.jsxs)(s.li, {
                  children: [
                    (0, c.jsx)(s.code, { children: 'StatusCheck' }),
                    ' \u8282\u70b9\u548c ',
                    (0, c.jsx)(s.code, { children: 'HTTP Request Task' }),
                    ' \u8282\u70b9\uff08\u7528\u6765\u6267\u884c HTTP \u8bf7\u6c42\u7684 ',
                    (0, c.jsx)(s.code, { children: 'Task' }),
                    ' \u8282\u70b9\uff09\u90fd\u5c5e\u4e8e\u5de5\u4f5c\u6d41\u7684\u4e00\u79cd\u8282\u70b9\u7c7b\u578b',
                  ],
                }),
                '\n',
                (0, c.jsxs)(s.li, {
                  children: [
                    (0, c.jsx)(s.code, { children: 'StatusCheck' }),
                    ' \u8282\u70b9\u548c ',
                    (0, c.jsx)(s.code, { children: 'HTTP Request Task' }),
                    ' \u8282\u70b9\u90fd\u53ef\u4ee5\u901a\u8fc7 HTTP \u8bf7\u6c42\u6765\u83b7\u5f97\u5916\u90e8\u7cfb\u7edf\u7684\u4fe1\u606f',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, c.jsx)(s.p, { children: '\u4e0d\u540c\u70b9\uff1a' }),
            '\n',
            (0, c.jsxs)(s.ul, {
              children: [
                '\n',
                (0, c.jsxs)(s.li, {
                  children: [
                    (0, c.jsx)(s.code, { children: 'HTTP Request Task' }),
                    ' \u8282\u70b9\u53ea\u80fd\u53d1\u9001\u4e00\u6b21\u8bf7\u6c42\uff0c\u800c\u4e0d\u80fd\u6301\u7eed\u6027\u7684\u53d1\u9001\u8bf7\u6c42',
                  ],
                }),
                '\n',
                (0, c.jsxs)(s.li, {
                  children: [
                    (0, c.jsx)(s.code, { children: 'HTTP Request Task' }),
                    ' \u8282\u70b9\u5728\u8bf7\u6c42\u5931\u8d25\u65f6\uff0c\u65e0\u6cd5\u5bf9\u5de5\u4f5c\u6d41\u7684\u6267\u884c\u72b6\u6001\u4ea7\u751f\u5f71\u54cd\uff08\u6bd4\u5982\u7ec8\u6b62\u5de5\u4f5c\u6d41\uff09',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, c.jsx)(s.h2, { id: '\u5b57\u6bb5\u8bf4\u660e', children: '\u5b57\u6bb5\u8bf4\u660e' }),
            '\n',
            (0, c.jsxs)(s.p, {
              children: [
                'Workflow \u548c Template \u5b57\u6bb5\u8bf4\u660e\u53c2\u8003',
                (0, c.jsx)(s.a, {
                  href: '/zh/docs/create-chaos-mesh-workflow#%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E',
                  children: '\u521b\u5efa Chaos Mesh \u5de5\u4f5c\u6d41',
                }),
                '\u3002',
              ],
            }),
            '\n',
            (0, c.jsx)(s.h3, {
              id: 'statuscheck-\u5b57\u6bb5\u8bf4\u660e',
              children: 'StatusCheck \u5b57\u6bb5\u8bf4\u660e',
            }),
            '\n',
            (0, c.jsxs)(s.table, {
              children: [
                (0, c.jsx)(s.thead, {
                  children: (0, c.jsxs)(s.tr, {
                    children: [
                      (0, c.jsx)(s.th, { children: '\u53c2\u6570' }),
                      (0, c.jsx)(s.th, { children: '\u7c7b\u578b' }),
                      (0, c.jsx)(s.th, { children: '\u8bf4\u660e' }),
                      (0, c.jsx)(s.th, { children: '\u9ed8\u8ba4\u503c' }),
                      (0, c.jsx)(s.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                      (0, c.jsx)(s.th, { children: '\u793a\u4f8b' }),
                    ],
                  }),
                }),
                (0, c.jsxs)(s.tbody, {
                  children: [
                    (0, c.jsxs)(s.tr, {
                      children: [
                        (0, c.jsx)(s.td, { children: 'mode' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: 'string' }) }),
                        (0, c.jsxs)(s.td, {
                          children: [
                            '\u72b6\u6001\u68c0\u67e5\u7684\u6a21\u5f0f\uff0c\u53ef\u9009\u503c\u6709\uff1a',
                            (0, c.jsx)(s.code, { children: 'Synchronous' }),
                            '/',
                            (0, c.jsx)(s.code, { children: 'Continuous' }),
                            '\u3002',
                          ],
                        }),
                        (0, c.jsx)(s.td, { children: '\u65e0' }),
                        (0, c.jsx)(s.td, { children: '\u662f' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: 'Synchronous' }) }),
                      ],
                    }),
                    (0, c.jsxs)(s.tr, {
                      children: [
                        (0, c.jsx)(s.td, { children: 'type' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: 'string' }) }),
                        (0, c.jsxs)(s.td, {
                          children: [
                            '\u72b6\u6001\u68c0\u67e5\u7684\u7c7b\u578b\uff0c\u53ef\u9009\u503c\u6709\uff1a',
                            (0, c.jsx)(s.code, { children: 'HTTP' }),
                            '\u3002',
                          ],
                        }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: 'HTTP' }) }),
                        (0, c.jsx)(s.td, { children: '\u662f' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: 'HTTP' }) }),
                      ],
                    }),
                    (0, c.jsxs)(s.tr, {
                      children: [
                        (0, c.jsx)(s.td, { children: 'duration' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: 'string' }) }),
                        (0, c.jsxs)(s.td, {
                          children: [
                            '\u5f53\u5931\u8d25\u7684\u6267\u884c\u6b21\u6570\u5c0f\u4e8e ',
                            (0, c.jsx)(s.code, { children: 'failureThreshold' }),
                            ' \u65f6\u72b6\u6001\u68c0\u67e5\u7684\u6301\u7eed\u65f6\u95f4\u3002\u5bf9\u4e8e ',
                            (0, c.jsx)(s.code, { children: 'Synchronous' }),
                            ' \u548c ',
                            (0, c.jsx)(s.code, { children: 'Continuous' }),
                            ' \u6a21\u5f0f\u7684\u72b6\u6001\u68c0\u67e5\u90fd\u9002\u7528\u3002',
                          ],
                        }),
                        (0, c.jsx)(s.td, { children: '\u65e0' }),
                        (0, c.jsx)(s.td, { children: '\u5426' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: '100s' }) }),
                      ],
                    }),
                    (0, c.jsxs)(s.tr, {
                      children: [
                        (0, c.jsx)(s.td, { children: 'timeoutSeconds' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: 'int' }) }),
                        (0, c.jsx)(s.td, {
                          children:
                            '\u72b6\u6001\u68c0\u67e5\u5355\u6b21\u6267\u884c\u7684\u8d85\u65f6\u79d2\u6570\u3002',
                        }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: '1' }) }),
                        (0, c.jsx)(s.td, { children: '\u5426' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: '1' }) }),
                      ],
                    }),
                    (0, c.jsxs)(s.tr, {
                      children: [
                        (0, c.jsx)(s.td, { children: 'intervalSeconds' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: 'int' }) }),
                        (0, c.jsx)(s.td, {
                          children: '\u72b6\u6001\u68c0\u67e5\u7684\u95f4\u9694\u65f6\u95f4\uff08\u79d2\uff09\u3002',
                        }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: '1' }) }),
                        (0, c.jsx)(s.td, { children: '\u5426' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: '1' }) }),
                      ],
                    }),
                    (0, c.jsxs)(s.tr, {
                      children: [
                        (0, c.jsx)(s.td, { children: 'failureThreshold' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: 'int' }) }),
                        (0, c.jsx)(s.td, {
                          children:
                            '\u51b3\u5b9a\u72b6\u6001\u68c0\u67e5\u5931\u8d25\u7684\u6700\u5c0f\u8fde\u7eed\u5931\u8d25\u6b21\u6570\u3002',
                        }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: '3' }) }),
                        (0, c.jsx)(s.td, { children: '\u5426' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: '3' }) }),
                      ],
                    }),
                    (0, c.jsxs)(s.tr, {
                      children: [
                        (0, c.jsx)(s.td, { children: 'successThreshold' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: 'int' }) }),
                        (0, c.jsx)(s.td, {
                          children:
                            '\u51b3\u5b9a\u72b6\u6001\u68c0\u67e5\u6210\u529f\u7684\u6700\u5c0f\u8fde\u7eed\u6210\u529f\u6b21\u6570\u3002',
                        }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: '1' }) }),
                        (0, c.jsx)(s.td, { children: '\u5426' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: '1' }) }),
                      ],
                    }),
                    (0, c.jsxs)(s.tr, {
                      children: [
                        (0, c.jsx)(s.td, { children: 'recordsHistoryLimit' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: 'int' }) }),
                        (0, c.jsx)(s.td, {
                          children: '\u4fdd\u5b58\u5386\u53f2\u6267\u884c\u8bb0\u5f55\u7684\u6761\u6570\u3002',
                        }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: '100' }) }),
                        (0, c.jsx)(s.td, { children: '\u5426' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: '100' }) }),
                      ],
                    }),
                    (0, c.jsxs)(s.tr, {
                      children: [
                        (0, c.jsx)(s.td, { children: 'http' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: 'HTTPStatusCheck' }) }),
                        (0, c.jsx)(s.td, {
                          children: '\u914d\u7f6e\u6267\u884c HTTP \u8bf7\u6c42\u7684\u5177\u4f53\u7ec6\u8282\u3002',
                        }),
                        (0, c.jsx)(s.td, { children: '\u65e0' }),
                        (0, c.jsx)(s.td, { children: '\u5426' }),
                        (0, c.jsx)(s.td, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, c.jsx)(s.h3, {
              id: 'httpstatuscheck-\u5b57\u6bb5\u8bf4\u660e',
              children: 'HTTPStatusCheck \u5b57\u6bb5\u8bf4\u660e',
            }),
            '\n',
            (0, c.jsxs)(s.table, {
              children: [
                (0, c.jsx)(s.thead, {
                  children: (0, c.jsxs)(s.tr, {
                    children: [
                      (0, c.jsx)(s.th, { children: '\u53c2\u6570' }),
                      (0, c.jsx)(s.th, { children: '\u7c7b\u578b' }),
                      (0, c.jsx)(s.th, { children: '\u8bf4\u660e' }),
                      (0, c.jsx)(s.th, { children: '\u9ed8\u8ba4\u503c' }),
                      (0, c.jsx)(s.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                      (0, c.jsx)(s.th, { children: '\u793a\u4f8b' }),
                    ],
                  }),
                }),
                (0, c.jsxs)(s.tbody, {
                  children: [
                    (0, c.jsxs)(s.tr, {
                      children: [
                        (0, c.jsx)(s.td, { children: 'url' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: 'string' }) }),
                        (0, c.jsx)(s.td, { children: 'HTTP \u8bf7\u6c42\u7684 URL\u3002' }),
                        (0, c.jsx)(s.td, { children: '\u65e0' }),
                        (0, c.jsx)(s.td, { children: '\u662f' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: 'http://123.123.123.123' }) }),
                      ],
                    }),
                    (0, c.jsxs)(s.tr, {
                      children: [
                        (0, c.jsx)(s.td, { children: 'method' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: 'string' }) }),
                        (0, c.jsxs)(s.td, {
                          children: [
                            'HTTP \u8bf7\u6c42\u7684\u65b9\u6cd5\uff0c\u53ef\u9009\u503c\u6709\uff1a',
                            (0, c.jsx)(s.code, { children: 'GET' }),
                            '/',
                            (0, c.jsx)(s.code, { children: 'POST' }),
                            '\u3002',
                          ],
                        }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: 'GET' }) }),
                        (0, c.jsx)(s.td, { children: '\u5426' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: 'GET' }) }),
                      ],
                    }),
                    (0, c.jsxs)(s.tr, {
                      children: [
                        (0, c.jsx)(s.td, { children: 'headers' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: 'map[string][]string' }) }),
                        (0, c.jsx)(s.td, { children: 'HTTP \u8bf7\u6c42\u7684\u8bf7\u6c42\u5934\u3002' }),
                        (0, c.jsx)(s.td, { children: '\u65e0' }),
                        (0, c.jsx)(s.td, { children: '\u5426' }),
                        (0, c.jsx)(s.td, {}),
                      ],
                    }),
                    (0, c.jsxs)(s.tr, {
                      children: [
                        (0, c.jsx)(s.td, { children: 'body' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: 'string' }) }),
                        (0, c.jsx)(s.td, { children: 'HTTP \u8bf7\u6c42\u7684\u8bf7\u6c42\u4f53\u3002' }),
                        (0, c.jsx)(s.td, { children: '\u65e0' }),
                        (0, c.jsx)(s.td, { children: '\u5426' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: '{"a":"b"}' }) }),
                      ],
                    }),
                    (0, c.jsxs)(s.tr, {
                      children: [
                        (0, c.jsx)(s.td, { children: 'criteria' }),
                        (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: 'HTTPCriteria' }) }),
                        (0, c.jsx)(s.td, {
                          children:
                            '\u5b9a\u4e49\u5982\u4f55\u5224\u65ad HTTP StatusCheck \u6267\u884c\u7684\u7ed3\u679c\u3002',
                        }),
                        (0, c.jsx)(s.td, { children: '\u65e0' }),
                        (0, c.jsx)(s.td, { children: '\u662f' }),
                        (0, c.jsx)(s.td, {}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, c.jsx)(s.h3, {
              id: 'httpcriteria-\u5b57\u6bb5\u8bf4\u660e',
              children: 'HTTPCriteria \u5b57\u6bb5\u8bf4\u660e',
            }),
            '\n',
            (0, c.jsxs)(s.table, {
              children: [
                (0, c.jsx)(s.thead, {
                  children: (0, c.jsxs)(s.tr, {
                    children: [
                      (0, c.jsx)(s.th, { children: '\u53c2\u6570' }),
                      (0, c.jsx)(s.th, { children: '\u7c7b\u578b' }),
                      (0, c.jsx)(s.th, { children: '\u8bf4\u660e' }),
                      (0, c.jsx)(s.th, { children: '\u9ed8\u8ba4\u503c' }),
                      (0, c.jsx)(s.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                      (0, c.jsx)(s.th, { children: '\u793a\u4f8b' }),
                    ],
                  }),
                }),
                (0, c.jsx)(s.tbody, {
                  children: (0, c.jsxs)(s.tr, {
                    children: [
                      (0, c.jsx)(s.td, { children: 'statusCode' }),
                      (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: 'string' }) }),
                      (0, c.jsxs)(s.td, {
                        children: [
                          'HTTP \u8bf7\u6c42\u9884\u671f\u7684\u72b6\u6001\u7801\u3002\u53d6\u503c\u53ef\u4ee5\u662f\u5355\u4e00\u7684\u6570\u5b57\uff08\u6bd4\u5982 ',
                          (0, c.jsx)(s.code, { children: '200' }),
                          '\uff09\uff0c\u6216\u8005\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u8303\u56f4\uff08\u6bd4\u5982 ',
                          (0, c.jsx)(s.code, { children: '200-400' }),
                          '\uff0c\u8fd9\u91cc\uff0c',
                          (0, c.jsx)(s.code, { children: '200' }),
                          ' \u548c ',
                          (0, c.jsx)(s.code, { children: '400' }),
                          ' \u90fd\u88ab\u5305\u62ec\u5728\u8303\u56f4\u5185\uff09\u3002',
                        ],
                      }),
                      (0, c.jsx)(s.td, { children: '\u65e0' }),
                      (0, c.jsx)(s.td, { children: '\u662f' }),
                      (0, c.jsx)(s.td, { children: (0, c.jsx)(s.code, { children: '200' }) }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        })
      }
      function j(e = {}) {
        const { wrapper: s } = { ...(0, t.R)(), ...e.components }
        return s ? (0, c.jsx)(s, { ...e, children: (0, c.jsx)(x, { ...e }) }) : x(e)
      }
    },
    28453: (e, s, d) => {
      d.d(s, { R: () => h, x: () => i })
      var n = d(96540)
      const c = {},
        t = n.createContext(c)
      function h(e) {
        const s = n.useContext(t)
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(s) : { ...s, ...e }
          },
          [s, e]
        )
      }
      function i(e) {
        let s
        return (
          (s = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(c)
              : e.components || c
            : h(e.components)),
          n.createElement(t.Provider, { value: s }, e.children)
        )
      }
    },
  },
])
