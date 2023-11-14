import clsx from 'clsx'

export default function Button({ children, color = 'primary', ...props }) {
  return (
    <button
      className={clsx(
        'btn',
        color === 'primary' && 'btn-primary',
        color === 'secondary' && 'btn-secondary',
      )}
      {...props}
    >
      {children}
    </button>
  )
}
