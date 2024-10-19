import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function CreateStudent({ auth }: PageProps) {
    // Using Inertia's useForm hook to manage form state
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        age: '',
        sex: '',
        avatar: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/students');
    };

    const handleSexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData('sex', e.target.value);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add New Student</h2>}
        >
            <Head title="Add Student" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Avatar</label>
                                    <input className="mt-1 shadow-sm px-3 py-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none focus:ring-blue-500 focus:border-blue-500 " id="file_input" type="file" />
                                    {errors.avatar && (
                                        <div className="text-red-600 text-sm mt-1">{errors.avatar}</div>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Student Name</label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                    {errors.name && (
                                        <div className="text-red-600 text-sm mt-1">{errors.name}</div>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium  text-gray-700">Email</label>
                                    <input
                                        type="text"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="mt-1 block w-full px-3 py-2 bg-gray-50  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                    {errors.email && (
                                        <div className="text-red-600 text-sm mt-1">{errors.email}</div>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Age</label>
                                    <input
                                        type="number"
                                        value={data.age}
                                        onChange={(e) => setData('age', e.target.value)}
                                        className="mt-1 block w-full px-3 py-2 bg-gray-50  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                    {errors.age && (
                                        <div className="text-red-600 text-sm mt-1">{errors.age}</div>
                                    )}
                                </div>



                                <div className="mb-4">
                                    <label className="block text-sm font-medium  text-gray-700">Sex</label>
                                    <div className="flex gap-4 mt-2">
                                        <div className="flex items-center">
                                            <input
                                                id="sex-male"
                                                type="radio"
                                                value="male"
                                                name="sex"
                                                className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                                                checked={data.sex === 'male'}
                                                onChange={handleSexChange}
                                            />
                                            <label htmlFor="sex-male" className="ms-2 text-sm font-medium text-gray-900">Male</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="sex-female"
                                                type="radio"
                                                value="female"
                                                name="sex"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                                                checked={data.sex === 'female'}
                                                onChange={handleSexChange}
                                            />
                                            <label htmlFor="sex-female" className="ms-2 text-sm font-medium text-gray-900">Female</label>
                                        </div>
                                    </div>
                                </div>



                                <div className="flex items-center justify-between">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-25"
                                    >
                                        {processing ? 'Saving...' : 'Save'}
                                    </button>

                                    <Link
                                        href="/students"
                                        className="text-sm text-gray-600 underline hover:text-gray-900"
                                    >
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
