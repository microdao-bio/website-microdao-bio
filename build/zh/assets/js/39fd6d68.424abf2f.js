'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [3989],
  {
    56160: (e, d, n) => {
      n.r(d),
        n.d(d, {
          assets: () => h,
          contentTitle: () => i,
          default: () => j,
          frontMatter: () => r,
          metadata: () => s,
          toc: () => t,
        })
      const s = JSON.parse(
        '{"id":"simulate-jvm-application-chaos","title":"\u6a21\u62df JVM \u5e94\u7528\u6545\u969c","description":"Chaos Mesh \u901a\u8fc7 Byteman \u6a21\u62df JVM \u5e94\u7528\u6545\u969c\uff0c\u4e3b\u8981\u652f\u6301\u4ee5\u4e0b\u7c7b\u578b\u7684\u6545\u969c\uff1a\uff1a","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/simulate-jvm-application-chaos.md","sourceDirName":".","slug":"/simulate-jvm-application-chaos","permalink":"/zh/docs/2.4.3/simulate-jvm-application-chaos","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/i18n/zh/docusaurus-plugin-content-docs/version-2.4.3/simulate-jvm-application-chaos.md","tags":[],"version":"2.4.3","frontMatter":{"title":"\u6a21\u62df JVM \u5e94\u7528\u6545\u969c"},"sidebar":"docs","previous":{"title":"\u6a21\u62df\u65f6\u95f4\u6545\u969c","permalink":"/zh/docs/2.4.3/simulate-time-chaos-on-kubernetes"},"next":{"title":"\u6a21\u62df Linux \u5185\u6838\u6545\u969c","permalink":"/zh/docs/2.4.3/simulate-kernel-chaos-on-kubernetes"}}'
      )
      var l = n(74848),
        c = n(28453)
      const r = { title: '\u6a21\u62df JVM \u5e94\u7528\u6545\u969c' },
        i = void 0,
        h = {},
        t = [
          {
            value: '\u4f7f\u7528 Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            id: '\u4f7f\u7528-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            level: 2,
          },
          {
            value: '\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            id: '\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            level: 2,
          },
          {
            value: '\u7b2c 1 \u6b65\uff1a\u521b\u5efa\u88ab\u6d4b\u5e94\u7528',
            id: '\u7b2c-1-\u6b65\u521b\u5efa\u88ab\u6d4b\u5e94\u7528',
            level: 3,
          },
          {
            value: '\u7b2c 2 \u6b65\uff1a\u89c2\u6d4b\u672a\u88ab\u6ce8\u5165\u65f6\u7684\u884c\u4e3a',
            id: '\u7b2c-2-\u6b65\u89c2\u6d4b\u672a\u88ab\u6ce8\u5165\u65f6\u7684\u884c\u4e3a',
            level: 3,
          },
          {
            value: '\u7b2c 3 \u6b65\uff1a\u6ce8\u5165 JVMChaos \u5e76\u9a8c\u8bc1',
            id: '\u7b2c-3-\u6b65\u6ce8\u5165-jvmchaos-\u5e76\u9a8c\u8bc1',
            level: 3,
          },
          { value: '\u5b57\u6bb5\u8bf4\u660e', id: '\u5b57\u6bb5\u8bf4\u660e', level: 2 },
          { value: '<code>latency</code> \u76f8\u5173\u53c2\u6570', id: 'latency-\u76f8\u5173\u53c2\u6570', level: 3 },
          { value: '<code>return</code> \u76f8\u5173\u53c2\u6570', id: 'return-\u76f8\u5173\u53c2\u6570', level: 3 },
          {
            value: '<code>exception</code> \u76f8\u5173\u53c2\u6570',
            id: 'exception-\u76f8\u5173\u53c2\u6570',
            level: 3,
          },
          { value: '<code>stress</code> \u76f8\u5173\u53c2\u6570', id: 'stress-\u76f8\u5173\u53c2\u6570', level: 3 },
          { value: '<code>gc</code> \u76f8\u5173\u53c2\u6570', id: 'gc-\u76f8\u5173\u53c2\u6570', level: 3 },
          {
            value: '<code>ruleData</code> \u76f8\u5173\u53c2\u6570',
            id: 'ruledata-\u76f8\u5173\u53c2\u6570',
            level: 3,
          },
          { value: '<code>mysql</code> \u76f8\u5173\u53c2\u6570', id: 'mysql-\u76f8\u5173\u53c2\u6570', level: 3 },
        ]
      function x(e) {
        const d = {
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
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ul: 'ul',
          ...(0, c.R)(),
          ...e.components,
        }
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(d.p, {
              children: [
                'Chaos Mesh \u901a\u8fc7 ',
                (0, l.jsx)(d.a, { href: 'https://github.com/chaos-mesh/byteman', children: 'Byteman' }),
                ' \u6a21\u62df JVM \u5e94\u7528\u6545\u969c\uff0c\u4e3b\u8981\u652f\u6301\u4ee5\u4e0b\u7c7b\u578b\u7684\u6545\u969c\uff1a\uff1a',
              ],
            }),
            '\n',
            (0, l.jsxs)(d.ul, {
              children: [
                '\n',
                (0, l.jsx)(d.li, { children: '\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38' }),
                '\n',
                (0, l.jsx)(d.li, { children: '\u89e6\u53d1\u5783\u573e\u56de\u6536' }),
                '\n',
                (0, l.jsx)(d.li, { children: '\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf' }),
                '\n',
                (0, l.jsx)(d.li, { children: '\u6307\u5b9a\u65b9\u6cd5\u8fd4\u56de\u503c' }),
                '\n',
                (0, l.jsx)(d.li, { children: '\u8bbe\u7f6e Byteman \u914d\u7f6e\u6587\u4ef6\u89e6\u53d1\u6545\u969c' }),
                '\n',
                (0, l.jsx)(d.li, { children: '\u589e\u52a0 JVM \u538b\u529b' }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsxs)(d.p, {
              children: [
                '\u540c\u65f6\uff0cChaos Mesh \u652f\u6301\u5bf9\u5e38\u7528\u7684\u670d\u52a1\u6216\u5176 Java \u5ba2\u6237\u7aef\u6ce8\u5165\u4e0a\u8ff0\u7684\u6545\u969c\u3002\u6bd4\u5982\uff0c\u5f53 MySQL Java \u5ba2\u6237\u7aef\u6267\u884c\u6307\u5b9a\u7c7b\u578b\u7684 SQL \u8bed\u53e5\uff08',
                (0, l.jsx)(d.code, { children: 'SELECT' }),
                '\uff0c',
                (0, l.jsx)(d.code, { children: 'UPDATE' }),
                '\uff0c',
                (0, l.jsx)(d.code, { children: 'INSERT' }),
                '\uff0c',
                (0, l.jsx)(d.code, { children: 'REPLACE' }),
                ' \u6216 ',
                (0, l.jsx)(d.code, { children: 'DELETE' }),
                '\uff09\u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 JVM \u6545\u969c\u6ce8\u5165\u529f\u80fd\u5728\u8be5\u5ba2\u6237\u7aef\u6ce8\u5165\u5ef6\u8fdf\u6216\u629b\u51fa\u5f02\u5e38\u3002',
              ],
            }),
            '\n',
            (0, l.jsx)(d.p, {
              children:
                '\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u521b\u5efa\u4ee5\u4e0a\u6545\u969c\u7c7b\u578b\u7684 JVM \u5b9e\u9a8c\u3002',
            }),
            '\n',
            (0, l.jsx)(d.admonition, {
              title: '\u6ce8\u610f',
              type: 'note',
              children: (0, l.jsx)(d.p, {
                children: 'Linux \u7cfb\u7edf\u5185\u6838\u5fc5\u987b\u4e3a 4.1 \u53ca\u4ee5\u4e0a\u7248\u672c\u3002',
              }),
            }),
            '\n',
            (0, l.jsx)(d.h2, {
              id: '\u4f7f\u7528-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
              children: '\u4f7f\u7528 Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            }),
            '\n',
            (0, l.jsxs)(d.ol, {
              children: [
                '\n',
                (0, l.jsxs)(d.li, {
                  children: [
                    '\n',
                    (0, l.jsx)(d.p, {
                      children:
                        '\u5355\u51fb\u5b9e\u9a8c\u9875\u9762\u4e2d\u7684\u201c\u65b0\u7684\u5b9e\u9a8c\u201d\u6309\u94ae\u521b\u5efa\u5b9e\u9a8c\uff1a',
                    }),
                    '\n',
                    (0, l.jsx)(d.p, {
                      children: (0, l.jsx)(d.img, {
                        alt: '\u521b\u5efa\u5b9e\u9a8c',
                        src: n(37046).A + '',
                        width: '982',
                        height: '648',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, l.jsxs)(d.li, {
                  children: [
                    '\n',
                    (0, l.jsxs)(d.p, {
                      children: [
                        '\u5728\u201c\u9009\u62e9\u76ee\u6807\u201d\u5904\u9009\u62e9 \u201cJVM \u6545\u969c\u201d\uff0c\u7136\u540e\u9009\u62e9\u5177\u4f53\u884c\u4e3a\uff08\u5982 ',
                        (0, l.jsx)(d.code, { children: 'RETURN' }),
                        '\uff09\uff0c\u6700\u540e\u586b\u5199\u5177\u4f53\u914d\u7f6e\uff1a',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(d.p, {
                      children: (0, l.jsx)(d.img, {
                        alt: 'JVMChaos \u5b9e\u9a8c',
                        src: n(89160).A + '',
                        width: '1866',
                        height: '1434',
                      }),
                    }),
                    '\n',
                    (0, l.jsxs)(d.p, {
                      children: [
                        '\u5177\u4f53\u914d\u7f6e\u7684\u586b\u5199\u65b9\u5f0f\uff0c\u53c2\u8003',
                        (0, l.jsx)(d.a, {
                          href: '#%E5%AD%97%E6%AE%B5%E8%AF%B4%E6%98%8E',
                          children: '\u5b57\u6bb5\u8bf4\u660e',
                        }),
                        '\u3002',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, l.jsxs)(d.li, {
                  children: [
                    '\n',
                    (0, l.jsx)(d.p, {
                      children:
                        '\u586b\u5199\u5b9e\u9a8c\u4fe1\u606f\uff0c\u6307\u5b9a\u5b9e\u9a8c\u8303\u56f4\u4ee5\u53ca\u5b9e\u9a8c\u8ba1\u5212\u8fd0\u884c\u65f6\u95f4\uff1a',
                    }),
                    '\n',
                    (0, l.jsx)(d.p, {
                      children: (0, l.jsx)(d.img, {
                        alt: '\u5b9e\u9a8c\u4fe1\u606f',
                        src: n(11703).A + '',
                        width: '1838',
                        height: '1328',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, l.jsxs)(d.li, {
                  children: ['\n', (0, l.jsx)(d.p, { children: '\u63d0\u4ea4\u5b9e\u9a8c\u3002' }), '\n'],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsx)(d.h2, {
              id: '\u4f7f\u7528-yaml-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
              children: '\u4f7f\u7528 YAML \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c',
            }),
            '\n',
            (0, l.jsxs)(d.p, {
              children: [
                '\u4e0b\u9762\u5c06\u4ee5\u6307\u5b9a\u8fd4\u56de\u503c\u4e3a\u4f8b\uff0c\u5c55\u793a JVMChaos \u7684\u4f7f\u7528\u65b9\u6cd5\u4e0e\u6548\u679c\u3002\u4ee5\u4e0b\u5185\u5bb9\u4e2d\u6d89\u53ca\u7684 YAML \u6587\u4ef6\u5747\u53ef\u5728 ',
                (0, l.jsx)(d.a, {
                  href: 'https://github.com/chaos-mesh/chaos-mesh/tree/master/examples/jvm',
                  children: 'examples/jvm',
                }),
                ' \u4e2d\u627e\u5230\uff0c\u4ee5\u4e0b\u6b65\u9aa4\u9ed8\u8ba4\u7684\u5de5\u4f5c\u8def\u5f84\u4e5f\u662f\u5728 ',
                (0, l.jsx)(d.code, { children: 'examples/jvm' }),
                ' \u4e2d\u3002 \u9ed8\u8ba4 Chaos Mesh \u5b89\u88c5\u7684\u547d\u540d\u7a7a\u95f4\u4e3a ',
                (0, l.jsx)(d.code, { children: 'chaos-mesh' }),
                '\u3002',
              ],
            }),
            '\n',
            (0, l.jsx)(d.h3, {
              id: '\u7b2c-1-\u6b65\u521b\u5efa\u88ab\u6d4b\u5e94\u7528',
              children: '\u7b2c 1 \u6b65\uff1a\u521b\u5efa\u88ab\u6d4b\u5e94\u7528',
            }),
            '\n',
            (0, l.jsxs)(d.p, {
              children: [
                (0, l.jsx)(d.a, {
                  href: 'https://github.com/WangXiangUSTC/byteman-example/tree/main/example.helloworld',
                  children: 'Helloworld',
                }),
                ' \u662f\u4e00\u4e2a\u7b80\u5355\u7684 Java \u5e94\u7528\uff0c\u6b64\u5904\u4f5c\u4e3a\u88ab\u6d4b\u5e94\u7528\u3002\u88ab\u6d4b\u5e94\u7528\u5b9a\u4e49\u5728 ',
                (0, l.jsx)(d.code, { children: 'example/jvm/app.yaml' }),
                ' \u4e2d\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a',
              ],
            }),
            '\n',
            (0, l.jsx)(d.pre, {
              children: (0, l.jsx)(d.code, {
                className: 'language-yaml',
                children:
                  'apiVersion: v1\nkind: Pod\nmetadata:\n  name: helloworld\n  namespace: helloworld\nspec:\n  containers:\n    - name: helloworld\n      # source code: https://github.com/WangXiangUSTC/byteman-example/tree/main/example.helloworld\n      # this application will print log like this below:\n      # 0. Hello World\n      # 1. Hello World\n      # ...\n      image: xiang13225080/helloworld:v1.0\n      imagePullPolicy: IfNotPresent\n',
              }),
            }),
            '\n',
            (0, l.jsxs)(d.ol, {
              children: [
                '\n',
                (0, l.jsxs)(d.li, {
                  children: [
                    '\n',
                    (0, l.jsx)(d.p, { children: '\u521b\u5efa\u5e94\u7528\u6240\u5c5e\u7684 namespace\uff1a' }),
                    '\n',
                    (0, l.jsx)(d.pre, {
                      children: (0, l.jsx)(d.code, {
                        className: 'language-shell',
                        children: 'kubectl create namespace helloworld\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, l.jsxs)(d.li, {
                  children: [
                    '\n',
                    (0, l.jsx)(d.p, { children: '\u5efa\u7acb\u8be5\u5e94\u7528 Pod\uff1a' }),
                    '\n',
                    (0, l.jsx)(d.pre, {
                      children: (0, l.jsx)(d.code, {
                        className: 'language-shell',
                        children: 'kubectl apply -f app.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, l.jsxs)(d.li, {
                  children: [
                    '\n',
                    (0, l.jsxs)(d.p, {
                      children: [
                        '\u6267\u884c ',
                        (0, l.jsx)(d.code, { children: 'kubectl -n helloworld get pods' }),
                        '\uff0c\u9884\u671f\u80fd\u591f\u89c2\u5bdf\u5230\u547d\u540d\u7a7a\u95f4 ',
                        (0, l.jsx)(d.code, { children: 'helloworld' }),
                        ' \u4e2d\u540d\u4e3a ',
                        (0, l.jsx)(d.code, { children: 'helloworld' }),
                        ' \u7684 Pod\u3002',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(d.pre, {
                      children: (0, l.jsx)(d.code, {
                        className: 'language-shell',
                        children: 'kubectl -n helloworld get pods\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsx)(d.p, { children: '\u9884\u671f\u7ed3\u679c\u5982\u4e0b\uff1a' }),
            '\n',
            (0, l.jsx)(d.pre, {
              children: (0, l.jsx)(d.code, {
                className: 'language-text',
                children:
                  'kubectl get pods -n helloworld\nNAME         READY   STATUS    RESTARTS   AGE\nhelloworld   1/1     Running   0          2m\n',
              }),
            }),
            '\n',
            (0, l.jsxs)(d.p, {
              children: [
                '\u7b49\u5f85 ',
                (0, l.jsx)(d.code, { children: 'READY' }),
                ' \u6210\u4e3a ',
                (0, l.jsx)(d.code, { children: '1/1' }),
                ' \u540e\uff0c\u53ef\u4ee5\u8fdb\u884c\u4e0b\u4e00\u6b65\u3002',
              ],
            }),
            '\n',
            (0, l.jsx)(d.h3, {
              id: '\u7b2c-2-\u6b65\u89c2\u6d4b\u672a\u88ab\u6ce8\u5165\u65f6\u7684\u884c\u4e3a',
              children: '\u7b2c 2 \u6b65\uff1a\u89c2\u6d4b\u672a\u88ab\u6ce8\u5165\u65f6\u7684\u884c\u4e3a',
            }),
            '\n',
            (0, l.jsxs)(d.p, {
              children: [
                '\u5728\u6ce8\u5165\u524d\u4f60\u53ef\u4ee5\u5148\u89c2\u6d4b\u5e94\u7528 ',
                (0, l.jsx)(d.code, { children: 'helloworld' }),
                ' \u672a\u88ab\u6ce8\u5165\u65f6\u7684\u884c\u4e3a\uff0c\u4f8b\u5982\uff1a',
              ],
            }),
            '\n',
            (0, l.jsx)(d.pre, {
              children: (0, l.jsx)(d.code, {
                className: 'language-shell',
                children: 'kubectl -n helloworld logs -f helloworld\n',
              }),
            }),
            '\n',
            (0, l.jsx)(d.p, { children: '\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a' }),
            '\n',
            (0, l.jsx)(d.pre, {
              children: (0, l.jsx)(d.code, {
                className: 'language-shell',
                children:
                  '0. Hello World\n1. Hello World\n2. Hello World\n3. Hello World\n4. Hello World\n5. Hello World\n',
              }),
            }),
            '\n',
            (0, l.jsxs)(d.p, {
              children: [
                '\u53ef\u4ee5\u770b\u5230 ',
                (0, l.jsx)(d.code, { children: 'helloworld' }),
                ' \u6bcf\u9694\u4e00\u79d2\u8f93\u51fa\u4e00\u884c ',
                (0, l.jsx)(d.code, { children: 'Hello World' }),
                '\uff0c\u6bcf\u884c\u7684\u7f16\u53f7\u4f9d\u6b21\u9012\u589e\u3002',
              ],
            }),
            '\n',
            (0, l.jsx)(d.h3, {
              id: '\u7b2c-3-\u6b65\u6ce8\u5165-jvmchaos-\u5e76\u9a8c\u8bc1',
              children: '\u7b2c 3 \u6b65\uff1a\u6ce8\u5165 JVMChaos \u5e76\u9a8c\u8bc1',
            }),
            '\n',
            (0, l.jsxs)(d.ol, {
              children: [
                '\n',
                (0, l.jsxs)(d.li, {
                  children: [
                    '\n',
                    (0, l.jsx)(d.p, {
                      children: '\u6307\u5b9a\u8fd4\u56de\u503c\u7684 JVMChaos \u5185\u5bb9\u5982\u4e0b\uff1a',
                    }),
                    '\n',
                    (0, l.jsx)(d.pre, {
                      children: (0, l.jsx)(d.code, {
                        className: 'language-yaml',
                        children:
                          "apiVersion: chaos-mesh.org/v1alpha1\nkind: JVMChaos\nmetadata:\n  name: return\n  namespace: helloworld\nspec:\n  action: return\n  class: Main\n  method: getnum\n  value: '9999'\n  mode: all\n  selector:\n    namespaces:\n      - helloworld\n",
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsxs)(d.p, {
              children: [
                'JVMChaos \u5c06 ',
                (0, l.jsx)(d.code, { children: 'getnum' }),
                ' \u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u4fee\u6539\u4e3a\u6570\u5b57 ',
                (0, l.jsx)(d.code, { children: '9999' }),
                '\uff0c\u4e5f\u5c31\u662f\u8ba9 ',
                (0, l.jsx)(d.code, { children: 'helloworld' }),
                ' \u7684\u6bcf\u884c\u8f93\u51fa\u7684\u7f16\u53f7\u90fd\u8bbe\u7f6e\u4e3a ',
                (0, l.jsx)(d.code, { children: '9999' }),
                '\u3002',
              ],
            }),
            '\n',
            (0, l.jsxs)(d.ol, {
              start: '2',
              children: [
                '\n',
                (0, l.jsxs)(d.li, {
                  children: [
                    '\n',
                    (0, l.jsx)(d.p, { children: '\u6ce8\u5165\u6307\u5b9a\u8fd4\u56de\u503c\u7684 JVMChaos\uff1a' }),
                    '\n',
                    (0, l.jsx)(d.pre, {
                      children: (0, l.jsx)(d.code, {
                        className: 'language-shell',
                        children: 'kubectl apply -f ./jvm-return-example.yaml\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, l.jsxs)(d.li, {
                  children: [
                    '\n',
                    (0, l.jsxs)(d.p, {
                      children: [
                        '\u67e5\u770b ',
                        (0, l.jsx)(d.code, { children: 'helloworld' }),
                        ' \u7684\u6700\u65b0\u65e5\u5fd7\uff1a',
                      ],
                    }),
                    '\n',
                    (0, l.jsx)(d.pre, {
                      children: (0, l.jsx)(d.code, {
                        className: 'language-shell',
                        children: 'kubectl -n helloworld logs -f helloworld\n',
                      }),
                    }),
                    '\n',
                    (0, l.jsx)(d.p, { children: '\u65e5\u5fd7\u5982\u4e0b\u6240\u793a\uff1a' }),
                    '\n',
                    (0, l.jsx)(d.pre, {
                      children: (0, l.jsx)(d.code, {
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
            (0, l.jsx)(d.h2, { id: '\u5b57\u6bb5\u8bf4\u660e', children: '\u5b57\u6bb5\u8bf4\u660e' }),
            '\n',
            (0, l.jsxs)(d.table, {
              children: [
                (0, l.jsx)(d.thead, {
                  children: (0, l.jsxs)(d.tr, {
                    children: [
                      (0, l.jsx)(d.th, { children: '\u53c2\u6570' }),
                      (0, l.jsx)(d.th, { children: '\u7c7b\u578b' }),
                      (0, l.jsx)(d.th, { children: '\u8bf4\u660e' }),
                      (0, l.jsx)(d.th, { children: '\u9ed8\u8ba4\u503c' }),
                      (0, l.jsx)(d.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                      (0, l.jsx)(d.th, { children: '\u793a\u4f8b' }),
                    ],
                  }),
                }),
                (0, l.jsxs)(d.tbody, {
                  children: [
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'action' }) }),
                        (0, l.jsx)(d.td, { children: 'string' }),
                        (0, l.jsxs)(d.td, {
                          children: [
                            '\u8868\u793a\u5177\u4f53\u7684\u6545\u969c\u7c7b\u578b\uff0c\u652f\u6301 ',
                            (0, l.jsx)(d.code, { children: 'latency' }),
                            '\u3001',
                            (0, l.jsx)(d.code, { children: 'return' }),
                            '\u3001',
                            (0, l.jsx)(d.code, { children: 'exception' }),
                            '\u3001',
                            (0, l.jsx)(d.code, { children: 'stress' }),
                            '\u3001',
                            (0, l.jsx)(d.code, { children: 'gc' }),
                            '\u3001',
                            (0, l.jsx)(d.code, { children: 'ruleData' }),
                            '\u3002',
                          ],
                        }),
                        (0, l.jsx)(d.td, { children: '\u65e0' }),
                        (0, l.jsx)(d.td, { children: '\u662f' }),
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'return' }) }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'mode' }) }),
                        (0, l.jsx)(d.td, { children: 'string' }),
                        (0, l.jsxs)(d.td, {
                          children: [
                            '\u8868\u793a\u9009\u62e9 Pod \u7684\u65b9\u5f0f\uff0c\u652f\u6301 ',
                            (0, l.jsx)(d.code, { children: 'one' }),
                            '\u3001',
                            (0, l.jsx)(d.code, { children: 'all' }),
                            '\u3001',
                            (0, l.jsx)(d.code, { children: 'fixed' }),
                            '\u3001',
                            (0, l.jsx)(d.code, { children: 'fixed-percent' }),
                            '\u3001',
                            (0, l.jsx)(d.code, { children: 'random-max-percent' }),
                            '\u3002',
                          ],
                        }),
                        (0, l.jsx)(d.td, { children: '\u65e0' }),
                        (0, l.jsx)(d.td, { children: '\u662f' }),
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'one' }) }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsxs)(d.p, {
              children: [
                '\u5173\u4e8e ',
                (0, l.jsx)(d.code, { children: 'action' }),
                ' \u7684\u53d6\u503c\u7684\u542b\u4e49\uff0c\u53ef\u53c2\u8003\u4ee5\u4e0b\u5185\u5bb9\uff1a',
              ],
            }),
            '\n',
            (0, l.jsxs)(d.table, {
              children: [
                (0, l.jsx)(d.thead, {
                  children: (0, l.jsxs)(d.tr, {
                    children: [
                      (0, l.jsx)(d.th, { children: '\u53d6\u503c' }),
                      (0, l.jsx)(d.th, { children: '\u542b\u4e49' }),
                    ],
                  }),
                }),
                (0, l.jsxs)(d.tbody, {
                  children: [
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'latency' }) }),
                        (0, l.jsx)(d.td, { children: '\u589e\u52a0\u65b9\u6cd5\u5ef6\u8fdf' }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'return' }) }),
                        (0, l.jsx)(d.td, { children: '\u4fee\u6539\u65b9\u6cd5\u8fd4\u56de\u503c' }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'exception' }) }),
                        (0, l.jsx)(d.td, { children: '\u629b\u51fa\u81ea\u5b9a\u4e49\u5f02\u5e38' }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'stress' }) }),
                        (0, l.jsx)(d.td, {
                          children:
                            '\u63d0\u9ad8 Java \u8fdb\u7a0b CPU \u4f7f\u7528\u7387\uff0c\u6216\u8005\u9020\u6210\u5185\u5b58\u6ea2\u51fa\uff08\u652f\u6301\u5806\u3001\u6808\u6ea2\u51fa\uff09',
                        }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'gc' }) }),
                        (0, l.jsx)(d.td, { children: '\u89e6\u53d1\u5783\u573e\u56de\u6536' }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'ruleData' }) }),
                        (0, l.jsx)(d.td, { children: '\u8bbe\u7f6e Byteman \u914d\u7f6e\u89e6\u53d1\u6545\u969c' }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'mysql' }) }),
                        (0, l.jsx)(d.td, { children: '\u5bf9 MySQL Java \u5ba2\u6237\u7aef\u6ce8\u5165\u6545\u969c' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsxs)(d.p, {
              children: [
                '\u9488\u5bf9\u4e0d\u540c\u7684 ',
                (0, l.jsx)(d.code, { children: 'action' }),
                ' \u7684\u503c\uff0c\u6709\u4e0d\u540c\u7684\u914d\u7f6e\u9879\u53ef\u4ee5\u586b\u5199\u3002',
              ],
            }),
            '\n',
            (0, l.jsxs)(d.h3, {
              id: 'latency-\u76f8\u5173\u53c2\u6570',
              children: [(0, l.jsx)(d.code, { children: 'latency' }), ' \u76f8\u5173\u53c2\u6570'],
            }),
            '\n',
            (0, l.jsxs)(d.table, {
              children: [
                (0, l.jsx)(d.thead, {
                  children: (0, l.jsxs)(d.tr, {
                    children: [
                      (0, l.jsx)(d.th, { children: '\u53c2\u6570' }),
                      (0, l.jsx)(d.th, { children: '\u7c7b\u578b' }),
                      (0, l.jsx)(d.th, { children: '\u8bf4\u660e' }),
                      (0, l.jsx)(d.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                    ],
                  }),
                }),
                (0, l.jsxs)(d.tbody, {
                  children: [
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'class' }) }),
                        (0, l.jsx)(d.td, { children: 'string \u7c7b\u578b' }),
                        (0, l.jsx)(d.td, { children: 'Java \u7c7b\u7684\u540d\u79f0' }),
                        (0, l.jsx)(d.td, { children: '\u662f' }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'method' }) }),
                        (0, l.jsx)(d.td, { children: 'string \u7c7b\u578b' }),
                        (0, l.jsx)(d.td, { children: '\u65b9\u6cd5\u540d\u79f0' }),
                        (0, l.jsx)(d.td, { children: '\u662f' }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'latency' }) }),
                        (0, l.jsx)(d.td, { children: 'int \u7c7b\u578b' }),
                        (0, l.jsx)(d.td, {
                          children: '\u589e\u52a0\u65b9\u6cd5\u7684\u5ef6\u8fdf\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a ms',
                        }),
                        (0, l.jsx)(d.td, { children: '\u662f' }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'port' }) }),
                        (0, l.jsx)(d.td, { children: 'int \u7c7b\u578b' }),
                        (0, l.jsx)(d.td, {
                          children:
                            '\u9644\u52a0\u5230 Java \u8fdb\u7a0b agent \u7684\u7aef\u53e3\u53f7\uff0c\u901a\u8fc7\u8be5\u7aef\u53e3\u53f7\u5c06\u6545\u969c\u6ce8\u5165\u5230 Java \u8fdb\u7a0b',
                        }),
                        (0, l.jsx)(d.td, { children: '\u5426' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsxs)(d.h3, {
              id: 'return-\u76f8\u5173\u53c2\u6570',
              children: [(0, l.jsx)(d.code, { children: 'return' }), ' \u76f8\u5173\u53c2\u6570'],
            }),
            '\n',
            (0, l.jsxs)(d.table, {
              children: [
                (0, l.jsx)(d.thead, {
                  children: (0, l.jsxs)(d.tr, {
                    children: [
                      (0, l.jsx)(d.th, { children: '\u53c2\u6570' }),
                      (0, l.jsx)(d.th, { children: '\u7c7b\u578b' }),
                      (0, l.jsx)(d.th, { children: '\u8bf4\u660e' }),
                      (0, l.jsx)(d.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                    ],
                  }),
                }),
                (0, l.jsxs)(d.tbody, {
                  children: [
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'class' }) }),
                        (0, l.jsx)(d.td, { children: 'string \u7c7b\u578b' }),
                        (0, l.jsx)(d.td, { children: 'Java \u7c7b\u7684\u540d\u79f0' }),
                        (0, l.jsx)(d.td, { children: '\u662f' }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'method' }) }),
                        (0, l.jsx)(d.td, { children: 'string \u7c7b\u578b' }),
                        (0, l.jsx)(d.td, { children: '\u65b9\u6cd5\u540d\u79f0' }),
                        (0, l.jsx)(d.td, { children: '\u662f' }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'value' }) }),
                        (0, l.jsx)(d.td, { children: 'string \u7c7b\u578b' }),
                        (0, l.jsx)(d.td, {
                          children:
                            '\u6307\u5b9a\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\uff0c\u76ee\u524d\u652f\u6301\u6570\u5b57\u548c\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u8fd4\u56de\u503c\uff0c\u5982\u679c\u4e3a\u5b57\u7b26\u4e32\uff0c\u5219\u9700\u8981\u4f7f\u7528\u53cc\u5f15\u53f7\uff0c\u4f8b\u5982\uff1a"chaos"\u3002',
                        }),
                        (0, l.jsx)(d.td, { children: '\u662f' }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'port' }) }),
                        (0, l.jsx)(d.td, { children: 'int \u7c7b\u578b' }),
                        (0, l.jsx)(d.td, {
                          children:
                            '\u9644\u52a0\u5230 Java \u8fdb\u7a0b agent \u7684\u7aef\u53e3\u53f7\uff0c\u901a\u8fc7\u8be5\u7aef\u53e3\u53f7\u5c06\u6545\u969c\u6ce8\u5165\u5230 Java \u8fdb\u7a0b',
                        }),
                        (0, l.jsx)(d.td, { children: '\u5426' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsxs)(d.h3, {
              id: 'exception-\u76f8\u5173\u53c2\u6570',
              children: [(0, l.jsx)(d.code, { children: 'exception' }), ' \u76f8\u5173\u53c2\u6570'],
            }),
            '\n',
            (0, l.jsxs)(d.table, {
              children: [
                (0, l.jsx)(d.thead, {
                  children: (0, l.jsxs)(d.tr, {
                    children: [
                      (0, l.jsx)(d.th, { children: '\u53c2\u6570' }),
                      (0, l.jsx)(d.th, { children: '\u7c7b\u578b' }),
                      (0, l.jsx)(d.th, { children: '\u8bf4\u660e' }),
                      (0, l.jsx)(d.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                    ],
                  }),
                }),
                (0, l.jsxs)(d.tbody, {
                  children: [
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'class' }) }),
                        (0, l.jsx)(d.td, { children: 'string \u7c7b\u578b' }),
                        (0, l.jsx)(d.td, { children: 'Java \u7c7b\u7684\u540d\u79f0' }),
                        (0, l.jsx)(d.td, { children: '\u662f' }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'method' }) }),
                        (0, l.jsx)(d.td, { children: 'string \u7c7b\u578b' }),
                        (0, l.jsx)(d.td, { children: '\u65b9\u6cd5\u540d\u79f0' }),
                        (0, l.jsx)(d.td, { children: '\u662f' }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'exception' }) }),
                        (0, l.jsx)(d.td, { children: 'string \u7c7b\u578b' }),
                        (0, l.jsx)(d.td, {
                          children:
                            '\u629b\u51fa\u7684\u81ea\u5b9a\u4e49\u5f02\u5e38\uff0c\u4f8b\u5982\uff1a\'java.io.IOException("BOOM")\'',
                        }),
                        (0, l.jsx)(d.td, { children: '\u662f' }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'port' }) }),
                        (0, l.jsx)(d.td, { children: 'int \u7c7b\u578b' }),
                        (0, l.jsx)(d.td, {
                          children:
                            '\u9644\u52a0\u5230 Java \u8fdb\u7a0b agent \u7684\u7aef\u53e3\u53f7\uff0c\u901a\u8fc7\u8be5\u7aef\u53e3\u53f7\u5c06\u6545\u969c\u6ce8\u5165\u5230 Java \u8fdb\u7a0b',
                        }),
                        (0, l.jsx)(d.td, { children: '\u5426' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsxs)(d.h3, {
              id: 'stress-\u76f8\u5173\u53c2\u6570',
              children: [(0, l.jsx)(d.code, { children: 'stress' }), ' \u76f8\u5173\u53c2\u6570'],
            }),
            '\n',
            (0, l.jsxs)(d.table, {
              children: [
                (0, l.jsx)(d.thead, {
                  children: (0, l.jsxs)(d.tr, {
                    children: [
                      (0, l.jsx)(d.th, { children: '\u53c2\u6570' }),
                      (0, l.jsx)(d.th, { children: '\u7c7b\u578b' }),
                      (0, l.jsx)(d.th, { children: '\u8bf4\u660e' }),
                      (0, l.jsx)(d.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                    ],
                  }),
                }),
                (0, l.jsxs)(d.tbody, {
                  children: [
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'cpuCount' }) }),
                        (0, l.jsx)(d.td, { children: 'int \u7c7b\u578b' }),
                        (0, l.jsxs)(d.td, {
                          children: [
                            '\u589e\u52a0 CPU \u538b\u529b\u6240\u4f7f\u7528\u7684 CPU \u6838\u7684\u6570\u91cf\uff0c',
                            (0, l.jsx)(d.code, { children: 'cpuCount' }),
                            ' \u548c ',
                            (0, l.jsx)(d.code, { children: 'memType' }),
                            ' \u4e2d\u5fc5\u987b\u914d\u7f6e\u4e00\u4e2a',
                          ],
                        }),
                        (0, l.jsx)(d.td, { children: '\u5426' }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'memType' }) }),
                        (0, l.jsx)(d.td, { children: 'string \u7c7b\u578b' }),
                        (0, l.jsxs)(d.td, {
                          children: [
                            '\u5185\u5b58 OOM \u7684\u7c7b\u578b\uff0c\u76ee\u524d\u652f\u6301 "stack" \u548c "heap" \u4e24\u79cd\u7c7b\u578b\uff0c',
                            (0, l.jsx)(d.code, { children: 'cpuCount' }),
                            ' \u548c ',
                            (0, l.jsx)(d.code, { children: 'memType' }),
                            ' \u4e2d\u5fc5\u987b\u914d\u7f6e\u4e00\u4e2a',
                          ],
                        }),
                        (0, l.jsx)(d.td, { children: '\u5426' }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'port' }) }),
                        (0, l.jsx)(d.td, { children: 'int \u7c7b\u578b' }),
                        (0, l.jsx)(d.td, {
                          children:
                            '\u9644\u52a0\u5230 Java \u8fdb\u7a0b agent \u7684\u7aef\u53e3\u53f7\uff0c\u901a\u8fc7\u8be5\u7aef\u53e3\u53f7\u5c06\u6545\u969c\u6ce8\u5165\u5230 Java \u8fdb\u7a0b',
                        }),
                        (0, l.jsx)(d.td, { children: '\u5426' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsxs)(d.h3, {
              id: 'gc-\u76f8\u5173\u53c2\u6570',
              children: [(0, l.jsx)(d.code, { children: 'gc' }), ' \u76f8\u5173\u53c2\u6570'],
            }),
            '\n',
            (0, l.jsxs)(d.table, {
              children: [
                (0, l.jsx)(d.thead, {
                  children: (0, l.jsxs)(d.tr, {
                    children: [
                      (0, l.jsx)(d.th, { children: '\u53c2\u6570' }),
                      (0, l.jsx)(d.th, { children: '\u7c7b\u578b' }),
                      (0, l.jsx)(d.th, { children: '\u8bf4\u660e' }),
                      (0, l.jsx)(d.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                    ],
                  }),
                }),
                (0, l.jsx)(d.tbody, {
                  children: (0, l.jsxs)(d.tr, {
                    children: [
                      (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'port' }) }),
                      (0, l.jsx)(d.td, { children: 'int \u7c7b\u578b' }),
                      (0, l.jsx)(d.td, {
                        children:
                          '\u9644\u52a0\u5230 Java \u8fdb\u7a0b agent \u7684\u7aef\u53e3\u53f7\uff0c\u901a\u8fc7\u8be5\u7aef\u53e3\u53f7\u5c06\u6545\u969c\u6ce8\u5165\u5230 Java \u8fdb\u7a0b',
                      }),
                      (0, l.jsx)(d.td, { children: '\u5426' }),
                    ],
                  }),
                }),
              ],
            }),
            '\n',
            (0, l.jsxs)(d.h3, {
              id: 'ruledata-\u76f8\u5173\u53c2\u6570',
              children: [(0, l.jsx)(d.code, { children: 'ruleData' }), ' \u76f8\u5173\u53c2\u6570'],
            }),
            '\n',
            (0, l.jsxs)(d.table, {
              children: [
                (0, l.jsx)(d.thead, {
                  children: (0, l.jsxs)(d.tr, {
                    children: [
                      (0, l.jsx)(d.th, { children: '\u53c2\u6570' }),
                      (0, l.jsx)(d.th, { children: '\u7c7b\u578b' }),
                      (0, l.jsx)(d.th, { children: '\u8bf4\u660e' }),
                      (0, l.jsx)(d.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                    ],
                  }),
                }),
                (0, l.jsxs)(d.tbody, {
                  children: [
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'ruleData' }) }),
                        (0, l.jsx)(d.td, { children: 'srting \u7c7b\u578b' }),
                        (0, l.jsx)(d.td, { children: '\u6307\u5b9a Byteman \u914d\u7f6e\u6570\u636e' }),
                        (0, l.jsx)(d.td, { children: '\u662f' }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'port' }) }),
                        (0, l.jsx)(d.td, { children: 'int \u7c7b\u578b' }),
                        (0, l.jsx)(d.td, {
                          children:
                            '\u9644\u52a0\u5230 Java \u8fdb\u7a0b agent \u7684\u7aef\u53e3\u53f7\uff0c\u901a\u8fc7\u8be5\u7aef\u53e3\u53f7\u5c06\u6545\u969c\u6ce8\u5165\u5230 Java \u8fdb\u7a0b',
                        }),
                        (0, l.jsx)(d.td, { children: '\u5426' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsxs)(d.p, {
              children: [
                '\u5f53\u7f16\u5199\u89c4\u5219\u914d\u7f6e\u6587\u4ef6\u65f6\uff0c\u4f60\u9700\u8981\u6839\u636e\u5177\u4f53\u7684 Java \u7a0b\u5e8f\uff0c\u5e76\u53c2\u8003 ',
                (0, l.jsx)(d.a, {
                  href: 'https://downloads.jboss.org/byteman/4.0.16/byteman-programmers-guide.html#the-byteman-rule-language',
                  children: 'byteman-rule-language',
                }),
                '\u3002\u4f8b\u5982\uff1a',
              ],
            }),
            '\n',
            (0, l.jsx)(d.pre, {
              children: (0, l.jsx)(d.code, {
                className: 'language-txt',
                children:
                  'RULE modify return value\nCLASS Main\nMETHOD getnum\nAT ENTRY\nIF true\nDO\n    return 9999\nENDRULE\n',
              }),
            }),
            '\n',
            (0, l.jsx)(d.p, {
              children:
                '\u5c06\u914d\u7f6e\u4e2d\u7684\u6362\u884c\u8f6c\u6362\u4e3a\u6362\u884c\u7b26 "\\n"\uff0c\u5c06\u8f6c\u6362\u540e\u7684\u6570\u636e\u8bbe\u7f6e\u4e3a\u53c2\u6570 "ruleData" \u7684\u503c\uff0c\u5982\u4e0a\u7684\u914d\u7f6e\u8f6c\u6362\u4e3a\uff1a',
            }),
            '\n',
            (0, l.jsx)(d.pre, {
              children: (0, l.jsx)(d.code, {
                className: 'language-txt',
                children:
                  '\\nRULE modify return value\\nCLASS Main\\nMETHOD getnum\\nAT ENTRY\\nIF true\\nDO return 9999\\nENDRULE\\n"\n',
              }),
            }),
            '\n',
            (0, l.jsxs)(d.h3, {
              id: 'mysql-\u76f8\u5173\u53c2\u6570',
              children: [(0, l.jsx)(d.code, { children: 'mysql' }), ' \u76f8\u5173\u53c2\u6570'],
            }),
            '\n',
            (0, l.jsxs)(d.table, {
              children: [
                (0, l.jsx)(d.thead, {
                  children: (0, l.jsxs)(d.tr, {
                    children: [
                      (0, l.jsx)(d.th, { children: '\u53c2\u6570' }),
                      (0, l.jsx)(d.th, { children: '\u7c7b\u578b' }),
                      (0, l.jsx)(d.th, { children: '\u8bf4\u660e' }),
                      (0, l.jsx)(d.th, { children: '\u662f\u5426\u5fc5\u586b' }),
                    ],
                  }),
                }),
                (0, l.jsxs)(d.tbody, {
                  children: [
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'mysqlConnectorVersion' }) }),
                        (0, l.jsx)(d.td, { children: 'string \u7c7b\u578b' }),
                        (0, l.jsxs)(d.td, {
                          children: [
                            '\u4f7f\u7528\u7684 MySQL \u5ba2\u6237\u7aef (mysql-connector-java) \u7684\u7248\u672c\uff0c\u5bf9\u4e8e 5.X.X \u7248\u672c\u8bbe\u7f6e\u4e3a ',
                            (0, l.jsx)(d.code, { children: '"5"' }),
                            '\uff0c\u5bf9\u4e8e 8.X.X \u7248\u672c\u8bbe\u7f6e\u4e3a ',
                            (0, l.jsx)(d.code, { children: '"8"' }),
                            '\u3002\u9ed8\u8ba4\u503c\u4e3a ',
                            (0, l.jsx)(d.code, { children: '"8"' }),
                            '\u3002',
                          ],
                        }),
                        (0, l.jsx)(d.td, { children: '\u5426' }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'database' }) }),
                        (0, l.jsx)(d.td, { children: 'string \u7c7b\u578b' }),
                        (0, l.jsxs)(d.td, {
                          children: [
                            '\u5339\u914d\u7684\u6307\u5b9a\u7684\u5e93\u540d\u79f0\uff0c\u9ed8\u8ba4\u503c\u4e3a ',
                            (0, l.jsx)(d.code, { children: '""' }),
                            '\uff0c\u5373\u5339\u914d\u6240\u6709\u7684\u5e93\u3002',
                          ],
                        }),
                        (0, l.jsx)(d.td, { children: '\u5426' }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'table' }) }),
                        (0, l.jsx)(d.td, { children: 'string \u7c7b\u578b' }),
                        (0, l.jsxs)(d.td, {
                          children: [
                            '\u5339\u914d\u7684\u6307\u5b9a\u7684\u8868\u540d\u79f0\uff0c\u9ed8\u8ba4\u503c\u4e3a ',
                            (0, l.jsx)(d.code, { children: '""' }),
                            '\uff0c\u5373\u5339\u914d\u6240\u6709\u7684\u8868\u3002',
                          ],
                        }),
                        (0, l.jsx)(d.td, { children: '\u5426' }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'sqlType' }) }),
                        (0, l.jsx)(d.td, { children: 'string \u7c7b\u578b' }),
                        (0, l.jsxs)(d.td, {
                          children: [
                            '\u5339\u914d\u7684 SQL \u7c7b\u578b\uff0c\u53ef\u9009\u503c\u4e3a ',
                            (0, l.jsx)(d.code, { children: '"select"' }),
                            '\u3001',
                            (0, l.jsx)(d.code, { children: '"update"' }),
                            '\u3001',
                            (0, l.jsx)(d.code, { children: '"insert"' }),
                            '\u3001',
                            (0, l.jsx)(d.code, { children: '"replace"' }),
                            '\u3001',
                            (0, l.jsx)(d.code, { children: '"delete"' }),
                            '\uff0c\u9ed8\u8ba4\u503c\u4e3a ',
                            (0, l.jsx)(d.code, { children: '""' }),
                            '\uff0c\u5373\u5339\u914d\u6240\u6709\u7c7b\u578b\u7684 SQL\u3002',
                          ],
                        }),
                        (0, l.jsx)(d.td, { children: '\u5426' }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'exception' }) }),
                        (0, l.jsx)(d.td, { children: 'string \u7c7b\u578b' }),
                        (0, l.jsxs)(d.td, {
                          children: [
                            '\u629b\u51fa\u7684\u81ea\u5b9a\u4e49\u5f02\u5e38\u4fe1\u606f\uff0c\u5982 ',
                            (0, l.jsx)(d.code, { children: '"BOOM"' }),
                            '\u3002',
                            (0, l.jsx)(d.code, { children: 'exception' }),
                            ' \u548c ',
                            (0, l.jsx)(d.code, { children: 'latency' }),
                            ' \u4e2d\u5fc5\u987b\u914d\u7f6e\u4e00\u4e2a\u3002',
                          ],
                        }),
                        (0, l.jsx)(d.td, { children: '\u5426' }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'latency' }) }),
                        (0, l.jsx)(d.td, { children: 'int \u7c7b\u578b' }),
                        (0, l.jsxs)(d.td, {
                          children: [
                            '\u6267\u884c SQL \u7684\u5ef6\u8fdf\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a ms\uff0c\u5982 ',
                            (0, l.jsx)(d.code, { children: '1000' }),
                            '\u3002',
                            (0, l.jsx)(d.code, { children: 'exception' }),
                            ' \u548c ',
                            (0, l.jsx)(d.code, { children: 'latency' }),
                            ' \u4e2d\u5fc5\u987b\u914d\u7f6e\u4e00\u4e2a\u3002',
                          ],
                        }),
                        (0, l.jsx)(d.td, { children: '\u5426' }),
                      ],
                    }),
                    (0, l.jsxs)(d.tr, {
                      children: [
                        (0, l.jsx)(d.td, { children: (0, l.jsx)(d.code, { children: 'port' }) }),
                        (0, l.jsx)(d.td, { children: 'int \u7c7b\u578b' }),
                        (0, l.jsx)(d.td, {
                          children:
                            '\u9644\u52a0\u5230 Java \u8fdb\u7a0b agent \u7684\u7aef\u53e3\u53f7\uff0c\u901a\u8fc7\u8be5\u7aef\u53e3\u53f7\u5c06\u6545\u969c\u6ce8\u5165\u5230 Java \u8fdb\u7a0b\u3002',
                        }),
                        (0, l.jsx)(d.td, { children: '\u5426' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
      function j(e = {}) {
        const { wrapper: d } = { ...(0, c.R)(), ...e.components }
        return d ? (0, l.jsx)(d, { ...e, children: (0, l.jsx)(x, { ...e }) }) : x(e)
      }
    },
    37046: (e, d, n) => {
      n.d(d, { A: () => s })
      const s = n.p + 'assets/images/create-new-exp-4754c4846da07a385e3dd612b828aeae.png'
    },
    11703: (e, d, n) => {
      n.d(d, { A: () => s })
      const s = n.p + 'assets/images/exp-info-a276a95f6e75f6d8346b661d07fe6b44.png'
    },
    89160: (e, d, n) => {
      n.d(d, { A: () => s })
      const s = n.p + 'assets/images/jvmchaos-exp-a11a55c2cdbfa4d6fffae19d032383b5.png'
    },
    28453: (e, d, n) => {
      n.d(d, { R: () => r, x: () => i })
      var s = n(96540)
      const l = {},
        c = s.createContext(l)
      function r(e) {
        const d = s.useContext(c)
        return s.useMemo(
          function () {
            return 'function' == typeof e ? e(d) : { ...d, ...e }
          },
          [d, e]
        )
      }
      function i(e) {
        let d
        return (
          (d = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(l)
              : e.components || l
            : r(e.components)),
          s.createElement(c.Provider, { value: d }, e.children)
        )
      }
    },
  },
])