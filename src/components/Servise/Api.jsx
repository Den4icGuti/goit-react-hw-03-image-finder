
async function fetchApi(name) { 
  const KEY_API = '25225743-62355b18deaf2a31912b18441';
  const type = 'image_type=photo';
  const orentation = 'orientation=horizontal';
  const perPage = 'per_page=12';

  return await fetch(`https://pixabay.com/api/?${KEY_API}1&q=${name}&${type}&page=1${orentation}&${perPage}`)
    .then(res => { 
      if (res.ok) { 
        return res.json()
      }
    })

}

export default fetchApi;