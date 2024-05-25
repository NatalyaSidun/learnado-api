<?php

namespace App\Actions\Courses;

use App\Models\Course;

class UpdateCourse
{
    public function __invoke(
        Course $course,
        string $name,
        string $description,
    ): void {
        $course->fill([
            'name'        => $name,
            'description' => $description,
        ]);

        $course->save();
    }
}
