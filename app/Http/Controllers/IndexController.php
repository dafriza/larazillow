<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    function index()
    {
        return inertia('Index', [
            'message' => 'Hello World',
        ]);
        // return 'hehe';
    }
    function show()
    {
        return inertia('Show');
    }
}
