import { Link, InertiaLinkProps } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                '' +
                (active
                    ? 'text-indigo-400 border-indigo-400 -focus:border-indigo-700 '
                    : 'border-transparent  focus:border-gray-300 text-gray-400 hover:text-gray-300 cursor-pointer ') +
                className
            }
        >
            {children}
        </Link>
    );
}
