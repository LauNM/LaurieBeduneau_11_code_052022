import {Link} from "react-router-dom";

function Error() {
  return (
    <div className={'error '}>
      <p className={'type-error'}>404</p>
      <h1 className={'title'}>Oups! La page que vous demandez n'existe pas</h1>
      <Link to={'/'} className={'link'}>Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Error