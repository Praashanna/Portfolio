<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        //
    })
    ->withExceptions(function (Exceptions $exceptions) {
        $apiException = [
            "status_code" => 500,
            "message" => "Internal Server Error",
        ];
        $exceptions->render(function (HttpResponseException $e, Request $request) use ($apiException) {
            $apiException['status_code'] = $e->getCode();
            $apiException['message'] = $e->getMessage();
            return response()->json($apiException, $apiException['status_code']);
        });

        $exceptions->render(function (\Illuminate\Auth\AuthenticationException $e, Request $request) use ($apiException) {
            $apiException['status_code'] = $e->getCode();
            $apiException['message'] = $e->getMessage();
            return response()->json($apiException, $apiException['status_code']);
        });

        $exceptions->render(function (ValidationException $e, Request $request) use ($apiException) {
            $apiException['status_code'] = 422;
            $apiException['message'] = $e->getMessage();
            return response()->json($apiException, $apiException['status_code']);
        });

        $exceptions->render(function (\Symfony\Component\HttpKernel\Exception\HttpException $e, Request $request) use ($apiException) {
            $apiException['status_code'] = $e->getStatusCode();
            $apiException['message'] = $e->getMessage();
            return response()->json($apiException, $apiException['status_code']);
        });

    })->create();
