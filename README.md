# Backend One

NestJS microservice exposing:

```text
GET /api/service-one/hello
```

This repository owns the **shared Kubernetes Ingress** for both Backend One and Backend Two.

## Azure DevOps variable group

Create:

```text
backend-one-variables
```

Suggested variables:

```text
AZURE_SERVICE_CONNECTION
ACR_SERVICE_CONNECTION
AKS_RESOURCE_GROUP
AKS_CLUSTER_NAME
K8S_NAMESPACE
BACKEND_ONE_IMAGE_URI
BACKEND_ONE_PORT
BACKEND_ONE_MESSAGE
ENVIRONMENT
BACKEND_ONE_REPLICA_COUNT
BACKEND_ONE_CPU
BACKEND_ONE_MEMORY
```

`.env.prod` uses:

```text
{{VARIABLE}}
```

`helm/backend-one/values.yaml` uses:

```text
$(VARIABLE)
```
