export function Badge({ children, className = "", ...props }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
