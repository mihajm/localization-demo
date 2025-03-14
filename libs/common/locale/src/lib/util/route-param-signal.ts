import { inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

export function routeParam(
  param: string,
  fallback?: string
): Signal<string | null> {
  const route = inject(ActivatedRoute);

  return toSignal(
    route.paramMap.pipe(map((p) => p.get(param) ?? fallback ?? null)),
    {
      initialValue: route.snapshot.paramMap.get(param) ?? fallback ?? null,
    }
  );
}
