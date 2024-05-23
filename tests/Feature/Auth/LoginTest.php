<?php

use App\Models\User;
use Illuminate\Support\Facades\Hash;

test('users can authenticate and get back the user object and access token', function () {
    $user = User::factory()->create([
        'password' => Hash::make($password = 'password'),
    ]);

    $response = $this->postJson('/api/auth/sign-in', [
        'email'    => $user->email,
        'password' => $password,
    ]);

    $this->assertAuthenticatedAs($user);
    $response->assertSuccessful();
    $response->assertJsonStructure([
        'user',
        'token',
    ]);
});
