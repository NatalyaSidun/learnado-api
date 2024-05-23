<?php

namespace App\Http\Controllers\Auth;

use App\Actions\Users\CreateUser;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\LoginWithTokenRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Resources\Users\UserResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function register(RegisterRequest $request, CreateUser $createUser): JsonResponse
    {
        $createUser(
            name: $request->input('name'),
            email: $request->input('email'),
            password: $request->input('password'),
        );

        return response()->json([
            'status' => 'user-created',
        ]);
    }

    public function login(LoginRequest $request): JsonResponse
    {

        $credentials = $request->only(['email', 'password']);

        $token = Auth::attempt($credentials);

        if (! $token) {
            return response()->json([
                'status' => 'invalid-credentials',
            ], 401);
        }
        return response()->json([
            'user'         => new UserResource(Auth::user()),
            'token' => $token,
            'tokenType' => 'bearer',
        ]);
    }

    public function login_with_token(LoginWithTokenRequest $request): JsonResponse
    {
        $credentials = $request->only(['token']);
        try {
            $token_data = JWTAuth::parseToken()->authenticate($credentials['token']);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'invalid-credentials',
            ], 401);
        }
        if (! $token_data) {
            return response()->json([
                'status' => 'invalid-credentials',
            ], 401);
        }
        return response()->json([
            'user'         => new UserResource(Auth::user()),
            'token' => $credentials['token'],
            'tokenType' => 'bearer',
        ]);
    }

    public function logout(): Response
    {
        Auth::logout();

        return response()->noContent();
    }

    public function refresh(): JsonResponse
    {
        $token = Auth::refresh();

        return response()->json([
            'token' => $token,
        ]);
    }
}
