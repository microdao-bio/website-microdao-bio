import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug/',
    component: ComponentCreator('/__docusaurus/debug/', '546'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config/',
    component: ComponentCreator('/__docusaurus/debug/config/', '8a8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content/',
    component: ComponentCreator('/__docusaurus/debug/content/', '2da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData/',
    component: ComponentCreator('/__docusaurus/debug/globalData/', '178'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata/',
    component: ComponentCreator('/__docusaurus/debug/metadata/', 'd6c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry/',
    component: ComponentCreator('/__docusaurus/debug/registry/', '6e3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes/',
    component: ComponentCreator('/__docusaurus/debug/routes/', 'cab'),
    exact: true
  },
  {
    path: '/supported-releases/',
    component: ComponentCreator('/supported-releases/', 'ed1'),
    exact: true
  },
  {
    path: '/versions/',
    component: ComponentCreator('/versions/', 'd5a'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '296'),
    routes: [
      {
        path: '/docs/2.4.3/',
        component: ComponentCreator('/docs/2.4.3/', 'c4b'),
        routes: [
          {
            path: '/docs/2.4.3/',
            component: ComponentCreator('/docs/2.4.3/', '3f7'),
            routes: [
              {
                path: '/docs/2.4.3/',
                component: ComponentCreator('/docs/2.4.3/', 'd9e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/add-new-chaos-experiment-type/',
                component: ComponentCreator('/docs/2.4.3/add-new-chaos-experiment-type/', 'bca'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/basic-features/',
                component: ComponentCreator('/docs/2.4.3/basic-features/', '60a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/chaos-engineering-principles/',
                component: ComponentCreator('/docs/2.4.3/chaos-engineering-principles/', '284'),
                exact: true
              },
              {
                path: '/docs/2.4.3/chaosctl-tool/',
                component: ComponentCreator('/docs/2.4.3/chaosctl-tool/', 'fb9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/chaosd-overview/',
                component: ComponentCreator('/docs/2.4.3/chaosd-overview/', 'a3d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/chaosd-search-recover/',
                component: ComponentCreator('/docs/2.4.3/chaosd-search-recover/', '9e5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/check-workflow-status/',
                component: ComponentCreator('/docs/2.4.3/check-workflow-status/', 'cb2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/clean-up-chaos-experiments/',
                component: ComponentCreator('/docs/2.4.3/clean-up-chaos-experiments/', '7f8'),
                exact: true
              },
              {
                path: '/docs/2.4.3/common/quick-run/',
                component: ComponentCreator('/docs/2.4.3/common/quick-run/', '741'),
                exact: true
              },
              {
                path: '/docs/2.4.3/common/verify-installation/',
                component: ComponentCreator('/docs/2.4.3/common/verify-installation/', '89e'),
                exact: true
              },
              {
                path: '/docs/2.4.3/configure-development-environment/',
                component: ComponentCreator('/docs/2.4.3/configure-development-environment/', 'b09'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/configure-enabled-namespace/',
                component: ComponentCreator('/docs/2.4.3/configure-enabled-namespace/', '266'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/create-chaos-mesh-workflow/',
                component: ComponentCreator('/docs/2.4.3/create-chaos-mesh-workflow/', '43d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/define-chaos-experiment-scope/',
                component: ComponentCreator('/docs/2.4.3/define-chaos-experiment-scope/', '96e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/define-scheduling-rules/',
                component: ComponentCreator('/docs/2.4.3/define-scheduling-rules/', 'e00'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/define-workflow-scheduling-rules/',
                component: ComponentCreator('/docs/2.4.3/define-workflow-scheduling-rules/', 'a07'),
                exact: true
              },
              {
                path: '/docs/2.4.3/developer-guide-overview/',
                component: ComponentCreator('/docs/2.4.3/developer-guide-overview/', 'b44'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/extend-chaos-daemon-interface/',
                component: ComponentCreator('/docs/2.4.3/extend-chaos-daemon-interface/', '373'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/extend-chaosd/',
                component: ComponentCreator('/docs/2.4.3/extend-chaosd/', '370'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/faqs/',
                component: ComponentCreator('/docs/2.4.3/faqs/', 'cef'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/gcp-authentication/',
                component: ComponentCreator('/docs/2.4.3/gcp-authentication/', '058'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/glossary/',
                component: ComponentCreator('/docs/2.4.3/glossary/', 'ce7'),
                exact: true
              },
              {
                path: '/docs/2.4.3/go-client/',
                component: ComponentCreator('/docs/2.4.3/go-client/', '8d3'),
                exact: true
              },
              {
                path: '/docs/2.4.3/inspect-chaos-experiments/',
                component: ComponentCreator('/docs/2.4.3/inspect-chaos-experiments/', '298'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/integrate-chaos-mesh-into-github-actions/',
                component: ComponentCreator('/docs/2.4.3/integrate-chaos-mesh-into-github-actions/', '835'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/java-client/',
                component: ComponentCreator('/docs/2.4.3/java-client/', '94b'),
                exact: true
              },
              {
                path: '/docs/2.4.3/manage-user-permissions/',
                component: ComponentCreator('/docs/2.4.3/manage-user-permissions/', '3f5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/multi-data-center-scenario/',
                component: ComponentCreator('/docs/2.4.3/multi-data-center-scenario/', 'f7e'),
                exact: true
              },
              {
                path: '/docs/2.4.3/offline-installation/',
                component: ComponentCreator('/docs/2.4.3/offline-installation/', '49a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/persistence-dashboard/',
                component: ComponentCreator('/docs/2.4.3/persistence-dashboard/', '4b9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/production-installation-using-helm/',
                component: ComponentCreator('/docs/2.4.3/production-installation-using-helm/', '47b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/python-client/',
                component: ComponentCreator('/docs/2.4.3/python-client/', '9eb'),
                exact: true
              },
              {
                path: '/docs/2.4.3/quick-start/',
                component: ComponentCreator('/docs/2.4.3/quick-start/', 'eea'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/release-0.0.8/',
                component: ComponentCreator('/docs/2.4.3/release-0.0.8/', 'd76'),
                exact: true
              },
              {
                path: '/docs/2.4.3/release-0.0.9/',
                component: ComponentCreator('/docs/2.4.3/release-0.0.9/', 'e40'),
                exact: true
              },
              {
                path: '/docs/2.4.3/release-1.0.0/',
                component: ComponentCreator('/docs/2.4.3/release-1.0.0/', '4f7'),
                exact: true
              },
              {
                path: '/docs/2.4.3/release-2.0.0/',
                component: ComponentCreator('/docs/2.4.3/release-2.0.0/', '54d'),
                exact: true
              },
              {
                path: '/docs/2.4.3/release-2.4-tracking/',
                component: ComponentCreator('/docs/2.4.3/release-2.4-tracking/', '496'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/release-cycle/',
                component: ComponentCreator('/docs/2.4.3/release-cycle/', '7b2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/run-a-chaos-experiment/',
                component: ComponentCreator('/docs/2.4.3/run-a-chaos-experiment/', '65c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/run-serial-or-parallel-experiments/',
                component: ComponentCreator('/docs/2.4.3/run-serial-or-parallel-experiments/', 'baa'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/rust-client/',
                component: ComponentCreator('/docs/2.4.3/rust-client/', '4cd'),
                exact: true
              },
              {
                path: '/docs/2.4.3/send-http-request-on-workflow/',
                component: ComponentCreator('/docs/2.4.3/send-http-request-on-workflow/', '68f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/simulate-aws-chaos/',
                component: ComponentCreator('/docs/2.4.3/simulate-aws-chaos/', '42f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/simulate-azure-chaos/',
                component: ComponentCreator('/docs/2.4.3/simulate-azure-chaos/', '666'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/simulate-block-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/2.4.3/simulate-block-chaos-on-kubernetes/', '650'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/simulate-disk-pressure-in-physical-nodes/',
                component: ComponentCreator('/docs/2.4.3/simulate-disk-pressure-in-physical-nodes/', '239'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/simulate-dns-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/2.4.3/simulate-dns-chaos-on-kubernetes/', 'bd9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/simulate-file-chaos-in-physical-nodes/',
                component: ComponentCreator('/docs/2.4.3/simulate-file-chaos-in-physical-nodes/', '865'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/simulate-gcp-chaos/',
                component: ComponentCreator('/docs/2.4.3/simulate-gcp-chaos/', '077'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/simulate-heavy-stress-in-physical-nodes/',
                component: ComponentCreator('/docs/2.4.3/simulate-heavy-stress-in-physical-nodes/', '96d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/simulate-heavy-stress-on-kubernetes/',
                component: ComponentCreator('/docs/2.4.3/simulate-heavy-stress-on-kubernetes/', 'b14'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/simulate-host-console-in-physical-nodes/',
                component: ComponentCreator('/docs/2.4.3/simulate-host-console-in-physical-nodes/', 'c3b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/simulate-http-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/2.4.3/simulate-http-chaos-on-kubernetes/', '275'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/simulate-io-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/2.4.3/simulate-io-chaos-on-kubernetes/', '833'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/simulate-jvm-application-chaos-in-physical-nodes/',
                component: ComponentCreator('/docs/2.4.3/simulate-jvm-application-chaos-in-physical-nodes/', '59c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/simulate-jvm-application-chaos/',
                component: ComponentCreator('/docs/2.4.3/simulate-jvm-application-chaos/', '9f3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/simulate-kernel-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/2.4.3/simulate-kernel-chaos-on-kubernetes/', '2e0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/simulate-network-chaos-in-physical-nodes/',
                component: ComponentCreator('/docs/2.4.3/simulate-network-chaos-in-physical-nodes/', '15d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/simulate-network-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/2.4.3/simulate-network-chaos-on-kubernetes/', '57d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/simulate-physical-machine-chaos/',
                component: ComponentCreator('/docs/2.4.3/simulate-physical-machine-chaos/', 'c1a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/simulate-pod-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/2.4.3/simulate-pod-chaos-on-kubernetes/', 'a12'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/simulate-process-chaos-in-physical-nodes/',
                component: ComponentCreator('/docs/2.4.3/simulate-process-chaos-in-physical-nodes/', 'ca8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/simulate-redis-chaos-on-physical-nodes/',
                component: ComponentCreator('/docs/2.4.3/simulate-redis-chaos-on-physical-nodes/', '1f8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/simulate-time-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/2.4.3/simulate-time-chaos-on-kubernetes/', 'f16'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/simulate-time-chaos-on-physical-nodes/',
                component: ComponentCreator('/docs/2.4.3/simulate-time-chaos-on-physical-nodes/', '127'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/status-check-in-workflow/',
                component: ComponentCreator('/docs/2.4.3/status-check-in-workflow/', 'a8e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/troubleshooting-guide/',
                component: ComponentCreator('/docs/2.4.3/troubleshooting-guide/', 'c70'),
                exact: true
              },
              {
                path: '/docs/2.4.3/uninstallation/',
                component: ComponentCreator('/docs/2.4.3/uninstallation/', 'f3d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/upgrade-from-2.1-to-2.2/',
                component: ComponentCreator('/docs/2.4.3/upgrade-from-2.1-to-2.2/', '3de'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/upgrade-to-2.0/',
                component: ComponentCreator('/docs/2.4.3/upgrade-to-2.0/', '4e8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.4.3/use-argo-to-orchestrate-chaos-experiments/',
                component: ComponentCreator('/docs/2.4.3/use-argo-to-orchestrate-chaos-experiments/', 'aef'),
                exact: true
              },
              {
                path: '/docs/2.4.3/use-grafana-data-source/',
                component: ComponentCreator('/docs/2.4.3/use-grafana-data-source/', '9b6'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/2.5.2/',
        component: ComponentCreator('/docs/2.5.2/', '678'),
        routes: [
          {
            path: '/docs/2.5.2/',
            component: ComponentCreator('/docs/2.5.2/', 'c7e'),
            routes: [
              {
                path: '/docs/2.5.2/',
                component: ComponentCreator('/docs/2.5.2/', 'f5b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/add-new-chaos-experiment-type/',
                component: ComponentCreator('/docs/2.5.2/add-new-chaos-experiment-type/', '0ca'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/basic-features/',
                component: ComponentCreator('/docs/2.5.2/basic-features/', '477'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/chaos-engineering-principles/',
                component: ComponentCreator('/docs/2.5.2/chaos-engineering-principles/', 'e5a'),
                exact: true
              },
              {
                path: '/docs/2.5.2/chaosctl-tool/',
                component: ComponentCreator('/docs/2.5.2/chaosctl-tool/', '5bb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/chaosd-overview/',
                component: ComponentCreator('/docs/2.5.2/chaosd-overview/', 'dad'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/chaosd-search-recover/',
                component: ComponentCreator('/docs/2.5.2/chaosd-search-recover/', 'cac'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/check-workflow-status/',
                component: ComponentCreator('/docs/2.5.2/check-workflow-status/', '2c6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/clean-up-chaos-experiments/',
                component: ComponentCreator('/docs/2.5.2/clean-up-chaos-experiments/', 'bfb'),
                exact: true
              },
              {
                path: '/docs/2.5.2/common/quick-run/',
                component: ComponentCreator('/docs/2.5.2/common/quick-run/', '416'),
                exact: true
              },
              {
                path: '/docs/2.5.2/common/verify-installation/',
                component: ComponentCreator('/docs/2.5.2/common/verify-installation/', '185'),
                exact: true
              },
              {
                path: '/docs/2.5.2/configure-development-environment/',
                component: ComponentCreator('/docs/2.5.2/configure-development-environment/', '0d5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/configure-enabled-namespace/',
                component: ComponentCreator('/docs/2.5.2/configure-enabled-namespace/', 'a95'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/create-chaos-mesh-workflow/',
                component: ComponentCreator('/docs/2.5.2/create-chaos-mesh-workflow/', 'ddd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/define-chaos-experiment-scope/',
                component: ComponentCreator('/docs/2.5.2/define-chaos-experiment-scope/', 'f86'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/define-scheduling-rules/',
                component: ComponentCreator('/docs/2.5.2/define-scheduling-rules/', '2d5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/define-workflow-scheduling-rules/',
                component: ComponentCreator('/docs/2.5.2/define-workflow-scheduling-rules/', 'a14'),
                exact: true
              },
              {
                path: '/docs/2.5.2/developer-guide-overview/',
                component: ComponentCreator('/docs/2.5.2/developer-guide-overview/', '8f4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/extend-chaos-daemon-interface/',
                component: ComponentCreator('/docs/2.5.2/extend-chaos-daemon-interface/', 'a4a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/extend-chaosd/',
                component: ComponentCreator('/docs/2.5.2/extend-chaosd/', '874'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/faqs/',
                component: ComponentCreator('/docs/2.5.2/faqs/', '6ba'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/gcp-authentication/',
                component: ComponentCreator('/docs/2.5.2/gcp-authentication/', '41e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/glossary/',
                component: ComponentCreator('/docs/2.5.2/glossary/', '79f'),
                exact: true
              },
              {
                path: '/docs/2.5.2/go-client/',
                component: ComponentCreator('/docs/2.5.2/go-client/', '92f'),
                exact: true
              },
              {
                path: '/docs/2.5.2/inspect-chaos-experiments/',
                component: ComponentCreator('/docs/2.5.2/inspect-chaos-experiments/', '4da'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/integrate-chaos-mesh-into-github-actions/',
                component: ComponentCreator('/docs/2.5.2/integrate-chaos-mesh-into-github-actions/', '31b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/java-client/',
                component: ComponentCreator('/docs/2.5.2/java-client/', 'e5f'),
                exact: true
              },
              {
                path: '/docs/2.5.2/manage-user-permissions/',
                component: ComponentCreator('/docs/2.5.2/manage-user-permissions/', '11e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/multi-data-center-scenario/',
                component: ComponentCreator('/docs/2.5.2/multi-data-center-scenario/', 'e9b'),
                exact: true
              },
              {
                path: '/docs/2.5.2/offline-installation/',
                component: ComponentCreator('/docs/2.5.2/offline-installation/', 'f52'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/persistence-dashboard/',
                component: ComponentCreator('/docs/2.5.2/persistence-dashboard/', '8b9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/production-installation-using-helm/',
                component: ComponentCreator('/docs/2.5.2/production-installation-using-helm/', '883'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/python-client/',
                component: ComponentCreator('/docs/2.5.2/python-client/', 'be8'),
                exact: true
              },
              {
                path: '/docs/2.5.2/quick-start/',
                component: ComponentCreator('/docs/2.5.2/quick-start/', 'd06'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/release-0.0.8/',
                component: ComponentCreator('/docs/2.5.2/release-0.0.8/', 'aee'),
                exact: true
              },
              {
                path: '/docs/2.5.2/release-0.0.9/',
                component: ComponentCreator('/docs/2.5.2/release-0.0.9/', '23a'),
                exact: true
              },
              {
                path: '/docs/2.5.2/release-1.0.0/',
                component: ComponentCreator('/docs/2.5.2/release-1.0.0/', '903'),
                exact: true
              },
              {
                path: '/docs/2.5.2/release-2.0.0/',
                component: ComponentCreator('/docs/2.5.2/release-2.0.0/', '46b'),
                exact: true
              },
              {
                path: '/docs/2.5.2/release-2.5-tracking/',
                component: ComponentCreator('/docs/2.5.2/release-2.5-tracking/', '3b0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/release-cycle/',
                component: ComponentCreator('/docs/2.5.2/release-cycle/', '443'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/remote-cluster-management/',
                component: ComponentCreator('/docs/2.5.2/remote-cluster-management/', 'ed8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/run-a-chaos-experiment/',
                component: ComponentCreator('/docs/2.5.2/run-a-chaos-experiment/', '21b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/run-serial-or-parallel-experiments/',
                component: ComponentCreator('/docs/2.5.2/run-serial-or-parallel-experiments/', '5f4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/rust-client/',
                component: ComponentCreator('/docs/2.5.2/rust-client/', '3ab'),
                exact: true
              },
              {
                path: '/docs/2.5.2/send-http-request-on-workflow/',
                component: ComponentCreator('/docs/2.5.2/send-http-request-on-workflow/', '583'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/simulate-aws-chaos/',
                component: ComponentCreator('/docs/2.5.2/simulate-aws-chaos/', '4a1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/simulate-azure-chaos/',
                component: ComponentCreator('/docs/2.5.2/simulate-azure-chaos/', '106'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/simulate-block-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/2.5.2/simulate-block-chaos-on-kubernetes/', '236'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/simulate-disk-pressure-in-physical-nodes/',
                component: ComponentCreator('/docs/2.5.2/simulate-disk-pressure-in-physical-nodes/', '62b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/simulate-dns-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/2.5.2/simulate-dns-chaos-on-kubernetes/', '98a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/simulate-file-chaos-in-physical-nodes/',
                component: ComponentCreator('/docs/2.5.2/simulate-file-chaos-in-physical-nodes/', 'f38'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/simulate-gcp-chaos/',
                component: ComponentCreator('/docs/2.5.2/simulate-gcp-chaos/', '54d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/simulate-heavy-stress-in-physical-nodes/',
                component: ComponentCreator('/docs/2.5.2/simulate-heavy-stress-in-physical-nodes/', 'd60'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/simulate-heavy-stress-on-kubernetes/',
                component: ComponentCreator('/docs/2.5.2/simulate-heavy-stress-on-kubernetes/', '579'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/simulate-host-console-in-physical-nodes/',
                component: ComponentCreator('/docs/2.5.2/simulate-host-console-in-physical-nodes/', '763'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/simulate-http-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/2.5.2/simulate-http-chaos-on-kubernetes/', '124'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/simulate-io-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/2.5.2/simulate-io-chaos-on-kubernetes/', 'bcb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/simulate-jvm-application-chaos-in-physical-nodes/',
                component: ComponentCreator('/docs/2.5.2/simulate-jvm-application-chaos-in-physical-nodes/', 'acf'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/simulate-jvm-application-chaos/',
                component: ComponentCreator('/docs/2.5.2/simulate-jvm-application-chaos/', '4ed'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/simulate-kernel-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/2.5.2/simulate-kernel-chaos-on-kubernetes/', '82a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/simulate-network-chaos-in-physical-nodes/',
                component: ComponentCreator('/docs/2.5.2/simulate-network-chaos-in-physical-nodes/', '7b3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/simulate-network-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/2.5.2/simulate-network-chaos-on-kubernetes/', '8ee'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/simulate-physical-machine-chaos/',
                component: ComponentCreator('/docs/2.5.2/simulate-physical-machine-chaos/', '52f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/simulate-pod-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/2.5.2/simulate-pod-chaos-on-kubernetes/', '79b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/simulate-process-chaos-in-physical-nodes/',
                component: ComponentCreator('/docs/2.5.2/simulate-process-chaos-in-physical-nodes/', '1bc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/simulate-redis-chaos-on-physical-nodes/',
                component: ComponentCreator('/docs/2.5.2/simulate-redis-chaos-on-physical-nodes/', 'd7d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/simulate-time-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/2.5.2/simulate-time-chaos-on-kubernetes/', '888'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/simulate-time-chaos-on-physical-nodes/',
                component: ComponentCreator('/docs/2.5.2/simulate-time-chaos-on-physical-nodes/', '66c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/status-check-in-workflow/',
                component: ComponentCreator('/docs/2.5.2/status-check-in-workflow/', '16e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/troubleshooting-guide/',
                component: ComponentCreator('/docs/2.5.2/troubleshooting-guide/', '520'),
                exact: true
              },
              {
                path: '/docs/2.5.2/uninstallation/',
                component: ComponentCreator('/docs/2.5.2/uninstallation/', 'ac8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/upgrade-from-2.1-to-2.2/',
                component: ComponentCreator('/docs/2.5.2/upgrade-from-2.1-to-2.2/', '6bc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/upgrade-to-2.0/',
                component: ComponentCreator('/docs/2.5.2/upgrade-to-2.0/', 'd1b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/2.5.2/use-argo-to-orchestrate-chaos-experiments/',
                component: ComponentCreator('/docs/2.5.2/use-argo-to-orchestrate-chaos-experiments/', '94a'),
                exact: true
              },
              {
                path: '/docs/2.5.2/use-grafana-data-source/',
                component: ComponentCreator('/docs/2.5.2/use-grafana-data-source/', 'f52'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/next/',
        component: ComponentCreator('/docs/next/', '1b6'),
        routes: [
          {
            path: '/docs/next/',
            component: ComponentCreator('/docs/next/', '1c0'),
            routes: [
              {
                path: '/docs/next/',
                component: ComponentCreator('/docs/next/', '67d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/add-new-chaos-experiment-type/',
                component: ComponentCreator('/docs/next/add-new-chaos-experiment-type/', '01f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/basic-features/',
                component: ComponentCreator('/docs/next/basic-features/', '2b7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/chaos-engineering-principles/',
                component: ComponentCreator('/docs/next/chaos-engineering-principles/', '8d8'),
                exact: true
              },
              {
                path: '/docs/next/chaosctl-tool/',
                component: ComponentCreator('/docs/next/chaosctl-tool/', '715'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/chaosd-overview/',
                component: ComponentCreator('/docs/next/chaosd-overview/', '4ed'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/chaosd-search-recover/',
                component: ComponentCreator('/docs/next/chaosd-search-recover/', '965'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/check-workflow-status/',
                component: ComponentCreator('/docs/next/check-workflow-status/', '1bd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/clean-up-chaos-experiments/',
                component: ComponentCreator('/docs/next/clean-up-chaos-experiments/', 'ffd'),
                exact: true
              },
              {
                path: '/docs/next/common/quick-run/',
                component: ComponentCreator('/docs/next/common/quick-run/', '3aa'),
                exact: true
              },
              {
                path: '/docs/next/common/verify-installation/',
                component: ComponentCreator('/docs/next/common/verify-installation/', '9ea'),
                exact: true
              },
              {
                path: '/docs/next/configure-development-environment/',
                component: ComponentCreator('/docs/next/configure-development-environment/', 'e75'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/configure-enabled-namespace/',
                component: ComponentCreator('/docs/next/configure-enabled-namespace/', 'eb5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/create-chaos-mesh-workflow/',
                component: ComponentCreator('/docs/next/create-chaos-mesh-workflow/', '581'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/define-chaos-experiment-scope/',
                component: ComponentCreator('/docs/next/define-chaos-experiment-scope/', '310'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/define-scheduling-rules/',
                component: ComponentCreator('/docs/next/define-scheduling-rules/', 'e6c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/define-workflow-scheduling-rules/',
                component: ComponentCreator('/docs/next/define-workflow-scheduling-rules/', '6a8'),
                exact: true
              },
              {
                path: '/docs/next/developer-guide-overview/',
                component: ComponentCreator('/docs/next/developer-guide-overview/', 'fc6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/expose-dashboard-with-ingress/',
                component: ComponentCreator('/docs/next/expose-dashboard-with-ingress/', 'b6f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/extend-chaos-daemon-interface/',
                component: ComponentCreator('/docs/next/extend-chaos-daemon-interface/', '49b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/extend-chaosd/',
                component: ComponentCreator('/docs/next/extend-chaosd/', '324'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/faqs/',
                component: ComponentCreator('/docs/next/faqs/', 'bce'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/gcp-authentication/',
                component: ComponentCreator('/docs/next/gcp-authentication/', 'd53'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/glossary/',
                component: ComponentCreator('/docs/next/glossary/', 'b81'),
                exact: true
              },
              {
                path: '/docs/next/go-client/',
                component: ComponentCreator('/docs/next/go-client/', '22e'),
                exact: true
              },
              {
                path: '/docs/next/inspect-chaos-experiments/',
                component: ComponentCreator('/docs/next/inspect-chaos-experiments/', 'e1b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/integrate-chaos-mesh-into-github-actions/',
                component: ComponentCreator('/docs/next/integrate-chaos-mesh-into-github-actions/', 'eaa'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/java-client/',
                component: ComponentCreator('/docs/next/java-client/', '7b3'),
                exact: true
              },
              {
                path: '/docs/next/manage-user-permissions/',
                component: ComponentCreator('/docs/next/manage-user-permissions/', '74f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/multi-data-center-scenario/',
                component: ComponentCreator('/docs/next/multi-data-center-scenario/', '98d'),
                exact: true
              },
              {
                path: '/docs/next/offline-installation/',
                component: ComponentCreator('/docs/next/offline-installation/', '919'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/persistence-dashboard/',
                component: ComponentCreator('/docs/next/persistence-dashboard/', '668'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/production-installation-using-helm/',
                component: ComponentCreator('/docs/next/production-installation-using-helm/', '454'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/python-client/',
                component: ComponentCreator('/docs/next/python-client/', 'c87'),
                exact: true
              },
              {
                path: '/docs/next/quick-start/',
                component: ComponentCreator('/docs/next/quick-start/', '2f5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/release-0.0.8/',
                component: ComponentCreator('/docs/next/release-0.0.8/', '7ef'),
                exact: true
              },
              {
                path: '/docs/next/release-0.0.9/',
                component: ComponentCreator('/docs/next/release-0.0.9/', '4ca'),
                exact: true
              },
              {
                path: '/docs/next/release-1.0.0/',
                component: ComponentCreator('/docs/next/release-1.0.0/', 'ad7'),
                exact: true
              },
              {
                path: '/docs/next/release-2.0.0/',
                component: ComponentCreator('/docs/next/release-2.0.0/', 'f0f'),
                exact: true
              },
              {
                path: '/docs/next/release-2.5-tracking/',
                component: ComponentCreator('/docs/next/release-2.5-tracking/', '91c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/release-cycle/',
                component: ComponentCreator('/docs/next/release-cycle/', '5e8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/remote-cluster-management/',
                component: ComponentCreator('/docs/next/remote-cluster-management/', '2a7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/run-a-chaos-experiment/',
                component: ComponentCreator('/docs/next/run-a-chaos-experiment/', 'e21'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/run-serial-or-parallel-experiments/',
                component: ComponentCreator('/docs/next/run-serial-or-parallel-experiments/', '822'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/rust-client/',
                component: ComponentCreator('/docs/next/rust-client/', 'a99'),
                exact: true
              },
              {
                path: '/docs/next/send-http-request-on-workflow/',
                component: ComponentCreator('/docs/next/send-http-request-on-workflow/', '43a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/simulate-aws-chaos/',
                component: ComponentCreator('/docs/next/simulate-aws-chaos/', 'e0e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/simulate-azure-chaos/',
                component: ComponentCreator('/docs/next/simulate-azure-chaos/', 'c65'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/simulate-block-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/next/simulate-block-chaos-on-kubernetes/', '690'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/simulate-disk-pressure-in-physical-nodes/',
                component: ComponentCreator('/docs/next/simulate-disk-pressure-in-physical-nodes/', '391'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/simulate-dns-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/next/simulate-dns-chaos-on-kubernetes/', '7b3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/simulate-file-chaos-in-physical-nodes/',
                component: ComponentCreator('/docs/next/simulate-file-chaos-in-physical-nodes/', '500'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/simulate-gcp-chaos/',
                component: ComponentCreator('/docs/next/simulate-gcp-chaos/', 'c70'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/simulate-heavy-stress-in-physical-nodes/',
                component: ComponentCreator('/docs/next/simulate-heavy-stress-in-physical-nodes/', '25f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/simulate-heavy-stress-on-kubernetes/',
                component: ComponentCreator('/docs/next/simulate-heavy-stress-on-kubernetes/', '283'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/simulate-host-console-in-physical-nodes/',
                component: ComponentCreator('/docs/next/simulate-host-console-in-physical-nodes/', 'b5e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/simulate-http-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/next/simulate-http-chaos-on-kubernetes/', '32b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/simulate-io-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/next/simulate-io-chaos-on-kubernetes/', 'b1f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/simulate-jvm-application-chaos-in-physical-nodes/',
                component: ComponentCreator('/docs/next/simulate-jvm-application-chaos-in-physical-nodes/', '524'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/simulate-jvm-application-chaos/',
                component: ComponentCreator('/docs/next/simulate-jvm-application-chaos/', '2b4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/simulate-kernel-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/next/simulate-kernel-chaos-on-kubernetes/', 'c26'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/simulate-network-chaos-in-physical-nodes/',
                component: ComponentCreator('/docs/next/simulate-network-chaos-in-physical-nodes/', 'a34'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/simulate-network-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/next/simulate-network-chaos-on-kubernetes/', '955'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/simulate-physical-machine-chaos/',
                component: ComponentCreator('/docs/next/simulate-physical-machine-chaos/', '3bd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/simulate-pod-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/next/simulate-pod-chaos-on-kubernetes/', '0db'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/simulate-process-chaos-in-physical-nodes/',
                component: ComponentCreator('/docs/next/simulate-process-chaos-in-physical-nodes/', '870'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/simulate-redis-chaos-on-physical-nodes/',
                component: ComponentCreator('/docs/next/simulate-redis-chaos-on-physical-nodes/', '6cd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/simulate-time-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/next/simulate-time-chaos-on-kubernetes/', 'e97'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/simulate-time-chaos-on-physical-nodes/',
                component: ComponentCreator('/docs/next/simulate-time-chaos-on-physical-nodes/', '484'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/status-check-in-workflow/',
                component: ComponentCreator('/docs/next/status-check-in-workflow/', '406'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/troubleshooting-guide/',
                component: ComponentCreator('/docs/next/troubleshooting-guide/', '6a8'),
                exact: true
              },
              {
                path: '/docs/next/uninstallation/',
                component: ComponentCreator('/docs/next/uninstallation/', 'b4e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/upgrade-from-2.1-to-2.2/',
                component: ComponentCreator('/docs/next/upgrade-from-2.1-to-2.2/', '0a9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/upgrade-to-2.0/',
                component: ComponentCreator('/docs/next/upgrade-to-2.0/', '4df'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/next/use-argo-to-orchestrate-chaos-experiments/',
                component: ComponentCreator('/docs/next/use-argo-to-orchestrate-chaos-experiments/', '813'),
                exact: true
              },
              {
                path: '/docs/next/use-grafana-data-source/',
                component: ComponentCreator('/docs/next/use-grafana-data-source/', '566'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '52c'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', 'ec5'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', 'dbb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/add-new-chaos-experiment-type/',
                component: ComponentCreator('/docs/add-new-chaos-experiment-type/', '082'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/basic-features/',
                component: ComponentCreator('/docs/basic-features/', '324'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/chaos-engineering-principles/',
                component: ComponentCreator('/docs/chaos-engineering-principles/', '59d'),
                exact: true
              },
              {
                path: '/docs/chaosctl-tool/',
                component: ComponentCreator('/docs/chaosctl-tool/', 'b0b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/chaosd-overview/',
                component: ComponentCreator('/docs/chaosd-overview/', '5b8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/chaosd-search-recover/',
                component: ComponentCreator('/docs/chaosd-search-recover/', 'd51'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/check-workflow-status/',
                component: ComponentCreator('/docs/check-workflow-status/', '62c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/clean-up-chaos-experiments/',
                component: ComponentCreator('/docs/clean-up-chaos-experiments/', '143'),
                exact: true
              },
              {
                path: '/docs/common/quick-run/',
                component: ComponentCreator('/docs/common/quick-run/', 'd4f'),
                exact: true
              },
              {
                path: '/docs/common/verify-installation/',
                component: ComponentCreator('/docs/common/verify-installation/', 'b88'),
                exact: true
              },
              {
                path: '/docs/configure-development-environment/',
                component: ComponentCreator('/docs/configure-development-environment/', '317'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/configure-enabled-namespace/',
                component: ComponentCreator('/docs/configure-enabled-namespace/', 'd82'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/create-chaos-mesh-workflow/',
                component: ComponentCreator('/docs/create-chaos-mesh-workflow/', 'f35'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/define-chaos-experiment-scope/',
                component: ComponentCreator('/docs/define-chaos-experiment-scope/', 'f0c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/define-scheduling-rules/',
                component: ComponentCreator('/docs/define-scheduling-rules/', 'd11'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/define-workflow-scheduling-rules/',
                component: ComponentCreator('/docs/define-workflow-scheduling-rules/', '7c8'),
                exact: true
              },
              {
                path: '/docs/developer-guide-overview/',
                component: ComponentCreator('/docs/developer-guide-overview/', 'dfd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/expose-dashboard-with-ingress/',
                component: ComponentCreator('/docs/expose-dashboard-with-ingress/', '9cb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/extend-chaos-daemon-interface/',
                component: ComponentCreator('/docs/extend-chaos-daemon-interface/', '3df'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/extend-chaosd/',
                component: ComponentCreator('/docs/extend-chaosd/', '53f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/faqs/',
                component: ComponentCreator('/docs/faqs/', '6b1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/gcp-authentication/',
                component: ComponentCreator('/docs/gcp-authentication/', '797'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/glossary/',
                component: ComponentCreator('/docs/glossary/', '868'),
                exact: true
              },
              {
                path: '/docs/go-client/',
                component: ComponentCreator('/docs/go-client/', '3c3'),
                exact: true
              },
              {
                path: '/docs/inspect-chaos-experiments/',
                component: ComponentCreator('/docs/inspect-chaos-experiments/', 'b45'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/integrate-chaos-mesh-into-github-actions/',
                component: ComponentCreator('/docs/integrate-chaos-mesh-into-github-actions/', '410'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/java-client/',
                component: ComponentCreator('/docs/java-client/', '740'),
                exact: true
              },
              {
                path: '/docs/manage-user-permissions/',
                component: ComponentCreator('/docs/manage-user-permissions/', 'f0e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/multi-data-center-scenario/',
                component: ComponentCreator('/docs/multi-data-center-scenario/', '2ed'),
                exact: true
              },
              {
                path: '/docs/offline-installation/',
                component: ComponentCreator('/docs/offline-installation/', '7b5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/persistence-dashboard/',
                component: ComponentCreator('/docs/persistence-dashboard/', 'e52'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/production-installation-using-helm/',
                component: ComponentCreator('/docs/production-installation-using-helm/', '4b1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/python-client/',
                component: ComponentCreator('/docs/python-client/', 'b14'),
                exact: true
              },
              {
                path: '/docs/quick-start/',
                component: ComponentCreator('/docs/quick-start/', '33d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/release-0.0.8/',
                component: ComponentCreator('/docs/release-0.0.8/', 'bb4'),
                exact: true
              },
              {
                path: '/docs/release-0.0.9/',
                component: ComponentCreator('/docs/release-0.0.9/', '677'),
                exact: true
              },
              {
                path: '/docs/release-1.0.0/',
                component: ComponentCreator('/docs/release-1.0.0/', '67f'),
                exact: true
              },
              {
                path: '/docs/release-2.0.0/',
                component: ComponentCreator('/docs/release-2.0.0/', '00a'),
                exact: true
              },
              {
                path: '/docs/release-2.5-tracking/',
                component: ComponentCreator('/docs/release-2.5-tracking/', '83e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/release-cycle/',
                component: ComponentCreator('/docs/release-cycle/', '62c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/remote-cluster-management/',
                component: ComponentCreator('/docs/remote-cluster-management/', 'cc0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/run-a-chaos-experiment/',
                component: ComponentCreator('/docs/run-a-chaos-experiment/', '9ce'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/run-serial-or-parallel-experiments/',
                component: ComponentCreator('/docs/run-serial-or-parallel-experiments/', '98e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/rust-client/',
                component: ComponentCreator('/docs/rust-client/', '69e'),
                exact: true
              },
              {
                path: '/docs/send-http-request-on-workflow/',
                component: ComponentCreator('/docs/send-http-request-on-workflow/', 'a4e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/simulate-aws-chaos/',
                component: ComponentCreator('/docs/simulate-aws-chaos/', '3fa'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/simulate-azure-chaos/',
                component: ComponentCreator('/docs/simulate-azure-chaos/', '798'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/simulate-block-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/simulate-block-chaos-on-kubernetes/', '89b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/simulate-disk-pressure-in-physical-nodes/',
                component: ComponentCreator('/docs/simulate-disk-pressure-in-physical-nodes/', '418'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/simulate-dns-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/simulate-dns-chaos-on-kubernetes/', 'b7f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/simulate-file-chaos-in-physical-nodes/',
                component: ComponentCreator('/docs/simulate-file-chaos-in-physical-nodes/', 'e5c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/simulate-gcp-chaos/',
                component: ComponentCreator('/docs/simulate-gcp-chaos/', '846'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/simulate-heavy-stress-in-physical-nodes/',
                component: ComponentCreator('/docs/simulate-heavy-stress-in-physical-nodes/', '8c5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/simulate-heavy-stress-on-kubernetes/',
                component: ComponentCreator('/docs/simulate-heavy-stress-on-kubernetes/', '29c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/simulate-host-console-in-physical-nodes/',
                component: ComponentCreator('/docs/simulate-host-console-in-physical-nodes/', '81e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/simulate-http-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/simulate-http-chaos-on-kubernetes/', '74a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/simulate-io-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/simulate-io-chaos-on-kubernetes/', 'eb3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/simulate-jvm-application-chaos-in-physical-nodes/',
                component: ComponentCreator('/docs/simulate-jvm-application-chaos-in-physical-nodes/', '991'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/simulate-jvm-application-chaos/',
                component: ComponentCreator('/docs/simulate-jvm-application-chaos/', '780'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/simulate-kernel-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/simulate-kernel-chaos-on-kubernetes/', '41b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/simulate-network-chaos-in-physical-nodes/',
                component: ComponentCreator('/docs/simulate-network-chaos-in-physical-nodes/', '07d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/simulate-network-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/simulate-network-chaos-on-kubernetes/', '8f0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/simulate-physical-machine-chaos/',
                component: ComponentCreator('/docs/simulate-physical-machine-chaos/', '8bf'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/simulate-pod-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/simulate-pod-chaos-on-kubernetes/', '132'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/simulate-process-chaos-in-physical-nodes/',
                component: ComponentCreator('/docs/simulate-process-chaos-in-physical-nodes/', 'c34'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/simulate-redis-chaos-on-physical-nodes/',
                component: ComponentCreator('/docs/simulate-redis-chaos-on-physical-nodes/', 'cb5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/simulate-time-chaos-on-kubernetes/',
                component: ComponentCreator('/docs/simulate-time-chaos-on-kubernetes/', '9ff'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/simulate-time-chaos-on-physical-nodes/',
                component: ComponentCreator('/docs/simulate-time-chaos-on-physical-nodes/', 'e1c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/status-check-in-workflow/',
                component: ComponentCreator('/docs/status-check-in-workflow/', '05c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/troubleshooting-guide/',
                component: ComponentCreator('/docs/troubleshooting-guide/', 'b28'),
                exact: true
              },
              {
                path: '/docs/uninstallation/',
                component: ComponentCreator('/docs/uninstallation/', '279'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/upgrade-from-2.1-to-2.2/',
                component: ComponentCreator('/docs/upgrade-from-2.1-to-2.2/', 'e56'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/upgrade-to-2.0/',
                component: ComponentCreator('/docs/upgrade-to-2.0/', 'f8b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/use-argo-to-orchestrate-chaos-experiments/',
                component: ComponentCreator('/docs/use-argo-to-orchestrate-chaos-experiments/', 'a9c'),
                exact: true
              },
              {
                path: '/docs/use-grafana-data-source/',
                component: ComponentCreator('/docs/use-grafana-data-source/', '159'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
