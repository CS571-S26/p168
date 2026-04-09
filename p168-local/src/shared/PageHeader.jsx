import Stack from 'react-bootstrap/Stack'

export default function PageHeader({ title, subtitle }) {
  return (
    <Stack gap={1} className="mb-4 text-start">
      <h1 className="display-6 m-0">{title}</h1>
      {subtitle ? <p className="text-secondary m-0">{subtitle}</p> : null}
    </Stack>
  )
}

