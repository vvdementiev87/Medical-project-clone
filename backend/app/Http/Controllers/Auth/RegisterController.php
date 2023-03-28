<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;

use App\Models\User;
use App\Http\Requests\Users\CreateRequest;

class RegisterController
{
    /**
     * @param  array $data
     * @return User $user
     */
    protected function create(array $data)
    {
        return User::create([
            'last_name' => $data['last_name'],
            'first_name'=> $data['first_name'],
            'surname' => $data['surname'],
            'birth_date' => $data['birth_date'],
            'avatar' => $data['avatar'],
            'email'=> $data['email'],
            'phone' => $data['phone'],
            'address' => $data['address'],
            'education'=> $data['education'],
            'place_work' => $data['place_work'],
            'position'=> $data['position'],
            'category'=> $data['category'],
            'experience'=> $data['experience'],
            'other_info'=> $data['other_info'],
            'sign_for_news'=> $data['sign_for_news'],
            'password' => Hash::make($data['password']),
        ]);
    }

    /**
     * @param CreateRequest $request
     * @return JsonResponse
     *
     */
    public function register(CreateRequest $request,)
    {
        dd($request);
        $validate = $request->validated();

        $user = $this->create($validate);


        if($user) {
            return response()->json([
                'accessToken' => true,
                'user'=>$user
            ]);
        }

        return response()->json([
            'error' => false,
        ]);
    }
}
