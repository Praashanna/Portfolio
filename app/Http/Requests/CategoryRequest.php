<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CategoryRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'meta_description' => ['required'],
            'image' => ['required'],
            'slug' => ['required'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
