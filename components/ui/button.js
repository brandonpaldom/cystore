import clsx from 'clsx'

export default function Button({
  children,
  color = 'primary',
  size = 'default',
  ...props
}) {
  return (
    <button
      className={clsx(
        size === 'default' && 'btn',
        size === 'sm' && 'btn-sm',
        color === 'primary' && 'btn-primary',
        color === 'secondary' && 'btn-secondary',
        color === 'ghost' && 'btn-ghost',
      )}
      {...props}
    >
      {children}
    </button>
  )
}
