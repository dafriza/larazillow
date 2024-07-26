<?php

namespace App\Http\Controllers;

use Hash;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserAccountController extends Controller
{
    function create()
    {
        return inertia('UserAccount/Create');
    }
    function store(Request $request)
    {
        $user = User::create(
            $request->validate([
                'name' => 'required|string',
                'email' => 'required|email|unique:users',
                'password' => 'required|confirmed',
            ]),
        );
        Auth::login($user);
        return redirect()->route('listing.index')->with('success', 'Account created!');
    }
}
