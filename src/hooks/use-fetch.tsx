import { useState, useCallback } from "react";

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  execute: (...args: any[]) => Promise<void>;
}

type FetchFunction<T> = (options: FetchOptions, ...args: any[]) => Promise<T>;

function useFetch<T>(
  fetchFn: FetchFunction<T>,
  initialOptions: FetchOptions = {},
): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(
    async (...args: any[]) => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchFn(initialOptions, ...args);
        setData(response);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("An unknown error occurred"),
        );
      } finally {
        setLoading(false);
      }
    },
    [fetchFn, initialOptions],
  );

  return { data, loading, error, execute };
}

export default useFetch;
