# App Layer

`AppShell` is the top-level composition point.

Today it mounts the existing prototype so behavior stays stable. As the MVP hardens, route-level pages and providers can move here:

- auth/session provider
- API provider or query client
- router
- feature flags
- global error boundary
