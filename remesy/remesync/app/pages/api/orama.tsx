import { OramaCloud, useSearch } from '@oramacloud/client/react'

export function SearchComponent() {
  const { results, error } = useSearch({
    term: 'Medical billing',
    limit: 5,
  })
console.log(results);
  if (error) {
    return <p>Error: {error.message}</p>
  }

  if (!results) {
    return <p>Loading...</p>
  }

  return (
    <ul>
      {results.hits.map((hit) => (
        <li key={hit.id}>
          {hit.id}
        </li>
      ))}
    </ul>
  )
}
