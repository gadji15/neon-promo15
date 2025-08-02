"use client";
import useSWR from 'swr';
export interface OddsRow { match:string; values: Record<string,number>; }
const fetcher = (url:string)=>fetch(url).then(r=>r.json());
export default function useLiveOdds(){
  const { data, error } = useSWR('/api/odds', fetcher, { refreshInterval: 30000 });
  return { rows: data?.data as OddsRow[] ?? [], isLoading: !data && !error, error };
}