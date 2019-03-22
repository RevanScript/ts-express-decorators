# Scope

The scope of a [provider](/docs/provider.md) defines the life cycle and visibility of that bean in the contexts in which it's used.

Ts.ED define 3 types of @@Scope@@:

- `singleton`,
- `request`,
- `instance`

The scope annotation can be used on the following providers:

- [Service](/docs/services.md)
- [Controller](/docs/controllers.md)
- [Middleware](/docs/middlewares.md)

## Singleton scope

Singleton scope is the default behavior of all providers. That means all providers are create on the server initialization.

<<< @/docs/docs/snippets/providers/scope-singleton.ts

::: tip Note
In this example all request on `/random` endpoint return the same random value.
:::

## Request scope

Request scope will create a new instance of provider for each request. A new container will be created
and attached to the request. It'll contains all provider annotated by `@Scope(ProviderScope.REQUEST)`.

<<< @/docs/docs/snippets/providers/scope-singleton.ts

Each request on `/random` will return a different random value.

### Chain with Service

It also possible to use `@Scope(ProviderScope.REQUEST)` on service if your service is injected on a controller
which is annotated by `@Scope(ProviderScope.REQUEST)` too.

Here a working example:

<<< @/docs/docs/snippets/providers/scope-chain.ts

And here a unworking example:

<<< @/docs/docs/snippets/providers/scope-chain-fail.ts

::: warning
The `SINGLETON` annotation avoid the `@Scope(ProviderScope.REQUEST)` annotation put on MyService.
:::

::: warning
The `@Scope(ProviderScope.REQUEST)` annotation has no effect on Global middlewares.
:::
