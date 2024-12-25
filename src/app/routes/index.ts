/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { AdminRoutes } from '../module/Admin/admin.route';
import { AuthRoutes } from '../module/Auth/auth.route';
import { CourseRoutes } from '../module/Course/course.route';

import { EnrolledCourseRoutes } from '../module/EnrolledCourse/enrolledCourse.route';
import { FacultyRoutes } from '../module/Faculty/faculty.route';
import { offeredCourseRoutes } from '../module/OfferedCourse/OfferedCourse.route';
import { AcademicDepartmentRoutes } from '../module/academicDepartment/academicDepartment.route';
import { AcademicFacultyRoutes } from '../module/academicFaculty/academicFaculty.route';
import { AcademicSemesterRoutes } from '../module/academicSemester/academicSemester.route';
import { semesterRegistrationRoutes } from '../module/semesterRegistration/semesterRegistration.route';
import { StudentRoutes } from '../module/student/student.route';
import { UserRoutes } from '../module/user/user.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoutes,
  },
  {
    path: '/courses',
    route: CourseRoutes,
  },
  {
    path: '/semester-registrations',
    route: semesterRegistrationRoutes,
  },
  {
    path: '/offered-courses',
    route: offeredCourseRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/enrolled-courses',
    route: EnrolledCourseRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
