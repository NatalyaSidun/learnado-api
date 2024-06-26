<?php

namespace App\Http\Resources\Courses;

use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin Course
 */
class CourseResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'                => $this->id,
            'name'              => $this->name,
            'description'       => $this->description,
            'start_date'        => $this->start_date,
            'end_date'          => $this->end_date,
            'price'             => $this->price,
        ];
    }
}
