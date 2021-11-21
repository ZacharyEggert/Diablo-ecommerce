import type { NextFetchEvent, NextRequest } from 'next/server';

// export const middleware = (req: NextRequest, ev: NextFetchEvent) => {
//     return new Response()

export const middleware = (req: NextRequest, ev: NextFetchEvent) => {
    return ev.passThroughOnException();
}