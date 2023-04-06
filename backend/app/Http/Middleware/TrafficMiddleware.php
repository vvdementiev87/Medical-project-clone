<?php

namespace App\Http\Middleware;

use App\Models\Profile\Traffic;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TrafficMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $account = \auth()->id();
        $url = $request->url();
        $traffic = Traffic::firstOrCreate(['url' => $url,'user_id'=>$account]);
        if ($traffic->count) {
            $traffic->count++;
        }
        $traffic->save();

        return $next($request);
    }
}
