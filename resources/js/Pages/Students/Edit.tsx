import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { PageProps, Student } from '@/types';


interface EditStudentProps extends PageProps {
    student: Student;
}

export default function EditStudent({ auth, student }: EditStudentProps) {
    const { data, setData, put, processing, errors } = useForm({
        name: student.name,
        age: student.age,
        sex: student.sex,
        email: student.email,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/students/${student.id}`);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Student</h2>}
        >
            <Head title="Edit Student" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-6">Edit Student Form</h3>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs italic mt-2">{errors.name}</p>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                                        Age
                                    </label>
                                    <input
                                        id="age"
                                        type="number"
                                        value={data.age}
                                        onChange={(e) => setData('age', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.age && <p className="text-red-500 text-xs italic mt-2">{errors.age}</p>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="class">
                                        Email
                                    </label>
                                    <input
                                        id="class"
                                        type="text"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs italic mt-2">{errors.email}</p>}
                                </div>

                                <div className="flex items-center justify-between">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        Update Student
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
