<?php

namespace App\Http\Requests\Courses;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateCourseRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name'  => ['string', 'max:255'],
            'description' => ['email', 'max:1500000'],
        ];
    }
}
