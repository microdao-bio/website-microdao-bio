'use strict'
;(self.webpackChunkchaos_mesh_website = self.webpackChunkchaos_mesh_website || []).push([
  [57],
  {
    68623: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => c,
          contentTitle: () => r,
          default: () => d,
          frontMatter: () => a,
          metadata: () => o,
          toc: () => i,
        })
      const o = JSON.parse(
        '{"id":"add-new-chaos-experiment-type","title":"Add New Chaos Experiment Type","description":"This document describes how to add a new chaos experiment type.","source":"@site/versioned_docs/version-2.4.3/add-new-chaos-experiment-type.md","sourceDirName":".","slug":"/add-new-chaos-experiment-type","permalink":"/docs/2.4.3/add-new-chaos-experiment-type","draft":false,"unlisted":false,"editUrl":"https://github.com/microdao-bio/website-microdao-bio/versioned_docs/version-2.4.3/add-new-chaos-experiment-type.md","tags":[],"version":"2.4.3","frontMatter":{"title":"Add New Chaos Experiment Type"},"sidebar":"docs","previous":{"title":"Configure the Development Environment","permalink":"/docs/2.4.3/configure-development-environment"},"next":{"title":"Extend Chaos Daemon Interface","permalink":"/docs/2.4.3/extend-chaos-daemon-interface"}}'
      )
      var t = s(74848),
        l = s(28453)
      s(13137)
      const a = { title: 'Add New Chaos Experiment Type' },
        r = void 0,
        c = {},
        i = [
          { value: 'Step 1: Define the schema type', id: 'step-1-define-the-schema-type', level: 2 },
          { value: 'Step 2: Register the CRD', id: 'step-2-register-the-crd', level: 2 },
          {
            value: 'Step 3: Register the event handler for this chaos object',
            id: 'step-3-register-the-event-handler-for-this-chaos-object',
            level: 2,
          },
          { value: 'Step 4: Build the Docker image', id: 'step-4-build-the-docker-image', level: 2 },
          { value: 'Step 5: Run the chaos experiment', id: 'step-5-run-the-chaos-experiment', level: 2 },
          { value: 'What&#39;s Next', id: 'whats-next', level: 2 },
        ]
      function h(e) {
        const n = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
          ul: 'ul',
          ...(0, l.R)(),
          ...e.components,
        }
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.p, { children: 'This document describes how to add a new chaos experiment type.' }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'The following walks you through an example of HelloWorldChaos, a new chaos experiment type that prints ',
                (0, t.jsx)(n.code, { children: 'Hello World!' }),
                ' to the log. The steps include:',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsx)(n.li, { children: 'Step 1: Define the schema type' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Step 2: Register the CRD' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Step 3: Register the event handler for this chaos object' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Step 4: Build the Docker image' }),
                '\n',
                (0, t.jsx)(n.li, { children: 'Step 5: Run the chaos experiment' }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: 'step-1-define-the-schema-type', children: 'Step 1: Define the schema type' }),
            '\n',
            (0, t.jsxs)(n.ol, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'Add ',
                        (0, t.jsx)(n.code, { children: 'helloworldchaos_types.go' }),
                        ' in the API directory ',
                        (0, t.jsx)(n.code, { children: 'api/v1alpha1' }),
                        ' with the following content:',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, {
                        className: 'language-go',
                        children:
                          'package v1alpha1\n\nimport (\n    metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\n)\n\n// +kubebuilder:object:root=true\n// +chaos-mesh:experiment\n// +chaos-mesh:oneshot=true\n\n// HelloWorldChaos is the Schema for the helloworldchaos API\ntype HelloWorldChaos struct {\n    metav1.TypeMeta   `json:",inline"`\n    metav1.ObjectMeta `json:"metadata,omitempty"`\n\n    Spec   HelloWorldChaosSpec   `json:"spec"`\n    Status HelloWorldChaosStatus `json:"status,omitempty"`\n}\n\n// HelloWorldChaosSpec is the content of the specification for a HelloWorldChaos\ntype HelloWorldChaosSpec struct {\n    // ContainerSelector specifies target\n    ContainerSelector `json:",inline"`\n\n    // Duration represents the duration of the chaos action\n    // +optional\n    Duration *string `json:"duration,omitempty"`\n}\n\n// HelloWorldChaosStatus represents the status of a HelloWorldChaos\ntype HelloWorldChaosStatus struct {\n    ChaosStatus `json:",inline"`\n}\n\n// GetSelectorSpecs is a getter for selectors\nfunc (obj *HelloWorldChaos) GetSelectorSpecs() map[string]interface{} {\n    return map[string]interface{}{\n        ".": &obj.Spec.ContainerSelector,\n    }\n}\n',
                      }),
                    }),
                    '\n',
                    (0, t.jsx)(n.p, {
                      children:
                        'This file defines the schema type of HelloWorldChaos, which can be described in a YAML file:',
                    }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          'apiVersion: chaos-mesh.org/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: <resource name>\n  name: <namespace>\nspec:\n  duration: <duration>\nstatus:\n  experiment: <experimental status>\n...\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'Run ',
                        (0, t.jsx)(n.code, { children: 'make generate' }),
                        ' in the root directory of Chaos Mesh, which generates a boilerplate for Chaos Mesh to compile.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: 'step-2-register-the-crd', children: 'Step 2: Register the CRD' }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'You need to register the CRD (Custom Resource Definition) of HelloWorldChaos to interact it with Kubernetes API.',
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
                        'Run ',
                        (0, t.jsx)(n.code, { children: 'make yaml' }),
                        ' in the root directory. The generated YAML file is at ',
                        (0, t.jsx)(n.code, { children: 'config/crd/bases/chaos-mesh.org_helloworldchaos.yaml' }),
                        '.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'To combine this YAML file into ',
                        (0, t.jsx)(n.code, { children: 'manifests/crd.yaml' }),
                        ', add a new line in ',
                        (0, t.jsx)(n.code, { children: 'config/crd/kustomization.yaml' }),
                        ':',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          'resources:\n  - bases/chaos-mesh.org_podchaos.yaml\n  - bases/chaos-mesh.org_networkchaos.yaml\n  - bases/chaos-mesh.org_iochaos.yaml\n  - bases/chaos-mesh.org_helloworldchaos.yaml # This is the new line\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'Run ',
                        (0, t.jsx)(n.code, { children: 'make yaml' }),
                        ' again. You can see the definition of HelloWorldChaos in ',
                        (0, t.jsx)(n.code, { children: 'manifests/crd.yaml' }),
                        '. To confirm, you can use the ',
                        (0, t.jsx)(n.code, { children: 'git diff' }),
                        ' command.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: 'step-3-register-the-event-handler-for-this-chaos-object',
              children: 'Step 3: Register the event handler for this chaos object',
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
                        'Create a new file ',
                        (0, t.jsx)(n.code, { children: 'controllers/chaosimpl/helloworldchaos/types.go' }),
                        ' with the following content:',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, {
                        className: 'language-go',
                        children:
                          'package helloworldchaos\n\nimport (\n    "context"\n\n    "github.com/go-logr/logr"\n    "go.uber.org/fx"\n    "sigs.k8s.io/controller-runtime/pkg/client"\n\n    "github.com/chaos-mesh/chaos-mesh/api/v1alpha1"\n    impltypes "github.com/chaos-mesh/chaos-mesh/controllers/chaosimpl/types"\n    "github.com/chaos-mesh/chaos-mesh/controllers/chaosimpl/utils"\n)\n\ntype Impl struct {\n    client.Client\n    Log     logr.Logger\n    decoder *utils.ContainerRecordDecoder\n}\n\n// This corresponds to the Apply phase of HelloWorldChaos. The execution of HelloWorldChaos will be triggered.\nfunc (impl *Impl) Apply(ctx context.Context, index int, records []*v1alpha1.Record, obj v1alpha1.InnerObject) (v1alpha1.Phase, error) {\n    impl.Log.Info("Hello world!")\n    return v1alpha1.Injected, nil\n}\n\n// This corresponds to the Recover phase of HelloWorldChaos. The reconciler will be triggered to recover the chaos action.\nfunc (impl *Impl) Recover(ctx context.Context, index int, records []*v1alpha1.Record, obj v1alpha1.InnerObject) (v1alpha1.Phase, error) {\n    impl.Log.Info("Goodbye world!")\n    return v1alpha1.NotInjected, nil\n}\n\nfunc NewImpl(c client.Client, log logr.Logger, decoder *utils.ContainerRecordDecoder) *impltypes.ChaosImplPair {\n    return &impltypes.ChaosImplPair{\n        Name:   "helloworldchaos",\n        Object: &v1alpha1.HelloWorldChaos{},\n        Impl: &Impl{\n            Client:  c,\n            Log:     log.WithName("helloworldchaos"),\n            decoder: decoder,\n        },\n        ObjectList: &v1alpha1.HelloWorldChaosList{},\n    }\n}\n\nvar Module = fx.Provide(\n    fx.Annotated{\n        Group:  "impl",\n        Target: NewImpl,\n    },\n)\n\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'Chaos Mesh uses the ',
                        (0, t.jsx)(n.a, { href: 'https://github.com/uber-go/fx', children: 'fx' }),
                        ' library for dependency injection. To register HelloWorldChaos in the Controller Manager, add a line in ',
                        (0, t.jsx)(n.code, { children: 'controllers/chaosimpl/fx.go' }),
                        ':',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, {
                        className: 'language-go',
                        children:
                          '    ...\n    gcpchaos.Module,\n    stresschaos.Module,\n    jvmchaos.Module,\n    timechaos.Module,\n    helloworldchaos.Module //Add a new line. Make sure you have imported HelloWorldChaos to this file first.\n',
                      }),
                    }),
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'In ',
                        (0, t.jsx)(n.code, { children: 'controllers/types/types.go' }),
                        ', add the following content:',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, {
                        className: 'language-go',
                        children:
                          '    ...\n    fx.Annotated{\n        Group: "objs",\n        Target: Object{\n            Name:   "timechaos",\n            Object: &v1alpha1.TimeChaos{},\n        },\n    },\n\n    fx.Annotated{\n        Group: "objs",\n        Target: Object{\n            Name:   "gcpchaos",\n            Object: &v1alpha1.GCPChaos{},\n        },\n    },\n\n    fx.Annotated{\n        Group: "objs",\n        Target: Object{\n            Name:   "helloworldchaos",\n            Object: &v1alpha1.HelloWorldChaos{},\n        },\n    },\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: 'step-4-build-the-docker-image', children: 'Step 4: Build the Docker image' }),
            '\n',
            (0, t.jsxs)(n.ol, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(n.p, { children: 'Build the Docker image:' }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, { className: 'language-bash', children: 'make\n' }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(n.p, { children: 'Push the image to your local Docker Registry:' }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, { className: 'language-bash', children: 'make docker-push\n' }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(n.p, {
                      children: 'If you deploy Kubernetes clusters using kind, then you need to load images into kind:',
                    }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, {
                        className: 'language-bash',
                        children:
                          'kind load docker-image localhost:5000/chaos-mesh/chaos-mesh:latest\nkind load docker-image localhost:5000/chaos-mesh/chaos-daemon:latest\nkind load docker-image localhost:5000/chaos-mesh/chaos-dashboard:latest\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: 'step-5-run-the-chaos-experiment', children: 'Step 5: Run the chaos experiment' }),
            '\n',
            (0, t.jsx)(n.p, {
              children: 'In this step, you need to deploy Chaos Mesh with your latest changes to test HelloWorldChaos.',
            }),
            '\n',
            (0, t.jsxs)(n.ol, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(n.p, { children: 'Register the CRD in your cluster:' }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl create -f manifests/crd.yaml\n',
                      }),
                    }),
                    '\n',
                    (0, t.jsx)(n.p, { children: 'You can see HelloWorldChaos is created from the output:' }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, {
                        className: 'language-log',
                        children:
                          'customresourcedefinition.apiextensions.k8s.io/helloworldchaos.chaos-mesh.org created\n',
                      }),
                    }),
                    '\n',
                    (0, t.jsx)(n.p, {
                      children: 'Now you can get the CRD of HelloWorldChaos using the command below:',
                    }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl get crd helloworldchaos.chaos-mesh.org\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(n.p, { children: 'Deploy Chaos Mesh:' }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, {
                        className: 'language-bash',
                        children:
                          'helm install chaos-mesh helm/chaos-mesh --namespace=chaos-mesh --set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock --set images.registry=localhost:5000 --version latest\n',
                      }),
                    }),
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'To verify the deployment is successful, you can check all Pods in the ',
                        (0, t.jsx)(n.code, { children: 'chaos-mesh' }),
                        ' namespace:',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl get pods --namespace chaos-mesh -l app.kubernetes.io/instance=chaos-mesh\n',
                      }),
                    }),
                    '\n',
                    (0, t.jsx)(n.admonition, {
                      type: 'note',
                      children: (0, t.jsxs)(n.p, {
                        children: [
                          'Arguments ',
                          (0, t.jsx)(n.code, {
                            children:
                              '--set chaosDaemon.runtime=containerd --set chaosDaemon.socketPath=/run/containerd/containerd.sock',
                          }),
                          ' are used to run NeteworkChaos on kind.',
                        ],
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(n.p, { children: 'Deploy the Pod for testing:' }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, {
                        className: 'language-bash',
                        children:
                          'kubectl apply -f https://raw.githubusercontent.com/chaos-mesh/apps/master/ping/busybox-statefulset.yaml\n',
                      }),
                    }),
                    '\n',
                    (0, t.jsx)(n.p, { children: 'Make sure the Pod for testing works properly.' }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'Create a ',
                        (0, t.jsx)(n.code, { children: 'chaos.yaml' }),
                        ' file in any location with the following content:',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, {
                        className: 'language-yaml',
                        children:
                          'apiVersion: chaos-mesh.org/v1alpha1\nkind: HelloWorldChaos\nmetadata:\n  name: hello-world\n  namespace: chaos-mesh\nspec:\n  selector:\n    namespaces:\n      - busybox\n  mode: one\n  duration: 1h\n',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(n.p, { children: 'Run the chaos experiment:' }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl apply -f /path/to/chaos.yaml\n',
                      }),
                    }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl get HelloWorldChaos -n chaos-mesh\n',
                      }),
                    }),
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'Now you can see ',
                        (0, t.jsx)(n.code, { children: 'Hello World!' }),
                        ' in the logs of ',
                        (0, t.jsx)(n.code, { children: 'chaos-controller-manager' }),
                        ':',
                      ],
                    }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, {
                        className: 'language-bash',
                        children: 'kubectl logs chaos-controller-manager-{pod-post-fix} -n chaos-mesh\n',
                      }),
                    }),
                    '\n',
                    (0, t.jsx)(n.p, { children: 'Example output:' }),
                    '\n',
                    (0, t.jsx)(n.pre, {
                      children: (0, t.jsx)(n.code, {
                        className: 'language-log',
                        children:
                          '2021-06-24T06:42:26.858Z        INFO    records apply chaos     {"id": "chaos-mesh/chaos-daemon-vsmc5"}\n2021-06-24T06:42:26.858Z        INFO    helloworldchaos Hello World!\n',
                      }),
                    }),
                    '\n',
                    (0, t.jsx)(n.admonition, {
                      type: 'note',
                      children: (0, t.jsxs)(n.p, {
                        children: [
                          (0, t.jsx)(n.code, { children: '{pod-post-fix}' }),
                          ' is a random string generated by Kubernetes. You can check it by executing ',
                          (0, t.jsx)(n.code, { children: 'kubectl get pod -n chaos-mesh' }),
                          '.',
                        ],
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, { id: 'whats-next', children: "What's Next" }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'If you encounter any problems during the process, create an ',
                (0, t.jsx)(n.a, { href: 'https://github.com/chaos-mesh/chaos-mesh/issues', children: 'issue' }),
                ' in the Chaos Mesh repository.',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'If you want to dive deep into developing new chaos experiment types, see ',
                (0, t.jsx)(n.a, {
                  href: '/docs/2.4.3/extend-chaos-daemon-interface',
                  children: 'Extend Chaos Daemon interface',
                }),
                '.',
              ],
            }),
          ],
        })
      }
      function d(e = {}) {
        const { wrapper: n } = { ...(0, l.R)(), ...e.components }
        return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(h, { ...e }) }) : h(e)
      }
    },
    13137: (e, n, s) => {
      s.d(n, { A: () => d })
      var o = s(78478),
        t = s(44586),
        l = s(66588),
        a = s(21432),
        r = s(99589),
        c = s.n(r),
        i = s(34661),
        h = s(74848)
      const d = (e) => {
        let { children: n, className: s = 'language-bash' } = e
        const { siteConfig: r } = (0, t.A)(),
          { versions: d } = (0, l.P_)('docusaurus-plugin-content-docs')
        return (0, h.jsx)(o.A, {
          children: () => {
            const e = (0, i.t)(r, d),
              o =
                'latest' === e
                  ? ''
                  : `--version ${((e) => {
                      if (c().satisfies(e, '>=2.0.3')) return e
                      const n = e.slice(0, 3)
                      return 'v' + (parseFloat(n) - 0.7).toFixed(1) + e.slice(3)
                    })(e)}`
            return (0, h.jsx)(a.A, { className: s, children: n.replace('--version latest', o).trim() })
          },
        })
      }
    },
    34661: (e, n, s) => {
      s.d(n, { A: () => i, t: () => c })
      var o = s(78478),
        t = s(44586),
        l = s(66588),
        a = s(21432),
        r = s(74848)
      const c = (e, n) => {
        const s = window.location.pathname
        let o = window.localStorage.getItem('docs-preferred-version-default')
        if (s === e.baseUrl && o) return 'current' === o ? 'latest' : o
        if (s.includes('/docs/next')) return 'latest'
        const t = n.find((e) => e.isLast),
          l = n.find((e) => s.includes(e.name))
        return l ? l.name : t.name
      }
      const i = (e) => {
        let { children: n, replaced: s = 'latest', isArchive: i = !1, className: h = 'language-bash' } = e
        const { siteConfig: d } = (0, t.A)(),
          { versions: p } = (0, l.P_)('docusaurus-plugin-content-docs')
        return (0, r.jsx)(o.A, {
          children: () => {
            const e = c(d, p),
              o = i
                ? n.replace(
                    s,
                    (function (e) {
                      return 'latest' === e ? 'refs/heads/master' : `refs/tags/v${e}`
                    })(e)
                  )
                : 'latest' === e
                ? n
                : n.replace(s, 'v' + e)
            return (0, r.jsx)(a.A, { className: h, children: o })
          },
        })
      }
    },
  },
])
