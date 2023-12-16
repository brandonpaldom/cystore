export const formatFirebaseDate = (date) => {
  const seconds = date.seconds * 1000
  const newDate = new Date(seconds)
  return newDate.toLocaleDateString('es-MX')
}
