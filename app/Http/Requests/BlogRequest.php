<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BlogRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'content' => ['required'],
            'slug' => ['required'],
            'meta_title' => ['required'],
            'meta_description' => ['nullable'],
            'image' => ['required'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
