import clsx from 'clsx'

export default function Button({
  children,
  color = 'primary',
  size = 'default',
  width = 'min',
  type = 'button',
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
        color === 'danger' && 'btn-danger',
        width === 'min' && 'w-max',
        width === 'full' && 'w-full',
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
