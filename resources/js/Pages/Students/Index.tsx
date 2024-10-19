import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { PageProps, Student } from '@/types';
import { Inertia } from '@inertiajs/inertia';

interface StudentsIndexProps extends PageProps {
    students: Student[];
}

export default function StudentsIndex({ auth, students }: StudentsIndexProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Students</h2>}
        >
            <Head title="Students" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold">Student List</h3>
                                <Link
                                    href="/students/create"
                                    className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Add New Student
                                </Link>
                            </div>

                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {students.length > 0 ? (
                                        students.map((student) => (
                                            <tr key={student.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{student.age}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{student.class}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <Link
                                                        href={`/students/${student.id}/edit`}
                                                        className="text-indigo-600 hover:text-indigo-900"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={() => {
                                                            if (confirm('Are you sure you want to delete this student?')) {
                                                                Inertia.delete(`/students/${student.id}`);
                                                            }
                                                        }}
                                                        className="ml-2 text-red-600 hover:text-red-900"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={4} className="px-6 py-4 text-center text-gray-500">No students found.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
