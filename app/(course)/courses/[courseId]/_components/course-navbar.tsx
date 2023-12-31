import { Chapter, Course, UserProgress } from "@prisma/client";
import CourseMobileSideBar from "./course-mobile-sidebar";
import { NavbarRoutes } from "@/components/navbar-routes";

interface CourseNavbarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}

export const CourseNavbar = ({ course, progressCount }: CourseNavbarProps) => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <CourseMobileSideBar course={course} progressCount={progressCount} />
      <NavbarRoutes />
    </div>
  );
};
