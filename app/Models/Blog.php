<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Blog extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'content',
        'slug',
        'meta_title',
        'meta_description',
        'image',
    ];

    protected function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    protected function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
