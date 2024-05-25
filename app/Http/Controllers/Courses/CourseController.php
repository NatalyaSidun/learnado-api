<?php

namespace App\Http\Controllers\Courses;

use App\Models\Course;
use App\Actions\Courses\UpdateCourse;
use App\Http\Requests\Courses\ShowCourseRequest;
use App\Http\Requests\Courses\UpdateCourseRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\Courses\CourseResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class CourseController extends Controller {

    public function show(ShowCourseRequest $request): CourseResource {
        $course_id = $request->input('course');
        return new CourseResource($course_id);
    }

    public function update(UpdateCourseRequest $request, UpdateCourse $updateCourse): CourseResource {

        $course =  new Course([$request->input('course')]);
        $updateCourse(
            course: $course,
            name: $request->input('name'),
            description: $request->input('description'),
        );

        return new CourseResource(Course::class->fresh());
    }

    public function show_list(): JsonResponse
    {
       $courses = Course::all()->toArray();
       $response = new JsonResponse($courses);
       return $response;
    }



}