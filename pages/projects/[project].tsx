import { useRouter } from 'next/router'

export default function Project() {
  const router = useRouter()
  const { project } = router.query
  return <h1>{project}</h1>
}
